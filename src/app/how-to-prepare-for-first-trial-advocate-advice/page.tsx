import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import TrialGuideHero from "@/components/trial-guide/TrialGuideHero";
import PreTrialBriefing from "@/components/trial-guide/PreTrialBriefing";
import CourtroomEtiquette from "@/components/trial-guide/CourtroomEtiquette";
import ChamberMockTrials from "@/components/trial-guide/ChamberMockTrials";
import OpeningArguments from "@/components/trial-guide/OpeningArguments";
import WitnessChief from "@/components/trial-guide/WitnessChief";
import WitnessCross from "@/components/trial-guide/WitnessCross";
import TrialDayChecklist from "@/components/trial-guide/TrialDayChecklist";
import HostileWitnesses from "@/components/trial-guide/HostileWitnesses";
import PostHearingFiling from "@/components/trial-guide/PostHearingFiling";
import TrialGuideFAQ from "@/components/trial-guide/TrialGuideFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import TrialGuideSidebar from "@/components/trial-guide/TrialGuideSidebar";
import Footer from "@/components/Footer";

// SEO Metadata Injection
export const metadata: Metadata = {
  title: "First Court Trial Preparation Guide",
  description:
    "Courtroom-tested advice, etiquette guidelines, mock trial systems, and cross-examination strategies from senior advocates to help junior lawyers navigate their first trial.",
  keywords: "prepare for first trial, advocate tips for beginners, junior lawyer advice, courtroom etiquette, trial preparation, litigation strategy, witness examination, court dressing code, legal mentorship",
  alternates: {
    canonical: "https://www.amaconnect.in/how-to-prepare-for-first-trial-advocate-advice",
  },
  openGraph: {
    title: "First Court Trial Preparation Guide",
    description:
      "Courtroom-tested advice, etiquette guidelines, mock trial systems, and cross-examination strategies from senior advocates to help junior lawyers navigate their first trial.",
    url: "https://www.amaconnect.in/how-to-prepare-for-first-trial-advocate-advice",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function TrialGuidePage() {
  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/how-to-prepare-for-first-trial-advocate-advice`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "How to Prepare for Your First Trial: Advice from Seasoned Advocates",
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
    datePublished: new Date("2026-07-14").toISOString(),
    dateModified: new Date().toISOString(),
  };

  // 2. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What should I do if a witness goes hostile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If a witness contradicts their previous statements or displays bias against your case, you must request the court's permission under Section 154 of the Indian Evidence Act to declare them hostile. Once granted, you can cross-examine your own witness, putting leading questions to them and pointing out their contradictions to impeach their credibility.",
        },
      },
      {
        "@type": "Question",
        name: "How do I handle a judge who seems impatient or skeptical?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Keep your composure and never argue with the judge. Focus on the core facts and law. Say: 'I appreciate Your Lordship's concern, and I will be brief. Please permit me to point out the single most relevant paragraph in the agreement (page X) which directly resolves this dispute.' Judges appreciate brevity and clear references.",
        },
      },
      {
        "@type": "Question",
        name: "Can I cite foreign court judgments during arguments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can cite judgments from common law jurisdictions like the UK, USA, Canada, or Australia. However, foreign judgments only have persuasive value and are not binding precedents under Article 141 of the Constitution. You should first establish your case using binding Supreme Court or jurisdictional High Court precedents.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best way to handle a delay in the board/hearing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Delays are common in courts. Use the wait time productively to review your notes, watch senior advocates argue other cases in the same courtroom, and observe the specific judge's questioning style and temperament. This will help you calibrate your presentation when your case is called.",
        },
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

      {/* Semantic Main Wrapper */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <TrialGuideHero />
          
          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav with 10 sections */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav sections={[
                { id: "briefing", title: "Pre-Trial Briefing" },
                { id: "etiquette", title: "Courtroom Etiquette" },
                { id: "chamber", title: "Mock Rehearsals" },
                { id: "arguments", title: "Opening Arguments" },
                { id: "chief", title: "Examination-in-Chief" },
                { id: "cross", title: "Cross-Examination" },
                { id: "checklist", title: "Trial Checklist" },
                { id: "hostile", title: "Hostile Situations" },
                { id: "post-hearing", title: "Post-Hearing Tasks" },
                { id: "faq", title: "Common FAQs" }
              ]} />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              <PreTrialBriefing id="briefing" />
              <CourtroomEtiquette id="etiquette" />
              <ChamberMockTrials id="chamber" />
              <OpeningArguments id="arguments" />
              <WitnessChief id="chief" />
              <WitnessCross id="cross" />
              <TrialDayChecklist id="checklist" />
              <HostileWitnesses id="hostile" />
              <PostHearingFiling id="post-hearing" />
              <TrialGuideFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Widgets */}
            <div className="w-full sticky top-24">
              <TrialGuideSidebar />
            </div>

          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
