"use client";

import React, { useState } from "react";

export default function IPFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the difference between a trademark and a copyright?",
      answer: "A trademark protects commercial brand identity, including business names, brand logos, unique slogans, and product packaging to prevent customer confusion in the market. A copyright protects original creative expressions fixed in a physical or digital form, such as books, written articles, software source code, music, paintings, and video recordings.",
    },
    {
      question: "How long does a trademark registration remain valid in India?",
      answer: "A trademark registration is valid for ten years from the date of filing the application. It can be renewed indefinitely for additional ten year periods by submitting a renewal application along with the prescribed fee before the registration expires.",
    },
    {
      question: "Can I claim copyright protection automatically without registration?",
      answer: "Yes, copyright protection is automatic under the Berne Convention. It begins the moment your original work is created and saved in a tangible format. However, registering your copyright is highly recommended because the registration certificate serves as clear proof of ownership in court during infringement disputes.",
    },
    {
      question: "What is a Nice Class search and why is it necessary?",
      answer: "The Nice Classification is an international system that groups goods and services into forty-five different classes. Conducting a class search before filing a trademark is necessary to confirm that no other business has registered a similar name or logo in your specific market category, which prevents application rejections.",
    },
    {
      question: "How can I stop someone from using my brand name online?",
      answer: "You can start by drafting and serving a formal Cease and Desist notice to the infringing party. If they do not comply, you can file an online intellectual property takedown request with the platform hosting the infringement, or file an infringement suit in a commercial court to secure an injunction.",
    },
    {
      question: "Can software code be patented under Indian law?",
      answer: "Under Section 3k of the Patents Act, 1970, software per se or computer programs are not patentable on their own. However, if the software is combined with novel hardware or produces a specific technical effect that solves a mechanical problem, it may be eligible for patent protection.",
    },
    {
      question: "What is a provisional patent application and when should I file it?",
      answer: "A provisional patent is a temporary application filed to secure an early priority date while your invention is still being developed. It gives you twelve months to refine your invention and complete testing, after which you must file a complete specification to maintain your claim.",
    },
    {
      question: "What is the role of mediation in resolving intellectual property disputes?",
      answer: "Under Section 12A of the Commercial Courts Act, 2015, mediation is a mandatory pre-institution process for commercial disputes unless urgent interim relief is sought. It helps parties reach confidential, cost-effective settlements, such as brand licensing agreements, without going through a long court trial.",
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
            Find answers to the most common questions regarding trademarks, copyrights, patents, NDAs, and resolving infringement disputes under Indian IP laws.
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
