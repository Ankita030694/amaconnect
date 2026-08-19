import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import LawyerFaqAccordion from "@/components/LawyerFaqAccordion";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ethical Social Media Marketing for Indian Advocates",
  description:
    "Learn how Indian advocates ethically use LinkedIn, WhatsApp Business and Instagram under BCI Rule 36. Discover advertising regulations and compliance.",
  alternates: {
    canonical: "https://www.amaconnect.in/ethical-social-media-marketing-for-lawyers",
  },
  openGraph: {
    title: "Ethical Social Media Marketing for Indian Advocates",
    description:
      "Learn how Indian advocates ethically use LinkedIn, WhatsApp Business and Instagram under BCI Rule 36. Discover advertising regulations and compliance.",
    url: "https://www.amaconnect.in/ethical-social-media-marketing-for-lawyers",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function EthicalMarketingPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/ethical-social-media-marketing-for-lawyers`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "How to Use LinkedIn, WhatsApp & Instagram to Get Legal Clients (Ethically)",
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
      question: "Is it legal for Indian advocates to advertise on Instagram?",
      answer: "Direct advertising or sponsored ads seeking clients is strictly prohibited under Rule 36. However, publishing objective, educational posts explaining legal provisions or public rights is permitted."
    },
    {
      question: "Can I list my practice areas on WhatsApp Business?",
      answer: "Yes, you can list standard practice areas or consultation options in your catalog, provided you do not use comparative language like 'best corporate lawyer' or guarantee outcomes."
    },
    {
      question: "What details are legally allowed on a lawyer's website?",
      answer: "Under the BCI amendment, advocates can list their name, contact details, academic qualifications, and enrolled bar association details in an approved, factual format."
    },
    {
      question: "Can I post client reviews on my LinkedIn profile?",
      answer: "No, sharing client reviews or success stories to attract clients is considered indirect solicitation and violates Rule 36 guidelines."
    },
    {
      question: "How can I ethically share my contact number on reels?",
      answer: "Instead of asking users to 'call you for cases,' direct them to an educational resource (like a blog) or a neutral contact portal where they can voluntarily request information."
    },
    {
      question: "What penalties apply for violating BCI advertising rules?",
      answer: "Violating Rule 36 can lead to severe disciplinary actions by the state bar council, including suspensions or permanent removal from the rolls for professional misconduct."
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
    name: "Ethical Social Media Marketing Guide for Lawyers",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Ethical guidelines and compliance strategies for Indian advocates using social media and WhatsApp Business.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "86",
      reviewCount: "3",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Ethical Marketing", item: pageUrl }
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
            Advocate Ethics &amp; Marketing
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            How to Use Social Media to Get Clients <br/> <span className="text-[#D4AF37]">(Ethically)</span>
          </h1>
          <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl text-justify sm:text-center">
            A comprehensive compliance manual for Indian advocates explaining how to share legal information on LinkedIn, Instagram, and WhatsApp without triggering Bar Council disciplinary actions.
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
                { id: "marketing-intro", title: "The BCI Paradigm" },
                { id: "rule-36", title: "Rule 36 Decoding" },
                { id: "instagram-education", title: "Instagram Reels" },
                { id: "whatsapp-business", title: "WhatsApp Setup" },
                { id: "linkedin-networking", title: "LinkedIn Strategies" },
                { id: "opt-in-loops", title: "Opt-in Loops" },
                { id: "client-reviews", title: "Testimonials" },
                { id: "compliance-checklist", title: "Step Checklist" },
                { id: "myths-facts", title: "Myths vs Facts" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
            
            {/* Section 1: Deciphering BCI Rules on Advocate Advertising */}
            <section id="marketing-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Deciphering BCI Rules on Advocate Advertising
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Under Rule 36 of the Bar Council of India (BCI) Rules, advocates are strictly prohibited from soliciting work or advertising their practices, either directly or indirectly, in print or digital media. However, current judicial interpretations and BCI amendments permit lawyers to publish *educational* legal content and maintain factual online profiles, provided they do not claim seniority, guarantee outcomes, or list past success rates.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Establishing an ethical presence online requires delicately balancing modern client outreach with archaic regulatory compliance. Advocates can learn about foundational branding guidelines in the <Link href="/lawyer-branding-get-more-clients" className="text-[#D4AF37] font-bold hover:underline">Lawyer Branding Guide</Link>. Educating the public about their statutory rights, much like the neutral information found in the <Link href="/know-your-rights-legal-guide" className="text-[#D4AF37] font-bold hover:underline">Know Your Rights Guide</Link>, is a permissible, highly respected way to build authority.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The core restriction on advertising is designed to prevent the commercialization of justice and protect the dignity of the profession. Advocates must carefully frame their online presence around public information and legal literacy, clarifying complex guidelines without ever promising specific litigation outcomes to viewers.
              </p>
            </section>

            {/* Section 2: Decoding Rule 36 and Disciplinary Council Jurisdiction */}
            <section id="rule-36" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Decoding Rule 36 and Disciplinary Jurisdiction
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Rule 36 aims to preserve the nobility of the legal profession. The disciplinary committees of state bar councils hold immense jurisdiction to unilaterally investigate complaints of professional misconduct arising from illegal digital advertisements or aggressive social media solicitation.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To remain compliant, ensure your online platforms are overwhelmingly informative rather than promotional. Advocates must absolutely avoid comparison claims ("Best Corporate Firm"), discount fee announcements ("50% off on bail drafts"), or sponsored advertisements that directly solicit case briefs from the general public.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Disciplinary bodies actively monitor online profiles, LinkedIn headlines, and website copy. If an advocate's landing page contains comparative terms or client win-loss statistics (e.g., "100+ Acquittals"), it can lead directly to suspension or license cancellation procedures.
              </p>
            </section>

            {/* Section 3: Educational Content Creation on Instagram Reels */}
            <section id="instagram-education" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Educational Content Creation on Instagram Reels
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Instagram Reels and YouTube Shorts have become the primary mediums for sharing brief legal updates with the masses. Advocates can use this short-form format ethically by explaining recent High Court judgments, basic consumer rights, or compliance filing steps objectively.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Keep the focus strictly on legal education. Avoid concluding videos with direct marketing pitches like "Call my chamber today if you are facing this." Instead, direct viewers to neutral resources, ask them to read the caption for the full statute, or invite comments to discuss the legal provision theoretically.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Advocates should present information neutrally, always citing relevant acts and statutory provisions. Discussing public interest topics, such as RERA protections or fundamental rights, helps build massive professional credibility while remaining well within ethical parameters.
              </p>
            </section>

            {/* Section 4: Setup of WhatsApp Business Profiles and Services */}
            <section id="whatsapp-business" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Setup of WhatsApp Business Profiles
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                WhatsApp Business offers structured tools like cataloguing and automated greetings. Advocates can list standard consultation packages (e.g., "30-Minute Corporate Consultation" or "Trademark Filing Review") in their catalog without violating rules, provided the phrasing is strictly factual.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Ensure all catalog descriptions are objective. Never include reviews, rate cards comparing your fees to other named firms, or claims of specialist status (e.g., "Expert in Criminal Law"), as these are viewed as indirect advertising by disciplinary panels.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                WhatsApp communication profiles should function strictly as coordination and information channels. Using automated replies to share registry schedules, office hours, or intake disclaimers keeps interactions highly professional and compliant.
              </p>
            </section>

            {/* Section 5: LinkedIn Networking for Lawyers (New Section) */}
            <section id="linkedin-networking" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                LinkedIn Networking and Thought Leadership
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                LinkedIn is the most powerful B2B networking tool for corporate lawyers, but it is heavily scrutinized. Your headline should be factual: "Advocate, Delhi High Court" or "Partner at XYZ Law," rather than "Top Ranked M&A Dealmaker in India."
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The most ethical and effective way to acquire corporate clients on LinkedIn is through 'Thought Leadership'. Post long-form, analytical breakdowns of new SEBI regulations, RBI circulars, or landmark Supreme Court judgments. Corporate general counsels (GCs) read these analyses to gauge your competence.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Never direct-message (DM) founders or GCs pitching your legal services. Instead, engage meaningfully with their content, offer free insights on industry trends, and allow them to view your profile and contact you organically.
              </p>
            </section>

            {/* Section 6: Opt-in Information Requests vs. Direct Solicitation */}
            <section id="opt-in-loops" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Opt-in Information Requests vs. Direct Solicitation
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The absolute ethical boundary between sharing public info and illegal direct solicitation depends entirely on client consent. If a user contacts you voluntarily requesting details about your services, responding with a fee schedule is completely permissible.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Implement "opt-in loops" on your websites or profiles. Visitors must actively request information via a contact form or click a specific link to initiate a conversation, ensuring you do not push unsolicited marketing messages or newsletters to prospective clients.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Advocates must verify that all online inquiries are user-initiated. Keeping digital logs of these incoming requests provides concrete compliance evidence if regulatory audits ever question your client acquisition methods.
              </p>
            </section>

            {/* Section 7: Testimonials, Success Rates, and Advertising Restrictions */}
            <section id="client-reviews" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Testimonials and Success Rate Restrictions
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Sharing client testimonials, case win ratios, or lists of high-profile corporate clients is strictly prohibited under Rule 36. These elements create an impression of comparison and guarantee, which is illegal under BCI regulations.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Avoid publishing client feedback screenshots or "case win" celebratory posts on social channels. Factual, anonymized updates like "A recent case regarding Section 138 NI Act was resolved based on..." are permitted, provided they remain neutral and do not identify the parties or glorify the advocate.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Similarly, do not feature client reviews directly on your landing page. Instead, list standard publications, research papers, authored books, or academic achievements that reflect your legal background in a purely objective manner.
              </p>
            </section>

            {/* Section 8: Step-by-Step Ethical Social Media Checklist */}
            <section id="compliance-checklist" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Step-by-Step Ethical Social Media Checklist
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To build your online profile safely, follow this structured compliance setup. Joining professional regulatory communities like the <Link href="/communities" className="text-[#D4AF37] font-bold hover:underline">AMAConnect Communities</Link> can help advocates stay updated on rapidly changing digital rules.
              </p>

              {/* Step Checklist Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-6">Ethical Setup Steps</h3>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Add an Explicit Opt-In Disclaimer", desc: "Ensure your social media bio or landing page strictly states that access is voluntary and consuming content does not create an advocate-client relationship." },
                    { step: "2", title: "Restrict Direct Solicitation", desc: "Publish only objective analysis of legal provisions. Avoid using statements that guarantee wins, claim specialization superiority, or list fees publicly." },
                    { step: "3", title: "Audit WhatsApp Business Catalogs", desc: "List standard service options with clear, non-promotional terms. Never promise specific case outcomes in your automated replies." },
                    { step: "4", title: "Review LinkedIn Recommendations", desc: "If clients leave recommendations on your LinkedIn profile, ensure they speak to your professionalism rather than guaranteeing litigation results." }
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

            {/* Section 9: Common Social Media Marketing Myths vs. Ethical Facts */}
            <section id="myths-facts" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Common Marketing Myths vs. Ethical Facts
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Understanding the exact boundary between illegal solicitation and permissible legal education prevents catastrophic disciplinary issues. Be careful to verify the accuracy of your disclaimers regularly.
              </p>

              {/* Myth vs Fact Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-6">Advertising Regulations</h3>
                <div className="space-y-5">
                  {[
                    { myth: "Lawyers cannot have any online presence under BCI rules.", fact: "Advocates are permitted to run a website and publish educational content, provided the info matches the approved BCI template (qualifications, enrollment details)." },
                    { myth: "I can share client testimonials if they are authentic and unpaid.", fact: "Client reviews and success rate claims are strictly prohibited, as they are viewed as indirect solicitation and comparison." },
                    { myth: "Running sponsored ads on Instagram is fine if I target businesses.", fact: "Sponsored ads directly seeking legal briefs are illegal under Rule 36, regardless of the target audience or platform." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <p className="text-sm text-red-800 font-bold tracking-wide uppercase">Myth</p>
                      </div>
                      <p className="text-sm text-gray-700 mb-4 ml-4">{item.myth}</p>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <p className="text-sm text-green-800 font-bold tracking-wide uppercase">Fact</p>
                      </div>
                      <p className="text-sm text-gray-700 ml-4">{item.fact}</p>
                    </div>
                  ))}
                </div>
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
                  <span className="text-5xl font-black text-[#2D2219] tracking-tighter">4.8</span>
                  <div className="flex flex-col pb-1">
                    <div className="flex text-[#D4AF37] text-lg mb-1">
                      ★★★★★
                    </div>
                    <span className="text-sm font-medium text-gray-500">Based on 3 verified compliance reviews</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { author: "Advocate Suresh Verma", role: "District Court Practitioner", body: "Excellent guidelines on Rule 36 compliance. The checklist helped me critically review and securely update my WhatsApp Business catalog." },
                    { author: "Priya Das", role: "Legal Content Creator", body: "Highly practical explanation of permissible educational content. The line between marketing and education is thin, and this guide makes it clear." },
                    { author: "Nitin Saxena", role: "Corporate Counsel", body: "The Myth vs Fact section cleared up all my doubts regarding online disclaimers and LinkedIn headers. Highly recommended for junior lawyers." }
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
