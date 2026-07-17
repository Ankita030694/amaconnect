"use client";

import React, { useState } from "react";

export default function EPFFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I withdraw my EPF balance online?",
      answer: "Members can log in to the EPFO Member Unified Portal using their UAN and password, complete Aadhaar verification, and submit withdrawal claims (Form 19, 10C, or 31) under the online services section.",
    },
    {
      question: "What is the difference between Form 19 and Form 10C?",
      answer: "Form 19 is filed to withdraw the accumulated balance in the provident fund (PF) account. Form 10C is filed to withdraw the accumulated balance in the pension fund, applicable only for service under ten years.",
    },
    {
      question: "Is it necessary to transfer my PF balance when changing jobs?",
      answer: "Yes, transferring your PF balance (using Form 13 online) maintains your continuous service history, which is essential to qualify for pension benefits and secure tax exemptions on eventual withdrawals.",
    },
    {
      question: "How is the EPS monthly pension calculated?",
      answer: "The monthly pension is calculated using the formula: pensionable salary (average of the last sixty months of basic salary, capped at fifteen thousand rupees) multiplied by service years, divided by seventy.",
    },
    {
      question: "Is EPF withdrawal taxable under Indian income tax rules?",
      answer: "Withdrawals after five years of continuous service are completely tax-free. Withdrawals made before completing five years of service are fully taxable and subject to TDS at ten percent.",
    },
    {
      question: "How do I file a complaint for delayed PF claims?",
      answer: "Members can register grievances online on the EPFiGMS portal (epfigms.gov.in) using their UAN, which must be resolved by the regional PF commissioner within fifteen days.",
    },
    {
      question: "What can I do if my employer deducts PF but does not deposit it?",
      answer: "You can file a complaint on the EPFiGMS portal. Since non-deposit constitutes criminal breach of trust, you can also file a complaint under Section 406 of the IPC at a police station and notify the Labor Commissioner.",
    },
    {
      question: "What is the EDLI scheme and who is eligible to claim it?",
      answer: "The Employees Deposit Linked Insurance (EDLI) is a group life insurance scheme. Nominees of active EPF members who die during service receive a payout between 2.5 lakh and 7 lakh rupees.",
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
            Find answers to the most common questions regarding online PF withdrawals, Form 13 transfers, EPS pension calculations, tax rules, and filing portal grievances.
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
