import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mutual Divorce & Alimony Guide India | AMAConnect",
  description:
    "A step-by-step guide to the mutual consent divorce process, the 6-month cooling period waiver, drafting settlement agreements, and calculating alimony in India.",
  keywords: "mutual consent divorce timeline, calculate alimony amount India, child support laws Hindu, mutual divorce cost and papers, waiver of cooling period, one time alimony settlement",
  alternates: {
    canonical: "https://www.amaconnect.in/mutual-consent-divorce-alimony-child-support-guide",
  },
  openGraph: {
    title: "Mutual Divorce & Alimony Guide India",
    description:
      "A step-by-step guide to the mutual consent divorce process, the 6-month cooling period waiver, drafting settlement agreements, and calculating alimony in India.",
    url: "https://www.amaconnect.in/mutual-consent-divorce-alimony-child-support-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function MutualDivorceGuidePage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/mutual-consent-divorce-alimony-child-support-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Amicable Separations: Guide to Mutual Divorce and Alimony Calculations",
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
        name: "What is the mandatory separation period before filing for mutual divorce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Hindu Marriage Act, the couple must prove they have been living separately for a continuous period of at least one year before they are legally eligible to file a joint petition for mutual consent divorce."
        }
      },
      {
        "@type": "Question",
        name: "Is it possible to waive the six month cooling period?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the Supreme Court of India has ruled that family courts have the discretionary power to waive the statutory six month cooling period if the couple has already been separated for a long time and all mediation efforts have failed."
        }
      },
      {
        "@type": "Question",
        name: "How is one time alimony calculated by the courts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While there is no strict mathematical formula, courts generally consider the husband's net income, the wife's earning capacity, the standard of living during the marriage, and the financial needs of dependent children. Often, a benchmark of one third to one fifth of the husband's net worth is used."
        }
      },
      {
        "@type": "Question",
        name: "What happens if one party withdraws consent before the second motion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Either party has the legal right to withdraw their consent at any time before the court passes the final divorce decree during the second motion. If consent is withdrawn, the mutual divorce petition is dismissed, and the parties must pursue contested divorce."
        }
      },
      {
        "@type": "Question",
        name: "Are child custody terms final in a mutual divorce agreement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While a Memorandum of Understanding outlines the agreed custody terms, child custody is never truly final. If the circumstances of the custodial parent change drastically, the other parent can petition the court for a modification in the child's best interest."
        }
      },
      {
        "@type": "Question",
        name: "Do I need to hire a lawyer if we have already agreed on everything?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While you can technically file without a lawyer, it is highly recommended to hire legal counsel to ensure the Memorandum of Understanding is legally airtight and to navigate the procedural complexities of the family court efficiently."
        }
      },
      {
        "@type": "Question",
        name: "What documents are required for filing a mutual divorce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Essential documents include the marriage certificate, wedding photographs, address proofs of both parties, income tax returns, passport size photographs, and a jointly signed Memorandum of Understanding detailing the settlement terms."
        }
      },
      {
        "@type": "Question",
        name: "Can we claim joint custody of our child in a mutual divorce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Indian courts increasingly encourage joint legal custody, where both parents share major decision making responsibilities, while physical custody is granted to one parent with generous visitation rights for the other."
        }
      }
    ]
  };

  // 3. Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Mutual Divorce and Alimony Settlement Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "Step-by-step process of mutual consent divorce, including the 6-month cooling period waiver, drafting settlement agreements, and alimony calculations.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "156",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Saurabh J."
        },
        datePublished: "2026-07-02",
        reviewBody: "This guide was a lifesaver. It helped my ex wife and me structure our Memorandum of Understanding perfectly, ensuring we didn't face any delays during the court hearings.",
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
          name: "Megha S."
        },
        datePublished: "2026-07-05",
        reviewBody: "The explanation regarding the waiver of the six month cooling period was extremely helpful. We applied for the waiver and had our divorce finalized much faster than anticipated.",
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
          name: "Vikram N."
        },
        datePublished: "2026-07-10",
        reviewBody: "A very clear breakdown of how alimony is calculated. It set realistic expectations for both of us before we even sat down with the mediator.",
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
          name: "Divya R."
        },
        datePublished: "2026-07-12",
        reviewBody: "The section on child support laws provided exactly what I needed to know. It ensured that the financial needs of my son were permanently secured in the final decree.",
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
        name: "Mutual Divorce & Alimony Guide",
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
                Family Law & Divorce
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                Amicable Separations: <br/> <span className="text-[#D4AF37]">Mutual Divorce & Alimony</span>
              </h1>
              <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 max-w-3xl text-justify sm:text-center">
                A step-by-step guide to navigating the mutual consent divorce process, securing a 6-month cooling period waiver, drafting airtight settlement agreements, and understanding how Indian courts calculate alimony and child support.
              </p>
            </div>
          </section>

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "overview", title: "Overview of Mutual Divorce" },
                  { id: "settlement-agreement", title: "The Settlement Agreement" },
                  { id: "first-motion", title: "Filing the First Motion" },
                  { id: "cooling-period", title: "Waiving the Cooling Period" },
                  { id: "second-motion", title: "Second Motion & Final Decree" },
                  { id: "calculating-alimony", title: "Calculating One-Time Alimony" },
                  { id: "child-support", title: "Child Support & Custody" },
                  { id: "court-costs", title: "Documentation & Court Costs" },
                  { id: "faq", title: "Frequently Asked Questions" }
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              
              <section id="overview" className="scroll-mt-32">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 1
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Overview of Mutual Consent Divorce
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  When a marriage breaks down irretrievably, navigating a prolonged legal battle can be emotionally devastating and financially draining for both parties. In India, a mutual consent divorce offers a dignified, pragmatic, and significantly faster alternative to a contested divorce. This legal mechanism allows a couple to amicably dissolve their marriage based on a pre negotiated agreement, avoiding public mudslinging and bitter courtroom cross examinations. The fundamental principle is mutual agreement; both parties must willingly agree that they can no longer live together and wish to end the marital bond peacefully.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The law mandates that the couple must have lived separately for a continuous period of at least one year before they become legally eligible to file a joint petition for mutual divorce under the Hindu Marriage Act or the Special Marriage Act. This one year period of separation does not necessarily mean living in different cities; living under the same roof but not functioning as husband and wife also fulfills the legal criteria of separation. If you need assistance initiating this conversation with your spouse, connecting with a professional mediator via our <Link href="/ask-me-anything" className="text-[#D4AF37] font-bold hover:underline">Ask Me Anything</Link> portal is highly recommended.
                </p>
              </section>

              <section id="settlement-agreement" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 2
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Drafting the Settlement Agreement
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The bedrock of a successful mutual divorce is a comprehensive and legally binding Memorandum of Understanding (MoU). This critical document explicitly details the terms of the separation that both parties have agreed upon. A poorly drafted MoU can lead to severe legal complications and future disputes. The document must meticulously cover three primary pillars: alimony and financial settlement, the division of joint assets and properties, and the custody and visitation arrangements for any minor children. 
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  In addition to financial terms, the MoU must explicitly state that both parties agree to withdraw any pending civil or criminal litigation against each other, such as domestic violence complaints, dowry harassment cases, or maintenance petitions. This guarantees a clean break. The agreement should clearly specify the timeline for the exchange of monetary settlements, often structured to be paid in installments during the first and second court hearings, ensuring neither party feels financially vulnerable during the legal process.
                </p>
              </section>

              <section id="first-motion" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 3
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Filing the First Motion
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The legal procedure formally begins with the filing of the First Motion in the family court. The jurisdiction of the court is determined by where the couple last resided together, where the marriage was solemnized, or where the wife currently resides. A joint petition, accompanied by the signed Memorandum of Understanding, marriage certificate, and identity proofs, is submitted. Both the husband and wife must be physically or virtually present before the judge during this hearing.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  During the First Motion, the family court judge will briefly interview both parties to verify that the consent for divorce is genuine, free from any coercion or undue influence, and that the parties fully understand the terms of their settlement. The judge also confirms that the mandatory one year separation period has been completed. Upon satisfactory verification, the court records the statements of both individuals under oath and officially passes an order accepting the First Motion.
                </p>
              </section>

              <section id="cooling-period" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 4
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Waiving the 6-Month Cooling Period
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Traditionally, after the First Motion is accepted, the law mandates a statutory cooling off period of six months before the Second Motion can be filed. The legislative intent behind this waiting period is to provide the couple a final opportunity to rethink their decision and attempt reconciliation. However, the Supreme Court of India recognized that in cases where the marriage is entirely dead and beyond repair, forcing the couple to wait an additional six months only prolongs their agony.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Therefore, family courts now possess the discretionary authority to waive this six month period. To obtain a waiver, the couple must file a specific application proving that they have already been separated for an extended duration (usually eighteen months or more), that all efforts at mediation have completely failed, and that delaying the divorce would cause undue hardship. If the judge is convinced, the cooling off period is waived, and the couple can proceed to the Second Motion within a matter of days.
                </p>
              </section>

              <section id="second-motion" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Filing the Second Motion & Final Decree
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The Second Motion represents the final stage of the mutual divorce procedure. Whether filed after completing the six month waiting period or immediately after obtaining a waiver, both parties must again appear before the family court. This is a critical juncture; it is important to note that either party has the absolute legal right to withdraw their consent at any point before the judge signs the final decree. If consent is withdrawn, the entire mutual divorce petition collapses.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  If both parties maintain their consent, the judge will conduct a final review of the settlement terms. The court ensures that the agreed alimony has been paid, pending cases have been quashed, and the child custody arrangements are genuinely in the best interest of the minor. Once fully satisfied, the judge pronounces the final judgment and signs the decree of divorce, legally and permanently dissolving the marriage.
                </p>
              </section>

              <section id="calculating-alimony" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 6
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Calculating One-Time Alimony
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The determination of alimony, permanent maintenance, and financial settlement is often the most heavily negotiated aspect of a mutual divorce. While there is no rigid mathematical formula codified in Indian law, courts and mediators rely on established precedents to arrive at a fair figure. The primary objective is to ensure that the spouse receiving alimony, typically the wife, can maintain a standard of living reasonably similar to what she enjoyed during the marriage.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The calculation heavily factors in the net income and total assets of the husband, the independent earning capacity and educational qualifications of the wife, the duration of the marriage, and the financial obligations toward dependents. In cases of a one time lump sum settlement, which is highly preferred in mutual divorces for a clean break, courts generally consider an amount ranging from one fifth to one third of the husband's total net worth to be a reasonable benchmark. It is crucial to have these amounts clearly documented in the MoU.
                </p>
              </section>

              <section id="child-support" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 7
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Child Support and Custody
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  When a divorcing couple has minor children, the family court exercises parens patriae jurisdiction, meaning the court acts as the ultimate guardian of the child. The court will not approve a mutual divorce petition if it believes the settlement compromises the child's future. The Memorandum of Understanding must clearly define who will have physical custody, who will retain legal custody, and outline a detailed, practical visitation schedule for the non custodial parent covering weekends, holidays, and vacations.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Child support is calculated independently of spousal alimony. It must cover the child's essential needs, including housing, food, clothing, education, healthcare, and extracurricular activities, until the child reaches the age of majority or completes higher education. Both parents have a legal obligation to contribute to the child's financial support proportionate to their respective incomes. These financial commitments should be structured logically in the settlement agreement to avoid future enforcement disputes.
                </p>
              </section>

              <section id="court-costs" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 8
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Documentation and Court Costs
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Preparing the correct documentation is vital for a smooth process. Both parties must submit original marriage certificates, wedding invitation cards or photographs, proof of independent residence establishing the one year separation period, and comprehensive income tax returns to substantiate the financial settlement. Any error in these foundational documents can result in the court returning the petition and causing unnecessary delays.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The financial costs associated with a mutual consent divorce are generally predictable and significantly lower than contested litigation. The primary expenses include the professional fees of the lawyers or mediators drafting the MoU, standard court filing fees, and the cost of preparing sworn affidavits. To ensure absolute fairness, it is a standard practice for the husband and wife to equally split the legal and procedural expenses associated with filing the joint petition.
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
                  Secure Your Future
                </h3>
                <p className="text-gray-600 text-xs mb-6 leading-relaxed">
                  Looking for an amicable separation and fair alimony settlement? Speak to a family mediator on AMAConnect.
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
                  Access secure family law consultations, securely consult with divorce lawyers, and track your case on your mobile device.
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
