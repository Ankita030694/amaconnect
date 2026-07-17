"use client";

import React, { useState } from "react";

export default function MBFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the statutory maternity leave entitlement in India?",
      answer: "Under the Act, female employees are entitled to twenty-six weeks of fully paid maternity leave for the first two children, of which a maximum of eight weeks can be claimed before the expected delivery date.",
    },
    {
      question: "Does the Maternity Benefit Act apply to private offices?",
      answer: "Yes, the Act applies to all shops, factories, and commercial establishments in public and private sectors employing ten or more persons on any day of the preceding twelve months.",
    },
    {
      question: "What is the minimum working requirement to claim maternity leave?",
      answer: "The employee must have actually worked in the establishment for a minimum of eighty days in the twelve months immediately preceding the expected delivery date.",
    },
    {
      question: "Can an employer terminate a woman during her maternity leave?",
      answer: "No, Section 12 of the Act makes it unlawful to discharge, dismiss, or serve termination notices to a woman during her maternity leave. Any such termination is legally void.",
    },
    {
      question: "Are commissioning and adopting mothers eligible for maternity leave?",
      answer: "Yes, adopting mothers (adopting a child under three months) and commissioning biological mothers are entitled to twelve weeks of fully paid maternity leave from the date of child handover.",
    },
    {
      question: "What is the statutory medical bonus and when is it paid?",
      answer: "A statutory medical bonus of three thousand five hundred rupees is paid if the employer does not provide free pre-natal and post-natal care, paid along with the first leave salary.",
    },
    {
      question: "Is a company required to provide creche facilities?",
      answer: "Every company employing fifty or more employees is required to establish a creche facility within a reasonable distance and allow the mother four daily visits to it.",
    },
    {
      question: "How can I file a complaint if my employer denies maternity benefits?",
      answer: "You can file a formal complaint under Section 17 before the local Labor Inspector. The inspector can conduct inquiries, order payments, and prosecute the employer under Section 21.",
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
            Find answers to the most common questions regarding 26-week leave limits, working requirements, termination protections, creche facilities, and labor inspector complaints.
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
