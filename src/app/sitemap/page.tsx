import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import dbConnect from "@/lib/dbConnect";
import { Blog, LawyerInterview } from "@/lib/models";
import { Scale, Compass, ShieldCheck, Briefcase, FileText, Users, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Sitemap & Legal Resource Architecture Directory",
  description:
    "Comprehensive directory index of AMA Connect legal guides, court practice manuals, statutory compliance frameworks, verified draft templates, and lawyer interviews.",
  alternates: {
    canonical: "https://www.amaconnect.in/sitemap",
  },
  openGraph: {
    title: "Sitemap & Legal Resource Architecture Directory",
    description:
      "Comprehensive directory index of AMA Connect legal guides, court practice manuals, statutory compliance frameworks, verified draft templates, and lawyer interviews.",
    url: "https://www.amaconnect.in/sitemap",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

const citizenGuides = [
  { name: "Bail Procedure & Police Custody Rights", href: "/bail-procedure-arrest-rights-police-custody-guide", desc: "Arrest guidelines, Section 35 BNSS / 41A CrPC notice compliance, and bail applications." },
  { name: "Cheque Bounce Section 138 NI Act Guide", href: "/cheque-bounce-legal-notice-section-138-guide", desc: "Mandatory statutory notice drafting, 15-day demand timelines, and magistrate trial steps." },
  { name: "Mutual Consent & Contested Divorce Guide", href: "/how-to-file-divorce-india-legal-guide", desc: "Section 13B Hindu Marriage Act procedure, cooling-off waiver, alimony, and custody terms." },
  { name: "Homebuyer Rights & RERA Builder Delay Remedies", href: "/homebuyer-rights-rera-builder-delay-remedies", desc: "Filing complaints for delayed possession, refund interest calculation, and NCDRC appeals." },
  { name: "Property Dispute Resolution & Partition Remedies", href: "/property-dispute-resolution-india-legal-remedies", desc: "Ancestral inheritance, partition suits, title verification, and injunction orders." },
  { name: "Tenant Eviction & Security Deposit Recovery", href: "/tenant-rights-eviction-security-deposit-disputes", desc: "Rent Control Act provisions, standard lease terms, and unlawful eviction protection." },
  { name: "Patient Rights & Medical Negligence Help", href: "/patient-rights-medical-negligence-legal-help", desc: "Consumer forum claims, expert medical board testimony, and hospital liability." },
  { name: "Cyber Fraud, Online Scams & Recovery Recourse", href: "/cyber-fraud-online-scams-legal-recourse", desc: "1930 cyber helpline reporting, bank chargeback notices, and IT Act Section 66D recourse." },
  { name: "Workplace Safety & POSH Act Employee Guide", href: "/posh-act-workplace-safety-employee-guide", desc: "Internal Complaints Committee (ICC) inquiries, 90-day timelines, and confidentiality." },
  { name: "How to Draft a Legal Notice in India", href: "/how-to-draft-legal-notice-india-guide", desc: "Statutory notice formats, proof of delivery, cause of action framing, and advocate fees." },
  { name: "Motor Accident Claims (MACT) Compensation", href: "/motor-accident-claims-compensation-guide", desc: "Filing DAR reports, third-party insurance liability, and structured compensation claims." },
  { name: "Consumer Protection & Defective Goods Guide", href: "/consumer-protection-ecommerce-defective-goods-guide", desc: "E-Daakhil filing, unfair trade practice remedies, and product liability under CPA 2019." },
  { name: "Loan App Harassment & Debt Settlement Help", href: "/loan-app-debt-settlement-harassment-legal-help", desc: "RBI digital lending guidelines, anti-harassment injunctions, and one-time settlement (OTS)." },
  { name: "Know Your Rights Comprehensive Legal Guide", href: "/know-your-rights-legal-guide", desc: "Essential constitutional and statutory rights every Indian citizen must know." },
  { name: "Pro Bono Legal Aid & Free Consultation", href: "/pro-bono-free-legal-aid", desc: "Accessing legal aid under Legal Services Authorities Act, 1987 (NALSA/DLSA)." }
];

const advocateGuides = [
  { name: "Setting Up an Independent Law Chamber in India", href: "/setting-up-law-chamber-india", desc: "Chamber location budgeting, library selection, clerk management, and digital tools." },
  { name: "Virtual Law Chambers & Online Practices", href: "/virtual-law-chambers-india", desc: "Cloud intake workflows, secure data hosting, remote video consulting, and BCI compliance." },
  { name: "Drafting Supreme Court SLP (Article 136) Guide", href: "/drafting-supreme-court-slp-article-136-guide", desc: "Substantial questions of law, synopsis structuring, certified copy caveats, and registry defects." },
  { name: "Courtroom & Registry Etiquette for Young Advocates", href: "/courtroom-registry-etiquette-young-advocates", desc: "Addressing the bench, filing counter-affidavits, handling pass-overs, and registry protocols." },
  { name: "Effective Legal Research & Case Briefing Guide", href: "/effective-legal-research-case-briefing-advocates", desc: "Navigating SCC Online/Manupatra, ratio filtering, and 1-page senior counsel brief prep." },
  { name: "Transitioning Trial Court to High Court Practice", href: "/transitioning-trial-court-to-high-court-practice", desc: "Adapting appellate drafting styles, writ jurisdiction, paper books, and senior chamber junioring." },
  { name: "Client Onboarding & Lead Qualification for Lawyers", href: "/client-onboarding-lead-qualification-lawyers", desc: "Initial client screening questionnaires, KYC compliance, engagement letters, and fee clarity." },
  { name: "Essential Legal Tech Stack & Software for Lawyers", href: "/essential-legal-tech-software-indian-lawyers", desc: "Practice management software, document automation, encrypted storage, and GST billing." },
  { name: "Financial Management & Tax Planning for Law Firms", href: "/financial-management-tax-planning-law-firms-india", desc: "Bookkeeping, GST reverse charge applicability, professional tax, and client trust accounts." },
  { name: "Ethical Social Media Marketing for Indian Advocates", href: "/ethical-social-media-marketing-for-lawyers", desc: "BCI Rule 36 compliance, thought leadership on LinkedIn, and ethical personal branding." },
  { name: "Case Record & Document Management for Advocates", href: "/case-record-management-indian-advocates", desc: "Digital brief archiving, physical file indexing, cause list tracking, and diary systems." },
  { name: "Continuing Legal Education & Skills for Indian Lawyers", href: "/continuing-legal-education-skills-lawyers", desc: "Mastering cross-examination, arbitral award drafting, and emerging regulatory frameworks." },
  { name: "Dual Qualifications for Indian Lawyers: Solicitor & LLM", href: "/dual-qualifications-indian-lawyers", desc: "SQE exams for UK qualification, US Bar exams (NY/California), and foreign LLM ROI." },
  { name: "Boutique Law Firm Branding & Specialization Guide", href: "/boutique-law-firm-branding-specialization", desc: "Positioning a specialized law firm niche in fintech, space, IP, or arbitration." },
  { name: "AI Prompt Engineering for Legal Drafting in India", href: "/ai-prompt-engineering-legal-drafting", desc: "Prompt architectures, confidentiality toggles, and mandatory verification methods." },
  { name: "First Court Trial Preparation & Advocacy Guide", href: "/how-to-prepare-for-first-trial-advocate-advice", desc: "Witness examination in chief, cross-examination checklists, and marking exhibits." },
  { name: "Managing Difficult Legal Clients & Fee Defaults", href: "/managing-difficult-legal-clients", desc: "Ethical withdrawal under BCI rules, fee default dispute mitigation, and boundary setting." },
  { name: "Managing Lawyer Burnout & Mental Health in India", href: "/managing-lawyer-burnout-india", desc: "Combating high-stress chamber culture, setting boundaries, and peer support networks." },
  { name: "Courtroom & Offline Networking for Indian Lawyers", href: "/offline-networking-for-indian-lawyers", desc: "Corridor etiquette, Bar Association engagement, and building organic cross-referrals." },
  { name: "How Pro Bono Work Grows Your Paid Legal Practice", href: "/how-pro-bono-grows-law-practice", desc: "Building reputation, mastering trial advocacy, and converting public service into paid briefs." },
  { name: "Thought Leadership & Publishing for Indian Lawyers", href: "/thought-leadership-publishing-lawyers", desc: "Academic journal writing, op-eds in national dailies, and conference speaking." },
  { name: "Transitioning Litigation to Corporate Law in India", href: "/transition-litigation-to-corporate-law", desc: "Skill translation from dispute resolution to transactional M&A, due diligence, and contracts." }
];

const commercialGuides = [
  { name: "Startup Registration & Incorporation in India", href: "/startup-registration-incorporation-india-guide", desc: "Pvt Ltd vs LLP vs OPC, SPICe+ MCA filing, DPIIT recognition, and founder vesting." },
  { name: "MSME Payment Recovery & IBC Insolvency Guide", href: "/ibc-msme-payment-recovery-insolvency-guide", desc: "MSME Samadhaan delayed payment filings, Section 9 IBC demand notices, and compounding." },
  { name: "Retainer Agreements for Startups & MSMEs: Guide", href: "/retainer-agreements-startups-msmes-lawyers", desc: "Monthly fixed fee models, scope of work boundaries, and recurring advisory agreements." },
  { name: "Alternative Fee Arrangements (AFAs) for Law Firms", href: "/alternative-fee-arrangements-law-firms", desc: "Value-based billing, capped fees, blended hourly rates, and success fee parameters in India." },
  { name: "Emerging Legal Fields in 2026: AI, Space & ESG Law", href: "/emerging-legal-fields-2026", desc: "Anticipating future regulatory developments, carbon credits, satellite licensing, and AI ethics." }
];

const corePlatformLinks = [
  { name: "AMA Connect Homepage", href: "/", desc: "Central hub for lawyer interviews, legal Q&A, verified draft templates, and legal communities." },
  { name: "About AMA Legal Solutions", href: "/about", desc: "Our founding vision, legal editorial standards, advocate credentials, and mission." },
  { name: "Contact & Intake Helpdesk", href: "/contact", desc: "Direct communication desk for custom legal drafting, pro bono aid, and interview requests." },
  { name: "Legal Insights & Blog Hub", href: "/blog", desc: "Curated research articles, statutory breakdowns, and court judgment commentaries." },
  { name: "Latest Legal News & Court Updates", href: "/news", desc: "Real-time dispatches from the Supreme Court of India, High Courts, and regulatory bodies." },
  { name: "Ask Me Anything (AMA) Legal Q&A", href: "/ask-me-anything", desc: "Interactive community legal forum for citizen queries answered by verified advocates." },
  { name: "Lawyer Interviews & Practice Spotlights", href: "/interviews", desc: "In-depth conversations with leading Indian advocates, partners, and legal academics." },
  { name: "Legal Practice Communities (WhatsApp)", href: "/communities", desc: "Exclusive practice groups across Property, Corporate, Criminal, and Family law." },
  { name: "Client Success Stories & Testimonials", href: "/success-stories", desc: "Real case resolution stories from citizens and business founders supported by AMA Connect." },
  { name: "Secure Online Legal Consultation App", href: "/secure-online-legal-consultation-app", desc: "Overview of our iOS and Android legal assistance mobile applications." },
  { name: "Privacy Policy & Data Security", href: "/privacy-policy", desc: "Information on user data protection, client privilege, and cloud security protocols." }
];

export default async function SitemapPage() {
  let dynamicBlogLinks: { name: string; href: string }[] = [];
  let dynamicInterviewLinks: { name: string; href: string }[] = [];

  try {
    await dbConnect();
    const blogs = await Blog.find({}, { title: 1, slug: 1 }).sort({ created: -1 }).lean();
    dynamicBlogLinks = blogs.map((b: any) => ({
      name: b.title,
      href: `/blog/${b.slug}`
    }));

    const interviews = await LawyerInterview.find({}, { title: 1, slug: 1 }).sort({ createdAt: -1 }).lean();
    dynamicInterviewLinks = interviews.map((i: any) => ({
      name: i.title,
      href: `/interviews/${i.slug}`
    }));
  } catch (error) {
    console.error("[Sitemap HTML] Error fetching dynamic pages:", error);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AMA Connect Complete Legal Architecture & Sitemap Directory",
    "description": "Comprehensive index of Indian legal guides, court manuals, practice portals, and statutory resources.",
    "url": "https://www.amaconnect.in/sitemap"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-dvh bg-[#F5F3EE] flex flex-col font-sans text-[#1E1E1E]">
        <main className="flex-grow pt-10 lg:pt-16 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
          
          {/* SITEMAP HEADER */}
          <div className="border-b border-[#E8E4DE] pb-8 mb-12">
            <span className="font-semibold uppercase tracking-[0.2em] text-[11px] text-[#C9A227] bg-[#C9A227]/10 px-3.5 py-1 rounded-full border border-[#C9A227]/30">
              PLATFORM INDEX & DIRECTORY
            </span>
            <h1 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] mt-4 mb-4">
              Sitemap & Legal Resource <span className="text-[#C9A227] italic font-normal">Architecture Directory</span>
            </h1>
            <p className="text-base sm:text-lg text-[#6B6560] max-w-4xl leading-relaxed">
              Explore the complete architectural index of AMA Connect. This directory provides organized, accessible pathways to all citizen rights manuals, courtroom advocacy handbooks, statutory compliance frameworks, verified contract templates, and legal community portals in India.
            </p>
          </div>

          {/* QUICK JUMP SECTION */}
          <section className="bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs mb-12">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E1E1E] mb-3 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#C9A227]" />
              <span>Directory Quick Navigation</span>
            </h2>
            <div className="flex flex-wrap gap-2 text-xs font-medium">
              <a href="#core-platform" className="px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E8E4DE] hover:border-[#C9A227] hover:text-[#C9A227] transition-colors">
                1. Core Platform & Inquiries
              </a>
              <a href="#citizen-rights" className="px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E8E4DE] hover:border-[#C9A227] hover:text-[#C9A227] transition-colors">
                2. Citizen Legal Rights Guides
              </a>
              <a href="#advocate-practice" className="px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E8E4DE] hover:border-[#C9A227] hover:text-[#C9A227] transition-colors">
                3. Advocate Practice & Chambers
              </a>
              <a href="#commercial-advisory" className="px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E8E4DE] hover:border-[#C9A227] hover:text-[#C9A227] transition-colors">
                4. Corporate & Startup Advisory
              </a>
              {dynamicBlogLinks.length > 0 && (
                <a href="#blog-repository" className="px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E8E4DE] hover:border-[#C9A227] hover:text-[#C9A227] transition-colors">
                  5. Published Legal Articles ({dynamicBlogLinks.length})
                </a>
              )}
            </div>
          </section>

          {/* SECTION 1: CORE PLATFORM LINKS */}
          <section id="core-platform" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227]">
                <Scale className="w-4 h-4" />
              </div>
              <h2 className="font-playfair font-bold text-2xl text-[#1E1E1E]">
                1. Core Portals & Community Hubs
              </h2>
            </div>
            <p className="text-sm text-[#6B6560] mb-6 max-w-3xl leading-relaxed">
              Foundational access points for direct legal inquiries, mobile application downloads, verified lawyer interviews, and structured practice forums.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {corePlatformLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="bg-white p-5 rounded-2xl border border-[#E8E4DE] shadow-2xs hover:shadow-md hover:border-[#C9A227] hover:-translate-y-0.5 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-bold text-[#1E1E1E] group-hover:text-[#C9A227] transition-colors mb-1.5">
                      {link.name}
                    </h3>
                    <p className="text-xs text-[#6B6560] leading-relaxed">
                      {link.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#C9A227] mt-3 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Open Portal →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 2: CITIZEN LEGAL RIGHTS GUIDES */}
          <section id="citizen-rights" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h2 className="font-playfair font-bold text-2xl text-[#1E1E1E]">
                2. Citizen Legal Rights & Public Literacy Guides
              </h2>
            </div>
            <p className="text-sm text-[#6B6560] mb-6 max-w-3xl leading-relaxed">
              Step-by-step procedural handbooks designed to help Indian citizens, consumers, employees, and families resolve disputes, understand statutory rights, and draft formal legal notices under Indian law.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {citizenGuides.map((guide, idx) => (
                <Link
                  key={idx}
                  href={guide.href}
                  className="bg-white p-5 rounded-2xl border border-[#E8E4DE] shadow-2xs hover:shadow-md hover:border-[#C9A227] hover:-translate-y-0.5 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#1E1E1E] group-hover:text-[#C9A227] transition-colors mb-1.5">
                      {guide.name}
                    </h3>
                    <p className="text-xs text-[#6B6560] leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#C9A227] mt-3 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Citizen Guide →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 3: ADVOCATE PRACTICE MANAGEMENT GUIDES */}
          <section id="advocate-practice" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227]">
                <Briefcase className="w-4 h-4" />
              </div>
              <h2 className="font-playfair font-bold text-2xl text-[#1E1E1E]">
                3. Advocate Practice Management & Courtroom Advocacy
              </h2>
            </div>
            <p className="text-sm text-[#6B6560] mb-6 max-w-3xl leading-relaxed">
              Authoritative practice development manuals for enrolled advocates, first-generation lawyers, and chamber heads on appellate brief drafting, court registry etiquette, legal tech integration, and office finance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {advocateGuides.map((guide, idx) => (
                <Link
                  key={idx}
                  href={guide.href}
                  className="bg-white p-5 rounded-2xl border border-[#E8E4DE] shadow-2xs hover:shadow-md hover:border-[#C9A227] hover:-translate-y-0.5 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#1E1E1E] group-hover:text-[#C9A227] transition-colors mb-1.5">
                      {guide.name}
                    </h3>
                    <p className="text-xs text-[#6B6560] leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#C9A227] mt-3 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Practice Manual →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 4: COMMERCIAL & CORPORATE ADVISORY */}
          <section id="commercial-advisory" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227]">
                <FileText className="w-4 h-4" />
              </div>
              <h2 className="font-playfair font-bold text-2xl text-[#1E1E1E]">
                4. Corporate, Startup & Commercial Compliance
              </h2>
            </div>
            <p className="text-sm text-[#6B6560] mb-6 max-w-3xl leading-relaxed">
              Specialized resources for corporate counsels, startup founders, and commercial litigators on incorporation, alternative fee models, MSME debt recovery, and emerging legal disciplines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {commercialGuides.map((guide, idx) => (
                <Link
                  key={idx}
                  href={guide.href}
                  className="bg-white p-5 rounded-2xl border border-[#E8E4DE] shadow-2xs hover:shadow-md hover:border-[#C9A227] hover:-translate-y-0.5 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#1E1E1E] group-hover:text-[#C9A227] transition-colors mb-1.5">
                      {guide.name}
                    </h3>
                    <p className="text-xs text-[#6B6560] leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#C9A227] mt-3 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Advisory Guide →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 5: DYNAMIC BLOG ARTICLES */}
          {dynamicBlogLinks.length > 0 && (
            <section id="blog-repository" className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227]">
                  <Users className="w-4 h-4" />
                </div>
                <h2 className="font-playfair font-bold text-2xl text-[#1E1E1E]">
                  5. Published Legal Articles & Precedent Analyses ({dynamicBlogLinks.length})
                </h2>
              </div>
              <p className="text-sm text-[#6B6560] mb-6 max-w-3xl leading-relaxed">
                Direct index of scholarly case commentaries, statutory analyses, and practical litigation reviews published on the AMA Connect blog.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {dynamicBlogLinks.map((blog, idx) => (
                  <Link
                    key={idx}
                    href={blog.href}
                    className="bg-white p-3.5 rounded-xl border border-[#E8E4DE] hover:border-[#C9A227] hover:text-[#C9A227] text-xs font-medium text-gray-800 transition-colors line-clamp-2"
                  >
                    {blog.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 6: DYNAMIC LAWYER INTERVIEWS */}
          {dynamicInterviewLinks.length > 0 && (
            <section id="interview-repository" className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227]">
                  <Search className="w-4 h-4" />
                </div>
                <h2 className="font-playfair font-bold text-2xl text-[#1E1E1E]">
                  6. Lawyer Interviews & Advocate Spotlights ({dynamicInterviewLinks.length})
                </h2>
              </div>
              <p className="text-sm text-[#6B6560] mb-6 max-w-3xl leading-relaxed">
                Direct index of in-depth career conversations, courtroom strategies, and chamber management insights with leading Indian practitioners.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {dynamicInterviewLinks.map((interview, idx) => (
                  <Link
                    key={idx}
                    href={interview.href}
                    className="bg-white p-3.5 rounded-xl border border-[#E8E4DE] hover:border-[#C9A227] hover:text-[#C9A227] text-xs font-medium text-gray-800 transition-colors line-clamp-2"
                  >
                    {interview.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

        </main>
        <Footer />
      </div>
    </>
  );
}
