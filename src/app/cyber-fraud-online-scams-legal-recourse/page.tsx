import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import CyberFraudHero from "@/components/cyber-fraud/CyberFraudHero";
import CyberFraudLandscape from "@/components/cyber-fraud/CyberFraudLandscape";
import ImmediateActionPlan from "@/components/cyber-fraud/ImmediateActionPlan";
import FilingComplaint from "@/components/cyber-fraud/FilingComplaint";
import RbiGuidelines from "@/components/cyber-fraud/RbiGuidelines";
import ItActRemedies from "@/components/cyber-fraud/ItActRemedies";
import IntermediaryRole from "@/components/cyber-fraud/IntermediaryRole";
import ElectronicEvidence from "@/components/cyber-fraud/ElectronicEvidence";
import RedFlags from "@/components/cyber-fraud/RedFlags";
import CyberFraudFAQ from "@/components/cyber-fraud/CyberFraudFAQ";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import CyberFraudSidebar from "@/components/cyber-fraud/CyberFraudSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cyber Fraud & Online Scams Legal Recourse Guide | AMAConnect",
  description: "Learn how victims of UPI, banking, or credit card fraud recover lost money and file cyber crime complaints under Indian law. Zero liability guidelines and quick action plans.",
  keywords: "cyber fraud India, recover banking fraud money, UPI fraud refund, credit card scam legal help, file cyber cell complaint, cybercrime.gov.in, RBI customer liability guidelines",
  alternates: {
    canonical: "https://amaconnect.in/cyber-fraud-online-scams-legal-recourse",
  },
  openGraph: {
    title: "Cyber Fraud & Online Scams Legal Recourse Guide",
    description: "Learn how victims of UPI, banking, or credit card fraud recover lost money and file cyber crime complaints under Indian law.",
    url: "https://amaconnect.in/cyber-fraud-online-scams-legal-recourse",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function CyberFraudPage() {
  const baseUrl = "https://amaconnect.in";
  const pageUrl = `${baseUrl}/cyber-fraud-online-scams-legal-recourse`;

  // 1. Article & AggregateRating Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    "headline": "Cyber Fraud & Online Scams Legal Recourse: The Recovery Guide",
    "description": "How do victims of UPI, banking, or credit card fraud recover lost money and file cyber crime complaints under Indian law?",
    "image": `${baseUrl}/logo2.svg`,
    "author": {
      "@type": "Person",
      "name": "Anuj Anand Malik",
      "url": `${baseUrl}/about`,
      "image": `${baseUrl}/anujbhiya.png`,
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo2.svg`,
      },
    },
    "datePublished": "2026-07-14T00:00:00+05:30",
    "dateModified": "2026-07-14T00:00:00+05:30",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "4",
      "bestRating": "5",
      "worstRating": "1",
    },
  };

  // 2. FAQ Schema (8 FAQs)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the very first step I should take if money is fraudulently debited from my account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should immediately call the national cyber crime helpline at 1930 and report the incident. This triggers a real-time tracking mechanism through the Citizen Financial Cyber Fraud Reporting System to freeze the money in the recipient's bank account. Following this, immediately notify your bank to block your cards, disable UPI, and freeze your net banking.",
        },
      },
      {
        "@type": "Question",
        "name": "Under RBI guidelines, am I responsible for losses in case of unauthorized electronic banking transactions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to the RBI customer protection guidelines, you have zero liability if the unauthorized transaction occurred due to a system failure within the bank, or a third-party breach where you are not at fault and you report it within three working days. If the report is delayed to four to seven working days, your maximum liability is capped depending on your account and card type.",
        },
      },
      {
        "@type": "Question",
        "name": "How long does a bank have to refund my money after I report an online fraud?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once you report the unauthorized electronic transaction, the bank is legally obligated to credit a shadow reversal of the stolen amount back to your bank account within ten working days. This temporary credit remains active while the bank conducts its investigation, ensuring you do not suffer a lack of liquidity during the resolution process.",
        },
      },
      {
        "@type": "Question",
        "name": "Is it possible to recover money if I voluntarily shared an OTP or scanned a suspicious QR code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you voluntarily shared credentials or scanned a QR code, the initial transaction is considered user negligence, and you are responsible for the losses incurred up until you report the breach to the bank. However, the moment you report the fraud to the bank, the bank is fully liable for any subsequent unauthorized transactions that occur after that time.",
        },
      },
      {
        "@type": "Question",
        "name": "Can the police refuse to register my complaint for an online financial scam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, the police cannot refuse to register your complaint. Under Section 154 of the Code of Criminal Procedure, or the corresponding provisions in the new Bharatiya Nagarik Suraksha Sanhita, they are legally bound to register a First Information Report for cognizable offenses, including cyber fraud. If the local station lacks a cyber unit, they must register a Zero FIR and transfer it to the cyber cell.",
        },
      },
      {
        "@type": "Question",
        "name": "What legal remedies are available to me under the Information Technology Act 2000?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under Section 46 of the Information Technology Act, you can file a civil petition before the Adjudicating Officer of your state, who possesses the powers of a civil court. You can seek compensation for damages up to five crore rupees from negligent banks, telecom companies, or payment aggregators who failed to maintain reasonable security practices under Section 43A.",
        },
      },
      {
        "@type": "Question",
        "name": "What evidence do I need to prepare to file a cyber crime complaint?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should gather comprehensive electronic evidence. This includes bank statements highlighting the fraudulent debit, screenshots of the transaction SMS, receipt or transaction confirmation, screenshots of any WhatsApp or Telegram chats with the scammer, call logs showing the scammer's number, and printouts of any phishing links or emails.",
        },
      },
      {
        "@type": "Question",
        "name": "What is SIM swapping and how does it affect my bank account security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SIM swapping is an identity theft technique where a scammer uses forged identity documents to obtain a duplicate SIM card for your mobile number from your telecom service provider. Once active, your original SIM loses signal, and the scammer receives all your phone calls and transaction OTPs, allowing them to access and drain your bank accounts.",
        },
      },
    ],
  };

  // 3. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Cyber Fraud Guide",
        "item": pageUrl,
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-dvh bg-white">
      {/* Schema Injection */}
      <Script
        id="cyber-fraud-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="cyber-fraud-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="cyber-fraud-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Semantic Main Wrapper */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article>
          <CyberFraudHero />
          
          <div className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Scroll Spy Nav with 7 sections */}
            <div className="hidden lg:block sticky top-24">
              <ScrollSpyNav sections={[
                { id: "landscape", title: "Cyber Fraud Landscape" },
                { id: "golden-hours", title: "Golden Hours Plan" },
                { id: "cyber-cell", title: "Filing complaints" },
                { id: "rbi-guidelines", title: "RBI Liability Rules" },
                { id: "it-act", title: "IT Act Remedies" },
                { id: "intermediaries", title: "Intermediary Role" },
                { id: "electronic-evidence", title: "Electronic Evidence" },
                { id: "red-flags", title: "Red Flags List" },
                { id: "faq", title: "Common FAQs" }
              ]} />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
              
              {/* Lead Hook */}
              <div className="bg-[#FAF9F5] border-l-4 border-[#D4AF37] p-6 rounded-r-3xl mb-12">
                <p className="text-[#2D2219] font-medium text-sm sm:text-base leading-relaxed text-justify">
                  Statistics from the National Cyber Crime Portal reveal that UPI and credit card frauds account for over 70 percent of reported online crimes in India. Quick action within the golden hours and leveraging RBI customer liability circulars is critical to reclaiming stolen funds.
                </p>
                <p className="text-gray-600 text-xs mt-3 leading-relaxed">
                  If you need immediate legal assistance, you can post a query directly on our <a href="/ask-me-anything" className="text-[#D4AF37] font-bold hover:underline">Ask Me Anything platform</a>, join one of our active <a href="/communities" className="text-[#D4AF37] font-bold hover:underline">legal communities</a> to connect with other victims, or apply for our <a href="/pro-bono-free-legal-aid" className="text-[#D4AF37] font-bold hover:underline">pro bono free legal aid program</a> if you fall under the eligible categories.
                </p>
              </div>

              {/* Sections */}
              <CyberFraudLandscape id="landscape" />
              <ImmediateActionPlan id="golden-hours" />
              <FilingComplaint id="cyber-cell" />
              <RbiGuidelines id="rbi-guidelines" />
              <ItActRemedies id="it-act" />
              <IntermediaryRole id="intermediaries" />
              <ElectronicEvidence id="electronic-evidence" />
              <RedFlags id="red-flags" />
              <CyberFraudFAQ id="faq" />
            </div>

            {/* Right Column: Sticky Widgets */}
            <div className="w-full sticky top-24">
              <CyberFraudSidebar />
            </div>

          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
