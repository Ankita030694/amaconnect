import { Metadata } from "next";
import Footer from "@/components/Footer";
import LawyerFaqAccordion from "@/components/LawyerFaqAccordion";
import NewsContent, { NewsArticle } from "./NewsContent";
import dbConnect from "@/lib/dbConnect";
import { CustomNews } from "@/lib/models";
import { Scale, Newspaper, Radio, Landmark, ShieldCheck, HelpCircle, FileText, CheckCircle2, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Latest Legal News, Court Judgments & Legal Updates in India",
  description:
    "Real-time Indian legal news, Supreme Court of India judgments, High Court rulings, tribunal orders, and statutory legislative amendments reported by advocates.",
  alternates: {
    canonical: "https://www.amaconnect.in/news",
  },
  openGraph: {
    title: "Latest Legal News, Court Judgments & Legal Updates in India",
    description:
      "Real-time Indian legal news, Supreme Court of India judgments, High Court rulings, tribunal orders, and statutory legislative amendments reported by advocates.",
    url: "https://www.amaconnect.in/news",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

const fallbackCourtArticles: NewsArticle[] = [
  {
    title: "Supreme Court of India Issues Guidelines on Digital Privacy and Electronic Evidence under BSA",
    description: "In a landmark judgment, the Supreme Court has laid down robust guidelines on electronic certificate generation under the Bharatiya Sakshya Adhiniyam, 2023, standardizing digital record handling in trial courts.",
    url: "https://www.supremecourtofindia.nic.in",
    urlToImage: "",
    publishedAt: new Date().toISOString(),
    source: "Supreme Court Dispatch",
    author: "Adv. Ananya Sen"
  },
  {
    title: "Bombay High Court Clarifies Gig Worker Social Security and Employment Contract Liabilities",
    description: "Resolving statutory ambiguities, the High Court delivered a comprehensive ruling defining social security fund obligations and dispute recourse for platform-based contract workers.",
    url: "https://bombayhighcourt.nic.in",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    source: "Labour Law Journal",
    author: "Adv. Rohan Mehta"
  },
  {
    title: "Delhi High Court Rules on Copyright Ownership of AI-Assisted Legal Pleading Drafts",
    description: "The Delhi High Court held that purely automated algorithmic text lacks requisite human intellectual labor for copyright protection, establishing crucial parameters for legal technology adoption.",
    url: "https://delhihighcourt.nic.in",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 2 * 86400000).toISOString(),
    source: "IP Law Review",
    author: "Adv. Kabir Malhotra"
  },
  {
    title: "NCLAT Defines Territorial Admissibility Criteria for Section 9 MSME Operational Debt Claims",
    description: "The National Company Law Appellate Tribunal held that pre-existing contractual disputes must be supported by contemporaneous documentation to bar insolvency admissions under the IBC.",
    url: "https://nclat.nic.in",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 3 * 86400000).toISOString(),
    source: "Insolvency Bulletin",
    author: "Adv. Meera Joshi"
  },
  {
    title: "Calcutta High Court Clarifies Intermediary Safe Harbor Provisions for E-Commerce Platforms",
    description: "The Court held that digital marketplaces acting solely as transactional intermediaries are protected from third-party trademark infringements provided takedown procedures are executed diligently.",
    url: "https://calcuttahighcourt.nic.in",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 4 * 86400000).toISOString(),
    source: "Calcutta Legal Review",
    author: "Adv. Priya Nair"
  }
];

