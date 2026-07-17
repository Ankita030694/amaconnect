"use client";

import React, { useState } from "react";

export default function RTIFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who is eligible to file an RTI application in India?",
      answer: "Any citizen of India can file an RTI application under the Act. Corporations, partnerships, or associations cannot file directly in their company name, but their individual officers or shareholders can file in their individual capacities as citizens.",
    },
    {
      question: "What is the official fee for filing an RTI application?",
      answer: "For central government departments, the standard application fee is ten rupees. However, state government departments may prescribe different fees according to their respective state rules. Citizens belonging to the below poverty line category are exempt from this fee if they upload valid proof.",
    },
    {
      question: "Can a public authority refuse to give information?",
      answer: "Yes, a public authority can refuse to disclose information if it falls under any of the exemptions listed in Section 8 or Section 9 of the Act, such as matters affecting national security, personal privacy, or third-party commercial confidence.",
    },
    {
      question: "What is the timeframe for receiving a response to an RTI query?",
      answer: "The standard statutory timeline is thirty days from the date the application is received by the Public Information Officer. If the query concerns the life or liberty of an individual, the response must be provided within forty-eight hours.",
    },
    {
      question: "What should I do if my RTI application is rejected?",
      answer: "If your application is rejected or if you receive no response within thirty days, you can file a First Appeal under Section 19(1) before the senior officer designated as the First Appellate Authority of that department within thirty days.",
    },
    {
      question: "What is a deemed refusal under the RTI Act?",
      answer: "If the Public Information Officer fails to provide a decision or reply within the statutory thirty-day timeline, it is legally treated as a deemed refusal. In this scenario, you are entitled to get the information free of cost during the appeal process.",
    },
    {
      question: "Is there any fee for filing an RTI appeal?",
      answer: "There is no appeal fee for filing first or second appeals before central government departments and the Central Information Commission. However, some state governments may prescribe nominal fees for filing appeals under their state-specific rules.",
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
            Find answers to the most common questions regarding the drafting, filing, payment, timelines, and appeals processes for RTI applications under Indian law.
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
