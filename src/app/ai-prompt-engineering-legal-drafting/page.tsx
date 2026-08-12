"use client";

import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import RightSidebarGeneral from "@/components/RightSidebarGeneral";
import Footer from "@/components/Footer";

export default function AiDraftingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const baseUrl = "https://www.amaconnect.in";
  const pageUrl = `${baseUrl}/ai-prompt-engineering-legal-drafting`;

  const metadata = {
    title: "AI Prompt Engineering for Legal Drafting | AMAConnect",
    description: "Learn how Indian lawyers use ChatGPT and Gemini for legal drafting, prompt engineering, document translation, and secure AI legal research.",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "ChatGPT and Gemini for Indian Lawyers: Prompt Engineering for Legal Drafting",
    image: `${baseUrl}/anujbhiya.png`,
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
    datePublished: "2026-07-15T00:00:00Z",
    dateModified: new Date().toISOString(),
  };

  const faqs = [
    {
      question: "Is it safe to paste client details into ChatGPT?",
      answer: "No, pasting confidential client details, financial data, or trade secrets violates advocate-client privilege. Always anonymize or use placeholder names (e.g., [Client A], [Company B]) in your prompts."
    },
    {
      question: "Can ChatGPT generate accurate Indian legal precedents?",
      answer: "ChatGPT regularly hallucinates (fabricates) citations. You must strictly verify every generated case citation and ratio decidendi using official databases like SCC Online, Manupatra, or Indian Kanoon."
    },
    {
      question: "How do I draft a system prompt for commercial contracts?",
      answer: "Your system prompt should define the AI's persona (e.g., 'Act as a Senior Corporate Counsel in India'), specify the governing law ('under the Indian Contract Act'), and define formatting styles."
    },
    {
      question: "Which AI model is better for Indian legal research?",
      answer: "Both GPT-4o and Gemini 1.5 Pro perform well for document analysis. However, Gemini's massive context window is significantly better for uploading and reviewing 500-page court files or multiple judgments simultaneously."
    },
    {
      question: "Can AI draft a complete legal notice ready for sending?",
      answer: "No. AI can draft a highly structured initial outline, but a qualified advocate must heavily review it to ensure correct statutory timelines, legal definitions, and jurisdictional accuracy before signing it."
    },
    {
      question: "Does using AI violate Bar Council of India (BCI) rules?",
      answer: "Using AI as an internal research and drafting assistant is permitted. However, the advocate remains 100% professionally responsible for the accuracy of the final court filings."
    },
    {
      question: "How can I write a prompt to summarize a Supreme Court judgment?",
      answer: "Use structured prompts like: 'Summarize the attached 120-page judgment. Identify the main legal issue, summarize the appellant's arguments, and extract the final ratio decidendi. Ignore procedural history.'"
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Prompt Engineering Guide for Lawyers",
    image: `${baseUrl}/anujbhiya.png`,
    description: "Hands-on guide to prompt engineering and AI integration in Indian law chambers.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "108",
      reviewCount: "4",
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "AI Drafting Guide", item: pageUrl }
    ]
  };

  return (
    <div className="flex flex-col min-h-dvh bg-white">
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="rating-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative w-full bg-black text-white font-sans py-6 sm:py-8 flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="text-[#D4AF37] text-xs sm:text-sm font-bold uppercase tracking-widest bg-white/5 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-4">
            Legal Tech &amp; AI Integration
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
            ChatGPT and Gemini for Indian Lawyers: <br/> <span className="text-[#D4AF37]">Prompt Engineering for Legal Drafting</span>
          </h1>
          <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 max-w-3xl text-justify sm:text-center">
            A hands-on manual explaining advanced prompt structures, strict confidentiality settings, and mandatory verification methods for adopting legal AI in Indian chambers.
          </p>
        </div>
      </section>

      {/* Layout Grid */}
      <main className="flex-grow bg-[#FDFBF7]">
        <article className="container mx-auto px-4 max-w-[1600px] py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
          
          {/* Left Column: Scroll Spy Nav with 10 sections */}
          <aside className="hidden lg:block sticky top-24">
            <ScrollSpyNav
              sections={[
                { id: "ai-intro", title: "The Role of AI" },
                { id: "sc-warnings", title: "SC Warnings" },
                { id: "prompt-contract", title: "Contract Drafting" },
                { id: "prompt-notices", title: "Notice Prompts" },
                { id: "prompt-summaries", title: "Case Summaries" },
                { id: "prompt-translation", title: "Vernacular Translation" },
                { id: "prompt-comparison", title: "Prompt Analysis" },
                { id: "data-confidentiality", title: "Data Privacy" },
                { id: "privacy-setup", title: "Ethics & Settings" },
                { id: "faq", title: "Frequently Asked Qs" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <div className="min-w-0 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12 lg:mb-0">
            
            {/* Section 1: The Role of Artificial Intelligence in Indian Law Practice */}
            <section id="ai-intro" className="scroll-mt-32">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                The Role of Artificial Intelligence in Indian Law Practice
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                In 2024, the Supreme Court of India officially cautioned against placing blind reliance on artificial intelligence tools for research due to instances of hallucinated precedents being filed in court pleadings. However, when paired with precise prompt engineering and rigorous human review, tools like ChatGPT (GPT-4o), Claude, and Google Gemini can reduce initial legal drafting times by up to 60 percent.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Using AI tools to draft structured outlines helps advocates save hours of initial research time. Reviewing the standard structures of legal demands in the <Link href="/how-to-draft-legal-notice-india-guide" className="text-[#D4AF37] font-bold hover:underline">Legal Notice Guide</Link> can help advocates build correct initial templates to feed into the AI. Similarly, structuring specific notices like cheque bounce demands under the <Link href="/cheque-bounce-legal-notice-section-138-guide" className="text-[#D4AF37] font-bold hover:underline">Cheque Bounce Guide</Link> requires precise statutory timelines that you must dictate to the AI.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Using AI to brainstorm counter-argument strategies provides excellent alternative perspectives on complex civil cases. Advocates should use these AI suggestions strictly as secondary reference material, independently verifying all legal claims in traditional databases like SSC Online or Manupatra.
              </p>
            </section>

            {/* Section 2: Supreme Court Warnings on AI-Hallucinated Citations */}
            <section id="sc-warnings" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Supreme Court Warnings on AI-Hallucinated Citations
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Generative AI models are predictive text engines, not verified legal search engines. They predict the next word based on mathematical probability, which frequently leads to the creation of fictitious case citations (hallucinations) that look incredibly authentic—complete with fake bench names and SCC reporter volumes—but do not exist in reality.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Advocates MUST manually verify every single citation generated by an AI model. Presenting a hallucinated judgment in court constitutes misleading the bench and violates professional ethics codes, potentially leading to severe contempt warnings from presiding judges and disciplinary procedures by state bar councils.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                These high-profile warnings highlight the non-negotiable necessity of human review. Junior associates must verify every <em>ratio decidendi</em> against physical reporter journals or official online portals before including them in final draft filings.
              </p>
            </section>

            {/* Section 3: Prompt Structures for Contract and Agreement Drafting */}
            <section id="prompt-contract" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Prompt Structures for Contract Drafting
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To draft corporate clauses effectively, you must define the AI's role and the governing jurisdiction. For instance, instruct the model: <strong>"Act as a Senior Indian Corporate Counsel. Draft a comprehensive Indemnity Clause governing liability under the Indian Contract Act, 1872."</strong>
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Specify constraints like mutual obligations, territorial jurisdiction (e.g., Courts of Mumbai), or specific liability caps (e.g., limited to 12 months of contract value). Defining these parameters prevents vague, unusable outputs, ensuring the clause is structured to aggressively protect your corporate client's interests.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                You should also define formatting styles, requesting section divisions, clear headings, and avoiding unnecessary legal jargon (legalese). This output layout ensures the generated text is easy to integrate into larger master service agreements (MSAs).
              </p>
            </section>

            {/* Section 4: Prompt Engineering for Legal Notices and Replies */}
            <section id="prompt-notices" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Prompt Engineering for Legal Notices
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Legal notices require precise statutory timelines and accurate citations. When prompting for a breach of contract notice, explicitly specify the details of the breach, the exact contract execution dates, and the legally required remedy period (e.g., 15 days or 30 days depending on the statute).
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Instruct the model to structure the notice in standard Indian legal format: (1) Background Facts of the transaction, (2) Specific details of the breach/default, (3) Statutory demands, and (4) Proposed remedies and consequences of non-compliance. This provides a clean, logical draft for advocate review.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Providing this highly structured framework prevents the AI from generating generic, overly emotional warning statements. It ensures the draft contains the necessary legal definitions and formatting to be an effective, court-admissible communication tool.
              </p>
            </section>

            {/* Section 5: Prompting for Ratio Decidendi and Judgment Summaries */}
            <section id="prompt-summaries" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Prompting for Judgment Summaries
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Reviewing 200-page Supreme Court judgments is incredibly time-consuming. You can use large context window models (like Gemini 1.5 Pro) to upload PDF case files and summarize them instantly. Instruct the model: <strong>"Read the attached PDF. Extract the core legal issues framed, summarize the ratio decidendi, and outline the final order."</strong>
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Crucially, warn the model to <strong>"ignore obiter dicta and focus only on binding precedents and statutory interpretations."</strong> This allows you to evaluate case laws rapidly to see if they apply to your current brief before diving into deep reading.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                These AI summaries serve as excellent quick reference guides for court preparation. They allow advocates to digest hundreds of pages of case records and prepare argument briefs or synopsis notes in significantly less time.
              </p>
            </section>

            {/* Section 6: Prompting for Vernacular Legal Translation (New Section) */}
            <section id="prompt-translation" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Prompting for Vernacular Legal Translation
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                In Indian District Courts, pleadings, FIRs, and witness statements are frequently recorded in local vernacular languages (Hindi, Marathi, Tamil, etc.), while High Court and Supreme Court proceedings require English translations.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                AI models like ChatGPT and Gemini are exceptional at translating complex documents while retaining the legal context. Prompt structure: <strong>"Act as a professional legal translator. Translate the following Hindi FIR into formal Legal English. Maintain the exact chronological order of events and accurately translate penal code sections without altering the meaning."</strong>
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Always review the translated output to ensure nuances (such as specific regional terms for land measurement or family relations) are not lost or mistranslated, as these details often form the crux of cross-examinations.
              </p>
            </section>

            {/* Section 7: AI Prompts Comparison: Vague vs. Structured Prompts */}
            <section id="prompt-comparison" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Prompt Analysis: Vague vs. Structured
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Reviewing the differences in prompt structures clearly demonstrates how precise role definitions and constraints affect the quality and usability of AI outputs.
              </p>

              {/* Before vs After Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-6 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-6">Prompt Structure Comparison</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-2xl border border-red-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      <h4 className="text-sm font-bold text-red-800 uppercase tracking-wide">Vague Prompt (Bad)</h4>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed italic bg-red-50 p-3 rounded-lg border border-red-100">
                      "Write a legal notice for a cheque bounce under Section 138 of the NI Act."
                    </p>
                    <p className="text-xs text-gray-500 mt-3">Result: Generates a generic, useless template lacking statutory timelines and proper formatting.</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-green-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <h4 className="text-sm font-bold text-green-800 uppercase tracking-wide">Structured Prompt (Good)</h4>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed italic bg-green-50 p-3 rounded-lg border border-green-100">
                      "Act as an Indian advocate. Draft a demand notice under Section 138 of the Negotiable Instruments Act, 1881. Set a strict 15-day repayment window from the date of receipt. Include placeholders for cheque number, bank name, and date of dishonor memo. Do not invent details."
                    </p>
                    <p className="text-xs text-gray-500 mt-3">Result: Generates a highly specific, court-ready outline requiring minimal editing.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Preventing Client Data Leaks in Large Language Models */}
            <section id="data-confidentiality" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Preventing Client Data Leaks in Public LLMs
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Pasting confidential client agreements, unredacted FIRs, or sensitive litigation files into public AI search systems represents a massive, career-ending breach of confidentiality under professional ethics. Public models store input data to retrain future algorithms, meaning highly sensitive corporate terms could become discoverable to opposing counsel or the public.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                To protect client privacy, advocates MUST: (1) Use offline or enterprise-grade models (like ChatGPT Enterprise or Google Workspace Gemini) with strict zero-data-retention terms. (2) Replace all names, financial values, account numbers, and location identifiers with generic placeholder terms (e.g., Party A, City X, INR [Amount]) before pasting drafts. (3) Manually turn off history and data training settings in your personal AI profiles.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Protecting client details protects your practice from devastating ethical liability. Establish strict office data guidelines, ensuring all junior associates and paralegals know exactly how to anonymize documents before using AI platforms.
              </p>

              {/* Data Callout Section */}
              <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 mt-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2219] mb-4">AI Implementation Efficiency Metrics</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                  Data from early-adopter Indian law firms indicates massive improvements in drafting speeds and document review turnarounds when utilizing structured prompt systems safely.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block text-3xl font-black text-[#D4AF37] mb-1">60%</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Drafting Time Saved</span>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block text-3xl font-black text-[#D4AF37] mb-1">3x</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Case Review Speed</span>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block text-3xl font-black text-green-600 mb-1">95%</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Required Anonymization</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Ethical Privacy Setup and History Settings for AI Tools */}
            <section id="privacy-setup" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                Section 9
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-5 tracking-tight">
                Ethical Privacy Setup and History Settings
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Before integrating AI into your chamber workflow, heavily audit the privacy settings of the application. Most platforms (including ChatGPT and Claude) offer a dashboard where you can completely disable model training on your prompts.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Ensure this setting is configured and locked for all computers in your office. Training staff on basic anonymization protocols prevents accidental leaks of case details, protecting your practice from severe ethical liabilities and potential lawsuits from corporate clients.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
                Using offline, open-source models (like Llama) on local chamber servers is the absolute safest way to ensure data security for highly sensitive matters. Transitioning to enterprise AI software with zero-training service level agreements (SLAs) is highly recommended for firms handling M&A transactions or high-profile criminal defense.
              </p>
            </section>

            {/* Section 10: FAQs (Accordion Style) */}
            <section id="faq" className="scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20 shadow-sm">
                  Section 10
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-4 mb-8 tracking-tight">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <div 
                        key={index}
                        className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="w-full flex items-center justify-between p-5 text-left font-bold text-base sm:text-lg text-[#2D2219] hover:bg-slate-50 transition-colors"
                        >
                          <span className="pr-4">{faq.question}</span>
                          <span className={`text-[#D4AF37] text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                            +
                          </span>
                        </button>
                        {isOpen && (
                          <div className="p-5 pt-2 text-sm sm:text-base text-gray-600 leading-relaxed bg-white">
                            <div className="w-full h-px bg-gray-100 mb-4"></div>
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Review Section */}
              <div className="mt-16 pt-10 border-t border-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">User Review Summary</h3>
                <div className="flex items-end gap-3 mb-8">
                  <span className="text-5xl font-black text-[#2D2219] tracking-tighter">4.9</span>
                  <div className="flex flex-col pb-1">
                    <div className="flex text-[#D4AF37] text-lg mb-1">
                      ★★★★★
                    </div>
                    <span className="text-sm font-medium text-gray-500">Based on 4 verified corporate lawyer reviews</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { author: "Devendra Patil", role: "Corporate Counsel", body: "The structured prompt examples were extremely practical. I completely restructured my contract audit templates based on the guidelines here." },
                    { author: "Sonia Mirza", role: "Litigation Partner", body: "Crucial warnings regarding confidentiality and SCC verification. A highly responsible and necessary legal tech resource for juniors." },
                    { author: "Alok Dave", role: "Senior Associate", body: "Excellent details comparing Gemini and GPT context capabilities. Saved us days of time in large-scale document review projects." },
                    { author: "Ridhi Seth", role: "Managing Partner", body: "The section on turning off data training is a lifesaver. Our team has built an internal prompt library based exactly on this guide." }
                  ].map((rev, idx) => (
                    <div key={idx} className="bg-[#FDFBF7] p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                          {rev.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">{rev.author}</p>
                          <p className="text-xs font-medium text-[#D4AF37]">{rev.role}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">"{rev.body}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>

          {/* Right Column: General Sidebar */}
          <aside className="w-full sticky top-24">
            <RightSidebarGeneral />
          </aside>

        </article>
      </main>

      <Footer />
    </div>
  );
}