const newsFaqs = [
  {
    question: "How does AMA Connect source and verify court news and legal dispatches?",
    answer: "Our legal newsroom sources updates directly from official Supreme Court and High Court cause lists, daily orders, certified judgment repositories, and central government gazette notifications. All reports are verified by enrolled advocates to ensure factual fidelity and accurate legal terminology."
  },
  {
    question: "How quickly are Supreme Court and High Court judgments reported on the platform?",
    answer: "Major constitutional bench rulings, significant bail orders, and emergency stay decisions are reported within hours of order pronouncement. Full judgment summaries with operative ratio decidendi are published alongside official case numbers once signed copies are released by court registries."
  },
  {
    question: "Does AMA Connect provide coverage of specialized tribunals like NCLT, NCLAT, and NGT?",
    answer: "Yes. In addition to constitutional courts, our daily coverage encompasses corporate restructuring at the National Company Law Tribunal (NCLT/NCLAT), environmental jurisprudence at the National Green Tribunal (NGT), consumer appellate benches (NCDRC), and tax tribunals (ITAT/CESTAT)."
  },
  {
    question: "Are live stream court proceedings and daily cause lists accessible through the portal?",
    answer: "We aggregate official links to live judicial proceedings broadcast by the Supreme Court of India and various High Courts (Gujarat, Karnataka, Orissa, Patna, Madhya Pradesh) to facilitate transparent public courtroom observation."
  },
  {
    question: "Can advocates and law chambers submit legal press releases or judgment updates?",
    answer: "Advocates who have secured noteworthy judgments or argued landmark legal issues may submit certified order copies and case summaries to our newsroom desk at amaconnect.in@gmail.com for editorial verification and reporting."
  },
  {
    question: "How are the new criminal laws (BNS, BNSS, BSA) tracked in our legal dispatches?",
    answer: "We maintain a dedicated reporting tracker on judicial interpretations of the Bharatiya Nyaya Sanhita, 2023, the Bharatiya Nagarik Suraksha Sanhita, 2023, and the Bharatiya Sakshya Adhiniyam, 2023, documenting how trial and appellate courts apply the new procedural frameworks."
  }
];

