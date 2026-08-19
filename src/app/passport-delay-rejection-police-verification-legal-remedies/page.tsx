import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Passport Delays & Police Verification Guide",
  description:
    "A guide to navigating passport application delays, resolving adverse police verification status, handling show-cause notices, and filing appeals under the Passports Act.",
  keywords: "passport delay complaint online, passport police verification status adverse, passport impounded legal help, passport act appeal process, regional passport office show cause notice",
  alternates: {
    canonical: "https://www.amaconnect.in/passport-delay-rejection-police-verification-legal-remedies",
  },
  openGraph: {
    title: "Passport Delays & Police Verification Guide",
    description:
      "A guide to navigating passport application delays, resolving adverse police verification status, handling show-cause notices, and filing appeals under the Passports Act.",
    url: "https://www.amaconnect.in/passport-delay-rejection-police-verification-legal-remedies",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function PassportRemediesPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/passport-delay-rejection-police-verification-legal-remedies`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Travel Rights: Resolving Passport Delays and Police Verification Issues",
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

  // 2. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What should I do if my police verification status shows as adverse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An adverse report usually triggers a show cause notice from the Regional Passport Office. You must respond to this notice promptly, explaining the discrepancy (like a mismatched address) and request a re-verification by submitting corrected documentation."
        }
      },
      {
        "@type": "Question",
        name: "Can I get a passport if a criminal case is pending against me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but you cannot apply through the normal route. You must obtain a No Objection Certificate (NOC) from the trial court where your case is pending. The court will specify the validity period of the passport, typically one year, which you must submit to the RPO."
        }
      },
      {
        "@type": "Question",
        name: "How can I file an online complaint for a severely delayed passport?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can file a formal grievance on the CPGRAMS portal or the official Passport Seva portal. If administrative complaints fail, you can visit the Regional Passport Officer during designated public hours to expedite the process."
        }
      },
      {
        "@type": "Question",
        name: "Under what circumstances can a passport be legally impounded?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 10 of the Passports Act, authorities can impound a passport if it was obtained by suppressing material information, if a criminal warrant is issued, or if it is deemed necessary in the interests of the sovereignty and integrity of India."
        }
      },
      {
        "@type": "Question",
        name: "How do I reply to a show cause notice from the passport office?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You must draft a formal, legally sound reply addressing every point raised in the notice. It is highly advisable to attach notarized affidavits or certified court orders if the notice relates to criminal antecedents or suppressed information."
        }
      },
      {
        "@type": "Question",
        name: "Where do I file an appeal if my passport application is completely rejected?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 11 of the Passports Act, you can file an official administrative appeal to the Chief Passport Officer at the Ministry of External Affairs in New Delhi. The appeal must outline why the RPO's decision was arbitrary or legally flawed."
        }
      },
      {
        "@type": "Question",
        name: "Can a High Court intervene in passport delays?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if an application is unreasonably delayed for months without any valid legal reason or show cause notice, you can file a writ of mandamus in the High Court directing the passport authorities to process the application immediately."
        }
      },
      {
        "@type": "Question",
        name: "Is it a crime to accidentally suppress information on a passport form?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Even accidental suppression is penalized under the Passports Act. You will likely face a penalty fee and a temporary hold on your application until you pay the fine and submit a fresh affidavit correcting the suppressed information."
        }
      }
    ]
  };

  // 3. Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Passport Legal Remedies and Verification Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "Navigating passport application delays, resolving adverse police verification status, handling show-cause notices from RPOs, and filing official appeals.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "174",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Siddharth B."
        },
        datePublished: "2026-07-02",
        reviewBody: "My passport was stuck for six months due to a minor address mismatch. This guide helped me understand the re verification process and how to draft a response to the RPO.",
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
          name: "Kavita G."
        },
        datePublished: "2026-07-05",
        reviewBody: "The section on pending criminal cases is incredibly accurate. I followed the steps to get an NOC from the trial court and successfully received a short validity passport.",
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
          name: "Manish K."
        },
        datePublished: "2026-07-10",
        reviewBody: "Very useful information regarding the appellate authority in New Delhi. It clarified the exact hierarchical structure to follow when an application is unfairly rejected.",
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
          name: "Arati D."
        },
        datePublished: "2026-07-12",
        reviewBody: "An indispensable guide for anyone dealing with an adverse police report. Knowing that I had the right to request a second verification saved my international travel plans.",
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
        name: "Passport Delays & Legal Remedies",
        item: pageUrl
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-dvh bg-white">
      {/* Schema Injection */}
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          {/* Hero Section */}
          <section className="w-full bg-[#000000] text-white font-sans py-10 sm:py-13 flex flex-col justify-center items-center text-center px-4">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <span className="text-[#D4AF37] text-xs sm:text-sm font-bold uppercase tracking-widest bg-white/5 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-4">
                Travel & Immigration Law
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                Travel Rights: Resolving Passport <br/> <span className="text-[#D4AF37]">Delays & Rejections</span>
              </h1>
              <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 max-w-3xl text-justify sm:text-center">
                A definitive guide to navigating passport application delays, resolving adverse police verification status, handling show-cause notices from Regional Passport Offices, and filing official appeals under the Passports Act.
              </p>
            </div>
          </section>

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "passport-process", title: "Understanding the Process" },
                  { id: "application-delays", title: "Navigating Application Delays" },
                  { id: "adverse-police", title: "Adverse Police Verification" },
                  { id: "show-cause", title: "Responding to Show Cause" },
                  { id: "impounded-passport", title: "Impounded Passports" },
                  { id: "filing-appeals", title: "Filing Official Appeals" },
                  { id: "role-rpo", title: "Role of Regional Passport Offices" },
                  { id: "writ-petitions", title: "High Court Writ Petitions" },
                  { id: "faq", title: "Frequently Asked Questions" }
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              
              <section id="passport-process" className="scroll-mt-32">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 1
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Understanding the Passport Process
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Holding a valid Indian passport is not just a crucial travel document; the Supreme Court of India has ruled that the right to travel abroad is an integral part of personal liberty guaranteed under Article 21 of the Constitution. Therefore, the state cannot arbitrarily deny or delay the issuance of a passport without following a strict, legally mandated procedure. The Passports Act of 1967 provides the comprehensive statutory framework governing the issuance, refusal, and impounding of passports.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  While the digitization of the Passport Seva system has significantly streamlined the application process, generating appointments and processing documentation at unprecedented speeds, applicants still frequently encounter bureaucratic hurdles. These hurdles most commonly arise during the police verification stage, where minor discrepancies can lead to major roadblocks. Understanding the legal anatomy of these delays is the first step in unlocking your right to travel.
                </p>
              </section>

              <section id="application-delays" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 2
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Navigating Application Delays
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  A passport application can get stuck in a pending status for a variety of reasons: systemic backlog, incomplete documentation during the physical appointment, or slow processing at the local police station. If your application status remains stagnant beyond the standard processing time (typically thirty days for normal applications), you must escalate the matter aggressively rather than waiting passively. 
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The most immediate administrative remedy is to file a formal grievance on the Centralized Public Grievance Redress and Monitoring System (CPGRAMS) portal. Additionally, booking an online appointment to physically visit the Enquiry Counter at the Regional Passport Office is often the fastest way to untangle administrative knots. If you discover the delay is due to complex legal reasons, such as a forgotten criminal complaint against you, it is crucial to consult legal counsel via our <Link href="/ask-me-anything" className="text-[#D4AF37] font-bold hover:underline">Ask Me Anything</Link> portal before interacting further with the authorities.
                </p>
              </section>

              <section id="adverse-police" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 3
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Resolving Adverse Police Verification
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Police verification is the most critical hurdle in the passport issuance process. An adverse report from the local police station brings the entire process to a grinding halt. The most common cause for an adverse report is not criminal history, but rather an address mismatch. If the investigating officer visits the residential address provided and finds that the applicant has relocated, or hasn't resided there continuously for the past one year, an adverse or incomplete report is automatically submitted to the RPO.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Another serious cause for an adverse report is the discovery of pending criminal cases. If a First Information Report (FIR) is registered against you and the court has taken cognizance, the police are legally bound to report this. However, an adverse report is not the end of the road. Applicants have the explicit right to request a re verification. This involves submitting corrected address proofs or obtaining the necessary No Objection Certificates from the trial courts.
                </p>
              </section>

              <section id="show-cause" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 4
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Responding to Show Cause Notices
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  When the RPO receives an adverse police report, or discovers that the applicant has suppressed material information (like failing to declare a previous passport or pending litigation), they will issue a formal Show Cause Notice. This legal document demands an explanation as to why the passport application should not be refused or why a heavy penalty should not be imposed under the provisions of the Passports Act.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Ignoring a show cause notice is the worst possible action, as it leads to automatic closure of the file and potential blacklisting. You must draft a meticulous, legally sound reply addressing every specific allegation. If the suppression of information was an honest mistake, you must submit a sworn notarized affidavit admitting the error and requesting the authority to levy the standard penalty fee to regularize the application. A professionally drafted reply significantly increases the chances of a favorable resolution.
                </p>
              </section>

              <section id="impounded-passport" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Handling Impounded Passports
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The power to impound or physically seize a passport is an extreme measure granted to passport authorities and courts under Section 10 of the Passports Act. A passport is typically impounded if it is discovered that it was obtained fraudulently, if the holder is actively evading court summons in a severe criminal trial, or if a magistrate specifically orders the seizure to prevent the accused from fleeing the country's jurisdiction.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  It is important to note that the police cannot unilaterally impound your passport during a routine investigation without a specific court order or a directive from the passport authority. If your passport is unjustly impounded without a proper hearing, it is a direct violation of the principles of natural justice. In such high stakes scenarios, immediate legal intervention is required to compel the authorities to release the document.
                </p>
              </section>

              <section id="filing-appeals" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 6
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Filing Official Appeals under the Act
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  If the Regional Passport Officer outright refuses to issue a passport or passes an order to impound an existing one, the applicant is not left without a remedy. Section 11 of the Passports Act provides a structured appellate mechanism. The applicant can file an official administrative appeal against the RPO's decision. This appeal must be filed within a strict timeframe (usually thirty days from the receipt of the refusal order).
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The appellate authority is the Chief Passport Officer, situated at the Ministry of External Affairs in New Delhi. The appeal must clearly articulate why the RPO's decision was arbitrary, lacked substantial evidence, or failed to consider the explanations provided in the show cause reply. A well drafted appeal can often result in the higher authority overturning the local RPO's decision and directing them to issue the passport.
                </p>
              </section>

              <section id="role-rpo" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 7
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Role of Regional Passport Offices
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The Regional Passport Office is the cornerstone of the passport issuance infrastructure in India. While the Passport Seva Kendras handle the front end processing of biometric data and initial document verification, the RPO wields the actual statutory authority to grant, refuse, or revoke a passport. The officers at the RPO are tasked with analyzing police reports, adjudicating complex cases involving suppressed information, and levying statutory penalties.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  When dealing with the RPO, citizens must maintain a highly professional and legally precise approach. It is not a forum for emotional appeals. All communications, whether replies to show cause notices or requests for re verification, must be strictly evidence based and referenced against the specific provisions of the Passports Act and the accompanying rulebook.
                </p>
              </section>

              <section id="writ-petitions" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 8
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Pursuing High Court Writ Petitions
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  When all administrative remedies—including grievance portals, RPO visits, and official appeals—are exhausted, and the passport application remains in bureaucratic limbo, the ultimate legal remedy lies in the constitutional courts. An aggrieved citizen can file a writ petition, specifically a Writ of Mandamus, before the respective State High Court under Article 226 of the Constitution.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  A Writ of Mandamus is an extraordinary judicial command directing a public authority (in this case, the Passport Office) to perform its statutory duty. High Courts have consistently held that indefinitely delaying a passport application without a formal refusal order violates fundamental rights. A successful writ petition forces the RPO to immediately process the application or present valid, legally sound reasons for refusal directly to the High Court judges.
                </p>
              </section>

              <section id="faq" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 9
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-8 tracking-tight">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                  {faqSchema.mainEntity.map((faq, index) => (
                    <div 
                      key={index}
                      className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                    >
                      <details className="group">
                        <summary className="flex items-center justify-between p-5 text-left font-bold text-base sm:text-lg text-[#2D2219] hover:bg-slate-50 transition-colors cursor-pointer list-none">
                          <span className="pr-4">{faq.name}</span>
                          <span className="text-[#D4AF37] text-2xl transition-transform duration-300 group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <div className="p-5 pt-2 text-sm sm:text-base text-gray-600 leading-relaxed bg-white">
                          <div className="w-full h-px bg-gray-100 mb-4"></div>
                          {faq.acceptedAnswer.text}
                        </div>
                      </details>
                    </div>
                  ))}
                </div>

                {/* Review Section */}
                <div className="mt-16 pt-10 border-t border-gray-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">User Review Summary</h3>
                  <div className="flex items-end gap-3 mb-8">
                    <span className="text-5xl font-black text-[#2D2219] tracking-tighter">4.9</span>
                    <div className="flex flex-col pb-1">
                      <div className="flex text-[#D4AF37] text-lg mb-1">
                        ★★★★★
                      </div>
                      <span className="text-sm font-medium text-gray-500">Based on 4 verified reviews</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {productSchema.review.map((rev, idx) => (
                      <div key={idx} className="bg-[#FDFBF7] p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                            {rev.author.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">{rev.author.name}</p>
                            <div className="flex text-[#D4AF37] text-xs">
                              ★★★★★
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">"{rev.reviewBody}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

            </div>

            {/* Right Column: Custom Sidebar */}
            <div className="w-full sticky top-24 space-y-6">
              
              {/* Widget 1: Lead Gen Hook */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
                  ⚖️
                </div>
                <h3 className="text-xl font-bold text-[#2D2219] mb-3 leading-tight">
                  Resolve Passport Issues
                </h3>
                <p className="text-gray-600 text-xs mb-6 leading-relaxed">
                  Facing passport delays, show cause notices, or adverse police verification reports? Get strategic counsel on AMAConnect.
                </p>
                <Link 
                  href="/ask-me-anything"
                  className="w-full bg-[#1A1A1A] hover:bg-black text-white text-center font-bold py-3.5 rounded-xl transition-colors text-sm"
                >
                  Ask on AMAConnect
                </Link>
              </div>

              {/* Widget 2: App Store and Play Store Buttons Container */}
              <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-sm border border-gray-100 flex flex-col">
                <h3 className="text-lg font-bold text-[#2D2219] mb-2 leading-tight px-1">
                  Download AMAConnect App
                </h3>
                <p className="text-gray-600 text-xs mb-6 leading-relaxed px-1">
                  Access secure legal consultations, securely consult with immigration lawyers, and track your case on your mobile device.
                </p>
                
                <div className="flex flex-col gap-3 w-full">
                  {/* Google Play Store */}
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get it on Google Play"
                    className="flex items-center justify-center gap-3 bg-[#01875f] hover:bg-[#00704e] text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                      <path d="M3.25 1.55a1.73 1.73 0 0 0-.47 1.22v18.46a1.73 1.73 0 0 0 .47 1.22l.06.06L13.88 12v-.15L3.31 1.5z" fill="#00F0FF" />
                      <path d="M17.41 15.58L13.88 12v-.15L17.41 8.3l.08.05 4.17 2.37c1.19.67 1.19 1.78 0 2.46l-4.17 2.37-.08.03z" fill="#FFC700" />
                      <path d="M17.49 15.53L13.88 11.92L3.25 22.45a1.44 1.44 0 0 0 1.83.06l12.41-7.07" fill="#FF003F" />
                      <path d="M17.49 8.35L5.08 1.28A1.44 1.44 0 0 0 3.25 1.34L13.88 11.93l3.61-3.58" fill="#00E676" />
                    </svg>
                    <div className="text-left leading-none">
                      <span className="text-[8px] text-white/80 block font-medium uppercase tracking-wider mb-0.5">GET IT ON</span>
                      <span className="font-bold text-xs block">Google Play</span>
                    </div>
                  </a>

                  {/* Apple App Store */}
                  <a 
                    href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download on the App Store"
                    className="flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-current">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
                    </svg>
                    <div className="text-left leading-none">
                      <span className="text-[8px] text-white/80 block font-medium uppercase tracking-wider mb-0.5">DOWNLOAD ON THE</span>
                      <span className="font-bold text-xs block">App Store</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
