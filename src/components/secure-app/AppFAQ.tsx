"use client";

import React, { useState } from "react";

const appFaqs = [
  {
    question: "How secure is the AMAConnect app compared to WhatsApp?",
    answer: "Unlike WhatsApp which is a consumer messaging app, AMAConnect is built specifically for legal compliance. We offer dedicated encrypted vaults, block third party cloud backups, and enforce strict metadata protection to guarantee attorney client privilege."
  },
  {
    question: "Do I need a strong internet connection for video calls?",
    answer: "While high definition video calls perform best on 4G or Wi-Fi, the app automatically optimizes video quality based on your bandwidth. If your connection drops, it seamlessly falls back to secure audio or encrypted chat."
  },
  {
    question: "Are my uploaded legal documents safe?",
    answer: "Yes. Documents are encrypted before leaving your device and are stored in an isolated digital vault. They cannot be accessed by anyone other than the specific advocate you grant permission to."
  },
  {
    question: "Can I use the app to contact AMA Legal Solutions directly?",
    answer: "Absolutely. In addition to independent advocates, you can securely reach out to our core team for immediate assistance or platform support."
  }
];

export default function AppFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-3">
            Questions About App Security
          </h2>
          <p className="text-sm text-gray-600">
            Clear answers on how we protect your digital privacy.
          </p>
        </div>

        <div className="space-y-4">
          {appFaqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? "border-[#D4AF37] shadow-md" : "border-gray-200"}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
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
