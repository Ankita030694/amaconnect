"use client";

import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import Footer from "@/components/Footer";

export default function OfflineNetworkingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/offline-networking-for-indian-lawyers`;

  const metadata = {
    title: "Art of Court Networking for Indian Lawyers | AMAConnect",
    description: "Learn how first-generation advocates network ethically in High Court corridors, canteens, and Bar Association rooms to secure paid briefs in India.",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "The Art of Networking at the Bar Association and High Court Corridors",
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
      question: "How can a first-generation lawyer approach senior advocates ethically?",
      answer: "First-generation lawyers can respectfully approach seniors by requesting permission to observe their courtroom arguments from the back benches, or by asking highly specific, intelligent procedural research questions in the library."
    },
    {
      question: "What role do court clerks (Ahlmads) play in corridor networking?",
      answer: "Court clerks manage physical files and listing timelines. Building highly respectful relationships with them provides crucial insights into registry delays, unlisted matters, and judge preferences."
    },
    {
      question: "Can I distribute business cards at the Bar Association?",
      answer: "Yes, distributing standard business cards containing contact details to peers is permitted, provided it is done organically in a conversational setting rather than promotional solicitation to laymen litigants."
    },
    {
      question: "Is attending bar association meetings actually useful for juniors?",
      answer: "Yes. Attending general body meetings, participating in elections, and volunteering for bar association sub-committees drastically increases your visibility among senior practitioners."
    },
    {
      question: "How can I secure local filing referrals from out-of-station lawyers?",
      answer: "By establishing a reputation for flawless, objection-free local filing procedures, you can secure lucrative retainer briefs from lawyers in other states who need Supreme Court or High Court assistance."
    },
    {
      question: "What behavior should I absolutely avoid when corridor networking?",
      answer: "Never interrupt active conversations between advocates and their clients, never solicit another lawyer's client, and absolutely never criticize other advocates' courtroom arguments publicly."
    },
    {
      question: "Do seniors actually value research assistance from juniors?",
      answer: "Yes. Offering to instantly look up a precedent on Manupatra or prepare a brief summary in the bar library during a crisis is the fastest way to demonstrate your competence to seniors."
    },
    {
      question: "How do I deal with professional jealousy in court corridors?",
      answer: "Maintain a strictly professional, polite demeanor, ignore corridor gossip, focus entirely on your case preparation, and build relationships with supportive peers rather than competitors."
    },
    {
      question: "Should I spend the money to join multiple bar associations?",
      answer: "Yes, joining both the local district court bar and the high court bar association exponentially expands your network and provides access to diverse senior pools."
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
    name: "Bar Association & High Court Networking Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Chamber building and professional networking guide for Indian litigation advocates and courtroom practitioners.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "94",
      reviewCount: "4",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Courtroom Networking", item: pageUrl }
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
            Advocate Career &amp; Connections
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            The Art of Networking at the Bar Association <br/> <span className="text-[#D4AF37]">and High Court Corridors</span>
          </h1>
          <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl text-justify sm:text-center">
            A highly strategic guide for first-generation advocates on decoding court dynamics, ethically approaching senior counsels, and building a lucrative, independent litigation network.
          </p>
        </div>
      </section>

      {/* Layout Grid */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
          
          {/* Left Column: Scroll Spy Nav with 11 sections */}
          <aside className="hidden lg:block sticky top-24">
            <ScrollSpyNav
              sections={[
                { id: "networking-intro", title: "Corridor Dynamics" },
                { id: "senior-advocates", title: "Approaching Seniors" },
                { id: "bar-library", title: "Library Strategy" },
                { id: "canteen-diplomacy", title: "Canteen Diplomacy" },
                { id: "fellow-juniors", title: "Registry & Peers" },
                { id: "out-of-station", title: "Out-of-Station Briefs" },
                { id: "networking-etiquette", title: "Court Etiquette" },
                { id: "card-distribution", title: "Card Distribution" },
                { id: "case-study", title: "Case Analysis" },
                { id: "timeline-networking", title: "Career Timeline" },
                { id: "faq", title: "FAQs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
            
            {/* Section 1: The Dynamics of Court Corridor Interactions */}
            <section id="networking-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                The Dynamics of Court Corridor Interactions
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Litigation in Indian High Courts remains intensely dependent on personal trust networks, making offline corridor interactions the absolute primary source of early-career case briefs and senior referrals. For first-generation lawyers without family connections in the judiciary, mastering the unwritten social dynamics of Bar Association rooms is make-or-break for establishing an independent practice.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To build courtroom credibility, a junior advocate must first intimately understand filing and trial procedures. Guidelines on court preparation are detailed in our <Link href="/how-to-prepare-for-first-trial-advocate-advice" className="text-[#D4AF37] font-bold hover:underline">Trial Prep Guide</Link>. Understanding fundamental legal rights under the <Link href="/know-your-rights-legal-guide" className="text-[#D4AF37] font-bold hover:underline">Know Your Rights Guide</Link> helps advocates expertly answer spontaneous queries from anxious litigants wandering the corridors.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, participating in legal aid desks is an unparalleled way for juniors to gain courtroom visibility and meet senior mentors who oversee these committees. Read about these initiatives in the <Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] font-bold hover:underline">Pro Bono Guide</Link>.
              </p>
            </section>

            {/* Section 2: Approaching Senior Counsels for Chamber Positions */}
            <section id="senior-advocates" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Approaching Senior Counsels for Mentorship
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Securing an apprenticeship or mentorship in a reputed senior chamber requires demonstrating relentless diligence. When approaching seniors in the corridor, never ask for a job generically. Instead, offer highly specific help: "Sir, I noticed your matter is listed at Item 45. I've pulled the recent SCC judgment you might need."
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Stand out aggressively by offering to prepare case notes, draft synopsis, or do research on weekends without demanding immediate pay. This proactive approach shows your dedication to chamber work, making seniors significantly more likely to invite you to assist with active, high-profile courtroom representations.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Observing courtroom arguments quietly from the back benches helps you note how specific seniors address judges. Referencing these tactical details during brief corridor encounters ("I loved how you deflected the judge's query on limitation today") shows deep interest and rapidly builds a relationship.
              </p>
            </section>

            {/* Section 3: Strategic Networking in Bar Association Libraries */}
            <section id="bar-library" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Strategic Networking in Bar Libraries
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The Bar Association library is not just a quiet study space; it is the central nervous system for professional legal conversations. Spending time in the library instead of your car allows you to observe senior case research and casually meet fellow juniors.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Participating in informal discussions over physical reporter volumes helps you share legal insights organically. It demonstrates your domain expertise and helps build relationships with advocates who practice in complementary specialties (e.g., a civil lawyer networking with a criminal lawyer for cross-referrals).
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The library is also the best resource to learn about unwritten local filing guidelines. Collaborating with other advocates on difficult research files builds deep peer trust, which invariably leads to paid referral briefs for complex trials later on.
              </p>
            </section>

            {/* Section 4: Canteen Diplomacy (New Section) */}
            <section id="canteen-diplomacy" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Canteen Diplomacy: The Informal Network
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                While the library is for intellectual networking, the court canteen is where actual business and politics happen. Sharing a table over tea is where junior advocates learn the unspoken rules of the court—which judge is strict on adjournments, which registry clerk is helpful, and who is looking to hire.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Do not isolate yourself during lunch breaks. Sit at communal tables. Listen more than you speak. If senior advocates are discussing a fascinating point of law, ask a polite, intelligent question. 
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The canteen is also where you build relationships with court staff (Munshis and Clerks). Treating them to tea and speaking respectfully builds goodwill that will save you hours of harassment at the filing counter later.
              </p>
            </section>

            {/* Section 5: Collaborating with Fellow Juniors and Registry Teams */}
            <section id="fellow-juniors" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Collaborating with Registry Teams
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Registry offices can be overwhelmingly complex for new advocates. Building strong, respectful relationships with registry clerks (Ahlmads) is non-negotiable for procedural efficiency.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Help colleagues clear delay objections or locate lost physical case files. This collaborative approach builds massive peer goodwill and ensures your own filings are processed smoothly by registry staff who see you as a team player.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Regular coordination prevents disastrous delay objections on your files. Having a reputation for neat, perfectly compliant filings makes registry clerks exponentially more willing to assist when listing timelines are exceptionally tight.
              </p>
            </section>

            {/* Section 6: Securing Referral Briefs from Out-of-Station Lawyers */}
            <section id="out-of-station" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Securing High-Value Out-of-Station Referrals
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Lawyers practicing in other districts or states frequently need local representation to urgently file cases or attend preliminary hearings. Establishing a reputation for flawless, reliable local filing procedures is an incredibly lucrative way to secure these referrals.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Let out-of-station colleagues know you can coordinate complex Supreme Court or High Court filings seamlessly. Handling these matters reliably builds a network of professional referrers who will send you steady work without requiring you to market to direct clients.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                These referral channels routinely serve as the financial foundation for an independent practice, providing steady cash flow while you build your direct client base.
              </p>
            </section>

            {/* Section 7: Registry Staff Coordination and Professional Etiquette */}
            <section id="networking-etiquette" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Registry Etiquette & Corridor Conduct
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Professional etiquette is critical. Maintain a fiercely polite and respectful demeanor at all times, even during chaotic registry hours or infuriating listing delays. Word travels fast in court corridors regarding arrogant juniors.
              </p>
              
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-6 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-6">The Unwritten Rules of the Corridor</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { title: "No Poaching", desc: "Never approach a litigant who is already speaking to another advocate. Client stealing is heavily penalized socially." },
                    { title: "Gown Protocol", desc: "Never smoke, eat casually, or engage in loud arguments while wearing your advocate's band and gown outside the canteen." },
                    { title: "Registry Respect", desc: "Never yell at registry clerks. If a file is stuck, ask 'How can I fix this objection?' rather than demanding compliance." },
                    { title: "Senior Deference", desc: "Always yield the way to senior advocates in crowded corridors and elevators. It is noticed and appreciated." }
                  ].map((rule, idx) => (
                    <div key={idx} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                        <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-1">{rule.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{rule.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 8: Ethical Card Distribution and Corridor Conversations */}
            <section id="card-distribution" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Ethical Card Distribution
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Corridor conversations should focus strictly on legal concepts and collegiality. When discussing complex case laws with other advocates, you can absolutely share business cards containing contact details.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                However, never distribute cards randomly to distressed litigants in waiting rooms, as this blatantly violates Bar Council rules against soliciting and touting. Keep card sharing conversational, ensuring it occurs organically during peer-to-peer discussions.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Ensure your cards are simple, minimalist, and highly professional. List only your name, enrollment number, primary courts, and chamber location. Factual presentation remains within Bar Council guidelines, protecting you from misconduct complaints.
              </p>
            </section>

            {/* Section 9: Case Analysis: Building a Practice through Local Filings */}
            <section id="case-study" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Case Analysis: Building a Network via Filings
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Understanding how procedural assistance leads directly to professional, high-paying networks helps juniors plan their corridor interactions effectively.
              </p>

              {/* Case Study Box */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-6 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-4">Case History: The Supreme Court Proxy</h3>
                <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6 bg-white p-4 rounded-xl border border-gray-100">
                  A first-generation junior advocate in Delhi focused heavily on learning complex Supreme Court registry rules and defect-curing processes. They systematically volunteered to assist out-of-station colleagues from High Courts with local SC filing requirements and physical defects.
                </p>
                
                <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Practice Outcomes:</h4>
                <div className="space-y-3">
                  {[
                    "The junior built a massive network with senior advocates in Uttar Pradesh and Maharashtra who needed reliable filing assistance in Delhi.",
                    "These out-of-state colleagues began referring highly complex paid matters (such as SLPs and writ petitions) entirely to the junior.",
                    "The junior established an independent, highly profitable practice within two years, based strictly on registry competence and corridor referrals."
                  ].map((action, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">
                        {idx + 1}
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed mt-0.5">{action}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 10: Career Stage Networking Timeline for Litigation Advocates */}
            <section id="timeline-networking" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 10
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Networking Timeline for Advocates
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-8">
                Building a reliable professional network in court chambers requires sustained, strategic effort over several stages of your litigation career.
              </p>

              {/* Timeline Section */}
              <div className="relative border-l-2 border-[#D4AF37]/30 ml-4 pl-8 space-y-10">
                {[
                  { time: "Month 1 to 6", title: "Observe Court Procedures", desc: "Spend maximum time in various courtrooms, observe senior arguments, and aggressively learn the filing processes of the court registry. Stay quiet and watch." },
                  { time: "Month 6 to 12", title: "Engage with Peers and Clerks", desc: "Build relationships with other junior advocates and court clerks in the canteen. Offer assistance with complex filings and research in the library." },
                  { time: "Year 1 to 2", title: "Participate in Bar Events", desc: "Attend bar association meetings, volunteer for election panels, and participate in local legal aid camps to drastically increase senior visibility." },
                  { time: "Year 2+", title: "Handle Independent Referrals", desc: "Manage independent cases and filings referred by out-of-station colleagues, building your reputation for flawless, reliable advocacy." }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[41px] top-1.5 bg-[#D4AF37] w-5 h-5 rounded-full border-4 border-white shadow-sm" />
                    <span className="inline-block px-3 py-1 bg-gray-100 rounded-md text-[10px] font-extrabold text-gray-600 uppercase tracking-widest mb-2 border border-gray-200">{item.time}</span>
                    <h4 className="text-base font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed bg-white p-4 rounded-xl border border-gray-100 shadow-sm">{item.desc}</p>
                  </div>
                ))}
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
                  <span className="text-5xl font-black text-[#2D2219] tracking-tighter">4.9</span>
                  <div className="flex flex-col pb-1">
                    <div className="flex text-[#D4AF37] text-lg mb-1">
                      ★★★★★
                    </div>
                    <span className="text-sm font-medium text-gray-500">Based on 4 verified professional reviews</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { author: "Advocate Rohit Deshmukh", role: "Litigation Partner", body: "An excellent guide that completely demystifies court corridor networking. The local filings strategy is highly effective for first-generation juniors." },
                    { author: "Sunidhi Roy", role: "Junior Advocate", body: "Highly practical tips on approaching seniors and building registry contacts. Essential reading for anyone starting out without a god-father in the profession." },
                    { author: "Vikram Sethi", role: "Supreme Court AOR", body: "The canteen diplomacy section is incredibly accurate. I hire almost exclusively based on interactions I observe over tea in the SC cafeteria." },
                    { author: "Priya Menon", role: "Civil Lawyer", body: "The Unwritten Rules section should be handed to every intern. Registry respect is the fastest way to get your files cleared." }
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
