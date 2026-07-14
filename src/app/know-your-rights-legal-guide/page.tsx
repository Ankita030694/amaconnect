import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import LegalGuideHero from "@/components/legal-guide/LegalGuideHero";
import PoliceArrestRights from "@/components/legal-guide/PoliceArrestRights";
import TenantRights from "@/components/legal-guide/TenantRights";
import ConsumerRights from "@/components/legal-guide/ConsumerRights";
import EmployeeRights from "@/components/legal-guide/EmployeeRights";
import WomensRights from "@/components/legal-guide/WomensRights";
import RTIAct from "@/components/legal-guide/RTIAct";
import BasicCriminalDefense from "@/components/legal-guide/BasicCriminalDefense";
import DigitalPrivacyRights from "@/components/legal-guide/DigitalPrivacyRights";
import SeniorCitizensProtection from "@/components/legal-guide/SeniorCitizensProtection";
import LegalGuideFAQ from "@/components/legal-guide/LegalGuideFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import LegalGuideSidebar from "@/components/legal-guide/LegalGuideSidebar";
import Footer from "@/components/Footer";

// SEO Metadata Injection
export const metadata: Metadata = {
  title: "Know Your Rights: A Free Legal Guide for Everyday Citizens | AMAConnect",
  description:
    "Learn your basic legal rights in India. A comprehensive free guide covering tenant rights, consumer protection, employee rights, arrest guidelines, criminal defense, privacy, and women's rights.",
  keywords: "know your rights India, basic legal rights, consumer rights, employee rights guide, legal rights in India, free legal guide, criminal defense rights, cyber privacy laws, senior citizen protection",
  alternates: {
    canonical: "https://amaconnect.in/know-your-rights-legal-guide",
  },
  openGraph: {
    title: "Know Your Rights: A Free Legal Guide for Everyday Citizens",
    description:
      "Learn your basic legal rights in India. A comprehensive free guide covering tenant rights, consumer protection, employee rights, arrest guidelines, criminal defense, privacy, and women's rights.",
    url: "https://amaconnect.in/know-your-rights-legal-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function KnowYourRightsPage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/know-your-rights-legal-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Know Your Rights: A Free Legal Guide for Everyday Citizens",
    image: `${baseUrl}/logo2.svg`,
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

  // 2. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can a landlord evict me without notice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, a landlord cannot evict you without prior notice. Under standard rent agreements and state rent control acts, landlords must serve a written eviction notice specifying the grounds for eviction. Self-help measures like changing locks or turning off utilities are completely illegal and can be legally contested by the tenant.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if a store refuses to replace a defective item?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If a store refuses to replace a defective item or refund your money, you can send them a written notice detailing the issue. If they do not respond within 15 days, you can register a complaint on the National Consumer Helpline portal (NCH) by calling 1915 or file a case on the e-Daakhil portal for the Consumer Dispute Redress Commission.",
        },
      },
      {
        "@type": "Question",
        name: "Is a verbal contract legally binding in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, under Section 10 of the Indian Contract Act, 1872, oral/verbal contracts are legally valid and binding, provided they fulfill the essentials of a valid contract (free consent, lawful consideration, competent parties, etc.). However, verbal agreements are notoriously difficult to prove in court, which is why written, registered agreements are always recommended.",
        },
      },
      {
        "@type": "Question",
        name: "What are my rights if I am detained by the police for questioning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you are detained or stopped for questioning, you have the right to remain silent to avoid self-incrimination, the right to ask if you are being placed under arrest or are free to leave, and the right to consult a lawyer immediately. Police cannot physically coerce or abuse you under the guise of questioning.",
        },
      },
      {
        "@type": "Question",
        name: "How do I file an RTI if I do not know the exact officer's name?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You do not need to know the name of the Public Information Officer (PIO) to file an RTI. You can address your application to 'The Central Public Information Officer (CPIO)' or 'The Public Information Officer (PIO)' of the respective department or ministry. By law, if the department you sent it to doesn't hold the information, the PIO must forward it to the correct department within 5 days.",
        },
      },
    ],
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

      {/* Semantic Main Wrapper */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <LegalGuideHero />
          
          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav with 10 items */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav sections={[
                { id: "police", title: "Police & Arrest" },
                { id: "tenant", title: "Tenant Rights" },
                { id: "consumer", title: "Consumer Law" },
                { id: "employee", title: "Employee Rights" },
                { id: "women", title: "Women's Rights" },
                { id: "rti", title: "RTI Act" },
                { id: "criminal", title: "Criminal Defense" },
                { id: "digital", title: "Cyber Rights" },
                { id: "senior", title: "Elderly Protection" },
                { id: "faq", title: "Common Q&As" }
              ]} />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <PoliceArrestRights id="police" />
              <TenantRights id="tenant" />
              <ConsumerRights id="consumer" />
              <EmployeeRights id="employee" />
              <WomensRights id="women" />
              <RTIAct id="rti" />
              <BasicCriminalDefense id="criminal" />
              <DigitalPrivacyRights id="digital" />
              <SeniorCitizensProtection id="senior" />
              <LegalGuideFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Widgets */}
            <div className="w-full sticky top-24">
              <LegalGuideSidebar />
            </div>

          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
