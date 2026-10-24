import { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import LawyerFaqAccordion from "@/components/LawyerFaqAccordion";
import NewsContent from "./NewsContent";
import { getNewsFeed, NewsArticle } from "@/lib/newsService";
import { Scale, Newspaper, Radio, Landmark, ShieldCheck, HelpCircle, FileText, CheckCircle2, Search, ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

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
    siteName: "AMA Connect",
    type: "website",
  },
};

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
  let initialArticles: NewsArticle[] = [];
  let initialHasMore = false;

  try {
    const feed = await getNewsFeed({ page: 1, category: "All", pageSize: 10 });
    initialArticles = feed.articles;
    initialHasMore = feed.hasMore;
  } catch (err) {
    console.error("[NewsPage] Error loading news feed:", err);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "AMA Connect Legal Newsroom",
    "url": "https://www.amaconnect.in/news",
    "description": "Authoritative court reporting, Supreme Court judgments, High Court updates, and statutory compliance news in India.",
    "publisher": {
      "@type": "Organization",
      "name": "AMA Connect",
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
        <NewsContent initialArticles={initialArticles} initialHasMore={initialHasMore} />

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

        {/* AMA CONNECT COMMUNITY & INTERLINKED RESOURCES SECTION */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#C9A227] text-xs font-bold uppercase tracking-widest">
              AMA CONNECT PLATFORM &amp; RESOURCES
            </span>
            <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-[#1E1E1E] mt-2 mb-3">
              Explore AMA Connect Communities, Interviews &amp; Legal Guides
            </h2>
            <p className="text-sm sm:text-base text-[#6B6560]">
              From exclusive senior lawyer interviews and specialized legal communities to Ask Me Anything (AMA) sessions and educational guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            <Link
              href="/communities"
              className="group bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs hover:shadow-md hover:border-[#C9A227] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-3">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-playfair font-bold text-base text-[#1E1E1E] group-hover:text-[#C9A227] transition-colors mb-2">
                  Legal Communities
                </h3>
                <p className="text-xs text-[#6B6560] leading-relaxed">
                  Join specialized legal communities on AMA Connect to discuss court updates, statutory reforms, and practice insights.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#C9A227]">
                <span>Explore Communities</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/ask-me-anything"
              className="group bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs hover:shadow-md hover:border-[#C9A227] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-3">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="font-playfair font-bold text-base text-[#1E1E1E] group-hover:text-[#C9A227] transition-colors mb-2">
                  Ask Me Anything (AMA) Q&amp;A
                </h3>
                <p className="text-xs text-[#6B6560] leading-relaxed">
                  Browse community legal questions and answers shared by verified lawyers on the AMA Connect app.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#C9A227]">
                <span>Explore AMA Sessions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/interviews"
              className="group bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs hover:shadow-md hover:border-[#C9A227] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-playfair font-bold text-base text-[#1E1E1E] group-hover:text-[#C9A227] transition-colors mb-2">
                  Senior Lawyer Case Studies
                </h3>
                <p className="text-xs text-[#6B6560] leading-relaxed">
                  Deep-dive interviews and practice frameworks from advocates handling trial court to Supreme Court litigation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#C9A227]">
                <span>Read Interviews</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Quick Pillar Links */}
          <div className="bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1E1E1E] mb-4">
              Trending Practice Area Guides & Citizen Rights
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {[
                { label: "Cheque Bounce (Sec 138) Notice", href: "/cheque-bounce-legal-notice-section-138-guide" },
                { label: "RERA Delayed Possession Relief", href: "/homebuyer-rights-rera-builder-delay-remedies" },
                { label: "Drafting a Legal Notice", href: "/how-to-draft-legal-notice-india-guide" },
                { label: "Cyber Fraud & Financial Scams Recourse", href: "/cyber-fraud-online-scams-legal-recourse" },
                { label: "Property Partition & Boundary Disputes", href: "/property-dispute-resolution-india-legal-remedies" },
                { label: "Mutual Consent Divorce & Alimony", href: "/how-to-file-divorce-india-legal-guide" },
                { label: "Loan Recovery Harassment Protection", href: "/loan-app-debt-settlement-harassment-legal-help" },
                { label: "Consumer Protection & Defective Products", href: "/consumer-protection-ecommerce-defective-goods-guide" },
                { label: "Startup Incorporation & Shareholder Disputes", href: "/startup-registration-incorporation-india-guide" }
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] hover:bg-[#F2E8D2] border border-[#E8E4DE] text-xs font-medium text-[#1E1E1E] hover:text-[#C9A227] transition-all shadow-3xs"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-3 h-3 text-[#C9A227]" />
                </Link>
              ))}
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

        <AppDownloadCTA />

        <Footer />
      </main>
    </>
  );
}
