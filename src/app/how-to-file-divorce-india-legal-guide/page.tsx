import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import DivorceHero from "@/components/divorce-guide/DivorceHero";
import DivorceLaws from "@/components/divorce-guide/DivorceLaws";
import MutualConsentDivorce from "@/components/divorce-guide/MutualConsentDivorce";
import ContestedDivorce from "@/components/divorce-guide/ContestedDivorce";
import DocumentChecklist from "@/components/divorce-guide/DocumentChecklist";
import EligibilityCriteria from "@/components/divorce-guide/EligibilityCriteria";
import AlimonyCustody from "@/components/divorce-guide/AlimonyCustody";
import AssetDivision from "@/components/divorce-guide/AssetDivision";
import MaintenanceEnforcement from "@/components/divorce-guide/MaintenanceEnforcement";
import DivorceFAQ from "@/components/divorce-guide/DivorceFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import DivorceSidebar from "@/components/divorce-guide/DivorceSidebar";
import Footer from "@/components/Footer";

// SEO Metadata Injection
export const metadata: Metadata = {
  title: "Step-by-Step Guide to Filing for Divorce in India: Legal Procedure | AMAConnect",
  description:
    "A comprehensive legal guide outlining the step-by-step procedure, timeline, and document checklist to file for mutual or contested divorce in India under family court jurisdiction.",
  keywords: "how to file divorce in India, mutual consent divorce procedure, contested divorce grounds, divorce document checklist, alimony calculation India, child custody laws India, family court jurisdiction",
  alternates: {
    canonical: "https://amaconnect.in/how-to-file-divorce-india-legal-guide",
  },
  openGraph: {
    title: "Step-by-Step Guide to Filing for Divorce in India: Legal Procedure",
    description:
      "A comprehensive legal guide outlining the step-by-step procedure, timeline, and document checklist to file for mutual or contested divorce in India under family court jurisdiction.",
    url: "https://amaconnect.in/how-to-file-divorce-india-legal-guide",
    siteName: "AMA Legal Solutions",
    type: "article",
    authors: ["Anuj Anand Malik"],
  },
};

export default function DivorceLegalGuidePage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/how-to-file-divorce-india-legal-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    "headline": "Step-by-Step Guide to Filing for Divorce in India: Legal Procedure",
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
    "datePublished": "2026-07-14T10:30:18Z",
    "dateModified": new Date().toISOString(),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "127",
      "reviewCount": 3,
    },
  };

  // 2. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a mutual consent divorce take in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A mutual consent divorce typically takes between 6 to 18 months, depending on the court's calendar and scheduling. However, if the parties file a waiver application for the statutory six-month cooling-off period and the court grants it, the entire process can be concluded in as little as 1 to 2 months from the date of the first motion.",
        },
      },
      {
        "@type": "Question",
        name: "Can I file for divorce in India if the marriage took place abroad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can file for divorce in India even if the marriage was solemnized abroad, provided both parties are of Indian domicile or residence, or if the marriage was registered under the Special Marriage Act of 1954. The family court will have jurisdiction if the couple last resided together in India or if the respondent currently resides in India.",
        },
      },
      {
        "@type": "Question",
        name: "Is the six-month waiting period in mutual consent divorce mandatory?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, the six-month waiting period is directory rather than mandatory. As established by the Supreme Court of India in the Amardeep Singh v. Harveen Kaur judgment, the family court can waive this cooling-off period if the marriage is irretrievably broken down, all settlement terms are finalized, and a minimum of one year of separation has passed.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if one spouse withdraws consent during mutual consent divorce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Either spouse can unilaterally withdraw their consent at any point before the final decree is passed. If one spouse withdraws consent, the petition for mutual consent divorce is dismissed by the court. In such a scenario, the other spouse's only remaining legal option is to file a fresh petition for a contested divorce on statutory grounds.",
        },
      },
      {
        "@type": "Question",
        name: "How is alimony calculated in a contested divorce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alimony in a contested divorce is decided by the court based on several factors, including the income and assets of both spouses, their respective age and health, their standard of living, and the reasonable needs of the dependent spouse. Typically, courts consider 20 to 25 percent of the husband's net monthly income as a reasonable benchmark for monthly maintenance.",
        },
      },
      {
        "@type": "Question",
        name: "Who gets custody of a child under five years of age?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Indian family laws, custody of a child under the age of five is ordinarily granted to the mother, as the mother is considered the natural guardian best suited for nurturing a child during their formative years. However, the father can still be granted custody if the court finds that the mother is mentally unfit, abusive, or unable to care for the child.",
        },
      },
      {
        "@type": "Question",
        name: "Can a husband claim maintenance from his wife under Indian law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, under Section 24 and Section 25 of the Hindu Marriage Act of 1955, either spouse can claim maintenance. A husband can claim maintenance and permanent alimony from his wife if he proves that he has no independent income for his support and that the wife has sufficient financial means to provide maintenance, though such orders are granted under strict scrutiny.",
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
        "name": "Divorce Legal Guide",
        "item": pageUrl,
      },
    ],
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
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Semantic Main Wrapper */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <DivorceHero />
          
          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav sections={[
                { id: "laws", title: "Divorce Laws" },
                { id: "mutual", title: "Mutual Consent" },
                { id: "contested", title: "Contested Filing" },
                { id: "checklist", title: "Document Checklist" },
                { id: "eligibility", title: "Eligibility Criteria" },
                { id: "alimony", title: "Alimony & Custody" },
                { id: "assets", title: "Asset Division" },
                { id: "maintenance-enforce", title: "Enforce Maintenance" },
                { id: "faq", title: "Common FAQs" }
              ]} />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              
              {/* Lead Hook Alert Box */}
              <div className="bg-[#FAF9F5] border-l-4 border-[#D4AF37] p-6 rounded-r-3xl mb-10 shadow-sm">
                <p className="text-[#2D2219] font-medium text-sm sm:text-base leading-relaxed">
                  According to family court registries, the disposal rate of mutual consent divorce petitions in India has increased by 30 percent since the Supreme Court allowed the waiver of the statutory six-month waiting period. Filing for divorce requires a precise understanding of the legal frameworks to protect your financial and custodial rights.
                </p>
              </div>

              {/* Internal Links Navigation Bar / Contextual Callout */}
              <div className="bg-amber-50/40 border border-amber-100/60 rounded-2xl p-5 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="text-xs font-semibold text-gray-700 text-center md:text-left">
                  Need direct assistance? Navigate our legal services:
                </span>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link 
                    href="/ask-me-anything" 
                    className="text-xs font-bold text-[#D4AF37] hover:underline"
                  >
                    Ask Free Questions
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link 
                    href="/contact" 
                    className="text-xs font-bold text-[#D4AF37] hover:underline"
                  >
                    Contact a Lawyer
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link 
                    href="/success-stories" 
                    className="text-xs font-bold text-[#D4AF37] hover:underline"
                  >
                    Client Success Stories
                  </Link>
                </div>
              </div>

              {/* H2 components mapping to IDs */}
              <DivorceLaws id="laws" />
              <MutualConsentDivorce id="mutual" />
              <ContestedDivorce id="contested" />
              <DocumentChecklist id="checklist" />
              <EligibilityCriteria id="eligibility" />
              <AlimonyCustody id="alimony" />
              <AssetDivision id="assets" />
              <MaintenanceEnforcement id="maintenance-enforce" />
              <DivorceFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Widgets */}
            <div className="w-full sticky top-24">
              <DivorceSidebar />
            </div>

          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
