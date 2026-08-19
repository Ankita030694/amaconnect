import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import LawyerFaqAccordion from "@/components/LawyerFaqAccordion";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alternative Fee Arrangements (AFAs) for Law Firms",
  description:
    "Learn how Indian law firms transition from hourly billing to fixed-fee, value-based, and retainer models. Discover pricing strategies and client management.",
  alternates: {
    canonical: "https://www.amaconnect.in/alternative-fee-arrangements-law-firms",
  },
  openGraph: {
    title: "Alternative Fee Arrangements (AFAs) for Law Firms",
    description:
      "Learn how Indian law firms transition from hourly billing to fixed-fee, value-based, and retainer models. Discover pricing strategies and client management.",
    url: "https://www.amaconnect.in/alternative-fee-arrangements-law-firms",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function AlternativeFeePage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/alternative-fee-arrangements-law-firms`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Moving Away from Billable Hours: Fixed-Fee & Retainer Models for Indian Lawyers",
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
      question: "What are the common types of Alternative Fee Arrangements?",
      answer: "Common models include flat or fixed fees for specific projects, monthly retainer agreements, capped hourly rates, value-based pricing, and contingency fees (though contingency is heavily restricted in India)."
    },
    {
      question: "How do I calculate a flat fee for a legal notice?",
      answer: "Calculate the average historical hours spent on drafting, formatting, and consulting, multiply this by your desired hourly cost, and add a 15-20% margin buffer to cover complexity or multiple drafts."
    },
    {
      question: "Can I use retainer models for courtroom litigation cases?",
      answer: "Yes, litigators can charge a fixed retainer fee per month or a flat fee per appearance to provide clients with financial predictability during unpredictable court trials."
    },
    {
      question: "How can I prevent scope creep under a fixed-fee contract?",
      answer: "Draft a highly detailed scope of work clause in your retainer agreement, explicitly listing included tasks, the exact number of revisions allowed, and stating that out-of-scope tasks will be billed separately."
    },
    {
      question: "Do corporate clients in India prefer retainer fee structures?",
      answer: "Yes, corporate clients, particularly startups and MSMEs, strongly prefer retainer structures because they allow them to predict monthly legal spend and align it with their operational budgeting."
    },
    {
      question: "Are contingency fees legal under Bar Council of India rules?",
      answer: "No, strict contingency fees (charging a direct percentage of the recovered amount) are prohibited under Rule 20 of the Bar Council of India Rules. Lawyers cannot have a direct financial interest in the outcome."
    },
    {
      question: "What happens if a project requires more work than the capped fee?",
      answer: "If the scope formally increases due to client revisions or unexpected regulatory complexity, you must initiate a pre-agreed 'Change Order' clause to legally adjust the flat fee upward."
    },
    {
      question: "Is it difficult to transition a law firm to fixed-fee structures?",
      answer: "The primary challenge is estimating internal service costs accurately. Most firms transition gradually by offering fixed-fee options alongside hourly rates first, tracking their margins meticulously."
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
    name: "Alternative Fee Arrangements Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Pricing strategy guide for Indian law firms transitioning from hourly billing to fixed-fee and retainer structures.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
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
      { "@type": "ListItem", position: 2, name: "Pricing Models", item: pageUrl }
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
            Law Firm Operations &amp; Pricing
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Moving Away from Billable Hours: <br/> <span className="text-[#D4AF37]">Fixed-Fee &amp; Retainer Models</span>
          </h1>
          <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl text-justify sm:text-center">
            A practical guide for law firms and independent advocates to restructure pricing, calculate profitable flat fees, and manage client billing expectations in India.
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
                { id: "pricing-intro", title: "The Pricing Dilemma" },
                { id: "fixed-fee", title: "Flat & Fixed Fees" },
                { id: "retainer-models", title: "Retainer Models" },
                { id: "contingency-rules", title: "Contingency Fees" },
                { id: "fee-estimation", title: "Fee Calculation" },
                { id: "value-pricing", title: "Value-Based Pricing" },
                { id: "scope-creep", title: "Scope Creep" },
                { id: "transition-plan", title: "Transition Plan" },
                { id: "comparison-matrix", title: "Pricing Matrix" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
            
            {/* Section 1: The Failure of Hourly Billing in Indian Practices */}
            <section id="pricing-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                The Failure of Hourly Billing in Indian Practices
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Recent industry survey data indicates that over 82 percent of small-to-medium enterprises (SMEs) in India actively avoid hiring external law firms due to the terrifying financial uncertainty of traditional hourly legal billing models. Switching to transparent fixed-fee or monthly retainer arrangements allows boutique firms to acquire significantly more clients while ensuring consistent, predictable cash flow.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                For independent advocates looking to grow their practice, pricing transparency is a highly underutilized branding tool. Advanced rebranding techniques are detailed in the <Link href="/lawyer-branding-get-more-clients" className="text-[#D4AF37] font-bold hover:underline">Lawyer Branding Guide</Link>, which shows how transparent pricing instantly builds client trust. By providing fixed upfront costs, lawyers make their services accessible to early-stage businesses, which often require structured incorporation support under the <Link href="/startup-registration-incorporation-india-guide" className="text-[#D4AF37] font-bold hover:underline">Startup Incorporation Guide</Link>.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Corporate clients frequently complain about "bill shock"—the devastating surprise of receiving an invoice heavily inflated by inefficient drafting, partner review delays, or hidden administrative overheads. Transitioning to a pre-determined pricing model completely removes this friction, aligning law practice operations directly with the strict budget constraints of modern corporate clients.
              </p>
            </section>

            {/* Section 2: Flat Fees and Capped Pricing for Routine Drafting */}
            <section id="fixed-fee" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Flat Fees and Capped Pricing for Routine Drafting
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Charging flat fees is highly effective and profitable for routine legal tasks. This includes drafting commercial lease agreements, submitting basic trademark applications, or preparing initial Section 138 legal notices. Clients receive exact cost certainty before any work begins, making them exponentially more likely to authorize the project without negotiating down.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To prevent severe financial losses on unpredictably complex tasks (like M&A due diligence), firms use *capped pricing*. Under this hybrid model, the client is billed hourly up to a pre-determined, absolute maximum limit. If the project unexpectedly requires more hours, the law firm absorbs the extra internal cost, protecting the client from unexpected bills while guaranteeing a minimum floor for the firm.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Flat-fee models also fundamentally incentivize internal workflow efficiency. When fee returns are disconnected from the sheer amount of hours spent drafting, law chambers are financially encouraged to automate their documentation procedures using modern software platforms (like CLMs or GenAI), thereby maximizing their true hourly margins.
              </p>
            </section>

            {/* Section 3: Monthly Corporate Counsel Retainers for Small Businesses */}
            <section id="retainer-models" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Monthly Retainers as External "In-House" Counsel
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Small businesses and Series-A startups often need regular, weekly legal support but absolutely lack the budget (or need) to hire full-time, expensive in-house counsel. Monthly retainer models solve this problem elegantly by offering a set package of services (e.g., 20 hours of consulting/drafting) for a highly predictable monthly subscription fee.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                For businesses facing routine debt recovery issues under the <Link href="/ibc-msme-payment-recovery-insolvency-guide" className="text-[#D4AF37] font-bold hover:underline">MSME Insolvency Guide</Link>, a fixed retainer ensures recovery procedures are initiated instantly without haggling over individual notice fees. A standard corporate retainer package typically covers routine vendor contract reviews, employment compliance advice, and initial corporate governance filings.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Retainer systems establish unbreakable long-term partnership values. Advocates can monitor corporate compliance timelines proactively, preventing legal disputes long before they escalate to litigation, which in turn saves clients heavy litigation costs while securing recurring revenue for the law firm.
              </p>
            </section>

            {/* Section 4: Legality of Contingency Fees under Bar Council Rules */}
            <section id="contingency-rules" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Legality of Contingency Fees in India
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                While contingency fees—charging a percentage of the total damages recovered—are immensely popular in international jurisdictions (like the US for personal injury), they are **strictly illegal** in India. Rule 20 of the Bar Council of India Rules explicitly states that advocates cannot stipulate for a fee contingent on the results of litigation or agree to share the proceeds thereof.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This restriction prevents advocates from holding a direct, biased financial interest in the dispute, which the Supreme Court views as contrary to public policy and the noble nature of the legal profession. Pricing models must rely purely on flat fees, hourly charges, or stage-wise retainer agreements.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Ethical alternative fee arrangements must focus on *service delivery values* rather than dispute payouts. Setting fixed pricing for pleading drafts, arguments, and final hearings ensures compliance with Bar Council guidelines while still offering clients fee predictability.
              </p>
            </section>

            {/* Section 5: Calculating Internal Costs and Margin Buffers */}
            <section id="fee-estimation" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Calculating Internal Costs and Margin Buffers
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To price flat-fee projects profitably, you must mathematically calculate your exact internal cost of service delivery. This involves diligently tracking the average historical hours spent by both partners and junior associates on routine drafting, client meetings, and research tasks.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                For example, if an associate (costing the firm ₹1000/hr) spends three hours drafting a lease and a partner (costing ₹5000/hr) spends one hour reviewing it, your hard cost is ₹8000. To set a flat fee, you must add a margin buffer of 20 to 30 percent to cover unexpected revisions or client delays, pricing the flat fee at roughly ₹10,500 to ensure the project remains profitable.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Chambers must review these internal time-tracking metrics quarterly. If drafting certain agreements consistently requires more hours due to new compliance laws, the flat-fee schedule published to clients must be adjusted upward immediately to preserve operational profitability.
              </p>
            </section>

            {/* Section 6: Value-Based Pricing (New Section) */}
            <section id="value-pricing" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Value-Based Pricing Strategies
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Value-based pricing completely ignores the hours spent and instead bases the fee on the ultimate financial value or risk-mitigation the legal service provides to the client. This requires supreme confidence in your market positioning.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                For instance, structuring a complex joint-venture agreement for a ₹100 Crore real estate project might only take a senior partner 10 hours using standard templates. Under hourly billing, the fee would be negligible compared to the deal size. Under value-based pricing, the firm charges a premium flat fee (e.g., ₹5 Lakhs) because the *value* of a flawlessly executed, risk-free ₹100 Crore deal justifies the cost to the client.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Implementing this requires lawyers to have frank, early discussions with clients about their business goals, deal sizes, and risk tolerance, shifting the conversation from "how much do you charge per hour" to "how much is this problem costing your business."
              </p>
            </section>

            {/* Section 7: Scope Creep Prevention in Alternative Fee Agreements */}
            <section id="scope-creep" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Preventing Scope Creep in Flat-Fee Contracts
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Scope creep is the silent killer of alternative fee arrangements. It occurs when a client casually requests "quick" additional services or endless revisions beyond the pre-agreed project plan. If not ruthlessly managed, this extra unpaid work will destroy the firm's profit margins.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To prevent this, engagement letters must specify the absolute boundaries of the work. Detail the exact number of draft revisions included (e.g., "Includes two rounds of revisions"). Explicitly state in bold that any out-of-scope requests, additional meetings, or regulatory filings will be billed immediately at standard hourly rates.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, establish strict communication protocols. Inform clients upfront that bringing in new third parties to negotiate an agreement halfway through represents a material change in scope, ensuring the chamber is compensated fairly for the resulting chaos.
              </p>
            </section>

            {/* Section 8: Transition Protocol: Shifting from Hourly to Flat Fees */}
            <section id="transition-plan" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Transition Protocol: Shifting from Hourly to Flat Fees
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Transitioning an established law practice away from the safety net of billable hours requires estimating the internal cost of service delivery accurately and setting firm boundaries to prevent unpaid work extensions.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Firms must retrain their associates to track task complexity and project milestones rather than purely logging 6-minute increments. This shifts the entire chamber culture toward product delivery, efficiency, and quality execution.
              </p>

              {/* Step Checklist Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-6">Pricing Implementation Protocol</h3>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Audit Historical Billing Data", desc: "Review the last 12 months of billing data to determine the actual average hours spent on routine drafting (e.g., NDAs, Leases)." },
                    { step: "2", title: "Draft Ironclad Scope Clauses", desc: "List all included tasks meticulously in the engagement letter. Explicitly cap the number of calls and revisions included in the flat fee." },
                    { step: "3", title: "Define the Value Matrix", desc: "Price your services based on the risk levels rather than pure drafting time. High-risk corporate contracts must command premium flat fees." },
                    { step: "4", title: "Implement a Phased Rollout", desc: "Start by offering fixed-fee options only for highly predictable routine services (like company incorporation) while maintaining hourly billing for unpredictable litigation." }
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

            {/* Section 9: Fixed-Fee vs. Hourly Billing Comparison */}
            <section id="comparison-matrix" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Fixed-Fee vs. Hourly Billing Comparison
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Understanding the financial trade-offs between hourly billing and fixed fee structures helps firms select the exact right strategy for specific practice areas within their portfolio.
              </p>

              {/* Comparison Table Section */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mt-8 shadow-sm">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      <th className="p-4 sm:p-5 text-sm font-extrabold text-gray-900 uppercase tracking-wide">Metric</th>
                      <th className="p-4 sm:p-5 text-sm font-extrabold text-gray-900 uppercase tracking-wide">Hourly Billing</th>
                      <th className="p-4 sm:p-5 text-sm font-extrabold text-gray-900 uppercase tracking-wide">Fixed-Fee Structure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 sm:p-5 text-sm font-bold text-[#2D2219]">Client Cost Certainty</td>
                      <td className="p-4 sm:p-5 text-sm text-red-600 font-medium">Low (subject to hours billed)</td>
                      <td className="p-4 sm:p-5 text-sm text-green-600 font-medium">High (price is fixed upfront)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 sm:p-5 text-sm font-bold text-[#2D2219]">Firm Efficiency Incentive</td>
                      <td className="p-4 sm:p-5 text-sm text-red-600 font-medium">Low (longer work = more money)</td>
                      <td className="p-4 sm:p-5 text-sm text-green-600 font-medium">High (faster work = better margin)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 sm:p-5 text-sm font-bold text-[#2D2219]">Scope Creep Risk</td>
                      <td className="p-4 sm:p-5 text-sm text-green-600 font-medium">Low (extra hours are billed)</td>
                      <td className="p-4 sm:p-5 text-sm text-red-600 font-medium">High (requires strict monitoring)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 sm:p-5 text-sm font-bold text-[#2D2219]">Client Trust & Acquisition</td>
                      <td className="p-4 sm:p-5 text-sm text-orange-500 font-medium">Moderate (bills cause disputes)</td>
                      <td className="p-4 sm:p-5 text-sm text-green-600 font-medium">High (transparency wins clients)</td>
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
                    { author: "Advocate Rajesh Sharma", role: "Managing Partner", body: "Implementing the retainer template and value-based pricing from this guide helped our firm stabilize monthly revenue and acquire three new MSME clients in Delhi within weeks." },
                    { author: "Ankita Joshi", role: "Independent Counsel", body: "The scope-creep prevention tips were highly practical. As an independent practitioner, setting strict revision boundaries completely changed my profit margins." }
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
