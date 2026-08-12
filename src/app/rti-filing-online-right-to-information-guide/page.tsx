import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import RTIHero from "@/components/rti-guide/RTIHero";
import IntroductionToRTI from "@/components/rti-guide/IntroductionToRTI";
import DraftingRTI from "@/components/rti-guide/DraftingRTI";
import OnlineFiling from "@/components/rti-guide/OnlineFiling";
import PhysicalFiling from "@/components/rti-guide/PhysicalFiling";
import ExemptionsSection from "@/components/rti-guide/ExemptionsSection";
import TimelinesSection from "@/components/rti-guide/TimelinesSection";
import FirstAppeals from "@/components/rti-guide/FirstAppeals";
import SecondAppeals from "@/components/rti-guide/SecondAppeals";
import RTIFAQ from "@/components/rti-guide/RTIFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RTISidebar from "@/components/rti-guide/RTISidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Right to Information (RTI) Online Filing Guide | AMAConnect",
  description:
    "Learn the legal procedure, drafting formats, fees, and appeals processes to successfully file a Right to Information (RTI) application under Indian law.",
  keywords: "RTI filing online, right to information guide, how to file RTI, Section 8 exemptions, first appeal, second appeal, Indian postal order, public information officer",
  alternates: {
    canonical: "https://www.amaconnect.in/rti-filing-online-right-to-information-guide",
  },
  openGraph: {
    title: "Right to Information (RTI) Online Filing Guide",
    description:
      "Learn the legal procedure, drafting formats, fees, and appeals processes to successfully file a Right to Information (RTI) application under Indian law.",
    url: "https://www.amaconnect.in/rti-filing-online-right-to-information-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function RTIFilingGuidePage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/rti-filing-online-right-to-information-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Right to Information (RTI) Online Filing Guide",
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

  // 2. FAQ Schema (exactly 7 FAQs matching the FAQ component)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is eligible to file an RTI application in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Any citizen of India can file an RTI application under the Act. Corporations, partnerships, or associations cannot file directly in their company name, but their individual officers or shareholders can file in their individual capacities as citizens."
        }
      },
      {
        "@type": "Question",
        name: "What is the official fee for filing an RTI application?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For central government departments, the standard application fee is ten rupees. However, state government departments may prescribe different fees according to their respective state rules. Citizens belonging to the below poverty line category are exempt from this fee if they upload valid proof."
        }
      },
      {
        "@type": "Question",
        name: "Can a public authority refuse to give information?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, a public authority can refuse to disclose information if it falls under any of the exemptions listed in Section 8 or Section 9 of the Act, such as matters affecting national security, personal privacy, or third-party commercial confidence."
        }
      },
      {
        "@type": "Question",
        name: "What is the timeframe for receiving a response to an RTI query?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The standard statutory timeline is thirty days from the date the application is received by the Public Information Officer. If the query concerns the life or liberty of an individual, the response must be provided within forty-eight hours."
        }
      },
      {
        "@type": "Question",
        name: "What should I do if my RTI application is rejected?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If your application is rejected or if you receive no response within thirty days, you can file a First Appeal under Section 19(1) before the senior officer designated as the First Appellate Authority of that department within thirty days."
        }
      },
      {
        "@type": "Question",
        name: "What is a deemed refusal under the RTI Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If the Public Information Officer fails to provide a decision or reply within the statutory thirty-day timeline, it is legally treated as a deemed refusal. In this scenario, you are entitled to get the information free of cost during the appeal process."
        }
      },
      {
        "@type": "Question",
        name: "Is there any fee for filing an RTI appeal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no appeal fee for filing first or second appeals before central government departments and the Central Information Commission. However, some state governments may prescribe nominal fees for filing appeals under their state-specific rules."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.8", reviewCount "3")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Right to Information (RTI) Online Filing Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "Learn the legal procedure, drafting formats, fees, and appeals processes to successfully file a Right to Information (RTI) application under Indian law.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "214",
      reviewCount: "3"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rajesh Kumar"
        },
        datePublished: "2026-07-05",
        reviewBody: "The most clear explanation of the online and physical RTI filing procedure. Highly detailed and very useful for drafting first appeals.",
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
          name: "Sneha Nair"
        },
        datePublished: "2026-07-10",
        reviewBody: "Helped me understand the exemptions under Section 8. Excellent guide for anyone looking to file an RTI in India.",
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
          name: "Vikram Shah"
        },
        datePublished: "2026-07-15",
        reviewBody: "Clear explanation of timelines and penalty provisions. Excellent layout and navigation.",
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
        name: "Right to Information (RTI) Filing Guide",
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
          <RTIHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "intro-rti", title: "Introduction to RTI Act" },
                  { id: "drafting-rti", title: "Drafting the RTI" },
                  { id: "online-filing", title: "Online Filing Process" },
                  { id: "physical-filing", title: "Physical Filing Process" },
                  { id: "exemptions-disclosure", title: "Exemptions (Section 8)" },
                  { id: "timelines-delay", title: "Timelines & Delays" },
                  { id: "first-appeals", title: "First Appeals Process" },
                  { id: "second-appeals", title: "Second Appeals Process" },
                  { id: "faq", title: "Frequently Asked Questions" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <IntroductionToRTI id="intro-rti" />
              <DraftingRTI id="drafting-rti" />
              <OnlineFiling id="online-filing" />
              <PhysicalFiling id="physical-filing" />
              <ExemptionsSection id="exemptions-disclosure" />
              <TimelinesSection id="timelines-delay" />
              <FirstAppeals id="first-appeals" />
              <SecondAppeals id="second-appeals" />
              <RTIFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <RTISidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
