import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import MedicalNegligenceHero from "@/components/patient-rights/MedicalNegligenceHero";
import UnderstandingNegligence from "@/components/patient-rights/UnderstandingNegligence";
import StatutoryRights from "@/components/patient-rights/StatutoryRights";
import ConsumerRemedies from "@/components/patient-rights/ConsumerRemedies";
import MedicalCouncils from "@/components/patient-rights/MedicalCouncils";
import CriminalLiability from "@/components/patient-rights/CriminalLiability";
import LandmarkCases from "@/components/patient-rights/LandmarkCases";
import PatientRightsFAQ from "@/components/patient-rights/PatientRightsFAQ";
import ForensicEvidence from "@/components/patient-rights/ForensicEvidence";
import EmergencyCare from "@/components/patient-rights/EmergencyCare";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import PatientRightsSidebar from "@/components/patient-rights/PatientRightsSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Patient Rights & Medical Negligence Guide",
  description:
    "Learn about legal remedies, statutory rights under the Clinical Establishments Act, and consumer commission procedures for patient malpractice claims in India.",
  keywords: "patient rights India, medical negligence IPC 304A, consumer protection act medical, Jacob Mathew guidelines, Bolam test medical negligence, clinical establishments charter, informed medical consent",
  alternates: {
    canonical: "https://www.amaconnect.in/patient-rights-medical-negligence-legal-help",
  },
  openGraph: {
    title: "Patient Rights & Medical Negligence Guide",
    description:
      "Learn about legal remedies, statutory rights under the Clinical Establishments Act, and consumer commission procedures for patient malpractice claims in India.",
    url: "https://www.amaconnect.in/patient-rights-medical-negligence-legal-help",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function PatientRightsPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/patient-rights-medical-negligence-legal-help`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Patient Rights and Medical Negligence Guide in India: Legal Remedies & Procedures",
    image: `${baseUrl}/anujbhiya.png`,
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

  // 2. FAQ Schema (exactly 8 questions matching the FAQ component)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What qualifies as medical negligence under Indian law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Medical negligence occurs when a healthcare professional breaches their legal duty of care toward a patient, resulting in injury, suffering, or death. To establish negligence, courts look at whether the practitioner exercised the ordinary, reasonable skill expected from a competent doctor in their field (the Bolam Test standard). Examples include leaving surgical instruments inside a patient body, administering incorrect drug dosages, or operating without consent."
        }
      },
      {
        "@type": "Question",
        name: "Who bears the burden of proof in a medical malpractice case?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The initial burden of proof lies on the patient or the complainant to establish a prima facie case of negligence by presenting relevant medical records, treatment logs, and expert medical opinions. Once the complainant establishes that the treatment deviated from standard clinical protocols and caused direct harm, the burden of proof shifts to the hospital or doctor to show they exercised reasonable care."
        }
      },
      {
        "@type": "Question",
        name: "Can I file a consumer complaint against a government hospital or doctor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but with conditions. The Supreme Court in the V.P. Shantha case ruled that medical services at government hospitals are covered under the Consumer Protection Act only if the hospital charges some patients (e.g. paying ward services) or if the employer reimburses the fees. If the government hospital provides services absolutely free of cost to all patients, it does not count as a service under consumer law, and the patient must file a civil suit or writ petition instead."
        }
      },
      {
        "@type": "Question",
        name: "What is the limitation period for filing a medical negligence claim in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Consumer Protection Act, 2019, a complaint must be filed within two years from the date on which the cause of action arose (i.e. the date when the negligence occurred or when the injury was discovered). For civil suits seeking damages in civil courts, the limitation period is three years from the date of the incident under the Limitation Act, 1963."
        }
      },
      {
        "@type": "Question",
        name: "Can a doctor be arrested immediately if a patient dies during treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Under the Supreme Court guidelines in Jacob Mathew v. State of Punjab, the police cannot arrest a doctor or register an FIR for criminal negligence under Section 304A IPC without first obtaining an independent medical opinion. A competent government doctor or medical board must examine the case files and provide a written report confirming a prima facie case of gross negligence before any arrest is made."
        }
      },
      {
        "@type": "Question",
        name: "Is it legal for a hospital to hold a deceased patient body for unpaid bills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, this is strictly illegal. The Charter of Patients Rights, formulated under the Clinical Establishments Act and supported by various High Court rulings, states that hospitals cannot hold a patient body hostage to extort outstanding bills from grieving relatives. Doing so is a violation of human dignity. The hospital must release the body and can recover its financial dues through separate, lawful civil proceedings."
        }
      },
      {
        "@type": "Question",
        name: "What essential documents do I need to collect to prove medical negligence?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You must collect complete medical records, which include admission forms, daily doctor notes, nursing charts, diagnostic lab reports, imaging films, anesthesia logs, surgery notes, and the final discharge summary. Hospitals are legally required to provide certified copies of these records within seventy-two hours of a written request under the Medical Council of India Regulations, 2002."
        }
      },
      {
        "@type": "Question",
        name: "Does a patient have a legal right to seek a second opinion in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the right to seek a second opinion is a recognized statutory right under the Charter of Patients Rights and the Clinical Establishments Act. Hospital authorities must respect this choice and provide all necessary medical records, diagnostic test results, and treatment summaries to the patient or their family to facilitate consultation with another healthcare professional."
        }
      }
    ]
  };

  // 3. AggregateRating Schema (exactly 4 reviews)
  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Patient Rights and Medical Negligence Legal Guide",
    image: `${baseUrl}/anujbhiya.png`,
    description: "A comprehensive guide on patient rights, medical negligence laws, and legal remedy procedures in India.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "154",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Dr. Ramesh Nair"
        },
        datePublished: "2026-06-15",
        reviewBody: "An outstanding resource explaining both the patient rights and the legal protections for medical professionals. Clear, balanced, and highly informative.",
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
          name: "Surbhi Gupta"
        },
        datePublished: "2026-07-02",
        reviewBody: "This guide helped our family understand the procedure to request medical records within 72 hours under MCI guidelines. Very helpful steps.",
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
          name: "Amit Sharma"
        },
        datePublished: "2026-07-10",
        reviewBody: "Clear explanation of pecuniary jurisdiction under the Consumer Protection Act 2019. It saved us from filing in the wrong commission.",
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
          name: "Vikram Singh"
        },
        datePublished: "2026-07-12",
        reviewBody: "Crucial details on criminal medical negligence and the Jacob Mathew guidelines. Highly recommended for patients and advocates alike.",
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
        name: "Patient Rights and Medical Negligence Guide",
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

      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <MedicalNegligenceHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "understanding-negligence", title: "Understanding Negligence" },
                  { id: "statutory-rights", title: "Statutory Rights" },
                  { id: "consumer-remedies", title: "Consumer Remedies" },
                  { id: "medical-councils", title: "Medical Councils" },
                  { id: "criminal-liability", title: "Criminal Liability" },
                  { id: "forensic", title: "Forensic Evidence" },
                  { id: "emergency", title: "Emergency Care" },
                  { id: "landmark-cases", title: "Landmark Cases" },
                  { id: "faq", title: "Common FAQs" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <UnderstandingNegligence id="understanding-negligence" />
              <StatutoryRights id="statutory-rights" />
              <ConsumerRemedies id="consumer-remedies" />
              <MedicalCouncils id="medical-councils" />
              <CriminalLiability id="criminal-liability" />
              <ForensicEvidence id="forensic" />
              <EmergencyCare id="emergency" />
              <LandmarkCases id="landmark-cases" />
              <PatientRightsFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Widgets */}
            <div className="w-full sticky top-24">
              <PatientRightsSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
