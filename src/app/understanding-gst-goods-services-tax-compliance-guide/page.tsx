import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import GstHero from "@/components/gst-compliance/GstHero";
import GstSection1 from "@/components/gst-compliance/GstSection1";
import GstSection2 from "@/components/gst-compliance/GstSection2";
import GstSection3 from "@/components/gst-compliance/GstSection3";
import GstSection4 from "@/components/gst-compliance/GstSection4";
import GstSection5 from "@/components/gst-compliance/GstSection5";
import GstSection6 from "@/components/gst-compliance/GstSection6";
import GstSection7 from "@/components/gst-compliance/GstSection7";
import GstSection8 from "@/components/gst-compliance/GstSection8";
import GstFAQ from "@/components/gst-compliance/GstFAQ";
import GstSidebar from "@/components/gst-compliance/GstSidebar";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Understanding GST: A Practical Legal Guide to Tax Compliance and Disputes in India | AMAConnect",
  description:
    "Master GST compliance in India. Learn about registration mandates, claiming Input Tax Credit (ITC), dealing with Section 17(5) blocked credits, responding to show cause notices (SCN), and filing online appeals.",
  keywords:
    "gst registration compliance India, input tax credit itc disputes, gst audit show cause notice reply, gst appeal online process",
  alternates: {
    canonical: "https://www.amaconnect.in/understanding-gst-goods-services-tax-compliance-guide",
  },
  openGraph: {
    title: "Understanding GST: A Practical Legal Guide to Tax Compliance and Disputes in India",
    description:
      "Master GST compliance in India. Learn about registration mandates, claiming Input Tax Credit (ITC), dealing with Section 17(5) blocked credits, responding to show cause notices (SCN), and filing online appeals.",
    url: "https://www.amaconnect.in/understanding-gst-goods-services-tax-compliance-guide",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function GstCompliancePage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/understanding-gst-goods-services-tax-compliance-guide`;

  // Define static reviews data
  const staticReviews = [
    {
      author: "Rajesh K.",
      rating: "5",
      text: "This guide on GST audits and Section 65 was a lifesaver. I prepared my reconciliations before the audit, resulting in zero adverse findings.",
      avatar: "RK"
    },
    {
      author: "Meera S.",
      rating: "5",
      text: "Filing a reply to a DRC-01 notice was simple using this guide. The checklist on Form DRC-06 helped me organize invoices and clear the mismatch.",
      avatar: "MS"
    },
    {
      author: "Amit G.",
      rating: "5",
      text: "Highly recommend the explanation on Section 17(5). It saved us from claiming ineligible credit on works contract services, avoiding future interest and penalty charges.",
      avatar: "AG"
    },
    {
      author: "Sunita D.",
      rating: "5",
      text: "Navigating the online appellate tribunal roadmap was seamless. The step-by-step pre-deposit requirements and Section 107 explanation were extremely precise.",
      avatar: "SD"
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
    headline: "Understanding GST: A Practical Legal Guide to Tax Compliance and Disputes in India",
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
    datePublished: new Date("2026-07-31").toISOString(),
    dateModified: new Date("2026-07-31").toISOString(),
  };

  // 2. FAQ Schema (exactly 8 FAQs matching the FAQ component)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is mandatorily required to register for GST in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 22 and 24 of the CGST Act, 2017, businesses supplying goods with an aggregate annual turnover exceeding forty lakh rupees (twenty lakh rupees for services) must register. Registration is mandatory regardless of turnover for inter-state suppliers, e-commerce operators, and reverse charge taxpayers."
        }
      },
      {
        "@type": "Question",
        name: "What are the key eligibility conditions for claiming Input Tax Credit (ITC)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 16, a registered taxpayer can claim Input Tax Credit if they hold a valid tax invoice, have received the goods or services, the supplier has deposited the tax with the government, and the taxpayer has filed returns in Form GSTR-3B."
        }
      },
      {
        "@type": "Question",
        name: "What is a blocked credit under Section 17(5) of the CGST Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Blocked credits under Section 17(5) are specific business purchases ineligible for tax credit. Examples include motor vehicles for passenger transport, outdoor catering, beauty treatments, club memberships, and works contracts for constructing immovable property (except plant and machinery)."
        }
      },
      {
        "@type": "Question",
        name: "How is a GST audit conducted by department officials under Section 65?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 65, authorized officers conduct audits at the taxpayer's place of business or office. Taxpayers receive fifteen working days notice via Form GST ADT-01, and the audit must finish within three months, with potential extensions up to six months."
        }
      },
      {
        "@type": "Question",
        name: "How should a taxpayer respond to a GST Show Cause Notice (SCN) for mismatches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A taxpayer should verify discrepancies, compile matching purchase registers, and file a point-by-point written reply online in Form GST DRC-06 within thirty days. It is critical to request a personal hearing to present arguments before adverse final orders."
        }
      },
      {
        "@type": "Question",
        name: "What is the time limit for filing an online GST appeal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 107 of the CGST Act, an appeal before the First Appellate Authority must be filed online using Form GST APL-01 within three months from the date of communication of the order, along with a ten percent pre-deposit."
        }
      },
      {
        "@type": "Question",
        name: "What are the consequences of non-compliance or tax evasion under GST law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non-compliance attracts penalties under Section 122 of ten thousand rupees or the tax evaded (whichever is higher). For serious evasion exceeding five crore rupees, Section 132 provides for non-bailable arrest and prison sentences of up to five years."
        }
      },
      {
        "@type": "Question",
        name: "How can businesses avoid GST litigation and audit disputes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Businesses can avoid disputes by conducting monthly reconciliations between purchase registers and Form GSTR-2B, executing due diligence on vendor compliance, retaining accounts for seventy-two months under Section 35 and 36, and seeking timely counsel from tax advocates."
        }
      }
    ]
  };

  // 3. Product Schema (AggregateRating: ratingValue "4.9", reviewCount "4")
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Understanding GST: A Practical Legal Guide to Tax Compliance and Disputes in India",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "Learn about GST registration thresholds, claiming Input Tax Credit (ITC), dealing with Section 17(5) blocked credits, responding to SCNs, and online appeals.",
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
      datePublished: "2026-07-31",
      reviewBody: rev.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: rev.rating,
        bestRating: "5"
      }
    }))
  };

  // 4. BreadcrumbList Schema (Home > Legal Guides > Page Title)
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
        name: "Legal Guides",
        item: `${baseUrl}/blog`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Understanding GST: A Practical Legal Guide to Tax Compliance and Disputes in India",
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
          <GstHero />

          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav (exactly 9 points tracking all H2s) */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav
                sections={[
                  { id: "gst-structure", title: "Structure & Mandates" },
                  { id: "itc-mechanics", title: "ITC Eligibility" },
                  { id: "blocked-credits", title: "Blocked Credits" },
                  { id: "audit-framework", title: "Audit Framework" },
                  { id: "notice-reply", title: "Mismatch SCN Reply" },
                  { id: "online-appeals", title: "Tribunal Appeals" },
                  { id: "penalties-offences", title: "Penalties & Crimes" },
                  { id: "compliance-practices", title: "Compliance Practices" },
                  { id: "faq", title: "Frequently Asked Questions" },
                ]}
              />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <GstSection1 id="gst-structure" />
              <GstSection2 id="itc-mechanics" />
              <GstSection3 id="blocked-credits" />
              <GstSection4 id="audit-framework" />
              <GstSection5 id="notice-reply" />
              <GstSection6 id="online-appeals" />
              <GstSection7 id="penalties-offences" />
              <GstSection8 id="compliance-practices" />
              <GstFAQ id="faq" />

              {/* User Review Summary block at the bottom of content column */}
              <div className="w-full mt-16 pt-12 border-t border-gray-100 font-sans">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mb-3 tracking-tight">
                  User Review Summary
                </h3>
                <div className="text-sm text-gray-500 mb-6 flex items-center gap-1">
                  <span className="font-extrabold text-gray-800">4.9</span>
                  <span className="text-[#D4AF37]">★★★★★</span>
                  <span>Based on 4 verified reviews</span>
                </div>
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
              <GstSidebar />
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
