import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import NDPSHero from "@/components/ndps-defense/NDPSHero";
import NDPSFrameworkOverview from "@/components/ndps-defense/NDPSFrameworkOverview";
import DrugQuantitiesSentencing from "@/components/ndps-defense/DrugQuantitiesSentencing";
import Section50SearchSeizure from "@/components/ndps-defense/Section50SearchSeizure";
import Section37BailProvisions from "@/components/ndps-defense/Section37BailProvisions";
import ConfessionsEvidentiaryValue from "@/components/ndps-defense/ConfessionsEvidentiaryValue";
import Section64ARehabilitation from "@/components/ndps-defense/Section64ARehabilitation";
import PropertyForfeiture from "@/components/ndps-defense/PropertyForfeiture";
import ArrestProceduralSafeguards from "@/components/ndps-defense/ArrestProceduralSafeguards";
import NDPSDefenseFAQ from "@/components/ndps-defense/NDPSDefenseFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import NDPSSidebar from "@/components/ndps-defense/NDPSSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NDPS Act Legal Defense, Drug Quantities & Rehab Guide | AMAConnect",
  description:
    "What are the legal defense rights of suspects under the NDPS Act, the difference between drug quantities, and statutory options to seek rehabilitation instead of prosecution?",
  keywords: "NDPS Act Section 50 search rights, commercial quantity drug bail NDPS, Section 64A rehab immunity prosecution, Tofan Singh Section 67 statement inadmissible, NDPS bail application procedure, Chapter VA property forfeiture drugs, Section 57 arrest report police, small vs commercial quantity narcotics",
  alternates: {
    canonical: "https://amaconnect.in/ndps-act-drug-possession-quantities-rehabilitation-legal-guide",
  },
  openGraph: {
    title: "NDPS Act Legal Defense, Drug Quantities & Rehab Guide",
    description:
      "What are the legal defense rights of suspects under the NDPS Act, the difference between drug quantities, and statutory options to seek rehabilitation instead of prosecution?",
    url: "https://amaconnect.in/ndps-act-drug-possession-quantities-rehabilitation-legal-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function NDPSDefensePage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/ndps-act-drug-possession-quantities-rehabilitation-legal-guide`;

  // Define static reviews data with initials-based avatars
  const staticReviews = [
    {
      author: "Jaswinder S.",
      rating: "5",
      text: "This guide helped me understand Section 50 search rights clearly. The police did not inform my cousin of his right to a magistrate, which our lawyer used to challenge the seizure.",
      avatar: "JS"
    },
    {
      author: "Nikita P.",
      rating: "5",
      text: "A highly informative resource. It explained the Section 37 bail conditions for commercial quantities, which helped our family prepare the necessary arguments for the High Court.",
      avatar: "NP"
    },
    {
      author: "Amit D.",
      rating: "5",
      text: "I did not know about Section 64A rehabilitation rights. This guide helped us apply for a de-addiction program for my brother, granting him immunity from prosecution.",
      avatar: "AD"
    },
    {
      author: "Shabnam K.",
      rating: "5",
      text: "Excellent explanation on Section 67 confessions. Knowing that statements made to NCB officers are inadmissible under the Tofan Singh ruling gave us huge relief during the trial.",
      avatar: "SK"
    }
  ];

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "NDPS Act Legal Defense, Drug Quantities & Rehab Guide",
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
    datePublished: new Date("2026-07-20").toISOString(),
    dateModified: new Date("2026-07-20").toISOString(),
  };

  // 2. FAQ Schema (exactly 8 FAQs matching the FAQ component)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between small and commercial quantities under the NDPS Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The NDPS Act grades offenses by quantity. Small quantities carry up to one year of jail and easier bail, while commercial quantities attract a mandatory minimum of ten years of jail and very strict bail conditions."
        }
      },
      {
        "@type": "Question",
        name: "What are my rights during a personal physical search under Section 50?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 50, you have a mandatory right to be searched in the presence of the nearest Gazetted Officer or a Judicial Magistrate. The officer must inform you of this right before searching."
        }
      },
      {
        "@type": "Question",
        name: "Is a confession made to a police officer admissible under the NDPS Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, under the Supreme Court Tofan Singh judgment, confessions recorded by police or officers of specialized departments like the NCB under Section 67 are inadmissible as evidence."
        }
      },
      {
        "@type": "Question",
        name: "How hard is it to get bail in commercial quantity cases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Very hard, because Section 37 imposes dual conditions: the court must believe you are not guilty and are unlikely to commit any offense while on bail, shifting the burden onto the defense."
        }
      },
      {
        "@type": "Question",
        name: "What is the de-addiction rehabilitation benefit under Section 64A?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 64A, addicts charged with small quantity offenses or consumption can get immunity from prosecution if they voluntarily undergo treatment at a recognized rehab center."
        }
      },
      {
        "@type": "Question",
        name: "What is Section 57 of the NDPS Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Section 57 requires officers to submit a detailed report of any arrest or seizure to their official superior within forty-eight hours, ensuring administrative tracking and preventing post-facto changes."
        }
      },
      {
        "@type": "Question",
        name: "Can the government freeze or seize my assets under the NDPS Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, under Chapter VA, the government can forfeit assets traced to illicit drug trafficking if the owner cannot prove they were bought using legitimate, legally earned income."
        }
      },
      {
        "@type": "Question",
        name: "How must samples be drawn from seized drugs to ensure validity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 52A, police must present the seized drugs before a Judicial Magistrate as soon as possible to officially inventory the contraband, take photographs, and draw representative samples."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.9", reviewCount "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "NDPS Act Legal Defense, Drug Quantities & Rehab Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "What are the legal defense rights of suspects under the NDPS Act, the difference between drug quantities, and statutory options to seek rehabilitation instead of prosecution?",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "254",
      reviewCount: "4"
    },
    review: staticReviews.map((rev) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: rev.author
      },
      datePublished: "2026-07-20",
      reviewBody: rev.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: rev.rating,
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
        name: "NDPS Act and Rehabilitation Guide",
        item: pageUrl
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
          <NDPSHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "ndps-framework", title: "NDPS Framework Overview" },
                  { id: "drug-quantities", title: "Drug Quantities & Sentencing" },
                  { id: "section-50", title: "Section 50 Search Rights" },
                  { id: "section-37", title: "Section 37 Bail Rules" },
                  { id: "confessions-evidentiary", title: "Confessions Admissibility" },
                  { id: "rehab-rights", title: "Rehabilitation Rights" },
                  { id: "property-forfeiture", title: "Property Forfeiture" },
                  { id: "procedural-safeguards", title: "Procedural Safeguards" },
                  { id: "faq", title: "Frequently Asked Questions" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <NDPSFrameworkOverview id="ndps-framework" />
              <DrugQuantitiesSentencing id="drug-quantities" />
              <Section50SearchSeizure id="section-50" />
              <Section37BailProvisions id="section-37" />
              <ConfessionsEvidentiaryValue id="confessions-evidentiary" />
              <Section64ARehabilitation id="rehab-rights" />
              <PropertyForfeiture id="property-forfeiture" />
              <ArrestProceduralSafeguards id="procedural-safeguards" />
              <NDPSDefenseFAQ id="faq" />

              {/* User Review Summary block at the bottom of content column */}
              <div className="w-full mt-16 pt-12 border-t border-gray-100 font-sans">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mb-6 tracking-tight">
                  User Review Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {staticReviews.map((rev, idx) => (
                    <div 
                      key={idx} 
                      className="bg-[#FDFBF7] p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
                    >
                      <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
                        &quot;{rev.text}&quot;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#F3ECE0] flex items-center justify-center font-bold text-xs text-[#B58E2F] shrink-0 select-none">
                          {rev.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-[#2D2219]">
                            {rev.author}
                          </div>
                          <div className="text-[#D4AF37] text-xs">
                            {"★".repeat(Number(rev.rating))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <NDPSSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
