import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, ExternalLink } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function OntarioSmallClaimsCourt2025() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Guide to Small Claims Court Ontario 2025",
    description:
      "A plain-language 2025 guide to Ontario Small Claims Court, including the $50,000 limit, forms, filing, service, settlement conferences, trial preparation, enforcement, and real-world examples.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    datePublished: "2025-11-01",
    dateModified: "2026-05-08",
    inLanguage: "en-CA",
    author: {
      "@type": "Organization",
      name: "Justice-Bot Canada",
    },
    publisher: {
      "@type": "Organization",
      name: "Justice-Bot",
      logo: {
        "@type": "ImageObject",
        url: "https://justice-bot.com/justice-bot-logo.jpeg",
      },
    },
    mainEntityOfPage: "https://justice-bot.com/blog/ontario-small-claims-court-2025",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://justice-bot.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://justice-bot.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Complete Guide to Small Claims Court Ontario 2025",
        item: "https://justice-bot.com/blog/ontario-small-claims-court-2025",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Small Claims Court limit in Ontario in 2025?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ontario's Small Claims Court monetary jurisdiction increased from $35,000 to $50,000 effective October 1, 2025. The $50,000 limit excludes interest and costs such as court fees.",
        },
      },
      {
        "@type": "Question",
        name: "What form starts a Small Claims Court case in Ontario?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A plaintiff usually starts a Small Claims Court case with Form 7A, Plaintiff's Claim. A defendant who wants to respond usually files Form 9A, Defence.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a defendant have to file a defence?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A defendant generally has 20 calendar days after being served with the claim to serve and file a defence.",
        },
      },
      {
        "@type": "Question",
        name: "Does winning mean the court collects the money for me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A judgment confirms what is owed, but the successful party may still need to take enforcement steps such as garnishment, a writ of seizure and sale, a writ of delivery, or an examination hearing.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to start a Small Claims Court case in Ontario",
    description:
      "General procedural steps for starting and managing an Ontario Small Claims Court case.",
    step: [
      { "@type": "HowToStep", name: "Check the claim type and amount" },
      { "@type": "HowToStep", name: "Gather evidence and calculate the claim" },
      { "@type": "HowToStep", name: "Complete Form 7A" },
      { "@type": "HowToStep", name: "File the claim with the court" },
      { "@type": "HowToStep", name: "Serve each defendant" },
      { "@type": "HowToStep", name: "File proof of service" },
      { "@type": "HowToStep", name: "Prepare for settlement conference and trial" },
      { "@type": "HowToStep", name: "Enforce the judgment if necessary" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Complete Guide to Small Claims Court Ontario 2025 | Justice-Bot</title>
        <meta
          name="description"
          content="Complete 2025 Ontario Small Claims Court guide: $50,000 limit, forms, filing, service, defence deadlines, settlement conferences, trial, enforcement, fees, and examples."
        />
        <meta
          name="keywords"
          content="Small Claims Court Ontario 2025, Ontario Small Claims Court guide, Form 7A, Form 9A, small claims filing Ontario, small claims settlement conference, Ontario court forms"
        />
        <link rel="canonical" href="https://justice-bot.com/blog/ontario-small-claims-court-2025" />
        <meta property="og:title" content="Complete Guide to Small Claims Court Ontario 2025" />
        <meta
          property="og:description"
          content="Plain-language guide for self-represented people in Ontario Small Claims Court, updated for the 2025 $50,000 limit."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://justice-bot.com/blog/ontario-small-claims-court-2025" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1589829545856-d10d557cf95f" />
        <meta name="author" content="Justice-Bot Canada" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Updated May 2026
              </span>
              <span>·</span>
              <span>Justice-Bot Canada</span>
              <span>·</span>
              <span className="text-primary">Legal Information for Self-Represented Litigants</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Complete Guide to Small Claims Court Ontario 2025
            </h1>
            <p className="text-xl text-muted-foreground">
              A practical, plain-language guide to Ontario Small Claims Court, including the 2025 limit increase, forms, deadlines, settlement, trial, enforcement, and real-world examples.
            </p>
          </header>

          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
            alt="Courthouse columns representing civil court procedure"
            className="w-full rounded-lg mb-8 object-cover max-h-[420px]"
          />

          <Alert className="mb-8 border-primary/30 bg-primary/5">
            <AlertDescription className="text-base leading-relaxed">
              <strong>Legal information only:</strong> This guide explains Ontario Small Claims Court procedure in plain language. It is not legal advice, and Justice-Bot is not a law firm. Always check the official court forms, rules, and deadlines for your situation before filing anything.
            </AlertDescription>
          </Alert>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-4">Quick answer: what changed in 2025?</h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                The biggest 2025 change is the monetary limit. Ontario's Small Claims Court limit increased from <strong>$35,000 to $50,000</strong>, effective <strong>October 1, 2025</strong>. The appeal threshold also increased from <strong>$3,500 to $5,000</strong>. That means more unpaid invoice claims, contractor disputes, property damage claims, consumer disputes, and debt claims can now stay in Small Claims Court instead of moving into the more complex Superior Court process.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                The court can generally deal with claims for money or the return of personal property where the amount claimed does not exceed $50,000, excluding interest and court costs. If your loss is higher than $50,000, you may be able to abandon the amount above the limit and continue in Small Claims Court, but that decision should be made carefully because you give up the excess amount.
              </p>
            </CardContent>
          </Card>

          <section className="prose prose-lg max-w-none mb-8">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-primary pl-4">What is Small Claims Court in Ontario?</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Small Claims Court is a branch of the Ontario Superior Court of Justice. It is designed for civil disputes that are lower in value and less procedurally heavy than regular Superior Court actions. That does not mean it is casual. It is still court. The rules still matter. Deadlines still matter. Evidence still matters. The judge or deputy judge will not simply accept a story because it sounds unfair.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Common Small Claims Court cases include unpaid loans, unpaid invoices, breach of contract, property damage, poor workmanship, failed repairs, consumer disputes, return of personal property, and some negligence claims. Small Claims Court does not handle everything. Family law, criminal charges, immigration claims, most residential landlord and tenant disputes, and many employment or administrative matters may belong somewhere else.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              For self-represented people, the advantage is that the process is more accessible than regular civil court. The disadvantage is that you still have to organize your case like an adult in a paper storm. You need the right party names, the right forms, service, evidence, a clear timeline, and a practical plan for collection if you win.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              If you want a guided pathway instead of trying to decode court procedure alone, Justice-Bot's <Link to="/small-claims-journey" className="text-primary hover:underline font-semibold">Small Claims Journey</Link> walks through the basic stages, evidence checklist, forms, and timeline steps for Ontario self-represented litigants.
            </p>
          </section>

          <section className="prose prose-lg max-w-none mb-8">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-primary pl-4">Before you sue: three questions to answer first</h2>
            <h3 className="text-2xl font-semibold mb-3 mt-6">1. Are you suing in the right place?</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              The first mistake many people make is filing in the wrong forum. If your dispute is about unpaid rent, eviction, maintenance, or tenant rights, you may need the Landlord and Tenant Board instead. If it is about discrimination under the Human Rights Code, the Human Rights Tribunal of Ontario may be the right starting point. If it is a family law issue, Small Claims Court is not your shortcut around family court.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">2. Are you within the money limit?</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              For claims started on or after October 1, 2025, the Ontario Small Claims Court limit is $50,000. The amount claimed does not include interest and costs such as court fees. If your actual loss is $62,000 and you choose to sue in Small Claims Court for $50,000, you are generally giving up the extra $12,000. That may still be worth it for some people because the process is simpler, but it is not a tiny checkbox. It is a real decision.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">3. Are you still in time?</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Ontario has limitation periods. The basic limitation period for many civil claims is two years from when the claim was discovered, but limitation issues can get complicated. Do not assume you have unlimited time because you have screenshots, righteous anger, and a folder named "court stuff." A late claim may be dismissed even if the facts are strong.
            </p>
          </section>

          <section className="prose prose-lg max-w-none mb-8">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-primary pl-4">Real-world examples of Small Claims Court cases</h2>
            <Card className="mb-5">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Example 1: unpaid invoice</h3>
                <p className="text-foreground/90 leading-relaxed">
                  A small renovation contractor completes basement drywall work for $8,400. The homeowner pays a $2,000 deposit but refuses to pay the balance after the work is finished. The contractor has a signed estimate, text messages approving the work, photos of the completed drywall, and an invoice. This is the kind of dispute that may fit Small Claims Court because it is a money claim under the limit and based on contract evidence.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-5">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Example 2: vehicle repair dispute</h3>
                <p className="text-foreground/90 leading-relaxed">
                  A person pays $3,200 for a used transmission repair. Two weeks later, the same problem returns. The repair shop refuses a refund and says the new problem is unrelated. The customer would need proof of payment, repair records, photos or videos if relevant, messages with the shop, and possibly another mechanic's report explaining what failed. The issue is not just "I am mad." The issue is whether the evidence proves breach of contract, poor workmanship, or another legal basis for damages.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-5">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Example 3: property damage</h3>
                <p className="text-foreground/90 leading-relaxed">
                  A delivery driver backs into a homeowner's fence and damages two panels and a gate. The homeowner has security camera footage, repair quotes, photos taken the same day, and messages with the delivery company. A Small Claims Court claim could focus on the cost of repair and the facts showing who caused the damage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Example 4: wrong defendant problem</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Someone sues "ABC Contracting" because that is the name on a truck. Later, they learn the actual incorporated business is "ABC Contracting Ontario Inc." Naming the wrong defendant can create enforcement problems even if the person wins. Before filing, check invoices, contracts, business names, corporate names, addresses, emails, and payment records. Court procedure has a cruel sense of humour about technical details.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="prose prose-lg max-w-none mb-8">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-primary pl-4">Step 1: organize your evidence before touching the form</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              A good Small Claims Court file starts before Form 7A. Start with a clean timeline. Write down the date the agreement was made, what was promised, what each side did, what went wrong, when you complained, what the other side said, and how you calculated the amount claimed.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">Useful evidence can include:</p>
            <ul className="space-y-2 list-disc list-inside text-foreground/90 mb-6">
              <li>Contracts, estimates, invoices, receipts, payment records, and e-transfers</li>
              <li>Text messages, emails, letters, app messages, and voicemail notes</li>
              <li>Photos and videos showing damage, completed work, or missing property</li>
              <li>Repair quotes, replacement quotes, expert reports, or inspection notes</li>
              <li>Witness names and short summaries of what each witness can prove</li>
              <li>A damages calculation showing exactly how you reached the amount claimed</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed">
              Do not bury the judge in chaos. The goal is not to upload every scrap of your emotional journey. The goal is to prove the facts that matter. A clean evidence package beats a 300-page mystery novel with receipts hiding in chapter 14.
            </p>
          </section>

          <section className="prose prose-lg max-w-none mb-8">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-primary pl-4">Step 2: complete the Plaintiff's Claim, Form 7A</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              A plaintiff usually starts the case with <strong>Form 7A, Plaintiff's Claim</strong>. This form tells the court who is suing, who is being sued, what happened, where it happened, when it happened, what amount is claimed, and what evidence supports the claim.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Keep the facts in chronological order. Use dates. Use names. Use amounts. Avoid legal drama. For example, instead of writing, "The defendant maliciously destroyed my life and acted fraudulently," write: "On March 3, 2025, I paid the defendant $4,500 by e-transfer for kitchen cabinet installation. The defendant attended once on March 12, 2025, removed the old cabinets, and did not return. I sent follow-up messages on March 15, March 21, and April 2, 2025. The defendant did not complete the work or refund the payment."
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              That kind of wording gives the court facts it can actually use. Courts are not built to process vibes, sadly, despite humanity's best efforts.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Attach copies of documents you rely on. Keep originals safe because you may need them later. If something important is missing, explain why it is not attached.
            </p>
          </section>

          <section className="prose prose-lg max-w-none mb-8">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-primary pl-4">Step 3: file your claim</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              You can usually file Small Claims Court documents through the Small Claims Court Submissions Online portal, except where special local instructions apply, including Toronto-specific filing procedures. You can also file in person at a Small Claims Court location. Always check the court's current instructions before filing because portal rules change, and court technology has the stability of a chair assembled from tax forms.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Current Ontario Small Claims Court fees include $108 to file a claim for an infrequent claimant, $228 for a frequent claimant, $77 to file a defence, $108 to file a defendant's claim, $308 to fix a trial or assessment hearing date for an infrequent claimant, and $403 for a frequent claimant. A frequent claimant is generally someone who has already filed 10 or more claims in the same Small Claims Court office in the calendar year.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              If you cannot afford court fees, Ontario has a fee waiver process. Do not skip filing steps because money is tight. Look at the fee waiver option before assuming the door is closed.
            </p>
          </section>

          <section className="prose prose-lg max-w-none mb-8">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-primary pl-4">Step 4: serve the defendant</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              After the court issues the claim, each defendant must be served. Service means formally giving the court documents to the other party in a way allowed by the rules. It is not enough to say, "They probably saw it," which is unfortunately a sentence people keep trying to turn into procedure.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              A plaintiff's claim should generally be served within six months after it is issued. After service, proof of service is usually recorded using <strong>Form 8A, Affidavit of Service</strong>. If multiple defendants are served, you may need separate proof for each one.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Service mistakes can slow down or damage a case. If you cannot find the defendant, or ordinary service is not working, you may need to ask the court for permission to serve in another way. Do not invent your own court procedure because it feels efficient. Courts are not impressed by homemade shortcuts.
            </p>
          </section>

          <section className="prose prose-lg max-w-none mb-8">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-primary pl-4">Step 5: wait for the defence, or deal with default</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              A defendant generally has <strong>20 calendar days</strong> after being served with the claim to serve and file a defence. The defence is usually <strong>Form 9A</strong>. The defendant may deny the claim, admit part of it, dispute the amount, raise a different version of the facts, or file a defendant's claim if they say the plaintiff owes them money connected to the same dispute.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              If the defendant does nothing after the deadline, the plaintiff may ask the court to note the defendant in default. Default does not mean money magically appears. It means the plaintiff may be able to move toward default judgment or assessment steps, depending on the type of claim. Winning on paper and collecting money are not the same event, because apparently even victory needs paperwork.
            </p>
          </section>

          <section className="prose prose-lg max-w-none mb-8">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-primary pl-4">Step 6: settlement conference</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              If a defence is filed and the claim is disputed, the court usually schedules a settlement conference. This is an important stage. It is not a casual chat. It is a court event where a judge or deputy judge may help the parties understand the issues, review the strengths and weaknesses of the case, encourage settlement, narrow the issues, and prepare the case for trial if it cannot settle.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Bring your timeline, key documents, damages calculation, and a realistic settlement range. A strong settlement position is not just "I want everything." It explains why the evidence supports the amount claimed and what compromise you could accept to avoid the time, stress, and risk of trial.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Example: If your unpaid invoice claim is $9,800 plus filing fees, and the defendant says some work was incomplete, you might prepare a settlement range that accounts for the cost of any legitimate deficiencies. If the real dispute is $1,200 of disputed work, going to trial over pride may be emotionally satisfying and financially silly. Humans do enjoy expensive symbolism.
            </p>
          </section>

          <section className="prose prose-lg max-w-none mb-8">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-primary pl-4">Step 7: trial preparation</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              If the case does not settle, it may proceed to trial. Trial is where each side presents evidence and witnesses. The plaintiff usually goes first. The defendant can respond. Each side may be able to question the other side's witnesses. The judge or deputy judge then makes a decision, either at the hearing or later in writing.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">Prepare these trial basics:</p>
            <ul className="space-y-2 list-disc list-inside text-foreground/90 mb-6">
              <li>A one-page timeline of key events</li>
              <li>A numbered list of documents</li>
              <li>A damages chart showing each amount claimed</li>
              <li>Witness names and what each witness proves</li>
              <li>Three to five clear points explaining why the evidence supports your position</li>
              <li>Copies of documents for the court, the other party, and yourself, unless the court directs otherwise</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed">
              Do not assume the judge will dig through your documents and build your case for you. That is your job. The court decides based on what is properly presented.
            </p>
          </section>

          <section className="prose prose-lg max-w-none mb-8">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-primary pl-4">Step 8: judgment and enforcement</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              A judgment is the court's decision. If you win, the judgment may say the defendant owes you money or must return specific property. But the court does not automatically chase the debtor for you. If the debtor does not pay voluntarily, you may need enforcement steps.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">Common enforcement options include:</p>
            <ul className="space-y-2 list-disc list-inside text-foreground/90 mb-6">
              <li><strong>Garnishment:</strong> asking that money be taken from wages, a bank account, or another source that owes money to the debtor</li>
              <li><strong>Writ of seizure and sale of personal property:</strong> enforcement against certain personal property</li>
              <li><strong>Writ of seizure and sale of land:</strong> enforcement involving land owned by the debtor</li>
              <li><strong>Writ of delivery:</strong> used where the judgment is about return of specific personal property</li>
              <li><strong>Examination hearing:</strong> a hearing where the debtor may be questioned about income, assets, debts, and ability to pay</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed">
              Before spending more money on enforcement, ask the practical question: does the debtor have wages, bank accounts, property, or assets that can realistically be reached? A judgment against a person with no income or assets may still be valid, but collecting it can be difficult.
            </p>
          </section>

          <Card className="bg-primary/5 border-primary/20 mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Common mistakes to avoid</h2>
              <ul className="space-y-2 list-disc list-inside text-foreground/90">
                <li><strong>Using the wrong defendant name:</strong> check legal names, corporate names, and business names before filing.</li>
                <li><strong>Missing the service step:</strong> filing the claim is not enough. The defendant must be served properly.</li>
                <li><strong>Ignoring the 20-day defence deadline:</strong> defendants should respond on time; plaintiffs should track the deadline after service.</li>
                <li><strong>Claiming damages without proof:</strong> the court needs documents, photos, records, or testimony that supports the amount claimed.</li>
                <li><strong>Confusing judgment with collection:</strong> winning does not automatically mean payment arrives.</li>
                <li><strong>Filing in Small Claims Court when another tribunal has jurisdiction:</strong> check whether the LTB, HRTO, or another forum is actually the right place.</li>
              </ul>
            </CardContent>
          </Card>

          <section className="prose prose-lg max-w-none mb-8">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-primary pl-4">Small Claims Court checklist</h2>
            <ul className="space-y-2 list-disc list-inside text-foreground/90 mb-6">
              <li>Confirm the claim belongs in Ontario Small Claims Court.</li>
              <li>Confirm the amount is $50,000 or less, excluding interest and costs.</li>
              <li>Check limitation period issues before filing.</li>
              <li>Identify the correct legal names and addresses for all parties.</li>
              <li>Prepare a clear timeline of events.</li>
              <li>Gather contracts, invoices, receipts, photos, messages, and payment records.</li>
              <li>Calculate the damages and explain each amount.</li>
              <li>Complete Form 7A and attach supporting documents.</li>
              <li>File the claim and pay the fee or request a fee waiver if eligible.</li>
              <li>Serve each defendant and complete proof of service.</li>
              <li>Track the 20-day defence deadline.</li>
              <li>Prepare for settlement conference with a realistic settlement position.</li>
              <li>Prepare trial documents and witnesses if the case does not settle.</li>
              <li>Plan enforcement before spending more money after judgment.</li>
            </ul>
          </section>

          <section className="prose prose-lg max-w-none mb-8">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-primary pl-4">Official resources</h2>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="https://www.ontario.ca/document/guide-procedures-small-claims-court/making-claim" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-2">
                  Ontario guide to making a Small Claims Court claim
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="https://www.ontariocourts.ca/scj/areas-of-law/small-claims-court/how-to-start-a-case/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-2">
                  Ontario Superior Court: starting and responding to a case
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="https://ontariocourtforms.on.ca/en/rules-of-the-small-claims-court-forms/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-2">
                  Ontario Small Claims Court forms
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="https://www.ontario.ca/laws/regulation/160332" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-2">
                  Ontario Small Claims Court fees regulation
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="https://www.ontario.ca/laws/regulation/000626" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-2">
                  Ontario Small Claims Court jurisdiction and appeal limit regulation
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="https://www.ontariocourts.ca/scj/areas-of-law/small-claims-court/enforcement/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-2">
                  Ontario Superior Court: enforcement after judgment
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </section>

          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 mb-8">
            <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Need help organizing your Small Claims Court steps?</h2>
              <p className="text-foreground/90 mb-6">
                Justice-Bot helps self-represented Ontarians understand the pathway, organize evidence, identify common forms, and track procedural steps. It gives legal information, not legal advice.
              </p>
              <Link to="/small-claims-journey">
                <Button size="lg" className="font-semibold">
                  Start the Small Claims Journey
                </Button>
              </Link>
            </CardContent>
          </Card>
        </article>

        <Footer />
      </div>
    </>
  );
}
