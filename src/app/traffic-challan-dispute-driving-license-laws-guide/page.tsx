import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contest Traffic E-Challans & License Laws",
  description:
    "A helpful guide explaining how traffic e-challans are generated, the legal grounds to contest wrongful virtual challans, the Virtual Court system, and driving license rules.",
  keywords: "check e challan online India, contest traffic challan, driving license renewal rules, new traffic rules fines, virtual court challan dispute, motor vehicles act rules",
  alternates: {
    canonical: "https://www.amaconnect.in/traffic-challan-dispute-driving-license-laws-guide",
  },
  openGraph: {
    title: "Contest Traffic E-Challans & License Laws",
    description:
      "A helpful guide explaining how traffic e-challans are generated, the legal grounds to contest wrongful virtual challans, the Virtual Court system, and driving license rules.",
    url: "https://www.amaconnect.in/traffic-challan-dispute-driving-license-laws-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function TrafficChallanGuidePage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/traffic-challan-dispute-driving-license-laws-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Challan Help: Contest Traffic E-Challans and Know Driving License Laws",
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
        name: "How can I check if I have a pending traffic e-challan in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can check for pending e-challans by visiting the official Parivahan e-Challan web portal or through the mParivahan mobile app. You will need to enter your vehicle registration number, chassis number, or driving license number to view the details."
        }
      },
      {
        "@type": "Question",
        name: "What should I do if I receive an e-challan by mistake?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you receive a wrongful e-challan due to camera errors, cloned number plates, or faulty algorithms, you should immediately file an online grievance on the state traffic police portal or contest the challan through the Virtual Court system with supporting evidence."
        }
      },
      {
        "@type": "Question",
        name: "How does the Virtual Court system work for traffic challans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Virtual Courts allow you to view your traffic offense online, choose to plead guilty and pay the fine electronically, or contest the charge. If contested, the matter is transferred to a regular physical traffic court for a formal hearing."
        }
      },
      {
        "@type": "Question",
        name: "What happens if I don't pay a traffic challan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unpaid challans are escalated to regular courts. The court may issue summons, and failing to appear can lead to a non bailable warrant. Additionally, pending challans can prevent you from renewing your vehicle registration, transferring ownership, or renewing your driving license."
        }
      },
      {
        "@type": "Question",
        name: "What are the rules for renewing an expired driving license?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A driving license can be renewed from one year prior to its expiry date up to one year after. If it has been expired for more than a year, you must undergo the driving test again. Renewals require a medical certificate for applicants above forty years of age."
        }
      },
      {
        "@type": "Question",
        name: "Can my driving license be suspended for a first time offense?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, under the amended Motor Vehicles Act, severe first time offenses like drunken driving, dangerous driving, jumping red lights, or using a mobile phone while driving can result in immediate suspension of the driving license for three months."
        }
      },
      {
        "@type": "Question",
        name: "Are traffic police authorized to seize my vehicle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traffic police can seize a vehicle only under specific circumstances, such as driving without a valid license, driving an unregistered vehicle, driving without insurance, or if the vehicle is involved in an accident or crime."
        }
      },
      {
        "@type": "Question",
        name: "Is it mandatory to carry physical copies of vehicle documents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, under the Information Technology Act and the amended Motor Vehicles rules, electronic forms of documents presented through the DigiLocker or mParivahan apps are legally recognized at par with the original physical certificates."
        }
      }
    ]
  };

  // 3. Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Traffic E-Challan Dispute and License Laws Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "Helpful guide explaining how traffic e-challans are generated, the legal grounds to contest wrongful virtual challans, the Virtual Court system, and driving license rules.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "135",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rohit V."
        },
        datePublished: "2026-07-02",
        reviewBody: "This guide saved me thousands of rupees. I received a wrongful challan due to a camera misreading a number plate, and the steps outlined here helped me successfully contest it in the Virtual Court.",
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
          name: "Neha M."
        },
        datePublished: "2026-07-05",
        reviewBody: "Very clear explanation of the new driving license renewal rules. Knowing I didn't need to carry physical documents anymore gave me great peace of mind.",
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
          name: "Amit S."
        },
        datePublished: "2026-07-10",
        reviewBody: "The section on license suspension was crucial. I didn't realize that jumping a red light could lead to an automatic three month suspension under the amended Act.",
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
          name: "Pooja C."
        },
        datePublished: "2026-07-12",
        reviewBody: "An excellent resource for navigating the complex web of traffic laws in India. The integration of DigiLocker guidelines is highly practical and helpful.",
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
        name: "Traffic Challan Dispute Guide",
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
                Motor Vehicle Laws
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                Challan Help: Dispute E-Challans & <br/> <span className="text-[#D4AF37]">Know Driving Laws</span>
              </h1>
              <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 max-w-3xl text-justify sm:text-center">
                A helpful guide explaining how traffic e-challans are generated, the legal grounds to contest wrongful virtual challans, navigating the Virtual Court system, and vital driving license rules under the Motor Vehicles Act.
              </p>
            </div>
          </section>

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "overview-traffic", title: "Overview of Traffic Laws" },
                  { id: "echallan-generation", title: "How E-Challans are Generated" },
                  { id: "virtual-courts", title: "Virtual Courts & Payments" },
                  { id: "contest-grounds", title: "Grounds to Contest Challans" },
                  { id: "dispute-procedure", title: "Procedure to Dispute" },
                  { id: "license-renewal", title: "Driving License Renewal" },
                  { id: "license-suspension", title: "Suspension & Revocation" },
                  { id: "commercial-compliance", title: "Commercial Compliance" },
                  { id: "faq", title: "Frequently Asked Questions" }
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              
              <section id="overview-traffic" className="scroll-mt-32">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 1
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Overview of Traffic Laws and Fines
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The landscape of traffic law enforcement in India underwent a massive transformation with the comprehensive amendments to the Motor Vehicles Act. Designed to curb road fatalities and instill strict road discipline, the revised laws introduced exponentially higher financial penalties and stringent punitive measures, including immediate license suspension for grave offenses. For daily commuters and commercial drivers alike, navigating these strict regulations requires a solid understanding of both their legal obligations and their rights on the road.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Parallel to the increased penalties is the rapid digitization of traffic enforcement. The era of manual challans is swiftly being replaced by the national e-challan system, a centralized digital framework that integrates camera surveillance, traffic policing, and digital payment gateways. While this digital leap has improved transparency and reduced corruption, it has also introduced new challenges, such as algorithm errors and mistaken vehicle identities. If you are struggling with a complex traffic dispute, consulting an advocate via our <Link href="/ask-me-anything" className="text-[#D4AF37] font-bold hover:underline">Ask Me Anything</Link> portal can provide immediate clarity.
                </p>
              </section>

              <section id="echallan-generation" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 2
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  How E-Challans are Generated
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  An e-challan is an electronically generated penalty ticket issued through the government's centralized Parivahan system. The generation of these challans primarily occurs through two distinct methods. The first is via on ground enforcement, where traffic police officers use handheld electronic devices to record violations on the spot, fetching vehicle details directly from the national VAHAN database using the registration plate. The offender immediately receives an SMS notification with a link to the challan details.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The second and increasingly common method is automated camera surveillance. High resolution speed cameras, red light violation detection systems, and Automatic Number Plate Recognition cameras installed at strategic junctions continuously monitor traffic. When an algorithm detects an overspeeding vehicle or a red light jump, it captures an image of the number plate, cross references it with the database, and automatically generates an e-challan that is dispatched to the registered owner's mobile number. While highly efficient, this automated process is prone to technical glitches and misidentification.
                </p>
              </section>

              <section id="virtual-courts" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 3
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Virtual Courts and Online Payments
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  To handle the massive volume of electronically generated traffic tickets without clogging the physical judicial system, the Supreme Court of India initiated the Virtual Court project. A Virtual Court is an online forum where e-challans are directly forwarded. Citizens receive a digital summons on their mobile phones with a link to the Virtual Court portal. This system completely eliminates the need for the violator to physically travel to a court to pay a routine traffic fine.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Upon logging into the Virtual Court portal, you are presented with two primary options. You can choose to plead guilty to the offense, wherein you can immediately pay the specified fine online through integrated payment gateways, closing the matter instantly. Alternatively, if you believe the challan was issued in error, you can choose to contest the charge. Selecting this option officially registers your dispute, and the case is subsequently transferred from the digital realm to a regular physical traffic court for a formal hearing and presentation of evidence.
                </p>
              </section>

              <section id="contest-grounds" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 4
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Legal Grounds to Contest Challans
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  While the e-challan system is technologically advanced, it is not infallible. Citizens have the absolute legal right to contest a challan if they possess valid grounds. The most common ground for dispute is incorrect vehicle identification. Dust on a number plate or a slightly obscured digit can cause the optical character recognition software to generate a challan against a completely different vehicle that was not even present at the location of the alleged offense.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Other robust grounds include mechanical emergencies (such as breaking down in a no parking zone), medical emergencies that necessitated a sudden halt, or receiving a challan for a vehicle you had already legally sold, provided the transfer documentation was submitted to the Regional Transport Office prior to the offense date. The burden of proof in these disputes lies with the vehicle owner, requiring compelling evidence like GPS logs, toll receipts, or clear photographic proof that contradicts the automated camera's findings.
                </p>
              </section>

              <section id="dispute-procedure" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Procedure to Dispute a Virtual Challan
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The initial step to resolve a wrongful challan is often administrative rather than judicial. Most state traffic police departments have a dedicated online grievance portal where citizens can raise a ticket against an erroneous challan. You must provide the challan number and upload your supporting evidence. A designated traffic officer reviews these grievances and has the authority to cancel the challan directly from the database if the error is glaringly obvious, such as a photograph showing a scooter while the challan was issued to your sedan.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  If the police grievance cell rejects your application, the formal legal route is to contest the charge via the Virtual Court portal as described earlier. Once transferred to a physical traffic court, you will receive a summons to appear before a Magistrate. In court, you can present your defense, challenge the calibration of the speed cameras, or present alibi evidence. While you can represent yourself, hiring an experienced advocate can significantly improve your chances of having the challan quashed and the fines waived, especially in cases involving heavy penalties.
                </p>
              </section>

              <section id="license-renewal" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 6
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Driving License Renewal Rules
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Under the Motor Vehicles Act, possessing a valid driving license is a non negotiable prerequisite for operating a vehicle on Indian roads. The rules governing renewal are strict. You can initiate the renewal process up to one year before the expiry date and up to one year after it expires. If renewed within this grace period, the license is typically renewed without requiring a re test. However, driving with an expired license during this grace period remains a punishable offense and will invalidate your motor insurance coverage in the event of an accident.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  If a license has been expired for more than a year, the applicant is treated as a new driver and must undergo the driving competence test all over again. Furthermore, any applicant seeking renewal after reaching the age of forty must submit a registered medical practitioner's certificate confirming physical fitness, particularly regarding eyesight and reflexes. The entire renewal process, from application submission to fee payment, has now been digitized through the centralized Sarathi portal, minimizing the need for physical RTO visits.
                </p>
              </section>

              <section id="license-suspension" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 7
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  License Suspension and Revocation
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The amended Motor Vehicles Act introduced severe consequences for dangerous driving habits, moving beyond mere financial penalties to punitive actions that directly impact a driver's livelihood. Under the direction of the Supreme Court Committee on Road Safety, traffic authorities are now mandated to immediately suspend the driving license for a period of three months for specific severe offenses. These include driving under the influence of alcohol, driving at speeds excessively beyond the limit, jumping a red traffic light, carrying passengers in goods vehicles, and using a mobile phone while driving.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  A suspended license is physically confiscated or digitally blocked in the VAHAN database. Driving while your license is suspended is considered a severe criminal offense and can lead to permanent revocation of driving privileges and potential imprisonment. If you believe your license was suspended arbitrarily without a fair hearing or due process, you have the legal right to appeal the decision before the appellate authority at the Regional Transport Office or approach a high court via a writ petition to seek an immediate stay on the suspension order.
                </p>
              </section>

              <section id="commercial-compliance" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 8
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Commercial Vehicle Compliance
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Commercial vehicles, ranging from taxis and auto rickshaws to heavy transport trucks, are subject to a significantly higher degree of regulatory scrutiny compared to private vehicles. The compliance requirements are exhaustive and strictly enforced. Every commercial vehicle must carry a valid fitness certificate, a national or state specific permit, a valid pollution under control certificate, and commercial comprehensive insurance. The driver must possess a specialized commercial driving license, which requires periodic renewals and background checks.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Fines for commercial vehicle violations are astronomically high. For instance, operating a commercial vehicle without a valid permit can result in a fine of ten thousand rupees and the immediate seizure of the vehicle. Overloading a transport vehicle incurs a massive base penalty plus an additional charge per extra ton of weight. Fleet owners must be hyper vigilant regarding the legal status of their vehicles and drivers, as accumulated e-challans can lead to the blacklisting of the vehicle in the national database, completely halting their business operations until all legal dues are cleared in court.
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
                    <span className="text-5xl font-black text-[#2D2219] tracking-tighter">4.8</span>
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
                  Resolve Traffic Disputes
                </h3>
                <p className="text-gray-600 text-xs mb-6 leading-relaxed">
                  Wrongfully fined or facing license suspension? Consult a motor vehicle advocate on AMAConnect to resolve your challan.
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
                  Access secure legal consultations, securely consult with motor vehicle lawyers, and track your case on your mobile device.
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
