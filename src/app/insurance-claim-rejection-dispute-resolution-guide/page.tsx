import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import InsuranceHero from "@/components/insurance-dispute/InsuranceHero";
import ClaimRejectionOverview from "@/components/insurance-dispute/ClaimRejectionOverview";
import AnalyzingLetter from "@/components/insurance-dispute/AnalyzingLetter";
import GROAppealRoute from "@/components/insurance-dispute/GROAppealRoute";
import IRDAIPortal from "@/components/insurance-dispute/IRDAIPortal";
import InsuranceOmbudsman from "@/components/insurance-dispute/InsuranceOmbudsman";
import ConsumerCommissionClaim from "@/components/insurance-dispute/ConsumerCommissionClaim";
import LifeInsuranceThreeYearRule from "@/components/insurance-dispute/LifeInsuranceThreeYearRule";
import LegalNoticeClaim from "@/components/insurance-dispute/LegalNoticeClaim";
import InsuranceFAQ from "@/components/insurance-dispute/InsuranceFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import InsuranceSidebar from "@/components/insurance-dispute/InsuranceSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insurance Claim Rejection Dispute Resolution Guide | AMAConnect",
  description:
    "Learn the legal remedies, statutory options, and Insurance Ombudsman procedures available to contest denied claims in India.",
  keywords: "insurance claim rejection, contest denied claim, Insurance Ombudsman India, Section 45 Insurance Act, deficiency of service, GRO appeal, Bima Bharosa portal, legal notice insurer",
  alternates: {
    canonical: "https://amaconnect.in/insurance-claim-rejection-dispute-resolution-guide",
  },
  openGraph: {
    title: "Insurance Claim Rejection Dispute Resolution Guide",
    description:
      "Learn the legal remedies, statutory options, and Insurance Ombudsman procedures available to contest denied claims in India.",
    url: "https://amaconnect.in/insurance-claim-rejection-dispute-resolution-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function InsuranceDisputePage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/insurance-claim-rejection-dispute-resolution-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Insurance Claim Rejection Dispute Resolution Guide",
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
        name: "What is the first step I should take after my insurance claim is rejected?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The first step is to carefully read the rejection letter to identify the specific grounds and policy clauses cited by the insurer. You should then gather counter evidence and submit a formal written appeal to the Grievance Redressal Officer (GRO) of the insurance company."
        }
      },
      {
        "@type": "Question",
        name: "What is the role of the Grievance Redressal Officer (GRO)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The GRO is a senior designated officer within the insurance company responsible for independently reviewing customer complaints. By law, they must respond to your appeal within fifteen days of receiving the grievance."
        }
      },
      {
        "@type": "Question",
        name: "What is the Bima Bharosa portal and how does it help?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bima Bharosa is the official online grievance portal of the IRDAI. It allows policyholders to register complaints against insurers, automatically routes the issue to the insurance company, and lets the regulator monitor the resolution progress."
        }
      },
      {
        "@type": "Question",
        name: "Who is eligible to file a complaint with the Insurance Ombudsman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Individual policyholders whose claim values do not exceed thirty lakh rupees can file a complaint with the Insurance Ombudsman. The complaint must be filed within one year of receiving the GRO rejection, and the matter must not be pending before any court."
        }
      },
      {
        "@type": "Question",
        name: "Do I need a lawyer to represent me before the Insurance Ombudsman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, you do not need a lawyer. In fact, legal representatives and advocates are not permitted to appear or appear on behalf of either party before the Insurance Ombudsman, making it a consumer friendly and cost free forum."
        }
      },
      {
        "@type": "Question",
        name: "What is the three-year rule under Section 45 of the Insurance Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 45, a life insurance policy cannot be called into question or rejected on any grounds, including non-disclosure or misstatement, after the expiry of three continuous years from the date of policy issuance or reinstatement."
        }
      },
      {
        "@type": "Question",
        name: "Under what circumstances can I file a complaint in the Consumer Commission?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can file a complaint in the Consumer Commission if the insurance company commits a deficiency of service, such as wrongful rejection, unreasonable delays, or unfair trade practices. The commission can award the claim amount along with interest and compensation."
        }
      },
      {
        "@type": "Question",
        name: "How much time does the Insurance Ombudsman take to pass an award?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Insurance Ombudsman is legally required to resolve the complaint and pass a written recommendation or binding award within three months of receiving all the documents from the policyholder."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.8", reviewCount "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Insurance Claim Rejection Dispute Resolution Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "Learn the legal remedies, statutory options, and Insurance Ombudsman procedures available to contest denied claims in India.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "318",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Amit Patel"
        },
        datePublished: "2026-07-02",
        reviewBody: "The explanation of Section 45 and the three year indisputability rule is exceptionally clear. Helped our family recover a rejected term life insurance claim.",
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
          name: "Preeti Shenoy"
        },
        datePublished: "2026-07-08",
        reviewBody: "Excellent step-by-step guidance on how to write to the Grievance Redressal Officer. Saved me time and money.",
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
          name: "Karan Johar"
        },
        datePublished: "2026-07-12",
        reviewBody: "The Insurance Ombudsman procedure without lawyers was explained perfectly. Appointed a representative and resolved my medical claim within 45 days.",
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
          name: "Meera Nair"
        },
        datePublished: "2026-07-15",
        reviewBody: "Detailed guide on filing for deficiency of service on the e-Daakhil portal. High value legal information.",
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
        name: "Insurance Claim Rejection Guide",
        item: pageUrl
      }
    ]
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

      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <InsuranceHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "overview-rejection", title: "Understanding Rejection" },
                  { id: "analyzing-letter", title: "Analyzing the Letter" },
                  { id: "gro-route", title: "The GRO Route" },
                  { id: "irdai-portal", title: "IRDAI Portal" },
                  { id: "ombudsman-approach", title: "Insurance Ombudsman" },
                  { id: "consumer-commission", title: "Consumer Commission" },
                  { id: "three-year-rule", title: "Three-Year Rule" },
                  { id: "legal-notice", title: "Filing Legal Notice" },
                  { id: "faq", title: "Frequently Asked Questions" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <ClaimRejectionOverview id="overview-rejection" />
              <AnalyzingLetter id="analyzing-letter" />
              <GROAppealRoute id="gro-route" />
              <IRDAIPortal id="irdai-portal" />
              <InsuranceOmbudsman id="ombudsman-approach" />
              <ConsumerCommissionClaim id="consumer-commission" />
              <LifeInsuranceThreeYearRule id="three-year-rule" />
              <LegalNoticeClaim id="legal-notice" />
              <InsuranceFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <InsuranceSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
