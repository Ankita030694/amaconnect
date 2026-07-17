import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import EPFHero from "@/components/epf-disputes/EPFHero";
import EPFOverview from "@/components/epf-disputes/EPFOverview";
import EPFWithdrawal from "@/components/epf-disputes/EPFWithdrawal";
import EPFTransfer from "@/components/epf-disputes/EPFTransfer";
import EPFPension from "@/components/epf-disputes/EPFPension";
import EPFTax from "@/components/epf-disputes/EPFTax";
import EPFGrievances from "@/components/epf-disputes/EPFGrievances";
import EPFEmployerDefault from "@/components/epf-disputes/EPFEmployerDefault";
import EPFDeathClaims from "@/components/epf-disputes/EPFDeathClaims";
import EPFFAQ from "@/components/epf-disputes/EPFFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import EPFSidebar from "@/components/epf-disputes/EPFSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EPF Withdrawal & Pension PF Transfer Rules Guide | AMAConnect",
  description:
    "How employees withdraw, transfer, and claim EPF funds and pension benefits, and resolve EPFO disputes under Indian labor rules.",
  keywords: "EPF withdrawal online, EPS pension eligibility, PF transfer form 13, form 19 complete settlement, form 10c pension withdrawal, EPFiGMS grievance portal, employer PF default, EDLI insurance claim, TDS on PF withdrawal, UAN portal rules",
  alternates: {
    canonical: "https://amaconnect.in/epf-withdrawal-pension-rules-pf-transfer-guide",
  },
  openGraph: {
    title: "EPF Withdrawal & Pension PF Transfer Rules Guide",
    description:
      "How employees withdraw, transfer, and claim EPF funds and pension benefits, and resolve EPFO disputes under Indian labor rules.",
    url: "https://amaconnect.in/epf-withdrawal-pension-rules-pf-transfer-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function EPFDisputesWelfarePage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/epf-withdrawal-pension-rules-pf-transfer-guide`;

  // 1. Article Schema (Publisher: "AMA Legal Solutions", Author: "AMA Legal Solutions", image: "/cta-bg.jpg")
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "EPF Withdrawal, Pension, and PF Transfer Guide",
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
        name: "How can I withdraw my EPF balance online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Members can log in to the EPFO Member Unified Portal using their UAN and password, complete Aadhaar verification, and submit withdrawal claims (Form 19, 10C, or 31) under the online services section."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between Form 19 and Form 10C?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Form 19 is filed to withdraw the accumulated balance in the provident fund (PF) account. Form 10C is filed to withdraw the accumulated balance in the pension fund, applicable only for service under ten years."
        }
      },
      {
        "@type": "Question",
        name: "Is it necessary to transfer my PF balance when changing jobs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, transferring your PF balance (using Form 13 online) maintains your continuous service history, which is essential to qualify for pension benefits and secure tax exemptions on eventual withdrawals."
        }
      },
      {
        "@type": "Question",
        name: "How is the EPS monthly pension calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The monthly pension is calculated using the formula: pensionable salary (average of the last sixty months of basic salary, capped at fifteen thousand rupees) multiplied by service years, divided by seventy."
        }
      },
      {
        "@type": "Question",
        name: "Is EPF withdrawal taxable under Indian income tax rules?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Withdrawals after five years of continuous service are completely tax-free. Withdrawals made before completing five years of service are fully taxable and subject to TDS at ten percent."
        }
      },
      {
        "@type": "Question",
        name: "How do I file a complaint for delayed PF claims?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Members can register grievances online on the EPFiGMS portal (epfigms.gov.in) using their UAN, which must be resolved by the regional PF commissioner within fifteen days."
        }
      },
      {
        "@type": "Question",
        name: "What can I do if my employer deducts PF but does not deposit it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can file a complaint on the EPFiGMS portal. Since non-deposit constitutes criminal breach of trust, you can also file a complaint under Section 406 of the IPC at a police station and notify the Labor Commissioner."
        }
      },
      {
        "@type": "Question",
        name: "What is the EDLI scheme and who is eligible to claim it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Employees Deposit Linked Insurance (EDLI) is a group life insurance scheme. Nominees of active EPF members who die during service receive a payout between 2.5 lakh and 7 lakh rupees."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.8", reviewCount exactly "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "EPF Withdrawal and Pension Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "How employees withdraw, transfer, and claim EPF funds and pension benefits, and resolve EPFO disputes under Indian labor rules.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "312",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Ramanathan Swamy"
        },
        datePublished: "2026-07-04",
        reviewBody: "Excellent coverage of the job transfer steps. I easily transferred my old member ID to the new one using Form 13 online with zero delay.",
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
          name: "Komal Gada"
        },
        datePublished: "2026-07-09",
        reviewBody: "The details on how to bypass employer attestation delays using current employers was a lifesaver. Strongly recommend this guide.",
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
          name: "Amit Saxena"
        },
        datePublished: "2026-07-13",
        reviewBody: "Clear tax rules for withdrawals under five years. The warning about Section 80C deductions reversal saved me from a major penalty.",
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
          name: "Shobha Sen"
        },
        datePublished: "2026-07-16",
        reviewBody: "Perfect explanation of EDLI insurance claims and Form 5IF. It helped our family claim my late brother's insurance payout within 3 weeks.",
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
        name: "EPF Withdrawal and Pension Guide",
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
          <EPFHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "overview-epf", title: "Overview of EPF" },
                  { id: "online-withdrawal", title: "Online Withdrawal" },
                  { id: "transfer-process", title: "Transfer Process" },
                  { id: "eps-benefits", title: "EPS Pension Rules" },
                  { id: "tax-rules", title: "Income Tax Rules" },
                  { id: "filing-grievances", title: "Filing Grievance" },
                  { id: "employer-default", title: "Employer Default" },
                  { id: "death-claims", title: "Death Claims" },
                  { id: "faq", title: "Common FAQs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <EPFOverview id="overview-epf" />
              <EPFWithdrawal id="online-withdrawal" />
              <EPFTransfer id="transfer-process" />
              <EPFPension id="eps-benefits" />
              <EPFTax id="tax-rules" />
              <EPFGrievances id="filing-grievances" />
              <EPFEmployerDefault id="employer-default" />
              <EPFDeathClaims id="death-claims" />
              <EPFFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <EPFSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
