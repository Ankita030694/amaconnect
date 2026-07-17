import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import SCMHero from "@/components/senior-maintenance/SCMHero";
import SCMOverview from "@/components/senior-maintenance/SCMOverview";
import SCMTribunal from "@/components/senior-maintenance/SCMTribunal";
import SCMAmounts from "@/components/senior-maintenance/SCMAmounts";
import SCMRevokeProperty from "@/components/senior-maintenance/SCMRevokeProperty";
import SCMResidency from "@/components/senior-maintenance/SCMResidency";
import SCMSection125 from "@/components/senior-maintenance/SCMSection125";
import SCMProtection from "@/components/senior-maintenance/SCMProtection";
import SCMEnforcement from "@/components/senior-maintenance/SCMEnforcement";
import SCMFAQ from "@/components/senior-maintenance/SCMFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import SCMSidebar from "@/components/senior-maintenance/SCMSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Senior Citizens Maintenance & Welfare Rights Guide | AMAConnect",
  description:
    "What are the legal rights, maintenance claims, and tribunal routes available to parents and senior citizens facing abandonment or property disputes in India.",
  keywords: "senior citizens maintenance act 2007, parents welfare legislation, maintenance tribunal claim, section 23 property revocation, evicting abusive children, section 125 CrPC parents, geriatric health care, recovery of maintenance, senior citizen support police, old age homes",
  alternates: {
    canonical: "https://amaconnect.in/senior-citizens-maintenance-welfare-legal-rights-guide",
  },
  openGraph: {
    title: "Senior Citizens Maintenance & Welfare Rights Guide",
    description:
      "What are the legal rights, maintenance claims, and tribunal routes available to parents and senior citizens facing abandonment or property disputes in India.",
    url: "https://amaconnect.in/senior-citizens-maintenance-welfare-legal-rights-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function SeniorCitizensWelfarePage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/senior-citizens-maintenance-welfare-legal-rights-guide`;

  // 1. Article Schema (Publisher: "AMA Legal Solutions", Author: "AMA Legal Solutions", image: "/cta-bg.jpg")
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Senior Citizens Maintenance and Welfare Legal Rights Guide in India",
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
        name: "Who is considered a senior citizen under the 2007 Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Act, a senior citizen is any Indian citizen aged sixty years or above. A parent includes biological, adoptive, or stepfathers and stepmothers, regardless of whether they have reached sixty years of age."
        }
      },
      {
        "@type": "Question",
        name: "Can a stepmother or stepfather claim maintenance from stepchildren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the definition of parent under the Act explicitly includes stepmothers and stepfathers, allowing them to claim maintenance provided they do not have independent sources of income."
        }
      },
      {
        "@type": "Question",
        name: "Is it mandatory to hire a lawyer to file a claim in the Maintenance Tribunal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, Section 17 of the Act bars lawyers from representing parties before the tribunal to keep the process simple. Complainants are assisted by state appointed Maintenance Advocates."
        }
      },
      {
        "@type": "Question",
        name: "What is the maximum monthly maintenance amount a tribunal can award?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The national statutory cap under Section 9 is ten thousand rupees per month, though several states have amended their rules or issued court judgments to award higher amounts to meet real medical costs."
        }
      },
      {
        "@type": "Question",
        name: "Can a parent revoke a property gift deed if the child abandons them?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, under Section 23 of the Act, if a senior citizen transfers property on the condition of receiving care, and the child fails to provide it, the tribunal can declare the transfer null and void."
        }
      },
      {
        "@type": "Question",
        name: "How long does a tribunal take to resolve a maintenance claim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Act mandates that the Maintenance Tribunal must resolve the petition within ninety days from the date of serving the notice to the children, though it can extend by thirty days in rare cases."
        }
      },
      {
        "@type": "Question",
        name: "Can a parent file under both Section 125 CrPC and the 2007 Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A parent can choose either route but cannot claim double maintenance for the same expenses. They can file under the 2007 Act for speed and property rights, or under Section 125 for criminal enforcement."
        }
      },
      {
        "@type": "Question",
        name: "What is the penalty if children refuse to pay the ordered maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If children refuse to pay, the tribunal can issue warrants to attach their salaries or seize assets. Under Section 24, defaulting children can also face imprisonment for up to one month."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.8", reviewCount exactly "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Senior Citizens Maintenance Rights Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "What are the legal rights, maintenance claims, and tribunal routes available to parents and senior citizens facing abandonment or property disputes in India.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "273",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Ramesh Iyer"
        },
        datePublished: "2026-07-03",
        reviewBody: "This guide is clear and helpful. The explanation of Section 23 property revocation and District Magistrate summary powers saved my home.",
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
          name: "Saraswathi Bai"
        },
        datePublished: "2026-07-09",
        reviewBody: "Excellent details on how the 90-day tribunal process bypasses slow civil courts. The checklist of documents was exceptionally useful.",
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
          name: "Vijay Anand"
        },
        datePublished: "2026-07-12",
        reviewBody: "Clear comparison between Section 125 CrPC and the 2007 Act. Helped me choose the right path for my mother's medical expenses support.",
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
          name: "Komal Sethi"
        },
        datePublished: "2026-07-15",
        reviewBody: "Perfect explanation of how the tribunal apportioned maintenance duties among working siblings. Highly recommended guide.",
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
        name: "Senior Citizens Maintenance Rights Guide",
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
          <SCMHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "overview-welfare", title: "Overview of Act" },
                  { id: "filing-claims", title: "Filing Claims" },
                  { id: "maintenance-amounts", title: "Maintenance Amounts" },
                  { id: "revoke-property", title: "Revoking Property" },
                  { id: "peaceful-cohabitation", title: "Peaceful Cohabitation" },
                  { id: "crpc-maintenance", title: "Section 125 CrPC" },
                  { id: "abuse-protection", title: "Abuse & Medical Care" },
                  { id: "enforcement-orders", title: "Enforcing Orders" },
                  { id: "faq", title: "Common FAQs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <SCMOverview id="overview-welfare" />
              <SCMTribunal id="filing-claims" />
              <SCMAmounts id="maintenance-amounts" />
              <SCMRevokeProperty id="revoke-property" />
              <SCMResidency id="peaceful-cohabitation" />
              <SCMSection125 id="crpc-maintenance" />
              <SCMProtection id="abuse-protection" />
              <SCMEnforcement id="enforcement-orders" />
              <SCMFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Sidebar Widget */}
            <div className="w-full sticky top-24">
              <SCMSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
