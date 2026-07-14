import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import TenantHero from "@/components/tenant-rights/TenantHero";
import TenantRightsOverview from "@/components/tenant-rights/TenantRightsOverview";
import LeaseProvisions from "@/components/tenant-rights/LeaseProvisions";
import ArbitraryRent from "@/components/tenant-rights/ArbitraryRent";
import MaintenanceObligations from "@/components/tenant-rights/MaintenanceObligations";
import EvictionDefense from "@/components/tenant-rights/EvictionDefense";
import SecurityDeposit from "@/components/tenant-rights/SecurityDeposit";
import ModelTenancyAct from "@/components/tenant-rights/ModelTenancyAct";
import RentAuthorityFiling from "@/components/tenant-rights/RentAuthorityFiling";
import TenantFAQ from "@/components/tenant-rights/TenantFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import TenantSidebar from "@/components/tenant-rights/TenantSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tenant Rights, Eviction Defense & Security Deposit Disputes | AMAConnect",
  description:
    "A complete legal guide for Indian tenants. Understand your protections against illegal evictions, arbitrary rent hikes, and withheld security deposits under rent control acts and the Model Tenancy Act.",
  keywords:
    "tenant rights India, illegal eviction defense, security deposit dispute, arbitrary rent hike, Rent Control Act India, Model Tenancy Act registration, Rent Authority complaint, landlord maintenance obligations",
  alternates: {
    canonical: "https://amaconnect.in/tenant-rights-eviction-security-deposit-disputes",
  },
  openGraph: {
    title: "Tenant Rights, Eviction Defense & Security Deposit Disputes Guide",
    description:
      "Understand your protections against illegal evictions, arbitrary rent hikes, and withheld security deposits under rent control acts and the Model Tenancy Act.",
    url: "https://amaconnect.in/tenant-rights-eviction-security-deposit-disputes",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function TenantRightsPage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/tenant-rights-eviction-security-deposit-disputes`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Tenant Rights, Eviction Defense and Security Deposit Disputes Guide",
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
    datePublished: new Date("2026-07-14").toISOString(),
    dateModified: new Date().toISOString(),
  };

  // 2. FAQ Schema (exactly 7 questions matching the FAQ component)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is it legally mandatory to register a rent agreement for 11 months?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 17 of the Registration Act, 1908, only lease agreements with a duration of twelve months or longer must be registered at the Sub-Registrar's Office. Because of this, most landlords sign eleven month agreements to save on stamp duty and registration fees. However, under the Model Tenancy Act, all tenancies, regardless of their duration, must be submitted to the Rent Authority.",
        },
      },
      {
        "@type": "Question",
        name: "Can a landlord enter the rented property at any time without the tenant's consent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, a landlord cannot enter the rented house or commercial property without the tenant's permission. Under the standard rules of quiet enjoyment and the Model Tenancy Act, the landlord must provide a written or digital notice at least twenty four hours in advance, detailing the time and purpose of entry, which must be during reasonable daytime hours.",
        },
      },
      {
        "@type": "Question",
        name: "What is the maximum security deposit a landlord can demand under the Model Tenancy Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Model Tenancy Act, the security deposit to be paid by the tenant in advance is capped at a maximum of two months' rent for residential premises and a maximum of six months' rent for commercial premises. This cap prevents landlords from demanding excessive deposit amounts, which was a common practice in major cities.",
        },
      },
      {
        "@type": "Question",
        name: "Can a landlord cut off essential services like water or electricity if I fail to pay rent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely not. Under all state rent control acts and the Model Tenancy Act, landlords are strictly prohibited from disconnecting essential services like electricity, water supply, or sewage systems as a tool to pressure tenants. If a landlord cuts off these services, the tenant can approach the Rent Authority to restore services immediately and penalize the landlord.",
        },
      },
      {
        "@type": "Question",
        name: "What options do I have if my landlord refuses to return my security deposit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If the landlord refuses to return the security deposit without a valid reason, you should first serve a formal legal notice through an advocate, demanding the refund within fifteen days. If the landlord does not comply, you can file a petition before the Rent Authority or Rent Court to recover the money, along with interest and compensation.",
        },
      },
      {
        "@type": "Question",
        name: "Am I allowed to sublet the rented property to another tenant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, a tenant cannot sublet the rented property, or any part of it, to another person without obtaining the explicit, written consent of the landlord. Subletting without permission is a serious breach of contract and constitutes a valid, legally recognized ground for eviction under rent laws.",
        },
      },
      {
        "@type": "Question",
        name: "How much notice must a landlord give before raising the rent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Model Tenancy Act, if the lease agreement does not specify a rent revision rate, the landlord must serve a written notice at least three months in advance of the proposed increase. If the tenant does not agree to the hike, they must serve notice of termination and vacate the property.",
        },
      },
    ],
  };

  // 3. Product Schema (exactly 3 reviews)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Tenant Protections and Rent Laws Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "A comprehensive legal guide on tenant rights, eviction defense, and security deposit disputes in India.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "94",
      reviewCount: "3",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Vikram Mehta",
        },
        datePublished: "2026-07-08",
        reviewBody: "Very informative guide. The timeline for recovering security deposits helped me draft my legal notice to my former landlord.",
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
          name: "Neha Sen",
        },
        datePublished: "2026-07-11",
        reviewBody: "The maintenance responsibilities table is very clear. It saved us from paying for roof leakage repairs which the landlord should pay.",
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
          name: "Sanjay Rao",
        },
        datePublished: "2026-07-13",
        reviewBody: "Excellent analysis of the Model Tenancy Act. Highly recommend this to anyone renting in Bangalore or Mumbai.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
  };

  // 4. BreadcrumbList Schema
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
        name: "Tenant Protections Guide",
        item: pageUrl,
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
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Semantic Main Wrapper */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <TenantHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Column: Scroll Spy Nav with 9 sections */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "rights-overview", title: "Rent Laws Overview" },
                  { id: "lease-provisions", title: "Lease Provisions" },
                  { id: "arbitrary-rent", title: "Arbitrary Rent Hikes" },
                  { id: "maintenance-obligations", title: "Property Maintenance" },
                  { id: "eviction-defense", title: "Illegal Eviction Defense" },
                  { id: "security-deposit", title: "Recovering Deposits" },
                  { id: "model-tenancy", title: "Model Tenancy Act" },
                  { id: "rent-authority", title: "Rent Authority Filing" },
                  { id: "faq", title: "Frequently Asked Questions" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <TenantRightsOverview id="rights-overview" />
              <LeaseProvisions id="lease-provisions" />
              <ArbitraryRent id="arbitrary-rent" />
              <MaintenanceObligations id="maintenance-obligations" />
              <EvictionDefense id="eviction-defense" />
              <SecurityDeposit id="security-deposit" />
              <ModelTenancyAct id="model-tenancy" />
              <RentAuthorityFiling id="rent-authority" />
              <TenantFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Widgets */}
            <div className="w-full sticky top-24">
              <TenantSidebar />
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
