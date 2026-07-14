import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import LoanSettleHero from "@/components/loan-settle/LoanSettleHero";
import UnderstandingTrap from "@/components/loan-settle/UnderstandingTrap";
import RbiGuidelines from "@/components/loan-settle/RbiGuidelines";
import StepByStepProcess from "@/components/loan-settle/StepByStepProcess";
import RedFlags from "@/components/loan-settle/RedFlags";
import CommonMyths from "@/components/loan-settle/CommonMyths";
import SettleSafely from "@/components/loan-settle/SettleSafely";
import DefamationBlackmail from "@/components/loan-settle/DefamationBlackmail";
import InterestRights from "@/components/loan-settle/InterestRights";
import FaqSection from "@/components/loan-settle/FaqSection";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import LoanSettleSidebar from "@/components/loan-settle/LoanSettleSidebar";
import Footer from "@/components/Footer";

// SEO Metadata Injection
export const metadata: Metadata = {
  title: "Loan App Debt Settlement Guide & Harassment Help | AMAConnect",
  description:
    "Facing intimidation from illegal 7-day lending apps? Learn how to settle your debt, invoke RBI guidelines against recovery harassment, and protect your privacy.",
  keywords: "loan app harassment, 7 day loan app settlement, RBI recovery agent rules, digital lending fraud, stop loan app blackmail, cyber cell complaint, debt settlement India",
  alternates: {
    canonical: "https://amaconnect.in/loan-app-debt-settlement-harassment-legal-help",
  },
  openGraph: {
    title: "Loan App Debt Settlement Guide & Harassment Help",
    description:
      "Facing intimidation from illegal 7-day lending apps? Learn how to settle your debt, invoke RBI guidelines against recovery harassment, and protect your privacy.",
    url: "https://amaconnect.in/loan-app-debt-settlement-harassment-legal-help",
    siteName: "AMA Legal Solutions",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Loan App Debt Settlement Guide Logo",
      },
    ],
  },
};

export default function LoanSettlePage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/loan-app-debt-settlement-harassment-legal-help`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Loan App Debt Settlement & Harassment Protection Guide",
    image: `${baseUrl}/anujbhiya.png`,
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      url: `${baseUrl}/about`,
      image: `${baseUrl}/anujbhiya.png`,
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

  // 2. FAQ Schema (8 FAQs)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What should I do if a 7-day loan app is threatening to share my photos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "First, do not panic and do not pay them under threat, as paying will only lead to further extortion demands. Block all communication channels immediately. Inform your family and close contacts that your phone database has been compromised by a fraudulent app and that they might receive spam or abusive messages. Report the app and the harassment numbers on the National Cyber Crime Portal (cybercrime.gov.in) and file a complaint at your local police station.",
        },
      },
      {
        "@type": "Question",
        name: "Can unregistered loan apps affect my CIBIL score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, unregistered loan apps cannot affect your CIBIL score. These platforms operate illegally outside the regulatory framework of the Reserve Bank of India. They are not members of credit bureaus like TransUnion CIBIL, Equifax, or Experian. Therefore, they have no legal authority to report defaults or retrieve your official credit history, and your credit rating remains completely safe from their claims.",
        },
      },
      {
        "@type": "Question",
        name: "How do I verify if a lending app is registered with the RBI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A legitimate lending app must disclose its associated bank or Non-Banking Financial Company (NBFC) on its app store description and website. You can verify this by checking the official RBI website, which lists all registered banks and NBFCs. Cross-reference the lender's stated partner name against this official directory. If the app does not list an NBFC partner or uses a fake name, it is unregistered and illegal.",
        },
      },
      {
        "@type": "Question",
        name: "What are the legal hours for recovery agents to contact a borrower?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "According to RBI guidelines and the Fair Practice Code, recovery agents are strictly permitted to contact or visit borrowers only between 8:00 AM and 7:00 PM. Calls, messages, or visits outside these hours are illegal. Additionally, agents cannot call from private or untraceable numbers and must identify themselves and their representing financial institution immediately.",
        },
      },
      {
        "@type": "Question",
        name: "Can a recovery agent enter my house and seize my assets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely not. Private recovery agents have zero legal authority to trespass, enter your home without your explicit permission, or confiscate any personal belongings like furniture, vehicles, or electronics. Forcing entry or taking property is a criminal offense under the Bharatiya Nyaya Sanhita, constituting criminal trespass, house-breaking, and theft.",
        },
      },
      {
        "@type": "Question",
        name: "What is a One-Time Settlement (OTS) and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A One-Time Settlement (OTS) is an agreement between the borrower and lender where the lender accepts a single, reduced payment to settle the debt completely. Typically, in cases of harassment, borrowers negotiate to pay only the principal amount, requesting a waiver of all illegal interest and penalties. The settlement must be confirmed in writing through a formal settlement letter before payment.",
        },
      },
      {
        "@type": "Question",
        name: "What is a No Objection Certificate (NOC) and why is it important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A No Objection Certificate (NOC) or No Dues Certificate is a legal document issued by the lender after loan closure. It certifies that the borrower has cleared all outstanding dues and that the lender has no further claims. This certificate is crucial for verifying that the loan is closed and for updating credit registry data to show a settled status.",
        },
      },
      {
        "@type": "Question",
        name: "How can I file a complaint against recovery harassment if the police refuse to take action?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If the local police station refuses to register your complaint, you can send a written complaint to the Superintendent of Police (SP) or file a case directly with the cyber cell online. If the lending platform is registered, you can lodge a formal complaint with the RBI Ombudsman through the Sachet portal or call the national helpline 1915 to get government intervention.",
        },
      },
    ],
  };

  // 3. AggregateRating Schema (exact 4 reviews)
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Loan App Debt Settlement & Harassment Protection Guide",
    "image": `${baseUrl}/anujbhiya.png`,
    "description": "Step-by-step guide to settling 7-day loan app debt and protection against illegal recovery agent harassment under RBI guidelines.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "4",
    },
  };

  // 4. BreadcrumbList Schema
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
        "name": "Loan App Debt Settlement Guide",
        "item": pageUrl,
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Schema Injections */}
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
        id="rating-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Semantic Main Wrapper */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <LoanSettleHero />
          
          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav with 9 items */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "understanding", title: "The 7-Day App Trap" },
                  { id: "rbi", title: "RBI Recovery Rules" },
                  { id: "step-by-step", title: "Settlement Steps" },
                  { id: "red-flags", title: "Red Flags to Spot" },
                  { id: "myths", title: "Recovery Myths" },
                  { id: "settle-safely", title: "Settle Safely" },
                  { id: "defamation-blackmail", title: "Defamation & Blackmail" },
                  { id: "interest-rights", title: "Interest Rights" },
                  { id: "faq", title: "Frequently Asked Qs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <UnderstandingTrap id="understanding" />
              <RbiGuidelines id="rbi" />
              <StepByStepProcess id="step-by-step" />
              <RedFlags id="red-flags" />
              <CommonMyths id="myths" />
              <SettleSafely id="settle-safely" />
              <DefamationBlackmail id="defamation-blackmail" />
              <InterestRights id="interest-rights" />
              <FaqSection id="faq" />
            </div>

            {/* Right Column: Sticky Widgets */}
            <div className="w-full sticky top-24">
              <LoanSettleSidebar />
            </div>

          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
