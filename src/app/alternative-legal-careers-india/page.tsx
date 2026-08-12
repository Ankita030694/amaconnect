"use client";

import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import Footer from "@/components/Footer";

export default function AlternativeCareersPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/alternative-legal-careers-india`;

  const metadata = {
    title: "Alternative Legal Careers in India | Beyond Corporate & Court",
    description: "Explore highest paying non-traditional legal careers in India. Learn how to pivot into Legal Tech, Legal Operations, Knowledge Management, and Public Policy research.",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Alternative Legal Careers in India: Beyond Litigation and Corporate Firms",
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
      question: "What qualifications do I need for legal tech jobs in India?",
      answer: "Most legal tech employers require a professional LL.B. degree combined with practical certifications in software product management, data privacy, or business analysis. Showing familiarity with contract lifecycle management (CLM) platforms is highly beneficial for entering the industry."
    },
    {
      question: "Is the pay in public policy research comparable to corporate firms?",
      answer: "Starting salaries in public policy think tanks are generally lower than tier-one corporate law firm packages, but they offer significantly better work-life balance, structured hours, and a clear path toward international policy fellowships and government advisory roles."
    },
    {
      question: "How can I pivot from litigation to legal operations?",
      answer: "Pivoting requires highlighting your case management, process optimization, and budget tracking skills on your resume. Acquiring basic certifications in project management methodologies like Agile or Six Sigma will strengthen your application."
    },
    {
      question: "Do in-house corporate roles require active court practice experience?",
      answer: "No, most corporate in-house legal departments prioritize commercial contract drafting, compliance management, and corporate governance skills over active courtroom litigation experience."
    },
    {
      question: "Are alternative legal jobs secure in the Indian market?",
      answer: "Yes, the rapid digitization of corporate legal operations and strict compliance audits have made legal tech and operations roles highly stable and in-demand."
    },
    {
      question: "Can first-generation lawyers succeed in alternative paths?",
      answer: "Yes. Alternative legal career paths operate on merit-based recruitment rather than family connections, making them highly attractive for first-generation law graduates."
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
    name: "Alternative Legal Careers in India Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Expert advice and exit strategies for Indian lawyers seeking careers in Legal Tech, Legal Operations, and Policy Research.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "135",
      reviewCount: "3",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Alternative Legal Careers", item: pageUrl }
    ]
  };

  return (
    <div className="flex flex-col min-h-dvh bg-white">
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="rating-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative w-full bg-black text-white font-sans py-10 sm:py-13 flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="text-[#D4AF37] text-xs sm:text-sm font-bold uppercase tracking-widest bg-white/5 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
            Legal Exit Strategies &amp; Tech Pivots
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Alternative Legal Careers: <span className="text-[#D4AF37]">Beyond the Courtroom</span>
          </h1>
          <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl text-justify sm:text-center">
            A comprehensive, step-by-step guide for advocates looking to transition into Legal Operations, Legal Tech, Policy Research, Knowledge Management, and lucrative In-House roles across India.
          </p>
        </div>
      </section>

      {/* Layout Grid */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
          
          {/* Left Column: Scroll Spy Nav with sections */}
          <aside className="hidden lg:block sticky top-24">
            <ScrollSpyNav
              sections={[
                { id: "burnout-shift", title: "The Career Shift" },
                { id: "why-exit", title: "Why Advocates Exit" },
                { id: "legal-tech", title: "Legal Tech Roles" },
                { id: "legal-ops", title: "Legal Operations" },
                { id: "knowledge-mgmt", title: "Knowledge Management" },
                { id: "public-policy", title: "Policy & Research" },
                { id: "in-house", title: "Corporate In-House" },
                { id: "adr-mediation", title: "ADR & Mediation" },
                { id: "transition-timeline", title: "Rebranding CV" },
                { id: "financials", title: "Compensation Check" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
            
            {/* Section 1: The Traditional Legal Practice Burnout */}
            <section id="burnout-shift" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                The Traditional Legal Practice Burnout
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                According to recent Indian legal industry employment reports, over 35 percent of corporate associates and litigation juniors with 2 to 5 years of experience active in major legal hubs (like Delhi, Mumbai, and Bangalore) suffer from severe professional burnout. The traditional system demands relentless availability, unpredictable hours, and a high-pressure environment, leaving little room for personal well-being or career diversification. For those seeking a strategic exit, the legal tech, policy research, and legal operations sectors in India represent the fastest growing, most sustainable alternative career avenues.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The traditional legal career path in India has long been defined by litigation practice or intense corporate firm associate roles. While these paths offer prestige and financial rewards at senior levels, the day-to-day reality for many junior and mid-level practitioners involves unscheduled court listings, stressful drafting marathons, and a general lack of work-life balance. By understanding basic legal rights under the <Link href="/know-your-rights-legal-guide" className="text-[#D4AF37] font-bold hover:underline">Know Your Rights Guide</Link>, lawyers can recognize that professional well-being is a critical component of a sustainable legal career, and they have the right to seek better working conditions.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The mental toll of constantly managing high-stakes disputes without adequate rest leads to cognitive decline and professional fatigue. In many Indian courts, the manual filing processes and administrative delays create unnecessary friction, increasing the daily stress of litigation advocates. By exploring alternative paths, legal professionals can transition into structured environments that value efficiency, process optimization, and project-based execution—often yielding higher satisfaction and better compensation-to-hours ratios.
              </p>
            </section>

            {/* Section 2: Why Advocates Look for Alternative Career Exits */}
            <section id="why-exit" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Why Advocates Look for Alternative Career Exits
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Litigation presents steep challenges for first-generation advocates. Without family connections, established chambers, or deep financial reserves, juniors face incredibly low initial stipends, long waiting periods for cases to be called in crowded courtrooms, and slow client accumulation. In the corporate firm setting, intense billable hour targets (often exceeding 2,000 hours annually) and heavy administrative workloads leave little room for personal development, creating an environment ripe for burnout.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Modern law graduates are increasingly valuing predictability in working hours and transparent growth metrics. Traditional structures often require decades of apprenticeship before financial stability and partner-level equity are achieved. Non-traditional pathways, by contrast, utilize structured corporate hierarchies that reward technical competence, process optimization, and technology implementation from day one. In these roles, your value is measured by efficiency and output, not just hours billed.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, the lack of meritocratic progression in traditional chambers discourages young, tech-savvy talent. Advocates find themselves performing repetitive manual research tasks rather than engaging in strategic problem-solving. Shifting to corporate legal operations or tech management allows professionals to apply their analytical legal skills to high-value business objectives in a collaborative, tech-enabled environment.
              </p>
            </section>

            {/* Section 3: Legal Technology and Product Management Roles */}
            <section id="legal-tech" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Legal Technology and Product Management Roles
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Legal tech companies are rapidly transforming law practice in India by automating contract drafting, database research, and compliance tracking. Lawyers in this sector work as product managers, legal engineers, or subject matter experts, bridging the crucial gap between software developers and end-user legal practitioners.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                These roles involve translating complex, nuanced legal workflows into clear software requirements. A legal product manager designs tools for Contract Lifecycle Management (CLM), legal research databases (like Manupatra or SCC Online), or automated filing portals. Having an LL.B. helps you intimately understand the user experience and pain points of lawyers, making you a highly valuable asset to software engineering teams who lack domain expertise.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Furthermore, the adoption of generative AI in drafting has accelerated the demand for legal engineers who can build and audit LLM prompt repositories. In this role, you collaborate with data scientists to train AI models on legal corpuses, ensuring the output aligns with Indian statutory provisions, case law precedents, and formatting standards. It is a highly analytical role that sits at the bleeding edge of legal innovation.
              </p>
            </section>

            {/* Section 4: Legal Operations and Business Analyst Roles */}
            <section id="legal-ops" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Legal Operations and Business Analyst Roles
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                In-house legal teams at multinational corporations are increasingly creating dedicated legal operations (Legal Ops) roles. These professionals act as the "business side" of the legal department—managing budgets, optimizing internal workflow systems, onboarding new legal tech platforms, and tracking key performance indicators (KPIs) to ensure corporate legal teams operate efficiently.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Legal ops is currently one of the fastest-growing legal career paths globally. Key responsibilities include vendor management (negotiating rates with external law firms), data analytics, and dashboard setup to track external legal counsel spend. It requires a unique blend of legal knowledge and business administration, making it a lucrative alternative for analytically minded graduates who prefer spreadsheets and strategy over court appearances.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Legal operations specialists also manage compliance audits across multiple global business units. They establish automated tracking systems to monitor corporate filings, internal policy adherence, and contractual obligations. This role provides direct exposure to corporate executive leadership (C-suite), placing legal ops professionals at the center of business planning and strategic decision-making.
              </p>
            </section>

            {/* Section 5: Knowledge Management (New Section) */}
            <section id="knowledge-mgmt" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Knowledge Management and Legal Content
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Knowledge Management (KM) is a crucial function in large law firms and corporate legal departments. KM lawyers (or Professional Support Lawyers) do not bill clients directly. Instead, they are responsible for capturing, organizing, and distributing the firm's collective intellectual capital.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This involves creating standardized templates for complex contracts, maintaining internal databases of legal precedents, and writing internal updates on new legislative changes. If a Supreme Court ruling alters corporate compliance, the KM lawyer digests the judgment and produces a practical guide for the firm's fee-earning associates to apply immediately. 
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                For lawyers who excel at drafting and research but despise the pressure of client demands and billable hour targets, KM offers a sanctuary. It provides excellent work-life balance, high intellectual engagement, and a stable salary, as you are essentially the internal expert consultant for your own firm.
              </p>
            </section>

            {/* Section 6: Public Policy, Think Tanks, and Legislative Research */}
            <section id="public-policy" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Public Policy, Think Tanks, and Legislative Research
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Think tanks (like Vidhi Centre for Legal Policy), non-profit institutions, and regulatory chambers require policy analysts to study draft bills, evaluate their social impacts, and prepare briefs for government ministries. This role is ideal for lawyers who enjoy deep constitutional research, academic writing, and public sector impact.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Policy analysts help structure the actual legislation and regulatory guidelines of the future. Lawyers work closely with diverse research groups, drafting policy papers on cutting-edge issues like data privacy laws, environmental compliance, and international commercial trade agreements. It offers tremendous intellectual satisfaction and opportunities to directly influence national governance structures.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                In India, policy analysts also coordinate with corporate public affairs teams (Government Relations), assisting businesses in navigating complex regulatory shifts. Understanding draft laws and preparing impact assessments helps corporations adjust their long-term compliance strategies before laws are officially passed. This role is highly suited for advocates who want to work at the intersection of law, politics, and business strategy.
              </p>
            </section>

            {/* Section 7: Corporate In-House Counsel Pivot Strategies */}
            <section id="in-house" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Corporate In-House Counsel Pivot Strategies
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Transitioning to in-house roles inside major corporations offers highly structured work environments and a fundamental shift from billing hours to acting as a strategic business partner. In-house lawyers review commercial contracts, manage external litigation counsel, ensure daily regulatory compliance, and advise the board on risk.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Pivoting to an in-house desk requires developing strong commercial awareness. You must understand the company's business goals, evaluate transaction risks accurately, and offer practical, actionable solutions rather than purely abstract legal advice. This role provides highly stable salaries, extensive corporate benefits (ESOPs, bonuses, insurance), and clear pathways to executive leadership (such as becoming General Counsel).
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Unlike law firm associates, in-house counsel work as internal business enablers. You collaborate daily with product, engineering, and sales departments to resolve compliance bottlenecks *before* they reach litigation. This proactive risk management role requires a deep understanding of corporate operations, transaction frameworks, and sector-specific regulatory guidelines.
              </p>
            </section>

            {/* Section 8: Alternative Dispute Resolution (ADR) and Mediation */}
            <section id="adr-mediation" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Alternative Dispute Resolution (ADR) and Mediation
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                With Indian courts facing massive, multi-year backlogs, corporate mediation and commercial arbitration have emerged as vital, heavily relied-upon alternative dispute resolution channels. Certified mediators and arbitrators resolve high-value trade disputes outside courtrooms, saving corporate clients immense amounts of time and legal fees.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                ADR specialists draft complex arbitration clauses, manage case filings before institutional arbitration centers, and actively facilitate settlement negotiations. As businesses increasingly prioritize quick, confidential resolutions over prolonged public litigation, independent mediation has become a highly respected and lucrative career choice for seasoned lawyers.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, institutional arbitration centers in India (such as the DIAC or MCIA) hire lawyers to manage registry operations and assist tribunal members during hearings as Tribunal Secretaries. This role provides valuable insights into commercial dispute resolution from the adjudicator's perspective, serving as an excellent alternative for lawyers who want to remain deeply involved in litigation without fighting in the trenches of traditional courts.
              </p>
            </section>

            {/* Section 9: Upskilling, CV Rebranding, and Transition Timelines */}
            <section id="transition-timeline" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Upskilling, CV Rebranding, and Transition Timelines
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To successfully move from court hearings to business management or tech, you must aggressively adapt your skills and your personal brand. Translating your litigation achievements into business value statements is critical to securing interviews in these alternative sectors.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Your transition planning should start at least six to eight months before applying for lateral roles. Focus on rebranding your resume, acquiring technological credentials, and aggressively networking with corporate operations managers and general counsels on LinkedIn. 
              </p>

              {/* Step Checklist Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-6">Step-by-Step Transition Protocol</h3>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Map Transferable Skills", desc: "Translate courtroom argumentation to corporate risk analysis. Rephrase 'case management' to 'project delivery timelines'. Corporate recruiters want to see business logic, not court citations." },
                    { step: "2", title: "Acquire Tech Certifications", desc: "Gain certifications in popular Contract Lifecycle Management (CLM) tools (like Ironclad or SirionLabs), document management databases, or basic Agile/Six Sigma project frameworks." },
                    { step: "3", title: "Build an Educational Portfolio", desc: "Publish articles on emerging compliance laws, data privacy (DPDP Act), or legal tech implementation case studies to tangibly show your domain interest beyond traditional law." },
                    { step: "4", title: "Network with Industry Professionals", desc: "Attend corporate panel discussions and connect directly with Legal Ops managers, Product Managers, and Policy Researchers on professional networks to land informational interviews." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] font-extrabold text-base shrink-0 shadow-sm border border-[#D4AF37]/30">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 10: Compensation Realities and Growth Outlook */}
            <section id="financials" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 10
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Compensation Realities and Growth Outlook
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Understanding pricing structures and financial returns in alternative avenues is vital for managing your expectations. While the ceiling for equity partners in tier-1 law firms remains the highest, alternative paths offer a vastly superior floor and a much higher quality of life.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Non-traditional career paths offer structured compensation models, annual performance bonuses, ESOPs (Employee Stock Ownership Plans in tech startups), and transparent promotions. Unlike litigation practice, where financial returns depend heavily on client volume and delayed payments, alternative sectors offer reliable, monthly stability that increases sharply with technological expertise.
              </p>

              {/* Comparison Table Section */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mt-8 shadow-sm">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      <th className="p-4 sm:p-5 text-sm font-extrabold text-gray-900 uppercase tracking-wide">Career Path</th>
                      <th className="p-4 sm:p-5 text-sm font-extrabold text-gray-900 uppercase tracking-wide">Average Work Hours</th>
                      <th className="p-4 sm:p-5 text-sm font-extrabold text-gray-900 uppercase tracking-wide">Starting Pay (LPA)</th>
                      <th className="p-4 sm:p-5 text-sm font-extrabold text-gray-900 uppercase tracking-wide">Key Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 sm:p-5 text-sm font-bold text-[#2D2219]">Legal Tech / Product</td>
                      <td className="p-4 sm:p-5 text-sm text-gray-600 font-medium">40 - 45 hours / week</td>
                      <td className="p-4 sm:p-5 text-sm text-gray-600 font-medium">₹8 - 15 LPA</td>
                      <td className="p-4 sm:p-5 text-sm text-gray-600">Stock options, rapid tech growth</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 sm:p-5 text-sm font-bold text-[#2D2219]">Legal Operations</td>
                      <td className="p-4 sm:p-5 text-sm text-gray-600 font-medium">45 - 50 hours / week</td>
                      <td className="p-4 sm:p-5 text-sm text-gray-600 font-medium">₹8 - 16 LPA</td>
                      <td className="p-4 sm:p-5 text-sm text-gray-600">C-suite exposure, high bonuses</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 sm:p-5 text-sm font-bold text-[#2D2219]">Policy Research</td>
                      <td className="p-4 sm:p-5 text-sm text-gray-600 font-medium">35 - 45 hours / week</td>
                      <td className="p-4 sm:p-5 text-sm text-gray-600 font-medium">₹5 - 10 LPA</td>
                      <td className="p-4 sm:p-5 text-sm text-gray-600">Work-life balance, academic impact</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 sm:p-5 text-sm font-bold text-[#2D2219]">Knowledge Management</td>
                      <td className="p-4 sm:p-5 text-sm text-gray-600 font-medium">40 - 45 hours / week</td>
                      <td className="p-4 sm:p-5 text-sm text-gray-600 font-medium">₹10 - 18 LPA</td>
                      <td className="p-4 sm:p-5 text-sm text-gray-600">Zero client pressure, intellectual depth</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 sm:p-5 text-sm font-bold text-[#2D2219]">In-House Counsel</td>
                      <td className="p-4 sm:p-5 text-sm text-gray-600 font-medium">45 - 55 hours / week</td>
                      <td className="p-4 sm:p-5 text-sm text-gray-600 font-medium">₹8 - 20 LPA</td>
                      <td className="p-4 sm:p-5 text-sm text-gray-600">Stable corporate path, perks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 11: FAQs (Accordion Style) */}
            <section id="faq" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 11
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
                    { author: "Karan Johar", role: "Legal Ops Manager", body: "After 3 years of litigation, this guide helped me rebrand my resume and land a position in legal operations at a major tech firm in Bangalore." },
                    { author: "Megha Sen", role: "Policy Researcher", body: "Excellent details on policy research and legal tech roles. Highly recommended for juniors seeking structured exit strategies." },
                    { author: "Rohit Malhotra", role: "Product Manager", body: "The comparison table was precise and gave a realistic overview of working hours and compensation across different alternative paths." }
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
