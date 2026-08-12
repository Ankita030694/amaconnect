import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import FamilyTransfersHero from "@/components/family-transfers/FamilyTransfersHero";
import FamilyPropertyTransfersOverview from "@/components/family-transfers/FamilyPropertyTransfersOverview";
import DraftingGiftDeed from "@/components/family-transfers/DraftingGiftDeed";
import StampDutyRegistration from "@/components/family-transfers/StampDutyRegistration";
import RelinquishmentReleaseDeeds from "@/components/family-transfers/RelinquishmentReleaseDeeds";
import PartitionDeedsSettlements from "@/components/family-transfers/PartitionDeedsSettlements";
import IncomeTaxGifts from "@/components/family-transfers/IncomeTaxGifts";
import RevokingChallengingGift from "@/components/family-transfers/RevokingChallengingGift";
import PropertyTransferMinors from "@/components/family-transfers/PropertyTransferMinors";
import FamilyTransfersFAQ from "@/components/family-transfers/FamilyTransfersFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import FamilyTransfersSidebar from "@/components/family-transfers/FamilyTransfersSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gift Deeds and Family Property Transfers Guide | AMAConnect",
  description:
    "How family members transfer property titles using Gift Deeds, Relinquishment Deeds, and Partition Deeds under Indian property law.",
  keywords: "gift deed drafting, property transfer family, relinquishment deed, partition deed ancestral, stamp duty concessions, minor property transfer, tax exemption gifts, Section 122 Transfer of Property Act",
  alternates: {
    canonical: "https://www.amaconnect.in/gift-deed-property-transfer-family-relinquishment-guide",
  },
  openGraph: {
    title: "Gift Deeds and Family Property Transfers Guide",
    description:
      "How family members transfer property titles using Gift Deeds, Relinquishment Deeds, and Partition Deeds under Indian property law.",
    url: "https://www.amaconnect.in/gift-deed-property-transfer-family-relinquishment-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function FamilyPropertyTransfersPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/gift-deed-property-transfer-family-relinquishment-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Gift Deeds and Family Property Transfers Guide",
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
        name: "Is a gift deed legally valid without registration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, under Section 123 of the Transfer of Property Act and Section 17 of the Registration Act, registration of a gift deed involving immovable property is mandatory. Unregistered gift deeds hold no legal validity in court."
        }
      },
      {
        "@type": "Question",
        name: "What is the main difference between a gift deed and a relinquishment deed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A gift deed transfers property ownership voluntarily without consideration to any individual, whereas a relinquishment deed is used specifically to surrender shares in ancestral or jointly owned property to existing co-owners."
        }
      },
      {
        "@type": "Question",
        name: "Is there any income tax on gifts received from close family members?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, under Section 56(2)(x) of the Income Tax Act, 1961, gifts of cash, gold, or property received from defined close relatives (like parents, spouses, or siblings) are completely exempt from income tax."
        }
      },
      {
        "@type": "Question",
        name: "Can a registered gift deed be revoked or canceled?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A registered gift deed is generally irrevocable unless there is an express revocation clause in the deed itself, or if the donor proves in court that the gift was obtained through fraud, coercion, or undue influence."
        }
      },
      {
        "@type": "Question",
        name: "What is stamp duty for gifting property to a spouse or child?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stamp duty varies by state. Many states in India offer significant concessions for close relatives; for example, Maharashtra charges a nominal stamp duty of two hundred rupees for gifting property to a spouse or child."
        }
      },
      {
        "@type": "Question",
        name: "Can a minor receive property as a gift?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, a minor can receive property as a gift. A natural or legal guardian must accept the gift on behalf of the minor in the gift deed and manage the property in trust until the minor reaches eighteen."
        }
      },
      {
        "@type": "Question",
        name: "Can a guardian sell a minor property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, a natural guardian cannot sell, mortgage, or exchange a minor immovable property without securing prior permission from the local district court, showing that the sale is for the benefit of the minor."
        }
      },
      {
        "@type": "Question",
        name: "When does a family settlement agreement require registration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A family settlement agreement requires registration if it creates, assigns, or extinguishes rights in an immovable property. If it merely records a past verbal family compromise, it does not require registration."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.8", reviewCount "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Gift Deeds and Family Property Transfers Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "How family members transfer property titles using Gift Deeds, Relinquishment Deeds, and Partition Deeds under Indian property law.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "192",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Vikram Malhotra"
        },
        datePublished: "2026-07-02",
        reviewBody: "The most clear explanation of the stamp duty concessions in Maharashtra for close family relatives. Highly detailed and very useful for drafting gift deeds.",
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
          name: "Sunita Iyer"
        },
        datePublished: "2026-07-08",
        reviewBody: "Helped me understand the distinction between relinquishment and release deeds. Our family registered a deed and settled inherited property smoothly.",
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
          name: "Rajesh Nair"
        },
        datePublished: "2026-07-12",
        reviewBody: "Explained the Section 56(2)(x) tax exemptions on family gifts perfectly. Appointed a representative and completed the registration within a week.",
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
          name: "Kriti Sen"
        },
        datePublished: "2026-07-15",
        reviewBody: "Excellent guide on minor property rights and Section 8 court permissions under minority acts. High quality information.",
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
        name: "Gift Deeds and Property Transfers Guide",
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
          <FamilyTransfersHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "overview-transfers", title: "Overview of Transfers" },
                  { id: "drafting-gift", title: "Drafting Gift Deed" },
                  { id: "stamp-duty", title: "Stamp Duty & Fees" },
                  { id: "relinquishment-release", title: "Relinquishment & Release" },
                  { id: "partition-deeds", title: "Partition & Settlements" },
                  { id: "income-tax", title: "Income Tax Rules" },
                  { id: "revoking-gift", title: "Revocation & Disputes" },
                  { id: "transfer-minors", title: "Transfer to Minors" },
                  { id: "faq", title: "Frequently Asked Questions" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <FamilyPropertyTransfersOverview id="overview-transfers" />
              <DraftingGiftDeed id="drafting-gift" />
              <StampDutyRegistration id="stamp-duty" />
              <RelinquishmentReleaseDeeds id="relinquishment-release" />
              <PartitionDeedsSettlements id="partition-deeds" />
              <IncomeTaxGifts id="income-tax" />
              <RevokingChallengingGift id="revoking-gift" />
              <PropertyTransferMinors id="transfer-minors" />
              <FamilyTransfersFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <FamilyTransfersSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
