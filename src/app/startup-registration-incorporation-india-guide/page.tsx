import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import StartupGuideHero from "@/components/startup-guide/StartupGuideHero";
import ChoosingStructure from "@/components/startup-guide/ChoosingStructure";
import IncorporationProcess from "@/components/startup-guide/IncorporationProcess";
import DpiitBenefits from "@/components/startup-guide/DpiitBenefits";
import CostBreakdown from "@/components/startup-guide/CostBreakdown";
import ComplianceRoadmap from "@/components/startup-guide/ComplianceRoadmap";
import StartupIPStrategy from "@/components/startup-guide/StartupIPStrategy";
import EquityVesting from "@/components/startup-guide/EquityVesting";
import BeforeAfterChecklist from "@/components/startup-guide/BeforeAfterChecklist";
import StartupFAQ from "@/components/startup-guide/StartupFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import StartupGuideSidebar from "@/components/startup-guide/StartupGuideSidebar";
import Footer from "@/components/Footer";

// SEO Metadata Injection
export const metadata: Metadata = {
  title: "Startup Registration & DPIIT Incorporation Guide | AMAConnect",
  description:
    "Learn how to incorporate a company in India, apply for DPIIT recognition and Section 80-IAC tax holiday, understand costs, and manage compliance.",
  keywords: "startup registration India, company incorporation India, DPIIT recognition, Section 80-IAC tax holiday, Private Limited vs LLP, OPC solo founder, SPICe plus form, company compliance checklist",
  alternates: {
    canonical: "https://amaconnect.in/startup-registration-incorporation-india-guide",
  },
  openGraph: {
    title: "Startup Registration & DPIIT Incorporation Guide",
    description:
      "Learn how to incorporate a company in India, apply for DPIIT recognition and Section 80-IAC tax holiday, understand costs, and manage compliance.",
    url: "https://amaconnect.in/startup-registration-incorporation-india-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function StartupRegistrationGuidePage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/startup-registration-incorporation-india-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    "headline": "Startup Registration Guide: How to Incorporate a Company in India",
    "image": `${baseUrl}/logo2.svg`,
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
    "datePublished": "2026-07-14T10:00:00Z",
    "dateModified": "2026-07-14T10:00:00Z"
  };

  // 2. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it mandatory to hire a lawyer or CA to incorporate a startup in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While the Ministry of Corporate Affairs has simplified online forms, having a Chartered Accountant, Company Secretary, or advocate is practically essential. The SPICe-Plus forms require a professional certification verifying that all details are accurate, and their professional credentials must be digitally attached to the submission."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the entire incorporation process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The entire process typically takes ten to fifteen business days. This timeline includes obtaining Digital Signature Certificates, securing name approval, drafting the Memorandum and Articles of Association, and receiving the final Certificate of Incorporation from the Registrar of Companies."
        }
      },
      {
        "@type": "Question",
        "name": "Can an NRI or foreign national be a director in an Indian Private Limited Company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, non-resident Indians and foreign nationals can be appointed as directors. However, the company must have at least one director who is a resident of India, meaning they must have stayed in the country for at least one hundred and eighty two days in the previous financial year."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I do not file Form INC-20A within 180 days?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Failing to file Form INC-20A within one hundred and eighty days is a serious violation. The company can be fined fifty thousand rupees, and directors face a penalty of one thousand rupees per day. Additionally, the Registrar can strike off the company name from the register."
        }
      },
      {
        "@type": "Question",
        "name": "Can a sole proprietorship or partnership convert into a Private Limited Company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, existing proprietorships and partnership firms can convert into a Private Limited Company. This transition requires filing specific conversion forms, paying stamp duty, transferring all assets and liabilities to the new corporate entity, and updating tax and bank records."
        }
      },
      {
        "@type": "Question",
        "name": "Does a DPIIT-recognized startup automatically get the income tax exemption?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, DPIIT recognition does not guarantee tax exemptions. To get the three year income tax holiday under Section 80-IAC, startups must submit a separate application to the Inter-Ministerial Board, which evaluates their level of innovation before issuing a certificate."
        }
      }
    ]
  };

  // 3. AggregateRating Schema
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Startup Registration Guide: How to Incorporate a Company in India",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // 4. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Startup Registration Guide",
        "item": pageUrl
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-dvh bg-white">
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
        id="rating-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Semantic Main Wrapper */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <StartupGuideHero />
          
          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav with 9 items */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav sections={[
                { id: "structure", title: "Choosing Structure" },
                { id: "incorporation", title: "Incorporation Steps" },
                { id: "dpiit", title: "DPIIT Recognition" },
                { id: "costs", title: "Cost Breakdown" },
                { id: "compliance", title: "Post-Compliance" },
                { id: "startup-ip", title: "Startup IP" },
                { id: "equity-vesting", title: "Equity Vesting" },
                { id: "checklist", title: "Before & After" },
                { id: "faq", title: "Common Q&As" }
              ]} />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0 flex flex-col gap-12">
              <ChoosingStructure id="structure" />
              <IncorporationProcess id="incorporation" />
              <DpiitBenefits id="dpiit" />
              <CostBreakdown id="costs" />
              <ComplianceRoadmap id="compliance" />
              <StartupIPStrategy id="startup-ip" />
              <EquityVesting id="equity-vesting" />
              <BeforeAfterChecklist id="checklist" />
              <StartupFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Widgets */}
            <div className="w-full sticky top-24">
              <StartupGuideSidebar />
            </div>

          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
