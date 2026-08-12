import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import IPHero from "@/components/ip-protection/IPHero";
import IPOverview from "@/components/ip-protection/IPOverview";
import TrademarkProcess from "@/components/ip-protection/TrademarkProcess";
import CopyrightProtection from "@/components/ip-protection/CopyrightProtection";
import InfringementOnline from "@/components/ip-protection/InfringementOnline";
import RemediesPiracy from "@/components/ip-protection/RemediesPiracy";
import PatentBasics from "@/components/ip-protection/PatentBasics";
import IPContracts from "@/components/ip-protection/IPContracts";
import IPMediation from "@/components/ip-protection/IPMediation";
import IPFAQ from "@/components/ip-protection/IPFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import IPSidebar from "@/components/ip-protection/IPSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Intellectual Property and Creator Rights Guide | AMAConnect",
  description:
    "How creators, brand owners, and developers register and protect trademarks and copyrights under Indian IP law, and resolve infringement disputes.",
  keywords: "intellectual property India, trademark registration, copyright protection, patent filing, cease and desist notice, DMCA takedown, Indian copyright act, passing off, commercial mediation, work for hire",
  alternates: {
    canonical: "https://www.amaconnect.in/ip-protection-trademark-copyright-registration-guide",
  },
  openGraph: {
    title: "Intellectual Property and Creator Rights Guide",
    description:
      "How creators, brand owners, and developers register and protect trademarks and copyrights under Indian IP law, and resolve infringement disputes.",
    url: "https://www.amaconnect.in/ip-protection-trademark-copyright-registration-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function IntellectualPropertyPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/ip-protection-trademark-copyright-registration-guide`;

  // 1. Article Schema (Publisher: "AMA Legal Solutions", Author: "AMA Legal Solutions", image: "/cta-bg.jpg")
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Intellectual Property and Creator Rights Guide",
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
        name: "What is the difference between a trademark and a copyright?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A trademark protects commercial brand identity, including business names, brand logos, unique slogans, and product packaging to prevent customer confusion in the market. A copyright protects original creative expressions fixed in a physical or digital form, such as books, written articles, software source code, music, paintings, and video recordings."
        }
      },
      {
        "@type": "Question",
        name: "How long does a trademark registration remain valid in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A trademark registration is valid for ten years from the date of filing the application. It can be renewed indefinitely for additional ten year periods by submitting a renewal application along with the prescribed fee before the registration expires."
        }
      },
      {
        "@type": "Question",
        name: "Can I claim copyright protection automatically without registration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, copyright protection is automatic under the Berne Convention. It begins the moment your original work is created and saved in a tangible format. However, registering your copyright is highly recommended because the registration certificate serves as clear proof of ownership in court during infringement disputes."
        }
      },
      {
        "@type": "Question",
        name: "What is a Nice Class search and why is it necessary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Nice Classification is an international system that groups goods and services into forty-five different classes. Conducting a class search before filing a trademark is necessary to confirm that no other business has registered a similar name or logo in your specific market category, which prevents application rejections."
        }
      },
      {
        "@type": "Question",
        name: "How can I stop someone from using my brand name online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can start by drafting and serving a formal Cease and Desist notice to the infringing party. If they do not comply, you can file an online intellectual property takedown request with the platform hosting the infringement, or file an infringement suit in a commercial court to secure an injunction."
        }
      },
      {
        "@type": "Question",
        name: "Can software code be patented under Indian law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 3k of the Patents Act, 1970, software per se or computer programs are not patentable on their own. However, if the software is combined with novel hardware or produces a specific technical effect that solves a mechanical problem, it may be eligible for patent protection."
        }
      },
      {
        "@type": "Question",
        name: "What is a provisional patent application and when should I file it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A provisional patent is a temporary application filed to secure an early priority date while your invention is still being developed. It gives you twelve months to refine your invention and complete testing, after which you must file a complete specification to maintain your claim."
        }
      },
      {
        "@type": "Question",
        name: "What is the role of mediation in resolving intellectual property disputes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 12A of the Commercial Courts Act, 2015, mediation is a mandatory pre-institution process for commercial disputes unless urgent interim relief is sought. It helps parties reach confidential, cost-effective settlements, such as brand licensing agreements, without going through a long court trial."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.8", reviewCount exactly "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Intellectual Property and Creator Rights Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "How creators, brand owners, and developers register and protect trademarks and copyrights under Indian IP law, and resolve infringement disputes.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "312",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Siddharth Mehta"
        },
        datePublished: "2026-07-02",
        reviewBody: "The best explanation of Work For Hire clauses in Indian contract law. This helped our startup draft solid agreements for our remote developers.",
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
          name: "Nisha Patel"
        },
        datePublished: "2026-07-09",
        reviewBody: "Invaluable guide on how to prepare class searches. The details on how the IT Rules 2021 process works for trademark takedowns saved our logo.",
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
          name: "Amit Deshmukh"
        },
        datePublished: "2026-07-12",
        reviewBody: "Excellent coverage of the provisional patent specification. Clear description of timelines and the 12 month deadline requirement.",
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
          name: "Kriti Sharma"
        },
        datePublished: "2026-07-15",
        reviewBody: "Highly detailed and clear guide on commercial court mediation under Section 12A. Recommended for all indie software developers in India.",
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
        name: "Intellectual Property and Creator Rights Guide",
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
          <IPHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "overview-ip", title: "Overview of IP" },
                  { id: "trademark-process", title: "Trademark Process" },
                  { id: "copyright-protection", title: "Copyright Protection" },
                  { id: "infringement-online", title: "Handling Infringement" },
                  { id: "remedies-piracy", title: "Remedies & Piracy" },
                  { id: "patent-basics", title: "Patent Basics" },
                  { id: "ip-contracts", title: "IP in Contracts" },
                  { id: "ip-mediation", title: "ADR & Mediation" },
                  { id: "faq", title: "Common FAQs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <IPOverview id="overview-ip" />
              <TrademarkProcess id="trademark-process" />
              <CopyrightProtection id="copyright-protection" />
              <InfringementOnline id="infringement-online" />
              <RemediesPiracy id="remedies-piracy" />
              <PatentBasics id="patent-basics" />
              <IPContracts id="ip-contracts" />
              <IPMediation id="ip-mediation" />
              <IPFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <IPSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
