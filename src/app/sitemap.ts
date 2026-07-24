import { MetadataRoute } from "next";
import dbConnect from "@/lib/dbConnect";
import { Blog, LawyerInterview } from "@/lib/models";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://amaconnect.in";
  const currentDate = new Date();

  // 1. Static Pages
  const staticPages = [
    "",
    "/contact",
    "/about",
    "/communities",
    "/success-stories",
    "/secure-online-legal-consultation-app",
    "/know-your-rights-legal-guide",
    "/how-to-prepare-for-first-trial-advocate-advice",
    "/loan-app-debt-settlement-harassment-legal-help",
    "/how-to-file-divorce-india-legal-guide",
    "/startup-registration-incorporation-india-guide",
    "/property-dispute-resolution-india-legal-remedies",
    "/homebuyer-rights-rera-builder-delay-remedies",
    "/tenant-rights-eviction-security-deposit-disputes",
    "/patient-rights-medical-negligence-legal-help",
    "/cyber-fraud-online-scams-legal-recourse",
    "/posh-act-workplace-safety-employee-guide",
    "/how-to-draft-legal-notice-india-guide",
    "/motor-accident-claims-compensation-guide",
    "/consumer-protection-ecommerce-defective-goods-guide",
    "/bail-procedure-arrest-rights-police-custody-guide",
    "/ibc-msme-payment-recovery-insolvency-guide",
    "/cheque-bounce-legal-notice-section-138-guide",
    "/ip-protection-trademark-copyright-registration-guide",
    "/rti-filing-online-right-to-information-guide",
    "/will-drafting-family-succession-probate-india-guide",
    "/employee-rights-unfair-dismissal-salary-recovery-guide",
    "/domestic-violence-protection-women-rights-legal-guide",
    "/insurance-claim-rejection-dispute-resolution-guide",
    "/cyber-defamation-online-harassment-legal-recourse",
    "/child-adoption-custody-guardianship-india-guide",
    "/senior-citizens-maintenance-welfare-legal-rights-guide",
    "/partnership-deed-cofounder-dispute-resolution-guide",
    "/traffic-challan-dispute-driving-license-laws-guide",
    "/gift-deed-property-transfer-family-relinquishment-guide",
    "/epf-withdrawal-pension-rules-pf-transfer-guide",
    "/illegal-construction-local-authority-demolition-notice-guide",
    "/mutual-consent-divorce-alimony-child-support-guide",
    "/commercial-lease-agreement-shop-rental-disputes-guide",
    "/public-nuisance-noise-pollution-environmental-complaint-guide",
    "/vehicle-theft-insurance-claim-police-untraced-report-guide",
    "/passport-delay-rejection-police-verification-legal-remedies",
    "/criminal-breach-of-trust-cheating-ipc-legal-recourse",
    "/income-tax-notice-section-148-appeal-remedies-guide",
    "/hospital-billing-dispute-patient-detention-legal-recourse",
    "/maternity-benefit-act-pregnancy-discrimination-legal-guide",
    "/nri-property-bank-account-fema-rules-india-guide",
    "/commercial-money-recovery-summary-suit-order-37-guide",
    "/student-educational-rights-anti-ragging-admission-disputes-guide",
    "/aadhaar-card-data-privacy-correction-biometric-lock-guide",
    "/animal-rights-pet-owner-laws-street-animal-protection-guide",
    "/ndps-act-drug-possession-quantities-rehabilitation-legal-guide",
    "/franchise-agreement-business-disputes-fdd-disclosure-guide",
    "/lawyer-branding-get-more-clients",
    "/pro-bono-free-legal-aid",
    "/blog",
    "/interviews",
    "/alternative-legal-careers-india",
    "/transition-litigation-to-corporate-law",
    "/emerging-legal-fields-2026",
    "/alternative-fee-arrangements-law-firms",
    "/ethical-social-media-marketing-for-lawyers",
    "/managing-lawyer-burnout-india",
    "/managing-difficult-legal-clients",
    "/ai-prompt-engineering-legal-drafting",
    "/how-pro-bono-grows-law-practice",
    "/offline-networking-for-indian-lawyers",
    "/setting-up-law-chamber-india",
    "/virtual-law-chambers-india",
    "/client-onboarding-lead-qualification-lawyers",
    "/dual-qualifications-indian-lawyers",
    "/boutique-law-firm-branding-specialization",
    "/retainer-agreements-startups-msmes-lawyers",
    "/case-record-management-indian-advocates",
    "/continuing-legal-education-skills-lawyers",
    "/courtroom-registry-etiquette-young-advocates",
    "/thought-leadership-publishing-lawyers",
    "/essential-legal-tech-software-indian-lawyers",
    "/drafting-supreme-court-slp-article-136-guide",
    "/effective-legal-research-case-briefing-advocates",
    "/financial-management-tax-planning-law-firms-india",
    "/transitioning-trial-court-to-high-court-practice",
    "/privacy-policy",
    "/sitemap",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic Blogs from MongoDB
  let blogPages: any[] = [];
  try {
    await dbConnect();
    const blogs = await Blog.find({}, { slug: 1, created: 1 }).lean();
    blogPages = blogs.map((blog: any) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.created ? new Date(blog.created) : currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch (err) {
    console.error("[Sitemap Generator] Failed to fetch dynamic blogs:", err);
  }

  // 3. Dynamic Lawyer Interviews from MongoDB
  let interviewPages: any[] = [];
  try {
    await dbConnect();
    const interviews = await LawyerInterview.find({}, { slug: 1, created: 1 }).lean();
    interviewPages = interviews.map((interview: any) => ({
      url: `${baseUrl}/interviews/${interview.slug}`,
      lastModified: interview.created ? new Date(interview.created) : currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch (err) {
    console.error("[Sitemap Generator] Failed to fetch dynamic lawyer interviews:", err);
  }

  return [...staticPages, ...blogPages, ...interviewPages];
}
