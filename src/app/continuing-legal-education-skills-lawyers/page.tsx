"use client";

import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import Footer from "@/components/Footer";

export default function ContinuingEducationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/continuing-legal-education-skills-lawyers`;

  const metadata = {
    title: "Continuing Legal Education & Skill Development in India | Options",
    description: "Explore continuing legal education and skill development certifications for Indian lawyers. Learn about cyber, IP, and arbitration training.",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Continuing Legal Education and Skill Development: How Indian Lawyers Stay Ahead",
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
      question: "Is continuing legal education mandatory for advocates in India?",
      answer: "While the Bar Council of India has proposed mandatory continuing training modules, it is currently optional. However, upskilling is essential to remain competitive in specialized corporate law fields."
    },
    {
      question: "Which certifications are most valuable for corporate litigation?",
      answer: "Certifications in corporate insolvency under the IBC, trademark registration, commercial arbitration frameworks, and data privacy regulations are highly valued by boutique law firms."
    },
    {
      question: "Can junior advocates enroll in mediation training programs?",
      answer: "Yes, certified commercial mediation programs are open to advocates. Completing this training allows you to register as a court-annexed mediator, diversifying your legal practice."
    },
    {
      question: "What is the cost of professional legal diploma courses in India?",
      answer: "Online diploma courses from national law universities range from 20,000 to 50,000 INR, while international certifications can range from 1 Lakh to 2.5 Lakh INR depending on the institution."
    },
    {
      question: "How do I balance continuing education with active chamber practice?",
      answer: "Choose online self-paced modules or weekend certification courses. Dedicating 3 to 5 hours per week to upskilling prevents workflow conflicts, allowing you to manage court listings easily."
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
    name: "Continuing Legal Education & Skills Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Upskilling and continuing professional training guide for Indian litigation associates and corporate lawyers.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "88",
      reviewCount: "2",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Continuing Education", item: pageUrl }
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
            Professional Development &amp; Skills
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
            Continuing Legal Education: <br/>
            <span className="text-[#D4AF37]">How Indian Lawyers Stay Ahead</span>
          </h1>
          <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
            A strategic upskilling manual for advocates on professional certifications, commercial mediation training, executive diplomas, and career development.
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
                { id: "cle-intro", title: "Career Growth" },
                { id: "certifications", title: "Certifications" },
                { id: "mediation-arbitration", title: "Mediation Training" },
                { id: "university-diplomas", title: "Executive Diplomas" },
                { id: "balancing-study", title: "Practice Balance" },
                { id: "specialization", title: "Specialization Strategy" },
                { id: "bci-reforms", title: "BCI Training Rules" },
                { id: "study-checklist", title: "Study Checklist" },
                { id: "course-comparison", title: "Course Matrix" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
                {/* Section 1: The Transition to Specialized Advocacy */}
            <section id="cle-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                The Transition to Specialized Advocacy
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Chamber operations require continuous upskilling to manage complex corporate caseloads. Advocates must expand their domain expertise to draft sophisticated commercial agreements and navigate evolving regulatory compliance updates.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To build professional visibility in emerging fields, advocates should focus on thought leadership. Reviewing publishing guidelines in our <Link href="/thought-leadership-publishing-lawyers" className="text-[#D4AF37] font-bold hover:underline">Publishing Guide</Link> helps you build authority. Advocates should also read the database setup steps detailed in the <Link href="/case-record-management-indian-advocates" className="text-[#D4AF37] font-bold hover:underline">Case Records Guide</Link> to organize research materials.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Many advocates struggle to secure high-value advisory contracts because they do not hold specialist certifications. Investing in professional courses allows you to target niche areas like insolvency or data privacy compliance, helping grow your practice revenue.
              </p>
            </section>

            {/* Section 2: Selecting Specialized Legal Certifications */}
            <section id="certifications" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Selecting Specialized Legal Certifications
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Certifications provide verified proof of expertise. Select courses in fields matching your practice goals, such as intellectual property rights, environmental regulations, or corporate governance compliance under the Companies Act.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Advanced certifications in cybersecurity and data protection law are in high demand as companies build digital compliance infrastructures. These courses prepare you to advise corporate boards on risk mitigation.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Ensure courses are offered by recognized national law universities or accredited certification bodies. This validation ensures your credentials are recognized by corporate legal departments, improving your intake options.
              </p>
            </section>

            {/* Section 3: Commercial Mediation and ADR Training Programs */}
            <section id="mediation-arbitration" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Commercial Mediation and ADR Training Programs
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Alternative Dispute Resolution (ADR) has become a primary resolution channel for commercial contracts. Completing certified mediation training prepares you to manage arbitration proceedings.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Mediation programs teach negotiation skills, conflict mapping, and settlement drafting. Certified advocates can register as neutral mediators in court panels, diversifying their professional service options.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This ADR specialization is highly respected. As courts encourage pre-litigation mediation to clear case backlogs, mediators are increasingly hired by corporate entities to resolve transaction disputes out of court.
              </p>
            </section>

            {/* Section 4: Executive Diplomas and Advanced University Courses */}
            <section id="university-diplomas" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Executive Diplomas and Advanced University Courses
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Executive diplomas offer structured university training for practicing lawyers. These post-graduate courses focus on practical legal applications, such as corporate restructuring, bankruptcy, or contract drafting.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Programs include virtual lectures, case analysis modules, and group drafting assignments. This interaction allows you to collaborate with senior associates and in-house counsels, building valuable referral networks.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Completing a university diploma shows a commitment to professional growth. It updates your credentials, helping you secure lateral placements in leading corporate law firms or advisory boards.
              </p>
            </section>

            {/* Section 5: Balancing Study Schedules with Active Court Listings */}
            <section id="balancing-study" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Balancing Study Schedules with Active Court Listings
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Active litigation practice makes scheduling study hours difficult. Advocates must allocate study time systematically to prevent workflow conflicts.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Choose online, self-paced courses that offer flexible study schedules. Dedicate early morning hours or weekends to reading commentaries and submitting case studies, leaving court hours free for listings.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, coordinate tasks with chamber colleagues to share workloads. Delegating routine filings or proxy listings during exam preparation weeks ensures your clients' files are processed without delay.
              </p>
            </section>

            {/* Section 6: Specialization Strategy for Independent Advocates */}
            <section id="specialization" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Specialization Strategy for Independent Advocates
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Establishing a specialization niche is critical to growing a boutique practice. Advocates should align their upskilling plans with court registry trends.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Build authority in a niche area by publishing educational articles. Explaining complex legal updates in simple compliance guides attracts clients seeking specialized help.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This focused authority sets you apart from general litigation firms. It allows you to charge premium retainer rates, ensuring consistent practice growth.
              </p>
            </section>

            {/* Section 7: BCI Reforms and Mandatory Training Regulations */}
            <section id="bci-reforms" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                BCI Reforms and Mandatory Training Regulations
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The Bar Council of India has proposed reforms to introduce mandatory continuing legal training for advocates.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                These reforms aim to update professional standards, requiring advocates to verify training credits periodically to maintain active practice licenses.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Staying informed of these regulations ensures your upskilling activities comply with bar rules, protecting your practice from licensing objections.
              </p>
            </section>

            {/* Section 8: Step-by-Step Skill Development Protocol */}
            <section id="study-checklist" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Step-by-Step Skill Development Protocol
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To plan your continuing education systematically, follow a structured process. Access the complete website categories through the <Link href="/sitemap" className="text-[#D4AF37] font-bold hover:underline">Sitemap Directory</Link> to find related operational resources.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Filing your certificates in your firm database ensures you maintain verified records for client reviews.
              </p>

              {/* Step Checklist Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#2D2219] mb-4">Study Protocol</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Identify Target Practice Niche", desc: "Select a specialized field based on your trial experience and local market needs." },
                    { step: "2", title: "Select Accredited Courses", desc: "Choose university diplomas or certification programs offered by recognized law schools." },
                    { step: "3", title: "Allocate Study Hours", desc: "Schedule 3 to 5 study hours per week, choosing flexible online modules to prevent listing conflicts." },
                    { step: "4", title: "Fulfill Certification Requirements", desc: "Complete coursework, pass examinations, and file certificates in your database logs." }
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

            {/* Section 9: Legal Education Formats Matrix */}
            <section id="course-comparison" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Legal Education Formats Matrix
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Evaluating different legal training options based on costs, timelines, and study flexibilities helps advocates choose the right upskilling pathway.
              </p>

              {/* Comparison Table Section */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Training Format</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Cost Range</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Timeline</th>
                      <th className="p-4 text-xs font-bold text-gray-900 uppercase">Chamber Compatibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">Online Certifications</td>
                      <td className="p-4 text-xs text-gray-600">10,000 to 25,000 INR</td>
                      <td className="p-4 text-xs text-gray-600">1 to 3 months</td>
                      <td className="p-4 text-xs text-green-600 font-medium">High (flexible online modules)</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">University Diplomas</td>
                      <td className="p-4 text-xs text-gray-600">30,000 to 60,000 INR</td>
                      <td className="p-4 text-xs text-gray-600">6 to 12 months</td>
                      <td className="p-4 text-xs text-gray-600 font-medium">Moderate (requires scheduled exams)</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 text-xs font-bold text-gray-900">ADR Mediation Programs</td>
                      <td className="p-4 text-xs text-gray-600">40,000 to 80,000 INR</td>
                      <td className="p-4 text-xs text-gray-600">40 hours (intensive)</td>
                      <td className="p-4 text-xs text-red-600 font-medium">Low (requires offline attendance)</td>
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
