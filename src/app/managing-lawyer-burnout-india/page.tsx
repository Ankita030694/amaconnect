"use client";

import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import Footer from "@/components/Footer";

export default function BurnoutPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/managing-lawyer-burnout-india`;

  const metadata = {
    title: "Reality of Lawyer Burnout in India & Stress Management",
    description: "Examine mental health struggles, toxic chamber culture, and burnout among advocates in India. Learn boundary setting, client management, and systemic solutions.",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "The Reality of Lawyer Burnout in India and How to Manage It",
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
      question: "What are the common signs of legal burnout?",
      answer: "Common signs include chronic physical fatigue, emotional detachment, increased irritation with clients, a decline in drafting focus, and severe imposter syndrome."
    },
    {
      question: "How can junior advocates set boundaries with senior advocates?",
      answer: "Junior advocates can communicate availability constraints clearly during hiring, request structured timelines for research drafts, and actively organize tasks before court listings to avoid late-night panics."
    },
    {
      question: "Does pro bono work contribute to advocate stress?",
      answer: "If not managed properly, extra cases undoubtedly add to the workload. However, structured, boundary-driven pro bono representations can actually build community trust and restore a sense of professional purpose."
    },
    {
      question: "What options exist for advocates seeking therapy in India?",
      answer: "Advocates can access online counseling platforms, confidential local bar association support groups, and clinical therapists specializing in high-performance workplace anxiety."
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
    name: "Lawyer Burnout in India Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Stress management and mental health resource guide for Indian litigation advocates and corporate firm associates.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "98",
      reviewCount: "2",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Lawyer Burnout", item: pageUrl }
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
            Mental Health &amp; Well-being
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            The Reality of Lawyer Burnout in India <br/> <span className="text-[#D4AF37]">and How to Manage It</span>
          </h1>
          <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl text-justify sm:text-center">
            A comprehensive, unfiltered look at workplace anxiety, court corridor pressure, toxic chamber culture, and practical stress management strategies for Indian advocates.
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
                { id: "burnout-intro", title: "The Mental Crisis" },
                { id: "courtroom-pressures", title: "Courtroom Delays" },
                { id: "firm-associates", title: "14-Hour Workdays" },
                { id: "junior-lawyers", title: "Junior Obstacles" },
                { id: "toxic-redflags", title: "Toxic Red Flags" },
                { id: "boundary-setting", title: "Boundary Setting" },
                { id: "physical-health", title: "Physical Ergonomics" },
                { id: "stress-relief", title: "Stress Management" },
                { id: "systemic-reforms", title: "Judicial Reforms" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
            
            {/* Section 1: Mental Health Crisis in Indian Courts and Chambers */}
            <section id="burnout-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                The Silent Mental Health Crisis in Indian Courts
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                A recent mental health survey of Indian legal professionals revealed a devastating reality: nearly 72 percent of junior litigation advocates and corporate associates experience clinical levels of chronic stress, anxiety, and depression due to unstructured court calendars, toxic hierarchies, and appallingly low compensation. Managing this systemic crisis requires rigid individual boundaries, mental health destigmatization, and massive administrative court reforms.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Litigation practice in India requires preparing for completely unexpected hearings, managing severe client emotional expectations (often involving liberty or life savings), and frantic daily registry filing checks. First-generation lawyers must build confidence under immense pressure. Reviewing fundamental court procedures in the <Link href="/how-to-prepare-for-first-trial-advocate-advice" className="text-[#D4AF37] font-bold hover:underline">Trial Prep Guide</Link> can help junior advocates structure their tasks early on to reduce courtroom anxiety.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The emotional pressure of absorbing and handling traumatized client concerns daily (vicarious trauma), combined with low initial incomes, creates an unsustainable high-anxiety loop. Junior advocates must ruthlessly focus on building structured routines, seeking healthy mentorship, and learning case management systems to insulate themselves from this pressure.
              </p>
            </section>

            {/* Section 2: Unscheduled Listings and Registry Procedure Delays */}
            <section id="courtroom-pressures" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Unscheduled Listings and Registry Procedure Delays
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The daily physical environment of Indian district and High Courts—characterized by crowded, unventilated corridors, chaotic multiple listing changes, and agonizingly long waiting periods—contributes significantly to mental fatigue. Advocates are expected to remain hyper-alert for hours, waiting for their cases to be called by the court master, only to face a 30-second adjournment.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                These procedural uncertainties make it mathematically impossible to organize predictable office schedules. Junior advocates often spend entire days standing in court corridors waiting for a single case mention, which leaves them with little choice but to draft pleadings or research case files deep into the night, leading to a constant, exhausting cycle of catching up.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Registry bottlenecks, missing files, and unexpected formatting objections also contribute heavily to daily work stress. Advocates must actively build good relationships with registry staff and plan their filing timelines with massive buffers to avoid last-minute panic attacks before limitation periods expire.
              </p>
            </section>

            {/* Section 3: 14-Hour Workdays and Billable Hours at Top Firms */}
            <section id="firm-associates" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                14-Hour Workdays and the Billable Hour Trap
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                In Tier-1 corporate law firms, the primary source of chronic anxiety is not the judge, but the billable hour target. Associates face unspoken but intense pressure to remain online and available for 12 to 14 hours per day, reviewing thousands of pages of due diligence documents under violently tight deadlines.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This environment actively punishes setting personal boundaries. Associates who log off at 7 PM are often labeled "uncommitted." Consequently, they frequently experience physical exhaustion, severe imposter syndrome, and a complete collapse of work-life balance. Destigmatizing mental health discussions is absolutely critical to addressing this systemic exploitation within the corporate legal industry.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The continuous pressure to meet monthly targets (often 180-200 billable hours) leads directly to sleep deprivation, substance abuse, and emotional exhaustion. Corporate partners must establish realistic targets, embrace legal tech to reduce grunt work, and mandate mental health programs to protect their associates.
              </p>

              {/* Data Callout Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-4">Advocate Well-being Survey Statistics</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-4">
                  Surveys show alarmingly high rates of chronic stress and anxiety among young legal professionals in Indian metropolitan cities, leading to a mass exodus from the profession within the first 5 years.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block text-3xl font-black text-red-500 mb-1">72%</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Experience Chronic Stress</span>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block text-3xl font-black text-orange-500 mb-1">14+ Hrs</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Average Daily Workload</span>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block text-3xl font-black text-amber-500 mb-1">85%</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Report Lack of Rest</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Low Stipends and Litigation Challenges for First-Gens */}
            <section id="junior-lawyers" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Economic Anxiety for First-Generation Lawyers
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                First-generation litigation advocates face brutally low (and sometimes zero) initial stipends in senior chambers. Without independent client listings or generational wealth to fall back on, they must rely on rapidly depleting family funds or take on exhausting secondary freelance tasks just to cover basic commuting and living expenses in cities like Delhi or Mumbai.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This immense economic pressure contributes directly to the high drop-out rates from litigation practice. To build visibility and client relationships without burning out, junior advocates should consider structured legal aid programs, as detailed in our <Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] font-bold hover:underline">Pro Bono Legal Aid Guide</Link>. You can also read recent legal insights in the <Link href="/blog" className="text-[#D4AF37] font-bold hover:underline">AMAConnect Blog Hub</Link> for professional updates and networking tips.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Without financial security, a junior lawyer's focus is constantly divided between survival and learning the law, leading to deep frustration. Senior chambers must transition toward fair compensation systems, ensuring junior advocates receive sustainable stipends that allow them to focus entirely on active trial practice rather than how to pay rent.
              </p>
            </section>

            {/* Section 5: Red Flags of a Toxic Legal Workplace to Avoid */}
            <section id="toxic-redflags" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Red Flags of a Toxic Chamber Culture
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Recognizing the difference between healthy, rigorous professional demands (which are necessary to become a good lawyer) and outright toxic, abusive workplace behavior helps you make informed choices before a workplace destroys your mental health.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Workplaces that actively discourage asking questions, mock mistakes publicly, or expect continuous online presence without adequate rest are screaming red flags of a toxic chamber culture that you must exit.
              </p>

              {/* Red Flags List Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-6">Workspace Warning Signs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Constant Late-Night Demands", desc: "Expecting juniors to review files or respond to non-urgent drafting instructions outside standard working hours every single day." },
                    { title: "Public Belittling", desc: "Seniors shouting at, mocking, or belittling junior advocates in corridors or open chambers instead of providing private, constructive feedback." },
                    { title: "Compensation Opaqueness", desc: "Delaying monthly stipends, refusing to discuss raises, or keeping junior advocates on 'probation' wages indefinitely." },
                    { title: "Discouraging Personal Time", desc: "Treating requests for personal time, family emergencies, or medical leave as a 'lack of dedication' to the profession." }
                  ].map((flag, idx) => (
                    <div key={idx} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-2">{flag.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{flag.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 6: Boundary Setting with Demanding Clients and Seniors */}
            <section id="boundary-setting" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Boundary Setting with Clients and Seniors
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Setting rigid boundaries is essential for long-term professional survival. Communicate your availability parameters clearly to clients during the first meeting. Establish a firm rule that case inquiries will only be processed during standard office hours, strictly ignoring late-night WhatsApp messages except in genuine emergencies like arrests.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                With senior advocates, calmly but firmly request structured timelines for research drafts. Proactively planning your research tasks in advance helps avoid last-minute, panic-induced drafting marathons, allowing you to manage court listings with greater confidence and significantly reduced anxiety.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Setting these limits helps prevent communication friction before it starts. Transitioning advocates should use template engagement letters that clearly specify response times (e.g., "We will respond to all queries within 24 hours") to manage client expectations legally.
              </p>
            </section>

            {/* Section 7: Physical Health & Ergonomics */}
            <section id="physical-health" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Physical Health and Desk Ergonomics
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Burnout is not just mental; it is deeply physical. Lawyers spend upwards of 10 hours a day hunched over laptops reading tiny fonts, or carrying 15-kilo case files across massive court complexes. This leads directly to chronic back pain, cervical spondylosis, and severe eye strain.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Investing in physical ergonomics is non-negotiable. Use a laptop stand to elevate your screen to eye level, invest in a high-quality orthopedic office chair (not the standard wooden chamber chair), and strictly follow the 20-20-20 rule for eye strain (every 20 minutes, look 20 feet away for 20 seconds).
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Hydration and basic mobility are often forgotten during busy court days. Force yourself to walk around the chamber every hour, and switch to digital case files on an iPad where permitted by the court to literally take the weight off your shoulders.
              </p>
            </section>

            {/* Section 8: Practical Chamber Stress Management Methodologies */}
            <section id="stress-relief" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Practical Stress Management Methodologies
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Chamber operations can and must be optimized to reduce stress. Use digital case management databases (like Notion or dedicated legal tech) to track deadlines, limitations, and filings. Keeping files hyper-organized prevents procedural errors and minimizes the soul-crushing panic of a missing document.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, build supportive, non-competitive peer networks at the local bar association. Sharing experiences (and venting) with other junior advocates helps normalize your struggles and provides opportunities to share case files or proxy appearances, massively reducing individual workloads on heavy listing days.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Promoting wellness practices, like truly disconnected weekends (no emails) and mandatory vacation days, restores cognitive function. Chamber heads must actively implement these healthy habits from the top down to maintain long-term team efficiency.
              </p>
            </section>

            {/* Section 9: Judicial Reforms and Mental Health Destigmatization */}
            <section id="systemic-reforms" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Judicial Reforms and Destigmatization
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                While individual coping mechanisms are important, addressing lawyer burnout permanently requires massive administrative court reforms. Implementing reliable digital court management systems, structured time-slot calendar listings, and strict adherence to hearing timelines can completely eliminate the agonizing wait times in court corridors.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Furthermore, bar associations must prioritize mental health support as a core function. Setting up confidential, free helpline services, organizing clinical therapy workshops, and creating binding guidelines that force seniors to offer minimum fair stipends are critical steps toward a sustainable professional environment.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Destigmatizing mental health issues encourages advocates to seek clinical help early before burnout turns into severe depression. Promoting open conversations about the reality of legal stress helps build a much-needed supportive community within the Indian legal system.
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
                    { author: "Dr. Alok Verma", role: "Senior Advocate", body: "A highly empathetic and timely article addressing the silent crisis of mental health in Indian chambers. Essential reading for every junior." },
                    { author: "Sneha Rao", role: "Corporate Associate", body: "The section on the 14-hour billable trap hit very close to home. Thank you for clearly defining the red flags of toxic chamber cultures so juniors know what to avoid." }
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
