import justiceBotLogo from "@/assets/justice-bot-logo.jpeg";

const Footer = () => {
  return (
    <footer id="footer" className="bg-foreground text-background py-16" role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-8" role="navigation" aria-label="Footer navigation">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-background rounded-lg">
                <img 
                  src={justiceBotLogo} 
                  alt="Justice-Bot logo featuring scales of justice symbolizing legal balance and fairness" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-lg font-bold">Justice-Bot</span>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Cutting through legal noise so you can move forward with confidence.
            </p>
          </div>

          <nav aria-labelledby="services-heading">
            <h3 id="services-heading" className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="/triage" className="hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background/50 rounded">Smart Triage</a></li>
              <li><a href="/tribunal-locator" className="hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background/50 rounded">Court Locator</a></li>
              <li><a href="/forms" className="hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background/50 rounded">Legal Forms</a></li>
              <li><a href="/assessment" className="hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background/50 rounded">Merit Score</a></li>
              <li><a href="/pricing" className="hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background/50 rounded">Pricing</a></li>
              <li><a href="/low-income" className="hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background/50 rounded">Low-Income Program</a></li>
            </ul>
          </nav>

          <nav aria-labelledby="guides-heading">
            <h3 id="guides-heading" className="font-semibold mb-4">Popular Guides</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="/ltb-journey" className="hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background/50 rounded">LTB Applications</a></li>
              <li><a href="/hrto-journey" className="hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background/50 rounded">HRTO Complaints</a></li>
              <li><a href="/small-claims-journey" className="hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background/50 rounded">Small Claims Court</a></li>
              <li><a href="/tutorials" className="hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background/50 rounded">Video Tutorials</a></li>
              <li><a href="/templates" className="hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background/50 rounded">Document Templates</a></li>
              <li><a href="/explain" className="hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background/50 rounded">How It Works</a></li>
            </ul>
          </nav>

          <nav aria-labelledby="legal-heading">
            <h3 id="legal-heading" className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="/liability" className="hover:text-background transition-colors text-red-300 focus:outline-none focus:ring-2 focus:ring-background/50 rounded" aria-label="Legal liability and disclaimers">⚠️ Legal Liability</a></li>
              <li><a href="/terms" className="hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background/50 rounded">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background/50 rounded">Privacy Policy</a></li>
            </ul>
          </nav>

          <div>
            <h3 className="font-semibold mb-4">Coverage</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Ontario (Available Now)</li>
              <li>More Provinces Coming</li>
              <li>Mobile Optimized</li>
              <li>Free Beta Access</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          {/* Critical Legal Warnings Section */}
          <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
            <div className="text-center mb-3">
              <span className="text-red-300 font-bold text-lg">⚠️ CRITICAL LEGAL NOTICE ⚠️</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-xs text-background/90 leading-relaxed">
              <div>
                <p className="font-semibold text-red-300 mb-2">NOT LEGAL ADVICE:</p>
                <ul className="space-y-1 text-background/80">
                  <li>• Not a law firm or attorney service</li>
                  <li>• No lawyer-client relationship created</li>
                  <li>• Information for educational purposes only</li>
                  <li>• Always consult qualified legal counsel</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-red-300 mb-2">USE AT YOUR OWN RISK:</p>
                <ul className="space-y-1 text-background/80">
                  <li>• No liability for legal outcomes</li>
                  <li>• No warranty of accuracy or completeness</li>
                  <li>• User assumes all risks and liability</li>
                  <li>• Time-sensitive matters require immediate legal help</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 text-center">
              <p className="text-red-300 font-semibold text-xs">
                EMERGENCY? Contact: Legal Aid Ontario 1-800-668-8258 | Law Society Referral 1-855-947-5255
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/80">
              © 2024 Justice-Bot Technologies Inc. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-background/80">
              <a href="/liability" className="hover:text-background transition-colors text-red-300 font-semibold">⚠️ Liability & Disclaimers</a>
              <a href="/privacy" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-background transition-colors">Terms of Service</a>
            </div>
          </div>
          
          {/* Data Protection Notice */}
          <div className="mt-4 p-4 bg-background/10 rounded-lg">
            <p className="text-xs text-background/70 leading-relaxed">
              <strong>Data Protection & Privacy:</strong> Your personal information is protected with enterprise-grade encryption. 
              We comply with PIPEDA, GDPR, and implement HIPAA-level security standards. Data is stored in Canadian facilities 
              with strict access controls. We never sell your data. 
              <span className="font-semibold text-background/90"> By using this service, you acknowledge reading our complete 
              legal disclaimers and privacy policy.</span>
            </p>
          </div>

          {/* Regulatory Compliance */}
          <div className="mt-3 p-3 bg-background/5 rounded text-center">
            <p className="text-xs text-background/60">
              Licensed Technology Provider | PIPEDA Compliant | ISO 27001 Security Standards | 
              Accessible under AODA | Professional Liability Insured
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;