"use client";

import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import Footer from "@/components/Footer";

export default function CaseRecordManagementPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/case-record-management-indian-advocates`;

  const metadata = {
    title: "Case Record Management for Indian Advocates | Systems",
    description: "Learn how to organize case records and trial files. Discover physical folder indexing, digital backup strategies, and database tracking for chambers.",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Managing Case Records and Trial Files: A Modern Filing System for Indian Advocates",
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
      question: "How should physical trial files be structured in an advocate's office?",
      answer: "Physical files should use a multi-compartment structure: Section 1 for court orders and listings, Section 2 for pleadings (petitions, replies, applications), Section 3 for evidence and exhibit sheets, and Section 4 for research notes and draft structures."
    },
    {
      question: "What is the best way to back up physical files digitally?",
      answer: "Use high-speed document scanners to scan every filing, order, and notice into PDF files. Host these on secure cloud database servers using a unified naming convention."
    },
    {
      question: "How do advocates track case listing dates in India?",
      answer: "Advocates link their active case files to the official e-Courts services database. This integration automatically tracks next listing dates, daily board summaries, and new order uploads."
    },
    {
      question: "What is the retention period for closed litigation files?",
      answer: "Under general guidelines, retain case records for a minimum of 3 to 5 years after final disposal or appellate timelines. Obtain client confirmation before disposing of physical records."
    },
    {
      question: "Can cloud databases replace physical files entirely in Indian courts?",
      answer: "While e-filing portals allow digital management, district and trial courts still require physical file presentations during hearings, making a hybrid database setup essential."
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
    name: "Case Record Management Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Trial record and document management manual for litigation advocates, explaining indexing rules and digital backup setups.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "92",
      reviewCount: "2",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Case Management", item: pageUrl }
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
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500 rounded-full blur-[150px] opacity-15 z-0 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full mb-6 border border-[#D4AF37]/35">
            Chamber Operations &amp; File Indexing
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
            Case Record &amp; File Management: <br/>
            <span className="text-[#D4AF37]">Modern Systems for Advocates</span>
          </h1>
          <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
            A comprehensive operational guide on organizing physical trial files, creating secure digital backup directories, and implementing case tracking databases.
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
                { id: "records-intro", title: "Filing Strategy" },
                { id: "physical-filing", title: "Physical Filing" },
                { id: "digital-backups", title: "Digital Backups" },
                { id: "naming-conventions", title: "Naming Conventions" },
                { id: "ecourts-integration", title: "e-Courts Integration" },
                { id: "clerk-duties", title: "Clerk Responsibilities" },
                { id: "retention-policies", title: "File Retention" },
                { id: "records-checklist", title: "Setup Checklist" },
                { id: "storage-comparison", title: "Storage Matrix" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
                {/* Section 1: The Administrative Foundation of Trial Chambers */}
            <section id="records-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                The Administrative Foundation of Trial Chambers
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Chamber organization is crucial for managing litigation caseloads. Organizing trial folders systematically protects client data, prevents filing delays, and ensures advocates can locate research files quickly during courtroom hearings.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Establishing structured document management requires coordination between advocates and registry clerks. To align your chamber file database with courtroom requirements, advocates should review the court prep steps detailed in the <Link href="/how-to-prepare-for-first-trial-advocate-advice" className="text-[#D4AF37] font-bold hover:underline">Trial Preparation Guide</Link>. Reviewing client intake procedures in our <Link href="/client-onboarding-lead-qualification-lawyers" className="text-[#D4AF37] font-bold hover:underline">Client Onboarding Guide</Link> also ensures client files are indexed correctly from day one.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Many trial complications occur because chambers do not maintain clear case logs or lose track of registry filing notices. Implementing a hybrid database setup (combining physical folders with encrypted cloud backups) protects your practice from data losses, ensuring steady business operations.
              </p>
            </section>

            {/* Section 2: Physical Filing and Courtroom Folder Organization */}
            <section id="physical-filing" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Physical Filing and Courtroom Folder Organization
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Physical folders must remain clean and organized for courtroom presentations. Use durable multi-compartment files to store case documents, keeping them structured by filing type.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Divide the folder into four key sections: (1) Daily order sheets and listing schedules. (2) Petitions, written statements, and replies. (3) Exhibit logs and evidence documents. (4) Case research notes and draft structures.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Color-coding folders based on the court level (e.g. green for High Court, blue for District Court) makes identifying files quick during busy mornings, saving valuable time.
              </p>
            </section>

            {/* Section 3: Digital Backups and Encrypted Cloud Storage */}
            <section id="digital-backups" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Digital Backups and Encrypted Cloud Storage
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Digital copies protect your chamber records from physical damage, such as office leaks or fires. Train your clerks to scan every new filing, order, and notice into PDF files.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Host these PDFs on secure cloud database servers. Enable double-factor authentication, set access permissions for office interns, and use password-protected drives to share client files safely.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, configure automated backup systems to duplicate records daily. This database precaution ensures you can retrieve files during hearings if local server connections fail.
              </p>
            </section>

            {/* Section 4: Naming Conventions and Directory Structure for Case Files */}
            <section id="naming-conventions" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Naming Conventions and Directory Structure for Case Files
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                A unified naming convention is key to a functional digital database. Avoid saving files with generic titles like "Scan1" or "DraftPetition."
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Use a structured naming system: (Year)_(Case Type)_(Parties)_(Document Type). For example: "2026_CS_Malik_vs_State_WrittenStatement.pdf". This format makes finding files using basic search tools quick.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Maintain this directory layout across all firm computers. Keeping files structured by case name and date helps interns prepare briefs efficiently, reducing coordination errors.
              </p>
            </section>

            {/* Section 5: Case Tracking and e-Courts Services Database Integration */}
            <section id="ecourts-integration" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Case Tracking and e-Courts Services Database Integration
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The e-Courts app is a valuable tool for tracking litigation schedules. Advocates should link their active case lists to their e-Courts profiles to receive listing alerts.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This integration provides updates on daily board positions, next hearing dates, and new order uploads. Automating this tracking reduces the risk of missed hearings or registry deadlines.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Ensure your clerks verify digital listings against the printed daily boards. This verification checks for errors in database records, protecting your clients' interests.
              </p>
            </section>

            {/* Section 6: Clerk Duties in Trial File Audits and Registry Clearance */}
            <section id="clerk-duties" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Clerk Duties in Trial File Audits and Registry Clearance
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Chamber clerks must audit physical folders periodically. Ensure every file contains certified copies of all orders and verified copies of pleadings.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Clerks are responsible for clearing registry objections. They must track filing notices, correct formatting objections, and re-file documents within limitation timelines.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Organizing these registry steps in a central log book ensures the chamber tracks case statuses, minimizing procedural delays.
              </p>
            </section>

            {/* Section 7: File Retention, Client Handovers, and Disposal Policies */}
            <section id="retention-policies" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                File Retention, Client Handovers, and Disposal Policies
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Retaining old client files indefinitely leads to cluttered offices. Establish a clear file retention policy to manage closed records.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Keep litigation files for a minimum of 3 to 5 years after final disposal or appellate timelines. Send clients a formal notice requesting they collect their original documents before disposal.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                For disposed records, use secure document shredding services. Destroying files protects client data privacy, maintaining compliance with professional ethics.
              </p>
            </section>

            {/* Section 8: Step-by-Step Document Management Protocol */}
            <section id="records-checklist" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Step-by-Step Document Management Protocol
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To manage chamber records systematically, follow a structured process. Access our sitemap at <Link href="/sitemap" className="text-[#D4AF37] font-bold hover:underline">Sitemap Index</Link> to locate related operational resources.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Review this protocol monthly to ensure all file naming and scanning tasks are completed correctly by your clerks.
              </p>

              {/* Step Checklist Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#2D2219] mb-4">Filing Protocol</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Index Incoming Case Records", desc: "Sort client files, verify original documents, and create a physical folder indexed by case name." },
                    { step: "2", title: "Scan Documents to PDF", desc: "Scan all pleadings, orders, and evidence files into high-resolution PDFs using unified naming rules." },
                    { step: "3", title: "Host in Encrypted Cloud Drives", desc: "Upload the PDFs to secure cloud database drives. Configure user access permissions." },
                    { step: "4", title: "Link to e-Courts App Profiles", desc: "Register the case number in the e-Courts app to track listing dates and new order uploads." }
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

            {/* Section 9: File Storage Formats Matrix */}
            <section id="storage-comparison" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                File Storage Formats Matrix
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Evaluating different file storage models based on costs, access speeds, and security help advocates choose the right setup for their chambers.
              </p>

              {/* Comparison Table Section */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Storage Model</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Average Setup Cost</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Courtroom Accessibility</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Data Loss Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Physical Cabinets</td>
                      <td className="p-4 text-xs text-gray-600">Low (one-time furniture cost)</td>
                      <td className="p-4 text-xs text-red-600 font-medium">Limited (requires carrying folders)</td>
                      <td className="p-4 text-xs text-red-600 font-medium">High (damage from office fires/leaks)</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Local Hard Drives</td>
                      <td className="p-4 text-xs text-gray-600">Low (external drive purchase)</td>
                      <td className="p-4 text-xs text-gray-600">Moderate (requires device transfers)</td>
                      <td className="p-4 text-xs text-red-600 font-medium">Moderate (device failures/corruption)</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Encrypted Cloud Storage</td>
                      <td className="p-4 text-xs text-gray-600">Moderate (monthly subscription)</td>
                      <td className="p-4 text-xs text-green-600 font-medium">High (anytime access via mobile)</td>
                      <td className="p-4 text-xs text-green-600 font-medium">Low (automated digital backups)</td>
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
                  <span className="text-5xl font-black text-[#2D2219] tracking-tighter">4.8</span>
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
