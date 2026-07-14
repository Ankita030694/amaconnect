"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How does AMAConnect ethically help me get more legal clients without violating Bar Council rules?",
    answer: "AMAConnect strictly adheres to the Bar Council of India's Rule 36 prohibiting direct solicitation. We do not run advertisements promising specific outcomes. Instead, we provide a platform for you to build an informational professional profile (acting as a digital nameplate) and participate in public Q&A forums. When clients initiate contact based on the expertise you demonstrate on our platform, it is a pull-based inquiry, fully compliant with ethical guidelines."
  },
  {
    question: "Is claiming and verifying my profile actually free?",
    answer: "Yes. Setting up your basic professional profile, completing the Bar Council verification process, and accessing the public Q&A forums is 100% free. We believe that every legitimate advocate deserves a foundational digital presence. We only monetize through premium visibility features and small transaction fees on successful, paid consultations."
  },
  {
    question: "How exactly does the algorithmic client matching work?",
    answer: "When a user submits a legal query (e.g., 'Drafting a co-founder agreement in Bangalore'), our natural language processing algorithm analyzes the text. It identifies the core legal domain (Corporate/Contract Law) and the jurisdiction (Karnataka). It then routes this query exclusively to advocates who have verified expertise in those specific areas, ensuring highly relevant lead generation rather than random matching."
  },
  {
    question: "What is the escrow payment system, and how does it protect my consultation fees?",
    answer: "To eliminate the friction of unpaid consultations, clients must prepay their consultation fee into a secure AMAConnect trust account when booking your calendar slot. These funds are held in escrow. Once the consultation (via video or chat) successfully concludes, the funds are automatically disbursed to your linked bank account. You never have to chase a client for a consultation fee again."
  },
  {
    question: "Can I use AMAConnect if I only practice in District Courts, not High Courts?",
    answer: "Absolutely. In fact, localized district court expertise is highly sought after by our user base. Whether you practice in the Tis Hazari Courts in Delhi or the District Court in Pune, you can specify your exact jurisdictional limits on your profile. The algorithm will specifically route local clients to you."
  },
  {
    question: "How long does the Bar Council verification process take?",
    answer: "Typically, verification takes between 24 to 48 business hours. Our compliance team manually cross-references the Bar Council ID and enrollment year you provide against the official state Bar Council records to ensure platform integrity and maintain client trust."
  },
  {
    question: "Can I set my own consultation fees?",
    answer: "Yes. You have complete autonomy over your pricing structure. You can set different rates for an initial 15-minute introductory call, a comprehensive 45-minute video consultation, or an asynchronous document review session. Your fees are displayed transparently on your profile."
  },
  {
    question: "How does the secure document vault work for advocates?",
    answer: "When a client books a session, they can upload relevant case files (FIRs, contracts, notices) into an encrypted digital vault. You are granted exclusive decryption keys to review these documents before the consultation begins, allowing you to maximize the efficiency of the paid session without compromising data privacy."
  },
  {
    question: "Do I need to download a separate app to manage my profile?",
    answer: "No, the AMAConnect platform provides a comprehensive web-based dashboard for advocates, optimized for both desktop and mobile browsers. You can manage your calendar, update your profile, respond to Q&A queries, and conduct video consultations entirely through your browser."
  },
  {
    question: "What happens if a client doesn't show up for a scheduled consultation?",
    answer: "Our escrow system protects your time. If a client fails to join a scheduled consultation within a predefined grace period (usually 10 minutes), the session is marked as a 'client no-show.' According to our cancellation policy, you are still compensated for the blocked time, and the funds are released from escrow to your account."
  },
  {
    question: "Can I write and publish legal articles on my profile?",
    answer: "Yes, publishing informational articles is one of the most effective ways to build digital authority. You can publish articles on recent Supreme Court judgments or complex legal procedures. These articles are SEO-optimized by our platform, drawing organic traffic directly to your verified profile."
  },
  {
    question: "How does AMAConnect handle user reviews and ratings?",
    answer: "To prevent malicious or fake reviews, only users who have successfully completed a paid consultation with you through the platform can leave a rating. This closed-loop system ensures that your public reputation is built solely on genuine client experiences."
  },
  {
    question: "Is there a limit to how many queries I can answer in the public AMA forums?",
    answer: "No, there is no limit. Active participation in the AMA forums is highly encouraged. The algorithm actually boosts the visibility of advocates who consistently provide helpful, accurate information in the public forums, creating a direct correlation between your informational output and your inbound leads."
  },
  {
    question: "What technical requirements do I need for HD video consultations?",
    answer: "You only need a modern web browser (Chrome, Safari, or Edge) and a stable internet connection (4G or broadband Wi-Fi). Our WebRTC infrastructure automatically handles bandwidth optimization, ensuring smooth peer-to-peer encrypted video calls without requiring any external plugins."
  },
  {
    question: "How is my own data and privacy protected as an advocate?",
    answer: "We treat advocate data with the same strict security protocols as client data. Your financial details, private communications with clients, and internal calendar metrics are fully encrypted. We do not sell advocate data to third-party marketing agencies or external data brokers."
  }
];

export default function LawyerFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        <div className="text-left mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600">
            Everything you need to know about scaling your practice with AMAConnect.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? "border-[#D4AF37] shadow-md" : "border-gray-200"}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-[#2D2219] text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? "bg-[#FDFBF7] text-[#D4AF37] rotate-180" : "bg-gray-50 text-gray-400"}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 pb-6 pt-2 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
