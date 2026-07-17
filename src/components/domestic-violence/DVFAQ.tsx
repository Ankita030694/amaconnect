"use client";

import React, { useState } from "react";

export default function DVFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What qualifies as domestic violence under Indian law?",
      answer: "Under the Domestic Violence Act, 2005, domestic violence includes physical injury or assault, verbal insults, emotional harassment, sexual abuse, and financial withholding of money or family resources.",
    },
    {
      question: "Can a live-in partner seek protection under the Domestic Violence Act?",
      answer: "Yes, the Supreme Court of India has ruled that live in relationships that resemble marriage are covered under the Act, allowing partners to claim maintenance, residency, and protection orders.",
    },
    {
      question: "Who can a woman file a domestic violence complaint against?",
      answer: "A woman can file a complaint against any adult male with whom she has shared a domestic relationship, as well as his male and female relatives, such as mothers in law or sisters in law.",
    },
    {
      question: "What is a Domestic Incident Report (DIR) and who files it?",
      answer: "A DIR is an official record of domestic abuse. It is drafted using Form one by a Protection Officer, NGO Service Provider, or CAW police cell, and is submitted to the magistrate court.",
    },
    {
      question: "Can a husband evict his wife from the shared household during a dispute?",
      answer: "No, under Section 17 of the Act, every woman has a right to reside in the shared household regardless of ownership. She cannot be evicted except through a court-approved legal process.",
    },
    {
      question: "What is the penalty for breaching a court protection order?",
      answer: "Breaching a protection order is a cognizable and non-bailable offense under Section 31 of the Act. It carries a penalty of up to one year of imprisonment, a fine of twenty thousand rupees, or both.",
    },
    {
      question: "What is Streedhan and does the husband have rights over it?",
      answer: "Streedhan constitutes all gifts, jewelry, cash, and property presented to a woman before, during, or after marriage. It belongs solely to the woman, and the husband has no ownership rights over it.",
    },
    {
      question: "How does Section 498A differ from the Domestic Violence Act?",
      answer: "Section 498A of the IPC is a criminal law focusing on punishing the husband or relatives with jail terms for cruelty. The Domestic Violence Act is a civil law focusing on providing emergency reliefs, housing, custody, and support.",
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
            Find answers to the most common questions regarding domestic violence complaints, shared household rights, maintenance, and Streedhan recovery under Indian laws.
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
