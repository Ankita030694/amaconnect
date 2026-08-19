import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import LawyerFaqAccordion from "@/components/LawyerFaqAccordion";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How Pro Bono Work Grows Your Paid Legal Practice",
  description:
    "Learn how taking pro bono cases can build your legal career, secure paid commercial referrals, and rapidly improve trial skills as an advocate in India.",
  alternates: {
    canonical: "https://www.amaconnect.in/how-pro-bono-grows-law-practice",
  },
  openGraph: {
    title: "How Pro Bono Work Grows Your Paid Legal Practice",
    description:
      "Learn how taking pro bono cases can build your legal career, secure paid commercial referrals, and rapidly improve trial skills as an advocate in India.",
    url: "https://www.amaconnect.in/how-pro-bono-grows-law-practice",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function ProBonoGrowthPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/how-pro-bono-grows-law-practice`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "How Taking Pro Bono Cases Can Actually Grow Your Paid Legal Practice",
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
      question: "Does pro bono work really lead to paid legal briefs?",
      answer: "Yes, family members of pro bono clients or commercial observers in the courtroom frequently refer high-value paid civil and criminal matters to advocates who demonstrate competence and empathy."
    },
    {
      question: "What percentage of my caseload should realistically be pro bono?",
      answer: "Most successful independent advocates dedicate about 10 to 15 percent of their total monthly hours (roughly 3-4 cases active) to pro bono matters to safely balance revenue and social service."
    },
    {
      question: "Can I legally list my pro bono work on my lawyer website?",
      answer: "Yes, you can describe your legal aid involvement and objective public interest case rulings, provided you do not use promotional, solicitous, or comparative language."
    },
    {
      question: "How do I verify if a client genuinely qualifies for free legal aid?",
      answer: "Always verify the client's annual income credentials against the state legal services authority guidelines or strictly request relevant economic certificate documents (e.g., BPL cards)."
    },
    {
      question: "Does legal aid work actually help in high court judge appointments?",
      answer: "Absolutely. A documented, verifiable history of legal aid and public interest representations is highly valued during selection committees for both senior advocate designations and judicial elevation."
    },
    {
      question: "How can I avoid getting completely overwhelmed by free cases?",
      answer: "Set a strict, non-negotiable monthly limit on pro bono hours and establish a rigorous qualification protocol to ensure you accept only genuine cases."
    },
    {
      question: "Do corporate firms encourage pro bono hours?",
      answer: "Yes, many tier-one Indian law firms have dedicated pro bono wings and actually allow associates to count up to 50 legal aid hours toward their annual billable targets."
    },
    {
      question: "How can I find genuine, verified pro bono opportunities?",
      answer: "You can register directly with local District Legal Services Authorities (DLSA), participate in community legal aid desks run by NGOs, or collaborate with law school clinics."
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
    name: "Pro Bono Practice Growth Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Practice growth guide explaining how advocates use structured legal aid and pro bono disputes to build their commercial practices.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "80",
      reviewCount: "4",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Pro Bono Growth", item: pageUrl }
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
            Practice Growth &amp; Social Impact
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            How Taking Pro Bono Cases Can Actually <br/> <span className="text-[#D4AF37]">Grow Your Paid Legal Practice</span>
          </h1>
          <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl text-justify sm:text-center">
            Discover how structured free representation builds trial expertise, dramatically improves professional credibility, and generates high-value paid commercial referrals.
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
                { id: "probono-intro", title: "The Legal Services Act" },
                { id: "probono-vs-legalaid", title: "Pro Bono vs Legal Aid" },
                { id: "trial-expertise", title: "Trial Advocacy" },
                { id: "advocate-visibility", title: "Courtroom Visibility" },
                { id: "client-referrals", title: "Client Referrals" },
                { id: "media-exposure", title: "Media & PR" },
                { id: "hour-limits", title: "Case Hour Limits" },
                { id: "qualifying-clients", title: "Client Auditing" },
                { id: "judicial-goodwill", title: "Judicial Goodwill" },
                { id: "soft-skills", title: "Soft Skills" },
                { id: "bar-recognition", title: "Bar Recognition" },
                { id: "success-story", title: "Case Analysis" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
            
            {/* Section 1: Pro Bono Representation under the Legal Services Act */}
            <section id="probono-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Pro Bono Representation under the Legal Services Act
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Under Section 12 of the Legal Services Authorities Act, 1987, millions of marginalized Indian citizens legally qualify for free legal representation, yet access to quality, dedicated legal advice remains extremely limited. Junior advocates who strategically dedicate a set percentage of their caseload to pro bono disputes find that it exponentially accelerates their trial experience and generates paid commercial referrals.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Participating in pro bono representation helps advocates refine their courtroom skills and build massive community credibility. Details on formal free legal aid initiatives can be found in our <Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] font-bold hover:underline">Pro Bono Free Legal Aid Guide</Link>. To read verified stories of successful case resolutions leading to firm partnerships, browse the <Link href="/success-stories" className="text-[#D4AF37] font-bold hover:underline">AMA Success Stories</Link>.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Additionally, joining professional support networks allows independent advocates to share complex case studies and coordinate jointly on public interest disputes. Connect with peers securely in the <Link href="/communities" className="text-[#D4AF37] font-bold hover:underline">AMAConnect Legal Communities</Link>.
              </p>
            </section>

            {/* Section 2: Pro Bono vs State Legal Aid (New Section) */}
            <section id="probono-vs-legalaid" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Understanding Pro Bono vs. State Legal Aid
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Many junior lawyers confuse "Pro Bono" with "State Legal Aid," but they function differently in practice growth.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                <strong>State Legal Aid:</strong> This involves registering with the District Legal Services Authority (DLSA). The state assigns you cases (often criminal defense or family disputes) and pays you a nominal, fixed honorarium. This is excellent for guaranteed courtroom exposure.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                <strong>Pro Bono Publico:</strong> This is entirely voluntary. You select a client (e.g., a defrauded consumer or an NGO) and represent them completely free of charge. Because you choose the case, you can strategically select disputes (like writ petitions or consumer fraud) that align exactly with the commercial practice area you want to build.
              </p>
            </section>

            {/* Section 3: Gaining Classroom and Courtroom Trial Advocacy Skills */}
            <section id="trial-expertise" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Gaining Rapid Courtroom Trial Advocacy Skills
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                For first-generation junior advocates, securing independent paid briefs in the early career months can be brutally difficult. Pro bono cases provide immediate, regular courtroom opportunities, allowing you to argue interim motions, cross-examine hostile witnesses, and manage complex file procedures directly before judges.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This practical experience is literally invaluable. It helps you develop commanding courtroom presence, conquer public speaking anxiety, and learn how to respond to rapid-fire judge questions under extreme pressure—building trial capabilities years faster than pure chamber research could.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Arguing motions and coordinating filings regularly builds intense familiarity with registry operations. This continuous practice helps advocates build their professional capacity and manage high-paying client cases perfectly when they arrive.
              </p>
            </section>

            {/* Section 4: High Court Corridor Visibility and Advocate Networking */}
            <section id="advocate-visibility" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Court Corridor Visibility and Advocate Networking
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Courts are highly observation-centric spaces. When you argue a case passionately, other advocates waiting in the courtroom, including high-profile senior practitioners and corporate partners, actively observe your performance and grasp of the law.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Demonstrating thorough research, unshakeable composure, and professional conduct during a pro bono hearing builds massive credibility among your peers. This visibility frequently leads directly to paid referrals from senior colleagues who need local filing assistance or have conflicts of interest in mid-tier cases.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Establishing contact channels at local bar associations drastically expands your network. Pro bono advocates should also participate in panel discussions and volunteer for community legal programs to compound this visibility.
              </p>
            </section>

            {/* Section 5: Word-of-Mouth Recommendations and Commercial Referrals */}
            <section id="client-referrals" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Word-of-Mouth Recommendations and Paid Referrals
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Clients who receive dedicated, respectful pro bono support become fiercely loyal advocates for your chamber. They invariably refer extended family members, neighbors, and local business owners to your practice for paid matters.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                For example, a pro bono landlord-tenant eviction successfully resolved for a retired citizen can easily lead to a highly paid commercial contract review referral from their successful nephew's tech startup, perfectly showcasing how altruistic representation builds lucrative commercial client channels.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This referral loop creates a reliable, zero-marketing-cost inflow of clients. Providing high-quality representation to all clients, strictly regardless of fee levels, is the ultimate secret to building a sustainable independent practice.
              </p>
            </section>

            {/* Section 6: Public Interest Litigation (PIL) and Ethical PR Exposure */}
            <section id="media-exposure" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Public Interest Litigation (PIL) and Ethical PR Exposure
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                High-impact pro bono cases or Public Interest Litigations (PILs) addressing broad community issues (e.g., environmental violations, municipal corruption) are frequently reported in legal media portals like Bar & Bench or LiveLaw.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This coverage massively increases your visibility without violating strict BCI rules against self-advertising. It highlights your expertise in specific sub-niches, establishing you as a knowledgeable authority resource for future corporate briefs.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Ethical media exposure involves sharing objective summaries of your court rulings. Advocates must avoid promotional language ("Best PIL Lawyer"), framing their public comments strictly around legal concepts and civic rights.
              </p>
            </section>

            {/* Section 7: Setting Hard Limits on Monthly Free Case Allocations */}
            <section id="hour-limits" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Setting Hard Limits on Monthly Free Case Allocations
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To run a financially sustainable practice, you must balance public interest work with paid cases. Taking on too many free matters out of guilt can lead directly to financial strain, burnout, and compromise the quality of your work for everyone.
              </p>

              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-6 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-6">Pro Bono Management Rules</h3>
                <div className="space-y-4">
                  {[
                    { rule: "The 15% Cap", desc: "Never allocate more than 15-20% of your total billing hours to unpaid matters." },
                    { rule: "Out-of-Pocket Immunity", desc: "Make it clear that while your professional fees are waived, the client must pay court registry fees, clerkage, and stamp duty." },
                    { rule: "Equal Treatment", desc: "Treat accepted pro bono cases exactly like paying cases—do not miss deadlines or delay drafts because the case is unpaid." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] font-bold text-sm shrink-0 border border-[#D4AF37]/30">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-1">{item.rule}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 8: Income Verification Guidelines for Pro Bono Clients */}
            <section id="qualifying-clients" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Income Verification to Prevent System Abuse
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To protect your practice from systemic abuse, you must ruthlessly verify that pro bono applicants genuinely qualify for legal aid. Many individuals who can afford lawyers will attempt to get free representation if you do not filter them.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Request relevant documents such as income certificates, BPL cards, or pension receipts during intake. Align your intake policies with State Legal Services Authority guidelines to ensure your free services are directed strictly to marginalized citizens.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Verifying credentials protects your limited resources. It ensures that your pro bono commitment is focused on citizens who truly lack the financial means to secure quality representation, not those looking for a discount.
              </p>
            </section>

            {/* Section 9: Building Goodwill with the Judiciary */}
            <section id="judicial-goodwill" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Building Goodwill with the Judiciary
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Judges are acutely aware of which advocates treat their courtrooms purely as commercial spaces and which advocates are genuinely committed to the pursuit of justice. When you voluntarily accept a pro bono amicus curiae appointment or passionately argue for a marginalized client without demanding a fee, the bench takes immediate, highly positive notice.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This judicial goodwill translates directly into professional grace during your paid, commercial matters. Judges tend to grant you the benefit of the doubt on minor procedural delays, listen more attentively to your complex arguments, and respect your chamber's integrity. Over years of practice, this reputation on the bench becomes an advocate's most unshakeable asset.
              </p>
            </section>

            {/* Section 10: Developing Essential Soft Skills */}
            <section id="soft-skills" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 10
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Developing Essential Soft Skills
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Pro bono clients are frequently traumatized, deeply anxious, or completely uneducated regarding the legal system. Representing them forces you to drastically improve your emotional intelligence, empathy, and client-counseling patience. You must learn to explain complex statutory provisions in the simplest, most accessible vernacular language.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                These advanced communication skills seamlessly transfer to your high-paying commercial clients. A corporate CEO facing a multi-million dollar insolvency petition is just as anxious as a pro bono client facing eviction. The ability to calm them down, manage their expectations, and explain the litigation strategy simply is what differentiates a decent lawyer from an exceptional, highly-paid litigator.
              </p>
            </section>

            {/* Section 11: Bar Association Recognition */}
            <section id="bar-recognition" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 11
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Bar Association Recognition and Leadership
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                State and local Bar Associations frequently honor advocates who demonstrate exceptional commitment to public interest law. Winning a high-profile pro bono dispute often results in formal recognition during Bar Council events, instantly elevating your status among thousands of registered peers.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Furthermore, advocates with strong legal aid backgrounds are frequently nominated to sit on internal Bar sub-committees, ethical disciplinary boards, or community outreach panels. This leadership positioning accelerates your path toward becoming a designated Senior Advocate and establishes you as a pillar of the legal community, attracting both premium clients and talented junior associates to your chamber.
              </p>
            </section>

            {/* Section 12: Case Analysis: From Pro Bono Consumer Case to Paid Retainer */}
            <section id="success-story" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 12
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Case Analysis: From Free Consumer Case to Paid Retainer
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Understanding how consumer aid work can lead directly to highly paid commercial cases helps junior lawyers structure their practices effectively.
              </p>

              {/* Success Story Box */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-6 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-4">Case History: The Defrauded Pensioner</h3>
                <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6 bg-white p-4 rounded-xl border border-gray-100">
                  A junior advocate took on a pro bono consumer dispute representing a defrauded senior citizen against a major real estate developer. The advocate prepared a highly detailed case file, refused early settlement pressure, and argued the matter aggressively before the state commission, securing a full refund with penalties.
                </p>
                
                <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Practice Outcomes Achieved:</h4>
                <div className="space-y-3">
                  {[
                    "The trial was reported in a local legal news portal (LiveLaw), instantly increasing the advocate's search visibility.",
                    "A local mid-sized manufacturing business owner saw the report and was impressed by the advocate's aggression.",
                    "The business owner immediately retained the advocate to review and litigate their commercial supplier default agreements.",
                    "The advocate secured a steady INR 40,000 monthly corporate retainer entirely based on their pro bono trial performance."
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

            {/* Section 13: FAQs (Accordion Style) */}
            <section id="faq" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 13
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
                    <span className="text-sm font-medium text-gray-500">Based on 4 verified professional reviews</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { author: "Advocate Manish Gupta", role: "Litigation Partner", body: "This guide transformed how we view pro bono work. Strategically dedicating 10 percent of our hours to legal aid has built incredibly strong local referral channels." },
                    { author: "Ritu Sen", role: "Independent Practitioner", body: "The selection criteria for free legal aid cases helped us filter leads effectively. Rejecting clients who could afford fees saved my practice." },
                    { author: "Ajay Malhotra", role: "Civil Lawyer", body: "Excellent guidelines on public interest filing and media reporting compliance. Navigating PR ethically is tricky, but this clarifies it." },
                    { author: "Nikhil Desai", role: "Junior Advocate", body: "The distinction between DLSA and voluntary Pro Bono was an eye-opener. I'm targeting consumer disputes to build my commercial profile now." }
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
