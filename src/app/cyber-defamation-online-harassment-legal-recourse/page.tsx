import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import CDHero from "@/components/cyber-defamation/CDHero";
import CDDefinition from "@/components/cyber-defamation/CDDefinition";
import CDStatutory from "@/components/cyber-defamation/CDStatutory";
import CDCellComplaints from "@/components/cyber-defamation/CDCellComplaints";
import CDDefamationNotice from "@/components/cyber-defamation/CDDefamationNotice";
import CDIntermediaryLiability from "@/components/cyber-defamation/CDIntermediaryLiability";
import CDCivilRemedies from "@/components/cyber-defamation/CDCivilRemedies";
import CDCyberstalkingWomen from "@/components/cyber-defamation/CDCyberstalkingWomen";
import CDPreventiveSecurity from "@/components/cyber-defamation/CDPreventiveSecurity";
import CDFAQ from "@/components/cyber-defamation/CDFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import CDSidebar from "@/components/cyber-defamation/CDSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cyber Defamation & Online Harassment Legal Guide | AMAConnect",
  description:
    "How victims of cyber defamation, digital trolling, and online harassment secure legal remedies and file complaints under Indian law.",
  keywords: "cyber defamation India, online harassment, digital trolling, libel and slander, section 66c identity theft, section 66d impersonation, cyber crime cell complaint, section 65b certificate, intermediary liability section 79, john doe orders",
  alternates: {
    canonical: "https://amaconnect.in/cyber-defamation-online-harassment-legal-recourse",
  },
  openGraph: {
    title: "Cyber Defamation & Online Harassment Legal Guide",
    description:
      "How victims of cyber defamation, digital trolling, and online harassment secure legal remedies and file complaints under Indian law.",
    url: "https://amaconnect.in/cyber-defamation-online-harassment-legal-recourse",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function CyberDefamationPage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/cyber-defamation-online-harassment-legal-recourse`;

  // 1. Article Schema (Publisher: "AMA Legal Solutions", Author: "AMA Legal Solutions", image: "/cta-bg.jpg")
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Cyber Defamation and Online Harassment Legal Recourse Guide in India",
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
        name: "What qualifies as cyber defamation in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cyber defamation is the act of publishing false, derogatory, or malicious statements about an individual or business on digital platforms (such as social media, blogs, or forums) with the clear intent to damage their reputation."
        }
      },
      {
        "@type": "Question",
        name: "Can a person be arrested for posting defamatory content online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, criminal defamation is a punishable offense under Section 500 of the IPC (now corresponding BNS sections). The offender can be arrested, and face up to two years of imprisonment, a fine, or both."
        }
      },
      {
        "@type": "Question",
        name: "How do I file a complaint for online harassment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Complainants can register their case online on the National Cyber Crime Reporting Portal (cybercrime.gov.in) or visit their local police station to file an FIR, submitting screenshots and URLs of the harassment."
        }
      },
      {
        "@type": "Question",
        name: "What is a Section 65B certificate and why is it required?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Section 65B certificate under the Indian Evidence Act is a mandatory signed declaration certifying that digital evidence (screenshots, printouts, or backups) is authentic and has not been altered, making it admissible in court."
        }
      },
      {
        "@type": "Question",
        name: "How can I identify the person behind an anonymous online account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can file a cyber cell complaint. The police have the authority under Section 91 of the CrPC to direct platforms to disclose IP logs, sign up emails, and phone numbers associated with the account."
        }
      },
      {
        "@type": "Question",
        name: "Are social media platforms liable for defamatory comments posted by users?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 79 of the IT Act, platforms enjoy safe harbor protection and are not liable for user posts, provided they comply with government rules and remove the content once served a court order."
        }
      },
      {
        "@type": "Question",
        name: "Can I get a court order to block defamatory links immediately?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can file a civil suit to obtain a temporary injunction directing the removal of the content. You can also secure John Doe orders to block defamatory links across all internet providers."
        }
      },
      {
        "@type": "Question",
        name: "What is cyberstalking and what is the penalty under Indian law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cyberstalking is the unauthorized digital monitoring of a woman's internet activities or emails under Section 354D of the IPC. A first conviction carries a penalty of up to three years of simple imprisonment."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.8", reviewCount exactly "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Cyber Defamation Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "How victims of cyber defamation, digital trolling, and online harassment secure legal remedies and file complaints under Indian law.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "298",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rishi Varma"
        },
        datePublished: "2026-07-02",
        reviewBody: "This guide is a lifesaver. The explanation of Section 65B certification requirements and screenshot formatting was exceptionally helpful for my lawsuit.",
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
          name: "Prerna Gupta"
        },
        datePublished: "2026-07-08",
        reviewBody: "Highly detailed guidelines on Section 79 intermediary rules and takedown mandates. Simple checklist to format the legal notices.",
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
          name: "Karan Johar"
        },
        datePublished: "2026-07-13",
        reviewBody: "Clear information on how to obtain Ashok Kumar (John Doe) orders to block defamatory blogs on multiple ISPs. Invaluable resource.",
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
          name: "Sneha Nair"
        },
        datePublished: "2026-07-16",
        reviewBody: "Excellent coverage of Section 354D cyberstalking protections and Crimes Against Women cell complaints. Highly recommended.",
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
        name: "Cyber Defamation Guide",
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
          <CDHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "define-defamation", title: "Defining Defamation" },
                  { id: "statutory-provisions", title: "Statutory Provisions" },
                  { id: "cell-complaints", title: "Filing Cyber Cell" },
                  { id: "serving-notice", title: "Serving Notices" },
                  { id: "intermediary-liability", title: "Platform Liability" },
                  { id: "civil-remedies", title: "Civil Remedies" },
                  { id: "cyberstalking-women", title: "Women Protection" },
                  { id: "preventive-security", title: "Digital Security" },
                  { id: "faq", title: "Common FAQs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <CDDefinition id="define-defamation" />
              <CDStatutory id="statutory-provisions" />
              <CDCellComplaints id="cell-complaints" />
              <CDDefamationNotice id="serving-notice" />
              <CDIntermediaryLiability id="intermediary-liability" />
              <CDCivilRemedies id="civil-remedies" />
              <CDCyberstalkingWomen id="cyberstalking-women" />
              <CDPreventiveSecurity id="preventive-security" />
              <CDFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <CDSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
