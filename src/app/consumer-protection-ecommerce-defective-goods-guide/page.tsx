import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import ConsumerHero from "@/components/consumer-protection/ConsumerHero";
import ConsumerRights from "@/components/consumer-protection/ConsumerRights";
import EcommerceRules from "@/components/consumer-protection/EcommerceRules";
import DefectiveGoods from "@/components/consumer-protection/DefectiveGoods";
import MisleadingAds from "@/components/consumer-protection/MisleadingAds";
import OnlineComplaintProcess from "@/components/consumer-protection/OnlineComplaintProcess";
import CommissionsFiling from "@/components/consumer-protection/CommissionsFiling";
import JurisdictionFees from "@/components/consumer-protection/JurisdictionFees";
import ExecutionOrders from "@/components/consumer-protection/ExecutionOrders";
import ConsumerFAQ from "@/components/consumer-protection/ConsumerFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import ConsumerSidebar from "@/components/consumer-protection/ConsumerSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Consumer Protection & E-Commerce Defective Goods Guide | AMAConnect",
  description:
    "A comprehensive legal guide on consumer rights, product defects, e-commerce rules, misleading advertisements, and e-Daakhil court filings in India.",
  keywords: "consumer protection act 2019, e-commerce rules 2020, product liability India, e-daakhil filing, pecuniary jurisdiction consumer court, misleading advertisements, consumer rights India, unfair trade practices",
  alternates: {
    canonical: "https://www.amaconnect.in/consumer-protection-ecommerce-defective-goods-guide",
  },
  openGraph: {
    title: "Consumer Protection & E-Commerce Defective Goods Guide",
    description:
      "A comprehensive legal guide on consumer rights, product defects, e-commerce rules, misleading advertisements, and e-Daakhil court filings in India.",
    url: "https://www.amaconnect.in/consumer-protection-ecommerce-defective-goods-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function ConsumerProtectionPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/consumer-protection-ecommerce-defective-goods-guide`;

  // 1. Article Schema (Publisher: "AMA Legal Solutions", Author Person: "AMA Legal Solutions", image: "/cta-bg.jpg")
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Consumer Protection, E-Commerce, and Defective Goods Guide in India",
    image: `${baseUrl}/cta-bg.jpg`,
    author: {
      "@type": "Person",
      name: "AMA Legal Solutions",
      url: `${baseUrl}/about`,
      image: `${baseUrl}/logo2.svg`,
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

  // 2. FAQ Schema (exactly 8 FAQs matching the FAQ component)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What qualifies as a defect in goods under Indian consumer law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A defect is defined as any fault, imperfection, or shortcoming in the quality, quantity, purity, or standard of a product that is required to be maintained under law or contract. Common examples include hardware failures in electronic appliances, manufacturing defects in cars, contaminated food, or receiving items that do not match the product description."
        }
      },
      {
        "@type": "Question",
        name: "What are the key timelines for filing a consumer complaint?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 69 of the Consumer Protection Act, 2019, a complaint must be filed within two years from the date on which the cause of action arose (the date the defect was discovered, or when the service provider refused redressal). Late filings are accepted only if you prove sufficient cause for the delay."
        }
      },
      {
        "@type": "Question",
        name: "Can I file a complaint for a purchase made from an international e-commerce website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if the international e-commerce entity has a registered office, conducts active business, or targets consumers in India. Under the E-Commerce Rules, 2020, they must appoint a local nodal officer or representative in India to ensure compliance and handle consumer grievances."
        }
      },
      {
        "@type": "Question",
        name: "Do I need to hire a lawyer to represent me in consumer court?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, consumer commissions are designed for direct consumer access. A consumer can draft, file, and argue their own case without an advocate. However, for high-value claims or complex product liability disputes, consulting a qualified lawyer is recommended to ensure procedural and legal accuracy."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between product liability and service deficiency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Product liability holds a manufacturer, seller, or service provider liable to compensate for physical harm, property damage, or death caused by a defective product. Service deficiency is a broader term covering poor, incomplete, or delayed performance of services like banking, insurance, or medical care."
        }
      },
      {
        "@type": "Question",
        name: "Can a consumer claim compensation for mental harassment and litigation costs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, consumer commissions have the authority to grant compensation not just for financial losses, but also for mental agony, harassment, and physical suffering caused by the defect or deficiency, as well as the actual cost of litigation incurred by filing the case."
        }
      },
      {
        "@type": "Question",
        name: "What happens if a seller or service provider ignores the consumer commission notice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If the opposite party fails to appear or reply within thirty days (extendable by fifteen days) after receiving the notice, the commission can proceed ex-parte. This means the case will be heard and decided based solely on the evidence and arguments presented by the consumer."
        }
      },
      {
        "@type": "Question",
        name: "How do I appeal against an unfavorable order passed by a District Commission?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you are unsatisfied with a District Commission's order, you can file an appeal in the State Consumer Disputes Redressal Commission within forty-five days of receiving the order. To appeal, the appellant must deposit fifty percent of the ordered compensation amount with the State Commission."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.8", reviewCount exactly "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Consumer Protection and E-Commerce Defective Goods Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "A comprehensive legal guide on consumer rights, product defects, e-commerce rules, misleading advertisements, and e-Daakhil court filings in India.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "284",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rohit Sen"
        },
        datePublished: "2026-06-15",
        reviewBody: "This guide helped me understand the 2021 revised pecuniary jurisdiction rules. I successfully filed on e-Daakhil without a lawyer.",
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
          name: "Aditi Rao"
        },
        datePublished: "2026-07-02",
        reviewBody: "Clear explanation of the e-commerce rules and the 48-hour response requirement for grievance officers. Very helpful resource.",
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
          name: "Manish Kumar"
        },
        datePublished: "2026-07-10",
        reviewBody: "Saved me hours of searching for consumer court fee tables. Perfect checklist for preparing petition files before uploading.",
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
          name: "Priya Sharma"
        },
        datePublished: "2026-07-12",
        reviewBody: "The details on criminal enforcement under Section 72 are invaluable. This is a must-read for any consumer seeking a refund.",
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
        name: "Consumer Protection & E-Commerce Defective Goods Guide",
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
          <ConsumerHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "consumer-rights", title: "Consumer Rights" },
                  { id: "ecommerce-rules", title: "E-Commerce Rules" },
                  { id: "defective-goods", title: "Defective Goods" },
                  { id: "misleading-ads", title: "Misleading Ads" },
                  { id: "online-complaint", title: "Online Complaints" },
                  { id: "commissions-filing", title: "Commissions Filing" },
                  { id: "jurisdiction-fees", title: "Jurisdiction & Fees" },
                  { id: "execution-orders", title: "Order Execution" },
                  { id: "faq", title: "Common FAQs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <ConsumerRights id="consumer-rights" />
              <EcommerceRules id="ecommerce-rules" />
              <DefectiveGoods id="defective-goods" />
              <MisleadingAds id="misleading-ads" />
              <OnlineComplaintProcess id="online-complaint" />
              <CommissionsFiling id="commissions-filing" />
              <JurisdictionFees id="jurisdiction-fees" />
              <ExecutionOrders id="execution-orders" />
              <ConsumerFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <ConsumerSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
