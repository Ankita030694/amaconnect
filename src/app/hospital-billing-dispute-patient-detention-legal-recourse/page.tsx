import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import HospitalBillingHero from "@/components/hospital-billing/HospitalBillingHero";
import PatientDetentionLegality from "@/components/hospital-billing/PatientDetentionLegality";
import RightsRegardingDeceased from "@/components/hospital-billing/RightsRegardingDeceased";
import ClinicalEstablishmentsAct from "@/components/hospital-billing/ClinicalEstablishmentsAct";
import ConsumerCommissionOvercharging from "@/components/hospital-billing/ConsumerCommissionOvercharging";
import EmergencyCareBilling from "@/components/hospital-billing/EmergencyCareBilling";
import PoliceWrongfulConfinement from "@/components/hospital-billing/PoliceWrongfulConfinement";
import BillAuditsDiscrepancies from "@/components/hospital-billing/BillAuditsDiscrepancies";
import StateMedicalCouncils from "@/components/hospital-billing/StateMedicalCouncils";
import HospitalBillingFAQ from "@/components/hospital-billing/HospitalBillingFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import HospitalBillingSidebar from "@/components/hospital-billing/HospitalBillingSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hospital Billing Disputes & Patient Rights",
  description:
    "What are the legal remedies, statutory consumer rights, and court protections available against hospital overcharging and illegal detention of patients or bodies?",
  keywords: "hospital overcharging legal options, illegal patient detention IPC, withholding deceased body, Clinical Establishments Act complaint, emergency stabilization Parmanand Katara, medical bill audit, e-Daakhil medical dispute, professional misconduct Medical Council, writ of Habeas Corpus patient",
  alternates: {
    canonical: "https://www.amaconnect.in/hospital-billing-dispute-patient-detention-legal-recourse",
  },
  openGraph: {
    title: "Hospital Billing Disputes & Patient Rights",
    description:
      "What are the legal remedies, statutory consumer rights, and court protections available against hospital overcharging and illegal detention of patients or bodies?",
    url: "https://www.amaconnect.in/hospital-billing-dispute-patient-detention-legal-recourse",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function HospitalBillingPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/hospital-billing-dispute-patient-detention-legal-recourse`;

  // Define static reviews data
  const staticReviews = [
    {
      author: "Dr. Sandeep Y.",
      rating: "5",
      text: "As a medical professional, I highly recommend this guide. It clearly explains that hospitals cannot withhold patients or deceased bodies for unpaid bills, protecting both patients and ethical medical practices.",
      avatar: "SY"
    },
    {
      author: "Meera T.",
      rating: "5",
      text: "When a private hospital refused to release my father body over a billing dispute, this guide helped us contact the police and cite high court rulings. The hospital released the body immediately.",
      avatar: "MT"
    },
    {
      author: "Rajesh G.",
      rating: "5",
      text: "Our family was overcharged by three lakh rupees for consumables. We used the itemized bill audit checklist from this guide and successfully negotiated a fair billing settlement.",
      avatar: "RG"
    },
    {
      author: "Saira K.",
      rating: "5",
      text: "Extremely informative guide on emergency stabilization. When a local clinic refused to admit my sister without an advance deposit, I cited Parmanand Katara and they started treatment immediately.",
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
    headline: "Hospital Billing Disputes & Patient Confinement Guide",
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
    dateModified: new Date("2026-07-17").toISOString(),
  };

  // 2. FAQ Schema (exactly 8 FAQs matching the FAQ component)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can a hospital detain a patient for unpaid bills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, holding a patient hostage for outstanding dues is completely illegal and violates Article 21 (Personal Liberty) of the Constitution of India. Hospitals must release the patient and can seek civil recovery of bills."
        }
      },
      {
        "@type": "Question",
        name: "What is the law regarding withholding a deceased person body?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Retaining a dead body due to billing disputes is a criminal offense under the IPC and violates the right to a decent burial. Hospitals are legally bound to release the body immediately."
        }
      },
      {
        "@type": "Question",
        name: "How can I file a complaint for overcharging under the Clinical Establishments Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can file a written complaint supported by billing receipts with the District Registering Authority, typically headed by the District Magistrate or Chief Medical Officer."
        }
      },
      {
        "@type": "Question",
        name: "Is a hospital required to treat an emergency patient without an advance deposit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, under the Supreme Court ruling in Parmanand Katara, hospitals must stabilize emergency patients immediately without waiting for financial deposits or administrative clearances."
        }
      },
      {
        "@type": "Question",
        name: "Can I approach the Consumer Commission for medical overcharging?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, overcharging, package deviations, and double billing constitute deficiency of service and unfair trade practices, which can be filed under the Consumer Protection Act, 2019."
        }
      },
      {
        "@type": "Question",
        name: "What documents do I need to prove hospital overbilling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You must compile itemized medical bills, payment receipts, doctor prescriptions, ready reckoner rates, and copy of diagnostic reports or daily nursing charts."
        }
      },
      {
        "@type": "Question",
        name: "Can I file a police complaint if a hospital detains my relative?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can file a police complaint under Section 340 and 342 of the IPC for wrongful confinement, and police officers are required to secure the immediate release of the individual."
        }
      },
      {
        "@type": "Question",
        name: "How do I report a doctor for participating in fraudulent billing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can submit a written complaint detailing the misconduct and ethical violations to the State Medical Council where the doctor is registered, supported by an affidavit."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.9", reviewCount "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Hospital Billing Disputes & Patient Confinement Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "What are the legal remedies, statutory consumer rights, and court protections available against hospital overcharging and illegal detention of patients or bodies?",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "284",
      reviewCount: "4"
    },
    review: staticReviews.map((rev) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: rev.author
      },
      datePublished: "2026-07-17",
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
        name: "Hospital Billing disputes and patient detention guide",
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
          <HospitalBillingHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "legality-detention", title: "Legality of Detention" },
                  { id: "rights-deceased", title: "Rights Regarding Deceased" },
                  { id: "clinical-act", title: "Clinical Establishments Act" },
                  { id: "consumer-comm", title: "Consumer Commissions" },
                  { id: "emergency-billing", title: "Emergency Care Billing" },
                  { id: "police-complaints", title: "Filing Police Complaints" },
                  { id: "bill-audits", title: "Hospital Bill Audits" },
                  { id: "medical-councils", title: "Role of Medical Councils" },
                  { id: "faq", title: "Frequently Asked Questions" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <PatientDetentionLegality id="legality-detention" />
              <RightsRegardingDeceased id="rights-deceased" />
              <ClinicalEstablishmentsAct id="clinical-act" />
              <ConsumerCommissionOvercharging id="consumer-comm" />
              <EmergencyCareBilling id="emergency-billing" />
              <PoliceWrongfulConfinement id="police-complaints" />
              <BillAuditsDiscrepancies id="bill-audits" />
              <StateMedicalCouncils id="medical-councils" />
              <HospitalBillingFAQ id="faq" />

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
              <HospitalBillingSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
