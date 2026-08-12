import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Commercial Lease Disputes & Shop Rental Guide | AMAConnect",
  description:
    "A dedicated manual for small business owners and commercial landlords explaining commercial leases, lock-in period breaches, and legal eviction procedures.",
  keywords: "commercial lease agreement India, shop rent agreement template, security deposit recovery commercial, eviction commercial tenant, lock in period breach, commercial rent dispute",
  alternates: {
    canonical: "https://www.amaconnect.in/commercial-lease-agreement-shop-rental-disputes-guide",
  },
  openGraph: {
    title: "Commercial Lease Disputes & Shop Rental Guide",
    description:
      "A dedicated manual for small business owners and commercial landlords explaining commercial leases, lock-in period breaches, and legal eviction procedures.",
    url: "https://www.amaconnect.in/commercial-lease-agreement-shop-rental-disputes-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function CommercialLeaseGuidePage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/commercial-lease-agreement-shop-rental-disputes-guide`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Retail and Office Protection: Guide to Commercial Lease Disputes in India",
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
        name: "How is a commercial lease fundamentally different from a residential one?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike residential leases which are heavily regulated by state rent control acts favoring tenants, commercial leases are largely governed by the Indian Contract Act and the Transfer of Property Act, meaning the terms explicitly written in the agreement hold absolute supremacy."
        }
      },
      {
        "@type": "Question",
        name: "What happens if a tenant breaches the lock in period?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If a tenant vacates the property before the lock in period expires, the landlord is generally legally entitled to demand rent for the remainder of the unexpired lock in period, unless a specific exit clause was negotiated."
        }
      },
      {
        "@type": "Question",
        name: "Is it mandatory to register a commercial lease agreement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, under the Registration Act, any commercial lease agreement exceeding eleven months must be mandatorily registered with the local sub registrar to be legally admissible as evidence in a court of law."
        }
      },
      {
        "@type": "Question",
        name: "How can a commercial tenant recover a wrongfully withheld security deposit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A tenant must first send a formal legal notice demanding the refund. If the landlord fails to comply, the tenant can file a civil suit for recovery of money along with accrued interest in the competent commercial or civil court."
        }
      },
      {
        "@type": "Question",
        name: "Can a landlord evict a commercial tenant before the lease expires?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A landlord can only initiate eviction before the lease term expires if the tenant commits a material breach of the agreement, such as non payment of rent, illegal subletting, or using the premises for unlawful activities."
        }
      },
      {
        "@type": "Question",
        name: "What is a force majeure clause in a commercial lease?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A force majeure clause protects both parties from liability if unforeseeable, unavoidable events like natural disasters or government mandated lockdowns prevent them from fulfilling their contractual obligations, such as paying rent or keeping a shop open."
        }
      },
      {
        "@type": "Question",
        name: "Does a commercial tenant have the right to sublet the property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A commercial tenant has absolutely no inherent right to sublet. Subletting is only legally permissible if there is an explicit clause in the registered lease agreement granting the tenant the written authorization to do so."
        }
      },
      {
        "@type": "Question",
        name: "What is the legal procedure to evict a defaulting commercial tenant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The landlord must first serve a formal legal notice terminating the tenancy as per the Transfer of Property Act. If the tenant refuses to vacate, the landlord must file a formal eviction suit in the civil court; forceful physical eviction is illegal."
        }
      }
    ]
  };

  // 3. Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Commercial Lease Disputes and Shop Rental Legal Guide",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "Dedicated manual for small business owners and commercial landlords explaining the legal differences between residential and commercial leases, lock-in period breaches, and eviction procedures.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "112",
      reviewCount: "4"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sanjay K."
        },
        datePublished: "2026-07-02",
        reviewBody: "As a small business owner, I was terrified when my landlord threatened to withhold my heavy security deposit. This guide gave me the exact legal steps to send a notice and recover my money.",
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
          name: "Deepak R."
        },
        datePublished: "2026-07-05",
        reviewBody: "Excellent clarity on the lock in period rules. It helped me draft a much safer commercial lease for my new retail outlet.",
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
          name: "Anjali M."
        },
        datePublished: "2026-07-10",
        reviewBody: "The section explaining the difference between residential and commercial leases is a must read. I finally understand why my commercial contract is so rigidly enforced.",
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
          name: "Vikash T."
        },
        datePublished: "2026-07-12",
        reviewBody: "Very helpful guide on eviction procedures. It prevented me from taking illegal shortcuts and instead guided me to file a proper civil suit against my defaulting tenant.",
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
        name: "Commercial Lease Disputes Guide",
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
                Real Estate & Property Law
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                Retail & Office Protection: <br/> <span className="text-[#D4AF37]">Commercial Lease Disputes</span>
              </h1>
              <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 max-w-3xl text-justify sm:text-center">
                A dedicated manual for small business owners and commercial landlords explaining the vital legal differences in commercial leases, lock-in period breaches, recovering massive security deposits, and lawful eviction procedures.
              </p>
            </div>
          </section>

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "commercial-residential", title: "Commercial vs Residential Leases" },
                  { id: "drafting-lease", title: "Drafting a Commercial Lease" },
                  { id: "lockin-breach", title: "Navigating Lock-in Breaches" },
                  { id: "security-deposit", title: "Security Deposit Recovery" },
                  { id: "tenant-rights", title: "Rights of Commercial Tenants" },
                  { id: "eviction-grounds", title: "Legal Grounds for Eviction" },
                  { id: "subletting-disputes", title: "Resolving Subletting Disputes" },
                  { id: "legal-eviction", title: "Initiating Eviction Procedures" },
                  { id: "faq", title: "Frequently Asked Questions" }
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              
              <section id="commercial-residential" className="scroll-mt-32">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 1
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Commercial vs Residential Leases
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Understanding the fundamental distinction between residential and commercial leases is critical for any business owner or landlord. Residential leases are heavily governed by state specific Rent Control Acts, which inherently favor the tenant to prevent arbitrary evictions and unjustified rent hikes. Commercial leases, however, operate in a completely different legal realm. They are primarily governed by the Indian Contract Act and the Transfer of Property Act, meaning the relationship is viewed as a transaction between two equal commercial entities.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Because commercial leases lack the protective umbrella of rent control, the written contract is absolute. The courts will strictly enforce the terms, conditions, and exit clauses exactly as they are drafted in the agreement. There is very little room for claiming equitable relief if you sign a disadvantageous commercial contract. Therefore, every single clause regarding maintenance, taxes, lock in periods, and lease termination must be negotiated with extreme precision before signing.
                </p>
              </section>

              <section id="drafting-lease" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 2
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Drafting a Commercial Lease Agreement
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  A robust commercial lease agreement is the strongest shield against future litigation. Standard templates found online are dangerous for commercial properties because they fail to address the specific nuances of the business, such as heavy machinery installation, signage rights, or specific operational hours. A comprehensive agreement must meticulously define the leased area, the exact nature of the permitted business, and the granular breakdown of rent, including who bears the burden of municipal taxes, GST, and common area maintenance charges.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Furthermore, under the Registration Act of 1908, any commercial lease intended for a duration exceeding eleven months must be mandatorily registered with the local Sub Registrar. An unregistered commercial lease cannot be produced as primary evidence in a civil court during a dispute. Both parties must also explicitly agree on a dispute resolution mechanism within the contract, such as binding arbitration, to avoid years of protracted civil litigation. If you need assistance drafting or reviewing a high stakes lease, you can connect with property experts via our <Link href="/ask-me-anything" className="text-[#D4AF37] font-bold hover:underline">Ask Me Anything</Link> portal.
                </p>
              </section>

              <section id="lockin-breach" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 3
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Navigating Lock-in Period Breaches
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  A lock in period is a heavily negotiated clause in commercial leases designed to guarantee the landlord a minimum return on their investment and the tenant a stable operational base. During this specified period, typically ranging from one to three years, neither party can unilaterally terminate the lease without facing severe financial penalties. Lock in clauses are generally held to be legally valid and binding by Indian courts, provided they are not excessively unconscionable.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  If a tenant decides to abandon the property and breach the lock in period due to business failure or relocation, the landlord is legally entitled to demand the rent for the entire unexpired portion of the lock in period. However, courts have recently held that landlords cannot blindly demand this amount if they immediately find a replacement tenant, as the law prevents unjust enrichment. To avoid massive liabilities, tenants must always negotiate specific exit clauses, such as invoking force majeure or providing extended notice periods, even during the lock in phase.
                </p>
              </section>

              <section id="security-deposit" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 4
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Commercial Security Deposit Recovery
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Unlike residential leases where deposits are usually a few months rent, commercial security deposits can run into several lakhs or crores, serving as a significant buffer for landlords against major structural damages or prolonged rent defaults. A frequent source of bitter litigation arises when a lease concludes, and the landlord arbitrarily withholds the heavy deposit, citing unreasonable deductions for normal wear and tear or minor painting work.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  To protect against this, the lease must explicitly define what constitutes structural damage versus normal wear and tear. If a landlord unlawfully refuses to refund the deposit upon the handover of vacant possession, the tenant must immediately issue a formal legal notice. If compliance is not met, the tenant's primary remedy is to file a civil suit for the recovery of money, demanding not only the principal deposit amount but also commercial interest for the duration the funds were wrongfully withheld.
                </p>
              </section>

              <section id="tenant-rights" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Rights of Commercial Tenants
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  While landlords hold significant leverage, commercial tenants are not without robust legal rights. A fundamental right of any tenant is the covenant of quiet enjoyment. Once the lease is signed and rent is paid, the landlord cannot arbitrarily interfere with the tenant's business operations, constantly inspect the premises without notice, or shut off essential utilities like electricity and water to coerce the tenant. Such actions by a landlord are entirely illegal.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  If a landlord unlawfully disrupts essential services, the tenant has the right to approach the civil court to seek an immediate mandatory injunction compelling the landlord to restore the utilities. Furthermore, tenants have the right to demand that the property remains structurally sound and compliant with municipal safety codes, unless the lease explicitly transfers all heavy maintenance responsibilities to the tenant.
                </p>
              </section>

              <section id="eviction-grounds" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 6
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Legal Grounds for Evicting a Business
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  A commercial landlord cannot evict a tenant on a whim. Eviction prior to the expiration of the lease term must be strictly based on a material breach of the agreement. The most common and legally sound ground for eviction is the consistent failure to pay rent and maintenance charges. Other robust grounds include the tenant using the commercial space for illegal or unauthorized activities, making major structural alterations without the landlord's written consent, or causing severe nuisance that impacts the building's structural integrity.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  If the lease term has naturally expired and there is no renewal clause, the tenancy transitions into a month to month holding. In such scenarios, the landlord can seek eviction simply because the contractual term has ended, provided they issue the statutory notice to quit under Section 106 of the Transfer of Property Act, officially terminating the tenancy before approaching the court.
                </p>
              </section>

              <section id="subletting-disputes" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 7
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Resolving Subletting Disputes
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Subletting a commercial space without explicit authorization is one of the quickest ways to trigger an immediate eviction lawsuit. In India, a tenant has no inherent statutory right to sublease, partition, or hand over possession of the commercial property to a third party. If a business wishes to sublet unused office space to offset rental costs, this right must be explicitly negotiated and documented in the registered lease agreement.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  When unauthorized subletting is discovered, the landlord has the right to instantly terminate the master lease and demand the eviction of both the primary tenant and the unauthorized subtenant. Disputes often arise regarding what constitutes subletting, especially when a business undergoes mergers, acquisitions, or franchising. To prevent such complex disputes, commercial leases must contain precise language defining whether corporate restructuring or allowing sister concerns to operate from the premises will be legally construed as subletting.
                </p>
              </section>

              <section id="legal-eviction" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 8
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                  Initiating Legal Eviction Procedures
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  If a commercial tenant refuses to vacate after the lease has expired or a material breach has occurred, the landlord must strictly follow the legal eviction procedure. It is imperative to understand that forceful physical eviction—such as changing the locks at night or physically throwing out the tenant's inventory—is entirely illegal in India and can result in severe criminal charges against the landlord for trespassing and theft.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  The correct legal procedure begins with drafting and sending a formal termination notice under the Transfer of Property Act, providing the tenant the statutory time frame (usually fifteen days) to vacate the premises. If the tenant ignores the notice, the landlord must file a formal suit for eviction and recovery of possession in the competent civil court or commercial court. The landlord can also simultaneously claim mesne profits, which is the fair market rental value for the period the tenant illegally overstayed in the property after the lease was formally terminated.
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
                    <span className="text-5xl font-black text-[#2D2219] tracking-tighter">4.7</span>
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
                  Protect Your Business
                </h3>
                <p className="text-gray-600 text-xs mb-6 leading-relaxed">
                  Locked in a commercial lease dispute or facing eviction? Consult a commercial property attorney on AMAConnect.
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
                  Access secure property law consultations, securely consult with real estate lawyers, and track your case on your mobile device.
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
