import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import AppHero from "@/components/secure-app/AppHero";
import PrivacyRedFlags from "@/components/secure-app/PrivacyRedFlags";
import AppFeaturesGrid from "@/components/secure-app/AppFeaturesGrid";
import BookingChecklist from "@/components/secure-app/BookingChecklist";
import AppFAQ from "@/components/secure-app/AppFAQ";
import LegalLandscapeAnalysis from "@/components/secure-app/LegalLandscapeAnalysis";
import ConsultationProcess from "@/components/secure-app/ConsultationProcess";
import AppSuccessStories from "@/components/secure-app/AppSuccessStories";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarWidgets from "@/components/secure-app/RightSidebarWidgets";
import Footer from "@/components/Footer";

// SEO Metadata Injection
export const metadata: Metadata = {
  title: "Secure Online Legal Consultation App | AMAConnect",
  description:
    "Download the AMAConnect mobile law app for secure lawyer chat and virtual legal advice. Get confidential document sharing and private video calls today.",
  alternates: {
    canonical: "https://www.amaconnect.in/secure-online-legal-consultation-app",
  },
  openGraph: {
    title: "Secure Legal Consultations | AMA Connect App",
    description:
      "Get virtual legal advice with our mobile law app featuring end-to-end encrypted chat, HD video calls, and a secure document vault.",
    url: "https://www.amaconnect.in/secure-online-legal-consultation-app",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function SecureAppPage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/secure-online-legal-consultation-app`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Secure Legal Consultations from Your Phone: AMAConnect App Features",
    image: `${baseUrl}/logo2.svg`,
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
        name: "How secure is the AMAConnect app compared to WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike WhatsApp which is a consumer messaging app, AMAConnect is built specifically for legal compliance. We offer dedicated encrypted vaults, block third party cloud backups, and enforce strict metadata protection to guarantee attorney client privilege.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a strong internet connection for video calls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While high definition video calls perform best on 4G or Wi-Fi, the app automatically optimizes video quality based on your bandwidth. If your connection drops, it seamlessly falls back to secure audio or encrypted chat.",
        },
      },
      {
        "@type": "Question",
        name: "Are my uploaded legal documents safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Documents are encrypted before leaving your device and are stored in an isolated digital vault. They cannot be accessed by anyone other than the specific advocate you grant permission to.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use the app to contact AMA Legal Solutions directly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. In addition to independent advocates, you can securely reach out to our core team for immediate assistance or platform support.",
        },
      },
    ],
  };

  // 3. Software Application & Review Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AMAConnect Mobile Law App",
    operatingSystem: "ANDROID, IOS",
    applicationCategory: "BusinessApplication",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "3",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
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
          name: "Priyanka S.",
        },
        reviewBody: "The encrypted chat made me feel incredibly safe discussing my family dispute. No trace left on my normal messaging apps.",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        author: {
          "@type": "Person",
          name: "Vikram R.",
        },
        reviewBody: "Uploading documents to the secure vault was seamless. The video call with my advocate was crystal clear.",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.8",
        },
        author: {
          "@type": "Person",
          name: "Rahul M.",
        },
        reviewBody: "Very easy to use, and I love that the first consultation promo code worked instantly.",
      },
    ],
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
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Semantic Main Wrapper */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <AppHero />
          
          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav sections={[
                { id: "privacy", title: "Why Privacy Matters" },
                { id: "landscape", title: "The Digital Shift" },
                { id: "process", title: "How It Works" },
                { id: "features", title: "Core App Features" },
                { id: "booking", title: "Booking Checklist" },
                { id: "stories", title: "Success Stories" },
                { id: "faq", title: "Security FAQs" }
              ]} />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <PrivacyRedFlags id="privacy" />
              <LegalLandscapeAnalysis id="landscape" />
              <ConsultationProcess id="process" />
              <AppFeaturesGrid id="features" />
              <BookingChecklist id="booking" />
              <AppSuccessStories id="stories" />
              <AppFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Widgets */}
            <div className="w-full sticky top-24">
              <RightSidebarWidgets />
            </div>

          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
