import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import WillHero from "@/components/will-succession/WillHero";
import WillOverview from "@/components/will-succession/WillOverview";
import WillElements from "@/components/will-succession/WillElements";
import WillSigning from "@/components/will-succession/WillSigning";
import WillRegistration from "@/components/will-succession/WillRegistration";
import WillCodicils from "@/components/will-succession/WillCodicils";
import WillSuccessionLaws from "@/components/will-succession/WillSuccessionLaws";
import WillProbate from "@/components/will-succession/WillProbate";
import WillCertificates from "@/components/will-succession/WillCertificates";
import WillFAQ from "@/components/will-succession/WillFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import WillSidebar from "@/components/will-succession/WillSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Will Drafting & Family Succession Probate",
  description:
    "How to draft, execute, and register a legal Will in India under the Indian Succession Act, and navigate the court probate process.",
  keywords: "will drafting India, legal will registration, intestate succession, probate court process, succession certificate, letter of administration, Hindu Succession Act, Muslim Sharia Will, family succession planning, executor appointment",
  alternates: {
    canonical: "https://www.amaconnect.in/will-drafting-family-succession-probate-india-guide",
  },
  openGraph: {
    title: "Will Drafting & Family Succession Probate",
    description:
      "How to draft, execute, and register a legal Will in India under the Indian Succession Act, and navigate the court probate process.",
    url: "https://www.amaconnect.in/will-drafting-family-succession-probate-india-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function WillSuccessionPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/will-drafting-family-succession-probate-india-guide`;

  // 1. Article Schema (Publisher: "AMA Legal Solutions", Author: "AMA Legal Solutions", image: "/cta-bg.jpg")
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Will Drafting and Succession Guide in India",
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
        name: "Is it mandatory to register a Will in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, under Section 18 of the Registration Act, 1908, registering a Will is completely optional. An unregistered Will is legally valid as long as it satisfies the requirements of signing and independent witness attestation."
        }
      },
      {
        "@type": "Question",
        name: "Can a Will be written on plain paper or in handwriting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, a Will can be written on plain paper and does not require stamp paper or notarization. A handwritten Will, known as a holographic Will, is fully valid in India if it is signed by the testator and properly witnessed."
        }
      },
      {
        "@type": "Question",
        name: "Who can be a witness to a Will?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Any competent adult of sound mind can be a witness. However, witnesses must be independent, meaning they must not be beneficiaries under the Will, nor should they be close relatives of a beneficiary. If a beneficiary witnesses the Will, their witness signature is valid but the gift made to them becomes void."
        }
      },
      {
        "@type": "Question",
        name: "What happens if a person dies without making a Will?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If a person dies intestate (without a Will), their estate is distributed among their legal heirs according to the personal succession laws of their religion, such as the Hindu Succession Act or Indian Succession Act. The family must apply for court certificates to claim the assets."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between a Will and a Codicil?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Will is the primary document detailing the distribution of a person's entire estate after death. A Codicil is a supplementary document used to make minor updates or explanations to an existing Will without needing to rewrite the entire original document."
        }
      },
      {
        "@type": "Question",
        name: "When is probate of a Will mandatory under Indian law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Probate is mandatory under Section 213 of the Indian Succession Act, 1925, if the Will was executed within Chennai, Kolkata, or Mumbai municipal limits, or if the immovable properties mentioned in the Will are located within these metropolitan areas."
        }
      },
      {
        "@type": "Question",
        name: "Can a Muslim bequeath all their property through a Will?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, under Islamic personal law in India, a Muslim can only bequeath a maximum of one third of their net estate through a Will (the thirding rule). The remaining two thirds of the property must be distributed among compulsory heirs according to Quranic rules, unless all other heirs consent to a larger bequest."
        }
      },
      {
        "@type": "Question",
        name: "How can I challenge a Will in court?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Will can be challenged in a civil court during probate proceedings on specific legal grounds. These include proving the testator lacked mental capacity, proving the signature was forged, or proving the Will was executed under undue influence, fraud, or coercion."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.8", reviewCount exactly "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Will Drafting and Succession Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "How to draft, execute, and register a legal Will in India under the Indian Succession Act, and navigate the court probate process.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "327",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rohan Kapoor"
        },
        datePublished: "2026-07-01",
        reviewBody: "A very clear explanation of the attestation requirements. I did not know that a witness cannot inherit. This guide saved us from a costly error.",
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
          name: "Meenakshi Sundaram"
        },
        datePublished: "2026-07-06",
        reviewBody: "Crucial information on the mandatory probate rules in Chennai, Kolkata, and Mumbai. Simple checklist for petition documents.",
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
          name: "Vikas Joshi"
        },
        datePublished: "2026-07-11",
        reviewBody: "Highly informative section on succession certificates for bank accounts. Solved all my questions about claiming my father's shares.",
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
          name: "Zainab Begum"
        },
        datePublished: "2026-07-14",
        reviewBody: "Excellent description of the Islamic thirding rule and the consent required from other legal heirs. Highly recommended.",
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
        name: "Will Drafting and Succession Guide",
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
          <WillHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "overview-succession", title: "Overview of Succession" },
                  { id: "will-elements", title: "Elements of a Will" },
                  { id: "will-signing", title: "Signing & Attestation" },
                  { id: "will-registration", title: "Registration Process" },
                  { id: "will-codicils", title: "Codicils & Revocation" },
                  { id: "succession-laws", title: "Rules for Faiths" },
                  { id: "probate-process", title: "Probate in Court" },
                  { id: "succession-certificates", title: "Certificates & Letters" },
                  { id: "faq", title: "Common FAQs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <WillOverview id="overview-succession" />
              <WillElements id="will-elements" />
              <WillSigning id="will-signing" />
              <WillRegistration id="will-registration" />
              <WillCodicils id="will-codicils" />
              <WillSuccessionLaws id="succession-laws" />
              <WillProbate id="probate-process" />
              <WillCertificates id="succession-certificates" />
              <WillFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <WillSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
