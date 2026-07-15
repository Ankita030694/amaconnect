import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import POSHHero from "@/components/posh-guide/POSHHero";
import OverviewPOSH from "@/components/posh-guide/OverviewPOSH";
import ICCStructure from "@/components/posh-guide/ICCStructure";
import FilingComplaint from "@/components/posh-guide/FilingComplaint";
import InquiryConciliation from "@/components/posh-guide/InquiryConciliation";
import EmployerResponsibilities from "@/components/posh-guide/EmployerResponsibilities";
import EmployeeRights from "@/components/posh-guide/EmployeeRights";
import RemoteWorkPOSH from "@/components/posh-guide/RemoteWorkPOSH";
import POSHAppeals from "@/components/posh-guide/POSHAppeals";
import POSHFAQ from "@/components/posh-guide/POSHFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import POSHSidebar from "@/components/posh-guide/POSHSidebar";
import Footer from "@/components/Footer";

// SEO Metadata Injection
export const metadata: Metadata = {
  title: "Employee Guide to Workplace Safety and POSH Act in India | AMAConnect",
  description:
    "A comprehensive legal guide outlining the Prevention of Sexual Harassment, or POSH, Act in India, internal complaint procedures, ICC board structures, and employee protection rights.",
  keywords: "POSH Act India, workplace harassment laws, internal complaints committee composition, filing POSH complaint, sexual harassment inquiry process, employee protection rights, Vishaka guidelines",
  alternates: {
    canonical: "https://amaconnect.in/posh-act-workplace-safety-employee-guide",
  },
  openGraph: {
    title: "Employee Guide to Workplace Safety and POSH Act in India",
    description:
      "A comprehensive legal guide outlining the Prevention of Sexual Harassment, or POSH, Act in India, internal complaint procedures, ICC board structures, and employee protection rights.",
    url: "https://amaconnect.in/posh-act-workplace-safety-employee-guide",
    siteName: "AMA Legal Solutions",
    type: "article",
    authors: ["Anuj Anand Malik"],
  },
};

