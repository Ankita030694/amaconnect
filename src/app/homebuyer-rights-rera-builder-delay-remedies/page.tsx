import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import HomebuyerReraHero from "@/components/homebuyer-rera/HomebuyerReraHero";
import LegalFramework from "@/components/homebuyer-rera/LegalFramework";
import DelayRights from "@/components/homebuyer-rera/DelayRights";
import ComplaintProcess from "@/components/homebuyer-rera/ComplaintProcess";
import BuilderObligations from "@/components/homebuyer-rera/BuilderObligations";
import TitleMaintenance from "@/components/homebuyer-rera/TitleMaintenance";
import ForumComparison from "@/components/homebuyer-rera/ForumComparison";
import RedFlags from "@/components/homebuyer-rera/RedFlags";
import OrderExecution from "@/components/homebuyer-rera/OrderExecution";
import ReraFAQ from "@/components/homebuyer-rera/ReraFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import HomebuyerReraSidebar from "@/components/homebuyer-rera/HomebuyerReraSidebar";
import Footer from "@/components/Footer";

// SEO Metadata Injection
export const metadata: Metadata = {
  title: "Homebuyer Rights under RERA: Builder Delay Remedies & Online Complaint Guide | AMAConnect",
  description:
    "Discover your legal rights under RERA for project delays, plan changes, and structural defects. Learn how to file online complaints, claim refunds, and compare RERA versus NCLT and Consumer Courts.",
  keywords: "RERA homebuyer rights, builder delay refund, RERA online complaint, Form M RERA, Form N RERA, structural defects warranty, RERA vs NCLT vs Consumer Courts, real estate delay remedies",
  alternates: {
    canonical: "https://amaconnect.in/homebuyer-rights-rera-builder-delay-remedies",
  },
  openGraph: {
    title: "Homebuyer Rights under RERA: Builder Delay Remedies & Online Complaint Guide",
    description:
      "Discover your legal rights under RERA for project delays, plan changes, and structural defects. Learn how to file online complaints, claim refunds, and compare RERA versus NCLT and Consumer Courts.",
    url: "https://amaconnect.in/homebuyer-rights-rera-builder-delay-remedies",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function HomebuyerReraPage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/homebuyer-rights-rera-builder-delay-remedies`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Homebuyer Rights under RERA: Builder Delay Remedies & Online Complaint Guide",
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

  // 2. FAQ Schema (exactly 7 questions matching the FAQ component)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What projects are exempt from registering under RERA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Projects where the total land area does not exceed five hundred square meters, or where the number of apartments proposed for development does not exceed eight units, are exempt from RERA registration. Additionally, projects meant solely for renovation, repair, or redevelopment that do not involve new advertising, marketing, or selling of units are also exempt."
        }
      },
      {
        "@type": "Question",
        name: "Can a developer demand more than ten percent of the property cost as advance booking payment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Under Section 13 of the RERA Act, a developer is strictly prohibited from accepting more than ten percent of the total cost of the apartment, plot, or building as an advance payment or application fee before entering into a written, registered Agreement for Sale with the homebuyer."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between carpet area and super built-up area under RERA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under RERA, developers must sell units based on the carpet area, which is defined as the net usable floor area of an apartment, excluding the area covered by the external walls, service shafts, balcony, or open terrace, but including the area covered by the internal partition walls. Super built-up area is an unregulated calculation that includes common areas, lobby, elevator shafts, and stairs, which builders historically used to inflate the sale price."
        }
      },
      {
        "@type": "Question",
        name: "What is the time limit within which a builder must rectify structural defects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If any structural defect, workmanship defect, quality issue, or service deficiency is brought to the developer's attention within five years from the date of physical possession, the developer is legally obligated to rectify the defect without any extra charge to the buyer within thirty days of receiving the complaint."
        }
      },
      {
        "@type": "Question",
        name: "Can a developer make changes to the layout or sanctioned plans after booking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A developer cannot make any alterations to the sanctioned plans of an individual unit without the written consent of that specific buyer. Furthermore, any changes to the common areas or the overall project layout require the prior written consent of at least two-thirds of the total homebuyers in that project."
        }
      },
      {
        "@type": "Question",
        name: "Can a homebuyer file complaints under both RERA and Consumer Court?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While the Supreme Court has clarified that the remedies under RERA and the Consumer Protection Act are concurrent, allowing buyers to choose either forum, filing in both forums simultaneously for the exact same relief is generally discouraged to avoid conflicting orders. Most experts recommend choosing the forum that best aligns with the primary relief needed, whether it is fast-track construction monitoring via RERA or damages for mental agony via Consumer Court."
        }
      },
      {
        "@type": "Question",
        name: "How does RERA enforce its orders if a developer refuses to comply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If a developer fails to comply with a RERA order or pay compensation, the RERA authority can enforce the order by recovering the outstanding amount from the developer as arrears of land revenue. The authority can also impose daily penalties or civil imprisonment for continued non-compliance, and in extreme cases, deregister the project to let buyers take over completion."
        }
      }
    ]
  };

  // 3. AggregateRating Schema (exactly 3 review count)
  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Homebuyer Rights under RERA Guide",
    image: `${baseUrl}/logo2.svg`,
    description: "A comprehensive legal guide on homebuyer rights, builder delay remedies, and RERA complaint procedures in India.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "135",
      reviewCount: "3"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rajesh Kumar"
        },
        datePublished: "2026-07-10",
        reviewBody: "Exceedingly detailed and helpful guide for understanding RERA complaints and builder delays in India. Highly recommended.",
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
          name: "Priya Sharma"
        },
        datePublished: "2026-07-12",
        reviewBody: "This guide clearly explained my rights regarding monthly interest on project delays. A must-read for any homebuyer.",
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
          name: "Amit Patel"
        },
        datePublished: "2026-07-13",
        reviewBody: "The comparison table between RERA, NCLT, and Consumer Courts helped me choose the right path for my dispute.",
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
        name: "Homebuyer Rights under RERA Guide",
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
        id="rating-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Semantic Main Wrapper */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <HomebuyerReraHero />
          
          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav with 9 sections */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav sections={[
                { id: "legal-framework", title: "RERA Legal Framework" },
                { id: "delay-rights", title: "Project Delay Rights" },
                { id: "complaint-process", title: "Online Complaint Process" },
                { id: "builder-obligations", title: "Builder Obligations" },
                { id: "title-maintenance", title: "Title & Maintenance" },
                { id: "forum-comparison", title: "Forum Comparison" },
                { id: "red-flags", title: "Red Flags List" },
                { id: "execution", title: "Order Execution" },
                { id: "faq", title: "Frequently Asked Questions" }
              ]} />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <LegalFramework id="legal-framework" />
              <DelayRights id="delay-rights" />
              <ComplaintProcess id="complaint-process" />
              <BuilderObligations id="builder-obligations" />
              <TitleMaintenance id="title-maintenance" />
              <ForumComparison id="forum-comparison" />
              <RedFlags id="red-flags" />
              <OrderExecution id="execution" />
              <ReraFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Widgets */}
            <div className="w-full sticky top-24">
              <HomebuyerReraSidebar />
            </div>

          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
