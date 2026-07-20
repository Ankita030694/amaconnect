"use client";

import React, { useState } from "react";

export default function FDFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What laws govern franchise businesses in India?",
      answer: "In the absence of a specific franchise law, these relations are governed by the Indian Contract Act 1872, the Trade Marks Act 1999, the Competition Act 2002, and specific tax laws.",
    },
    {
      question: "What is a Franchise Disclosure Document (FDD)?",
      answer: "An FDD is an informational document containing detail on the franchisor's promoters, litigation records, audit statements, and store closure history, provided before signing the contract.",
    },
    {
      question: "Can a franchisor open another outlet near my existing store?",
      answer: "Only if the agreement lacks an exclusivity clause. A well-drafted contract defines a protected radius (such as three to five kilometers) where competing outlets are banned.",
    },
    {
      question: "What rights do I have if a franchisor misrepresents costs in the FDD?",
      answer: "You can claim that the contract was induced by fraud or misrepresentation under Section 19 of the Contract Act, allowing you to void the agreement and seek damages.",
    },
    {
      question: "How are franchise royalties calculated and audited?",
      answer: "Royalties are usually calculated as a percentage of gross sales (typically four to eight percent) and audited through inspections of POS logs and GST tax returns.",
    },
    {
      question: "Can a franchisor control my supply chain and vendors?",
      answer: "Yes, mandatory vendor purchase clauses are standard, but the prices cannot be inflated to predatory levels, which violates Competition Commission of India (CCI) rules.",
    },
    {
      question: "What is wrongful termination of a franchise agreement?",
      answer: "Wrongful termination occurs when a party terminates the agreement without grounds, or fails to offer the contractually mandated cure notice period (typically thirty days) for breaches.",
    },
    {
      question: "Why should I include an arbitration clause in the agreement?",
      answer: "Arbitration ensures fast, private, and confidential dispute resolution. Incorporating Section 29B fast-track procedures requires the arbitrator to pass a binding award within six months.",
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
            Find answers to the most common questions regarding Contract Act applications, FDD auditing, territorial exclusivity, marketing funds, supply chains, and fast-track arbitrations.
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
