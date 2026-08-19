import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import LawyerFaqAccordion from "@/components/LawyerFaqAccordion";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Essential Legal Tech Stack & Software for Lawyers",
  description:
    "A comprehensive guide on adopting practice management software, document automation, secure cloud storage, and accounting tools to modernize a law chamber.",
  alternates: {
    canonical: "https://www.amaconnect.in/essential-legal-tech-software-indian-lawyers",
  },
  openGraph: {
    title: "Essential Legal Tech Stack & Software for Lawyers",
    description:
      "A comprehensive guide on adopting practice management software, document automation, secure cloud storage, and accounting tools to modernize a law chamber.",
    url: "https://www.amaconnect.in/essential-legal-tech-software-indian-lawyers",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function LegalTechSoftwarePage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/essential-legal-tech-software-indian-lawyers`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Essential Legal Tech Stack & Software for Indian Lawyers",
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
    datePublished: "2026-07-16T00:00:00Z",
    dateModified: new Date().toISOString(),
  };

  const faqs = [
    {
      question: "Which practice management software is best suited for Indian litigation?",
      answer: "Platforms like PracticeLeague and ManageMyLawsuits are highly popular because they integrate deeply with Indian court cause lists, automatically fetching case updates and next hearing dates directly from e-Courts and High Court registries."
    },
    {
      question: "Is it legally safe to store client documents on cloud servers like Google Drive?",
      answer: "Yes, provided the cloud service complies with standard encryption protocols and the advocate enables two-factor authentication. However, for highly sensitive corporate or criminal matters, utilizing end-to-end encrypted storage solutions or self-hosted servers is highly recommended to protect attorney-client privilege."
    },
    {
      question: "How can automation software reduce legal drafting time?",
      answer: "Document automation tools utilize pre-approved templates with variable fields. Instead of manually copying and pasting client details across multiple pages of a writ petition or legal notice, automation software populates the entire document instantly based on a single intake form, reducing typographical errors by up to ninety percent."
    },
    {
      question: "Do I need specialized accounting software for my independent practice?",
      answer: "While basic spreadsheets work for early-stage practitioners, using software like Zoho Books or Tally Prime simplifies tracking professional fee receipts, managing reimbursable court expenses, and generating GST-compliant invoices seamlessly."
    },
    {
      question: "What is the average monthly budget for a basic legal tech stack?",
      answer: "A solitary practitioner can assemble a robust tech stack (including case tracking, cloud storage, and basic accounting) for approximately 2,000 to 4,000 Rupees per month, making it highly affordable and offering immense returns on time saved."
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
    name: "Legal Tech Software Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "A comprehensive guide on adopting practice management software, document automation, and accounting tools for Indian law chambers.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "135",
      reviewCount: "5",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Legal Tech Software Guide",
        "item": pageUrl,
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-dvh bg-white">
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="rating-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Custom Hero Section matching POSH Act layout */}
      <section className="relative w-full bg-black text-white font-sans py-10 sm:py-16 flex flex-col justify-center items-center text-center px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full mb-6 border border-[#D4AF37]/35">
            Advocate Technology Resources
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
            Essential Legal Tech Stack &amp; <span className="text-[#D4AF37]">Software for Lawyers</span>
          </h1>
          <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
            A comprehensive guide on adopting practice management software, document automation, secure cloud storage, and accounting tools to modernize a traditional Indian litigation chamber.
          </p>
        </div>
      </section>

      {/* Main Content Layout Grid */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
          
          {/* Left Column: Scroll Spy Nav with no numbers in titles */}
          <aside className="hidden lg:block sticky top-24">
            <ScrollSpyNav
              sections={[
                { id: "tech-intro", title: "Tech Introduction" },
                { id: "practice-management", title: "Practice Management" },
                { id: "document-automation", title: "Document Automation" },
                { id: "cloud-storage", title: "Secure Cloud Storage" },
                { id: "accounting-tools", title: "Accounting Tools" },
                { id: "tech-checklist", title: "Setup Checklist" },
                { id: "software-matrix", title: "Software Cost Matrix" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
            
            {/* Hook Alert Box */}
            <div className="bg-[#FAF9F5] border-l-4 border-[#D4AF37] p-6 rounded-r-3xl mb-10 shadow-sm">
              <p className="text-[#2D2219] font-medium text-sm sm:text-base leading-relaxed">
                Modernizing a law practice is no longer a luxury but an absolute operational necessity. By adopting the right legal technology stack, advocates can reduce administrative overhead by up to forty percent, allowing them to focus entirely on core legal strategy and client representation in the courtroom.
              </p>
            </div>

            {/* Content Sections */}
            <section id="tech-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section Introduction
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                The Transition from Paper to Digital
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The traditional Indian law chamber has historically relied heavily on physical paper files, manual cause list tracking, and localized server storage. However, the sheer volume of litigation data and the rapid transition towards e-filing systems in Indian High Courts and the Supreme Court mandate a fundamental shift in how advocates manage their daily operations. Legal technology is designed to streamline these processes, eliminating repetitive manual tasks and mitigating the risk of human error.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Implementing a legal tech stack involves integrating specialized software solutions tailored for case management, secure data storage, client communications, and financial accounting. When carefully selected, these tools act as force multipliers for individual practitioners and boutique law firms, enabling them to handle complex litigation portfolios that would typically require a massive administrative staff.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                A critical aspect of adopting legal tech is ensuring compliance with data protection laws. Advocates handle highly sensitive information covered under attorney-client privilege. Therefore, the selected software platforms must adhere strictly to established encryption standards, access controls, and data residency protocols.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                This comprehensive guide explores the essential components of a modern legal technology stack, providing actionable insights into practice management solutions, automated drafting mechanics, encrypted cloud infrastructures, and specialized accounting systems that empower Indian legal professionals.
              </p>
            </section>

            <section id="practice-management" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Core Operations
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Practice Management Software
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                At the heart of any modern law chamber sits the Practice Management Software. This application functions as the central nervous system of the practice, consolidating client contacts, case files, hearing schedules, and billing information into a single unified dashboard. For litigation lawyers, specialized Indian software solutions offer a distinct advantage over generic international platforms.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Platforms like ManageMyLawsuits and PracticeLeague are specifically engineered to integrate with the Indian judicial system. They possess the capability to automatically scrape and sync cause lists from district courts, tribunals, and High Courts. This automation completely eliminates the need for junior clerks to manually check court websites every evening, ensuring that no hearing date or critical order is ever missed due to administrative oversight.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Furthermore, robust practice management tools feature automated client communication modules. When a case is listed or an order is uploaded, the software can automatically dispatch a standardized SMS or email update to the respective client. This proactive communication significantly enhances client satisfaction, reducing the barrage of routine status inquiry calls that consume valuable billable hours.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Effective task delegation is another crucial feature. Senior advocates can assign specific legal research parameters or drafting deadlines to juniors within the platform. The software tracks task completion statuses, sends automated reminders, and maintains a comprehensive audit trail of who modified which document and when.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                When evaluating practice management software, advocates should prioritize solutions that offer robust mobile applications. Since litigators spend a substantial portion of their day in court corridors, having secure access to case notes, contact directories, and synchronized calendars directly on their smartphones is non-negotiable.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Transitioning to a digital practice management system requires an initial investment of time for data migration and team training. However, the operational clarity, reduced stress, and elimination of misplaced physical files generate immediate and compounding returns on investment.
              </p>
            </section>

            <section id="document-automation" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Drafting Efficiency
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Document Automation Systems
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Legal drafting constitutes a significant portion of an advocate's daily workload. While complex appellate synopses require deep analytical reasoning and manual drafting, a vast majority of routine legal documents are inherently repetitive. Standard notices, non-disclosure agreements, basic affidavits, and standard rental leases often contain identical structural boilerplate text, differing only in client specifics.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Document automation software transforms this tedious process. Instead of utilizing the error-prone 'find and replace' method in Microsoft Word, advocates create master templates embedded with dynamic variable fields. During the drafting phase, the user simply fills out a clean, digital questionnaire containing the client's name, address, relevant dates, and specific monetary figures.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The software instantly injects these variables into the master template, formatting the document perfectly in seconds. This automation practically eradicates embarrassing typographical errors, such as accidentally leaving a previous client's name inside a newly drafted contract. It ensures absolute consistency in formatting and stylistic choices across all chamber outputs.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                More advanced document automation tools integrate conditional logic. For example, a legal notice template can be programmed to automatically insert a specific statutory paragraph only if a particular checkbox is selected during the questionnaire phase. This allows a single master template to adapt dynamically to various factual scenarios without requiring manual structural editing.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                While setting up these master templates demands substantial initial effort to identify and encode all variables correctly, the long-term efficiency gains are staggering. Junior associates who previously spent hours drafting standard notices can redirect their energy toward complex legal research and substantive argumentation.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Modern automation platforms often integrate directly with practice management software. This allows the system to pull client data directly from the central database, completely eliminating the need for any manual data entry when generating standard correspondence or court formats.
              </p>
            </section>

            <section id="cloud-storage" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Data Security
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Secure Cloud Storage Infrastructure
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                The digitization of case files requires a robust, accessible, and uncompromisingly secure storage infrastructure. Relying exclusively on physical hard drives or localized office servers presents severe risks of data loss due to hardware failure, theft, or localized physical damage. Cloud storage solutions have emerged as the standard protocol for modern legal data management.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Commercial cloud platforms like Google Workspace or Microsoft OneDrive offer excellent baseline features, including synchronized access across multiple devices, collaborative real-time document editing, and automated backup redundancies. For many solo practitioners, these platforms, when secured with mandatory two-factor authentication, provide a sufficient balance of usability and security.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                However, advocates handling highly sensitive corporate litigation, intellectual property disputes, or criminal defense matters require a higher threshold of security to preserve strict attorney-client privilege. In these scenarios, adopting cloud solutions that offer zero-knowledge, end-to-end encryption is highly advisable. These specialized platforms ensure that the service provider themselves cannot decrypt or access the stored data under any circumstances.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                A critical component of cloud storage management is establishing a strict organizational taxonomy. Digital files must be categorized systematically using standardized naming conventions that include the client identifier, case type, and document date. Without rigorous structural discipline, cloud storage rapidly degrades into a chaotic, unsearchable repository.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Furthermore, administrators must strictly manage access permissions. Junior associates or interns should only be granted access to the specific case folders they are actively working on, rather than having unrestricted access to the entire chamber database. Access logs must be monitored periodically to detect any unauthorized data retrieval attempts.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Adopting cloud infrastructure enables the implementation of a truly paperless office, allowing advocates to pull up annexures, evidential photographs, and drafted pleadings instantly on a tablet during a fast-paced court hearing without fumbling through massive physical files.
              </p>
            </section>

            <section id="accounting-tools" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Financial Tracking
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Specialized Accounting Tools
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Law firm accounting possesses unique complexities that standard retail accounting software often fails to address adequately. Advocates frequently handle client retainer funds, manage reimbursable court expenses, process out-of-pocket clerkage fees, and deal with staggered payment milestones linked to unpredictable litigation progress.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Adopting specialized legal accounting software ensures absolute financial compliance and operational transparency. These platforms allow practitioners to maintain strict separation between operational business funds and client trust accounts. Commingling these funds is not only an ethical violation but also creates massive complications during tax audits.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Modern accounting tools simplify the generation of professional, GST-compliant invoices. When an advocate inputs a billable milestone, the software automatically calculates the applicable tax rates, generates a formatted PDF invoice, and dispatches it securely to the client. Integrated payment gateways further streamline collections by allowing clients to pay directly via embedded digital links.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Expense tracking is equally crucial. Litigators constantly incur micro-expenses for photocopying, registry stamps, and courier dispatches. Mobile-first accounting tools allow advocates to instantly photograph receipts and categorize them against specific client ledger codes while still at the court complex, preventing massive backlog and unbilled expenses at the end of the month.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                By maintaining precise digital financial records, advocates can generate comprehensive profitability reports. These analytical insights reveal which practice areas yield the highest margins, which clients consistenly delay payments, and where operational overheads need trimming, thereby transforming the law chamber into a highly optimized business entity.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                For solo practitioners in India, cloud-based accounting solutions like Zoho Books or specialized modules within Indian legal practice management software offer the most seamless and compliant approach to navigating financial complexities.
              </p>
            </section>

            <section id="tech-checklist" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Implementation Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Software Integration Checklist
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Deploying a new legal technology stack requires systematic implementation to ensure seamless adoption by chamber staff. Follow these structured steps to transition effectively.
              </p>

              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#2D2219] mb-4">Setup Checklist</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Audit Current Workflows", desc: "Identify all administrative bottlenecks. Map out exactly how cases are currently tracked, documents drafted, and invoices generated to understand where automation is needed most." },
                    { step: "2", title: "Select Core Software", desc: "Evaluate and purchase primary practice management software. Prioritize platforms that offer robust Indian court cause list integration and mobile accessibility." },
                    { step: "3", title: "Data Migration Phase", desc: "Systematically export existing client contacts and active case details into the new centralized database. Ensure all active matters are accurately logged." },
                    { step: "4", title: "Staff Training Protocol", desc: "Conduct mandatory training sessions for junior associates and clerks. Establish a strict chamber policy mandating that all new updates must be logged into the software exclusively." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="software-matrix" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Financial Evaluation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Software Cost Matrix
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Understanding the pricing models for different software categories allows advocates to scale their tech stack alongside their practice revenue effectively.
              </p>

              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="py-4 px-6 font-bold text-sm text-gray-900">Software Category</th>
                      <th className="py-4 px-6 font-bold text-sm text-gray-900">Primary Function</th>
                      <th className="py-4 px-6 font-bold text-sm text-gray-900">Estimated Monthly Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 text-gray-700 font-medium">Practice Management</td>
                      <td className="py-4 px-6 text-gray-600">Cause list tracking, calendar sync, client database.</td>
                      <td className="py-4 px-6 text-gray-600">₹800 to ₹2,500 per user</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 text-gray-700 font-medium">Cloud Storage</td>
                      <td className="py-4 px-6 text-gray-600">Secure digital document repository and collaboration.</td>
                      <td className="py-4 px-6 text-gray-600">₹200 to ₹800 per user</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 text-gray-700 font-medium">Accounting Tools</td>
                      <td className="py-4 px-6 text-gray-600">GST invoicing, expense tracking, trust accounts.</td>
                      <td className="py-4 px-6 text-gray-600">₹500 to ₹1,500 base plan</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 text-gray-700 font-medium">Legal Research</td>
                      <td className="py-4 px-6 text-gray-600">Access to Supreme Court and High Court precedents.</td>
                      <td className="py-4 px-6 text-gray-600">₹3,000 to ₹6,000 per user</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQs Section */}
            <section id="faq" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Knowledge Base
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-8 tracking-tight">
                Frequently Asked Questions
              </h2>
              <LawyerFaqAccordion faqs={faqs} />
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
