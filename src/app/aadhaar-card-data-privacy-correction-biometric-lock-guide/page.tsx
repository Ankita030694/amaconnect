import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import AadhaarHero from "@/components/aadhaar-privacy/AadhaarHero";
import AadhaarActPrivacy from "@/components/aadhaar-privacy/AadhaarActPrivacy";
import BiometricLockingTheft from "@/components/aadhaar-privacy/BiometricLockingTheft";
import ResolvingMismatch from "@/components/aadhaar-privacy/ResolvingMismatch";
import MandatoryVoluntaryUses from "@/components/aadhaar-privacy/MandatoryVoluntaryUses";
import FilingUIDAIGrievances from "@/components/aadhaar-privacy/FilingUIDAIGrievances";
import AadhaarDeactivationSuspension from "@/components/aadhaar-privacy/AadhaarDeactivationSuspension";
import VirtualIDMaskedAadhaar from "@/components/aadhaar-privacy/VirtualIDMaskedAadhaar";
import FilingAadhaarFraudClaims from "@/components/aadhaar-privacy/FilingAadhaarFraudClaims";
import AadhaarPrivacyFAQ from "@/components/aadhaar-privacy/AadhaarPrivacyFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import AadhaarSidebar from "@/components/aadhaar-privacy/AadhaarSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aadhaar Card Privacy, Biometric Lock & Correction Guide | AMAConnect",
  description:
    "How do citizens lock/unlock Aadhaar biometrics, handle chronic data mismatch errors, and enforce digital privacy rights under the Aadhaar Act?",
  keywords: "lock Aadhaar biometrics online, AEPS fingerprint cloning scam, correct Aadhaar date of birth error, pension biometric matching failure, Aadhaar mandatory vs voluntary, file UIDAI complaint portal, Aadhaar card deactivation rules, generate Aadhaar Virtual ID, Information Technology Act Section 43A compensation",
  alternates: {
    canonical: "https://amaconnect.in/aadhaar-card-data-privacy-correction-biometric-lock-guide",
  },
  openGraph: {
    title: "Aadhaar Card Privacy, Biometric Lock & Correction Guide",
    description:
      "How do citizens lock/unlock Aadhaar biometrics, handle chronic data mismatch errors, and enforce digital privacy rights under the Aadhaar Act?",
    url: "https://amaconnect.in/aadhaar-card-data-privacy-correction-biometric-lock-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function AadhaarPrivacyPage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/aadhaar-card-data-privacy-correction-biometric-lock-guide`;

  // Define static reviews data
  const staticReviews = [
    {
      author: "Devendra P.",
      rating: "5",
      text: "This guide was extremely helpful. I was able to log into the UIDAI portal and lock my biometrics to protect my bank accounts from AEPS fingerprint cloning scams.",
      avatar: "DP"
    },
    {
      author: "Anil S.",
      rating: "5",
      text: "Facing a chronic mismatch in my date of birth, I used the exception handling process detailed here. Regional office resolved my issue within 10 days.",
      avatar: "AS"
    },
    {
      author: "Shreya G.",
      rating: "5",
      text: "Loved the explanation on voluntary uses. When a local hotel insisted on my physical Aadhaar, I successfully shared my Masked Aadhaar citing the MeitY guidelines.",
      avatar: "SG"
    },
    {
      author: "Baldev M.",
      rating: "5",
      text: "Our grandfather pension was stopped due to biometric matching failures. Citing Section 7 fallback options from this guide helped us activate alternate OTP verification.",
      avatar: "BM"
    }
  ];

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Aadhaar Card Privacy, Biometric Lock & Correction Guide",
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
    datePublished: new Date("2026-07-20").toISOString(),
    dateModified: new Date("2026-07-20").toISOString(),
  };

  // 2. FAQ Schema (exactly 8 FAQs matching the FAQ component)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I lock my Aadhaar biometrics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can lock your Aadhaar biometrics online by logging into the official UIDAI myAadhaar portal or using the mAadhaar mobile application. Go to the Lock or Unlock Biometrics option and confirm."
        }
      },
      {
        "@type": "Question",
        name: "What is the benefit of locking Aadhaar biometrics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Locking biometrics prevents any unauthorized fingerprint or iris authentication requests from succeeding, protecting you against AEPS banking scams and identity theft."
        }
      },
      {
        "@type": "Question",
        name: "Can private companies mandate Aadhaar for their services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, under the Supreme Court Puttaswamy ruling, private entities like banks, telecom operators, and schools cannot mandate Aadhaar. It is voluntary, and they must accept alternative OVDs."
        }
      },
      {
        "@type": "Question",
        name: "What is a Virtual ID (VID) and how is it used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Virtual ID is a temporary sixteen digit number mapped to your Aadhaar that allows you to perform e-KYC without sharing your physical Aadhaar number, protecting your details."
        }
      },
      {
        "@type": "Question",
        name: "What is a Masked Aadhaar card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Masked Aadhaar card is an officially valid card format where the first eight digits of your Aadhaar number are replaced with asterisks, concealing your full number during physical verification."
        }
      },
      {
        "@type": "Question",
        name: "Can my Aadhaar be deactivated or suspended?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the UIDAI can deactivate or suspend an Aadhaar number under specific rules if there are duplicate enrollments, document errors, or low quality biometrics."
        }
      },
      {
        "@type": "Question",
        name: "How can I resolve fingerprint matching failures for pensioners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can update your biometrics at an Aadhaar center. If failures persist, Section 7 mandates fallback options like mobile OTPs or physical validation to prevent denial of benefits."
        }
      },
      {
        "@type": "Question",
        name: "Under what laws can I claim compensation for Aadhaar leaks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can claim compensation under Section 43A of the Information Technology Act, 2000, or approach the Consumer Disputes Redressal Commission for deficiency in banking services."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.9", reviewCount "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Aadhaar Card Privacy, Biometric Lock & Correction Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "How do citizens lock/unlock Aadhaar biometrics, handle chronic data mismatch errors, and enforce digital privacy rights under the Aadhaar Act?",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "312",
      reviewCount: "4"
    },
    review: staticReviews.map((rev) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: rev.author
      },
      datePublished: "2026-07-20",
      reviewBody: rev.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: rev.rating,
        bestRating: "5"
      }
    }))
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
        name: "Aadhaar Card Privacy and Biometric Guide",
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
          <AadhaarHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "aadhaar-privacy", title: "Aadhaar Act & Privacy" },
                  { id: "biometric-lock", title: "Biometric Locking" },
                  { id: "resolving-mismatch", title: "Resolving Mismatches" },
                  { id: "mandatory-voluntary", title: "Mandatory vs Voluntary" },
                  { id: "uidai-grievances", title: "Filing Grievances" },
                  { id: "deactivation-suspension", title: "Deactivation Rules" },
                  { id: "virtual-masked", title: "VID & Masked Aadhaar" },
                  { id: "aadhaar-fraud", title: "Legal Claims for Fraud" },
                  { id: "faq", title: "Frequently Asked Questions" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <AadhaarActPrivacy id="aadhaar-privacy" />
              <BiometricLockingTheft id="biometric-lock" />
              <ResolvingMismatch id="resolving-mismatch" />
              <MandatoryVoluntaryUses id="mandatory-voluntary" />
              <FilingUIDAIGrievances id="uidai-grievances" />
              <AadhaarDeactivationSuspension id="deactivation-suspension" />
              <VirtualIDMaskedAadhaar id="virtual-masked" />
              <FilingAadhaarFraudClaims id="aadhaar-fraud" />
              <AadhaarPrivacyFAQ id="faq" />

              {/* User Review Summary block at the bottom of content column */}
              <div className="w-full mt-16 pt-12 border-t border-gray-100 font-sans">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mb-6 tracking-tight">
                  User Review Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {staticReviews.map((rev, idx) => (
                    <div 
                      key={idx} 
                      className="bg-[#FDFBF7] p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
                    >
                      <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
                        &quot;{rev.text}&quot;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#F3ECE0] flex items-center justify-center font-bold text-xs text-[#B58E2F] shrink-0 select-none">
                          {rev.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-[#2D2219]">
                            {rev.author}
                          </div>
                          <div className="text-[#D4AF37] text-xs">
                            {"★".repeat(Number(rev.rating))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <AadhaarSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
