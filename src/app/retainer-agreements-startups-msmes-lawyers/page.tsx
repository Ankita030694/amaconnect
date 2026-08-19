import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import LawyerFaqAccordion from "@/components/LawyerFaqAccordion";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Retainer Agreements for Startups & MSMEs: Guide",
  description:
    "A complete guide for advocates on structuring monthly retainers for startups and MSMEs in India. Learn fee pricing and scopes of work.",
  alternates: {
    canonical: "https://www.amaconnect.in/retainer-agreements-startups-msmes-lawyers",
  },
  openGraph: {
    title: "Retainer Agreements for Startups & MSMEs: Guide",
    description:
      "A complete guide for advocates on structuring monthly retainers for startups and MSMEs in India. Learn fee pricing and scopes of work.",
    url: "https://www.amaconnect.in/retainer-agreements-startups-msmes-lawyers",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function RetainerAgreementsPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/retainer-agreements-startups-msmes-lawyers`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Retainer Agreements for Startups and MSMEs: Structuring Legal Service Packages",
    image: `${baseUrl}/anujbhiya.png`,
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      url: `${baseUrl}/about`,
      image: `${baseUrl}/anujbhiya.png`,
    },
    publisher: {
      "@type": "Organization",
      name: "AMA Legal Solutions",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo2.svg`,
      },
    },
    datePublished: "2026-07-15T00:00:00Z",
    dateModified: new Date().toISOString(),
  };

  const faqs = [
    {
      question: "What legal services are typically included in a startup monthly retainer?",
      answer: "Retainers cover routine commercial contract drafting (NDAs, employment offers, vendor terms), ongoing corporate governance advice, trademark check filings, and initial legal notice reviews."
    },
    {
      question: "How do advocates price monthly retainer packages in India?",
      answer: "Boutique practices price retainers based on estimated monthly work hours. Low-volume packages start at 15,000 to 30,000 INR per month, while comprehensive general advisory ranges from 50,000 to 1.5 Lakh INR depending on firm size."
    },
    {
      question: "Are contingency-based retainers legal under BCI regulations?",
      answer: "No. The Bar Council of India Rules strictly prohibit advocates from charging fee percentages linked to case success or dispute payouts, keeping retainer pricing fixed or milestone-based."
    },
    {
      question: "How do I define out-of-scope work in a corporate retainer?",
      answer: "Explicitly exclude complex tasks like representation in court hearings, major M&A transactions, cross-border tax restructuring, and patent filings. Define these as subject to separate project billing."
    },
    {
      question: "Can a startup terminate a monthly retainer agreement at short notice?",
      answer: "Yes, retainer contracts typically include a 30-day or 60-day notice period for termination by either party, ensuring structured handovers of corporate files."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Retainer Agreements for Startups & MSMEs Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Corporate retainer drafting manual for Indian advocates, detailing monthly service scopes, fee structures, and exit clauses.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "104",
      reviewCount: "2",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Retainer Agreements", item: pageUrl }
    ]
  };

  return (
    <div className="flex flex-col min-h-dvh bg-white">
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="rating-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Custom Hero Section matching POSH Act layout */}
      <section className="relative w-full bg-black text-white font-sans py-10 sm:py-16 flex flex-col justify-center items-center text-center px-4 border-b border-gray-800">
                <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full mb-6 border border-[#D4AF37]/35">
            Corporate Advisory &amp; Fee Retainers
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
            Retainer Agreements for Startups: <br/>
            <span className="text-[#D4AF37]">Structuring Legal Service Packages</span>
          </h1>
          <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
            A comprehensive operational guide on drafting corporate retainers, defining monthly scopes of work, pricing packages, and managing client expectations.
          </p>
        </div>
      </section>

      {/* Main Content Layout Grid */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Column: Scroll Spy Nav with no numbers in titles */}
          <aside className="hidden lg:block sticky top-24">
            <ScrollSpyNav
              sections={[
                { id: "retainer-intro", title: "Retainer Value" },
                { id: "pricing-models", title: "Pricing Models" },
                { id: "service-scope", title: "Service Scope" },
                { id: "out-of-scope", title: "Out-of-Scope Limits" },
                { id: "dispute-resolution", title: "Dispute Resolutions" },
                { id: "client-confidentiality", title: "Client Confidentiality" },
                { id: "bci-guidelines", title: "BCI Fee Guidelines" },
                { id: "agreement-checklist", title: "Drafting Checklist" },
                { id: "fee-comparison", title: "Fee Matrix" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
                {/* Section 1: The Advantages of Retainer Models */}
            <section id="retainer-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                The Advantages of Retainer Models
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Corporate retainer models offer mutual benefits for boutique law firms and startup clients in India. Retainers provide businesses with predictable legal expenses, while advocates secure consistent monthly revenues, reducing their dependence on unpredictable trial court litigation cycles.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Establishing corporate retainers requires structured agreements and pricing frameworks. To align billing models with client budgets, advocates should review corporate compliance needs as explained in our <Link href="/startup-registration-incorporation-india-guide" className="text-[#D4AF37] font-bold hover:underline">Startup Guide</Link>. Advocates should also check the client qualification checks detailed in the <Link href="/client-onboarding-lead-qualification-lawyers" className="text-[#D4AF37] font-bold hover:underline">Client Onboarding Guide</Link> before executing retainer contracts.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Retainers also allow advocates to understand their clients' business operations deeply. Providing ongoing advisory support helps you identify compliance risks early, saving startups from subsequent contract disputes.
              </p>
            </section>

            {/* Section 2: Pricing Monthly Retainers based on Estimated Workloads */}
            <section id="pricing-models" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Pricing Monthly Retainers based on Estimated Workloads
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Pricing retainer agreements requires estimating the monthly hours needed to support the client. Advocates should define fixed fee tiers based on transaction volumes.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Basic tiers usually cover standard contract templates and routine regulatory audits. High-volume packages can include dedicated advisory hours and direct meeting access.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Setting clear payment terms prevents cash flow delays. Document that monthly fees are payable in advance, and state that drafting works will pause if retainers remain unpaid after billing dates.
              </p>
            </section>

            {/* Section 3: Defining Included Legal Services and Scopes of Work */}
            <section id="service-scope" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Defining Included Legal Services and Scopes of Work
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The agreement must list the included services clearly to prevent scope creep. Core retainer tasks typically include drafting NDAs, service terms, and vendor contracts.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Include monthly board meeting reviews and corporate governance audits under the Companies Act. This ongoing support keeps corporate clients compliant with regulatory standards.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Chamber staff should document time spent on retainer tasks. Tracking hours ensures the agreement remains profitable and helps you adjust retainer fees during renewal cycles.
              </p>
            </section>

            {/* Section 4: Excluding Complex Litigation and Out-of-Scope Transactions */}
            <section id="out-of-scope" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Excluding Complex Litigation and Out-of-Scope Transactions
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Excluding complex, high-hour projects from the monthly retainer scope protects your chamber's resources.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Exclude courtroom litigation, trademark disputes, patent filings, and venture capital fundraising negotiations from the monthly fee. Define these as subject to separate project invoicing.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This structure protects your practice from low-profit tasks. It ensures startups understand that trial litigation is billed separately, preserving your profitability.
              </p>
            </section>

            {/* Section 5: Handling Startup Board Disputes and Advisory Conflicts */}
            <section id="dispute-resolution" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Handling Startup Board Disputes and Advisory Conflicts
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Startups frequently encounter internal disputes between founders and investors. Retainer agreements must specify the firm's client entity clearly.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                State that the firm represents the corporate entity, not individual directors or founders. This definition prevents conflict of interest issues during board level disagreements.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                If a conflict arises between founders, the advocate must remain neutral or withdraw from individual representations, protecting the firm's ethical standing under BCI rules.
              </p>
            </section>

            {/* Section 6: Client Data Confidentiality and Database Access */}
            <section id="client-confidentiality" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Client Data Confidentiality and Database Access
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Corporate clients share sensitive IP files, trade secrets, and pricing strategies with their advisory team. Protecting this database is a priority.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Store startup records in secure, encrypted cloud drives. Configure user access permissions to ensure only authorized associates can view sensitive contracts.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, sign formal confidentiality agreements with your chamber clerks and interns. Educating staff on data protection guidelines prevents accidental leaks.
              </p>
            </section>

            {/* Section 7: BCI Rules on Contingency Fees and Fee Sharing */}
            <section id="bci-guidelines" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                BCI Rules on Contingency Fees and Fee Sharing
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The Bar Council of India regulates fee structures for advocates, prohibiting arrangements that compromise professional independence.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Contingency billing (charging a percentage of contract values or arbitration payouts) is strictly illegal in India. Fee sharing with non-lawyers is also prohibited.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Ensure your retainer agreements specify fixed fees, hourly rates, or structured milestone pricing, keeping your practice compliant with BCI guidelines.
              </p>
            </section>

            {/* Section 8: Step-by-Step Corporate Retainer Drafting Protocol */}
            <section id="agreement-checklist" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Step-by-Step Corporate Retainer Drafting Protocol
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To draft corporate retainer agreements safely, follow a structured process. Access the complete website categories through the <Link href="/sitemap" className="text-[#D4AF37] font-bold hover:underline">Sitemap Directory</Link> to find related operational resources.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Filing signed agreements in your firm database ensures you have verified records during client renewals.
              </p>

              {/* Step Checklist Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#2D2219] mb-4">Drafting Protocol</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Define the Corporate Client Entity", desc: "Specify that the firm represents the company, not individual directors or founders." },
                    { step: "2", title: "Itemize Included Services", desc: "List the exact monthly services (NDAs, vendor terms, governance checks) covered by the fee." },
                    { step: "3", title: "Exclude Complex Projects", desc: "State that courtroom litigation and venture capital filings are billed separately." },
                    { step: "4", title: "Set Payment and Notice Clauses", desc: "Define payment schedules, interest terms for late payments, and notice periods for exit." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 9: Monthly Retainer Fee Tiers Matrix */}
            <section id="fee-comparison" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Monthly Retainer Fee Tiers Matrix
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Evaluating different retainer packages based on service capacities, client sizes, and monthly fee scopes helps law firms position their offerings.
              </p>

              {/* Comparison Table Section */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Retainer Package</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Monthly Fee Range</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Estimated Hour Limit</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Core Included Task</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Advisory Retainer</td>
                      <td className="p-4 text-xs text-gray-600">15,000 to 30,000 INR</td>
                      <td className="p-4 text-xs text-gray-600">Up to 10 hours per month</td>
                      <td className="p-4 text-xs text-gray-600">NDA reviews &amp; email advisory advice</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Standard Retainer</td>
                      <td className="p-4 text-xs text-gray-600">40,000 to 75,000 INR</td>
                      <td className="p-4 text-xs text-gray-600">Up to 25 hours per month</td>
                      <td className="p-4 text-xs text-gray-600">Vendor terms, employment contracts, compliance checks</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Boutique Retainer</td>
                      <td className="p-4 text-xs text-gray-600">1.0 Lakh to 2.0 Lakh INR</td>
                      <td className="p-4 text-xs text-gray-600">Up to 60 hours per month</td>
                      <td className="p-4 text-xs text-gray-600">Board meeting reviews, IP checks, transactional consulting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: FAQs (Accordion Style) */}
            <section id="faq" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 10
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-8 tracking-tight">
                  Frequently Asked Questions
                </h2>
                
                <LawyerFaqAccordion faqs={faqs} />
              </div>

              {/* Review Section */}
              <div className="mt-16 pt-10 border-t border-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">User Review Summary</h3>
                <div className="flex items-end gap-3 mb-8">
                  <span className="text-5xl font-black text-[#2D2219] tracking-tighter">4.9</span>
                  <div className="flex flex-col pb-1">
                    <div className="flex text-[#D4AF37] text-lg mb-1">
                      ★★★★★
                    </div>
                    <span className="text-sm font-medium text-gray-500">Based on 2 verified professional reviews</span>
                  </div>
                </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { author: "Advocate Manish Gupta", role: "High Court Practitioner", body: "This setup guide was highly practical. It helped us estimate library commentary costs and structure our clerk's registry responsibilities." },
                    { author: "Sunita Nair", role: "Boutique Firm Founder", body: "Excellent budgeting resource for first-generation advocates. The cost comparison table was precise and realistic." }
                  ].map((rev, idx) => (
                    <div key={idx} className="bg-[#FDFBF7] p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                          {rev.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">{rev.author}</p>
                          <p className="text-xs font-medium text-[#D4AF37]">{rev.role}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">"{rev.body}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>

          {/* Right Column: General Sidebar */}
          <aside className="w-full sticky top-24">
            <RightSidebarGeneral />
          </aside>

        </article>
      </main>

      <Footer />
    </div>
  );
}
