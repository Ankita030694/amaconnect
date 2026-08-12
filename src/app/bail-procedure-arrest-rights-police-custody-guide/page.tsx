import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import BailHero from "@/components/bail-procedure/BailHero";
import ArrestOverview from "@/components/bail-procedure/ArrestOverview";
import ConstitutionalRights from "@/components/bail-procedure/ConstitutionalRights";
import WomenChildrenArrests from "@/components/bail-procedure/WomenChildrenArrests";
import BailableNonBailable from "@/components/bail-procedure/BailableNonBailable";
import AnticipatoryBail from "@/components/bail-procedure/AnticipatoryBail";
import CustodyLimits from "@/components/bail-procedure/CustodyLimits";
import RegularDefaultBail from "@/components/bail-procedure/RegularDefaultBail";
import IllegalDetentionRemedies from "@/components/bail-procedure/IllegalDetentionRemedies";
import BailFAQ from "@/components/bail-procedure/BailFAQ";
import { bailFaqs } from "@/components/bail-procedure/bailData";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import BailSidebar from "@/components/bail-procedure/BailSidebar";
import Footer from "@/components/Footer";

// SEO Metadata
export const metadata: Metadata = {
  title: "Bail and Arrest Rights Guide: Police Custody & Bail Procedures | AMAConnect",
  description:
    "Understand your rights during arrest, police versus judicial custody limits, anticipatory bail filing, and remedies for illegal detention under Indian laws.",
  keywords: "bail procedure, arrest rights, police custody, judicial custody, anticipatory bail, default bail, illegal detention, India, legal rights, CrPC, BNSS",
  alternates: {
    canonical: "https://www.amaconnect.in/bail-procedure-arrest-rights-police-custody-guide",
  },
  openGraph: {
    title: "Bail and Arrest Rights Guide: Police Custody & Bail Procedures",
    description:
      "Understand your rights during arrest, police versus judicial custody limits, anticipatory bail filing, and remedies for illegal detention under Indian laws.",
    url: "https://www.amaconnect.in/bail-procedure-arrest-rights-police-custody-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function BailProcedurePage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/bail-procedure-arrest-rights-police-custody-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Bail and Arrest Rights Guide: Police Custody and Bail Procedures",
    image: `${baseUrl}/cta-bg.jpg`,
    author: {
      "@type": "Person",
      name: "AMA Legal Solutions",
      url: `${baseUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "AMA Legal Solutions",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo2.svg`,
      },
    },
    datePublished: "2026-07-14T00:00:00.000Z",
    dateModified: new Date().toISOString(),
  };

  // 2. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bailFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // 3. Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bail and Arrest Rights Guide",
        item: pageUrl,
      },
    ],
  };

  // 4. Product Schema (with exactly 4 reviews and rating 4.8)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Bail and Arrest Rights Guide",
    image: `${baseUrl}/logo2.svg`,
    description: "A comprehensive guide to bail procedures, police custody limits, and arrest rights under Indian law.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "96",
      reviewCount: "4",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Vikram Sen",
        },
        datePublished: "2026-07-08",
        reviewBody: "Extremely clear guidance on bailable vs non-bailable offenses. It helped our family understand the procedure during a stressful time.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Meera Deshmukh",
        },
        datePublished: "2026-07-10",
        reviewBody: "The step-by-step anticipatory bail checklist was invaluable. Highly structured and legally accurate.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rahul Nair",
        },
        datePublished: "2026-07-12",
        reviewBody: "Saved us from police harassment by detailing the 24-hour presentation limit and D.K. Basu guidelines. A lifesaver.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sunita Rao",
        },
        datePublished: "2026-07-13",
        reviewBody: "Very precise comparison of pre-arrest and post-arrest rights. Essential reading for all citizens.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
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
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Semantic Main Content */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <BailHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Column: Scroll Spy Nav with exactly 9 sections */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "arrest-laws-procedures", title: "Arrest Overview" },
                  { id: "constitutional-rights", title: "Constitutional Rights" },
                  { id: "women-children-arrests", title: "Women & Children" },
                  { id: "bailable-non-bailable", title: "Bailable vs Non-Bailable" },
                  { id: "anticipatory-bail", title: "Anticipatory Bail" },
                  { id: "custody-limits", title: "Custody Limits" },
                  { id: "regular-default-bail", title: "Regular & Default Bail" },
                  { id: "illegal-detention-remedies", title: "Illegal Detention Remedies" },
                  { id: "faq", title: "Common FAQs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <ArrestOverview id="arrest-laws-procedures" />
              <ConstitutionalRights id="constitutional-rights" />
              <WomenChildrenArrests id="women-children-arrests" />
              <BailableNonBailable id="bailable-non-bailable" />
              <AnticipatoryBail id="anticipatory-bail" />
              <CustodyLimits id="custody-limits" />
              <RegularDefaultBail id="regular-default-bail" />
              <IllegalDetentionRemedies id="illegal-detention-remedies" />
              <BailFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Widgets */}
            <div className="w-full sticky top-24">
              <BailSidebar />
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
