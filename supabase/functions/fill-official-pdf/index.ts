import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';
import { PDFDocument, StandardFonts, rgb } from 'https://cdn.skypack.dev/pdf-lib@1.17.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

// Official form URLs mapped to form codes
const OFFICIAL_FORM_URLS: Record<string, string> = {
  // LTB (Landlord and Tenant Board)
  'ON-LTB-T2': 'https://tribunalsontario.ca/documents/ltb/Tenant%20Applications%20&%20Instructions/T2.pdf',
  'ON-LTB-T6': 'https://tribunalsontario.ca/documents/ltb/Tenant%20Applications%20&%20Instructions/T6.pdf',
  'ON-LTB-L1': 'https://tribunalsontario.ca/documents/ltb/Landlord%20Applications%20&%20Instructions/L1.pdf',
  'ON-LTB-L2': 'https://tribunalsontario.ca/documents/ltb/Landlord%20Applications%20&%20Instructions/L2.pdf',
  
  // HRTO (Human Rights Tribunal of Ontario)
  'ON-HRTO-F1': 'https://tribunalsontario.ca/documents/hrto/Application%20Forms/Form%201%20Application.pdf',
  
  // Federal Court
  'FC-T-2062': 'https://www.fct-cf.ca/Content/assets/pdf/Forms/T2062%20-%20Statement%20of%20Claim%20(Action).pdf',
  'FC-T-2063': 'https://www.fct-cf.ca/Content/assets/pdf/Forms/T2063%20-%20Statement%20of%20Defence.pdf',
  
  // Supreme Court of Canada
  'SCC-ARF': 'https://www.scc-csc.ca/parties/arf-lrf/forms-formulaires/eng/Application-Record-Form.pdf',
  'SCC-LRF': 'https://www.scc-csc.ca/parties/arf-lrf/forms-formulaires/fre/Formulaire-de-dossier-de-demande.pdf',
  
  // Ontario Court of Justice - Criminal
  'OCJ-CRIM-FORM-9': 'https://www.ontariocourts.ca/ocj/files/forms/criminal/eng/Form9-Appearance-Notice.pdf',
  'OCJ-CRIM-FORM-10': 'https://www.ontariocourts.ca/ocj/files/forms/criminal/eng/Form10-Promise-to-Appear.pdf',
  
  // Small Claims Court
  'SCC-FORM-7A': 'https://ontariocourtforms.on.ca/static/media/7A.pdf',
  'SCC-FORM-9A': 'https://ontariocourtforms.on.ca/static/media/9A.pdf',
  'SCC-FORM-10A': 'https://ontariocourtforms.on.ca/static/media/10A.pdf',
  'SCC-FORM-11A': 'https://ontariocourtforms.on.ca/static/media/11A.pdf',
  'SCC-FORM-14A': 'https://ontariocourtforms.on.ca/static/media/14A.pdf',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { caseId, formCode, formData } = await req.json();
    
    console.log('Filling official PDF for case:', caseId, 'form:', formCode);

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Authenticate user
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) throw new Error('No authorization header');
    
    const token = authHeader.replace('Bearer ', '');
    const { data: userData, error: userError } = await supabase.auth.getUser(token);
    if (userError || !userData.user) throw new Error('User not authenticated');

    // Check premium access
    const { data: entitlements } = await supabase
      .from('entitlements')
      .select('product_id')
      .eq('user_id', userData.user.id);

    const hasPremiumAccess = entitlements && entitlements.length > 0;
    
    if (!hasPremiumAccess) {
      const { data: freeEligible } = await supabase.rpc('check_free_tier_eligibility');
      const hasFreeAccess = freeEligible === true;
      
      if (!hasFreeAccess) {
        return new Response(JSON.stringify({ 
          error: 'Premium access required for PDF generation',
          requiresPayment: true 
        }), {
          status: 403,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    // Get form template
    const { data: formTemplate } = await supabase
      .from('forms')
      .select('*')
      .eq('form_code', formCode)
      .single();

    if (!formTemplate) {
      throw new Error('Form template not found');
    }

    // Get official PDF URL
    const pdfUrl = OFFICIAL_FORM_URLS[formCode];
    
    if (!pdfUrl) {
      console.log('No official PDF found for', formCode, '- falling back to custom generation');
      return new Response(JSON.stringify({ 
        error: 'Official PDF not available for this form',
        fallbackToCustom: true 
      }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Download official PDF
    console.log('Downloading official PDF from:', pdfUrl);
    const pdfResponse = await fetch(pdfUrl);
    
    if (!pdfResponse.ok) {
      throw new Error(`Failed to download PDF: ${pdfResponse.statusText}`);
    }
    
    const pdfBytes = await pdfResponse.arrayBuffer();
    
    // Load the PDF
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const form = pdfDoc.getForm();
    
    // Get all form fields for debugging
    const fields = form.getFields();
    console.log('Available PDF form fields:', fields.map(f => f.getName()));

    // Fill PDF form fields based on formData
    // This mapping will need to be customized per form type
    try {
      fillPDFFields(form, formCode, formData);
    } catch (fillError) {
      console.error('Error filling PDF fields:', fillError);
      // Continue even if some fields fail
    }

    // Flatten the form to make it read-only
    form.flatten();

    // Save the filled PDF
    const filledPdfBytes = await pdfDoc.save();
    
    // Upload to Supabase Storage
    const fileName = `${formCode}_${caseId}_${Date.now()}.pdf`;
    const filePath = `filled-forms/${userData.user.id}/${fileName}`;
    
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('legal-docs')
      .upload(filePath, filledPdfBytes, {
        contentType: 'application/pdf',
        upsert: false
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      throw new Error(`Failed to upload PDF: ${uploadError.message}`);
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('legal-docs')
      .getPublicUrl(filePath);

    // Log form generation
    await supabase
      .from('form_usage')
      .insert({
        user_id: userData.user.id,
        case_id: caseId,
        form_id: formTemplate.id,
        field_data: formData,
        completion_status: 'pdf_generated'
      });

    return new Response(JSON.stringify({
      success: true,
      pdfUrl: urlData.publicUrl,
      fileName,
      formTitle: formTemplate.title,
      generatedAt: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in fill-official-pdf function:', error);
    return new Response(JSON.stringify({ 
      error: (error as Error).message,
      stack: (error as Error).stack 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function fillPDFFields(form: any, formCode: string, formData: any) {
  // Generic field mapping - customize per form type
  const fieldMappings: Record<string, string[]> = {
    // Common fields across forms
    'applicant_name': ['applicantName', 'name', 'fullName', 'appellant_name', 'plaintiff', 'claimant'],
    'applicant_address': ['address', 'applicantAddress', 'street_address', 'mailing_address'],
    'applicant_phone': ['phone', 'phoneNumber', 'telephone', 'contact_number'],
    'applicant_email': ['email', 'emailAddress', 'e_mail', 'contact_email'],
    'respondent_name': ['respondentName', 'defendant', 'landlordName', 'accused'],
    'incident_date': ['incidentDate', 'dateOfIncident', 'event_date', 'offence_date'],
    'description': ['description', 'details', 'particulars', 'statement_of_claim'],
    
    // LTB-specific
    'rental_address': ['rentalAddress', 'propertyAddress', 'rental_unit', 'premises'],
    'monthly_rent': ['monthlyRent', 'rent', 'rental_amount', 'rent_amount'],
    'lease_start': ['leaseStart', 'tenancy_start', 'lease_date'],
    
    // HRTO-specific
    'discrimination_ground': ['discriminationGround', 'ground', 'protected_ground', 'basis'],
    'social_area': ['socialArea', 'area', 'social_context'],
    
    // Federal Court specific
    'claim_amount': ['claimAmount', 'amount', 'damages_sought', 'relief_sought'],
    'statement_of_claim': ['statementOfClaim', 'claim', 'cause_of_action'],
    
    // Supreme Court specific
    'appeal_from': ['appealFrom', 'lower_court', 'appealed_decision'],
    'date_of_judgment': ['dateOfJudgment', 'judgment_date', 'decision_date'],
    
    // Criminal Court specific
    'charge': ['charge', 'offence', 'criminal_charge', 'count'],
    'court_file_number': ['courtFileNumber', 'file_number', 'case_number'],
    'appearance_date': ['appearanceDate', 'court_date', 'hearing_date'],
    
    // Small Claims specific
    'claim_date': ['claimDate', 'date_of_claim'],
    'plaintiff': ['plaintiff', 'claimant_name'],
    'defendant': ['defendant', 'respondent_name'],
    'amount_claimed': ['amountClaimed', 'claim_amount', 'damages'],
  };

  // Try to fill each field in formData
  for (const [dataKey, value] of Object.entries(formData)) {
    if (!value) continue;

    // Get possible PDF field names for this data key
    const possibleFieldNames = fieldMappings[dataKey] || [dataKey];

    // Try each possible field name
    for (const fieldName of possibleFieldNames) {
      try {
        const field = form.getTextField(fieldName);
        field.setText(String(value));
        console.log(`Filled field: ${fieldName} with value: ${value}`);
        break; // Stop trying once we successfully fill a field
      } catch {
        // Field doesn't exist, try next one
        continue;
      }
    }
  }

  // Handle checkboxes
  for (const [dataKey, value] of Object.entries(formData)) {
    if (typeof value === 'boolean') {
      const possibleFieldNames = fieldMappings[dataKey] || [dataKey];
      
      for (const fieldName of possibleFieldNames) {
        try {
          const checkbox = form.getCheckBox(fieldName);
          if (value) {
            checkbox.check();
          } else {
            checkbox.uncheck();
          }
          console.log(`Set checkbox: ${fieldName} to ${value}`);
          break;
        } catch {
          continue;
        }
      }
    }
  }
}
