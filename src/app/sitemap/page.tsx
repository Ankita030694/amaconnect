import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sitemap & Legal Guides Directory | AMAConnect",
  description: "Browse the complete directory of AMAConnect core services, professional legal solutions, and comprehensive legal query guides in India.",
};

interface SitemapLink {
  name: string;
  href: string;
  description: string;
}

interface SitemapCategory {
  title: string;
  icon: string;
  description: string;
  links: SitemapLink[];
}

export default function SitemapPage() {
  const categories: SitemapCategory[] = [
    {
      title: "Core Platform Navigation",
      icon: "🌐",
      description: "Quick links to navigate our primary platform pages and user community forums.",
      links: [
        { name: "Homepage", href: "/", description: "Access the primary portal, app features, and download details." },
        { name: "About Us", href: "/about", description: "Learn about AMA's mission, values, and pro bono legal assistance." },
        { name: "Communities", href: "/communities", description: "Connect and discuss legal queries with peers and advocates." },
        { name: "AMA Q&A Portal", href: "/ask-me-anything", description: "Submit anonymous legal queries and view verified advocate responses." },
        { name: "Expert Interviews", href: "/interviews", description: "Read insightful interviews with leading Indian legal minds." },
        { name: "Blogs & News Hub", href: "/blog", description: "Browse updates on changing laws, regulatory updates, and legal articles." },
        { name: "Contact Support", href: "/contact", description: "Get in touch for client assistance, firm support, and general queries." },
        { name: "Success Stories", href: "/success-stories", description: "Explore details of how we resolved user disputes and inquiries." },
      ],
    },
    {
      title: "Solutions & Professional Services",
      icon: "💼",
      description: "Professional tools and consultation portals tailored for clients and advocates.",
      links: [
        { name: "Secure Online Consultation App", href: "/secure-online-legal-consultation-app", description: "Consult with verified legal advisors securely on mobile." },
        { name: "Lawyer Branding & Growth", href: "/lawyer-branding-get-more-clients", description: "Branding, client acquisition, and lead intake tools for advocates." },
        { name: "Pro Bono & Free Legal Aid", href: "/pro-bono-free-legal-aid", description: "Access free legal counseling, representation, and helpline resources." },
      ],
    },
    {
      title: "Comprehensive Legal Guides & Directories",
      icon: "⚖️",
      description: "Step-by-step statutory timelines, rights, and checklists for major Indian civil & criminal scenarios.",
      links: [
        { name: "Know Your Rights Legal Guide", href: "/know-your-rights-legal-guide", description: "A primer on basic civil rights, police custody guidelines, and consumer remedies." },
        { name: "First Court Trial Preparation", href: "/how-to-prepare-for-first-trial-advocate-advice", description: "Practical advice on courtroom behavior, advocate interactions, and evidence management." },
        { name: "Loan App Harassment Settlement", href: "/loan-app-debt-settlement-harassment-legal-help", description: "Legal resources, recovery helpline numbers, and debt settlement strategies." },
        { name: "Mutual Consent Divorce Guide", href: "/how-to-file-divorce-india-legal-guide", description: "Understand separation periods, alimony laws, and petition drafting procedures." },
        { name: "Startup Registration & Incorporation", href: "/startup-registration-incorporation-india-guide", description: "Company registration pathways, CA consulting, and DPIIT compliance." },
        { name: "Property Dispute Resolution Remedies", href: "/property-dispute-resolution-india-legal-remedies", description: "Injunction suits, land registration trace searches, and mutation guidelines." },
        { name: "Draft Legal Notice Guide", href: "/how-to-draft-legal-notice-india-guide", description: "Prerequisites, legal notice formats, and guidelines on sending replies." },
        { name: "Patient Rights & Medical Negligence", href: "/patient-rights-medical-negligence-legal-help", description: "Informed consent rules, consumer court claims, and medical record request guidelines." },
        { name: "Motor Accident Compensation Claims", href: "/motor-accident-claims-compensation-guide", description: "Filing MACT claims, police report procedures, and calculating claim payouts." },
        { name: "Cyber Fraud & Online Scams Recourse", href: "/cyber-fraud-online-scams-legal-recourse", description: "Reporting transactions to Cyber Cell, financial refund freezes, and phishing helpline." },
        { name: "Homebuyer RERA Builder Delay Remedies", href: "/homebuyer-rights-rera-builder-delay-remedies", description: "Form M/N filings, delay interest calculations, and developer enforcement actions." },
        { name: "Workplace Safety & POSH Act Guide", href: "/posh-act-workplace-safety-employee-guide", description: "Internal Complaints Committee layout, harassment definition, and compliance checklist." },
        { name: "Consumer Protection & Defective Goods", href: "/consumer-protection-ecommerce-defective-goods-guide", description: "Filing claims against sellers, refund policies, and unfair ecommerce practices." },
        { name: "Tenant Eviction & Deposit Disputes", href: "/tenant-rights-eviction-security-deposit-disputes", description: "Filing eviction objections, rent control acts, and securing deposit refund releases." },
        { name: "MSME Payment Recovery & Insolvency", href: "/ibc-msme-payment-recovery-insolvency-guide", description: "MSME Samadhaan filings, payment recovery limits, and insolvency procedures." },
        { name: "Bail Procedure & Police Custody Rights", href: "/bail-procedure-arrest-rights-police-custody-guide", description: "Anticipatory bail details, arrest rights, and 24-hour magistrate appearance rule." },
        { name: "Cheque Bounce Section 138 NI Act Guide", href: "/cheque-bounce-legal-notice-section-138-guide", description: "Demand notices, timeline limitation trackers, and criminal recovery options." },
      ],
    },
    {
      title: "Advocate Resources & Professional Growth",
      icon: "📚",
      description: "Pricing strategies, practice building guides, mental health advice, and tech guidelines for Indian lawyers.",
      links: [
        { name: "Alternative Legal Careers in India", href: "/alternative-legal-careers-india", description: "Careers in Legal Tech, Legal Operations, and Policy Research outside litigation." },
        { name: "Transition Litigation & Corporate Law", href: "/transition-litigation-to-corporate-law", description: "Step-by-step strategies for switching practice areas between firms and independent litigation." },
        { name: "Emerging Legal Fields in 2026", href: "/emerging-legal-fields-2026", description: "Futuristic specializations including Outer Space Agreements, AI Law, and ESG." },
        { name: "Law Firm alternative Fee Models", href: "/alternative-fee-arrangements-law-firms", description: "Move away from hourly billing to fixed-fee and retainer pricing models." },
        { name: "Ethical Social Media for Advocates", href: "/ethical-social-media-marketing-for-lawyers", description: "Compliant marketing guidelines under Bar Council of India Rule 36 rules." },
        { name: "Managing Lawyer Burnout in India", href: "/managing-lawyer-burnout-india", description: "An analysis of mental health struggles in courts and stress management tips." },
        { name: "Dealing with Difficult Legal Clients", href: "/managing-difficult-legal-clients", description: "Retainer guidelines, communication boundaries, and ethical case withdrawals." },
        { name: "AI Prompting for Legal Drafting", href: "/ai-prompt-engineering-legal-drafting", description: "ChatGPT and Gemini prompts for contract drafting and research confidentiality." },
        { name: "Grow Practice via Pro Bono Cases", href: "/how-pro-bono-grows-law-practice", description: "Use legal aid cases to build trial expertise and secure commercial referrals." },
        { name: "Art of Court corridor Networking", href: "/offline-networking-for-indian-lawyers", description: "Corridor interactions and bar association networking for first-generation advocates." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF7] flex flex-col font-sans">

      <main className="flex-grow py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#D4AF37] text-xs sm:text-sm font-bold uppercase tracking-widest bg-white shadow-sm border border-[#D4AF37]/25 rounded-full px-4.5 py-1.5 inline-block mb-4">
              Website Index &amp; Resources
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D2319] tracking-tight leading-tight mb-4">
              AMAConnect <span className="text-[#D4AF37]">Sitemap</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Find files, platform segments, professional consultation channels, and statutory legal guides to answer your queries and protect your interests in India.
            </p>
          </div>

          {/* Grid Layout of Categories */}
          <div className="flex flex-col gap-12 sm:gap-16">
            {categories.map((category, index) => (
              <section 
                key={index} 
                className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-8 border-b border-gray-50 pb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDFBF5] border border-[#D4AF37]/20 flex items-center justify-center text-2xl shadow-sm">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#2D2319] tracking-tight leading-snug">
                      {category.title}
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {category.links.map((link, linkIndex) => (
                    <div 
                      key={linkIndex}
                      className="group flex flex-col justify-between p-4 rounded-2xl hover:bg-[#FDFCF9] border border-transparent hover:border-[#D4AF37]/15 transition-all duration-300"
                    >
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors leading-snug">
                          <Link href={link.href} className="hover:underline flex items-center gap-1">
                            {link.name}
                            <span className="inline-block transform transition-transform group-hover:translate-x-0.5 text-xs text-[#D4AF37] opacity-0 group-hover:opacity-100">
                              &rarr;
                            </span>
                          </Link>
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed mt-2 text-justify">
                          {link.description}
                        </p>
                      </div>
                      <div className="mt-4">
                        <Link 
                          href={link.href}
                          className="text-[10px] uppercase tracking-wider font-extrabold text-[#D4AF37] hover:text-[#b8952f] transition-colors"
                        >
                          Visit Link &rarr;
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