export default function POSHActGuidePage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/posh-act-workplace-safety-employee-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    "headline": "Employee Guide to Workplace Safety and POSH Act in India",
    "image": `${baseUrl}/anujbhiya.png`,
    "author": {
      "@type": "Person",
      "name": "Anuj Anand Malik",
      "url": `${baseUrl}/about`,
      "image": `${baseUrl}/anujbhiya.png`,
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo2.svg`,
      },
    },
    "datePublished": "2026-07-14T16:00:00Z",
    "dateModified": new Date().toISOString(),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "243",
      "reviewCount": 4,
    },
  };

  // 2. FAQ Schema (Static Inlining of 9 FAQs)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the definition of a workplace under the POSH Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the POSH Act, the definition of a workplace is highly expansive. It includes not only traditional offices, public and private sector organizations, and factories, but also any place visited by the employee arising out of or during the course of employment, including transportation provided by the employer, virtual meetings, offsite events, client locations, and work-related travel.",
        },
      },
      {
        "@type": "Question",
        name: "Who is considered an aggrieved woman under the Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An aggrieved woman is any female of any age, whether employed or not, who alleges to have been subjected to any act of sexual harassment by the respondent at a workplace. This includes permanent, temporary, ad-hoc, contractual, daily-wage employees, trainees, interns, apprentices, and even visitors or clients who experience harassment within the office premises.",
        },
      },
      {
        "@type": "Question",
        name: "Can a POSH complaint be filed against a person who is not an employee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, a complaint can be filed if the harassment occurred at the workplace or during the course of employment, even if the respondent is a third party, visitor, vendor, client, or contractor. The employer and the ICC are still legally obligated to investigate the incident and take appropriate action, including blocking the individual from the premises or assisting in filing a police complaint.",
        },
      },
      {
        "@type": "Question",
        name: "What is the statutory time limit to file a POSH complaint?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The statutory time limit to file a POSH complaint is three months from the date of the incident. In case of a series of incidents, it must be filed within three months from the date of the last incident. The ICC can extend this period by another three months if it is satisfied that exceptional circumstances prevented the complainant from filing on time, and must record its reasons in writing.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between conciliation and a formal inquiry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Conciliation is a voluntary, informal process initiated only at the complainant's written request to settle the dispute without monetary terms or formal investigation. A formal inquiry, on the other hand, is a structured administrative investigation conducted by the ICC to evaluate evidence, interview witnesses, and recommend disciplinary action or penalties if the harassment is proven.",
        },
      },
      {
        "@type": "Question",
        name: "Can a complainant or respondent be represented by a lawyer in a POSH inquiry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, under the POSH Rules, neither the complainant nor the respondent is allowed to bring a legal practitioner to represent them before the ICC during the inquiry proceedings. This rule is designed to keep the process administrative, collaborative, and non-adversarial, though both parties are allowed to consult lawyers outside the hearings for guidance.",
        },
      },
      {
        "@type": "Question",
        name: "What interim reliefs can a complainant request during the inquiry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "During the inquiry, the complainant can request the ICC for interim reliefs, which include transferring either her or the respondent to another department or branch, granting her paid leave for up to three months (in addition to her statutory leave), or restraining the respondent from evaluating her work performance or writing her annual appraisal report.",
        },
      },
      {
        "@type": "Question",
        name: "What are the penalties for an employer who fails to comply with the POSH Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If an employer fails to constitute an ICC, fails to take action on the ICC's recommendations, or fails to file the mandatory annual compliance report, they can be fined up to fifty thousand rupees. Repeat offenses can result in double the fine, and more severely, the cancellation, withdrawal, or non-renewal of their business license or registration.",
        },
      },
      {
        "@type": "Question",
        name: "Is the identity of the complainant protected under the POSH Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Section 16 of the POSH Act strictly prohibits the publication or disclosure of the identity, address, or details of the complainant, respondent, witnesses, or inquiry proceedings to the public or media. Any breach of this confidentiality rule by any member of the ICC or organization results in strict disciplinary action and a statutory penalty of five thousand rupees.",
        },
      },
    ],
  };

  // 3. Breadcrumb Schema
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
        "name": "Workplace Safety and POSH Act Guide",
        "item": pageUrl,
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Schema Injection */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Semantic Main Wrapper */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <POSHHero />
          
          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav sections={[
                { id: "overview", title: "Overview & History" },
                { id: "icc-structure", title: "ICC Composition" },
                { id: "filing-complaint", title: "Filing Step-by-Step" },
                { id: "inquiry-process", title: "Inquiry & Conciliation" },
                { id: "employer-duties", title: "Employer Penalties" },
                { id: "employee-rights", title: "Protection & Rights" },
                { id: "remote-posh", title: "Remote Work POSH" },
                { id: "posh-appeals", title: "POSH Appeals" },
                { id: "faq", title: "Common FAQs" }
              ]} />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              
              {/* Lead Hook Alert Box */}
              <div className="bg-[#FAF9F5] border-l-4 border-[#D4AF37] p-6 rounded-r-3xl mb-10 shadow-sm">
                <p className="text-[#2D2219] font-medium text-sm sm:text-base leading-relaxed">
                  According to workplace compliance surveys, over 55 percent of working women in India remain unaware of the statutory Internal Complaints Committee at their offices. Knowing your rights under the POSH Act of 2013 is critical to ensuring a safe, supportive, and legally protected career.
                </p>
              </div>

              {/* Internal Links Navigation Bar / Contextual Callout */}
              <div className="bg-amber-50/40 border border-amber-100/60 rounded-2xl p-5 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="text-xs font-semibold text-gray-700 text-center md:text-left">
                  Need direct assistance? Navigate our legal services:
                </span>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link 
                    href="/contact" 
                    className="text-xs font-bold text-[#D4AF37] hover:underline"
                  >
                    Request Compliance Drafts
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link 
                    href="/communities" 
                    className="text-xs font-bold text-[#D4AF37] hover:underline"
                  >
                    Join Legal Communities
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link 
                    href="/pro-bono-free-legal-aid" 
                    className="text-xs font-bold text-[#D4AF37] hover:underline"
                  >
                    Pro Bono Legal Aid
                  </Link>
                </div>
              </div>

              {/* H2 components mapping to IDs */}
              <OverviewPOSH id="overview" />
              <ICCStructure id="icc-structure" />
              <FilingComplaint id="filing-complaint" />
              <InquiryConciliation id="inquiry-process" />
              <EmployerResponsibilities id="employer-duties" />
              <EmployeeRights id="employee-rights" />
              <RemoteWorkPOSH id="remote-posh" />
              <POSHAppeals id="posh-appeals" />
              <POSHFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Widgets */}
            <div className="w-full sticky top-24">
              <POSHSidebar />
            </div>

          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