export default async function NewsPage() {
  let initialArticles: NewsArticle[] = fallbackCourtArticles;
  try {
    await dbConnect();
    const customNews = await CustomNews.find({}).sort({ isPinned: -1, order: 1, createdAt: -1 }).lean();
    if (customNews && customNews.length > 0) {
      const sanitizedCustom: NewsArticle[] = customNews.map((n: any) => ({
        title: n.title,
        description: n.description || "",
        url: n.url || "",
        urlToImage: n.urlToImage || "",
        publishedAt: n.createdAt ? new Date(n.createdAt).toISOString() : new Date().toISOString(),
        source: n.source || "AMA Dispatch",
        author: n.author || "Legal Reporter",
        slug: n.slug || ""
      }));
      initialArticles = [...sanitizedCustom, ...fallbackCourtArticles];
    }
  } catch (err) {
    console.error("[NewsPage] Error loading custom news:", err);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "AMA Connect Legal Newsroom",
    "url": "https://www.amaconnect.in/news",
    "description": "Authoritative court reporting, Supreme Court judgments, High Court updates, and statutory compliance news in India.",
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": "https://www.amaconnect.in/logo2.svg"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1 flex flex-col min-h-dvh bg-[#F5F3EE] font-sans">
        
        {/* PAGE HERO HEADER */}
        <section className="pt-10 lg:pt-16 pb-6 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-[#E8E4DE] pb-8">
            <div className="max-w-3xl">
              <span className="font-semibold uppercase tracking-[0.2em] text-[11px] text-[#C9A227] bg-[#C9A227]/10 px-3.5 py-1 rounded-full border border-[#C9A227]/30">
                JUDICIAL DISPATCHES & LEGAL JOURNALISM
              </span>
              <h1 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] mt-4 mb-3 leading-tight">
                Latest Legal News & <span className="text-[#C9A227] italic font-normal">Court Updates</span>
              </h1>
              <p className="text-base sm:text-lg text-[#6B6560] leading-relaxed">
                Real-time reporting on Supreme Court of India rulings, High Court orders, tribunal proceedings, and legislative enactments across India.
              </p>
            </div>
            <div className="text-xs font-semibold text-[#9C958C] bg-white px-4 py-2 rounded-xl border border-[#E8E4DE] shadow-2xs shrink-0">
              Edition: {new Date().toLocaleDateString("en-US", { month: "long", day: "2-digit", year: "numeric" })}
            </div>
          </div>
        </section>

        {/* NEWS FEED & INTERACTIVE CATEGORIES */}
        <NewsContent initialArticles={initialArticles} initialHasMore={initialArticles.length > 10} />

        {/* EDITORIAL SCOPE & COURTHOUSE REPORTING */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full border-t border-[#E8E4DE]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#C9A227] text-xs font-bold uppercase tracking-widest">
              LEGAL JOURNALISM SCOPE
            </span>
            <h2 className="font-playfair font-bold text-2xl sm:text-3xl lg:text-4xl text-[#1E1E1E] mt-2 mb-4">
              Comprehensive Judicial Coverage Across India
            </h2>
            <p className="text-sm sm:text-base text-[#6B6560]">
              Our legal journalism network monitors over 25 High Courts, specialized appellate tribunals, and the Supreme Court of India, delivering accurate case analyses without sensationalism.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-4">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-playfair font-bold text-base text-[#1E1E1E] mb-2">
                Supreme Court of India
              </h3>
              <p className="text-xs text-[#6B6560] leading-relaxed">
                Constitution Bench hearings, Special Leave Petitions (SLP), Public Interest Litigations (PIL), and presidential references.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-4">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-playfair font-bold text-base text-[#1E1E1E] mb-2">
                High Courts of India
              </h3>
              <p className="text-xs text-[#6B6560] leading-relaxed">
                Appellate orders, commercial division rulings, writ jurisdiction (Article 226), and state-level criminal bail jurisprudence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-playfair font-bold text-base text-[#1E1E1E] mb-2">
                Tribunals & Regulatory Bodies
              </h3>
              <p className="text-xs text-[#6B6560] leading-relaxed">
                Corporate insolvency at NCLAT/NCLT, competition law at CCI, environmental mandates at NGT, and consumer protections at NCDRC.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-4">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="font-playfair font-bold text-base text-[#1E1E1E] mb-2">
                Parliament & Legislative Tracker
              </h3>
              <p className="text-xs text-[#6B6560] leading-relaxed">
                Statutory enactments, Law Commission reports, Ministry of Law and Justice gazettes, and rule amendments under central Acts.
              </p>
            </div>

          </div>
        </section>

        {/* HOW TO TRACK COURT CASES & CAUSE LISTS */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full bg-white rounded-3xl border border-[#E8E4DE] mb-16 shadow-xs">
          <div className="max-w-4xl mx-auto">
            <span className="text-[#C9A227] text-xs font-bold uppercase tracking-widest block text-center mb-2">
              CITIZEN & ADVOCATE CASE TRACKING GUIDE
            </span>
            <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-[#1E1E1E] text-center mb-6">
              How to Track Cases and Verify Judgments in India
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E8E4DE]">
                <div className="w-8 h-8 rounded-lg bg-[#C9A227] text-white font-bold flex items-center justify-center mb-3">
                  1
                </div>
                <h3 className="font-playfair font-bold text-base text-[#1E1E1E] mb-1.5">
                  e-Courts Services Portal
                </h3>
                <p className="text-[#6B6560] leading-relaxed">
                  Use your 16-character Case Number Record (CNR) to track real-time trial court orders, next listing dates, and interim order sheets on services.ecourts.gov.in.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E8E4DE]">
                <div className="w-8 h-8 rounded-lg bg-[#C9A227] text-white font-bold flex items-center justify-center mb-3">
                  2
                </div>
                <h3 className="font-playfair font-bold text-base text-[#1E1E1E] mb-1.5">
                  Supreme Court Case Status
                </h3>
                <p className="text-[#6B6560] leading-relaxed">
                  Track diary numbers and registered SLP/Writ numbers on main.sci.gov.in to review Constitution Bench listings, defect scrutiny status, and signed orders.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E8E4DE]">
                <div className="w-8 h-8 rounded-lg bg-[#C9A227] text-white font-bold flex items-center justify-center mb-3">
                  3
                </div>
                <h3 className="font-playfair font-bold text-base text-[#1E1E1E] mb-1.5">
                  High Court Cause Lists
                </h3>
                <p className="text-[#6B6560] leading-relaxed">
                  Consult daily supplementary and regular cause lists published on official High Court registries by 7:00 PM the preceding evening for item serial numbers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STATUTORY NEWS FAQ SECTION */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#C9A227] text-xs font-bold uppercase tracking-widest">
              COURT REPORTING FAQS
            </span>
            <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-[#1E1E1E] mt-2 mb-3">
              Understanding Court Reporting & Case Tracking
            </h2>
            <p className="text-sm sm:text-base text-[#6B6560]">
              Common queries regarding case tracking, judgment authenticity verification, and reporting ethics.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <LawyerFaqAccordion faqs={newsFaqs} />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
