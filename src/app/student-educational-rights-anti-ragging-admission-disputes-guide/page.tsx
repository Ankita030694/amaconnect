import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import SRHero from "@/components/student-rights/SRHero";
import SREducationRight from "@/components/student-rights/SREducationRight";
import SRAntiRagging from "@/components/student-rights/SRAntiRagging";
import SRFeeAdmission from "@/components/student-rights/SRFeeAdmission";
import SRRegulations from "@/components/student-rights/SRRegulations";
import SRExamDisputes from "@/components/student-rights/SRExamDisputes";
import SRDisciplinary from "@/components/student-rights/SRDisciplinary";
import SRLoanRights from "@/components/student-rights/SRLoanRights";
import SRWritPetitions from "@/components/student-rights/SRWritPetitions";
import SRFAQ from "@/components/student-rights/SRFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import SRSidebar from "@/components/student-rights/SRSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Student Rights & Education Laws Guide | AMAConnect",
  description:
    "How students and parents enforce rights against university ragging, resolve school admission disputes under RTE, and seek remedies for exam disqualifications.",
  keywords: "RTE Act 2009 Article 21A, EWS category admissions, UGC anti ragging guidelines, school fee hike high court, UGC fake universities list, withheld marksheet degree, UMC exam cheating defense, student rustication show cause, educational loan interest subsidy, Writ of Mandamus education",
  alternates: {
    canonical: "https://amaconnect.in/student-educational-rights-anti-ragging-admission-disputes-guide",
  },
  openGraph: {
    title: "Student Rights & Education Laws Guide",
    description:
      "How students and parents enforce rights against university ragging, resolve school admission disputes under RTE, and seek remedies for exam disqualifications.",
    url: "https://amaconnect.in/student-educational-rights-anti-ragging-admission-disputes-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function StudentEducationalRightsPage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/student-educational-rights-anti-ragging-admission-disputes-guide`;

  const reviews = [
    {
      author: "Akash D.",
      rating: "5",
      datePublished: "2026-07-04",
      body: "This guide helped me report a severe campus ragging case to the UGC helpline. The college was forced to file an FIR against the seniors.",
      avatarInitials: "AD",
    },
    {
      author: "Pritha S.",
      rating: "5",
      datePublished: "2026-07-09",
      body: "My child was denied an EWS seat despite clearing the draw. Quoting the RTE Act provisions mentioned here to the DEO resolved the admission delay.",
      avatarInitials: "PS",
    },
    {
      author: "Naman K.",
      rating: "5",
      datePublished: "2026-07-13",
      body: "Our university withheld degrees over a library fee dispute. Citing the High Court rulings on withheld certificates got my marksheet released.",
      avatarInitials: "NK",
    },
    {
      author: "Meenakshi R.",
      rating: "5",
      datePublished: "2026-07-15",
      body: "Excellent resource on UMC defense rights. I challenged an unfair cheating accusation by enforcing show-cause rules before the committee.",
      avatarInitials: "MR",
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
    headline: "Campus Rights and Student Education Laws Guide",
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
        name: "What is the scope of the Right to Education (RTE) Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Article 21A, the RTE Act guarantees free and compulsory education to all children aged six to fourteen years. It bans capitation fees, screening tests, and physical punishment in all schools."
        }
      },
      {
        "@type": "Question",
        name: "Does the 25% EWS reservation apply to all private schools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 12(1)(c), the 25% reservation for economically weaker sections (EWS) applies to all private, unaided local schools at the entry level."
        }
      },
      {
        "@type": "Question",
        name: "How do I report a ragging incident on campus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can report the incident to your college Anti-Ragging Committee, submit an anonymous complaint, or call the UGC national helpline at 1800-180-5522."
        }
      },
      {
        "@type": "Question",
        name: "What is the penalty for ragging in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Accused students face suspension, hostel expulsion, rustication, and criminal prosecution under the IPC, leading to imprisonment and a permanent ban on admissions."
        }
      },
      {
        "@type": "Question",
        name: "Can a school arbitrarily increase its fees without approval?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, private schools must submit fee proposals to the state Fee Regulatory Committee. Hikes implemented without committee approval can be challenged in High Courts."
        }
      },
      {
        "@type": "Question",
        name: "Can a university withhold my degree certificate over a fee dispute?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, courts have ruled that universities cannot hold a student's degree hostage over fee disputes, as it affects the student's career prospects."
        }
      },
      {
        "@type": "Question",
        name: "What are my rights if accused of using unfair means (UMC) in an exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You are entitled to a copy of the invigilator's report, access to collected evidence, and a personal hearing to defend yourself before the UMC committee."
        }
      },
      {
        "@type": "Question",
        name: "How can I challenge an arbitrary college suspension or rustication?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can file a writ petition under Article 226 before the High Court, seeking to quash the order for violating natural justice and obtain an interim stay order."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.9", reviewCount exactly "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Campus Rights and Student Education Laws Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "How students and parents enforce rights against university ragging, resolve school admission disputes under RTE, and seek remedies for exam disqualifications.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "428",
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
        name: "Student Rights Guide",
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
          <SRHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "constitutional-education", title: "Constitutional RTE" },
                  { id: "anti-ragging", title: "Anti-Ragging Laws" },
                  { id: "fee-admission", title: "Fee & Admissions" },
                  { id: "university-regulations", title: "UGC & AICTE Rules" },
                  { id: "exam-disputes", title: "Exam Disputes" },
                  { id: "disciplinary-inquiries", title: "Campus Inquiries" },
                  { id: "loan-rights", title: "Loan Rights" },
                  { id: "writ-petitions", title: "Writ Petitions" },
                  { id: "faq", title: "Common FAQs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0 flex flex-col gap-16">
              
              <SREducationRight id="constitutional-education" />
              <SRAntiRagging id="anti-ragging" />
              <SRFeeAdmission id="fee-admission" />
              <SRRegulations id="university-regulations" />
              <SRExamDisputes id="exam-disputes" />
              <SRDisciplinary id="disciplinary-inquiries" />
              <SRLoanRights id="loan-rights" />
              <SRWritPetitions id="writ-petitions" />
              <SRFAQ id="faq" />

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
              <SRSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
