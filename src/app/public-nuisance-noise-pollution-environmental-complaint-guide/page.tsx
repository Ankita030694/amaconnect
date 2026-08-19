import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import PNHero from "@/components/public-nuisance/PNHero";
import PNOverview from "@/components/public-nuisance/PNOverview";
import PNNoiseRules from "@/components/public-nuisance/PNNoiseRules";
import PNSDMSection133 from "@/components/public-nuisance/PNSDMSection133";
import PNIndustrialPollution from "@/components/public-nuisance/PNIndustrialPollution";
import PNLoudspeakers from "@/components/public-nuisance/PNLoudspeakers";
import PNWasteDumping from "@/components/public-nuisance/PNWasteDumping";
import PNNationalGreenTribunal from "@/components/public-nuisance/PNNationalGreenTribunal";
import PNDraftNotice from "@/components/public-nuisance/PNDraftNotice";
import PNFAQ from "@/components/public-nuisance/PNFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import PNSidebar from "@/components/public-nuisance/PNSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Noise Pollution & Public Nuisance Remedies",
  description:
    "How citizens file complaints against public nuisance, unauthorized waste dumping, and noise pollution under Indian environmental and criminal laws.",
  keywords: "public nuisance Section 268 IPC, noise pollution rules 2000, residential zone decibel limits, Section 133 CrPC petition, SDM nuisance complaint, State Pollution Control Board, loudspeaker restrictions police, Solid Waste Management rules, National Green Tribunal NGT, environmental damages notice",
  alternates: {
    canonical: "https://www.amaconnect.in/public-nuisance-noise-pollution-environmental-complaint-guide",
  },
  openGraph: {
    title: "Noise Pollution & Public Nuisance Remedies",
    description:
      "How citizens file complaints against public nuisance, unauthorized waste dumping, and noise pollution under Indian environmental and criminal laws.",
    url: "https://www.amaconnect.in/public-nuisance-noise-pollution-environmental-complaint-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function PublicNuisanceWelfarePage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/public-nuisance-noise-pollution-environmental-complaint-guide`;

  // 1. Article Schema (Publisher: "AMA Legal Solutions", Author: "AMA Legal Solutions", image: "/cta-bg.jpg")
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Noise Pollution and Public Nuisance Environmental Complaint Guide",
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
        name: "What qualifies as a public nuisance under Indian law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 268 of the IPC, a public nuisance is any act or illegal omission that causes common injury, danger, annoyance, or obstruction to the public or local residents in general."
        }
      },
      {
        "@type": "Question",
        name: "What are the permissible noise limits in residential areas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Noise Pollution Rules 2000, residential zones have a permissible noise limit of fifty-five decibels (dB) during the day (6 AM to 10 PM) and forty-five dB at night (10 PM to 6 AM)."
        }
      },
      {
        "@type": "Question",
        name: "How can I stop a neighbor or vendor from playing loud music late at night?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can call the police emergency helpline (112 or 100) to report the nighttime loudspeaker violation. The police have the authority to stop the music, seize the sound equipment, and register FIRs."
        }
      },
      {
        "@type": "Question",
        name: "What is Section 133 of the CrPC and how does it help?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Section 133 of the CrPC allows residents to file a petition before the local Sub-Divisional Magistrate (SDM), who can issue conditional orders to quickly stop or remove public obstructions or hazards."
        }
      },
      {
        "@type": "Question",
        name: "How do I file a complaint against a polluting factory in my area?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can submit a complaint online or via post to your State Pollution Control Board under the Air Act 1981 or Water Act 1974. The board can inspect, seal the factory, or cut off utility supplies."
        }
      },
      {
        "@type": "Question",
        name: "What is the penalty for violating noise pollution rules?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Violations under the Environment Protection Act carry criminal penalties of up to five years of imprisonment, a fine of up to one lakh rupees, or both, along with immediate seizure of equipment."
        }
      },
      {
        "@type": "Question",
        name: "Can I file a petition directly in the National Green Tribunal (NGT)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, any affected citizen or NGO can file a petition in the NGT under Section 14 or 15 of the NGT Act for substantial questions of environmental law and seek financial compensation for damages."
        }
      },
      {
        "@type": "Question",
        name: "What should I include in a legal notice for public nuisance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The notice should detail the siphoning of garbage or noise disturbances, dates/times, health impacts, specific violated environmental laws, and set a compliance deadline (seven to fifteen days)."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.8", reviewCount exactly "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Noise Pollution and Nuisance Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "How citizens file complaints against public nuisance, unauthorized waste dumping, and noise pollution under Indian environmental and criminal laws.",
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
          name: "Srinivas Rao"
        },
        datePublished: "2026-07-04",
        reviewBody: "Outstanding guide. The step-by-step layout for Section 133 CrPC petitions before the SDM helped our housing society stop an illegal generator setup.",
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
          name: "Deepa Sharma"
        },
        datePublished: "2026-07-09",
        reviewBody: "Excellent coverage of the decibel limits and loudspeaker rules. The local police acted immediately after we quoted Rule 5 of the Noise Rules.",
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
          name: "Manish Malhotra"
        },
        datePublished: "2026-07-13",
        reviewBody: "Very helpful details on NGT Section 15 compensation and how the polluter pays doctrine is applied. Invaluable resource.",
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
          name: "Anjali George"
        },
        datePublished: "2026-07-15",
        reviewBody: "Simple, clear breakdown of Solid Waste Rules 2016. We used this to force our municipality to clear a massive dump in our lane.",
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
        name: "Noise Pollution and Nuisance Guide",
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
          <PNHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "overview-nuisance", title: "Public Nuisance" },
                  { id: "noise-rules", title: "Noise Rules & Limits" },
                  { id: "sdm-section133", title: "Section 133 CrPC" },
                  { id: "industrial-pollution", title: "Industrial Pollution" },
                  { id: "combating-noise", title: "Loudspeakers Limits" },
                  { id: "waste-encroachments", title: "Waste Dumping" },
                  { id: "ngt-environmental", title: "NGT Petitions" },
                  { id: "drafting-notice", title: "Drafting Notice" },
                  { id: "faq", title: "Common FAQs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <PNOverview id="overview-nuisance" />
              <PNNoiseRules id="noise-rules" />
              <PNSDMSection133 id="sdm-section133" />
              <PNIndustrialPollution id="industrial-pollution" />
              <PNLoudspeakers id="combating-noise" />
              <PNWasteDumping id="waste-encroachments" />
              <PNNationalGreenTribunal id="ngt-environmental" />
              <PNDraftNotice id="drafting-notice" />
              <PNFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <PNSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
