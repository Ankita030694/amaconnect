"use client";

import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import Footer from "@/components/Footer";

export default function VirtualChambersPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/virtual-law-chambers-india`;

  const metadata = {
    title: "Virtual Chambers & Online Legal Practices in India | Guidelines",
    description: "Learn how to build a virtual law chamber in India. Discover digital client intake, secure database hosting, and BCI compliance.",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Virtual Chambers and Online Legal Practices: Building a Borderless Law Office in India",
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
      question: "Are virtual law chambers legal under Bar Council of India regulations?",
      answer: "Yes, running a virtual office is legal, provided advocates do not solicit clients or advertise their services directly. The website and digital portals must only function as informational channels and communication hubs."
    },
    {
      question: "What software is recommended to run a virtual law chamber?",
      answer: "Advocates use client portals for intake, video conferencing apps for consulting, secure cloud drives for database hosting, and digital case management boards like Notion or CLM software."
    },
    {
      question: "How do I ensure client confidentiality in a virtual setup?",
      answer: "Ensure all data is hosted on secure cloud servers with end-to-end encryption. Use double-factor authentication for database access and set user permission limits for office staff."
    },
    {
      question: "Can I consult clients online from different states in India?",
      answer: "Yes, an advocate registered with any state Bar Council is authorized to consult clients and represent them in central tribunals and courts across India, subject to local court filing regulations."
    },
    {
      question: "How do virtual practices collect professional fees securely?",
      answer: "Virtual practices use secure online payment gateways or bank transfers, providing structured invoices and retainer receipts to clients to maintain billing transparency."
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
    name: "Virtual Chambers & Online Legal Practices Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "A comprehensive digital guide on setup tools, secure database hosting, and compliance rules for online legal consultancies in India.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "96",
      reviewCount: "2",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Virtual Chambers", item: pageUrl }
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
            Digital Practice &amp; Remote Chambers
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
            Virtual Chambers and Online Legal Practices: <br/>
            <span className="text-[#D4AF37]">Building a Borderless Law Office</span>
          </h1>
          <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
            A comprehensive operational guide on digital client intake, secure cloud database hosting, video consulting tools, and BCI compliance parameters in India.
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
                { id: "virtual-intro", title: "Digital Shift" },
                { id: "intake-systems", title: "Client Intake Systems" },
                { id: "data-security", title: "Data Security" },
                { id: "cloud-databases", title: "Cloud Databases" },
                { id: "video-consulting", title: "Video Consulting Setup" },
                { id: "online-billing", title: "Digital Invoicing" },
                { id: "bci-compliance", title: "BCI Ethics Rules" },
                { id: "virtual-checklist", title: "Setup Checklist" },
                { id: "software-comparison", title: "Tool Comparison" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
                {/* Section 1: The Digitization of Indian Chambers */}
            <section id="virtual-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                The Digitization of Indian Chambers
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The adoption of digital court filings, online listings tracking, and video hearings in High Courts has paved the way for virtual chambers. Virtual practices allow advocates to provide borderless legal advice, reducing overhead office costs while maintaining efficient client communication loops.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Structuring an online practice requires robust technological systems. Advocates should use secure online consultation platforms to interface with clients. Details on setting up such systems are available in our guide on the <Link href="/secure-online-legal-consultation-app" className="text-[#D4AF37] font-bold hover:underline">Secure Consultation App</Link>. To ensure all online billing and retainer agreements are structured clearly, reviewing the guidelines in the <Link href="/alternative-fee-arrangements-law-firms" className="text-[#D4AF37] font-bold hover:underline">Fee Arrangements Guide</Link> is highly recommended.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Transitioning to a virtual model allows advocates to serve clients across multiple states without maintaining physical offices in each district. This setup reduces travel costs and office leases, passing these savings on to clients in the form of transparent fixed fees.
              </p>
            </section>

            {/* Section 2: Implementing Automated Client Intake and Qualification Systems */}
            <section id="intake-systems" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Implementing Automated Client Intake and Qualification Systems
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                A virtual practice needs a structured system to qualify leads. Advocates can use automated intake forms to collect case summaries and relevant document uploads before scheduling consultation calls.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This process helps filter out low-quality inquiries. By requiring clients to submit transaction details and basic records beforehand, advocates can identify conflict issues and evaluate cases before dedicating consultation hours.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Intake forms also ensure you gather the necessary information for conflict audits. Automating this checklist helps you run a compliant practice, protecting your chamber from subsequent ethical issues.
              </p>
            </section>

            {/* Section 3: Protecting Client Confidentiality and Data Security */}
            <section id="data-security" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Protecting Client Confidentiality and Data Security
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Maintaining client confidentiality is a core professional requirement under Bar Council regulations. In a virtual setup, advocates must protect digital databases from unauthorized access or accidental leaks.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Avoid using unsecured public platforms or personal email addresses to store case documents. Implement end-to-end encryption for client files, configure double-factor authentication, and use password-protected folders to share research files with office staff.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, perform monthly audits of your database access history. Educating your virtual assistants and clerks on data privacy guidelines prevents accidental data sharing, protecting your practice from liability.
              </p>
            </section>

            {/* Section 4: Secure Cloud Databases and Case Management Systems */}
            <section id="cloud-databases" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Secure Cloud Databases and Case Management Systems
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Cloud databases store your case files and pleadings securely, allowing you to access files during courtroom hearings. Secure hosting systems keep data organized, preventing the loss of critical records.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Use case-tracking software to monitor registry listing dates and task assignments. Keeping directories structured by case file name makes retrieving files quick and easy during client meetings.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Advocates should configure automated backup protocols to duplicate records daily. This precaution protects your chamber from file losses due to device failures, ensuring business continuity.
              </p>
            </section>

            {/* Section 5: Setting Up Professional Video Consulting and Client Portals */}
            <section id="video-consulting" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Professional Video Consulting and Client Portals
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Online client consultations require professional setups. Use high-definition video tools and select quiet office backgrounds for video meetings.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Provide client portals where users can view case progress and download draft documents. This self-service access reduces constant status inquiries, allowing you to focus on case research.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Ensure client communication stays inside official portal channels. Setting a rule that legal queries will not be answered via instant messaging platforms keeps records organized and professional.
              </p>
            </section>

            {/* Section 6: Digital Invoicing, Fees, and Retainer Collections */}
            <section id="online-billing" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Digital Invoicing, Fees, and Retainer Collections
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Online payment systems provide fee transparency. Use secure payment links to collect retainer advances and milestone fees.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Engagement letters must specify billing models, payment options, and invoice terms. This clarity prevents payment delays, helping you maintain consistent cash flow.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Ensure all invoices include applicable GST details and list out-of-pocket expenses separately. This structured billing process builds client trust, minimizing fee disputes.
              </p>
            </section>

            {/* Section 7: BCI Ethics Rules on Online Consultancies and Portals */}
            <section id="bci-compliance" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                BCI Ethics Rules on Online Consultancies and Portals
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Virtual chambers must follow Bar Council of India regulations on lawyer marketing. Digital portals should function as informational directories, not promotion systems.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Ensure your landing page includes a voluntary opt-in disclaimer. Visitors must actively request information before viewing consultation options, complying with Rule 36 guidelines.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, avoid displaying client testimonials or comparison pricing. Presenting information objectively keeps your virtual practice compliant, preventing regulatory objections.
              </p>
            </section>

            {/* Section 8: Step-by-Step Virtual Chamber Setup Checklist */}
            <section id="virtual-checklist" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Step-by-Step Virtual Chamber Setup Checklist
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To build your online practice safely, follow a structured compliance checklist. Access the complete website directory through the <Link href="/sitemap" className="text-[#D4AF37] font-bold hover:underline">Sitemap Directory</Link> to find related operational resources.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Perform periodic audits of your cloud systems and check data privacy parameters to ensure compliance.
              </p>

              {/* Step Checklist Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#2D2219] mb-4">Setup Checklist</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Configure Secure Cloud Hosting", desc: "Select a database provider with strict data privacy terms. Set up double-factor authentication." },
                    { step: "2", title: "Deploy Automated Intake Forms", desc: "Build online intake forms to collect case details and verify conflicts before consultations." },
                    { step: "3", title: "Integrate Video Consulting Tools", desc: "Set up professional video meeting rooms and select quiet office backgrounds." },
                    { step: "4", title: "Implement Digital Payment Gateways", desc: "Configure secure online payment gateways to collect retainer fees and send invoices." }
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

            {/* Section 9: Virtual Tools and Software Systems Comparison */}
            <section id="software-comparison" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Virtual Tools and Software Systems Comparison
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Evaluating the security features and operations of virtual systems helps advocates select the right software for their chambers.
              </p>

              {/* Comparison Table Section */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Tool Type</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Key Security Feature</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Chamber Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Encrypted Cloud Drives</td>
                      <td className="p-4 text-xs text-gray-600">Zero-knowledge end-to-end encryption</td>
                      <td className="p-4 text-xs text-gray-600">Secure storage of client records and contracts</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Case Management Boards</td>
                      <td className="p-4 text-xs text-gray-600">User permission limits</td>
                      <td className="p-4 text-xs text-gray-600">Collaborative tracking of deadlines and listings</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Payment Gateways</td>
                      <td className="p-4 text-xs text-gray-600">PCI-DSS compliance</td>
                      <td className="p-4 text-xs text-gray-600">Secure fee collection and billing transparency</td>
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
                    { author: "Advocate Manish Gupta", role: "High Court Practitioner", body: "This setup guide was highly practical. It helped us estimate library commentary costs and structure our clerk's registry responsibilities." },
                    { author: "Sangeeta Nair", role: "Boutique Firm Founder", body: "Excellent budgeting resource for first-generation advocates. The cost comparison table was precise and realistic." }
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
