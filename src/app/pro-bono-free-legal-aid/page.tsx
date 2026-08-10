import type { Metadata } from "next";
import Script from "next/script";
import ProBonoHero from "@/components/pro-bono/ProBonoHero";
import ProBonoMission from "@/components/pro-bono/ProBonoMission";
import ProBonoEligibility from "@/components/pro-bono/ProBonoEligibility";
import ProBonoStories from "@/components/pro-bono/ProBonoStories";
import ProBonoFAQ from "@/components/pro-bono/ProBonoFAQ";
import ProBonoForms from "@/components/pro-bono/ProBonoForms";
import ProBonoJusticeGap from "@/components/pro-bono/ProBonoJusticeGap";
import ProBonoProcess from "@/components/pro-bono/ProBonoProcess";
import ProBonoNGOAlliances from "@/components/pro-bono/ProBonoNGOAlliances";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarWidgets from "@/components/secure-app/RightSidebarWidgets";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Free Legal Aid India | Access to Justice | AMAConnect",
  description: "AMAConnect's Pro Bono initiative connects marginalized communities and victims of injustice with top-tier advocates willing to work for free. Apply for free legal aid or pledge your hours today.",
  keywords: "free legal aid India, pro bono lawyers, free legal advice online, access to justice, NALSA legal aid, pro bono advocate India",
  alternates: {
    canonical: "https://amaconnect.in/pro-bono-free-legal-aid",
  },
  openGraph: {
    title: "Access to Justice: The AMAConnect Free Legal Aid Initiative",
    description: "Democratizing legal support in India. Connecting marginalized communities with verified pro bono advocates.",
    url: "https://amaconnect.in/pro-bono-free-legal-aid",
    siteName: "AMAConnect",
    images: [
      {
        url: "/og-pro-bono.png",
        width: 1200,
        height: 630,
        alt: "Access to Justice: The AMAConnect Free Legal Aid Initiative",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Legal Aid India | Access to Justice",
    description: "Democratizing legal support in India. Connecting marginalized communities with verified pro bono advocates.",
    images: ["/og-pro-bono.png"],
  },
};

export default function ProBonoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://amaconnect.in/pro-bono-free-legal-aid"
    },
    "headline": "Access to Justice: The AMAConnect Free Legal Aid Initiative",
    "description": "A comprehensive guide to AMAConnect's pro bono legal aid initiative in India, detailing eligibility, mission, and how to apply for free legal representation.",
    "author": {
      "@type": "Organization",
      "name": "AMAConnect",
      "url": "https://amaconnect.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMAConnect",
      "logo": {
        "@type": "ImageObject",
        "url": "https://amaconnect.in/logo.png"
      }
    },
    "datePublished": "2026-07-14T00:00:00+05:30",
    "dateModified": "2026-07-14T00:00:00+05:30",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is eligible for free legal aid on AMAConnect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eligibility is determined by a strict triage system prioritizing marginalized communities (SC/ST), victims of domestic violence, individuals facing illegal eviction or termination, and those earning below the NALSA-defined income threshold."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to pay any hidden fees or court costs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The legal consultation, advice, and document drafting provided by our pro bono advocates are entirely free. However, any mandatory statutory fees required by the courts must generally be borne by the applicant, unless explicitly waived."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-dvh bg-white">
      <Script
        id="pro-bono-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="pro-bono-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-dvh bg-[#FAF8F5] pb-24">
        <ProBonoHero />

        {/* Container for the 3-column layout matching the global design system */}
        <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 mt-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] xl:grid-cols-[220px_1fr_280px] gap-8 xl:gap-12 relative items-start">
            
            {/* Left: Sticky ScrollSpy Nav */}
            <aside className="hidden lg:block sticky top-24 self-start">
              <ScrollSpyNav 
                sections={[
                  { id: "mission", title: "The Mission" },
                  { id: "gap", title: "The Justice Gap" },
                  { id: "eligibility", title: "Who Qualifies?" },
                  { id: "process", title: "The Triage Process" },
                  { id: "alliances", title: "NGO Partnerships" },
                  { id: "stories", title: "Impact Stories" },
                  { id: "faq", title: "FAQs" },
                  { id: "contact", title: "Get Help" }
                ]}
              />
            </aside>

            {/* Middle: Main Content Flow wrapped in a white card */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <ProBonoMission id="mission" />
              <ProBonoJusticeGap id="gap" />
              <ProBonoEligibility id="eligibility" />
              <ProBonoProcess id="process" />
              <ProBonoNGOAlliances id="alliances" />
              <ProBonoStories id="stories" />
              <ProBonoFAQ id="faq" />
              <aside aria-label="Contact Us" className="w-full mt-16 pt-12 border-t border-gray-100">
                <ProBonoForms id="contact" />
              </aside>
            </div>

            {/* Right: Sticky Widgets */}
            <aside className="hidden xl:block sticky top-24 self-start space-y-8">
              <RightSidebarWidgets />
              
              {/* Specialized right-side widget for Pro Bono stats */}
              <div className="bg-[#1A1410] rounded-2xl p-6 text-white shadow-lg mt-6">
                <h3 className="font-bold text-sm mb-4 tracking-tight border-b border-white/10 pb-3">
                  Live Initiative Stats
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Hours Pledged This Month</p>
                    <p className="text-xl font-extrabold text-[#D4AF37]">12,450</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Active Pro Bono Advocates</p>
                    <p className="text-xl font-extrabold text-white">4,120</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Cases Resolved</p>
                    <p className="text-xl font-extrabold text-white">8,930+</p>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
