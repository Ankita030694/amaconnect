import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import IbcHero from "@/components/ibc-msme/IbcHero";
import RecoveryChannels from "@/components/ibc-msme/RecoveryChannels";
import IbcInsolvency from "@/components/ibc-msme/IbcInsolvency";
import DemandNotice from "@/components/ibc-msme/DemandNotice";
import NcltPetition from "@/components/ibc-msme/NcltPetition";
import SamadhaanArbitration from "@/components/ibc-msme/SamadhaanArbitration";
import ThresholdJurisdiction from "@/components/ibc-msme/ThresholdJurisdiction";
import FastTrackInsolvency from "@/components/ibc-msme/FastTrackInsolvency";
import BeforeAfterInsolvency from "@/components/ibc-msme/BeforeAfterInsolvency";
import IbcFAQ from "@/components/ibc-msme/IbcFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import IbcSidebar from "@/components/ibc-msme/IbcSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insolvency Recovery for MSMEs Legal Guide | AMAConnect",
  description: "Learn how Indian MSMEs recover delayed payments through the Insolvency and Bankruptcy Code (IBC) and MSME Samadhaan arbitration. Serve Section 8 demand notices and file Section 9 petitions.",
  keywords: "insolvency recovery MSME, MSME delayed payments recovery, Section 8 demand notice, Section 9 NCLT petition, MSME Samadhaan arbitration, fast-track insolvency India, corporate debt recovery, NCLT threshold limit MSME",
  alternates: {
    canonical: "https://www.amaconnect.in/ibc-msme-payment-recovery-insolvency-guide",
  },
  openGraph: {
    title: "Insolvency Recovery for MSMEs Legal Guide",
    description: "Learn how Indian MSMEs recover delayed payments through the Insolvency and Bankruptcy Code (IBC) and MSME Samadhaan arbitration.",
    url: "https://www.amaconnect.in/ibc-msme-payment-recovery-insolvency-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function IbcMsmePage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/ibc-msme-payment-recovery-insolvency-guide`;

  // 1. Article & AggregateRating Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    "headline": "Insolvency Recovery for MSMEs: Legal Channels & IBC Guide",
    "description": "Learn how Indian MSMEs recover delayed payments through the Insolvency and Bankruptcy Code (IBC) and MSME Samadhaan arbitration. Serve Section 8 demand notices and file Section 9 petitions.",
    "image": `${baseUrl}/cta-bg.jpg`,
    "author": {
      "@type": "Person",
      "name": "AMA Legal Solutions",
      "url": `${baseUrl}/about`
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo2.svg`,
      },
    },
    "datePublished": "2026-07-14T00:00:00+05:30",
    "dateModified": "2026-07-14T00:00:00+05:30"
  };

  // 2. FAQ Schema (8 FAQs)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the minimum default amount required to initiate insolvency against a buyer under the IBC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum default threshold is 1 Crore rupees. If the outstanding amount is less than 1 Crore, the MSME cannot file a Section 9 petition under the IBC, but can file a recovery case under MSME Samadhaan, which has no minimum threshold.",
        },
      },
      {
        "@type": "Question",
        "name": "Can a registered MSME file an insolvency case against a partnership firm or a sole proprietorship under the IBC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Part II of the IBC applies only to the insolvency resolution and liquidation of corporate debtors, which includes registered companies and LLPs. For partnership firms or proprietorships, recovery must be pursued through MSME Samadhaan or civil summary suits.",
        },
      },
      {
        "@type": "Question",
        "name": "What is a Section 8 demand notice and is it mandatory before filing an NCLT petition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it is mandatory. Under Section 8 of the IBC, an operational creditor must deliver a demand notice in Form 3 or Form 4 to the corporate debtor registered office. The debtor has exactly 10 days to pay or show a pre-existing dispute.",
        },
      },
      {
        "@type": "Question",
        "name": "What constitutes a pre-existing dispute under the IBC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A pre-existing dispute refers to any dispute regarding the quality, quantity, price of goods or services, or breach of representation or warranty that was raised in writing, including letters, emails, or notices, before the Section 8 demand notice was served.",
        },
      },
      {
        "@type": "Question",
        "name": "Does the MSMED Act override private arbitration clauses in buyer-supplier agreements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the Supreme Court of India has ruled that the MSMED Act has overriding effect. Statutory conciliation and arbitration before the MSEFC override any private arbitration agreements between the parties.",
        },
      },
      {
        "@type": "Question",
        "name": "What happens if a buyer challenges an MSEFC award in court?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under Section 19 of the MSMED Act, a buyer cannot challenge or appeal an MSEFC award or decree unless they deposit 75 percent of the awarded amount in the court first, protecting the supplier from frivolous delays.",
        },
      },
      {
        "@type": "Question",
        "name": "How long does the Fast-Track Corporate Insolvency Resolution Process (FTCIRP) take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The FTCIRP must be completed within 90 days from the insolvency commencement date, with a single potential extension of up to 45 days if approved by the NCLT, compared to the standard 180-day process.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the deadline for an MSME to submit its claims after NCLT admits the insolvency petition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An MSME must submit its proof of claim in Form B to the Interim Resolution Professional (IRP) within 14 days from the date of the public announcement of the admission of the insolvency petition.",
        },
      },
    ],
  };

  // 3. BreadcrumbList Schema
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
        "name": "Insolvency Recovery Guide for MSMEs",
        "item": pageUrl,
      },
    ],
  };

  // 4. Product & AggregateRating Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Insolvency Recovery and Debt Settlement Consultation for MSMEs",
    "description": "Premium legal assistance for Micro, Small, and Medium Enterprises to recover outstanding payments via IBC NCLT petitions, demand notices, and MSME Samadhaan arbitration.",
    "image": `${baseUrl}/cta-bg.jpg`,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "4",
      "bestRating": "5",
      "worstRating": "1",
    },
  };

  return (
    <div className="flex flex-col min-h-dvh bg-white">
      {/* Schema Injection */}
      <Script
        id="ibc-msme-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="ibc-msme-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="ibc-msme-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="ibc-msme-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Semantic Main Wrapper */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <IbcHero />
          
          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav with 9 sections */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav sections={[
                { id: "payment-channels", title: "Payment Recovery Channels" },
                { id: "ibc-insolvency", title: "Insolvency Recovery (IBC)" },
                { id: "demand-notice", title: "Section 8 Demand Notice" },
                { id: "nclt-petition", title: "Section 9 NCLT Petition" },
                { id: "samadhaan-arbitration", title: "Samadhaan Arbitration" },
                { id: "threshold-limits", title: "Threshold & Jurisdiction" },
                { id: "fast-track", title: "Fast-Track Insolvency" },
                { id: "before-after", title: "Before & After Checklist" },
                { id: "faq", title: "Common FAQs" }
              ]} />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              
              {/* Lead Hook */}
              <div className="bg-[#FAF9F5] border-l-4 border-[#D4AF37] p-6 rounded-r-3xl mb-12">
                <p className="text-[#2D2219] font-medium text-sm sm:text-base leading-relaxed text-justify">
                  Delayed payment settlements often cripple the operational capability of Micro, Small, and Medium Enterprises. The Insolvency and Bankruptcy Code (IBC) and MSME Samadhaan provide legally enforceable, time-bound pathways to resolve outstanding credit liabilities from defaulting corporate buyers.
                </p>
                <p className="text-gray-600 text-xs mt-3 leading-relaxed">
                  If you need immediate legal assistance, you can post a query directly on our <a href="/ask-me-anything" className="text-[#D4AF37] font-bold hover:underline">Ask Me Anything platform</a>, join one of our active <a href="/communities" className="text-[#D4AF37] font-bold hover:underline">legal communities</a> to connect with other business owners, or apply for our <a href="/pro-bono-free-legal-aid" className="text-[#D4AF37] font-bold hover:underline">pro bono free legal aid program</a> if you fall under the eligible categories.
                </p>
              </div>

              {/* Sections */}
              <RecoveryChannels id="payment-channels" />
              <IbcInsolvency id="ibc-insolvency" />
              <DemandNotice id="demand-notice" />
              <NcltPetition id="nclt-petition" />
              <SamadhaanArbitration id="samadhaan-arbitration" />
              <ThresholdJurisdiction id="threshold-limits" />
              <FastTrackInsolvency id="fast-track" />
              <BeforeAfterInsolvency id="before-after" />
              <IbcFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Widgets */}
            <div className="w-full sticky top-24">
              <IbcSidebar />
            </div>

          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
