import React, { Suspense } from "react";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import LawyerFaqAccordion from "@/components/LawyerFaqAccordion";
import BlogExplorer from "./BlogExplorer";
import dbConnect from "@/lib/dbConnect";
import { Blog } from "@/lib/models";
import { BookOpen, Scale, ShieldCheck, FileCheck2, Landmark, HelpCircle, TriangleAlert, CheckCircle2, GraduationCap, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Insights, Articles & Practice Guides",
  description:
    "In-depth legal articles, landmark court rulings analysis, statutory compliance manuals, and courtroom practice guides curated by enrolled Indian advocates.",
  alternates: {
    canonical: "https://www.amaconnect.in/blog",
  },
  openGraph: {
    title: "Legal Insights, Articles & Practice Guides",
    description:
      "In-depth legal articles, landmark court rulings analysis, statutory compliance manuals, and courtroom practice guides curated by enrolled Indian advocates.",
    url: "https://www.amaconnect.in/blog",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

const blogFaqs = [
  {
    question: "Who writes and reviews the legal articles published on AMA Connect?",
    answer: "All articles, statutory interpretations, and procedural commentaries on AMA Connect are authored and peer-reviewed by practicing High Court advocates, corporate legal counsels, and seasoned legal academics across India. Content undergoes strict editorial verification to ensure alignment with statutory amendments and prevailing judicial precedents.",
  },
  {
    question: "How frequently are articles updated to reflect new judgments and legislative changes?",
    answer: "Our legal research team continuously monitors gazette notifications, parliamentary enactments (such as the BNS, BNSS, and BSA criminal law reforms), and landmark rulings from the Supreme Court and High Courts. Articles are systematically updated to incorporate new judicial interpretations and statutory amendments.",
  },
  {
    question: "Are the guidelines on AMA Connect compliant with Bar Council of India (BCI) rules?",
    answer: "Yes. In strict compliance with Rule 36 of the Bar Council of India Rules, all content on AMA Connect is strictly educational, informative, and designed for public legal literacy. The publications do not solicit briefs, advertise individual legal services, or constitute formal legal counsel.",
  },
  {
    question: "How should advocates and law students cite AMA Connect articles in research briefs?",
    answer: "Articles provide direct citations to official court case numbers, SCC Online, AIR, and government gazette publications. Practitioners citing analysis from our portal can reference the relevant author, title, publication date, and canonical URL alongside the underlying judicial citation.",
  },
  {
    question: "Can external advocates or legal scholars contribute guest commentaries?",
    answer: "Yes. Enrolled advocates, judicial clerks, and research scholars may submit original, well-researched manuscripts examining novel questions of law, tribunal jurisprudence, or commercial drafting frameworks. Submissions undergo an editorial review prior to publication.",
  },
  {
    question: "Does reading these publications establish an advocate-client relationship?",
    answer: "No. The legal insights, commentaries, and practical guides available on AMA Connect are published solely for general informational and educational purposes. Reading these resources does not create an attorney-client relationship. For specific litigation or transactional matters, direct consultation with a qualified legal professional is advised.",
  },
];

export default async function BlogsPage() {
  let initialBlogs: any[] = [];
  try {
    await dbConnect();
    const rawBlogs = await Blog.find({}).sort({ created: -1 }).lean();
    initialBlogs = JSON.parse(JSON.stringify(rawBlogs));
  } catch (error) {
    console.error("[BlogsPage] Error fetching blogs server-side:", error);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AMA Connect Legal Insights & Practice Guides",
    "description": "Comprehensive digital library of Indian legal articles, court analyses, and practice management guides.",
    "url": "https://www.amaconnect.in/blog",
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
      <div className="min-h-dvh bg-[#F5F3EE] text-[#1E1E1E] font-sans">
        
        {/* HERO SECTION */}
        <section className="pt-10 lg:pt-16 pb-8 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <span className="font-semibold uppercase tracking-[0.2em] text-[11px] text-[#C9A227] bg-[#C9A227]/10 px-3.5 py-1 rounded-full border border-[#C9A227]/30">
              LEGAL KNOWLEDGE BASE & EDITORIAL REPOSITORY
            </span>
            <h1 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] mt-4 mb-4 leading-tight">
              Legal Insights, Articles & <span className="text-[#C9A227] italic font-normal">Practice Guides</span>
            </h1>
            <p className="text-base sm:text-lg text-[#6B6560] leading-relaxed">
              Explore rigorous legal scholarship, Supreme Court analyses, corporate drafting manuals, procedural litigation strategies, and statutory compliance updates curated by enrolled advocates in India.
            </p>
          </div>
        </section>

        {/* INTERACTIVE EXPLORER & SERVER-RENDERED INITIAL ARTICLES */}
        <Suspense
          fallback={
            <div className="max-w-[1280px] mx-auto px-6 py-12 text-center text-[#6B6560]">
              <div className="w-10 h-10 border-4 border-[#C9A227] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="font-medium text-sm">Loading Legal Publications...</p>
            </div>
          }
        >
          <BlogExplorer initialBlogs={initialBlogs} />
        </Suspense>

        {/* EDITORIAL SCOPE & CORE RESEARCH DOMAINS */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto border-t border-[#E8E4DE]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#C9A227] text-xs font-bold uppercase tracking-widest">
              CURATED JURISPRUDENCE
            </span>
            <h2 className="font-playfair font-bold text-2xl sm:text-3xl lg:text-4xl text-[#1E1E1E] mt-2 mb-4">
              Core Legal Research & Practice Areas
            </h2>
            <p className="text-sm sm:text-base text-[#6B6560] leading-relaxed">
              Our editorial repository spans critical domains of Indian law, bridging procedural courtroom realities with contemporary corporate regulations and constitutional bench decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Domain 1 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-4">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-playfair font-bold text-lg text-[#1E1E1E] mb-2">
                Constitutional Law & Appellate Writs
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6560] leading-relaxed">
                In-depth procedural guides on Article 32 and Article 226 writ petitions, fundamental rights enforcement, judicial review thresholds, and Special Leave Petitions (Article 136) before the Supreme Court.
              </p>
            </div>

            {/* Domain 2 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-4">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-playfair font-bold text-lg text-[#1E1E1E] mb-2">
                Criminal Jurisprudence & Bail Reforms
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6560] leading-relaxed">
                Comparative analysis of the Bharatiya Nyaya Sanhita (BNS), BNSS procedure, police custody guidelines under Section 35 BNSS, anticipatory bail strategies, and electronic evidence admissibility under the BSA.
              </p>
            </div>

            {/* Domain 3 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-4">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-playfair font-bold text-lg text-[#1E1E1E] mb-2">
                Corporate Governance & Insolvency (IBC)
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6560] leading-relaxed">
                Advisory frameworks for MSME debt recovery, NCLT corporate insolvency resolution processes (CIRP), shareholder agreement drafting, M&A due diligence, and Companies Act, 2013 compliance.
              </p>
            </div>

            {/* Domain 4 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-playfair font-bold text-lg text-[#1E1E1E] mb-2">
                Real Estate, RERA & Property Disputes
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6560] leading-relaxed">
                Comprehensive manuals on builder delay compensation under RERA Section 18, partition suits, ancestral property succession under the Hindu Succession Act, gift deed registrations, and eviction defense.
              </p>
            </div>

            {/* Domain 5 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-playfair font-bold text-lg text-[#1E1E1E] mb-2">
                Commercial Arbitration & Dispute Resolution
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6560] leading-relaxed">
                Strategies under the Arbitration and Conciliation Act, 1996, including Section 9 interim measures, Section 11 arbitrator appointments, Section 34 arbitral award challenges, and enforcement of foreign awards.
              </p>
            </div>

            {/* Domain 6 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-4">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-playfair font-bold text-lg text-[#1E1E1E] mb-2">
                Legal Tech, AI Integration & IP Rights
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6560] leading-relaxed">
                Practical implementation of artificial intelligence in legal drafting, automated case record indexing, digital data protection compliance under the DPDP Act 2023, and trademark portfolio management.
              </p>
            </div>

          </div>
        </section>

        {/* AUDIENCE RESEARCH GUIDE */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto bg-white rounded-3xl border border-[#E8E4DE] mb-16 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#C9A227] text-xs font-bold uppercase tracking-widest">
              PRACTITIONER & SCHOLAR RESOURCES
            </span>
            <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-[#1E1E1E] mt-2 mb-3">
              How Different Audiences Utilize Our Portal
            </h2>
            <p className="text-sm text-[#6B6560]">
              Whether you are an advocate arguing in the High Court, a startup founder negotiating a term sheet, or a law student researching jurisprudence, our repository provides tailored value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E8E4DE]">
              <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-playfair font-bold text-base text-[#1E1E1E] mb-2">
                Litigators & Chamber Heads
              </h3>
              <p className="text-xs text-[#6B6560] leading-relaxed">
                Access structured pleading checklists, SLP synopsis templates, cause list tracking workflows, and cross-examination frameworks designed to elevate courtroom effectiveness.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E8E4DE]">
              <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-playfair font-bold text-base text-[#1E1E1E] mb-2">
                Founders & In-House Counsels
              </h3>
              <p className="text-xs text-[#6B6560] leading-relaxed">
                Review standardized commercial agreements, MSME recovery filing steps, employment POSH compliance policies, and statutory directors liability parameters under the Companies Act.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E8E4DE]">
              <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-playfair font-bold text-base text-[#1E1E1E] mb-2">
                Law Students & Judicial Aspirants
              </h3>
              <p className="text-xs text-[#6B6560] leading-relaxed">
                Study comparative analyses of the new criminal codes (BNS/BNSS/BSA vs IPC/CrPC/IEA), moot court memorials, and career transition guides for corporate and litigation tracks.
              </p>
            </div>
          </div>
        </section>

        {/* EDITORIAL STANDARDS & PEER REVIEW */}
        <section className="bg-white border-y border-[#E8E4DE] py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-[#C9A227] text-xs font-bold uppercase tracking-widest block text-center mb-2">
              QUALITY & INTEGRITY COMMITMENT
            </span>
            <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-[#1E1E1E] text-center mb-6">
              Editorial Standards & Verification Framework
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#6B6560] leading-relaxed text-justify sm:text-left">
              <p>
                At AMA Connect, our legal publishing philosophy is anchored in statutory accuracy, actionable clarity, and absolute adherence to professional legal ethics. Every commentary published on our portal is vetted by enrolled advocates who analyze primary statutory texts, relevant rules, high-court notifications, and binding ratio decidendi from the Supreme Court of India.
              </p>
              <p>
                We cross-verify case citations against authoritative reporters including Supreme Court Cases (SCC), All India Reporter (AIR), and Indian Kanoon. By synthesizing complex statutory provisions into structured practice steps, our publications empower both young advocates building chamber practices and citizens navigating the Indian legal apparatus.
              </p>
            </div>
          </div>
        </section>

        {/* STATIC FAQ SECTION */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#C9A227] text-xs font-bold uppercase tracking-widest">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-[#1E1E1E] mt-2 mb-3">
              Knowledge Base & Publishing Queries
            </h2>
            <p className="text-sm sm:text-base text-[#6B6560]">
              Key information regarding our editorial policy, citation conventions, BCI compliance, and submission procedures.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <LawyerFaqAccordion faqs={blogFaqs} />
          </div>
        </section>

        {/* DISCLAIMER SECTION */}
        <section className="bg-[#F5F3EE] pb-12">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="bg-[#2A2B2E] p-6 sm:p-8 rounded-2xl shadow-xs">
              <div className="flex items-center mb-3">
                <TriangleAlert className="w-[18px] h-[18px] text-[#C9A227]" />
                <h3 className="text-[#C9A227] text-[12px] uppercase tracking-[0.15em] font-bold ml-2">
                  STATUTORY LEGAL DISCLAIMER
                </h3>
              </div>
              <p className="text-[#A0A2A8] text-xs sm:text-sm leading-[1.8]">
                The legal articles, commentaries, case analyses, and procedural guides provided on https://www.amaconnect.in are intended strictly for general educational and informational purposes. They do not constitute formal legal, financial, or professional advice, nor do they establish an advocate-client relationship. Laws, procedural rules, and court precedents change frequently; readers must consult an enrolled advocate or qualified legal practitioner for formal counsel on individual cases. AMA Legal Solutions disclaims any liability for actions taken based on the information published herein.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
