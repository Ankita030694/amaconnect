"use client";

import React, { useState } from "react";

export default function InsuranceFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the first step I should take after my insurance claim is rejected?",
      answer: "The first step is to carefully read the rejection letter to identify the specific grounds and policy clauses cited by the insurer. You should then gather counter evidence and submit a formal written appeal to the Grievance Redressal Officer (GRO) of the insurance company.",
    },
    {
      question: "What is the role of the Grievance Redressal Officer (GRO)?",
      answer: "The GRO is a senior designated officer within the insurance company responsible for independently reviewing customer complaints. By law, they must respond to your appeal within fifteen days of receiving the grievance.",
    },
    {
      question: "What is the Bima Bharosa portal and how does it help?",
      answer: "Bima Bharosa is the official online grievance portal of the IRDAI. It allows policyholders to register complaints against insurers, automatically routes the issue to the insurance company, and lets the regulator monitor the resolution progress.",
    },
    {
      question: "Who is eligible to file a complaint with the Insurance Ombudsman?",
      answer: "Individual policyholders whose claim values do not exceed thirty lakh rupees can file a complaint with the Insurance Ombudsman. The complaint must be filed within one year of receiving the GRO rejection, and the matter must not be pending before any court.",
    },
    {
      question: "Do I need a lawyer to represent me before the Insurance Ombudsman?",
      answer: "No, you do not need a lawyer. In fact, legal representatives and advocates are not permitted to appear or appear on behalf of either party before the Insurance Ombudsman, making it a consumer friendly and cost free forum.",
    },
    {
      question: "What is the three-year rule under Section 45 of the Insurance Act?",
      answer: "Under Section 45, a life insurance policy cannot be called into question or rejected on any grounds, including non-disclosure or misstatement, after the expiry of three continuous years from the date of policy issuance or reinstatement.",
    },
    {
      question: "Under what circumstances can I file a complaint in the Consumer Commission?",
      answer: "You can file a complaint in the Consumer Commission if the insurance company commits a deficiency of service, such as wrongful rejection, unreasonable delays, or unfair trade practices. The commission can award the claim amount along with interest and compensation.",
    },
    {
      question: "How much time does the Insurance Ombudsman take to pass an award?",
      answer: "The Insurance Ombudsman is legally required to resolve the complaint and pass a written recommendation or binding award within three months of receiving all the documents from the policyholder.",
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
            Find answers to the most common questions regarding claim rejections, GRO appeals, IRDAI portal filings, the Insurance Ombudsman, and consumer court remedies under Indian laws.
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
