import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import ARHero from "@/components/animal-rights/ARHero";
import AROverview from "@/components/animal-rights/AROverview";
import ARPetOwnerRights from "@/components/animal-rights/ARPetOwnerRights";
import ARHandlingRWANotices from "@/components/animal-rights/ARHandlingRWANotices";
import ARStreetFeeders from "@/components/animal-rights/ARStreetFeeders";
import ARPoliceComplaints from "@/components/animal-rights/ARPoliceComplaints";
import AROwnerLiability from "@/components/animal-rights/AROwnerLiability";
import ARBreedingRules from "@/components/animal-rights/ARBreedingRules";
import ARCivilCourts from "@/components/animal-rights/ARCivilCourts";
import ARFAQ from "@/components/animal-rights/ARFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import ARSidebar from "@/components/animal-rights/ARSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Animal Rights & Pet Owner Laws Guide | AMAConnect",
  description:
    "What are the legal rights of pet owners, AWBI guidelines for residential societies, and statutory protections against animal cruelty in India.",
  keywords: "AWBI guidelines RWA pet ban, Article 51A(g) compassion, Prevention of Cruelty to Animals Act 1960, elevator access pets, pet fine notice reply, stray dog feeding rules, Section 428 IPC poisoning strays, pet owner bite liability Section 289, dog breeding rules 2017, Order 39 stay RWA",
  alternates: {
    canonical: "https://amaconnect.in/animal-rights-pet-owner-laws-street-animal-protection-guide",
  },
  openGraph: {
    title: "Animal Rights & Pet Owner Laws Guide",
    description:
      "What are the legal rights of pet owners, AWBI guidelines for residential societies, and statutory protections against animal cruelty in India.",
    url: "https://amaconnect.in/animal-rights-pet-owner-laws-street-animal-protection-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function AnimalRightsPetLawsPage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/animal-rights-pet-owner-laws-street-animal-protection-guide`;

  const reviews = [
    {
      author: "Sunil K.",
      rating: "5",
      datePublished: "2026-07-04",
      body: "Our RWA tried to fine us for using the lift with our Labrador. Citing the AWBI elevator guidelines in our reply completely solved the issue.",
      avatarInitials: "SK",
    },
    {
      author: "Divya R.",
      rating: "5",
      datePublished: "2026-07-09",
      body: "I faced severe harassment from neighbors for feeding stray dogs. Filing a writ petition following this guide got police protection for the feeding spot.",
      avatarInitials: "DR",
    },
    {
      author: "Maninder S.",
      rating: "5",
      datePublished: "2026-07-13",
      body: "Excellent resource on PCA Act Section 11. We used the FIR drafting template to prosecute a resident who poisoned stray puppies in our sector.",
      avatarInitials: "MS",
    },
    {
      author: "Priya G.",
      rating: "5",
      datePublished: "2026-07-15",
      body: "Detailed breakdown on RWA overreach. Approaching the Registrar of Societies with these details forced the committee to drop their illegal pet ban bylaws.",
      avatarInitials: "PG",
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
    headline: "Animal Rights and Pet Owner Laws Guide",
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
        name: "Can a housing society (RWA) completely ban pets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, according to the Animal Welfare Board of India (AWBI) guidelines, housing societies cannot ban residents from keeping pets. Any such ban resolution is legally void."
        }
      },
      {
        "@type": "Question",
        name: "Can a society restrict my dog from using elevators or common areas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, RWAs cannot restrict pets from using lifts, corridors, or common areas. However, owners should keep their dogs on a leash and clean up any mess."
        }
      },
      {
        "@type": "Question",
        name: "What should I do if my RWA issues an arbitrary pet fine notice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You should reply in writing citing the AWBI guidelines and the lack of RWA statutory authority to levy fines. If harassment continues, you can approach the Registrar of Societies."
        }
      },
      {
        "@type": "Question",
        name: "What are my rights as a street animal feeder?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Citizens have a constitutional right to feed community animals under Article 51A(g), and the Delhi High Court mandates RWAs to establish designated feeding spots."
        }
      },
      {
        "@type": "Question",
        name: "Is it legal to relocate stray dogs from their original territory?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, under the Animal Birth Control Rules, stray dogs can only be captured for sterilization and vaccination by municipal teams, and must be released back to the exact same spot."
        }
      },
      {
        "@type": "Question",
        name: "How do I file a police complaint against animal cruelty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can submit a written complaint with photo or video evidence at the local police station to file an FIR under Sections 428 and 429 of the IPC."
        }
      },
      {
        "@type": "Question",
        name: "What are the penalties for harming or killing animals under the IPC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Sections 428 and 429 of the IPC, maiming, poisoning, or killing animals is a criminal offense carrying jail terms between two to five years, along with fines."
        }
      },
      {
        "@type": "Question",
        name: "What is the liability of a pet owner if their pet bites someone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The owner can face civil claims for medical expenses and damages for negligence, along with criminal charges under Section 289 of the IPC, carrying up to six months of jail."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.9", reviewCount exactly "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Animal Rights and Pet Owner Laws Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "What are the legal rights of pet owners, AWBI guidelines for residential societies, and statutory protections against animal cruelty in India.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "389",
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
        name: "Animal Rights Guide",
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
          <ARHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "legal-status", title: "Legal Status" },
                  { id: "pet-owner-rights", title: "Pet Owner Rights" },
                  { id: "rwa-notices", title: "RWA Notices" },
                  { id: "street-feeders", title: "Stray Feeders" },
                  { id: "police-complaints", title: "Cruelty FIRs" },
                  { id: "owner-liability", title: "Bite Liabilities" },
                  { id: "breeding-rules", title: "Breeding Rules" },
                  { id: "civil-courts", title: "Civil Protections" },
                  { id: "faq", title: "Common FAQs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0 flex flex-col gap-16">
              
              <AROverview id="legal-status" />
              <ARPetOwnerRights id="pet-owner-rights" />
              <ARHandlingRWANotices id="rwa-notices" />
              <ARStreetFeeders id="street-feeders" />
              <ARPoliceComplaints id="police-complaints" />
              <AROwnerLiability id="owner-liability" />
              <ARBreedingRules id="breeding-rules" />
              <ARCivilCourts id="civil-courts" />
              <ARFAQ id="faq" />

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
              <ARSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
