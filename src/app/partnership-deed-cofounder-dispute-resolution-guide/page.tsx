import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import PartnershipHero from "@/components/partnership-dispute/PartnershipHero";
import PartnershipLawOverview from "@/components/partnership-dispute/PartnershipLawOverview";
import DraftingDeed from "@/components/partnership-dispute/DraftingDeed";
import StartupCoFounderAgreements from "@/components/partnership-dispute/StartupCoFounderAgreements";
import CommonCausesDisputes from "@/components/partnership-dispute/CommonCausesDisputes";
import MediationArbitrationPartnership from "@/components/partnership-dispute/MediationArbitrationPartnership";
import LegalRemediesDissolution from "@/components/partnership-dispute/LegalRemediesDissolution";
import PartnerThirdPartyLiability from "@/components/partnership-dispute/PartnerThirdPartyLiability";
import ExitStrategiesBuybacks from "@/components/partnership-dispute/ExitStrategiesBuybacks";
import PartnershipFAQ from "@/components/partnership-dispute/PartnershipFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import PartnershipSidebar from "@/components/partnership-dispute/PartnershipSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Co-Founder Disputes and Partnership Deed Guide | AMAConnect",
  description:
    "How to draft registered partnership deeds and co-founder agreements, and resolve commercial disputes in business partnerships.",
  keywords: "partnership deed drafting, cofounder agreement, cofounder disputes, commercial arbitration, partnership dissolution, joint and several liability, LLP asset protection, exit strategy business",
  alternates: {
    canonical: "https://www.amaconnect.in/partnership-deed-cofounder-dispute-resolution-guide",
  },
  openGraph: {
    title: "Co-Founder Disputes and Partnership Deed Guide",
    description:
      "How to draft registered partnership deeds and co-founder agreements, and resolve commercial disputes in business partnerships.",
    url: "https://www.amaconnect.in/partnership-deed-cofounder-dispute-resolution-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function PartnershipDisputePage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/partnership-deed-cofounder-dispute-resolution-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Co-Founder Disputes and Partnership Deed Guide",
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
    dateModified: new Date("2026-07-17").toISOString(),
  };

  // 2. FAQ Schema (exactly 8 FAQs matching the FAQ component)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is it legally mandatory to register a partnership deed in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, registration of a partnership firm is optional under the Indian Partnership Act, 1932. However, unregistered firms cannot file lawsuits to enforce contracts or recover debts, making registration highly recommended for legal protection."
        }
      },
      {
        "@type": "Question",
        name: "What is mutual agency in a business partnership?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mutual agency is the principle where every partner acts as both an agent and a principal for the firm. Any act done by a partner in the ordinary course of the firm business binds the entire partnership and all other partners."
        }
      },
      {
        "@type": "Question",
        name: "How does a co-founder agreement differ from a partnership deed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A co-founder agreement is a pre-incorporation contract designed for modern startups that plan to incorporate as private limited companies, focusing on equity vesting and IP transfer, while a partnership deed governs traditional partnership firms."
        }
      },
      {
        "@type": "Question",
        name: "What is a reverse vesting schedule for co-founders?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A reverse vesting schedule is a mechanism where founders earn their equity over time, typically four years with a one-year cliff. If a founder leaves early, the company can buy back their unvested shares at face value."
        }
      },
      {
        "@type": "Question",
        name: "What is joint and several liability under partnership law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Joint and several liability means that all partners are collectively and individually responsible for all debts of the firm. Creditors can recover the entire debt from any single partner, including attaching their personal assets."
        }
      },
      {
        "@type": "Question",
        name: "How can partners protect their personal assets from business liabilities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Partners can protect their personal assets by incorporating the business as a Limited Liability Partnership (LLP) or a Private Limited Company, where partner liability is strictly limited to their agreed capital contributions."
        }
      },
      {
        "@type": "Question",
        name: "What is a multi-tiered dispute resolution clause?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A multi-tiered dispute clause is a contract provision that requires parties to follow a step-by-step process when conflicts arise, starting with negotiations, moving to structured mediation, and ending with binding arbitration."
        }
      },
      {
        "@type": "Question",
        name: "How is a partnership firm dissolved by a court order?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 44, a partner can file a suit in court seeking dissolution on grounds like partner misconduct, persistent breach of agreement, business losses, or management deadlock, leading to a court-supervised winding up."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.8", reviewCount "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Co-Founder Disputes and Partnership Deed Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "How to draft registered partnership deeds and co-founder agreements, and resolve commercial disputes in business partnerships.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "148",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rohan Gupta"
        },
        datePublished: "2026-07-02",
        reviewBody: "The most clear explanation of the reverse vesting schedules under Indian company law. Highly detailed and very useful for startup co-founders.",
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
          name: "Aditi Rao"
        },
        datePublished: "2026-07-08",
        reviewBody: "Excellent explanation of joint and several liability and how LLPs protect personal assets. Highly recommended for joint venture partners.",
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
          name: "Sanjay Dutt"
        },
        datePublished: "2026-07-12",
        reviewBody: "Citing the multi-tiered dispute clauses helped us resolve a major deadlock through structured mediation. Valuable corporate guide.",
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
          name: "Priya Sharma"
        },
        datePublished: "2026-07-15",
        reviewBody: "Detailed guide on Registrar of Firms procedures. Clear explanation of Section 69 disabilities for unregistered deeds.",
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
        name: "Co-Founder Disputes and Partnership Deed Guide",
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
          <PartnershipHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "partnership-law", title: "Partnership Law" },
                  { id: "drafting-deed", title: "Drafting the Deed" },
                  { id: "cofounder-agreements", title: "Co-Founder Agreements" },
                  { id: "common-disputes", title: "Common Disputes" },
                  { id: "mediation-arbitration", title: "ADR & Arbitration" },
                  { id: "legal-remedies", title: "Injunctions & Dissolution" },
                  { id: "partner-liability", title: "Partner Liability" },
                  { id: "exit-strategies", title: "Exit & Buybacks" },
                  { id: "faq", title: "Frequently Asked Questions" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <PartnershipLawOverview id="partnership-law" />
              <DraftingDeed id="drafting-deed" />
              <StartupCoFounderAgreements id="cofounder-agreements" />
              <CommonCausesDisputes id="common-disputes" />
              <MediationArbitrationPartnership id="mediation-arbitration" />
              <LegalRemediesDissolution id="legal-remedies" />
              <PartnerThirdPartyLiability id="partner-liability" />
              <ExitStrategiesBuybacks id="exit-strategies" />
              <PartnershipFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <PartnershipSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
