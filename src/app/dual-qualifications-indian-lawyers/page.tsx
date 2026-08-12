"use client";

import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import Footer from "@/components/Footer";

export default function DualQualificationsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/dual-qualifications-indian-lawyers`;

  const metadata = {
    title: "Dual Qualifications for Indian Lawyers | SQE UK, NCA Canada, US Bar",
    description: "Learn how Indian lawyers qualify in foreign jurisdictions. Study NCA Canada, SQE UK, and California/NY Bar exams pathways.",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Dual Qualifications for Indian Lawyers: Navigating Foreign Bar Examinations",
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
      question: "Can an Indian LL.B. graduate write the New York Bar Exam directly?",
      answer: "Yes, graduates with a three-year or five-year professional LL.B. from a BCI-approved Indian university can apply for evaluation to the New York Board of Law Examiners (BOLE). If approved, they can sit the bar exam without pursuing a US LL.M."
    },
    {
      question: "What is the SQE pathway for Indian advocates in the UK?",
      answer: "The Solicitors Qualifying Examination (SQE) is the centralized assessment to qualify as a solicitor in England and Wales. Registered Indian advocates can request exemptions from the SQE2 practical assessment, needing only to pass the SQE1 functioning legal knowledge exams."
    },
    {
      question: "How long does the NCA Canada qualification process take for Indian lawyers?",
      answer: "The National Committee on Accreditation (NCA) process typically takes 12 to 18 months. After credential evaluation, applicants must pass a set of challenge exams (ranging from 4 to 8 subjects) before completing local provincial licensing."
    },
    {
      question: "Are foreign legal qualifications recognized by the Bar Council of India?",
      answer: "The BCI allows foreign-qualified lawyers to practice non-litigation corporate law and international arbitration in India on a reciprocal basis, but active courtroom advocacy is reserved for registered Indian advocates."
    },
    {
      question: "What are the career benefits of dual qualifications for corporate lawyers?",
      answer: "Dual qualification allows lawyers to advise on cross-border transactions, manage international disputes, and secure positions at multinational corporations or international law firms."
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
    name: "Dual Qualifications for Indian Lawyers Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Expert guide explaining the eligibility, syllabus, fees, and career pathways for foreign bar exams (UK, US, Canada) for Indian law graduates.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "118",
      reviewCount: "2",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Dual Qualifications", item: pageUrl }
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
            Cross-Border Practice &amp; Global Bar Exams
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
            Dual Qualifications for Indian Lawyers: <br/>
            <span className="text-[#D4AF37]">NCA Canada, SQE UK &amp; US Bar</span>
          </h1>
          <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
            A comprehensive operational guide on eligibility requirements, syllabus patterns, fee structures, and career benefits of international qualifications.
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
                { id: "global-practice", title: "Global Practice Strategy" },
                { id: "sqe-uk", title: "SQE UK Pathway" },
                { id: "nca-canada", title: "NCA Canada Process" },
                { id: "us-bar-exams", title: "US Bar Examinations" },
                { id: "cross-border-arbitration", title: "Cross-Border Disputes" },
                { id: "bci-reciprocity", title: "BCI Reciprocity Rules" },
                { id: "career-advantages", title: "Career Advancements" },
                { id: "qualification-checklist", title: "Study Checklist" },
                { id: "exam-comparison", title: "Exam Comparison" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
                {/* Section 1: The Rise of Cross-Border Legal Advisory */}
            <section id="global-practice" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                The Rise of Cross-Border Legal Advisory
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                With corporate entities engaged in cross-border transactions and international mergers, the demand for dual-qualified legal professionals has grown. Indian lawyers who qualify in foreign jurisdictions can advise on international contracts, manage cross-border compliance, and represent clients in multi-jurisdictional disputes.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Transitioning to international practice requires mastering foreign regulatory frameworks. To support corporate clients effectively during cross-border operations, advocates should understand corporate structures as detailed in the <Link href="/startup-registration-incorporation-india-guide" className="text-[#D4AF37] font-bold hover:underline">Startup Registration Guide</Link>. Understanding contract drafting frameworks, as explained in our <Link href="/ai-prompt-engineering-legal-drafting" className="text-[#D4AF37] font-bold hover:underline">AI Drafting Guide</Link>, also helps advocates prepare clean clauses that comply with international governing laws.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Pursuing foreign bar exams is a structured upskilling path. Unlike traditional domestic litigation, which is subject to local courtroom backlogs, cross-border corporate advisory operations command premium billing rates, making dual qualification a highly lucrative career pivot for ambitious advocates.
              </p>
            </section>

            {/* Section 2: Navigating the SQE UK Solicitor Qualification Pathway */}
            <section id="sqe-uk" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Navigating the SQE UK Solicitor Qualification Pathway
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The Solicitors Qualifying Examination (SQE) is the centralized gateway to qualifying as a solicitor in England and Wales. It replaces the old Qualified Lawyers Transfer Scheme (QLTS), opening a clear pathway for foreign-qualified lawyers.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The SQE is split into two phases: SQE1 testing functioning legal knowledge via multiple-choice questions, and SQE2 evaluating practical legal skills. Registered Indian advocates can apply for exemptions from SQE2 based on their domestic credentials, needing only to clear SQE1.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Preparing for SQE1 requires mastering UK constitutional law, land law, torts, and contract frameworks. Successfully passing this examination permits advocates to register with the Solicitors Regulation Authority (SRA), establishing a global practice.
              </p>
            </section>

            {/* Section 3: The NCA Canada Accreditation Process for Foreign Lawyers */}
            <section id="nca-canada" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                The NCA Canada Accreditation Process for Foreign Lawyers
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                For Indian advocates relocating to Canada, securing accreditation from the National Committee on Accreditation (NCA) is the first step toward provincial licensing. The NCA evaluates your Indian law degree to identify gaps relative to Canadian common law requirements.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Applicants are typically assigned challenge exams in core subjects, including Canadian administrative law, constitutional law, criminal procedure, and professional responsibility. Passing these self-study challenge exams yields an NCA Certificate of Qualification.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Once qualified, applicants must complete provincial licensing steps, which include local bar exams and articling (apprenticeship) requirements, before securing admission to the provincial bar as a barrister or solicitor.
              </p>
            </section>

            {/* Section 4: Writing US Bar Exams: California and New York Entry Pathways */}
            <section id="us-bar-exams" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Writing US Bar Exams: California and New York Entry Pathways
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The United States does not have a single national bar exam. Instead, each state sets its own licensing guidelines. New York and California are the most popular choices for foreign-qualified lawyers due to their flexible eligibility rules.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Registered Indian advocates with active court practice experience can sit the California Bar Exam directly as attorney applicants, bypassing the requirement for an LL.M. degree. New York requires a detailed evaluation of your Indian LL.B. credentials to verify equivalency before authorizing registration.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Preparing for these exams requires mastering the Multistate Bar Examination (MBE) and essay writing. Gaining these qualifications establishes you as a recognized practitioner in high-value US-India corporate transaction markets.
              </p>
            </section>

            {/* Section 5: International Commercial Arbitration and Multi-Jurisdictional Disputes */}
            <section id="cross-border-arbitration" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                International Commercial Arbitration and Multi-Jurisdictional Disputes
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                International arbitration is the preferred dispute resolution channel for cross-border commercial contracts. Dual-qualified advocates represent corporate clients in tribunals under institutional rules like SIAC, LCIA, or MCIA.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                These disputes require a deep understanding of private international law and treaty enforcement. Having dual credentials helps you draft arbitration clauses that protect business interests, minimizing enforcement risks.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                As multinational corporations prioritize quick, private dispute resolutions, lawyers with cross-border expertise command premium arbitration briefs, making this a highly respected and growing specialization.
              </p>
            </section>

            {/* Section 6: BCI Guidelines on Reciprocity and Foreign Law Practice in India */}
            <section id="bci-reciprocity" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                BCI Guidelines on Reciprocity and Foreign Law Practice in India
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                In 2023, the Bar Council of India (BCI) notified rules permitting foreign lawyers and law firms to open offices in India. However, this entry operates under strict regulatory constraints.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Foreign practitioners are limited to non-litigation corporate advisory and international commercial arbitration. Active courtroom representation before local courts and tribunals remains reserved for registered Indian advocates.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                These reciprocity rules are designed to protect domestic advocates while encouraging cross-border trade. Understanding these limits is critical when structuring partnerships with international law firms or corporate entities.
              </p>
            </section>

            {/* Section 7: Career Advantages of Dual Credentials in Top Corporate Firms */}
            <section id="career-advantages" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Career Advantages of Dual Credentials in Top Corporate Firms
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Within corporate law firms, dual-qualified associates hold a significant advantage. They are preferred for transaction teams handling cross-border acquisitions, joint ventures, and international capital markets.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This credential increases your visibility and career growth potential. Transitioning advocates often secure lateral placements at top international law firms in legal hubs like London, Dubai, or Singapore.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, dual credentials lead to higher compensation. Advocates with cross-border expertise can charge premium retainer fees for corporate consulting projects, ensuring consistent practice growth.
              </p>
            </section>

            {/* Section 8: Step-by-Step Foreign Qualification Protocol */}
            <section id="qualification-checklist" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Step-by-Step Foreign Qualification Protocol
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To qualify in a foreign jurisdiction, advocates should follow a disciplined study and registration plan. Access the complete website categories through the <Link href="/sitemap" className="text-[#D4AF37] font-bold hover:underline">Sitemap Directory</Link> to find related regulatory articles.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Review this protocol yearly to align your preparation schedule and manage registration fees effectively.
              </p>

              {/* Step Checklist Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#2D2219] mb-4">Qualification Protocol</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Select Destination Jurisdiction", desc: "Choose a target jurisdiction (UK, US, Canada) based on your career goals and qualification eligibility." },
                    { step: "2", title: "Submit Credentials for Evaluation", desc: "Send your BCI-approved Indian law degree to the local board of examiners to verify equivalency." },
                    { step: "3", title: "Register for Centralized Exams", desc: "Enroll in the required challenge exams (like SQE1 or NCA exams) and access study materials." },
                    { step: "4", title: "Complete Provincial Licensing", desc: "Pass the exams, fulfill articling requirements if applicable, and secure formal admission to the local bar." }
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

            {/* Section 9: Foreign Bar Exams Comparison */}
            <section id="exam-comparison" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Foreign Bar Exams Comparison
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Evaluating the preparation timelines, costs, and qualification pathways helps advocates choose the right bar exam for their global practice goals.
              </p>

              {/* Comparison Table Section */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Bar Exam</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Preparation Timeline</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Pecuniary Cost Range</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Attorney Exemption Pathway</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">SQE UK</td>
                      <td className="p-4 text-xs text-gray-600">6 to 12 months</td>
                      <td className="p-4 text-xs text-gray-600">4,000 to 6,000 GBP</td>
                      <td className="p-4 text-xs text-green-600 font-medium">Yes (SQE2 exemption for registered advocates)</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">NCA Canada</td>
                      <td className="p-4 text-xs text-gray-600">12 to 18 months</td>
                      <td className="p-4 text-xs text-gray-600">3,000 to 5,000 CAD</td>
                      <td className="p-4 text-xs text-red-600 font-medium">No (requires passing assigned challenge exams)</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">California US</td>
                      <td className="p-4 text-xs text-gray-600">4 to 6 months</td>
                      <td className="p-4 text-xs text-gray-600">1,500 to 3,000 USD</td>
                      <td className="p-4 text-xs text-green-600 font-medium">Yes (active advocates bypass LL.M. requirements)</td>
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
