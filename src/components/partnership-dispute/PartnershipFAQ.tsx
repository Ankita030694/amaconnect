"use client";

import React, { useState } from "react";

export default function PartnershipFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is it legally mandatory to register a partnership deed in India?",
      answer: "No, registration of a partnership firm is optional under the Indian Partnership Act, 1932. However, unregistered firms cannot file lawsuits to enforce contracts or recover debts, making registration highly recommended for legal protection.",
    },
    {
      question: "What is mutual agency in a business partnership?",
      answer: "Mutual agency is the principle where every partner acts as both an agent and a principal for the firm. Any act done by a partner in the ordinary course of the firm business binds the entire partnership and all other partners.",
    },
    {
      question: "How does a co-founder agreement differ from a partnership deed?",
      answer: "A co-founder agreement is a pre-incorporation contract designed for modern startups that plan to incorporate as private limited companies, focusing on equity vesting and IP transfer, while a partnership deed governs traditional partnership firms.",
    },
    {
      question: "What is a reverse vesting schedule for co-founders?",
      answer: "A reverse vesting schedule is a mechanism where founders earn their equity over time, typically four years with a one-year cliff. If a founder leaves early, the company can buy back their unvested shares at face value.",
    },
    {
      question: "What is joint and several liability under partnership law?",
      answer: "Joint and several liability means that all partners are collectively and individually responsible for all debts of the firm. Creditors can recover the entire debt from any single partner, including attaching their personal assets.",
    },
    {
      question: "How can partners protect their personal assets from business liabilities?",
      answer: "Partners can protect their personal assets by incorporating the business as a Limited Liability Partnership (LLP) or a Private Limited Company, where partner liability is strictly limited to their agreed capital contributions.",
    },
    {
      question: "What is a multi-tiered dispute resolution clause?",
      answer: "A multi-tiered dispute clause is a contract provision that requires parties to follow a step-by-step process when conflicts arise, starting with negotiations, moving to structured mediation, and ending with binding arbitration.",
    },
    {
      question: "How is a partnership firm dissolved by a court order?",
      answer: "Under Section 44, a partner can file a suit in court seeking dissolution on grounds like partner misconduct, persistent breach of agreement, business losses, or management deadlock, leading to a court-supervised winding up.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 9
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Find answers to the most common questions regarding partnership registration, mutual agency, co-founder agreements, asset protection, and resolving partnership deadlocks in India.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-sm sm:text-base text-[#2D2219] hover:bg-gray-50/50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className={`text-[#D4AF37] text-xl transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                    ＋
                  </span>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-gray-50 p-6" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
