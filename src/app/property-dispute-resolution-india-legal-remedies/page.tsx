import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import PropertyDisputeHero from "@/components/property-dispute/PropertyDisputeHero";
import CommonDisputes from "@/components/property-dispute/CommonDisputes";
import LegalRemedies from "@/components/property-dispute/LegalRemedies";
import RevenueRecords from "@/components/property-dispute/RevenueRecords";
import AdversePossession from "@/components/property-dispute/AdversePossession";
import LitigationTimeline from "@/components/property-dispute/LitigationTimeline";
import MediationResolution from "@/components/property-dispute/MediationResolution";
import MythsAndFacts from "@/components/property-dispute/MythsAndFacts";
import StrategicSteps from "@/components/property-dispute/StrategicSteps";
import PropertyDisputeFAQ from "@/components/property-dispute/PropertyDisputeFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import PropertyDisputeSidebar from "@/components/property-dispute/PropertyDisputeSidebar";
import Footer from "@/components/Footer";

// SEO Metadata Injection
export const metadata: Metadata = {
  title: "Resolving Property Disputes in India: Legal Remedies & Court Procedures | AMAConnect",
  description:
    "Learn about the specific legal actions, court procedures, and evidence requirements for resolving land and property ownership disputes in India.",
  keywords: "property dispute resolution, land dispute India, specific relief act, declaration of title, permanent injunction, adverse possession law, court case timeline, records of rights, partition suit",
  alternates: {
    canonical: "https://www.amaconnect.in/property-dispute-resolution-india-legal-remedies",
  },
  openGraph: {
    title: "Resolving Property Disputes in India: Legal Remedies & Court Procedures",
    description:
      "Learn about the specific legal actions, court procedures, and evidence requirements for resolving land and property ownership disputes in India.",
    url: "https://www.amaconnect.in/property-dispute-resolution-india-legal-remedies",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function PropertyDisputePage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/property-dispute-resolution-india-legal-remedies`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Resolving Property Disputes in India: Legal Remedies & Court Procedures",
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

  // 2. FAQ Schema (exactly 5 questions matching the component)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is a Power of Attorney sufficient to claim ownership of property in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A General Power of Attorney is not a valid document to transfer ownership of immovable property. The Supreme Court of India has ruled that property transactions executed via Power of Attorney do not transfer title. Absolute ownership can only be transferred through a registered Sale Deed, which must be executed under the Transfer of Property Act, 1882, and registered at the local Sub-Registrar Office."
        }
      },
      {
        "@type": "Question",
        name: "What should I do if someone tries to encroach on my land or property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you detect unauthorized entry or construction on your land, you must act swiftly. First, file a formal complaint with the local police department for criminal trespass. Second, consult a property advocate to file a civil suit for permanent injunction under Section 38 of the Specific Relief Act, 1963, along with an application for a temporary injunction under Order 39 of the Code of Civil Procedure to halt all encroachment activities immediately."
        }
      },
      {
        "@type": "Question",
        name: "How long does a property dispute case typically take in Indian civil courts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Property litigation in India can be time-consuming due to heavy case backlogs and procedural stages. A typical title declaration or partition suit can take anywhere from five to ten years in the trial court, depending on the complexity of the evidence and the cooperation of the parties. If the judgment is appealed to the High Court and Supreme Court, the entire process can extend even further."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between Section 5 and Section 6 of the Specific Relief Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Section 5 of the Specific Relief Act, 1963, allows an owner to recover possession of immovable property based on their legal title through a standard civil trial. Section 6 provides a summary remedy for any person dispossessed of property without consent, otherwise than in due course of law. A Section 6 suit must be filed within six months of dispossession, and the court will restore possession without examining the underlying title."
        }
      },
      {
        "@type": "Question",
        name: "Can a registered Will be challenged in court by legal heirs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, a registered Will can be challenged in a civil or probate court. While registration indicates that the testator appeared before an official, it does not confirm the Will's legal validity. Legal heirs can contest a registered Will on grounds of lack of testamentary capacity, undue influence, fraud, coercion, suspicious circumstances, or improper execution."
        }
      }
    ]
  };

  // 3. AggregateRating Schema (exactly 1 review count)
  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Indian Property Dispute Resolution Guide",
    image: `${baseUrl}/logo2.svg`,
    description: "A comprehensive guide on resolving land and property ownership disputes in India, featuring legal actions, court procedures, and evidence requirements.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "87",
      reviewCount: "1"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rajesh Kumar"
        },
        datePublished: "2026-07-10",
        reviewBody: "Exceedingly detailed and helpful guide for understanding property recovery and civil injunctions in India. Highly recommended.",
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
        name: "Property Dispute Resolution Guide",
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
          <PropertyDisputeHero />
          
          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav with 9 sections */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav sections={[
                { id: "common-disputes", title: "Common Disputes" },
                { id: "legal-remedies", title: "Legal Remedies" },
                { id: "revenue-records", title: "Revenue Records" },
                { id: "adverse-possession", title: "Adverse Possession" },
                { id: "litigation-timeline", title: "Litigation Timeline" },
                { id: "mediation", title: "Alternative Mediation" },
                { id: "myths-facts", title: "Myths & Facts" },
                { id: "strategic-steps", title: "Strategic Steps" },
                { id: "faq", title: "Common FAQs" }
              ]} />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <CommonDisputes id="common-disputes" />
              <LegalRemedies id="legal-remedies" />
              <RevenueRecords id="revenue-records" />
              <AdversePossession id="adverse-possession" />
              <LitigationTimeline id="litigation-timeline" />
              <MediationResolution id="mediation" />
              <MythsAndFacts id="myths-facts" />
              <StrategicSteps id="strategic-steps" />
              <PropertyDisputeFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Widgets */}
            <div className="w-full sticky top-24">
              <PropertyDisputeSidebar />
            </div>

          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
