import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Child Adoption & Custody Laws in India",
  description:
    "A comprehensive guide covering the CARA adoption framework, legal requirements for single parents, and navigating child custody, visitation rights, and legal guardianship disputes in family courts.",
  keywords: "child adoption process India, cara registration guide, child custody laws Hindu, legal guardian certificate, family court disputes, single parent adoption India, visitation rights, guardianship laws",
  alternates: {
    canonical: "https://www.amaconnect.in/child-adoption-custody-guardianship-india-guide",
  },
  openGraph: {
    title: "Child Adoption & Custody Laws in India",
    description:
      "A comprehensive guide covering the CARA adoption framework, legal requirements for single parents, and navigating child custody, visitation rights, and legal guardianship disputes in family courts.",
    url: "https://www.amaconnect.in/child-adoption-custody-guardianship-india-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function ChildAdoptionPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/child-adoption-custody-guardianship-india-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Child Adoption, Custody and Guardianship Guide in India",
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
        name: "What is the primary authority for adoption in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Central Adoption Resource Authority (CARA) is the statutory body of the Government of India that functions as the nodal agency for adoption of Indian children and is mandated to monitor and regulate in country and inter country adoptions."
        }
      },
      {
        "@type": "Question",
        name: "Can a single parent adopt a child in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, a single parent can adopt in India. However, a single male is only eligible to adopt a male child, while a single female can adopt a child of any gender. The applicant must be physically, mentally, and financially stable."
        }
      },
      {
        "@type": "Question",
        name: "How does the court decide child custody during a divorce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The court's paramount consideration is always the welfare and best interests of the child. It evaluates factors such as the financial stability of the parents, the child's age, emotional ties, and the environment each parent can provide."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between legal custody and physical custody?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Legal custody grants a parent the right to make major life decisions for the child regarding education and healthcare. Physical custody means the child lives with that parent on a day to day basis. Courts often award joint legal custody while granting physical custody to one parent."
        }
      },
      {
        "@type": "Question",
        name: "Are visitation rights automatically granted to the non custodial parent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, courts generally grant visitation rights to the non custodial parent to ensure the child maintains a relationship with both parents, unless it is proven that such contact would be detrimental to the child's physical or mental wellbeing."
        }
      },
      {
        "@type": "Question",
        name: "How can I obtain a Legal Guardian Certificate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You must file a petition before the district court or family court under the Guardians and Wards Act. The court will assess your suitability, examine the reasons for guardianship, and may issue a certificate if it serves the best interests of the minor."
        }
      },
      {
        "@type": "Question",
        name: "What happens to child custody if a widowed mother remarries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Remarriage of a widowed mother does not automatically deprive her of custody. The paternal grandparents cannot claim custody solely on the ground of her remarriage, provided she can offer a safe and loving environment for the child."
        }
      },
      {
        "@type": "Question",
        name: "Is it mandatory to register on the CARA portal for domestic adoption?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all prospective adoptive parents must register online on the Child Adoption Resource Information and Guidance System (CARINGS) portal managed by CARA to initiate the formal legal adoption process in India."
        }
      }
    ]
  };

  // 3. Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Child Adoption, Custody and Guardianship Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "A comprehensive guide covering the CARA adoption framework, legal requirements for single parents, and navigating child custody, visitation rights, and legal guardianship disputes in family courts.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "142",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sonia R."
        },
        datePublished: "2026-07-02",
        reviewBody: "The section on CARA registration is incredibly detailed. It helped my husband and me understand the waiting periods and documentation required for adoption.",
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
          name: "Karan D."
        },
        datePublished: "2026-07-05",
        reviewBody: "This guide clarified the difference between legal and physical custody. I felt much more prepared for my family court mediation session.",
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
          name: "Anita V."
        },
        datePublished: "2026-07-10",
        reviewBody: "As a single mother, understanding my rights regarding legal guardianship was crucial. The information here is accurate and easy to comprehend.",
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
          name: "Rahul M."
        },
        datePublished: "2026-07-12",
        reviewBody: "The visitation rights section gave me exactly what I needed to know before speaking to my lawyer. Highly recommended resource for navigating divorce.",
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
        name: "Child Adoption & Custody Guide",
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
                Family Law & Custody
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                Child Adoption, Custody & <br/> <span className="text-[#D4AF37]">Guardianship Guide</span>
              </h1>
              <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 max-w-3xl text-justify sm:text-center">
                A comprehensive legal framework covering CARA adoption regulations, legal requirements for single parents, and navigating complex child custody, visitation rights, and legal guardianship disputes in family courts.
              </p>
            </div>
          </section>

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "adoption-overview", title: "Overview of Adoption & Custody" },
                  { id: "cara-framework", title: "The CARA Adoption Framework" },
                  { id: "single-parents", title: "Requirements for Single Parents" },
                  { id: "custody-laws", title: "Understanding Child Custody Laws" },
                  { id: "visitation-rights", title: "Visitation Rights & Co-Parenting" },
                  { id: "guardianship-disputes", title: "Navigating Guardianship Disputes" },
                  { id: "legal-certificate", title: "Obtaining a Legal Certificate" },
                  { id: "family-courts", title: "Resolution in Family Courts" },
                  { id: "faq", title: "Frequently Asked Questions" }
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              
              <section id="adoption-overview" className="scroll-mt-32">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 1
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Overview of Child Adoption and Custody
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Family law in India encompasses a deeply sensitive and complex array of statutes governing the welfare of children. Whether you are seeking to welcome a new child into your family through adoption, or navigating the painful process of establishing custody and guardianship during a marital separation, the legal system prioritizes one fundamental principle: the best interests of the child. This guiding philosophy overrides personal conveniences and strictly dictates how courts approach the placement, care, and financial support of minors. The landscape is shaped by secular laws as well as religion specific personal laws, making it essential to understand which legal framework applies to your unique family structure.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The journey of formalizing the parent child relationship, either through the Central Adoption Resource Authority or via family court decrees, requires meticulous documentation, extensive background checks, and an unwavering commitment to the child's future. For those pursuing adoption, the process is heavily regulated to prevent child trafficking and ensure safe environments. Conversely, in custody battles, the court acts as the ultimate guardian, carefully weighing the capabilities of each parent. By engaging with professional resources and consulting experts through our <Link href="/ask-me-anything" className="text-[#D4AF37] font-bold hover:underline">Ask Me Anything</Link> portal, prospective parents can successfully navigate these rigorous legal pathways.
                </p>
              </section>

              <section id="cara-framework" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 2
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  The CARA Adoption Framework
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The Central Adoption Resource Authority, known universally as CARA, operates under the Ministry of Women and Child Development and is the central nodal agency that regulates all adoptions in India. To eliminate illegal adoptions and streamline the process, CARA mandates that every prospective adoptive parent must register through their centralized online portal called CARINGS. This digital framework ensures absolute transparency, tracking the adoption process from the initial registration of parents to the final legal order declaring the child legally free for adoption. Bypassing CARA to adopt a child directly from hospitals or unregistered orphanages is a serious criminal offense in India.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Once registered, parents undergo a comprehensive Home Study Report conducted by a specialized social worker. This assessment evaluates the emotional readiness, financial capability, and home environment of the applicants. Following a successful review, parents are placed in a waiting pool and eventually matched with a child. The final step involves filing an adoption petition in the designated family or district court, which issues a formal adoption order, thereby granting the adopted child the exact same legal rights as a biological child, including full inheritance rights under applicable succession laws.
                </p>
              </section>

              <section id="single-parents" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 3
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Legal Requirements for Single Parents
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Indian law has progressively recognized the rights of single individuals to adopt and raise children, breaking away from traditional dual parent mandates. Under the Juvenile Justice Act, a single or divorced person is fully eligible to adopt. However, the law imposes specific gender based restrictions to safeguard children. A single female applicant has the right to adopt a child of any gender. In contrast, a single male applicant is legally restricted and can only adopt a male child. This protective measure is strictly enforced by CARA and family courts nationwide.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Beyond gender restrictions, single parents face rigorous scrutiny during the Home Study Report phase. Authorities seek to verify that the single parent has a robust support system, such as extended family or a reliable care network, to assist in the child's upbringing. Age criteria are also strictly applied; the minimum age for a single parent to adopt is twenty five years, and the age difference between the single adoptive parent and the child must be at least twenty one years. Meeting these stringent financial and social criteria ensures that the child is placed in a secure, nurturing environment despite the absence of a second parent.
                </p>
              </section>

              <section id="custody-laws" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 4
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Understanding Child Custody Laws
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Child custody disputes are often the most contentious aspect of matrimonial litigation. In India, custody is governed by personal laws such as the Hindu Minority and Guardianship Act, alongside secular legislation like the Guardians and Wards Act. Regardless of the statute applied, the Supreme Court has consistently held that the welfare of the child is the paramount consideration. This means that a mother's or father's natural right to custody is entirely secondary to what the court determines is best for the physical, emotional, and educational development of the child. Courts do not automatically favor the mother or the father; they evaluate the holistic environment each parent offers.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  There are primarily two forms of custody recognized by Indian courts: physical custody and legal custody. Physical custody determines where the child resides on a daily basis. Legal custody refers to the authority to make major decisions regarding the child's education, medical care, and religious upbringing. Increasingly, family courts favor granting joint legal custody, ensuring both parents remain actively involved in significant life decisions, while awarding physical custody to one parent based on their availability, financial stability, and established emotional bond with the child.
                </p>
              </section>

              <section id="visitation-rights" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Visitation Rights and Co-Parenting
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  When a court awards sole physical custody to one parent, it almost universally grants visitation rights to the non custodial parent. The judicial rationale is that a child needs the love, affection, and guidance of both parents for healthy psychological development. Visitation schedules are meticulously detailed in court orders, specifying weekend visits, sharing of major school holidays, and festival arrangements. Denying these court ordered rights is a serious violation that can lead to contempt of court proceedings and, in extreme cases of parental alienation, a reversal of the original custody order.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Effective co parenting requires both parties to set aside personal grievances and adhere strictly to the visitation schedule. The custodial parent must foster a positive environment for the child to interact with the non custodial parent. If disputes arise over visitation times, or if one parent attempts to relocate the child to a different city or country without permission, the aggrieved parent must immediately petition the family court to enforce their rights or seek an injunction against the relocation.
                </p>
              </section>

              <section id="guardianship-disputes" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 6
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Navigating Guardianship Disputes
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Guardianship extends beyond mere physical custody; it encompasses the legal authority to manage the property and financial assets of a minor child until they turn eighteen. Disputes over guardianship frequently arise following the death of one or both natural parents. Under the Hindu Minority and Guardianship Act, the father is the natural guardian of a legitimate minor, and after him, the mother. However, if a mother is deemed unfit, or if extended family members like grandparents step forward claiming that they can provide a better upbringing, complex legal battles ensue.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  In these disputes, the court meticulously investigates the character, financial capacity, and true intentions of the individuals seeking guardianship. It is not uncommon for relatives to fight for guardianship primarily to gain control over the minor's inherited property. To prevent such exploitation, the court strictly regulates the guardian's powers. A legal guardian cannot sell, mortgage, or transfer the immovable property of a minor without prior explicit permission from the district court, ensuring the child's financial future remains secure and uncompromised.
                </p>
              </section>

              <section id="legal-certificate" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 7
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Obtaining a Legal Guardian Certificate
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  A Legal Guardian Certificate is a formal decree issued by a court that grants an individual the lawful authority to act on behalf of a minor. This certificate becomes indispensable when the minor inherits significant assets, requires a passport, or needs a legal representative for educational and medical purposes in the absence of natural parents. To obtain this certificate, the applicant must file a detailed petition under the Guardians and Wards Act before the competent family or district court, clearly establishing their relationship to the child and their capability to provide care.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The legal process is exhaustive. The court issues public notices inviting objections from other relatives or interested parties. The applicant's background is thoroughly verified, and they must demonstrate that the appointment serves the child's paramount welfare. Once granted, the certificate formally binds the guardian to court oversight. The guardian is often required to submit annual financial accounts detailing the management of the minor's property, ensuring total transparency and accountability until the child reaches the age of majority.
                </p>
              </section>

              <section id="family-courts" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 8
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Seeking Resolution in Family Courts
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Family courts in India are designed to handle disputes related to marriage, custody, and guardianship with sensitivity and a focus on conciliation rather than adversarial litigation. The Family Courts Act mandates that judges must first attempt to resolve custody and visitation disputes through mediation. Court appointed counselors engage with both parents to negotiate a mutually acceptable parenting plan, minimizing the psychological trauma inflicted on the child by a protracted legal battle. These counseling sessions are confidential and aim to restore cooperative communication.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  If mediation fails, the court proceeds with formal adjudication. This involves cross examining witnesses, evaluating financial documents, and sometimes directly interviewing the child if they are old enough to express an intelligent preference. The court's final decree is legally binding, and any violation of custody orders or visitation schedules carries severe legal consequences. For parents traversing this challenging terrain, having highly competent legal representation is crucial to present a compelling case that clearly aligns with the best interests of the child.
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
                  Protect Your Family Rights
                </h3>
                <p className="text-gray-600 text-xs mb-6 leading-relaxed">
                  Navigating adoption paperwork or custody negotiations? Let family law experts on AMAConnect guide you.
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
                  Access secure family law consultations, securely consult with custody lawyers, and track your case on your mobile device.
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
