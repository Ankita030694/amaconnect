import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import LawyerHero from "@/components/lawyer-branding/LawyerHero";
import LawyerBenefits from "@/components/lawyer-branding/LawyerBenefits";
import AdvocateDigitalMarketing from "@/components/lawyer-branding/AdvocateDigitalMarketing";
import LawyerComparison from "@/components/lawyer-branding/LawyerComparison";
import LawyerLeadForm from "@/components/lawyer-branding/LawyerLeadForm";
import LawyerFAQ from "@/components/lawyer-branding/LawyerFAQ";
import LeadGenStrategy from "@/components/lawyer-branding/LeadGenStrategy";
import BarCouncilRules from "@/components/lawyer-branding/BarCouncilRules";
import ProfileOptimisation from "@/components/lawyer-branding/ProfileOptimisation";
import Footer from "@/components/Footer";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarWidgets from "@/components/secure-app/RightSidebarWidgets";

// SEO Metadata Injection
export const metadata: Metadata = {
  title: "How Lawyers Can Build Their Brand & Get Clients | AMAConnect",
  description:
    "Learn lawyer marketing strategies to get more legal clients in 2026. Claim your free online profile for advocates on AMAConnect to build your law practice.",
  alternates: {
    canonical: "https://amaconnect.in/lawyer-branding-get-more-clients",
  },
  openGraph: {
    title: "Build Your Legal Brand | AMA Connect",
    description:
      "Claim your free professional profile and act as a marketing engine for your law practice.",
    url: "https://amaconnect.in/lawyer-branding-get-more-clients",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function LawyerBrandingPage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/lawyer-branding-get-more-clients`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "How Lawyers Can Build Their Brand and Get More Clients in 2026",
    image: `${baseUrl}/cta-bg.jpg`,
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
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
  };

  // 2. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does AMAConnect help me get more legal clients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By creating a verified profile, you gain visibility among our 10,000 monthly active users who are actively seeking legal advice and representation. It acts as an automated lead generation engine for your practice.",
        },
      },
      {
        "@type": "Question",
        name: "Is creating a profile really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, claiming and setting up your basic professional profile is entirely free. We believe in democratizing access to legal services while helping advocates build their digital presence.",
        },
      },
      {
        "@type": "Question",
        name: "How is this different from a standard directory?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike passive directories, AMAConnect allows users to directly interact with you through Q&A sessions and secure chat, enabling you to demonstrate your expertise before they formally hire you.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need technical skills to build my brand online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not at all. Our platform is designed to be completely plug-and-play. You fill in your professional details, and we handle the SEO, visibility, and matching algorithms to connect you with the right clients.",
        },
      },
      {
        "@type": "Question",
        name: "How are the leads pre-qualified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Users must submit structured queries regarding their legal issues before reaching out. This ensures that when you connect with a potential client, you already have the context needed to provide precise guidance.",
        },
      },
    ],
  };

  // 3. Review Schema (Aggregated)
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AMAConnect Professional Profile",
    image: `${baseUrl}/cta-bg.jpg`,
    description: "Digital profile and lead generation engine for advocates.",
    brand: {
      "@type": "Brand",
      name: "AMAConnect",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        author: {
          "@type": "Person",
          name: "Adv. Rajesh Kumar",
        },
        reviewBody: "AMAConnect transformed my practice. The quality of leads is significantly better than traditional directories.",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.6",
        },
        author: {
          "@type": "Person",
          name: "Adv. Sneha Patil",
        },
        reviewBody: "A very easy way to build a digital brand without hiring an agency. The Q&A feature helps me showcase expertise.",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Semantic Main Wrapper */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <LawyerHero />
          
          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start relative">
            
            {/* Left: Scroll Spy Nav */}
            <aside className="hidden lg:block sticky top-24">
              <ScrollSpyNav 
                sections={[
                  { id: "benefits", title: "Digital Shift" },
                  { id: "digital-marketing", title: "State of Marketing" },
                  { id: "comparison", title: "Traditional vs Digital" },
                  { id: "lead-strategy", title: "Lead Strategy" },
                  { id: "bar-rules", title: "Bar Rules" },
                  { id: "profile-opt", title: "Profile Opt" },
                  { id: "faq", title: "FAQs" },
                  { id: "claim-profile", title: "Claim Profile" }
                ]} 
              />
            </aside>

            {/* Middle: Main Content Flow */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <LawyerBenefits id="benefits" />
              <AdvocateDigitalMarketing id="digital-marketing" />
              <LawyerComparison id="comparison" />
              <LeadGenStrategy id="lead-strategy" />
              <BarCouncilRules id="bar-rules" />
              <ProfileOptimisation id="profile-opt" />
              <LawyerFAQ id="faq" />
              <aside aria-label="Lead Generation Form" className="w-full mt-16 pt-12 border-t border-gray-100">
                <LawyerLeadForm id="claim-profile" />
              </aside>
            </div>

            {/* Right: Sticky Widgets */}
            <aside className="hidden lg:block w-full sticky top-24">
              <RightSidebarWidgets />
            </aside>

          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
