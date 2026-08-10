import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import dbConnect from "@/lib/dbConnect";
import { Blog, LawyerInterview } from "@/lib/models";

export const metadata = {
  title: "Sitemap | AMAConnect",
  description: "Complete index of AMAConnect articles and resources.",
};

export default async function SitemapPage() {
  const staticLinks = [
    { name: "Homepage", href: "/" },
    { name: "Contact Us", href: "/contact" },
    { name: "About Us", href: "/about" },
    { name: "Communities", href: "/communities" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Secure Online Legal Consultation App", href: "/secure-online-legal-consultation-app" },
    { name: "Know Your Rights Legal Guide", href: "/know-your-rights-legal-guide" },
    { name: "First Court Trial Preparation", href: "/how-to-prepare-for-first-trial-advocate-advice" },
    { name: "Loan App Harassment Settlement", href: "/loan-app-debt-settlement-harassment-legal-help" },
    { name: "Mutual Consent Divorce Guide", href: "/how-to-file-divorce-india-legal-guide" },
    { name: "Startup Registration & Incorporation", href: "/startup-registration-incorporation-india-guide" },
    { name: "Property Dispute Resolution Remedies", href: "/property-dispute-resolution-india-legal-remedies" },
    { name: "Homebuyer RERA Builder Delay Remedies", href: "/homebuyer-rights-rera-builder-delay-remedies" },
    { name: "Tenant Eviction & Deposit Disputes", href: "/tenant-rights-eviction-security-deposit-disputes" },
    { name: "Patient Rights & Medical Negligence", href: "/patient-rights-medical-negligence-legal-help" },
    { name: "Cyber Fraud & Online Scams Recourse", href: "/cyber-fraud-online-scams-legal-recourse" },
    { name: "Workplace Safety & POSH Act Guide", href: "/posh-act-workplace-safety-employee-guide" },
    { name: "Draft Legal Notice Guide", href: "/how-to-draft-legal-notice-india-guide" },
    { name: "Motor Accident Compensation Claims", href: "/motor-accident-claims-compensation-guide" },
    { name: "Consumer Protection & Defective Goods", href: "/consumer-protection-ecommerce-defective-goods-guide" },
    { name: "Bail Procedure & Police Custody Rights", href: "/bail-procedure-arrest-rights-police-custody-guide" },
    { name: "MSME Payment Recovery & Insolvency", href: "/ibc-msme-payment-recovery-insolvency-guide" },
    { name: "Cheque Bounce Section 138 NI Act Guide", href: "/cheque-bounce-legal-notice-section-138-guide" },
    { name: "Lawyer Branding & Growth", href: "/lawyer-branding-get-more-clients" },
    { name: "Pro Bono & Free Legal Aid", href: "/pro-bono-free-legal-aid" },
    { name: "Blogs & News Hub", href: "/blog" },
    { name: "Expert Interviews", href: "/interviews" },
    { name: "Alternative Legal Careers in India", href: "/alternative-legal-careers-india" },
    { name: "Transition Litigation & Corporate Law", href: "/transition-litigation-to-corporate-law" },
    { name: "Emerging Legal Fields in 2026", href: "/emerging-legal-fields-2026" },
    { name: "Law Firm Alternative Fee Models", href: "/alternative-fee-arrangements-law-firms" },
    { name: "Ethical Social Media for Advocates", href: "/ethical-social-media-marketing-for-lawyers" },
    { name: "Managing Lawyer Burnout in India", href: "/managing-lawyer-burnout-india" },
    { name: "Dealing with Difficult Legal Clients", href: "/managing-difficult-legal-clients" },
    { name: "AI Prompting for Legal Drafting", href: "/ai-prompt-engineering-legal-drafting" },
    { name: "Grow Practice via Pro Bono Cases", href: "/how-pro-bono-grows-law-practice" },
    { name: "Art of Court Corridor Networking", href: "/offline-networking-for-indian-lawyers" },
    // 10 New Pages
    { name: "Setting Up Law Chambers in India", href: "/setting-up-law-chamber-india" },
    { name: "Virtual Chambers & Online Legal Practices", href: "/virtual-law-chambers-india" },
    { name: "Client Onboarding & Qualification", href: "/client-onboarding-lead-qualification-lawyers" },
    { name: "Dual Qualifications for Indian Lawyers", href: "/dual-qualifications-indian-lawyers" },
    { name: "Boutique Law Firm Branding & Niche", href: "/boutique-law-firm-branding-specialization" },
    { name: "Retainer Agreements for Startups & MSMEs", href: "/retainer-agreements-startups-msmes-lawyers" },
    { name: "Case Record Management for Advocates", href: "/case-record-management-indian-advocates" },
    { name: "Continuing Legal Education & Upskilling", href: "/continuing-legal-education-skills-lawyers" },
    { name: "Registry & Court Etiquette Guide", href: "/courtroom-registry-etiquette-young-advocates" },
    { name: "Thought Leadership & Publishing", href: "/thought-leadership-publishing-lawyers" },
    { name: "Essential Legal Tech Software", href: "/essential-legal-tech-software-indian-lawyers" },
    { name: "Drafting Supreme Court SLPs", href: "/drafting-supreme-court-slp-article-136-guide" },
    { name: "Advanced Legal Research & Case Briefing", href: "/effective-legal-research-case-briefing-advocates" },
    { name: "Financial Management & Tax Planning", href: "/financial-management-tax-planning-law-firms-india" },
    { name: "Transitioning to High Court Practice", href: "/transitioning-trial-court-to-high-court-practice" },
  ];

  let dynamicLinks: { name: string; href: string }[] = [];

  try {
    await dbConnect();
    const blogs = await Blog.find({}, { title: 1, slug: 1 }).lean();
    const blogLinks = blogs.map((b: any) => ({
      name: b.title,
      href: `/blog/${b.slug}`
    }));

    const interviews = await LawyerInterview.find({}, { title: 1, slug: 1 }).lean();
    const interviewLinks = interviews.map((i: any) => ({
      name: i.title,
      href: `/interviews/${i.slug}`
    }));

    dynamicLinks = [...blogLinks, ...interviewLinks];
  } catch (error) {
    console.error("[Sitemap HTML] Error fetching dynamic pages:", error);
  }

  const allLinks = [...staticLinks, ...dynamicLinks];

  return (
    <div className="min-h-dvh bg-[#FDFCF7] flex flex-col font-sans">
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-black text-[#2D2319] mb-8 border-b border-gray-200 pb-4">
          Sitemap
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.href} 
              className="text-sm font-medium text-gray-700 hover:text-[#D4AF37] hover:underline bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-colors flex items-center"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
