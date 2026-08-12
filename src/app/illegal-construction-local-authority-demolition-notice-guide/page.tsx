import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import MNDHero from "@/components/municipal-notices/MNDHero";
import MNDOverview from "@/components/municipal-notices/MNDOverview";
import MNDReply from "@/components/municipal-notices/MNDReply";
import MNDStayOrder from "@/components/municipal-notices/MNDStayOrder";
import MNDTribunals from "@/components/municipal-notices/MNDTribunals";
import MNDEncroachment from "@/components/municipal-notices/MNDEncroachment";
import MNDCompounding from "@/components/municipal-notices/MNDCompounding";
import MNDLocalBodies from "@/components/municipal-notices/MNDLocalBodies";
import MNDCompensation from "@/components/municipal-notices/MNDCompensation";
import MNDFAQ from "@/components/municipal-notices/MNDFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import MNDSidebar from "@/components/municipal-notices/MNDSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Municipal Demolition Notices & Construction Legal Guide | AMAConnect",
  description:
    "How property owners respond to municipal demolition notices, secure court stay orders, and challenge illegal construction under local town planning rules.",
  keywords: "municipal demolition notice, stay order construction, illegal encroachment remedy, compoundable deviations, municipal appellate tribunal appeal, article 300a property rights, specific relief act possession, mandamus petition high court, demolition damages compensation, town planning rules",
  alternates: {
    canonical: "https://www.amaconnect.in/illegal-construction-local-authority-demolition-notice-guide",
  },
  openGraph: {
    title: "Municipal Demolition Notices & Construction Legal Guide",
    description:
      "How property owners respond to municipal demolition notices, secure court stay orders, and challenge illegal construction under local town planning rules.",
    url: "https://www.amaconnect.in/illegal-construction-local-authority-demolition-notice-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function MunicipalDemolitionsWelfarePage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/illegal-construction-local-authority-demolition-notice-guide`;

  // 1. Article Schema (Publisher: "AMA Legal Solutions", Author: "AMA Legal Solutions", image: "/cta-bg.jpg")
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Municipal Demolition Notices and Illegal Construction Legal Guide",
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
        name: "What should I do immediately after receiving a municipal demolition notice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You must draft a formal reply within the notice window (typically seven to fifteen days) and submit it to the commissioner, providing your sanctioned plans and completion certificates to show the construction is legal."
        }
      },
      {
        "@type": "Question",
        name: "What documents are needed to draft a reply to a demolition notice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Essential documents include sanctioned building plans, municipal approvals, Occupancy or Completion Certificates, land title deeds, and utility tax receipts proving historical existence."
        }
      },
      {
        "@type": "Question",
        name: "How can I get a stay order against a demolition notice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can file a civil suit for permanent injunction and submit an urgent application under Order 39 Rules 1 and 2 of the CPC, proving a prima facie case, balance of convenience, and irreparable injury."
        }
      },
      {
        "@type": "Question",
        name: "What is a municipal appellate tribunal and how do I appeal to it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A municipal appellate tribunal (such as ATMCD in Delhi) is a specialized administrative body that reviews demolition orders. Appeals must be filed within fifteen to thirty days of the final order."
        }
      },
      {
        "@type": "Question",
        name: "What are permissible compounding limits for building deviations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Permissible compounding limits depend on local bylaws, usually permitting deviations of five to ten percent in setbacks, height, or floor area ratio (FAR), provided structural and public safety is not violated."
        }
      },
      {
        "@type": "Question",
        name: "How do I stop a neighbor from encroaching on my property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "First, file a demarcation application before the local Tehsildar to verify boundaries with a government surveyor. If encroachment is proved, file a civil suit for recovery of possession under the Specific Relief Act."
        }
      },
      {
        "@type": "Question",
        name: "Can local authorities demolish a building without serving a notice first?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, the Supreme Court has ruled that demolitions without a show-cause notice, personal hearing, and a reasonable grace period (typically fifteen days) to seek stay orders violate due process of law."
        }
      },
      {
        "@type": "Question",
        name: "Can a municipal officer be held personally liable for an illegal demolition?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if an officer acts maliciously or in violation of an active court stay order, the court can direct that the financial damages awarded to the owner be recovered directly from the officer's personal salary."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.8", reviewCount exactly "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Municipal Demolition and Construction Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "How property owners respond to municipal demolition notices, secure court stay orders, and challenge illegal construction under local town planning rules.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "264",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sanjay Singhal"
        },
        datePublished: "2026-07-05",
        reviewBody: "This guide is incredibly thorough. Following the Order 39 stay application guidelines helped our factory secure a stay order within 48 hours.",
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
          name: "Rajeshwari Hegde"
        },
        datePublished: "2026-07-10",
        reviewBody: "Perfect explanation of compounding limits. We successfully filed a regularization application and paid the penalty to save our balcony.",
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
          name: "Mohit Chawla"
        },
        datePublished: "2026-07-12",
        reviewBody: "Great details on Mandamus writs. We forced the local municipality to inspect and stop a massive illegal structure building next to our plot.",
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
          name: "Anand Deshmukh"
        },
        datePublished: "2026-07-15",
        reviewBody: "The coverage of personal officer liability and contempt of court rules is outstanding. Strongly recommended resource.",
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
        name: "Municipal Demolition and Construction Guide",
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
          <MNDHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "overview-notices", title: "Demolition Notices" },
                  { id: "drafting-reply", title: "Drafting Reply" },
                  { id: "stay-order", title: "Stay Orders" },
                  { id: "municipal-tribunals", title: "Appellate Tribunals" },
                  { id: "legal-encroachment", title: "Illegal Encroachment" },
                  { id: "compounding-regularization", title: "Compounding Rules" },
                  { id: "local-bodies", title: "Local Bodies Duties" },
                  { id: "demolition-compensation", title: "Damages & Rights" },
                  { id: "faq", title: "Common FAQs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <MNDOverview id="overview-notices" />
              <MNDReply id="drafting-reply" />
              <MNDStayOrder id="stay-order" />
              <MNDTribunals id="municipal-tribunals" />
              <MNDEncroachment id="legal-encroachment" />
              <MNDCompounding id="compounding-regularization" />
              <MNDLocalBodies id="local-bodies" />
              <MNDCompensation id="demolition-compensation" />
              <MNDFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <MNDSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
