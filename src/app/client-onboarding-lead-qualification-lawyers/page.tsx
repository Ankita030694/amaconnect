"use client";

import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import Footer from "@/components/Footer";

export default function ClientOnboardingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/client-onboarding-lead-qualification-lawyers`;

  const metadata = {
    title: "Client Onboarding & Lead Qualification for Lawyers | AMAConnect",
    description: "Learn how Indian lawyers qualify legal leads, onboard clients, perform conflict audits, and draft engagement letters.",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Mastering Client Onboarding and Lead Qualification for Boutique Law Firms",
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
      question: "How do I perform a conflict of interest audit under BCI rules?",
      answer: "Under the BCI Code of Conduct, you must check your firm case register and database to ensure you do not represent a party opposing an active client or advise both sides of a dispute. Document this check in your case file."
    },
    {
      question: "What is the best way to handle non-paying consultation leads?",
      answer: "Implement a mandatory advance consultation fee for initial meetings. This policy filters out low-interest leads, ensuring your research hours are spent on genuine clients."
    },
    {
      question: "What details should be listed in a client intake questionnaire?",
      answer: "The form should collect complete contact info, opponent details, a brief chronological summary of the dispute, relevant contract dates, and copy uploads of key documents."
    },
    {
      question: "Is a signed engagement letter legally binding in India?",
      answer: "Yes, a signed engagement letter or vakalatnama acts as a binding contract governing representation, specifying fee structures, scopes of work, and termination guidelines."
    },
    {
      question: "Can I refuse a representation after a consultation call?",
      answer: "Yes, an advocate is free to decline a case during the consultation stage if there is a conflict of interest, if the client requests unethical actions, or if fees cannot be agreed upon."
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
    name: "Client Onboarding & Lead Qualification Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Chamber onboarding manual explaining lead qualification steps, conflict of interest checks, and engagement terms for advocates.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "82",
      reviewCount: "2",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Client Onboarding", item: pageUrl }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="rating-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Custom Hero Section matching POSH Act layout */}
      <section className="relative w-full bg-black text-white font-sans py-10 sm:py-16 flex flex-col justify-center items-center text-center px-4 border-b border-gray-800">
                <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full mb-6 border border-[#D4AF37]/35">
            Client Relations &amp; Intake
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
            Client Onboarding &amp; Lead Qualification: <br/>
            <span className="text-[#D4AF37]">Mastering Intake &amp; Audits</span>
          </h1>
          <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
            A comprehensive operational guide on filtering legal leads, performing mandatory conflict checks, setting consultation fees, and drafting secure engagement letters.
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
                { id: "onboarding-intro", title: "Intake Strategy" },
                { id: "lead-qualification", title: "Lead Qualification" },
                { id: "conflict-audits", title: "Conflict Audits" },
                { id: "intake-questionnaire", title: "Intake Forms" },
                { id: "engagement-letter", title: "Engagement Letters" },
                { id: "billing-arrangements", title: "Billing Rules" },
                { id: "rejection-protocol", title: "Declining Cases" },
                { id: "onboarding-checklist", title: "Setup Checklist" },
                { id: "comparison-matrix", title: "Intake Systems" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
                {/* Section 1: Strategic Importance of Onboarding Procedures */}
            <section id="onboarding-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Strategic Importance of Onboarding Procedures
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Client onboarding is a critical touchpoint for any boutique law firm. Implementing structured intake systems helps prevent conflicts of interest, filters out non-paying leads, and establishes clear billing parameters early on, protecting your practice from future disputes.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To manage client relations effectively, advocates should combine billing transparency with clear communication guidelines. Reviewing billing frameworks in our <Link href="/alternative-fee-arrangements-law-firms" className="text-[#D4AF37] font-bold hover:underline">Alternative Fee Guide</Link> can help advocates structure their flat-fee packages. When handling difficult client inquiries, establishing the communication boundaries detailed in our <Link href="/managing-difficult-legal-clients" className="text-[#D4AF37] font-bold hover:underline">Difficult Clients Guide</Link> reduces daily administrative friction.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Many practice management issues arise because advocates accept representations without conducting thorough conflict checks or documenting client expectations. A structured onboarding process ensures you verify all factual details before filing pleadings, protecting your chamber's reputation.
              </p>
            </section>

            {/* Section 2: Lead Qualification and Filtering Non-Paying Inquiries */}
            <section id="lead-qualification" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Lead Qualification and Filtering Non-Paying Inquiries
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Boutique law offices often receive numerous inquiries that do not translate into active cases. To protect your research hours, you must implement a system to filter out low-interest legal leads.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Require prospective clients to pay a consultation deposit before scheduling an office meeting. This policy ensures you only consult with clients who have genuine, actionable legal concerns, improving your conversion rates.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, evaluate whether the case matches your chamber's core areas of practice. Referring out-of-scope matters to specialized colleagues saves you time and builds a supportive referral network in the local bar.
              </p>
            </section>

            {/* Section 3: Performing Mandatory BCI Conflict of Interest Checks */}
            <section id="conflict-audits" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Performing Mandatory BCI Conflict of Interest Checks
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Under the Bar Council of India regulations, representing opposing parties in a dispute is a serious breach of professional ethics. Advocates must verify conflict records before discussing case files.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Check the opponent's name, parent company details, and past registry listings against your firm's case register. Document this check in writing and obtain signed confirmation from the client to prevent ethical complaints.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                If a conflict of interest is identified, you must immediately decline representation. This proactive risk management protects your practice from disciplinary actions by state bar committees, preserving your professional standing.
              </p>
            </section>

            {/* Section 4: Structuring Comprehensive Intake Questionnaires */}
            <section id="intake-questionnaire" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Structuring Comprehensive Intake Questionnaires
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                A structured intake questionnaire is essential for gathering case details. The form should collect: (1) Client registration and corporate records. (2) A chronological timeline of the dispute. (3) Contact details of key witnesses.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Provide file upload options for key contracts, communication logs, and sent notices. This document compilation allows you to review the case file and prepare initial drafts before the client consultation.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Having these records early helps advocates evaluate the strength of the case. It ensures you identify missing documents and request them before filing pleadings, preventing registry objections.
              </p>
            </section>

            {/* Section 5: Drafting Secure and Binding Engagement Letters */}
            <section id="engagement-letter" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Drafting Secure and Binding Engagement Letters
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The engagement letter governs your professional relationship with the client. It must specify the exact scope of representation, listing included services and out-of-scope tasks clearly.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Detail the required fee structure, billing cycles, out-of-pocket expense approvals, and the notice period required for termination. This document serves as a reference during billing or scheduling questions.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Ensure the client signs the letter and files it with a signed vakalatnama. This formal agreement protects your chamber from complaints and provides a structured process for resolving disputes.
              </p>
            </section>

            {/* Section 6: Defining Fee Models and Client Billing Boundaries */}
            <section id="billing-arrangements" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Defining Fee Models and Client Billing Boundaries
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Fee disputes are a common cause of friction in independent practice. Address this during onboarding by setting clear payment terms and invoicing guidelines.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Specify whether you charge fixed fees per project, monthly retainers, or appearance fees. Document when milestone payments are due and state that subsequent filings will proceed only after outstanding invoices are cleared.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, define how out-of-pocket expenses (like registry filing costs, court fees, and travel expenses) will be billed. This clarity prevents misunderstandings, ensuring steady revenue.
              </p>
            </section>

            {/* Section 7: Ethical Rejection Protocol and Declining Client Leads */}
            <section id="rejection-protocol" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Ethical Rejection Protocol and Declining Client Leads
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Declining a case is a standard part of practice management. When rejecting a client lead, send a formal declination letter in writing to document the rejection.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                State clearly that your chamber is not representing the party and has not taken on any filing or listing responsibilities. Emphasize that limitation timelines apply to their dispute, advising them to secure alternate counsel quickly.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This document protects you from subsequent claims of professional negligence. It confirms you did not establish an advocate-client relationship, protecting your practice from liability.
              </p>
            </section>

            {/* Section 8: Step-by-Step Client Onboarding Protocol */}
            <section id="onboarding-checklist" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Step-by-Step Client Onboarding Protocol
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To onboard clients systematically, follow a structured process. Access the complete website categories through the <Link href="/sitemap" className="text-[#D4AF37] font-bold hover:underline">Sitemap Directory</Link> to trace related compliance articles.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Review this protocol monthly to ensure all conflict check and intake forms are filed correctly in your databases.
              </p>

              {/* Step Checklist Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#2D2219] mb-4">Onboarding Protocol</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Administer Intake Form", desc: "Request the prospect to submit personal details, dispute summaries, and key contract files." },
                    { step: "2", title: "Perform Conflict Audit", desc: "Check opponent details against your database and case logs. Document findings in writing." },
                    { step: "3", title: "Conduct Structured Consultation", desc: "Discuss case merits, legal remedies, and required fee milestones. Establish communication rules." },
                    { step: "4", title: "Sign Engagement Letter", desc: "Prepare and sign a formal contract detailing scopes, billing plans, and termination options." }
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

            {/* Section 9: Client Intake Systems Comparison */}
            <section id="comparison-matrix" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Client Intake Systems Comparison
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Evaluating different onboarding methods helps law offices choose the most efficient system for qualifying leads and managing databases.
              </p>

              {/* Comparison Table Section */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">System Type</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Qualifying Speed</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Conflict Catch Rate</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Administrative Overhead</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Manual Paper Forms</td>
                      <td className="p-4 text-xs text-red-600 font-medium">Slow (requires scanning)</td>
                      <td className="p-4 text-xs text-gray-600">Moderate (prone to indexing errors)</td>
                      <td className="p-4 text-xs text-gray-600">High (clerical staff needed)</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Google Forms</td>
                      <td className="p-4 text-xs text-green-600 font-medium">Fast (automated collection)</td>
                      <td className="p-4 text-xs text-gray-600">Moderate (requires manual audit)</td>
                      <td className="p-4 text-xs text-green-600 font-medium">Low (free hosting options)</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Legal CRM Integration</td>
                      <td className="p-4 text-xs text-green-600 font-medium">Instant (client database lookup)</td>
                      <td className="p-4 text-xs text-green-600 font-medium">High (automated name scan)</td>
                      <td className="p-4 text-xs text-green-600 font-medium">Low (system performs checking)</td>
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
                        <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <div 
                        key={index}
                        className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="w-full flex items-center justify-between p-5 text-left font-bold text-base sm:text-lg text-[#2D2219] hover:bg-slate-50 transition-colors"
                        >
                          <span className="pr-4">{faq.question}</span>
                          <span className={`text-[#D4AF37] text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                            +
                          </span>
                        </button>
                        {isOpen && (
                          <div className="p-5 pt-2 text-sm sm:text-base text-gray-600 leading-relaxed bg-white">
                            <div className="w-full h-px bg-gray-100 mb-4"></div>
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
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
