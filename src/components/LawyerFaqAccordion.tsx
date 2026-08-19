"use client";

import React, { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

export default function LawyerFaqAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-sm hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-base sm:text-lg text-[#2D2219] hover:bg-slate-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="pr-4">{faq.question}</span>
              <span
                className={`text-[#D4AF37] text-2xl transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
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
  );
}
