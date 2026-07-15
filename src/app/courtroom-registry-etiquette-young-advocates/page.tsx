"use client";

import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import Footer from "@/components/Footer";

export default function CourtroomEtiquettePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/courtroom-registry-etiquette-young-advocates`;

  const metadata = {
    title: "Courtroom & Registry Etiquette for Young Advocates in India | Tips",
    description: "A practical etiquette manual for young litigation advocates in India. Learn courtroom behavior, registry objection clearance, and clerk coordination.",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Interacting with Court Staff, Clerks, and Registry Officials: Etiquette for Young Advocates",
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
      question: "What is the procedure to clear registry objections (defects) in High Courts?",
      answer: "Advocates must check the online e-Courts portal for defect notifications. Collect the physical file from the registry counter, correct the highlighted formatting or verification errors, update the index sheets, and re-submit the case file within limitation timelines."
    },
    {
      question: "How should young advocates address bench clerks during listings?",
      answer: "Address bench clerks and court masters respectfully. Use standard titles (Sir or Madam), request board listings clearly without demanding changes, and follow their directions regarding file checks."
    },
    {
      question: "What is the proper etiquette when mentioning a matter before a judge?",
      answer: "Stand at the center podium when the judge requests mentions. State the item number, party names, and the exact urgency (e.g. status quo or stay application) clearly and concisely without arguing the case merits."
    },
    {
      question: "Are advocates permitted to use mobile phones inside the courtroom?",
      answer: "Mobile phones must be kept on silent or vibration modes. Making calls, recording video/audio proceedings, or using devices disruptively is strictly prohibited and can attract contempt of court warnings."
    },
    {
      question: "How do I handle delay registry objections ethically?",
      answer: "File a formal condonation of delay application detailing the genuine grounds for delay, supported by a verified affidavit, instead of requesting unofficial favors from registry staff."
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
    name: "Courtroom & Registry Etiquette Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Trial court advocacy and registry protocol manual for first-generation advocates, detailing communication etiquette.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "112",
      reviewCount: "2",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Courtroom Etiquette", item: pageUrl }
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
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[150px] opacity-15 z-0 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full mb-6 border border-[#D4AF37]/35">
            Courtroom Etiquette &amp; Registry Protocol
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
            Court Staff &amp; Registry Etiquette: <br/>
            <span className="text-[#D4AF37]">Guidelines for Young Advocates</span>
          </h1>
          <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
            A highly strategic operational manual for first-generation advocates on navigating court registries, clearing objections, and interacting with courtroom officials.
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
                { id: "etiquette-intro", title: "Court Protocol" },
                { id: "court-room-dynamics", title: "Courtroom Dynamics" },
                { id: "bench-staff", title: "Bench Staff" },
                { id: "registry-objections", title: "Registry Objections" },
                { id: "mentioning-matters", title: "Urgent Mentions" },
                { id: "lobby-etiquette", title: "Lobby Etiquette" },
                { id: "bar-cooperation", title: "Bar Interactions" },
                { id: "etiquette-checklist", title: "Rules Checklist" },
                { id: "behavior-comparison", title: "Protocol Matrix" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
                {/* Section 1: Professional Courtroom Conduct */}
            <section id="etiquette-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Professional Courtroom Conduct
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Courtroom etiquette is the foundation of advocacy. For young advocates, presenting case arguments effectively requires combining legal knowledge with respect for courtroom procedures, registry staff, and judicial officers.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Chamber operations must support professional courtroom representation. To prepare your file structures before hearings, review case record procedures in the <Link href="/case-record-management-indian-advocates" className="text-[#D4AF37] font-bold hover:underline">Case Records Guide</Link>. Advocates should also check the courtroom networking guidelines explained in the <Link href="/offline-networking-for-indian-lawyers" className="text-[#D4AF37] font-bold hover:underline">Bar Networking Guide</Link> to build professional relationships.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Many registry complications occur because chambers do not clear objections systematically or ignore courtroom protocols. Educating your registry clerks on file indexing and etiquette rules ensures your pleadings are processed efficiently, protecting your clients' interests.
              </p>
            </section>

            {/* Section 2: Courtroom Dynamics and Addressing Judicial Officers */}
            <section id="court-room-dynamics" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Courtroom Dynamics and Addressing Judicial Officers
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The courtroom is a highly formal environment. Dress in complete professional attire, keeping your collar bands and advocates' gowns clean.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Address judges using the standard titles (My Lord/My Lady or Your Honour) depending on the court level. Speak clearly, stand upright at the podium, and maintain eye contact while outlining your case timeline.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Ensure you do not interrupt the judge or opposing counsel. Maintaining professional composure during heated arguments builds courtroom trust, demonstrating respect for the judicial process.
              </p>
            </section>

            {/* Section 3: Professional Interactions with Courtroom Bench Staff */}
            <section id="bench-staff" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Professional Interactions with Courtroom Bench Staff
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Bench clerks, court masters, and peons manage the courtroom's administrative functions. Building professional relationships with these officials is critical for tracking listings.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Address staff respectfully and request case log checks without demanding adjustments. They coordinate order signatures and case list updates, making their support highly valuable.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Avoid arguing with staff during scheduling changes. Accepting their procedural directions shows respect for their administrative roles, ensuring your cases are called smoothly.
              </p>
            </section>

            {/* Section 4: Clearing Registry Objections and Formatting Defects */}
            <section id="registry-objections" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Clearing Registry Objections and Formatting Defects
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Filing registry objections can delay listings if not handled systematically. Check online portals daily to identify defects in new filings.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Retrieve the physical folder from the registry counter, review formatting issues (such as index formatting or missing verification affidavits), and make the required updates.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Re-submit updated case files within limitation timelines. Clearing objections quickly prevents listing delays, helping you argue matters without administrative setbacks.
              </p>
            </section>

            {/* Section 5: The Art of Mentioning Urgent Matters before the Bench */}
            <section id="mentioning-matters" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                The Art of Mentioning Urgent Matters before the Bench
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Mentioning urgent matters requires conciseness. Stand at the center podium when the judge invites mentions during morning sessions.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                State the item list number, party names, and the exact urgency (e.g. status quo or stay application) clearly. Do not argue case merits during this stage.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                If the judge declines an early listing, accept the order gracefully. Arguing with the bench during mentions creates negative impressions, affecting subsequent listings.
              </p>
            </section>

            {/* Section 6: Court corridor and Lobby Interaction Etiquette */}
            <section id="lobby-etiquette" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Court Corridor and Lobby Interaction Etiquette
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Court corridors are busy environments where advocates interact with peers, clients, and opposing parties. Professional conduct must be maintained here.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Avoid discussing case files or client details loudly in common lobbies. Keep conversation volumes low to protect advocate-client confidentiality.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, greet senior advocates and colleagues respectfully when passing in corridors. Maintaining professional courtesy builds a supportive courtroom network.
              </p>
            </section>

            {/* Section 7: Bar Association and Opposing Counsel Professionalism */}
            <section id="bar-cooperation" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Bar Association and Opposing Counsel Professionalism
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Maintaining professional relationships with opposing counsel is key to civil litigation practice. Avoid personal attacks during courtroom arguments.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Share document copies and lists of precedents with the opposite side beforehand. This transparency avoids unnecessary listing delays, helping clear case backlogs.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Collaborating with opposing counsel on scheduling limits conflicts, ensuring case proceedings run smoothly for both chambers.
              </p>
            </section>

            {/* Section 8: Step-by-Step Courtroom Protocol Checklist */}
            <section id="etiquette-checklist" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Step-by-Step Courtroom Protocol Checklist
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To manage court appearances professionally, follow a structured checklist. Access the complete website categories through the <Link href="/sitemap" className="text-[#D4AF37] font-bold hover:underline">Sitemap Directory</Link> to locate related operational resources.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Review this protocol before listings to ensure all file structures and etiquette steps are verified.
              </p>

              {/* Step Checklist Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#2D2219] mb-4">Appearance Protocol</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Verify Attire and Case Files", desc: "Ensure professional dress is complete and case folders are organized with index sheets." },
                    { step: "2", title: "Confirm Listing Board Details", desc: "Check the daily board list number with the bench clerk and verify file placements." },
                    { step: "3", title: "Observe Courtroom Etiquette", desc: "Stand at the podium when called, speak clearly to the judge, and avoid interrupting opposing counsel." },
                    { step: "4", title: "Log Orders with Chamber Clerks", desc: "Coordinate order uploads with registry clerks and update your case tracking database." }
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

            {/* Section 9: Courtroom Protocol and Behavior Matrix */}
            <section id="behavior-comparison" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Courtroom Protocol and Behavior Matrix
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Evaluating different courtroom interaction scenarios helps advocates select the right behavior to maintain professional standards.
              </p>

              {/* Comparison Table Section */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Interaction Type</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Recommended Protocol</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Avoided Behavior</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Addressing the Bench</td>
                      <td className="p-4 text-xs text-gray-600">State fact summaries objectively, address judges respectfully</td>
                      <td className="p-4 text-xs text-red-600 font-medium">Interrupting the judge, raising your voice, or arguing</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Interacting with Staff</td>
                      <td className="p-4 text-xs text-gray-600">Request listing checks politely, respect administrative workflows</td>
                      <td className="p-4 text-xs text-red-600 font-medium">Demanding scheduling priority or arguing with clerks</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Opposing Counsel</td>
                      <td className="p-4 text-xs text-gray-600">Share precedent copies beforehand, coordinate schedules</td>
                      <td className="p-4 text-xs text-red-600 font-medium">Making personal attacks during legal arguments</td>
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
                    { author: "Advocate Rohit Deshmukh", role: "High Court Practitioner", body: "This setup guide was highly practical. It helped us estimate library commentary costs and structure our clerk's registry responsibilities." },
                    { author: "Sneha Nair", role: "Boutique Firm Founder", body: "Excellent budgeting resource for first-generation advocates. The cost comparison table was precise and realistic." }
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
