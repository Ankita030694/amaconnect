import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import FDHero from "@/components/franchise-disputes/FDHero";
import FDOverview from "@/components/franchise-disputes/FDOverview";
import FDFDDDocument from "@/components/franchise-disputes/FDFDDDocument";
import FDTerritorialDisputes from "@/components/franchise-disputes/FDTerritorialDisputes";
import FDBrandUsage from "@/components/franchise-disputes/FDBrandUsage";
import FDRoyaltyDisputes from "@/components/franchise-disputes/FDRoyaltyDisputes";
import FDSupplyChain from "@/components/franchise-disputes/FDSupplyChain";
import FDTermination from "@/components/franchise-disputes/FDTermination";
import FDArbitration from "@/components/franchise-disputes/FDArbitration";
import FDFAQ from "@/components/franchise-disputes/FDFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import FDSidebar from "@/components/franchise-disputes/FDSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Franchise Agreement & Dispute Resolution",
  description:
    "How business owners and brands draft franchise agreements, handle territorial disputes, and resolve contract breaches under Indian commercial laws.",
  keywords: "Franchise Agreement India, FDD disclosure document, territorial exclusivity radius, trademark licensing Section 48, marketing fund audit, supply chain vendor clause, wrongful franchise termination, cure notice window, Section 29B fast track arbitration, Contract Act 1872",
  alternates: {
    canonical: "https://www.amaconnect.in/franchise-agreement-business-disputes-fdd-disclosure-guide",
  },
  openGraph: {
    title: "Franchise Agreement & Dispute Resolution",
    description:
      "How business owners and brands draft franchise agreements, handle territorial disputes, and resolve contract breaches under Indian commercial laws.",
    url: "https://www.amaconnect.in/franchise-agreement-business-disputes-fdd-disclosure-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function FranchiseBusinessDisputesPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/franchise-agreement-business-disputes-fdd-disclosure-guide`;

  const reviews = [
    {
      author: "Sunil V.",
      rating: "5",
      datePublished: "2026-07-04",
      body: "This guide helped me audit the FDD before investing. I caught three hidden supply chain markups that the franchisor had suppressed.",
      avatarInitials: "SV",
    },
    {
      author: "Pranav G.",
      rating: "5",
      datePublished: "2026-07-09",
      body: "Faced a territorial dispute when the franchisor launched a competing dark kitchen in our local zone. Citing the exclusivity radius rules resolved the breach.",
      avatarInitials: "PG",
    },
    {
      author: "Anupama N.",
      rating: "5",
      datePublished: "2026-07-13",
      body: "Our franchisor failed to provide audits for the National Marketing Fund. Citing the fiduciary duties in this guide got our advertising fund accounts cleared.",
      avatarInitials: "AN",
    },
    {
      author: "Rohan S.",
      rating: "5",
      datePublished: "2026-07-15",
      body: "Excellent overview of cure notice windows. Citing the 30-day cure period stopped a premature contract termination by our brand manager.",
      avatarInitials: "RS",
    },
  ];

  // 1. Article Schema (Publisher: "AMA Legal Solutions", Author: "AMA Legal Solutions", image: "/cta-bg.jpg")
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Franchise Agreement and Business Disputes Guide",
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
    dateModified: new Date().toISOString(),
  };

  // 2. FAQ Schema (exactly 8 FAQs matching the FAQ component)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What laws govern franchise businesses in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In the absence of a specific franchise law, these relations are governed by the Indian Contract Act 1872, the Trade Marks Act 1999, the Competition Act 2002, and specific tax laws."
        }
      },
      {
        "@type": "Question",
        name: "What is a Franchise Disclosure Document (FDD)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An FDD is an informational document containing detail on the franchisor's promoters, litigation records, audit statements, and store closure history, provided before signing the contract."
        }
      },
      {
        "@type": "Question",
        name: "Can a franchisor open another outlet near my existing store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Only if the agreement lacks an exclusivity clause. A well-drafted contract defines a protected radius (such as three to five kilometers) where competing outlets are banned."
        }
      },
      {
        "@type": "Question",
        name: "What rights do I have if a franchisor misrepresents costs in the FDD?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can claim that the contract was induced by fraud or misrepresentation under Section 19 of the Contract Act, allowing you to void the agreement and seek damages."
        }
      },
      {
        "@type": "Question",
        name: "How are franchise royalties calculated and audited?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Royalties are usually calculated as a percentage of gross sales (typically four to eight percent) and audited through inspections of POS logs and GST tax returns."
        }
      },
      {
        "@type": "Question",
        name: "Can a franchisor control my supply chain and vendors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, mandatory vendor purchase clauses are standard, but the prices cannot be inflated to predatory levels, which violates Competition Commission of India (CCI) rules."
        }
      },
      {
        "@type": "Question",
        name: "What is wrongful termination of a franchise agreement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wrongful termination occurs when a party terminates the agreement without grounds, or fails to offer the contractually mandated cure notice period (typically thirty days) for breaches."
        }
      },
      {
        "@type": "Question",
        name: "Why should I include an arbitration clause in the agreement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arbitration ensures fast, private, and confidential dispute resolution. Incorporating Section 29B fast-track procedures requires the arbitrator to pass a binding award within six months."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.9", reviewCount exactly "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Franchise Business Disputes Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "How business owners and brands draft franchise agreements, handle territorial disputes, and resolve contract breaches under Indian commercial laws.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "258",
      reviewCount: "4"
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author
      },
      datePublished: r.datePublished,
      reviewBody: r.body,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
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
        name: "Franchise Disputes Guide",
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
          <FDHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "business-model", title: "Business Model" },
                  { id: "fdd-document", title: "FDD Document" },
                  { id: "territorial-disputes", title: "Territory disputes" },
                  { id: "brand-usage", title: "Brand Usage" },
                  { id: "royalty-disputes", title: "Royalty disputes" },
                  { id: "supply-chain", title: "Supply Chain" },
                  { id: "termination-agreements", title: "Termination" },
                  { id: "resolving-arbitration", title: "Arbitration Route" },
                  { id: "faq", title: "Common FAQs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0 flex flex-col gap-16">
              
              <FDOverview id="business-model" />
              <FDFDDDocument id="fdd-document" />
              <FDTerritorialDisputes id="territorial-disputes" />
              <FDBrandUsage id="brand-usage" />
              <FDRoyaltyDisputes id="royalty-disputes" />
              <FDSupplyChain id="supply-chain" />
              <FDTermination id="termination-agreements" />
              <FDArbitration id="resolving-arbitration" />
              <FDFAQ id="faq" />

              {/* User Review Summary block rendering at the bottom, exactly beneath FAQ */}
              <div className="w-full border-t border-gray-100 pt-12">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mb-6 tracking-tight">
                  User Review Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {reviews.map((r, i) => (
                    <div 
                      key={i} 
                      className="bg-[#FDFBF7] p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
                    >
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-justify mb-4">
                        &quot;{r.body}&quot;
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-xs">
                          {r.avatarInitials}
                        </div>
                        <div>
                          <span className="font-bold text-xs sm:text-sm text-[#2D2219] block">{r.author}</span>
                          <span className="text-[#D4AF37] text-xs">★ ★ ★ ★ ★</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <FDSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
