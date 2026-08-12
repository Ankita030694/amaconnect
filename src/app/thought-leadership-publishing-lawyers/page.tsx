"use client";

import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import Footer from "@/components/Footer";

export default function ThoughtLeadershipPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/thought-leadership-publishing-lawyers`;

  const metadata = {
    title: "Thought Leadership & Publishing for Lawyers in India | Strategy",
    description: "Learn how Indian lawyers build thought leadership ethically under BCI Rule 36 rules. Discover academic publishing and public speaking tips.",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Public Speaking, Publishing, and Thought Leadership: Building Advocate Authority Ethically",
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
      question: "Are advocates permitted to write academic legal papers in India?",
      answer: "Yes. Publishing research articles in recognized national or international law journals is highly encouraged and does not violate BCI Rule 36 restrictions on advocate advertising."
    },
    {
      question: "How do I choose legal topics for public news writing?",
      answer: "Choose current regulatory updates, recent high court judgments, or new statutory bills. Analyze the practical impact for citizens or businesses, keeping the tone educational."
    },
    {
      question: "Can lawyers host compliance webinars for corporate clients?",
      answer: "Yes, hosting educational webinars on new compliance laws (like the DPDP Act or RERA updates) is permitted, provided you do not solicit client representations during the sessions."
    },
    {
      question: "Does listing academic publications on an advocate's website violate BCI rules?",
      answer: "No, advocates can list their published research articles and books on their factual directory websites under BCI guidelines, as this is viewed as educational criteria."
    },
    {
      question: "How do I start a legal newsletter for corporate managers ethically?",
      answer: "Offer a voluntary opt-in newsletter where readers must actively subscribe to receive legal updates. Ensure the newsletter does not contain self-promotional text or fee comparisons."
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
    name: "Thought Leadership & Publishing Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Academic publishing and professional brand-building manual for Indian lawyers, outlining BCI compliant authority building.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "74",
      reviewCount: "2",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Thought Leadership", item: pageUrl }
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
            Advocate Branding &amp; Thought Leadership
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
            Thought Leadership &amp; Publishing: <br/>
            <span className="text-[#D4AF37]">Building Advocate Authority Ethically</span>
          </h1>
          <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
            A strategic positioning checklist for independent advocates on academic writing, compliance webinars, public speaking, and BCI compliance.
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
                { id: "leadership-intro", title: "Authority Value" },
                { id: "academic-publishing", title: "Academic Publishing" },
                { id: "public-speaking", title: "Public Speaking" },
                { id: "compliance-webinars", title: "Compliance Webinars" },
                { id: "bci-regulations", title: "BCI Rule 36 limits" },
                { id: "social-media-ethics", title: "Social Media Ethics" },
                { id: "niche-positioning", title: "Niche Authority" },
                { id: "leadership-checklist", title: "Publishing Checklist" },
                { id: "media-comparison", title: "Media Matrix" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
                {/* Section 1: The Role of Thought Leadership in Modern Chambers */}
            <section id="leadership-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                The Role of Thought Leadership in Modern Chambers
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Chamber branding in India requires building authority within a specialized field. Writing scholarly articles, participating in regulatory webinars, and speaking at compliance conferences allows advocates to build professional credibility ethically.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Establishing professional authority requires aligning your publishing plans with BCI restrictions. To ensure your social media profiles comply with advertising bans, review the guidelines in our <Link href="/ethical-social-media-marketing-for-lawyers" className="text-[#D4AF37] font-bold hover:underline">Social Media Guide</Link>. Advocates should also check the specialized domain choices detailed in the <Link href="/boutique-law-firm-branding-specialization" className="text-[#D4AF37] font-bold hover:underline">Boutique Specialization Guide</Link> before selecting article topics.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Many advocates run into regulatory challenges because they publish self-promotional content or highlight success metrics. Focus on explaining complex legal developments objectively, keeping your content educational to remain compliant.
              </p>
            </section>

            {/* Section 2: Navigating Academic Publishing in Legal Journals */}
            <section id="academic-publishing" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Navigating Academic Publishing in Legal Journals
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Publishing in peer-reviewed legal journals is a respected way to share research. Write articles on complex statutory issues, proposed legislative amendments, or recent supreme court judgments.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Maintain high academic standards. Focus on analyzing court opinions and structuring legal recommendations, keeping the tone objective and neutral.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Listing these published papers on your website directory is BCI compliant. This database of scholarship demonstrates your legal expertise, building trust with corporate clients.
              </p>
            </section>

            {/* Section 3: Public Speaking at Seminars and Bar Panels */}
            <section id="public-speaking" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Public Speaking at Seminars and Bar Panels
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Public speaking events provide opportunities to address corporate managers and legal professionals. Participate in bar association events or industry specific panels.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Discuss practical legal updates, such as the compliance requirements of new data protection bills or changes in real estate rules. Provide actionable recommendations to help businesses manage filings.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Ensure your presentation remains educational. Refrain from soliciting representations during these panels, keeping your interactions compliant with professional guidelines.
              </p>
            </section>

            {/* Section 4: Hosting Educational Compliance Webinars */}
            <section id="compliance-webinars" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Hosting Educational Compliance Webinars
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Compliance webinars are effective ways to share legal updates online. Host virtual training sessions on changing regulations (like corporate governance audits or POSH Act rules).
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Provide slide structures and index templates to help companies evaluate their compliance setups. This support demonstrates your domain expertise, building a trustworthy reputation.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Keep the sessions optional, requiring registration via clear disclaimers. This process ensures attendees actively request the presentation material, aligning with BCI guidelines.
              </p>
            </section>

            {/* Section 5: BCI Rule 36 Restrictions on Advertising and Solicitation */}
            <section id="bci-regulations" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                BCI Rule 36 Restrictions on Advertising and Solicitation
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The Bar Council of India Rule 36 prohibits advocates from advertising their practices. This restriction preserves the legal profession's dignity, preventing commercialization.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Avoid publishing client testimonials, success ratios, or competitive fee schedules. Websites must remain simple, listing only factual contact info and practice areas.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Adhering to these rules prevents disciplinary warnings from local bar committees. Focusing on scholarly, educational content ensures you build authority safely.
              </p>
            </section>

            {/* Section 6: Social Media Ethics and Professional Profiles */}
            <section id="social-media-ethics" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Social Media Ethics and Professional Profiles
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Advocates use social platforms to share legal updates. Your professional profiles must reflect standard etiquette.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Refrain from posting self-promotional updates, pictures from private courtroom consultations, or reviews of judges. Keep the updates focused on neutral case summaries and compliance news.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This disciplined presence prevents ethical complaints. It shows respect for BCI regulations and positions you as a trustworthy advisor.
              </p>
            </section>

            {/* Section 7: Niche Authority and Practice Specialization */}
            <section id="niche-positioning" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Niche Authority and Practice Specialization
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Focusing your writing and public speaking on a narrow niche (like cyber compliance or trademark litigation) makes thought leadership highly effective.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Building expertise in one field helps you draft comprehensive template files, streamlining your case research and reducing administrative workloads.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This niche authority attracts corporate clients seeking specialized help, allowing you to charge premium retainer rates.
              </p>
            </section>

            {/* Section 8: Step-by-Step Thought Leadership Protocol */}
            <section id="leadership-checklist" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Step-by-Step Thought Leadership Protocol
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To build your professional brand systematically, follow a structured process. Access our sitemap at <Link href="/sitemap" className="text-[#D4AF37] font-bold hover:underline">Sitemap Index</Link> to locate related practice guides.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Review this protocol quarterly to ensure all publishing and public speaking activities remain compliant.
              </p>

              {/* Step Checklist Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#2D2219] mb-4">Leadership Protocol</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Select a Specialized Niche Topic", desc: "Choose current regulatory updates or proposed bills matching your core practice." },
                    { step: "2", title: "Submit to Academic Journals", desc: "Draft and submit research papers to peer-reviewed law reviews or national publications." },
                    { step: "3", title: "Host Educational Compliance Sessions", desc: "Coordinate compliance webinars for corporate managers, focusing on objective statutory timelines." },
                    { step: "4", title: "Audit Digital Profiles Regularly", desc: "Check your website directories and profiles to ensure they comply with BCI Rule 36 restrictions." }
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

            {/* Section 9: Thought Leadership Mediums Matrix */}
            <section id="media-comparison" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Thought Leadership Mediums Matrix
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Evaluating different media based on BCI compliance, setup effort, and audience reach helps advocates choose the right positioning channel.
              </p>

              {/* Comparison Table Section */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Publishing Medium</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">BCI Compliance Risk</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Setup Effort</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Audience Reach</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Academic Law Reviews</td>
                      <td className="p-4 text-xs text-green-600 font-medium">Extremely Low (purely educational research)</td>
                      <td className="p-4 text-xs text-gray-600">High (requires rigorous referencing)</td>
                      <td className="p-4 text-xs text-gray-600">Specialists, Judges, and Academic Peers</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">National News Columns</td>
                      <td className="p-4 text-xs text-green-600 font-medium">Low (objective regulatory analysis)</td>
                      <td className="p-4 text-xs text-gray-600 font-medium">Moderate (requires editorial approvals)</td>
                      <td className="p-4 text-xs text-green-600 font-medium">High (reaches general business owners)</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Corporate Compliance Webinars</td>
                      <td className="p-4 text-xs text-gray-600 font-medium">Moderate (requires strict opt-in disclaimers)</td>
                      <td className="p-4 text-xs text-gray-600">Low (requires simple online scheduling)</td>
                      <td className="p-4 text-xs text-green-600 font-medium">Moderate (reaches targeted legal managers)</td>
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
