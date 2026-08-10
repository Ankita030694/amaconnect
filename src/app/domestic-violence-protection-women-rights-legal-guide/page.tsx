import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import DVHero from "@/components/domestic-violence/DVHero";
import DVOverview from "@/components/domestic-violence/DVOverview";
import DVResidency from "@/components/domestic-violence/DVResidency";
import DVMonetaryRelief from "@/components/domestic-violence/DVMonetaryRelief";
import DVCustodyOrders from "@/components/domestic-violence/DVCustodyOrders";
import DVIncidentReport from "@/components/domestic-violence/DVIncidentReport";
import DVCriminalComplaints from "@/components/domestic-violence/DVCriminalComplaints";
import DVStreedhanRights from "@/components/domestic-violence/DVStreedhanRights";
import DVInterimOrders from "@/components/domestic-violence/DVInterimOrders";
import DVFAQ from "@/components/domestic-violence/DVFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import DVSidebar from "@/components/domestic-violence/DVSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Domestic Violence & Women Rights Legal Guide | AMAConnect",
  description:
    "What are the legal remedies, statutory protections, and filing procedures available to Indian women under the Domestic Violence Act.",
  keywords: "domestic violence act 2005, PWDVA, shared household rights, maintenance under section 20, protection orders section 18, child custody section 21, domestic incident report, section 498a cruelty, streedhan rights Hindu law, Arnesh Kumar guidelines",
  alternates: {
    canonical: "https://amaconnect.in/domestic-violence-protection-women-rights-legal-guide",
  },
  openGraph: {
    title: "Domestic Violence & Women Rights Legal Guide",
    description:
      "What are the legal remedies, statutory protections, and filing procedures available to Indian women under the Domestic Violence Act.",
    url: "https://amaconnect.in/domestic-violence-protection-women-rights-legal-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function DomesticViolencePage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/domestic-violence-protection-women-rights-legal-guide`;

  // 1. Article Schema (Publisher: "AMA Legal Solutions", Author: "AMA Legal Solutions", image: "/cta-bg.jpg")
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Domestic Violence and Women Rights Legal Guide in India",
    image: `${baseUrl}/cta-bg.jpg`,
    author: {
      "@type": "Organization",
      name: "AMA Legal Solutions",
      url: `${baseUrl}/about`,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo2.svg`,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "AMA Legal Solutions",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo2.svg`,
      },
    },
    datePublished: new Date("2026-07-17").toISOString(),
    dateModified: new Date().toISOString(),
  };

  // 2. FAQ Schema (exactly 8 FAQs matching the FAQ component)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What qualifies as domestic violence under Indian law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Domestic Violence Act, 2005, domestic violence includes physical injury or assault, verbal insults, emotional harassment, sexual abuse, and financial withholding of money or family resources."
        }
      },
      {
        "@type": "Question",
        name: "Can a live-in partner seek protection under the Domestic Violence Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the Supreme Court of India has ruled that live in relationships that resemble marriage are covered under the Act, allowing partners to claim maintenance, residency, and protection orders."
        }
      },
      {
        "@type": "Question",
        name: "Who can a woman file a domestic violence complaint against?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A woman can file a complaint against any adult male with whom she has shared a domestic relationship, as well as his male and female relatives, such as mothers in law or sisters in law."
        }
      },
      {
        "@type": "Question",
        name: "What is a Domestic Incident Report (DIR) and who files it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A DIR is an official record of domestic abuse. It is drafted using Form one by a Protection Officer, NGO Service Provider, or CAW police cell, and is submitted to the magistrate court."
        }
      },
      {
        "@type": "Question",
        name: "Can a husband evict his wife from the shared household during a dispute?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, under Section 17 of the Act, every woman has a right to reside in the shared household regardless of ownership. She cannot be evicted except through a court-approved legal process."
        }
      },
      {
        "@type": "Question",
        name: "What is the penalty for breaching a court protection order?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Breaching a protection order is a cognizable and non-bailable offense under Section 31 of the Act. It carries a penalty of up to one year of imprisonment, a fine of twenty thousand rupees, or both."
        }
      },
      {
        "@type": "Question",
        name: "What is Streedhan and does the husband have rights over it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Streedhan constitutes all gifts, jewelry, cash, and property presented to a woman before, during, or after marriage. It belongs solely to the woman, and the husband has no ownership rights over it."
        }
      },
      {
        "@type": "Question",
        name: "How does Section 498A differ from the Domestic Violence Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Section 498A of the IPC is a criminal law focusing on punishing the husband or relatives with jail terms for cruelty. The Domestic Violence Act is a civil law focusing on providing emergency reliefs, housing, custody, and support."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.8", reviewCount exactly "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Domestic Violence and Women Rights Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "What are the legal remedies, statutory protections, and filing procedures available to Indian women under the Domestic Violence Act.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "349",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Deepa Nair"
        },
        datePublished: "2026-07-02",
        reviewBody: "This guide clearly explains the residency rights under Section 17. The distinction between dowry and Streedhan was exceptionally helpful.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        }
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Priyanka Sen"
        },
        datePublished: "2026-07-07",
        reviewBody: "Saved me so much time. I was confused about how the Crimes Against Women cell works with Protection Officers. Perfect walkthrough.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        }
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Komal Verma"
        },
        datePublished: "2026-07-12",
        reviewBody: "Clear information on Section 23 ex-parte interim maintenance orders. It gave me the courage to consult an advocate on AMAConnect.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5"
        }
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Aisha Khan"
        },
        datePublished: "2026-07-16",
        reviewBody: "Excellent coverage of the Arnesh Kumar guidelines and Section 41A notice procedures. Must-read for anyone in a family dispute.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        }
      }
    ]
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
        item: baseUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Domestic Violence and Women Rights Guide",
        item: pageUrl
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
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <DVHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "overview-dv", title: "Overview of DV Act" },
                  { id: "residency-rights", title: "Residency Rights" },
                  { id: "monetary-relief", title: "Monetary Relief" },
                  { id: "custody-protection", title: "Custody & Protection" },
                  { id: "incident-report", title: "DIR Filing" },
                  { id: "criminal-complaints", title: "Section 498A Cruelty" },
                  { id: "streedhan-rights", title: "Streedhan Rights" },
                  { id: "interim-appeals", title: "Interim & Appeals" },
                  { id: "faq", title: "Common FAQs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <DVOverview id="overview-dv" />
              <DVResidency id="residency-rights" />
              <DVMonetaryRelief id="monetary-relief" />
              <DVCustodyOrders id="custody-protection" />
              <DVIncidentReport id="incident-report" />
              <DVCriminalComplaints id="criminal-complaints" />
              <DVStreedhanRights id="streedhan-rights" />
              <DVInterimOrders id="interim-appeals" />
              <DVFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <DVSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
