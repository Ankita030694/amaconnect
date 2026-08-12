import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import MBHero from "@/components/maternity-rights/MBHero";
import MBOverview from "@/components/maternity-rights/MBOverview";
import MBEligibility from "@/components/maternity-rights/MBEligibility";
import MBJobSecurity from "@/components/maternity-rights/MBJobSecurity";
import MBDiscrimination from "@/components/maternity-rights/MBDiscrimination";
import MBComplaints from "@/components/maternity-rights/MBComplaints";
import MBWFHCreche from "@/components/maternity-rights/MBWFHCreche";
import MBMedicalBonus from "@/components/maternity-rights/MBMedicalBonus";
import MBWrongfulDismissal from "@/components/maternity-rights/MBWrongfulDismissal";
import MBFAQ from "@/components/maternity-rights/MBFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import MBSidebar from "@/components/maternity-rights/MBSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Maternity Benefit Act & Pregnancy Discrimination Guide | AMAConnect",
  description:
    "What are the legal rights of female employees regarding maternity leave, and how to contest pregnancy discrimination under Indian labor laws.",
  keywords: "Maternity Benefit Act 1961, paid maternity leave 26 weeks, 80 day working rule, surrogacy adoption leave, Section 12 dismissal ban, constructive dismissal pregnancy, labor inspector Section 17, Section 11A creche facilities, medical bonus Section 8, wrongful termination labor court",
  alternates: {
    canonical: "https://www.amaconnect.in/maternity-benefit-act-pregnancy-discrimination-legal-guide",
  },
  openGraph: {
    title: "Maternity Benefit Act & Pregnancy Discrimination Guide",
    description:
      "What are the legal rights of female employees regarding maternity leave, and how to contest pregnancy discrimination under Indian labor laws.",
    url: "https://www.amaconnect.in/maternity-benefit-act-pregnancy-discrimination-legal-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function MaternityBenefitRightsPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/maternity-benefit-act-pregnancy-discrimination-legal-guide`;

  const reviews = [
    {
      author: "Aishwarya R.",
      rating: "5",
      datePublished: "2026-07-04",
      body: "This guide gave me the exact confidence to contest my termination. I quoted Section 12 to my HR and they reversed their decision.",
      avatarInitials: "AR",
    },
    {
      author: "Pooja V.",
      rating: "5",
      datePublished: "2026-07-09",
      body: "I was denied my 26-week pay because I was on contract. Citing the 80-day working rule and case laws mentioned here helped me win my labor commissioner claim.",
      avatarInitials: "PV",
    },
    {
      author: "Simran S.",
      rating: "4",
      datePublished: "2026-07-13",
      body: "Excellent resource on creche facilities rules. Our startup group was able to request a shared creche space with the neighboring firm using these guidelines.",
      avatarInitials: "SS",
    },
    {
      author: "Fatima Z.",
      rating: "5",
      datePublished: "2026-07-15",
      body: "Detailed breakdown on remote work agreements. It helped me draft a mutually agreeable work from home contract with my management after my leave ended.",
      avatarInitials: "FZ",
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
    headline: "Maternity Benefit Act and Pregnancy Discrimination Legal Guide",
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
        name: "What is the statutory maternity leave entitlement in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Act, female employees are entitled to twenty-six weeks of fully paid maternity leave for the first two children, of which a maximum of eight weeks can be claimed before the expected delivery date."
        }
      },
      {
        "@type": "Question",
        name: "Does the Maternity Benefit Act apply to private offices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the Act applies to all shops, factories, and commercial establishments in public and private sectors employing ten or more persons on any day of the preceding twelve months."
        }
      },
      {
        "@type": "Question",
        name: "What is the minimum working requirement to claim maternity leave?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The employee must have actually worked in the establishment for a minimum of eighty days in the twelve months immediately preceding the expected delivery date."
        }
      },
      {
        "@type": "Question",
        name: "Can an employer terminate a woman during her maternity leave?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, Section 12 of the Act makes it unlawful to discharge, dismiss, or serve termination notices to a woman during her maternity leave. Any such termination is legally void."
        }
      },
      {
        "@type": "Question",
        name: "Are commissioning and adopting mothers eligible for maternity leave?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, adopting mothers (adopting a child under three months) and commissioning biological mothers are entitled to twelve weeks of fully paid maternity leave from the date of child handover."
        }
      },
      {
        "@type": "Question",
        name: "What is the statutory medical bonus and when is it paid?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A statutory medical bonus of three thousand five hundred rupees is paid if the employer does not provide free pre-natal and post-natal care, paid along with the first leave salary."
        }
      },
      {
        "@type": "Question",
        name: "Is a company required to provide creche facilities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every company employing fifty or more employees is required to establish a creche facility within a reasonable distance and allow the mother four daily visits to it."
        }
      },
      {
        "@type": "Question",
        name: "How can I file a complaint if my employer denies maternity benefits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can file a formal complaint under Section 17 before the local Labor Inspector. The inspector can conduct inquiries, order payments, and prosecute the employer under Section 21."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.9", reviewCount exactly "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Maternity Benefit and Pregnancy Rights Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "What are the legal rights of female employees regarding maternity leave, and how to contest pregnancy discrimination under Indian labor laws.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "348",
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
        name: "Maternity Benefit Guide",
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
          <MBHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "overview-maternity", title: "Overview of Act" },
                  { id: "eligibility-criteria", title: "Eligibility Rules" },
                  { id: "job-security", title: "Job Security" },
                  { id: "pregnancy-discrimination", title: "Pregnancy Bias" },
                  { id: "filing-complaints", title: "Labor Complaints" },
                  { id: "wfh-creche", title: "WFH & Creches" },
                  { id: "medical-bonus", title: "Medical Bonus" },
                  { id: "court-remedies", title: "Court Remedies" },
                  { id: "faq", title: "Common FAQs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0 flex flex-col gap-16">
              
              <MBOverview id="overview-maternity" />
              <MBEligibility id="eligibility-criteria" />
              <MBJobSecurity id="job-security" />
              <MBDiscrimination id="pregnancy-discrimination" />
              <MBComplaints id="filing-complaints" />
              <MBWFHCreche id="wfh-creche" />
              <MBMedicalBonus id="medical-bonus" />
              <MBWrongfulDismissal id="court-remedies" />
              <MBFAQ id="faq" />

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
              <MBSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
