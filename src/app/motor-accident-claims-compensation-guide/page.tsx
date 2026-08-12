import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import MotorAccidentHero from "@/components/motor-accident/MotorAccidentHero";
import OverviewClaims from "@/components/motor-accident/OverviewClaims";
import ClaimProcedure from "@/components/motor-accident/ClaimProcedure";
import InsuranceDifference from "@/components/motor-accident/InsuranceDifference";
import RequiredDocuments from "@/components/motor-accident/RequiredDocuments";
import CalculateCompensation from "@/components/motor-accident/CalculateCompensation";
import LimitationTimelines from "@/components/motor-accident/LimitationTimelines";
import DigitalEvidence from "@/components/motor-accident/DigitalEvidence";
import HitAndRun from "@/components/motor-accident/HitAndRun";
import AccidentFAQ from "@/components/motor-accident/AccidentFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import MotorAccidentSidebar from "@/components/motor-accident/MotorAccidentSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Motor Accident Claims Compensation Guide: Legal MACT Procedure | AMAConnect",
  description:
    "A comprehensive legal guide outlining the step-by-step procedure, documents required, and tribunal path to claim compensation under the Motor Vehicles Act in India.",
  keywords: "motor accident claim India, MACT procedure, third party insurance, own damage claim, multiplier method calculation, accident claim documents, accident claim timeline",
  alternates: {
    canonical: "https://www.amaconnect.in/motor-accident-claims-compensation-guide",
  },
  openGraph: {
    title: "Motor Accident Claims Compensation Guide: Legal MACT Procedure",
    description:
      "A comprehensive legal guide outlining the step-by-step procedure, documents required, and tribunal path to claim compensation under the Motor Vehicles Act in India.",
    url: "https://www.amaconnect.in/motor-accident-claims-compensation-guide",
    siteName: "AMA Legal Solutions",
    type: "article",
    authors: ["Anuj Anand Malik"],
  },
};

