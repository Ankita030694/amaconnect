import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import LawyerFaqAccordion from "@/components/LawyerFaqAccordion";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Transitioning Litigation to Corporate Law in India",
  description:
    "Learn how to transition between litigation and corporate law firms in India. Discover resume tips, skill mapping, and transition checklists.",
  alternates: {
    canonical: "https://www.amaconnect.in/transition-litigation-to-corporate-law",
  },
  openGraph: {
    title: "Transitioning Litigation to Corporate Law in India",
    description:
      "Learn how to transition between litigation and corporate law firms in India. Discover resume tips, skill mapping, and transition checklists.",
    url: "https://www.amaconnect.in/transition-litigation-to-corporate-law",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function TransitionPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/transition-litigation-to-corporate-law`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "How to Transition from Litigation to a Corporate Law Firm (and Vice Versa)",
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
      question: "Can a senior litigator join a corporate firm as a lateral hire?",
      answer: "Yes, corporate firms regularly hire senior litigators to lead their dispute resolution practice groups or represent key commercial clients in corporate bankruptcy proceedings under the IBC guidelines."
    },
    {
      question: "What skills should I highlight on my CV when switching to corporate?",
      answer: "You must highlight commercial contract review, statutory interpretation, dispute risk assessment, due diligence processes, and professional client communication skills rather than purely procedural court appearances."
    },
    {
      question: "Is it difficult to move from a corporate firm to independent litigation?",
      answer: "The primary challenge is the initial drop in stable monthly income. Transitioning advocates must build their independent client base from scratch and learn hyper-local procedural court rules that vary by jurisdiction."
    },
    {
      question: "Do corporate firms value pro bono litigation experience?",
      answer: "Yes, pro bono practice shows trial advocacy, file organization, empathy, and civic involvement, which reflect positively on corporate litigation firm applications and fulfill ESG (Environmental, Social, and Governance) hiring criteria."
    },
    {
      question: "What is the typical transition period between these careers?",
      answer: "Most professionals spend about three to six months adjusting to the new organizational culture, drafting standards, and billable hour recording practices, followed by a year to fully integrate into the client relationship structure."
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
    name: "Litigation to Corporate Law Transition Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Expert tips and step-by-step strategies for lawyers transitioning from court practice to corporate law firms or vice versa.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "82",
      reviewCount: "2",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Transition Guide", item: pageUrl }
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
            Professional Legal Pivots
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            How to Transition from Litigation to <span className="text-[#D4AF37]">Corporate Law</span>
          </h1>
          <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl text-justify sm:text-center">
            A strategic handbook detailing resume reformatting, interview preparation, cultural shifts, and step-by-step guidelines for Indian lawyers pivoting between courtrooms and boardrooms.
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
                { id: "pivot-intro", title: "The Legal Pivot" },
                { id: "cultural-shift", title: "The Cultural Shift" },
                { id: "lit-to-corp", title: "Court to Firm" },
                { id: "translating-skills", title: "Resume Rebranding" },
                { id: "corp-to-lit", title: "Firm to Court" },
                { id: "court-adjustment", title: "Court Procedures" },
                { id: "client-building", title: "Client Acquisition" },
                { id: "transition-checklist", title: "Step Checklist" },
                { id: "financial-changes", title: "Billing Models" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
            
            {/* Section 1: Court Chambers vs. Corporate Law Firm Operations */}
            <section id="pivot-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Court Chambers vs. Corporate Law Firm Operations
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Corporate law firms in Mumbai, Delhi, and Bangalore report a significant 15-20 percent increase in lateral hires from courtroom litigation offices. Partners increasingly seek associates with strong, battle-tested argumentative and case analysis skills. However, pivoting between these two vastly different career paths requires a systematic rebranding of your legal portfolio, your CV, and your daily mindset.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                For lawyers starting their career in the district or High Courts, the focus is almost entirely on courtroom advocacy, real-time evidence gathering, and daily, face-to-face client interactions. To prepare for this style of work, reviewing the <Link href="/how-to-prepare-for-first-trial-advocate-advice" className="text-[#D4AF37] font-bold hover:underline">First Trial Prep Guide</Link> provides invaluable context. Conversely, corporate law practices revolve around proactive transactions, exhaustive due diligence reports, and structuring iron-clad compliance policies before a dispute ever arises.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Recognizing the fundamental operational differences between these fields is critical to mapping your skills during a transition. Litigation is inherently reactive—dealing with a fire after it starts. Corporate law is preventative—building the fire safety system.
              </p>
            </section>

            {/* Section 2: The Cultural Shift (New Section) */}
            <section id="cultural-shift" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Navigating the Cultural Shift
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Perhaps the biggest shock for transitioning lawyers is not the substantive law, but the workplace culture. Litigation chambers operate in a highly decentralized, fast-paced, and often chaotic environment where advocates must respond instantly to unexpected court developments or moody judges. Hierarchy is strict, but operations are fluid.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Corporate firms, on the other hand, prioritize structured project management, meticulous multi-tier review systems (maker-checker concepts), and cross-team collaboration. A single contract might be reviewed by a junior associate, a senior associate, and finally a partner over the course of weeks. Understanding and embracing this collaborative, structured cadence is essential for survival in a corporate environment.
              </p>
            </section>

            {/* Section 3: Shifting from Courtroom Practice to Corporate Office Roles */}
            <section id="lit-to-corp" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Shifting from Courtroom Practice to Corporate Roles
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The transition from active court practice to corporate office buildings is often motivated by the desire for structured financial compensation, predictable working hours (or at least, predictable locations), and specialized practice areas like M&A or Private Equity. However, corporate recruiters often view pure litigators with caution, assuming their skills are limited to procedural court work and oral arguments rather than nuanced transaction management.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To bridge this gap, litigators must proactively demonstrate familiarity with transactional work. Drafting corporate contracts, advising on compliance matters, and conducting due diligence are essential skills to highlight. Showing knowledge of how legal notices are structured, as explained in the <Link href="/how-to-draft-legal-notice-india-guide" className="text-[#D4AF37] font-bold hover:underline">Legal Notice Guide</Link>, helps demonstrate your capability to analyze and structure complex corporate communications.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Your strongest selling point as a litigator is your predictive risk-assessment capability. Because you have seen exactly how and why contracts fail in court, you can draft clearer clauses that protect clients from those very disputes. Emphasizing this "litigation-tested drafting" helps you stand out in corporate interviews.
              </p>
            </section>

            {/* Section 4: Rebranding Litigation Achievements on Your Resume */}
            <section id="translating-skills" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Rebranding Litigation Achievements on Your CV
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Your resume must speak the language of corporate transaction teams. You must completely strip away court-specific jargon that a corporate HR manager will not understand. Focus instead on contract drafting, statutory interpretation, dispute risk assessment, and legal project management.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Remove dense lists of court citations or section numbers. Replace them with bullet points detailing the *business impact* of your work, the size of the disputes managed (in Rupees), and your role in risk audits. Corporate recruiters value process efficiency and transaction management metrics over courtroom theatrics.
              </p>

              {/* Before vs After Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-6">CV Rebranding: Before vs After</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50/30 p-5 rounded-2xl border border-red-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      <h4 className="text-sm font-bold text-red-900 uppercase tracking-wide">Traditional Litigation</h4>
                    </div>
                    <p className="text-sm text-red-900/80 leading-relaxed italic">
                      "Drafted writ petitions under Art. 226, civil suits, and represented clients in daily hearings before the High Court. Managed client files, argued interim bail matters, and conducted cross-examinations."
                    </p>
                  </div>
                  <div className="bg-green-50/30 p-5 rounded-2xl border border-green-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <h4 className="text-sm font-bold text-green-900 uppercase tracking-wide">Corporate Rebranded</h4>
                    </div>
                    <p className="text-sm text-green-900/80 leading-relaxed italic">
                      "Conducted complex statutory research, assessed multi-crore dispute risks, and drafted highly technical transactional documents. Managed end-to-end case lifecycles, coordinated regulatory filings, and negotiated settlements."
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Pivoting from Corporate Law back to Litigation Practice */}
            <section id="corp-to-lit" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Pivoting from Corporate Law to Court Litigation
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The shift from a corporate law firm to independent litigation is entirely different. It is often driven by a desire for courtroom presence, entrepreneurial independence, and direct public advocacy. Corporate associates frequently feel disconnected from the human impact of the law behind layers of corporate bureaucracy and seek the adrenaline of live court representations.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Corporate lawyers transitioning to litigation bring incredibly strong contract analysis, drafting perfectionism, and file structuring skills. However, they face immense challenges: they must adjust to drastically lower initial stipends (or zero income if starting independent practice), build client relationships from scratch, and spend grueling hours observing daily court proceedings to master unwritten local courtroom procedures.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This transition requires immense patience and financial planning. Developing a strong network at the local bar association and strategically associating with experienced senior counsels can significantly accelerate your transition into active trial practice.
              </p>
            </section>

            {/* Section 6: Navigating Local Court Procedures and Registry Teams */}
            <section id="court-adjustment" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Navigating Local Court Procedures and Registries
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The primary operational nightmare for a transitioning corporate lawyer is navigating the labyrinthine court registry. Understanding how physical (or e-filed) files are processed, how objections are cleared by specific clerks, and how cases are listed on the daily board is critical. It requires humility and regular, respectful coordination with registry staff and experienced court clerks (Munshis).
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Chamber practices depend heavily on mastering these procedural intricacies. Transitioning lawyers should spend weeks merely observing in registry offices—watching how petitions are filed and objections removed under the guidance of senior clerks—to ensure their own future pleadings are not permanently stalled due to formatting or annexure errors.
              </p>
            </section>

            {/* Section 7: Developing an Independent Client Base outside Firms */}
            <section id="client-building" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Developing an Independent Client Base
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Without the prestigious brand name of a Tier-1 corporate firm behind you, independent litigation relies entirely on your personal reputation, community trust, and word-of-mouth referrals. Transitioning advocates must proactively build visibility by taking on varied cases, including pro bono matters, to gain courtroom reps.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Participating in legal aid clinics is an effective, honorable way to secure courtroom experience rapidly. Utilizing resources like the <Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] font-bold hover:underline">Pro Bono Free Legal Aid Guide</Link> helps transitioning lawyers understand how to leverage these cases. It builds immense community goodwill, hones trial skills, and frequently leads to paying referrals from satisfied beneficiaries.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, networking with local business groups (Rotary clubs, SME associations) and offering free informative talks on basic compliance laws can firmly establish your authority. Providing clear, transparent fee agreements (unlike the opaque billing of some traditional lawyers) builds immediate client trust.
              </p>
            </section>

            {/* Section 8: Step-by-Step Transition Protocol and Timelines */}
            <section id="transition-checklist" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Step-by-Step Transition Protocol and Timelines
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Pivoting between these polarized practice areas requires structured preparation over several months. You cannot simply apply to a law firm with a litigation CV and expect a callback.
              </p>

              {/* Step Checklist Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-6">Execution Protocol</h3>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Identify Transferable Core Skills", desc: "For litigators: highlight risk evaluation, complex document synthesis, and negotiation strategies. For corporate lawyers moving to litigation: highlight meticulous drafting, due diligence, and deep statutory knowledge." },
                    { step: "2", title: "Restructure Your Resume", desc: "For corporate applications, remove dense court citations. Focus on transactional values, risk mitigation percentages, and compliance audits." },
                    { step: "3", title: "Target Lateral Roles Strategically", desc: "Don't apply to pure M&A if you only have litigation experience. Apply to the firm's Dispute Resolution, White-Collar Crime, or Arbitration practice groups where your skills overlap perfectly." },
                    { step: "4", title: "Prepare for Behavioral Interviews", desc: "Corporate firms will test your ability to work in large teams and take feedback—traits often contrary to the independent nature of litigators. Prepare stories highlighting your teamwork." }
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

            {/* Section 9: Billing Frameworks: Billable Hours vs. Case Retainers */}
            <section id="financial-changes" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Billing Frameworks: Billable Hours vs. Case Retainers
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Corporate firms live and die by the **billable hour**. Associates must meticulously track their time in 6-minute increments (0.1 of an hour). This requires a massive adjustment for litigators who are used to billing flat fees per court appearance regardless of how long the wait was.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Independent litigation, by contrast, operates on case-based retainers, flat appearance fees, or stage-wise billing. Corporate lawyers transitioning to independent practice must learn how to price their services competitively without a firm's pricing matrix to rely on.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Developing structured retainer agreements and managing personal overhead costs (office rent, clerk salaries, SCC subscriptions) is key to maintaining a sustainable independent practice during the vulnerable pivot phase.
              </p>
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
                    { author: "Vikram Sengupta", role: "Corporate Associate", body: "Very detailed guide on reformatting resumes for corporate firms. The Before vs After section completely changed how I frame my High Court experience." },
                    { author: "Aarti Desai", role: "Independent Counsel", body: "Moving from a Tier-1 firm to my own chamber was terrifying. The section on registry navigation and billing models was painfully accurate and incredibly helpful." }
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
