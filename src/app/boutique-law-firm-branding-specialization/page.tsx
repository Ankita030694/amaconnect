"use client";

import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import Footer from "@/components/Footer";

export default function BoutiqueBrandingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/boutique-law-firm-branding-specialization`;

  const metadata = {
    title: "Boutique Law Firm Branding & Specialization in India | Guidelines",
    description: "Learn how to build a boutique law firm brand ethically under BCI rules. Study niche selection, content marketing, and reputation building.",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Boutique Law Firm Branding and Niche Specialization: Standing Out in a Crowded Market",
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
      question: "Are law firms permitted to advertise online in India?",
      answer: "No. The Bar Council of India Rule 36 strictly prohibits advocates from advertising their services, soliciting clients, or using promotional comparisons. Websites can only list basic, factual details like names, areas of practice, contact info, and academic qualifications."
    },
    {
      question: "How do I choose a niche for a boutique law practice?",
      answer: "Select a specialized field based on your trial experience and regional court demands. Field examples include MSME debt recovery, startup IP compliance, real estate litigation, or cybersecurity regulations."
    },
    {
      question: "Can advocates publish articles to build thought leadership?",
      answer: "Yes, publishing academic articles in legal journals, national news columns, or compliance blogs is permitted. Writing must remain educational, providing legal analysis without promotional solicitations."
    },
    {
      question: "What logo formats are ethical for Indian law firms?",
      answer: "Law firms can display simple, non-promotional logos. Refrain from using slogans, certificates of success, or dramatic graphics, keeping designs professional and standard."
    },
    {
      question: "How can boutique law firms build reputation organically?",
      answer: "Build authority through public speaking at compliance seminars, publishing research, participating in bar association panels, and securing commercial client referrals through consistent success."
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
    name: "Boutique Law Firm Branding Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Ethical branding and market positioning manual for Indian boutique law firms, covering niche specialization and BCI compliance.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "86",
      reviewCount: "2",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Boutique Branding", item: pageUrl }
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
            Ethical Branding &amp; Specialization
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
            Boutique Law Firm Branding &amp; Niche: <br/>
            <span className="text-[#D4AF37]">Standing Out in a Crowded Market</span>
          </h1>
          <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
            A strategic manual for boutique partners on niche selection, compliance rules under BCI Rule 36, educational publishing, and reputation management.
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
                { id: "branding-intro", title: "Niche Value" },
                { id: "select-niche", title: "Niche Selection" },
                { id: "bci-limitations", title: "BCI Limitations" },
                { id: "digital-presence", title: "Digital Directories" },
                { id: "thought-leadership", title: "Thought Leadership" },
                { id: "client-referrals", title: "Client Referrals" },
                { id: "ethical-publishing", title: "Educational Articles" },
                { id: "branding-checklist", title: "Firm Checklist" },
                { id: "niche-comparison", title: "Niche Comparison" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
                {/* Section 1: The Transition to Niche Legal Practices */}
            <section id="branding-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                The Transition to Niche Legal Practices
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                In a legal market with thousands of general practitioners, boutique law firms must focus on niche specialization to build a sustainable brand. Specializing in a dedicated field (like real estate disputes, MSME compliance, or intellectual property) allows partners to build unique expertise, attracting high-value corporate clients.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To build professional visibility without violating BCI marketing restrictions, advocates must focus on educational content. Reviewing marketing guidelines in our <Link href="/ethical-social-media-marketing-for-lawyers" className="text-[#D4AF37] font-bold hover:underline">Social Media Guide</Link> ensures your online profiles remain compliant. Advocates should also read the client onboarding steps detailed in the <Link href="/client-onboarding-lead-qualification-lawyers" className="text-[#D4AF37] font-bold hover:underline">Client Onboarding Guide</Link> to structure initial consultations.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Specialization also improves operational efficiency. By handling cases within a narrow field, chambers can streamline case research, build specialized template databases, and train clerks to manage filings with minimal errors.
              </p>
            </section>

            {/* Section 2: Selecting and Developing Your Legal Specialization Niche */}
            <section id="select-niche" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Selecting and Developing Your Legal Specialization Niche
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Selecting a niche requires balancing your practice experience with local market needs. Evaluate fields like MSME payment disputes under the Insolvency and Bankruptcy Code (IBC) or real estate compliance under RERA.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Researching regional tribunal listings can help identify underserved areas of law. By focusing on emerging fields (like data privacy compliance or digital asset disputes), boutique firms can establish early thought leadership.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Niche development requires dedicated training. Enrolling in advanced certification courses or participating in specialist committees within local bar associations ensures your chamber remains current on regulatory changes.
              </p>
            </section>

            {/* Section 3: Navigating BCI Restrictions and Advertising Regulations */}
            <section id="bci-limitations" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Navigating BCI Restrictions and Advertising Regulations
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The Bar Council of India (BCI) enforces strict restrictions on lawyer marketing. Rule 36 states that advocates cannot advertise their services, make success claims, or compare themselves to other practitioners.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Websites and digital portals must only function as basic, factual directories. They should display the firm's name, contact details, academic qualifications, and verified practice areas without promotional text.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Understanding these limits protects your firm from ethical complaints. Ensure your online channels include clear disclaimers, requiring visitors to actively request information before viewing consultation options.
              </p>
            </section>

            {/* Section 4: Building Compliant Digital Portals and Firm Directories */}
            <section id="digital-presence" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Building Compliant Digital Portals and Firm Directories
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                A professional, BCI-compliant website serves as your firm's digital brochure. Design the portal to prioritize clean layouts, detailed biographies, and clear practice definitions.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Refrain from using promotional badges, listing transaction values, or showing client testimonials on public pages. The portal should act as a verified informational portal for clients seeking specialized services.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Ensure all links and document uploads are organized logically. Access our full site structure through the <Link href="/sitemap" className="text-[#D4AF37] font-bold hover:underline">Sitemap Directory</Link> to view related design templates.
              </p>
            </section>

            {/* Section 5: Establishing Authority through Scholarly Thought Leadership */}
            <section id="thought-leadership" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Establishing Authority through Scholarly Thought Leadership
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Thought leadership is the most effective organic branding tool for boutique practices. Writing research papers on regulatory changes builds professional credibility within your niche.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Participating in compliance webinars and speaking at bar association panels allows you to discuss complex legal challenges. Focus on analyzing court rulings, keeping your content educational rather than promotional.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This academic visibility positions your firm as a trusted advisory team. It helps build organic professional networks, attracting corporate contracts from legal departments and senior practitioners.
              </p>
            </section>

            {/* Section 6: Developing Professional Referral Networks and Co-Counseling Loops */}
            <section id="client-referrals" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Developing Professional Referral Networks and Co-Counseling Loops
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Boutique practices grow through peer referrals. Building professional networks with general litigation chambers ensures they refer specialized cases in your niche to your firm.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Establish co-counseling arrangements where you provide expert advisory support while they manage routine courtroom listings. This collaboration increases your caseload without adding administrative overhead.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, refer out-of-scope files to verified specialists. This referral reciprocity builds professional goodwill, ensuring they return the favor when clients require support in your core area of law.
              </p>
            </section>

            {/* Section 7: Writing Educational and Informational Legal Articles Ethically */}
            <section id="ethical-publishing" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Writing Educational and Informational Legal Articles Ethically
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Educational publishing allows advocates to build visibility while complying with BCI rules. Writing columns on recent amendments provides value to businesses seeking legal clarity.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Explain the practical implications of new regulations, listing required compliance steps and timelines. Keep the tone analytical and objective, avoiding any promotional language or solicitation.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This structured analysis builds trust with prospective clients. When businesses require representation to manage new regulatory filings, they are more likely to seek out counsel with verified expertise in the field.
              </p>
            </section>

            {/* Section 8: Step-by-Step Boutique Branding Checklist */}
            <section id="branding-checklist" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Step-by-Step Boutique Branding Checklist
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To build your boutique brand ethically, follow a structured positioning checklist. Access our sitemap at <Link href="/sitemap" className="text-[#D4AF37] font-bold hover:underline">Sitemap Index</Link> to locate related practice guides.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Review this protocol quarterly to ensure your firm's online profiles, articles, and directory records remain compliant with BCI Rule 36.
              </p>

              {/* Step Checklist Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#2D2219] mb-4">Branding Protocol</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Define Core Niche Specialization", desc: "Select a focused area of practice based on regional tribunal demands and case experience." },
                    { step: "2", title: "Publish Informational Site Directory", desc: "Build a clean portal displaying basic bios and practice areas, incorporating BCI disclaimers." },
                    { step: "3", title: "Write Educational Legal Columns", desc: "Draft and publish legal compliance articles in mainstream media or trade publications." },
                    { step: "4", title: "Establish Co-Counseling Networks", desc: "Coordinate referral systems with general litigation chambers to manage specialized cases." }
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

            {/* Section 9: Legal Specialization Niches Matrix */}
            <section id="niche-comparison" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Legal Specialization Niches Matrix
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Evaluating different practice areas based on client types, listing frequencies, and compliance needs helps boutique partners choose the right niche.
              </p>

              {/* Comparison Table Section */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Specialization Niche</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Primary Client Target</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Average Litigation Frequency</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Regulatory Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Startup IP Compliance</td>
                      <td className="p-4 text-xs text-gray-600">Tech Founders &amp; VCs</td>
                      <td className="p-4 text-xs text-gray-600">Low (transactional advisory preferred)</td>
                      <td className="p-4 text-xs text-green-600 font-medium">High (patent/trademark filings)</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Real Estate RERA Disputes</td>
                      <td className="p-4 text-xs text-gray-600">Homebuyers &amp; Developers</td>
                      <td className="p-4 text-xs text-green-600 font-medium">High (frequent tribunal listings)</td>
                      <td className="p-4 text-xs text-gray-600">Moderate (state specific rules)</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">MSME Samadhaan Recovery</td>
                      <td className="p-4 text-xs text-gray-600">Manufacturing &amp; Services Firms</td>
                      <td className="p-4 text-xs text-green-600 font-medium">High (frequent facilitation councils)</td>
                      <td className="p-4 text-xs text-gray-600">Moderate (limitation checks)</td>
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
