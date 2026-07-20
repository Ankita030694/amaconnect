"use client";

import React, { useState } from "react";

export default function NDPSDefenseFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the difference between small and commercial quantities under the NDPS Act?",
      answer: "The NDPS Act grades offenses by quantity. Small quantities carry up to one year of jail and easier bail, while commercial quantities attract a mandatory minimum of ten years of jail and very strict bail conditions.",
    },
    {
      question: "What are my rights during a personal physical search under Section 50?",
      answer: "Under Section 50, you have a mandatory right to be searched in the presence of the nearest Gazetted Officer or a Judicial Magistrate. The officer must inform you of this right before searching.",
    },
    {
      question: "Is a confession made to a police officer admissible under the NDPS Act?",
      answer: "No, under the Supreme Court Tofan Singh judgment, confessions recorded by police or officers of specialized departments like the NCB under Section 67 are inadmissible as evidence.",
    },
    {
      question: "How hard is it to get bail in commercial quantity cases?",
      answer: "Very hard, because Section 37 imposes dual conditions: the court must believe you are not guilty and are unlikely to commit any offense while on bail, shifting the burden onto the defense.",
    },
    {
      question: "What is the de-addiction rehabilitation benefit under Section 64A?",
      answer: "Under Section 64A, addicts charged with small quantity offenses or consumption can get immunity from prosecution if they voluntarily undergo treatment at a recognized rehab center.",
    },
    {
      question: "What is Section 57 of the NDPS Act?",
      answer: "Section 57 requires officers to submit a detailed report of any arrest or seizure to their official superior within forty-eight hours, ensuring administrative tracking and preventing post-facto changes.",
    },
    {
      question: "Can the government freeze or seize my assets under the NDPS Act?",
      answer: "Yes, under Chapter VA, the government can forfeit assets traced to illicit drug trafficking if the owner cannot prove they were bought using legitimate, legally earned income.",
    },
    {
      question: "How must samples be drawn from seized drugs to ensure validity?",
      answer: "Under Section 52A, police must present the seized drugs before a Judicial Magistrate as soon as possible to officially inventory the contraband, take photographs, and draw representative samples.",
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
            Find answers to the most common questions regarding drug quantities, Section 50 search safeguards, bail procedures, confessions admissibility, and rehabilitation pathways.
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
