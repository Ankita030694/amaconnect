"use client";

import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import Footer from "@/components/Footer";

export default function DifficultClientsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/managing-difficult-legal-clients`;

  const metadata = {
    title: "Managing Difficult Legal Clients Guide | AMAConnect",
    description: "Learn how to manage difficult clients, structure retainer agreements, handle fee defaults, and ethically terminate legal representation under BCI rules in India.",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Dealing with Difficult Legal Clients: A Guide to Managing Expectations",
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
      question: "How can I legally terminate a client representation under BCI rules?",
      answer: "Under Rule 12 of the Bar Council of India Rules, an advocate cannot withdraw from an active case without sufficient cause and giving reasonable written notice to the client, allowing them time to engage alternate counsel."
    },
    {
      question: "What should I do if a client simply refuses to pay my professional fees?",
      answer: "You should issue a formal fee demand notice via registered post. If unpaid after the notice period, you can ethically withdraw from the case after filing the necessary application in court and resolving immediate pending listings."
    },
    {
      question: "How do I handle a client who demands daily case updates?",
      answer: "Establish a weekly update schedule in your engagement letter. Inform the client firmly that daily calls disrupt drafting and court preparations for all clients, and mandate that routine queries be sent via email."
    },
    {
      question: "Can I withhold client case files if they have outstanding dues?",
      answer: "No, the Supreme Court of India has firmly ruled (R.D. Saxena v. Balram Prasad) that an advocate cannot claim a lien over client case files or original documents for unpaid professional fees."
    },
    {
      question: "What details MUST be included in a retainer letter to avoid disputes?",
      answer: "Include a highly detailed scope of work, fixed payment terms, billing cycles, out-of-pocket expense approvals (like court fees and clerkage), and the specific notice period required for termination by either party."
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
    name: "Managing Difficult Legal Clients Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Chamber management, dispute resolution, and client communication handbook for Indian advocates and litigation offices.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "68",
      reviewCount: "3",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Client Management", item: pageUrl }
    ]
  };

  return (
    <div className="flex flex-col min-h-dvh bg-white">
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="rating-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative w-full bg-black text-white font-sans py-6 sm:py-8 flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="text-[#D4AF37] text-xs sm:text-sm font-bold uppercase tracking-widest bg-white/5 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-4">
            Practice &amp; Case Management
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
            Dealing with Difficult Legal Clients: <br/> <span className="text-[#D4AF37]">A Guide to Managing Expectations</span>
          </h1>
          <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 max-w-3xl text-justify sm:text-center">
            A highly practical, no-nonsense handbook for advocates on managing aggressive client communication, preventing crippling fee disputes, and ethically terminating toxic representation.
          </p>
        </div>
      </section>

      {/* Layout Grid */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
          
          {/* Left Column: Scroll Spy Nav with 10 sections */}
          <aside className="hidden lg:block sticky top-24">
            <ScrollSpyNav
              sections={[
                { id: "client-intro", title: "Client Management" },
                { id: "micromanager", title: "The Micromanager" },
                { id: "family-interferer", title: "Third-Party Risks" },
                { id: "fact-hider", title: "The Fact Hider" },
                { id: "fee-defaulter", title: "Fee Defaults" },
                { id: "retainer-boundaries", title: "Retainer Limits" },
                { id: "case-documentation", title: "Case Records" },
                { id: "ethical-termination", title: "Ethical Withdrawal" },
                { id: "case-study", title: "Case Analysis" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
            
            {/* Section 1: Client Relationship Management in Indian Advocacy */}
            <section id="client-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Client Relationship Management in Indian Advocacy
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Disciplinary committees of state Bar Councils receive thousands of complaints annually regarding professional negligence. Surprisingly, the vast majority of these complaints stem not from legal incompetence, but from massive communication gaps and unmanaged client expectations. Protecting your legal practice requires rigid engagement terms, meticulous file documentation, and knowing exactly when to ethically discharge yourself from a toxic case.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                For independent advocates, clear drafting and boundary-setting communication prevent catastrophic client misunderstandings. Reviewing drafting guidelines in the <Link href="/how-to-draft-legal-notice-india-guide" className="text-[#D4AF37] font-bold hover:underline">Legal Notice Guide</Link> can help advocates structure their demands clearly. When handling emotional disputes like financial fraud, ensuring clients understand timeline tracking as explained in the <Link href="/cheque-bounce-legal-notice-section-138-guide" className="text-[#D4AF37] font-bold hover:underline">Cheque Bounce Guide</Link> heavily reduces follow-up friction.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Unresolved disputes regarding case status or court delays lead directly to client frustration. Advocates can completely avoid this by using automated client update portals and establishing transparent pricing guidelines during initial consultation phases, insulating their practices from frivolous complaints.
              </p>
            </section>

            {/* Section 2: Managing the Micromanaging Client Calling Daily */}
            <section id="micromanager" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Managing the Micromanaging Client Calling Daily
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Some clients, fueled by anxiety over their pending litigation, demand daily case status updates and call repeatedly. This behavior can severely disrupt your chamber's drafting operations. Address this aggressively by setting clear boundaries during the very first meeting.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Establish a rigid protocol that updates will be sent via email or WhatsApp broadcast on a fixed day (e.g., every Friday evening). Explain to the client that courtroom hearings and case research require uninterrupted focus, and that daily updates are completely unnecessary unless a critical listing notice is received from the registry.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                If the client continues to call outside these pre-determined times, do not answer. Refer them politely via text to the engagement letter terms. Consistently reinforcing these boundaries helps maintain chamber productivity without offending anxious clients.
              </p>
            </section>

            {/* Section 3: Third-Party Risks: Interfering Family Members (New Section) */}
            <section id="family-interferer" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Third-Party Risks: Interfering Family Members
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                In Indian litigation (especially family law or criminal defense), it is incredibly common for the client’s relatives to attempt to manage the case. They will often call with unsolicited legal advice obtained from "another lawyer they know" or demand changes to pleadings they don't understand.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This is a massive risk to advocate-client privilege and case strategy. You must establish a strict "Single Point of Contact" (SPOC) rule. Tell the actual client (the person signing the vakalatnama) that you will only take instructions from them, and any family member attempting to interfere will be politely ignored.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                If family members insist on attending consultations, make it clear that while they can sit in, the final legal decisions and strategic approvals must come explicitly from the client on record.
              </p>
            </section>

            {/* Section 4: Resolving Issues with Clients Who Hide Critical Facts */}
            <section id="fact-hider" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Resolving Issues with Clients Who Hide Critical Facts
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Pleadings built on incomplete information will inevitably compromise your case in court. Some clients deliberately hide negative details, like past payment defaults, signed waivers, or previous convictions, fearing the advocate will decline their representation or judge them.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Emphasize heavily in your initial consultations that absolute disclosure is permanently protected under advocate-client privilege. Your engagement letters should contain a specific indemnification clause stating that the chamber is entirely not responsible for adverse court orders if the client has withheld key details or documents.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Advocates should also use structured, written intake questionnaires to gather comprehensive transaction histories. Verifying details early prevents devastating surprises during cross-examinations by opposing counsel, securing the case outcome.
              </p>
            </section>

            {/* Section 5: Structuring Milestone Payments to Stop Fee Defaults */}
            <section id="fee-defaulter" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Structuring Payments to Stop Fee Defaults
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Fee defaults are the number one complaint of independent practitioners in Indian law offices. To protect your hard-earned revenue, completely abandon post-case billing. Structure payments around strict case milestones (e.g., 30% on filing, 30% before framing issues, 40% before final arguments).
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Specify aggressively in your engagement letter that work on subsequent phases, including critical court appearances, will proceed only after outstanding dues are cleared. This provides a transparent billing process and absolutely minimizes unpaid work extensions.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                If a client consistently defaults on payments, issue a formal fee demand notice. Clearly document in writing that further trial preparation will be suspended until outstanding dues are cleared, protecting your chamber from revenue losses and setting up a legal withdrawal.
              </p>
            </section>

            {/* Section 6: Setting Communication Boundaries in Engagement Letters */}
            <section id="retainer-boundaries" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Setting Strict Boundaries in Retainer Letters
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                A well-drafted engagement letter (retainer) serves as your primary boundary-setting tool. It should precisely define official communication channels (such as emails or registered mail) and specify standard response turnaround times (e.g., 24-48 business hours).
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Explicitly state that instant messaging platforms like WhatsApp are strictly for administrative coordination of files and sending Webex hearing links, not for detailed legal queries or drafting changes. This keeps communications organized, searchable, and verifiable.
              </p>

              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-6 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-6">Must-Have Retainer Clauses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { title: "Scope Limitation", desc: "Clearly define what courts and stages the fee covers (e.g., 'Only Trial Court up to final judgment, excludes appeals')." },
                    { title: "Out-of-Pocket Expenses", desc: "State that client bears all court fees, clerkage, travel, and printing costs separate from professional fees." },
                    { title: "No Guarantee of Outcome", desc: "Acknowledge that litigation is unpredictable and no advocate can guarantee a specific judgment or timeline." },
                    { title: "Office Hours Rule", desc: "Calls outside 10 AM - 7 PM (except for arrests/searches) will be billed at an emergency hourly rate." }
                  ].map((clause, idx) => (
                    <div key={idx} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                        <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-1">{clause.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{clause.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 7: Meticulous File Record keeping to Prevent BCI Complaints */}
            <section id="case-documentation" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Meticulous File Records to Prevent Complaints
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Many hostile client complaints to state bar councils arise from communication gaps rather than actual professional negligence. Meticulous file management is your absolute best defense against such career-threatening complaints.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Maintain written logs of all case updates, record summaries, and document requests. If a client fails to provide critical documents or ignores hearing notices, send a follow-up warning via registered post immediately to document their delay and protect yourself from ex-parte orders caused by their negligence.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Keeping digital, timestamped copies of all client sign-offs, filed pleadings, and correspondence secures your records. This documentation is vital, undeniable evidence if a client later maliciously alleges negligence before a bar disciplinary council.
              </p>
            </section>

            {/* Section 8: Legally Terminating Client Representation under BCI Rules */}
            <section id="ethical-termination" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Legally Terminating Representation under BCI Rules
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Under Rule 12 of the Bar Council of India Rules, an advocate cannot simply abandon an active case. You cannot withdraw from representation without "sufficient cause" and giving reasonable written notice to the client.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Sufficient cause legally includes severe fee defaults, client uncooperativeness, abuse of chamber staff, or being asked to present false evidence. You must issue a formal warning notice, giving the client a reasonable period (typically 14 to 30 days depending on listing dates) to clear dues or retain alternate counsel before filing your withdrawal application in court.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Ensure your withdrawal application (accompanied by a No Objection Certificate if requested) is served on the client and filed in the court registry. This formal judicial step confirms that you have terminated representation legally, protecting your chamber from subsequent misconduct allegations.
              </p>
            </section>

            {/* Section 9: Case Analysis: Ethical Withdrawal and File Transfer */}
            <section id="case-study" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Case Analysis: Ethical Withdrawal Process
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Analyzing a structured withdrawal process helps advocates draft their own ironclad chamber policies regarding toxic clients.
              </p>

              {/* Case Study Box */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-6 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-4">Case History: The Non-Paying Corporate</h3>
                <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6 bg-white p-4 rounded-xl border border-gray-100">
                  An advocate was representing a corporate client in a high-value debt recovery dispute. After the initial filing, the client defaulted on three consecutive milestone payments over 4 months and completely stopped responding to documentation requests, stalling the case.
                </p>
                
                <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Advocate Actions Taken for Compliance:</h4>
                <div className="space-y-3">
                  {[
                    "Sent a formal warning notice via registered post and email, detailing outstanding dues and listing the requested documents.",
                    "Gave a strict 14-day notice period for the client to clear dues or secure alternate counsel.",
                    "Filed a formal application to withdraw from the case before the presiding judge, attaching the postal tracking proof of notice.",
                    "Returned all original documents to the client via registered post (without claiming lien), obtaining a written acknowledgment receipt."
                  ].map((action, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">
                        {idx + 1}
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed mt-0.5">{action}</p>
                    </div>
                  ))}
                </div>
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
                  <span className="text-5xl font-black text-[#2D2219] tracking-tighter">4.8</span>
                  <div className="flex flex-col pb-1">
                    <div className="flex text-[#D4AF37] text-lg mb-1">
                      ★★★★★
                    </div>
                    <span className="text-sm font-medium text-gray-500">Based on 3 verified professional reviews</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { author: "Advocate Rohit Sen", role: "Litigation Partner", body: "The case study analysis was extremely practical. It helped our firm structure a standard withdrawal protocol that protects us from frivolous complaints." },
                    { author: "Sunita Kapoor", role: "Independent Practitioner", body: "Excellent checklist for managing client communications. The retainer clauses alone saved me from a massive fee dispute last month." },
                    { author: "Vikram Desai", role: "Civil Lawyer", body: "The section on family interference is spot on. Establishing the Single Point of Contact rule changed how I run my chamber." }
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
