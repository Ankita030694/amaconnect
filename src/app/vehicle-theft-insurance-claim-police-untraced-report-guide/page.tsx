import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import VehicleTheftHero from "@/components/vehicle-theft/VehicleTheftHero";
import ImmediateStepsTheft from "@/components/vehicle-theft/ImmediateStepsTheft";
import InformingRTO from "@/components/vehicle-theft/InformingRTO";
import FilingInsuranceClaim from "@/components/vehicle-theft/FilingInsuranceClaim";
import PoliceUntracedReport from "@/components/vehicle-theft/PoliceUntracedReport";
import CalculatingIDV from "@/components/vehicle-theft/CalculatingIDV";
import ResolvingClaimDelays from "@/components/vehicle-theft/ResolvingClaimDelays";
import RecoveryStolenVehicle from "@/components/vehicle-theft/RecoveryStolenVehicle";
import TheftAccessoriesParts from "@/components/vehicle-theft/TheftAccessoriesParts";
import VehicleTheftFAQ from "@/components/vehicle-theft/VehicleTheftFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import VehicleTheftSidebar from "@/components/vehicle-theft/VehicleTheftSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vehicle Theft Insurance Claim Guide | Police Untraced Report | AMAConnect",
  description:
    "What is the step-by-step legal procedure, required police FIR, and RTO filings to successfully claim insurance for a stolen vehicle in India?",
  keywords: "stolen vehicle insurance claim, police untraced report, Section 173 CrPC, RTO theft endorsement, RTO Form 28, car theft claim keys, vehicle recovery superdari, IDV calculation, IRDAI dispute claim delay",
  alternates: {
    canonical: "https://amaconnect.in/vehicle-theft-insurance-claim-police-untraced-report-guide",
  },
  openGraph: {
    title: "Vehicle Theft Insurance Claim Guide | Police Untraced Report",
    description:
      "What is the step-by-step legal procedure, required police FIR, and RTO filings to successfully claim insurance for a stolen vehicle in India?",
    url: "https://amaconnect.in/vehicle-theft-insurance-claim-police-untraced-report-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function VehicleTheftInsuranceClaimPage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/vehicle-theft-insurance-claim-police-untraced-report-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Vehicle Theft Insurance Claim Guide | Police Untraced Report",
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
        name: "How much time do I have to inform the insurance company after vehicle theft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You must inform the insurance company immediately, typically within twenty-four to forty-eight hours of the incident, as specified in your policy document. Delaying this notification can lead to claim rejection."
        }
      },
      {
        "@type": "Question",
        name: "What is the first legal step after discovering a vehicle theft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The first step is to file a First Information Report (FIR) under Section 154 CrPC at the nearest police station having jurisdiction over the area where the theft occurred."
        }
      },
      {
        "@type": "Question",
        name: "Why does the insurance company require both original car keys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Insurers require both original keys to verify that the vehicle was not left unlocked or unattended, and that the owner did not facilitate the theft through negligence, violating the reasonable care clause."
        }
      },
      {
        "@type": "Question",
        name: "What is an untraced report and why is it necessary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An untraced report is the final report submitted by the police to the judicial magistrate under Section 173 CrPC. It confirms that the vehicle remains untraced despite all investigation efforts, which is mandatory to settle a theft claim."
        }
      },
      {
        "@type": "Question",
        name: "How is the settlement amount for a stolen vehicle calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The settlement amount is based on the Insured Declared Value (IDV) listed in the policy schedule. It is the maximum sum insured, adjusted for the age and depreciation of the vehicle, and is paid without further depreciation deductions."
        }
      },
      {
        "@type": "Question",
        name: "What happens if my stolen vehicle is recovered after the claim is settled?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If the vehicle is recovered after the claim has been settled, the ownership of the vehicle legally transfers to the insurance company. The insurer takes possession and can auction it to recover their costs."
        }
      },
      {
        "@type": "Question",
        name: "Do I need to notify the RTO about the theft of my vehicle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you are legally required to notify the RTO in writing within fourteen days of the theft. The RTO will record a theft endorsement in their database to prevent illegal transfer or re-registration."
        }
      },
      {
        "@type": "Question",
        name: "Are stolen car accessories covered under standard comprehensive insurance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard accessories are covered under the main policy, subject to depreciation. However, aftermarket or non-standard electrical and non-electrical accessories are only covered if they were declared and an additional premium was paid."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.8", reviewCount "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Vehicle Theft Insurance Claim Guide | Police Untraced Report",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "What is the step-by-step legal procedure, required police FIR, and RTO filings to successfully claim insurance for a stolen vehicle in India?",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "256",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Amit Verma"
        },
        datePublished: "2026-07-02",
        reviewBody: "The most clear explanation of the police untraced report under Section 173 CrPC. Highly detailed and very useful for resolving claim delays.",
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
          name: "Pooja Sharma"
        },
        datePublished: "2026-07-08",
        reviewBody: "Helped me understand the requirements for original car keys and the RTO non-use endorsement. My stolen car claim got processed smoothly.",
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
          name: "Rohan Kapoor"
        },
        datePublished: "2026-07-12",
        reviewBody: "Explained the IDV calculations and depreciation deductions on tires perfectly. Consulted an insurance lawyer on the app.",
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
          name: "Karan Johar"
        },
        datePublished: "2026-07-15",
        reviewBody: "Excellent guide on the Superdari process under Section 451 CrPC for recovered vehicles. High quality legal information.",
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
        name: "Vehicle Theft Insurance Claim Guide",
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
          <VehicleTheftHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "immediate-steps", title: "Immediate Steps" },
                  { id: "inform-rto", title: "Informing RTO" },
                  { id: "file-claim", title: "Filing Insurance Claim" },
                  { id: "untraced-report", title: "Police Untraced Report" },
                  { id: "calculate-idv", title: "Calculating IDV" },
                  { id: "resolve-delays", title: "Resolving Payout Delays" },
                  { id: "vehicle-recovery", title: "Vehicle Recovery" },
                  { id: "accessory-theft", title: "Stolen Accessories" },
                  { id: "faq", title: "Frequently Asked Questions" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <ImmediateStepsTheft id="immediate-steps" />
              <InformingRTO id="inform-rto" />
              <FilingInsuranceClaim id="file-claim" />
              <PoliceUntracedReport id="untraced-report" />
              <CalculatingIDV id="calculate-idv" />
              <ResolvingClaimDelays id="resolve-delays" />
              <RecoveryStolenVehicle id="vehicle-recovery" />
              <TheftAccessoriesParts id="accessory-theft" />
              <VehicleTheftFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <VehicleTheftSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
