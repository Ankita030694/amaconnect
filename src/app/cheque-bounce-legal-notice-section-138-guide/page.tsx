import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import ChequeHero from "@/components/cheque-bounce/ChequeHero";
import ChequeOverview from "@/components/cheque-bounce/ChequeOverview";
import BounceGrounds from "@/components/cheque-bounce/BounceGrounds";
import DemandNoticeRules from "@/components/cheque-bounce/DemandNoticeRules";
import TimelineChecklist from "@/components/cheque-bounce/TimelineChecklist";
import CriminalComplaint from "@/components/cheque-bounce/CriminalComplaint";
import InterimCompensation from "@/components/cheque-bounce/InterimCompensation";
import DefenseAccusations from "@/components/cheque-bounce/DefenseAccusations";
import ComparingFormats from "@/components/cheque-bounce/ComparingFormats";
import ChequeFAQ from "@/components/cheque-bounce/ChequeFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import ChequeSidebar from "@/components/cheque-bounce/ChequeSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cheque Bounce Legal Notice Section 138 Guide | AMAConnect",
  description: "Learn about cheque dishonor, Section 138 legal notice rules, timelines, magistrate complaints, interim compensation, and legal defenses in India.",
  keywords: "cheque bounce India, Section 138 Negotiable Instruments Act, legal notice for cheque bounce, demand notice timeline, summary suit Order 37 CPC, interim compensation Section 143A",
  alternates: {
    canonical: "https://amaconnect.in/cheque-bounce-legal-notice-section-138-guide",
  },
  openGraph: {
    title: "Cheque Bounce Legal Notice Section 138 Guide",
    description: "Learn about cheque dishonor, Section 138 legal notice rules, timelines, magistrate complaints, interim compensation, and legal defenses in India.",
    url: "https://amaconnect.in/cheque-bounce-legal-notice-section-138-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function ChequeBounceGuidePage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/cheque-bounce-legal-notice-section-138-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    "headline": "Cheque Bounce & Legal Notice: Section 138 NI Act Recovery Guide",
    "description": "Learn about cheque dishonor, Section 138 legal notice rules, timelines, magistrate complaints, interim compensation, and legal defenses in India.",
    "image": `${baseUrl}/cta-bg.jpg`,
    "author": {
      "@type": "Person",
      "name": "AMA Legal Solutions",
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo2.svg`,
      },
    },
    "datePublished": "2026-07-14T00:00:00+05:30",
    "dateModified": "2026-07-14T00:00:00+05:30",
  };

  // 2. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the validity period of a cheque under Indian banking rules?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under Reserve Bank of India directives, a cheque is valid for exactly three months from the date written on its face. It must be presented to the bank for clearing within this three month window, otherwise it becomes stale and legally invalid for presentation."
        }
      },
      {
        "@type": "Question",
        "name": "Can a legal notice under Section 138 be sent via email or WhatsApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, recent judicial rulings have recognized electronic delivery via email or WhatsApp as valid service, provided delivery reports or read receipts are generated and presented in court. However, it is highly recommended to send it via Registered Post AD or Speed Post to ensure robust proof of service."
        }
      },
      {
        "@type": "Question",
        "name": "What is the maximum penalty if a cheque bounce case is proven against the accused?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If convicted under Section 138 of the Negotiable Instruments Act, the accused can be sentenced to imprisonment for a term extending up to two years, or fined an amount that can go up to double the value of the bounced cheque, or both."
        }
      },
      {
        "@type": "Question",
        "name": "Is a cheque bounce case bailable, and does the accused have to attend every hearing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Section 138 is a bailable offense, meaning the accused is entitled to bail as a matter of right upon appearing in court and executing a bail bond. The accused must attend court hearings, though they can apply for a permanent exemption from personal appearance under Section 205 of the Code of Criminal Procedure under specific grounds."
        }
      },
      {
        "@type": "Question",
        "name": "Can a cheque bounce case be filed against a company and its directors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, under Section 141 of the Negotiable Instruments Act, if the cheque was issued by a company, the company itself is the primary accused. The directors who were in charge of and responsible for the conduct of the business at the time of the offense can also be prosecuted as co-accused."
        }
      },
      {
        "@type": "Question",
        "name": "Can a complaint be filed if the cheque was given as a gift or charity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, a Section 138 complaint can only be initiated if the cheque was issued for the discharge of a legally enforceable debt or other liability. Cheques issued as gifts, charity, donations, or without any underlying consideration do not attract criminal liability under this section."
        }
      },
      {
        "@type": "Question",
        "name": "What is the timeline to file a Section 138 complaint after the notice period expires?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The payee must file the criminal complaint in court within thirty days from the date the cause of action arises. The cause of action arises immediately on the sixteenth day from the date the drawer received the demand notice (giving them fifteen days to pay)."
        }
      },
      {
        "@type": "Question",
        "name": "What is interim compensation, and how can the complainant apply for it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under Section 143A of the NI Act, the trial court can direct the accused to pay up to twenty percent of the cheque amount as interim compensation. The complainant can apply for this after charges are framed or when the accused enters a plea of not guilty during the summons stage."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if the complainant misses the 30-day timeline to file the court complaint?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If the thirty day window is missed, the payee must file a Condonation of Delay application under Section 142(1)(b) of the NI Act. The court will only condone the delay if the complainant satisfies the court that they had sufficient and genuine cause for not filing the complaint within the statutory period."
        }
      }
    ]
  };

  // 3. BreadcrumbList Schema
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
        "name": "Cheque Bounce Legal Notice Guide",
        "item": pageUrl,
      },
    ],
  };

  // 4. Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Cheque Bounce Legal Notice Guide",
    "image": `${baseUrl}/cta-bg.jpg`,
    "description": "Comprehensive guide on Section 138 demand notice rules, timelines, limitation periods, magistrate complaints, and legal defenses for bounced cheques in India.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "4",
      "bestRating": "5",
      "worstRating": "1",
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Schema Injection */}
      <Script
        id="cheque-bounce-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="cheque-bounce-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="cheque-bounce-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="cheque-bounce-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Semantic Main Wrapper */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <ChequeHero />
          
          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav with exactly 9 points tracking H2s */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav sections={[
                { id: "overview", title: "Understanding Dishonor" },
                { id: "grounds", title: "Bounce Grounds" },
                { id: "rules", title: "Demand Notice Rules" },
                { id: "limitation", title: "Limitation Timeline" },
                { id: "complaint", title: "Court Complaint" },
                { id: "compensation", title: "Interim Relief" },
                { id: "defense", title: "Legal Defenses" },
                { id: "comparison", title: "Notice Comparisons" },
                { id: "faq", title: "Common FAQs" }
              ]} />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              
              {/* Lead Hook */}
              <div className="bg-[#FAF9F5] border-l-4 border-[#D4AF37] p-6 rounded-r-3xl mb-12">
                <p className="text-[#2D2219] font-medium text-sm sm:text-base leading-relaxed text-justify">
                  Over 75 percent of financial disputes in metropolitan magistrate courts involve cheque dishonor complaints. Acting swiftly within the strict 30 day statutory timeline and issuing a flawless Section 138 demand notice is the only path to recovering outstanding debts and initiating criminal prosecution.
                </p>
                <p className="text-gray-600 text-xs mt-3 leading-relaxed">
                  If you need immediate legal templates or formal notice formats, you can <a href="/contact" className="text-[#D4AF37] font-bold hover:underline">consult our legal support team</a>. You can also get answers directly on our platform or consult banking experts.
                </p>
              </div>

              {/* Sections */}
              <ChequeOverview id="overview" />
              <BounceGrounds id="grounds" />
              <DemandNoticeRules id="rules" />
              <TimelineChecklist id="limitation" />
              <CriminalComplaint id="complaint" />
              <InterimCompensation id="compensation" />
              <DefenseAccusations id="defense" />
              <ComparingFormats id="comparison" />
              <ChequeFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Widget */}
            <div className="w-full sticky top-24">
              <ChequeSidebar />
            </div>

          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
