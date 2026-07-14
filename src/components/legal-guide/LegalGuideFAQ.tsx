"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Can a landlord evict me without notice?",
    answer: "No, a landlord cannot evict you without prior notice. Under standard rent agreements and state rent control acts, landlords must serve a written eviction notice specifying the grounds for eviction. Self-help measures like changing locks or turning off utilities are completely illegal and can be legally contested by the tenant."
  },
  {
    question: "What should I do if a store refuses to replace a defective item?",
    answer: "If a store refuses to replace a defective item or refund your money, you can send them a written notice detailing the issue. If they do not respond within 15 days, you can register a complaint on the National Consumer Helpline portal (NCH) by calling 1915 or file a case on the e-Daakhil portal for the Consumer Dispute Redressal Commission."
  },
  {
    question: "Is a verbal contract legally binding in India?",
    answer: "Yes, under Section 10 of the Indian Contract Act, 1872, oral/verbal contracts are legally valid and binding, provided they fulfill the essentials of a valid contract (free consent, lawful consideration, competent parties, etc.). However, verbal agreements are notoriously difficult to prove in court, which is why written, registered agreements are always recommended."
  },
  {
    question: "What are my rights if I am detained by the police for questioning?",
    answer: "If you are detained or stopped for questioning, you have the right to remain silent to avoid self-incrimination, the right to ask if you are being placed under arrest or are free to leave, and the right to consult a lawyer immediately. Police cannot physically coerce or abuse you under the guise of questioning."
  },
  {
    question: "How do I file an RTI if I do not know the exact officer's name?",
    answer: "You do not need to know the name of the Public Information Officer (PIO) to file an RTI. You can address your application to 'The Central Public Information Officer (CPIO)' or 'The Public Information Officer (PIO)' of the respective department or ministry. By law, if the department you sent it to doesn't hold the information, the PIO must forward it to the correct department within 5 days."
  }
];

export default function LegalGuideFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-3">
            Common Legal Q&amp;As
          </h2>
          <p className="text-sm text-gray-600">
            Highly searchable, practical answers to common everyday legal questions.
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
                <div className="px-6 pb-6 pt-2 text-sm text-gray-600 leading-relaxed text-justify">
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
