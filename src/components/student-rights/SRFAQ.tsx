"use client";

import React, { useState } from "react";

export default function SRFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the scope of the Right to Education (RTE) Act?",
      answer: "Under Article 21A, the RTE Act guarantees free and compulsory education to all children aged six to fourteen years. It bans capitation fees, screening tests, and physical punishment in all schools.",
    },
    {
      question: "Does the 25% EWS reservation apply to all private schools?",
      answer: "Under Section 12(1)(c), the 25% reservation for economically weaker sections (EWS) applies to all private, unaided local schools at the entry level.",
    },
    {
      question: "How do I report a ragging incident on campus?",
      answer: "You can report the incident to your college Anti-Ragging Committee, submit an anonymous complaint, or call the UGC national helpline at 1800-180-5522.",
    },
    {
      question: "What is the penalty for ragging in India?",
      answer: "Accused students face suspension, hostel expulsion, rustication, and criminal prosecution under the IPC, leading to imprisonment and a permanent ban on admissions.",
    },
    {
      question: "Can a school arbitrarily increase its fees without approval?",
      answer: "No, private schools must submit fee proposals to the state Fee Regulatory Committee. Hikes implemented without committee approval can be challenged in High Courts.",
    },
    {
      question: "Can a university withhold my degree certificate over a fee dispute?",
      answer: "No, courts have ruled that universities cannot hold a student's degree hostage over fee disputes, as it affects the student's career prospects.",
    },
    {
      question: "What are my rights if accused of using unfair means (UMC) in an exam?",
      answer: "You are entitled to a copy of the invigilator's report, access to collected evidence, and a personal hearing to defend yourself before the UMC committee.",
    },
    {
      question: "How can I challenge an arbitrary college suspension or rustication?",
      answer: "You can file a writ petition under Article 226 before the High Court, seeking to quash the order for violating natural justice and obtain an interim stay order.",
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
            Find answers to the most common questions regarding RTE admissions, anti-ragging guidelines, school fee disputes, degree validations, and High Court writ petitions.
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
