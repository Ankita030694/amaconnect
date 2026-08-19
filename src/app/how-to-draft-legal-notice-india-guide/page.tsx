import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import LegalNoticeHero from "@/components/legal-notice/LegalNoticeHero";
import WhatIsNotice from "@/components/legal-notice/WhatIsNotice";
import EssentialElements from "@/components/legal-notice/EssentialElements";
import DraftingProcess from "@/components/legal-notice/DraftingProcess";
import HowToReply from "@/components/legal-notice/HowToReply";
import NoticeEvidence from "@/components/legal-notice/NoticeEvidence";
import SuppressingFacts from "@/components/legal-notice/SuppressingFacts";
import CostBreakdown from "@/components/legal-notice/CostBreakdown";
import ComparingFormats from "@/components/legal-notice/ComparingFormats";
import LegalNoticeFAQ from "@/components/legal-notice/LegalNoticeFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import LegalNoticeSidebar from "@/components/legal-notice/LegalNoticeSidebar";
import Footer from "@/components/Footer";

// SEO Metadata
export const metadata: Metadata = {
  title: "How to Draft a Legal Notice in India",
  description:
    "A comprehensive guide to drafting, sending, and replying to a legal notice in India. Learn about CPC Section 80, Section 138 notices, and standard formatting.",
  keywords: "legal notice India, how to draft legal notice, Section 80 CPC, cheque bounce notice, eviction notice, reply to legal notice, drafting fees",
  alternates: {
    canonical: "https://www.amaconnect.in/how-to-draft-legal-notice-india-guide",
  },
  openGraph: {
    title: "How to Draft a Legal Notice in India",
    description:
      "A comprehensive guide to drafting, sending, and replying to a legal notice in India. Learn about CPC Section 80, Section 138 notices, and standard formatting.",
    url: "https://www.amaconnect.in/how-to-draft-legal-notice-india-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function LegalNoticePage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/how-to-draft-legal-notice-india-guide`;

  // 1. Article & AggregateRating Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "How to Draft a Legal Notice in India: A Step-by-Step Guide",
    description:
      "Learn the exact legal framework, standard formatting, and step-by-step process for drafting, sending, and replying to a legal notice under Indian law.",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "4",
      bestRating: "5",
      worstRating: "1",
    },
  };

  // 2. FAQ Schema (9 FAQs)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is it mandatory to send a legal notice through an advocate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Technically, an individual can draft and send a legal notice in their personal capacity. However, it is highly recommended to send it through a registered advocate, as advocates understand the precise legal terminology, relevant sections, and standard formatting. A notice sent under an advocate's letterhead carries significantly more weight and signals seriousness to the recipient, encouraging them to settle.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if the recipient refuses to accept the legal notice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If the recipient deliberately refuses to accept the registered post, it is returned to the sender with a postal endorsement like, Refused, or, Not Claimed. Under Section 27 of the General Clauses Act, 1897, and Section 114 of the Indian Evidence Act, the court will presume that the notice has been successfully served, since it was sent to the correct address. The recipient cannot use non-acceptance as a defense.",
        },
      },
      {
        "@type": "Question",
        name: "Can a legal notice be sent online via email or WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, in modern legal practice, sending a legal notice via email or instant messaging apps like WhatsApp is legally valid. The Supreme Court of India has recognized service through electronic means, provided delivery reports can be generated. However, it is best practice to send a physical copy via Registered Post AD or Speed Post alongside the electronic copy to avoid any service disputes in court.",
        },
      },
      {
        "@type": "Question",
        name: "What is the statutory notice period for a government body under Section 80 of CPC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The statutory notice period for any government department, public officer, or state body under Section 80 of the Code of Civil Procedure, 1908, is strictly two months next after notice in writing has been delivered. Filing a lawsuit against the government before the expiration of this two month window will result in the rejection of the plaint, unless court permission is obtained for urgent relief.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a legal notice and a demand letter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While the terms are often used interchangeably, a demand letter is typically a business communication requesting payment or performance without threatening immediate legal action. A legal notice is a formal, statutory document sent under advocate letterhead, outlining the cause of action, citing statutory violations, giving a strict deadline for compliance, and clearly warning of civil or criminal litigation.",
        },
      },
      {
        "@type": "Question",
        name: "Can a legal notice be modified or withdrawn after it is sent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Once a legal notice is sent and received, the facts and claims stated in it cannot be easily changed or withdrawn, as they become a matter of record. If there is a typographical error or minor mistake, the advocate can send a corrigendum notice or addendum notice to correct it. However, withdrawing a notice completely is rare and usually happens only when an out of court settlement is reached.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if the details in the legal notice I received are completely false?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you receive a legal notice containing false allegations, you must not ignore it. You should consult an advocate immediately to draft a formal reply notice. In the reply, you must deny all the false allegations paragraph-by-paragraph and present your own version of the facts, supported by relevant documents. This prevents the sender from claiming in court that you accepted the allegations by remaining silent.",
        },
      },
      {
        "@type": "Question",
        name: "What is the limitation period for filing a suit after sending a legal notice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sending a legal notice does not halt or extend the limitation period for filing a lawsuit, which is governed by the Limitation Act, 1963. For most civil disputes, like breach of contract or recovery of money, the limitation period is three years from the date the cause of action arose. You must file the suit within this period, regardless of when the legal notice was sent.",
        },
      },
      {
        "@type": "Question",
        name: "Is a legal notice valid if it does not contain the advocate's enrollment number?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While the absence of an enrollment number does not automatically make the notice illegal, standard professional rules of the Bar Council of India require advocates to display their registration or enrollment details on their letterheads. A notice containing the enrollment number, office address, and signature of the advocate establishes authenticity and protects the client from fraudulent notices sent by unauthorized persons.",
        },
      },
    ],
  };

  // 3. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Legal Notice Guide",
        item: pageUrl,
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

      {/* Semantic Main Wrapper */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <LegalNoticeHero />
          
          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav with 7 sections */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav sections={[
                { id: "what-is-notice", title: "What is a Legal Notice" },
                { id: "essential-elements", title: "Essential Elements" },
                { id: "drafting-process", title: "Drafting Process" },
                { id: "how-to-reply", title: "How to Reply" },
                { id: "notice-evidence", title: "Notice as Evidence" },
                { id: "suppressing-facts", title: "Suppressing Facts" },
                { id: "cost-breakdown", title: "Cost Breakdown" },
                { id: "comparing-formats", title: "Comparing Formats" },
                { id: "faq", title: "Common FAQs" }
              ]} />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              
              {/* Lead Hook */}
              <div className="bg-[#FAF9F5] border-l-4 border-[#D4AF37] p-6 rounded-r-3xl mb-12">
                <p className="text-[#2D2219] font-medium text-sm sm:text-base leading-relaxed text-justify">
                  Statistics from the National Judicial Data Grid show that over 80 percent of civil contract disputes are resolved before trial when a properly drafted legal notice is served. Preparing a legal notice with precise dates, claims, and statutory provisions is critical to enforcing your civil rights.
                </p>
              </div>

              {/* Sections */}
              <WhatIsNotice id="what-is-notice" />
              <EssentialElements id="essential-elements" />
              <DraftingProcess id="drafting-process" />
              <HowToReply id="how-to-reply" />
              <NoticeEvidence id="notice-evidence" />
              <SuppressingFacts id="suppressing-facts" />
              <CostBreakdown id="cost-breakdown" />
              <ComparingFormats id="comparing-formats" />
              <LegalNoticeFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Widgets */}
            <div className="w-full sticky top-24">
              <LegalNoticeSidebar />
            </div>

          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
