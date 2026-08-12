"use client";

import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import Footer from "@/components/Footer";

export default function DraftingSLPGuidePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/drafting-supreme-court-slp-article-136-guide`;

  const metadata = {
    title: "Drafting Supreme Court SLPs (Article 136) | Formatting Guide",
    description: "A highly practical guide on the anatomy of a Special Leave Petition under Article 136, including paper book formatting, the synopsis, and the List of Dates.",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Drafting Supreme Court SLPs under Article 136: A Practical Formatting and Submission Guide",
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
    datePublished: "2026-07-16T00:00:00Z",
    dateModified: new Date().toISOString(),
  };

  const faqs = [
    {
      question: "What is the statutory limitation period for filing an SLP?",
      answer: "Under the Supreme Court Rules, an SLP against a High Court judgment must be filed within 90 days from the date of the judgment. If the High Court refuses a certificate of appeal, it must be filed within 60 days. In matters involving a death sentence or life imprisonment, the limitation period is strictly 30 days."
    },
    {
      question: "What happens if there is a delay in filing the SLP beyond the limitation period?",
      answer: "If the limitation period has expired, the petitioner must file an Interlocutory Application (IA) for Condonation of Delay along with the SLP. The IA must explicitly detail a 'sufficient cause' explaining every single day of delay. The Supreme Court has the discretionary power to condone the delay if the reasons are found genuine and beyond the petitioner's control."
    },
    {
      question: "Why is the List of Dates considered the most crucial part of the SLP?",
      answer: "Supreme Court Justices handle dozens of admission matters daily and often only have a few minutes to review a fresh petition. The List of Dates provides a rapid, chronological snapshot of the entire dispute. A well drafted List of Dates allows the bench to grasp the core factual matrix and the specific legal error committed by the lower courts instantly."
    },
    {
      question: "What is the correct paper size and formatting for a Supreme Court paper book?",
      answer: "Supreme Court pleadings must be printed on A4 size paper, printed on both sides to save paper. The text must be in Times New Roman, font size 14, with double spacing (or 1.5 spacing). The margins must strictly adhere to the Supreme Court Registry rules, typically allowing sufficient space on the left margin for binding."
    },
    {
      question: "Can any advocate file an SLP directly in the Supreme Court?",
      answer: "No. While any enrolled advocate can draft the petition, an SLP can only be formally filed, registered, and presented before the Supreme Court Registry through an Advocate on Record (AOR). The AOR acts as the bridge between the drafting counsel, the arguing senior counsel, and the Supreme Court Registry."
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
    name: "Supreme Court SLP Drafting Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "A comprehensive practical guide on the anatomy, formatting, and drafting strategy of a Special Leave Petition under Article 136.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "92",
      reviewCount: "4",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Drafting Supreme Court SLPs Guide",
        "item": pageUrl,
      },
    ],
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
            Appellate Practice Resources
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
            Drafting Supreme Court SLPs: <br/> <span className="text-[#D4AF37]">Article 136 Framework</span>
          </h1>
          <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
            A highly practical guide on the anatomy of a Special Leave Petition under Article 136, including formatting the paper book, writing a compelling synopsis, and preparing the crucial List of Dates.
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
                { id: "slp-overview", title: "Article 136 Overview" },
                { id: "synopsis-drafting", title: "Synopsis Drafting" },
                { id: "list-of-dates", title: "The List of Dates" },
                { id: "questions-of-law", title: "Questions of Law" },
                { id: "grounds-of-appeal", title: "Grounds of Appeal" },
                { id: "registry-formatting", title: "Registry Formatting" },
                { id: "aor-coordination", title: "AOR Coordination" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
            
            {/* Hook Alert Box */}
            <div className="bg-[#FAF9F5] border-l-4 border-[#D4AF37] p-6 rounded-r-3xl mb-10 shadow-sm">
              <p className="text-[#2D2219] font-medium text-sm sm:text-base leading-relaxed">
                The Supreme Court of India receives thousands of Special Leave Petitions every month. With admission hearings often lasting less than two minutes, the fate of your client's appeal relies entirely on the structural precision, visual formatting, and persuasive clarity of the initial paper book submitted to the bench.
              </p>
            </div>

            {/* Content Sections */}
            <section id="slp-overview" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Constitutional Context
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Understanding Article 136 Overview
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Article 136 of the Constitution of India confers extraordinary discretionary power upon the Supreme Court to grant special leave to appeal from any judgment, decree, determination, sentence, or order passed by any court or tribunal in the territory of India. It is vital to understand that filing an SLP is not an inherent right of the litigant, it is a privilege granted solely at the discretion of the apex court.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Because it is a discretionary remedy, the Supreme Court does not entertain SLPs that merely reargue the factual matrix already decided by the trial court and affirmed by the High Court. The petition must clearly demonstrate a gross miscarriage of justice, a blatant violation of statutory principles, or a substantial question of law of general public importance that requires authoritative interpretation.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                When drafting the SLP, the primary objective is to convince the admission bench that the impugned order of the High Court is so legally flawed or perverse that it warrants the Supreme Court's extraordinary intervention. The drafting must immediately pivot away from emotional narratives and focus sharply on the specific legal errors committed by the lower forums.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                An SLP consists of several distinct structural components mandated by the Supreme Court Rules. These include the cover page, index, synopsis, list of dates, the main petition containing questions of law and grounds, the prayer, and the annexures containing the impugned judgments. Mastering the anatomy of each component is essential for any appellate advocate.
              </p>
            </section>

            <section id="synopsis-drafting" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                The Pitch
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Synopsis Drafting Strategy
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The Synopsis is arguably the most critical prose section of the entire paper book. It is a brief summary, typically not exceeding three to four pages, placed at the very beginning of the petition. Many Supreme Court justices read only the Synopsis and the List of Dates before deciding whether to issue notice or dismiss the petition in limine.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                A compelling Synopsis must instantly contextualize the dispute. It should open with a powerful introductory paragraph defining the core legal issue. For example, instead of beginning with a long history of a property dispute, the Synopsis should state: "The present petition challenges the impugned order wherein the High Court erroneously exercised its writ jurisdiction to interfere with a concluded arbitration award, acting contrary to the settled principles laid down by this Hon'ble Court."
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Following the opening hook, the Synopsis should briefly summarize the trajectory of the litigation. It must highlight the specific relief granted by the trial court, how it was overturned or upheld by the appellate court, and the fatal legal flaw in the final High Court judgment. The language must be objective, respectful, and stripped of inflammatory rhetoric or ad hominem attacks against the opposing party.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The conclusion of the Synopsis must explicitly state the grave injustice that will occur if the Supreme Court does not intervene. By the time the judge finishes reading the Synopsis, they should possess a clear understanding of the factual backdrop and a compelling legal curiosity to examine the questions of law raised in the main petition.
              </p>
            </section>

            <section id="list-of-dates" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Chronological Clarity
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Preparing the List of Dates
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Immediately following the Synopsis is the List of Dates and Events. This is a chronological table that maps out the entire history of the dispute from its inception to the passing of the impugned High Court order. This table is a vital reference tool for the bench during oral arguments, allowing them to instantly verify timelines, limitation periods, and procedural histories.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The formatting of the List of Dates is standardized. The left column contains the specific date, while the right column contains a concise description of the event. A common drafting error is making the event descriptions excessively verbose. The entries should be crisp and factual. For instance, "05.04.2023 - The Trial Court dismissed the injunction application filed by the Respondent."
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Crucially, every event listed must include a cross-reference to the corresponding annexure page number within the paper book. If an entry mentions the filing of an FIR on a specific date, the description must end with "(True copy of the FIR dated XX.XX.XXXX is annexed herewith as Annexure P-1 at Pages __ to __)". This cross-referencing is mandatory for registry clearance.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Advocates must ensure absolute accuracy in this section. If the bench discovers a discrepancy between a date mentioned in the List of Dates and the actual date on the annexed document, it severely damages the credibility of the drafting counsel and the petition itself. The chronological flow must be unbroken, logically leading the reader to the final impugned judgment.
              </p>
            </section>

            <section id="questions-of-law" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Substantive Arguments
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Framing Questions of Law
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The main body of the Special Leave Petition begins with the declaration of the Substantial Questions of Law. The Supreme Court does not operate as a standard appellate court to re-appreciate raw evidence. Therefore, the advocate must extract specific, overarching legal questions from the factual dispute that require authoritative interpretation by the apex court.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                These questions must be framed sharply, usually beginning with "Whether...". For example: "Whether the High Court erred in law by relying upon an unregistered lease deed for the collateral purpose of establishing possession, contrary to Section 49 of the Registration Act?"
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                A well-drafted SLP typically contains three to five robust questions of law. Overloading the petition with twenty trivial questions dilutes the impact of the primary legal arguments. The questions should be sequenced strategically, with the most glaring constitutional or statutory violation placed at the very top of the list.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The bench will often interrupt the senior arguing counsel within the first thirty seconds of the hearing to ask, "Counsel, what is the specific question of law here?" The advocate's ability to immediately direct the bench to a precisely framed question on page 12 of the paper book is often the difference between an issued notice and a swift dismissal.
              </p>
            </section>

            <section id="grounds-of-appeal" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Factual Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Structuring the Grounds of Appeal
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Following the questions of law, the petition details the Grounds of Appeal. This section expands upon the legal questions, integrating them with the specific facts of the case. Each ground is typically lettered sequentially (A, B, C, D) and should focus on a distinct error committed by the impugned judgment.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                When drafting grounds, it is essential to specifically attack the reasoning of the High Court. Statements like "Because the High Court failed to appreciate..." or "Because the High Court's reliance on the judgment in X vs Y is entirely misplaced as the facts are distinguishable..." are standard formulations.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Advocates should explicitly cite binding Supreme Court precedents within the grounds to demonstrate that the High Court's order is in direct contravention of established law. However, extensive block quotes from judgments should be avoided. Instead, succinctly state the ratio decidendi of the precedent and explain how the High Court violated it.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The grounds must also include a mandatory declaration stating that no other petition seeking the same relief has been filed before the Supreme Court, and that the petitioner has exhausted all alternative statutory remedies available under the law before approaching the apex court under Article 136.
              </p>
            </section>

            <section id="registry-formatting" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Compliance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Registry Formatting and Annexures
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The Supreme Court Registry enforces exceedingly strict formatting rules for paper books. A brilliantly argued petition will face immediate objections and rejection at the filing counter if it fails to adhere to the physical formatting guidelines mandated by the Supreme Court Rules, 2013.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                All pleadings must be typed on A4 size paper, printed on both sides to conserve paper. The font must strictly be Times New Roman, size 14, with double or 1.5 line spacing. The margins must be precise: 4 cm on the left (to allow for binding without obscuring text) and 2.5 cm on the right, top, and bottom.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The annexures attached to the petition must be clean, legible true copies of the lower court records. If any document is in a regional language (e.g., a police FIR in Hindi or a property deed in Marathi), an official, certified English translation must be annexed alongside the original document. Unreadable, blurry photocopies are an immediate ground for registry objection.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The paper book must be bound comprehensively, with a unified pagination system running from the cover page through to the final annexure. The master index must perfectly correspond to this pagination. Any discrepancy between the index page numbers and the actual location of an annexure will cause substantial delays during the registry clearance process.
              </p>
            </section>

            <section id="aor-coordination" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Procedural Mechanism
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                AOR Coordination and Curing Defects
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                While a local trial advocate or High Court counsel may draft the initial manuscript of the SLP, the formal filing mechanism at the Supreme Court is entirely controlled by the Advocate on Record (AOR) system. An AOR is a specially qualified lawyer who has cleared the rigorous Supreme Court AOR examination and maintains a registered office within a specific radius of the court.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The drafting counsel must collaborate closely with the engaged AOR. The AOR acts as the bridge between the client, the drafting advocate, the Senior Advocate briefed for oral arguments, and the Supreme Court Registry. The AOR assumes ultimate responsibility for the contents of the paper book and must sign the certificate of fitness appended to the SLP.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Once the AOR files the petition, the Registry scrutinizes the paper book for procedural defects, such as missing translations, illegible pages, incorrect court fee stamps, or unsigned affidavits. These defects are officially communicated to the AOR.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The legal team must work rapidly to cure these defects within the stipulated time frame, typically 28 days. Failure to cure defects results in the petition being listed before the Chamber Judge for dismissal. A seamless coordination between the local drafting counsel and the Delhi-based AOR ensures that the SLP clears the registry without unnecessary delays, progressing smoothly toward its crucial admission hearing.
              </p>
            </section>

            {/* FAQs Section */}
            <section id="faq" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Knowledge Base
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-8 tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                      openIndex === index 
                        ? 'border-[#D4AF37] bg-[#FDFBF7] shadow-sm' 
                        : 'border-gray-200 bg-white hover:border-[#D4AF37]/50'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                    >
                      <span className="font-bold text-[#2D2219] pr-8">{faq.question}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        openIndex === index ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <span className="text-xl leading-none">{openIndex === index ? '−' : '+'}</span>
                      </div>
                    </button>
                    {openIndex === index && (
                      <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
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
