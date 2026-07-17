"use client";

import React, { useState } from "react";

export default function MNDFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What should I do immediately after receiving a municipal demolition notice?",
      answer: "You must draft a formal reply within the notice window (typically seven to fifteen days) and submit it to the commissioner, providing your sanctioned plans and completion certificates to show the construction is legal.",
    },
    {
      question: "What documents are needed to draft a reply to a demolition notice?",
      answer: "Essential documents include sanctioned building plans, municipal approvals, Occupancy or Completion Certificates, land title deeds, and utility tax receipts proving historical existence.",
    },
    {
      question: "How can I get a stay order against a demolition notice?",
      answer: "You can file a civil suit for permanent injunction and submit an urgent application under Order 39 Rules 1 and 2 of the CPC, proving a prima facie case, balance of convenience, and irreparable injury.",
    },
    {
      question: "What is a municipal appellate tribunal and how do I appeal to it?",
      answer: "A municipal appellate tribunal (such as ATMCD in Delhi) is a specialized administrative body that reviews demolition orders. Appeals must be filed within fifteen to thirty days of the final order.",
    },
    {
      question: "What are permissible compounding limits for building deviations?",
      answer: "Permissible compounding limits depend on local bylaws, usually permitting deviations of five to ten percent in setbacks, height, or floor area ratio (FAR), provided structural and public safety is not violated.",
    },
    {
      question: "How do I stop a neighbor from encroaching on my property?",
      answer: "First, file a demarcation application before the local Tehsildar to verify boundaries with a government surveyor. If encroachment is proved, file a civil suit for recovery of possession under the Specific Relief Act.",
    },
    {
      question: "Can local authorities demolish a building without serving a notice first?",
      answer: "No, the Supreme Court has ruled that demolitions without a show-cause notice, personal hearing, and a reasonable grace period (typically fifteen days) to seek stay orders violate due process of law.",
    },
    {
      question: "Can a municipal officer be held personally liable for an illegal demolition?",
      answer: "Yes, if an officer acts maliciously or in violation of an active court stay order, the court can direct that the financial damages awarded to the owner be recovered directly from the officer's personal salary.",
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
            Find answers to the most common questions regarding show-cause notices, stay order filings, compounding limits, encroachment, and officer liabilities.
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
