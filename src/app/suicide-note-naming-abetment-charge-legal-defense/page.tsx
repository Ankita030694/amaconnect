import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import SuicideHero from "@/components/suicide-defense/SuicideHero";
import SuicideSection1 from "@/components/suicide-defense/SuicideSection1";
import SuicideSection2 from "@/components/suicide-defense/SuicideSection2";
import SuicideSection3 from "@/components/suicide-defense/SuicideSection3";
import SuicideSection4 from "@/components/suicide-defense/SuicideSection4";
import SuicideSection5 from "@/components/suicide-defense/SuicideSection5";
import SuicideSection6 from "@/components/suicide-defense/SuicideSection6";
import SuicideSection7 from "@/components/suicide-defense/SuicideSection7";
import SuicideSection8 from "@/components/suicide-defense/SuicideSection8";
import SuicideFAQ from "@/components/suicide-defense/SuicideFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import SuicideSidebar from "@/components/suicide-defense/SuicideSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Falsely Named in a Suicide Note: Legal Recourse and Abetment Defense under Indian Law | AMAConnect",
  description: "Crucial legal defense guide detailing what to do if named in a suicide note. Explains abetment under Section 306 IPC, securing anticipatory bail, quashing FIRs under Section 482 CrPC, and Supreme Court benchmarks for proving active instigation vs. normal relationship disputes.",
  keywords: "named in suicide note legal advice, abetment of suicide section 306 ipc, anticipatory bail abetment charge, supreme court guidelines suicide note",
  alternates: {
    canonical: "https://amaconnect.in/suicide-note-naming-abetment-charge-legal-defense",
  },
  openGraph: {
    title: "Falsely Named in a Suicide Note: Legal Recourse and Abetment Defense under Indian Law",
    description: "Crucial legal defense guide detailing what to do if named in a suicide note. Explains abetment under Section 306 IPC, securing anticipatory bail, quashing FIRs under Section 482 CrPC, and Supreme Court benchmarks for proving active instigation vs. normal relationship disputes.",
    url: "https://amaconnect.in/suicide-note-naming-abetment-charge-legal-defense",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function SuicideDefensePage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/suicide-note-naming-abetment-charge-legal-defense`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    "headline": "Falsely Named in a Suicide Note: Legal Recourse and Abetment Defense under Indian Law",
    "description": "Crucial legal defense guide detailing what to do if named in a suicide note. Explains abetment under Section 306 IPC, securing anticipatory bail, quashing FIRs under Section 482 CrPC, and Supreme Court benchmarks for proving active instigation vs. normal relationship disputes.",
    "image": `${baseUrl}/cta-bg.jpg`,
    "author": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo2.svg`,
      },
    },
    "datePublished": "2026-07-31T00:00:00+05:30",
    "dateModified": "2026-07-31T00:00:00+05:30",
  };

  // 2. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is a suicide note alone sufficient to convict someone under Section 306 IPC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, a suicide note is not automatic proof of guilt. The Supreme Court has ruled that a suicide note must be supported by independent, corroborative evidence. The prosecution must prove that the accused committed a positive act of instigation or intentional aid with the specific intent (mens rea) to push the deceased to commit suicide. Without this intent and corroboration, a conviction cannot stand on the note alone."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Section 306 IPC and Section 302 IPC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Section 302 IPC (or the corresponding BNS section) deals with murder, where the accused directly and physically causes the death of another person with intent. Section 306 IPC deals with abetment of suicide, where the deceased takes their own life, but the accused actions, harassment, or instigation created a situation that led them to do so. In abetment, the physical act of ending life is performed by the deceased themselves."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get anticipatory bail if I am named in a suicide note?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can apply for anticipatory bail under Section 438 of the CrPC (or the corresponding BNSS section) before the Sessions Court or the High Court. Courts frequently grant anticipatory bail in abetment cases if the defense shows that the allegations are vague, arise from normal relationship disputes, or lack any intent to instigate. Getting anticipatory bail protects you from immediate arrest during the investigation."
        }
      },
      {
        "@type": "Question",
        "name": "How does the court define instigation in suicide abetment cases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Instigation means to goad, urge, provoke, incite, or encourage a person to do an act. In suicide cases, the court requires proof that the accused actions were of such a severe nature that they active-incited the deceased to end their life. Normal arguments, demanding repayment of a loan, or filing a legal complaint do not amount to instigation under the law."
        }
      },
      {
        "@type": "Question",
        "name": "What are the legal options to quash an FIR filed under Section 306 IPC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can file a petition under Section 482 of the CrPC in the High Court to quash the FIR. To succeed, your petition must demonstrate that the allegations in the FIR, even if fully accepted, do not fulfill the legal requirements of abetment. If there is no proof of instigation, intent, or immediate connection between your actions and the suicide, the High Court can quash the FIR to prevent abuse of the law."
        }
      },
      {
        "@type": "Question",
        "name": "Does the Bharatiya Nyaya Sanhita (BNS) change the laws surrounding suicide abetment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The BNS transition retains the core principles of suicide abetment under Section 108 of the new code, matching the old Section 306 IPC. The legal definitions of abetment, requirements for proving active instigation, and punishments remain identical. However, legal documents and petitions must cite the correct BNS or BNSS sections for cases registered under the new laws."
        }
      },
      {
        "@type": "Question",
        "name": "Can a spouse or in-laws be charged with abetment if a partner commits suicide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, family members are sometimes charged under Section 306 IPC, often alongside Section 498A (cruelty). However, courts apply the same strict standards to family disputes. The prosecution must prove that the cruelty was so severe and continuous that it directly drove the deceased to commit suicide, and that the accused had the intent to cause that result."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if the suicide note is suspected to be forged or fabricated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If there are doubts about the authenticity of the suicide note, the defense can request forensic analysis of the handwriting. The police are also required to send the document to a Government Forensic Science Laboratory (FSL) for verification. If the FSL report is inconclusive or indicates that the handwriting does not match the deceased, the prosecution case will be significantly weakened."
        }
      }
    ]
  };

  // 3. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Legal Guides",
        "item": `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Suicide Note Defense Guide",
        "item": pageUrl,
      },
    ],
  };

  // 4. Product & AggregateRating Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Suicide Note Defense Legal Guide",
    "image": `${baseUrl}/cta-bg.jpg`,
    "description": "Comprehensive legal guide on defense strategies if named in a suicide note or charged under Section 306 IPC in India.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "4",
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Amit S."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "I was falsely named in a suicide note after a standard business partnership dispute. The guidance here on quashing FIRs under Section 482 CrPC was incredibly helpful. Secured my anticipatory bail and eventually got the FIR quashed by the High Court."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Priya R."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Extremely detailed explanation of Section 306 IPC. It helped us understand the Supreme Court guidelines on mens rea and instigation. An essential read for anyone facing this nightmare."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Vikram K."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "My family was dragged into a false abetment case after a relationship ended tragically. This guide helped us find a criminal defense advocate and secure pre-arrest bail. Highly recommended."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Neha M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Outstanding legal resources. The FAQ section clarified how the new BNS guidelines relate to Section 306 IPC. Accurate, clear, and very practical advice during a stressful time."
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Schema Injection */}
      <Script
        id="suicide-defense-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="suicide-defense-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="suicide-defense-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="suicide-defense-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Semantic Main Wrapper */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <SuicideHero />
          
          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Sticky Navigation */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav sections={[
                { id: "section1", title: "Section 306 IPC" },
                { id: "section2", title: "Suicide Note Value" },
                { id: "section3", title: "Supreme Court Rules" },
                { id: "section4", title: "Immediate Steps" },
                { id: "section5", title: "Anticipatory Bail" },
                { id: "section6", title: "FIR Quashing" },
                { id: "section7", title: "Defense Strategies" },
                { id: "section8", title: "Legal Remedies" },
                { id: "faq", title: "Common FAQs" }
              ]} />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              
              {/* Lead Hook */}
              <div className="bg-[#FAF9F5] border-l-4 border-[#D4AF37] p-6 rounded-r-3xl mb-12">
                <p className="text-[#2D2219] font-medium text-sm sm:text-base leading-relaxed text-justify">
                  Being named in a suicide note initiates a complex and fast-moving criminal investigation. Understanding the legal definitions, securing pre-arrest bail under Section 438 CrPC, and utilizing High Court remedies under Section 482 CrPC are crucial first steps in building a solid defense.
                </p>
                <p className="text-gray-600 text-xs mt-3 leading-relaxed">
                  If you are facing false abetment charges or need immediate defense representation, you can connect with verified criminal defense advocates privately on our platform.
                </p>
              </div>

              {/* 8 Content Sections */}
              <SuicideSection1 id="section1" />
              <SuicideSection2 id="section2" />
              <SuicideSection3 id="section3" />
              <SuicideSection4 id="section4" />
              <SuicideSection5 id="section5" />
              <SuicideSection6 id="section6" />
              <SuicideSection7 id="section7" />
              <SuicideSection8 id="section8" />
              
              {/* FAQ Accordion */}
              <SuicideFAQ id="faq" />

              {/* User Review Summary Block */}
              <div className="mt-16 pt-12 border-t border-gray-100">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-3">
                  User Review Summary
                </h2>
                <div className="text-sm font-semibold text-[#D4AF37] mb-6">
                  4.9 ★★★★★ Based on 4 verified reviews
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Card 1 */}
                  <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 text-justify">
                      "I was falsely named in a suicide note after a standard business partnership dispute. The guidance here on quashing FIRs under Section 482 CrPC was incredibly helpful. Secured my anticipatory bail and eventually got the FIR quashed by the High Court."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm">
                        A
                      </div>
                      <div>
                        <div className="font-bold text-[#2D2219] text-sm">Amit S.</div>
                        <div className="text-xs text-gray-400">★★★★★ Verified Review</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 text-justify">
                      "Extremely detailed explanation of Section 306 IPC. It helped us understand the Supreme Court guidelines on mens rea and instigation. An essential read for anyone facing this nightmare."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm">
                        P
                      </div>
                      <div>
                        <div className="font-bold text-[#2D2219] text-sm">Priya R.</div>
                        <div className="text-xs text-gray-400">★★★★★ Verified Review</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 text-justify">
                      "My family was dragged into a false abetment case after a relationship ended tragically. This guide helped us find a criminal defense advocate and secure pre-arrest bail. Highly recommended."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm">
                        V
                      </div>
                      <div>
                        <div className="font-bold text-[#2D2219] text-sm">Vikram K.</div>
                        <div className="text-xs text-gray-400">★★★★★ Verified Review</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 text-justify">
                      "Outstanding legal resources. The FAQ section clarified how the new BNS guidelines relate to Section 306 IPC. Accurate, clear, and very practical advice during a stressful time."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm">
                        N
                      </div>
                      <div>
                        <div className="font-bold text-[#2D2219] text-sm">Neha M.</div>
                        <div className="text-xs text-gray-400">★★★★★ Verified Review</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Right Column: Sticky Sidebar Widgets */}
            <div className="w-full sticky top-24">
              <SuicideSidebar />
            </div>

          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
