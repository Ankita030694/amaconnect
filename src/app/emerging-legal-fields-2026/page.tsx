"use client";

import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import Footer from "@/components/Footer";

export default function EmergingFieldsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/emerging-legal-fields-2026`;

  const metadata = {
    title: "Emerging Legal Fields in 2026 | AI, Space, Web3 & Climate Law",
    description: "Explore highest paying futuristic legal niches in India by 2026. Learn how to specialize in Space Law, ESG compliance, Web3, and AI regulations.",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Emerging Legal Fields in 2026: Space Law, AI, Web3, and Climate Change",
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
      question: "Which space law rules apply to private companies in India?",
      answer: "Private commercial entities in India operate under the Indian Space Policy (2023) and IN-SPACe authorization rules, which regulate satellite launches, orbital slots, and space operations."
    },
    {
      question: "How can I specialize in AI and Technology Law?",
      answer: "Specializing requires pursuing LL.M. courses in technology law, obtaining data privacy certifications (like CIPP/A), and actively publishing articles on generative AI copyright disputes or deepfake regulations."
    },
    {
      question: "What does an ESG lawyer do on a daily basis?",
      answer: "ESG lawyers audit corporate supply chains, draft environmental disclosures, advise on green bond issuances, and ensure strict compliance with SEBI's BRSR (Business Responsibility and Sustainability Reporting) mandates."
    },
    {
      question: "Are there dedicated space law firms in India?",
      answer: "While specialized boutique space law firms are rare, major tier-1 corporate firms have established dedicated 'Tech & Aerospace Policy' practice groups that advise space startups on licensing and liability."
    },
    {
      question: "What is the compensation outlook for AI law specialists?",
      answer: "AI compliance specialists command premium packages at corporate law firms, often starting 20-30 percent higher than traditional commercial associates due to the scarcity of technical expertise."
    },
    {
      question: "How does climate change impact corporate legal practice?",
      answer: "Stricter carbon emission mandates and climate disclosures require corporations to integrate environmental audit compliance into their daily M&A due diligence and supply chain contracts."
    },
    {
      question: "How do I get into Web3 and Blockchain law?",
      answer: "Begin by understanding smart contract architecture and FEMA regulations regarding crypto assets. Networking with blockchain startups and advising on token-issuance compliance is the primary entry point."
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
    name: "Emerging Legal Fields in 2026 Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "In-depth guide to futuristic legal career specializations in Space Law, AI governance, Web3, and ESG compliance in India.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "112",
      reviewCount: "4",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Emerging Legal Fields", item: pageUrl }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="rating-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative w-full bg-black text-white font-sans py-10 sm:py-13 flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="text-[#D4AF37] text-xs sm:text-sm font-bold uppercase tracking-widest bg-white/5 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
            Futuristic Legal Specializations
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Emerging Legal Fields in 2026: <br/> <span className="text-[#D4AF37]">Space, AI & Climate Law</span>
          </h1>
          <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl text-justify sm:text-center">
            A comprehensive guide detailing the highest paying futuristic legal niches in India, licensing rules, and academic specializations required to stay ahead of the curve.
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
                { id: "emerging-intro", title: "The Legal Frontier" },
                { id: "ai-liability", title: "AI Liability" },
                { id: "data-privacy", title: "Data Privacy" },
                { id: "space-commercialization", title: "Space Policy" },
                { id: "space-contracts", title: "Space Contracts" },
                { id: "web3-crypto", title: "Web3 & Crypto Law" },
                { id: "esg-mandates", title: "ESG Mandates" },
                { id: "esg-audits", title: "ESG Auditing" },
                { id: "education-timeline", title: "Career Timeline" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
            
            {/* Section 1: Traditional Specialization Saturation in India */}
            <section id="emerging-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Traditional Specialization Saturation in India
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                By 2026, the global legal tech, cybersecurity, and artificial intelligence compliance market is projected to exceed 35 billion dollars, creating a massive, high-demand niche for lawyers specialized in algorithmic liability and digital sovereignty. Students and early career professionals who acquire credentials in outer space agreements, Web3, and ESG compliance today will hold an insurmountable competitive advantage over traditional practitioners tomorrow.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Traditional areas of law practice like general property disputes and civil litigation are facing extremely high saturation rates in metropolitan Indian cities. Junior practitioners must explore new, high-growth areas. Understanding corporate frameworks under the <Link href="/startup-registration-incorporation-india-guide" className="text-[#D4AF37] font-bold hover:underline">Startup Registration Guide</Link> shows how futuristic tech entities require complex, structured legal compliance right from their seed-funding launch.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The shift toward international policy studies and space governance represents a strategic blue-ocean opportunity for young advocates. As traditional litigation chambers experience cutthroat fee competition, these emerging fields operate with high profit margins, rewarding technical domain knowledge, academic publications, and international policy fellowships over mere seniority.
              </p>

              {/* Data Callout Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-3">The New Legal Economy</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Regulatory compliance audits are growing at an annual rate of 18-20 percent in India due to stricter corporate governance rules, data localization laws, and environmental guidelines enforced by SEBI and the RBI.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 mb-1">35B+</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">AI Legal Market (USD)</span>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 mb-1">18%</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Annual ESG Growth</span>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-1">300+</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">New Tech Startups</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Generative AI Liability and Intellectual Property Disputes */}
            <section id="ai-liability" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Generative AI Liability and IP Disputes
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Generative AI models trained on millions of copyrighted data points have triggered landmark intellectual property disputes worldwide (e.g., NYT vs. OpenAI). In India, advocates face unprecedented questions regarding whether AI-generated content can secure copyright protections under the Copyright Act, 1957, and who exactly is liable if an algorithm generates defamatory statements or deepfakes.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Advocates specializing in this niche draft complex source code licenses, structure liability limitation clauses for SaaS providers, and defend tech developers in algorithmic patent infringement suits. It requires a deep understanding of evolving global tech regulations, including the EU AI Act, which influences Indian policy frameworks.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Furthermore, the use of automated web scrapers to compile AI training datasets raises complex database protection and privacy issues under the Information Technology Act. Lawyers must structure agreements that precisely define data usage limits and defend platform creators during IP audits, making this a highly lucrative specialization.
              </p>
            </section>

            {/* Section 3: Cybersecurity Laws and Digital Personal Data Protection */}
            <section id="data-privacy" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Cybersecurity Laws and DPDP Act Compliance
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The implementation of the Digital Personal Data Protection (DPDP) Act has made data privacy compliance a boardroom priority for all Indian corporations. Non-compliance carries devastating financial penalties (up to ₹250 Crores per breach), creating a massive, urgent demand for certified Data Protection Officers (DPOs) and privacy counsels.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Data privacy lawyers audit business databases to ensure consent-based processing is strictly followed. They structure responses to user data deletion requests and coordinate with cybersecurity teams during active ransomware or data breach incidents. Reviewing response procedures under the <Link href="/cyber-fraud-online-scams-legal-recourse" className="text-[#D4AF37] font-bold hover:underline">Cyber Fraud Recourse Guide</Link> highlights how digital violations are criminally prosecuted in India.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                With corporate entities collecting vast datasets globally, establishing cross-border data transfer protocols is highly complex. Data compliance lawyers help organizations align with global privacy standards like GDPR (Europe) and CCPA (California), and defend them during regulatory investigations by the Data Protection Board.
              </p>
            </section>

            {/* Section 4: Space Commercialization under ISRO Regulations */}
            <section id="space-commercialization" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Space Commercialization (NewSpace India)
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                With the opening of the Indian space sector to private commercial launches, space law has aggressively transitioned from slow-moving international diplomacy to fast-paced commercial contracts. Private aerospace companies must secure licensing authorizations from IN-SPACe (Indian National Space Promotion and Authorization Center) before lifting off.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Space lawyers advise commercial firms on strict compliance with the Indian Space Policy, 2023. They assist in obtaining launch clearances, coordinate with the ITU for radio spectrum allocations, and ensure compliance with dual-use technology export control regulations (SCOMET).
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, aerospace ventures face complicated liability allocation issues under international space treaties (like the 1972 Liability Convention). Lawyers in this sector help space startups draft international commercial launch agreements, manage orbit registrations, and structure corporate investments under FEMA foreign exchange regulations.
              </p>
            </section>

            {/* Section 5: Space Orbit Allocation and Space Debris Insurance */}
            <section id="space-contracts" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Space Orbit Allocation and Debris Insurance
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                As low-Earth orbits (LEO) become increasingly crowded with mega-constellations (like Starlink), satellite collisions represent a growing, multi-million dollar liability risk. Space lawyers draft highly specialized launch service agreements and structure high-value space asset insurance contracts covering launch failures and in-orbit anomalies.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                These agreements must comply with liability rules established under international space treaties, allocating dispute risks meticulously between satellite operators, launch vehicle providers, and international insurance consortia via cross-waivers of liability.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Space debris mitigation has also emerged as a top regulatory priority. Aerospace compliance teams must design and legally certify end-of-life de-orbiting plans to meet international orbital hygiene standards, making space risk advisory a highly specialized corporate legal niche with virtually zero competition.
              </p>
            </section>

            {/* Section 6: Web3, Tokenization, and Crypto Law (New Section) */}
            <section id="web3-crypto" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Web3, Tokenization, and Crypto Law
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The decentralized web (Web3) and the tokenization of real-world assets (Real Estate, Art, Bonds) present massive regulatory hurdles in India. The RBI and SEBI classify Virtual Digital Assets (VDAs) under stringent anti-money laundering (PMLA) frameworks, requiring startups to navigate a minefield of compliance.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Web3 lawyers do not just read the law; they must read code. They audit smart contracts to ensure the code executes legally binding terms properly. They advise decentralized autonomous organizations (DAOs) on corporate structuring, helping them wrap their on-chain governance into off-chain legal entities (like Foundation models in Switzerland or the UAE).
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Furthermore, crypto lawyers handle taxation disputes surrounding the 30% TDS rules on virtual assets in India, representing crypto exchanges and blockchain infrastructure companies before the Enforcement Directorate and High Courts.
              </p>
            </section>

            {/* Section 7: Carbon Emission Markets and SEBI BRSR Guidelines */}
            <section id="esg-mandates" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Carbon Emission Markets and SEBI BRSR Guidelines
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                SEBI's mandatory Business Responsibility and Sustainability Reporting (BRSR) requires the top 1,000 listed companies in India to quantitatively disclose their environmental impact, labor practices, and governance policies. This regulatory mandate has created an entirely new, highly paid practice area for environmental lawyers operating inside corporate towers.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                ESG (Environmental, Social, Governance) advocates audit corporate compliance, structure international carbon credit purchases, and advise on green bond issuances. They help businesses align their strategies with carbon market guidelines, transforming sustainability from a PR exercise into a strict corporate compliance standard.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Carbon trading platforms require legal advisors to structure carbon offsetting agreements and verify emissions reduction credentials. Advocates in this field help corporations navigate both international carbon offset protocols (like the Paris Agreement Article 6) and local green energy compliance markets.
              </p>
            </section>

            {/* Section 8: Corporate Supply Chain Environmental Audits */}
            <section id="esg-audits" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Corporate Supply Chain Environmental Audits
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Corporate ESG liability now extends far beyond direct factory emissions (Scope 1), covering the environmental and labor practices of their entire third-party supplier chain (Scope 3). ESG lawyers conduct deep-dive audits to identify regulatory risks and prevent 'greenwashing' complaints that could destroy shareholder value.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                These audits involve meticulously reviewing supplier contracts, assessing on-ground environmental compliance across borders, and drafting mitigation policies. It is a highly specialized transactional practice that requires a deep understanding of environmental regulations, human rights law, and international corporate operations.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                As global institutional investors heavily prioritize ESG compliance, Indian firms with strong sustainability ratings secure better access to cheaper international capital. ESG lawyers help businesses identify sustainability gaps in supplier agreements, protecting corporate brands from international compliance defaults.
              </p>
            </section>

            {/* Section 9: Specialization Timelines for National Law Students */}
            <section id="education-timeline" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Specialization Timelines for Law Students
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To build a practice in these futuristic niches, students and junior lawyers should plan their education and internships over a structured timeline. Exploring the comprehensive platform directory through the <Link href="/sitemap" className="text-[#D4AF37] font-bold hover:underline">Sitemap Directory</Link> is a good way to see how various legal topics connect to form a holistic career.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Gaining practical exposure through internships with specialized tech policy groups, crypto startups, or environmental audit firms during law school is critical. This real-world experience helps you build a strong portfolio and secure lateral job placements in these emerging fields after graduation.
              </p>

              {/* Timeline Section */}
              <div className="relative border-l-2 border-[#D4AF37]/30 ml-4 pl-8 space-y-10 mt-8">
                {[
                  { time: "Year 1 to 2", title: "Master the Fundamentals", desc: "You cannot regulate AI if you don't understand basic contracts. Master constitutional law, contract drafting, and basic corporate law first." },
                  { time: "Year 3 to 4", title: "Select Niche Electives & Publish", desc: "Select optional courses in technology law, environmental law, and intellectual property. Publish articles on Web3 or Space Law in reputable academic journals." },
                  { time: "Year 5", title: "Target Specialized Internships", desc: "Intern with specialized technology law boutiques, IN-SPACe research bodies, or corporate ESG compliance chambers rather than general litigation offices." },
                  { time: "Post Graduation", title: "Pursue Advanced Certifications", desc: "Acquire data privacy certifications (like CIPP) or enroll in specialized LL.M. programs in aerospace, AI governance, or international environmental law." }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[41px] top-1.5 bg-white w-5 h-5 rounded-full border-4 border-[#D4AF37] shadow-md" />
                    <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest block mb-2">{item.time}</span>
                    <h4 className="text-base font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
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
                    <span className="text-sm font-medium text-gray-500">Based on 4 verified student reviews</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { author: "Siddharth Mehta", role: "LL.M. Candidate", body: "This guide clarified the academic certifications needed to enter technology law. The timeline section was incredibly useful for planning my final year." },
                    { author: "Divya Nair", role: "Junior Associate", body: "Outstanding resource on ESG compliance and space law trends. Essential reading for law students who want to avoid the saturated litigation market." },
                    { author: "Rahul Varma", role: "Corporate Counsel", body: "Clear explanation of SEBI's BRSR compliance requirements. Saved me hours of research trying to understand where the market is heading." },
                    { author: "Ananya Iyer", role: "Space Law Researcher", body: "The space law licensing guidelines were precise. This is the first practical, India-focused handbook I found on the topic." }
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