export default function MotorAccidentClaimsGuidePage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/motor-accident-claims-compensation-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    "headline": "Motor Accident Claims Compensation Guide: Legal MACT Procedure",
    "image": `${baseUrl}/anujbhiya.png`,
    "author": {
      "@type": "Person",
      "name": "Anuj Anand Malik",
      "url": `${baseUrl}/contact`,
      "image": `${baseUrl}/anujbhiya.png`,
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo2.svg`,
      },
    },
    "datePublished": "2026-07-14T16:00:00Z",
    "dateModified": new Date().toISOString(),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "194",
      "reviewCount": 3,
    },
  };

  // 2. FAQ Schema (Exact 7 FAQs)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the time limit to file a motor accident claim in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under the amended Section 166(3) of the Motor Vehicles Act, which came into force on April 1, 2022, a claim petition must be filed within a strict time limit of six months from the date of the accident. Prior to this amendment, there was no limitation period. Since the new amendment does not allow for condonation of delay, failing to file within six months will cause your right to claim compensation to be permanently lost."
        }
      },
      {
        "@type": "Question",
        "name": "Can I claim compensation if the offending vehicle was not insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can still claim compensation even if the offending vehicle did not have insurance. Under the principle of vicarious liability, the owner of the vehicle is personally liable to pay the award determined by the tribunal. In such cases, the tribunal will direct the owner to pay the amount. If the owner fails to pay, the tribunal can issue orders to attach and sell their property to recover the compensation."
        }
      },
      {
        "@type": "Question",
        "name": "Who can file a claim in case of the victim's death?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the event of a fatal accident, the claim petition can be filed by any or all of the legal representatives of the deceased victim. This includes the spouse, parents, and children of the deceased. Additionally, an agent duly authorized by the deceased person's legal representatives can also file the petition on their behalf."
        }
      },
      {
        "@type": "Question",
        "name": "How is the multiplier selected in motor accident claims?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The multiplier is selected based on the age of the victim at the time of the accident, as established by the Supreme Court of India in the Sarla Verma judgment. The multiplier ranges from a maximum of 18 (for victims aged 15 to 25 years) down to 5 (for victims aged over 65 years). It is a key factor in calculating the total loss of dependency."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Section 164 and Section 166 of the Motor Vehicles Act?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Section 164 deals with no-fault liability, where the claimant receives a fixed compensation (five lakh rupees for death, two and a half lakh rupees for grievous hurt) without needing to prove the driver's negligence. Section 166 is a fault-based claim, where the claimant must prove negligence to seek unlimited, actual-loss-based compensation. Claimants can choose the route that best suits their evidence and urgency."
        }
      },
      {
        "@type": "Question",
        "name": "Can a claim petition be filed if the driver did not have a valid license?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can file a claim. If the driver of the offending vehicle did not possess a valid license, it constitutes a breach of the insurance policy conditions. In such cases, the tribunal usually applies the 'pay and recover' principle, directing the insurance company to pay the compensation to the victim first, and then allowing the insurer to recover the amount from the vehicle owner."
        }
      },
      {
        "@type": "Question",
        "name": "Where should a motor accident claim petition be filed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A motor accident claim petition can be filed before the Motor Accident Claims Tribunal (MACT) in any of the following jurisdictions: the area where the accident occurred, the area where the claimant resides or carries on business, or the area where the owner or driver of the offending vehicle resides. This provides maximum convenience to the victim."
        }
      }
    ]
  };

  // 3. Breadcrumb Schema
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
        "name": "Motor Accident Claims Compensation Guide",
        "item": pageUrl,
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

      {/* Semantic Main Content */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <MotorAccidentHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "overview", title: "Claims Overview" },
                  { id: "procedure", title: "Claim Procedure" },
                  { id: "difference", title: "Insurance Cover" },
                  { id: "documents", title: "Required Documents" },
                  { id: "compensation", title: "Calculating Compensation" },
                  { id: "limitation", title: "Limitation & Timelines" },
                  { id: "digital-evidence", title: "Digital Evidence" },
                  { id: "hit-run", title: "Hit and Run Cases" },
                  { id: "faq", title: "Common FAQs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              
              {/* Lead Hook Alert Box */}
              <div className="bg-[#FAF9F5] border-l-4 border-[#D4AF37] p-6 rounded-r-3xl mb-10 shadow-sm">
                <p className="text-[#2D2219] font-medium text-sm sm:text-base leading-relaxed">
                  Over 150,000 traffic fatalities occur in India annually, yet less than 40 percent of eligible families secure their lawful compensation due to delayed FIR filings or lost evidence. Navigating the Motor Accident Claims Tribunal requires strict compliance with statutory documentation and calculations.
                </p>
              </div>

              {/* Internal Links Navigation Bar */}
              <div className="bg-amber-50/40 border border-amber-100/60 rounded-2xl p-5 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="text-xs font-semibold text-gray-700 text-center md:text-left">
                  Need direct assistance? Navigate our legal services:
                </span>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link
                    href="/ask-me-anything"
                    className="text-xs font-bold text-[#D4AF37] hover:underline"
                  >
                    Ask Free Questions
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-[#D4AF37] hover:underline"
                  >
                    Contact a Lawyer
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link
                    href="/success-stories"
                    className="text-xs font-bold text-[#D4AF37] hover:underline"
                  >
                    Client Success Stories
                  </Link>
                </div>
              </div>

              {/* H2 component sections with proper IDs */}
              <OverviewClaims id="overview" />
              <ClaimProcedure id="procedure" />
              <InsuranceDifference id="difference" />
              <RequiredDocuments id="documents" />
              <CalculateCompensation id="compensation" />
              <LimitationTimelines id="limitation" />
              <DigitalEvidence id="digital-evidence" />
              <HitAndRun id="hit-run" />
              <AccidentFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Widgets */}
            <div className="w-full sticky top-24">
              <MotorAccidentSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
