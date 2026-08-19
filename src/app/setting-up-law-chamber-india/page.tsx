import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import LawyerFaqAccordion from "@/components/LawyerFaqAccordion";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Setting Up an Independent Law Chamber in India",
  description:
    "A complete manual for advocates setting up an independent law office. Learn location budgeting, library selection, clerk management, and digital tools.",
  alternates: {
    canonical: "https://www.amaconnect.in/setting-up-law-chamber-india",
  },
  openGraph: {
    title: "Setting Up an Independent Law Chamber in India",
    description:
      "A complete manual for advocates setting up an independent law office. Learn location budgeting, library selection, clerk management, and digital tools.",
    url: "https://www.amaconnect.in/setting-up-law-chamber-india",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function ChamberSetupPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/setting-up-law-chamber-india`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Setting Up an Independent Law Chamber in India: A Practical Infrastructure and Budgeting Guide",
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
      question: "What is the minimum budget required to start an independent law chamber in India?",
      answer: "A basic home-office or shared space setup requires an initial budget of 50,000 to 1.5 Lakh Rupees for legal research databases, essential reference books, basic furniture, and internet connectivity. Leasing an independent commercial cabin near a High Court or District Court typically increases this budget to 3 Lakh to 5 Lakh Rupees depending on location advances."
    },
    {
      question: "Which legal databases are essential for a new litigation practice?",
      answer: "Subscribing to SCC Online or ManuPatra is crucial for access to Supreme Court and High Court precedents. Advocates can supplement these with free portals like Indian Kanoon and e-Courts databases for trial court filings."
    },
    {
      question: "Are advocates permitted to put up name boards outside their office under BCI rules?",
      answer: "Yes, under the Bar Council of India guidelines, advocates can display a name board of a reasonable size outside their chambers. The board must only contain the advocate's name, qualifications, and enrollment details without any promotional copy or graphics."
    },
    {
      question: "How do I hire and manage registry filing clerks ethically?",
      answer: "Hire experienced clerks registered with the local bar association registry. Ensure they understand court registry regulations and maintain clear logs of file clearance steps to prevent procedural delays."
    },
    {
      question: "What are the rules regarding office sharing among advocates?",
      answer: "Advocates can share office spaces to reduce rent costs, provided they maintain separate client records and secure database systems to protect advocate-client confidentiality."
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
    name: "Setting Up an Independent Law Chamber Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "A complete budgeting and resource guide for advocates establishing independent litigation offices near Indian courts.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "115",
      reviewCount: "2",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Chamber Setup", item: pageUrl }
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
            Litigation Chambers &amp; Infrastructure
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
            Setting Up an Independent Law Chamber: <br/>
            <span className="text-[#D4AF37]">Infrastructure &amp; Budgeting</span>
          </h1>
          <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
            A practical checklist for independent advocates on office selection, legal library acquisition, registry staff recruitment, and technology budgets near Indian courts.
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
                { id: "setup-intro", title: "Chamber Strategy" },
                { id: "location-selection", title: "Location Selection" },
                { id: "office-budgeting", title: "Office Budgeting" },
                { id: "legal-library", title: "Legal Library" },
                { id: "software-databases", title: "Digital Databases" },
                { id: "clerk-management", title: "Clerk Hiring" },
                { id: "ethical-governance", title: "Ethical Board Rules" },
                { id: "chamber-checklist", title: "Setup Checklist" },
                { id: "comparison-matrix", title: "Office Cost Matrix" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
                {/* Section 1: The Transition to Independent Advocacy Chambers */}
            <section id="setup-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                The Transition to Independent Advocacy Chambers
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Establishing an independent legal practice represents a significant career milestone for litigation advocates in India. However, transitioning from working in a senior chamber to managing your own office requires careful planning beyond courtroom advocacy. Advocates must establish structured business procedures, allocate infrastructure funds, and manage office logistics to build a sustainable practice.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Chamber operations require balancing initial costs with long-term goals. To prepare for client development during this setup phase, reviewing the guidelines on <Link href="/lawyer-branding-get-more-clients" className="text-[#D4AF37] font-bold hover:underline">Lawyer Branding</Link> helps you build professional visibility ethically. Understanding the procedural aspects of trial preparation, as detailed in our <Link href="/how-to-prepare-for-first-trial-advocate-advice" className="text-[#D4AF37] font-bold hover:underline">First Trial Prep Guide</Link>, also ensures your new office registry systems support clean file filing right from launch.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Many young lawyers run into financial difficulties early because they overestimate initial fee volume and underestimate monthly expenses. Establishing a disciplined budgeting plan protects you from cash flow problems, allowing you to focus on case research and active trial representations with greater peace of mind.
              </p>
            </section>

            {/* Section 2: Court Proximity vs. Commercial Office Rental Options */}
            <section id="location-selection" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Court Proximity vs. Commercial Office Rental Options
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Selecting a chamber location is one of the most critical decisions for a new litigation practice. Offices located inside court complexes or in nearby corridors offer unmatched convenience for moving between hearings and client conferences.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                However, court-adjacent properties command premium rents and security deposits. Transitioning advocates should evaluate secondary locations, such as commercial cabins within a 2-kilometer radius of the court, or co-working setups shared with other legal professionals.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Shared office arrangements can help reduce rent expenses, but they require robust systems to preserve client data privacy. Ensure your database storage is secure to prevent other practitioners from viewing sensitive client details or transaction histories, keeping your practice compliant with professional ethics.
              </p>
            </section>

            {/* Section 3: Detailed Operating Budget and Initial Capital Allocation */}
            <section id="office-budgeting" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Detailed Operating Budget and Initial Capital Allocation
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                A new chamber's financial plan must account for both fixed and recurring costs. Start by allocating funds to essential hardware: (1) A high-speed multi-function printer and scanner for filing preparation. (2) Stable internet connectivity. (3) Comfortable office furniture for client consultations.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, maintain an emergency reserve equivalent to six months of operating expenses. This fund handles lease payments and office stipends during months with lower case volumes, ensuring you do not have to compromise on research standards or registry support.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Chamber budget planning should also allocate resources to professional growth. Investing in continuing legal training or specialized certifications, as discussed in our <Link href="/sitemap" className="text-[#D4AF37] font-bold hover:underline">Sitemap Index</Link>, helps you diversify your services and target higher-value corporate contracts over time.
              </p>

              {/* Data Callout Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-4">Chamber Budget Allocation</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Recommended budget allocation percentages for independent advocates setting up a new litigation chamber near major Indian courts.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block text-3xl font-black text-[#D4AF37] mb-1">40%</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Office Space &amp; Deposit</span>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block text-3xl font-black text-[#D4AF37] mb-1">30%</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Hardware &amp; Databases</span>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block text-3xl font-black text-[#D4AF37] mb-1">30%</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Operating Reserves</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Building a Legal Reference Library and Purchasing Key Commentaries */}
            <section id="legal-library" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Building a Legal Reference Library and Key Commentaries
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                While digital research databases are essential, a professional physical library is the foundation of any litigation chamber. Essential reference works include updated commentaries on the Code of Civil Procedure (CPC), the Code of Criminal Procedure (CrPC), and the Indian Evidence Act.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                For commercial practices, add specialized volumes on the Companies Act, the Insolvency and Bankruptcy Code (IBC), and contract drafting manuals. These physical resources provide quick reference points during evening drafting sessions when planning case arguments.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Independent advocates should acquire these volumes gradually, starting with core procedural codes. Adding new commentaries annually as your caseload expands ensures your library remains current without placing too much strain on your initial startup capital.
              </p>
            </section>

            {/* Section 5: Legal Software, Search Databases, and Tech Infrastructure */}
            <section id="software-databases" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Legal Software, Search Databases, and Tech Infrastructure
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Digital databases have transformed how lawyers research precedents and prepare court pleadings. Access to tools like SCC Online or ManuPatra is critical to finding relevant judgments quickly, saving you hours of manual reading.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                For routine operations, utilize free portals like Indian Kanoon and the official e-Courts app. Using these tools to track case listings, registry alerts, and order uploads keeps you informed of court updates.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Integrating cloud document storage and digital case management systems keeps your files organized. Maintaining structured index folders helps prevent procedural filing delays, protecting your clients' interests.
              </p>
            </section>

            {/* Section 6: Hiring, Training, and Retaining Experienced Court Clerks */}
            <section id="clerk-management" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Hiring, Training, and Retaining Experienced Court Clerks
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                An experienced court clerk is vital to a successful litigation chamber. Clerks manage court filings, track case listings, clear registry objections, and coordinate file delivery between your office and the courtroom.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                When hiring, look for clerks registered with the local bar association who understand registry workflows. Training them on digital database tracking systems ensures your office files are processed efficiently.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Retaining skilled clerks requires fair compensation and clear communication. Offering performance bonuses based on successful filing turnarounds and maintaining a respectful work environment keeps clerks committed to your practice.
              </p>
            </section>

            {/* Section 7: Ethical Board Formats and Nameplates under BCI Rules */}
            <section id="ethical-governance" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Ethical Board Formats and Nameplates under BCI Rules
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The Bar Council of India (BCI) regulates how advocates can display their names and qualifications outside their offices. Nameplates must follow standard, non-promotional designs to maintain professional standards.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The board should only display the advocate's name, qualifications, and enrollment details. Refrain from listing comparative claims, logo graphics, or past success records, as these are viewed as indirect advertising under Rule 36.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Adhering to these formats prevents ethical complaints from local bar committees. Maintaining professional, simple signage shows respect for BCI regulations and builds a trustworthy reputation.
              </p>
            </section>

            {/* Section 8: Step-by-Step Chamber Setup Checklist */}
            <section id="chamber-checklist" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Step-by-Step Chamber Setup Checklist
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Establishing a new chamber requires managing multiple tasks concurrently, from office leasing to database licensing.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Follow this structured checklist to set up your office infrastructure, ensuring all licensing and registry setups are completed before you begin consulting clients.
              </p>

              {/* Step Checklist Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#2D2219] mb-4">Setup Checklist</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Select Location and Sign Lease", desc: "Choose a court-adjacent commercial office space or shared workspace. Sign a formal lease agreement and verify the premises." },
                    { step: "2", title: "Acquire Core Legal Commentaries", desc: "Purchase updated reference commentaries on procedural codes (CPC, CrPC, Evidence Act) and domain-specific commentaries." },
                    { step: "3", title: "Subscribe to Legal Databases", desc: "Secure licenses for research databases (like SCC Online or ManuPatra) and set up local registry tracking tools." },
                    { step: "4", title: "Hire Registered Court Clerks", desc: "Recruit experienced, registered clerks who understand local registry workflows and court listing procedures." }
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

            {/* Section 9: Office Costs and Infrastructure Matrix */}
            <section id="comparison-matrix" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Office Costs and Infrastructure Matrix
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Evaluating the cost differences between various setup configurations helps advocates select the right layout for their practice budget.
              </p>

              {/* Comparison Table Section */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Setup Style</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Setup Cost Range</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Client Meeting Space</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Operational Flex</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Home Office</td>
                      <td className="p-4 text-xs text-gray-600">30,000 to 60,000 INR</td>
                      <td className="p-4 text-xs text-gray-600">Limited (virtual consultations preferred)</td>
                      <td className="p-4 text-xs text-gray-600">High (extremely low overheads)</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Shared Cabin</td>
                      <td className="p-4 text-xs text-gray-600">70,000 to 1,500,000 INR</td>
                      <td className="p-4 text-xs text-gray-600">Moderate (shared conference rooms)</td>
                      <td className="p-4 text-xs text-gray-600">Moderate (rent divided among partners)</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Independent Chamber</td>
                      <td className="p-4 text-xs text-gray-600">2.5 Lakh to 5 Lakh INR</td>
                      <td className="p-4 text-xs text-gray-600">Professional (dedicated client desk)</td>
                      <td className="p-4 text-xs text-gray-600">High (complete control over branding)</td>
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
