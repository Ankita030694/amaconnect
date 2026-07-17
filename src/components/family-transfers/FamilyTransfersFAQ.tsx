"use client";

import React, { useState } from "react";

export default function FamilyTransfersFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is a gift deed legally valid without registration?",
      answer: "No, under Section 123 of the Transfer of Property Act and Section 17 of the Registration Act, registration of a gift deed involving immovable property is mandatory. Unregistered gift deeds hold no legal validity in court.",
    },
    {
      question: "What is the main difference between a gift deed and a relinquishment deed?",
      answer: "A gift deed transfers property ownership voluntarily without consideration to any individual, whereas a relinquishment deed is used specifically to surrender shares in ancestral or jointly owned property to existing co-owners.",
    },
    {
      question: "Is there any income tax on gifts received from close family members?",
      answer: "No, under Section 56(2)(x) of the Income Tax Act, 1961, gifts of cash, gold, or property received from defined close relatives (like parents, spouses, or siblings) are completely exempt from income tax.",
    },
    {
      question: "Can a registered gift deed be revoked or canceled?",
      answer: "A registered gift deed is generally irrevocable unless there is an express revocation clause in the deed itself, or if the donor proves in court that the gift was obtained through fraud, coercion, or undue influence.",
    },
    {
      question: "What is stamp duty for gifting property to a spouse or child?",
      answer: "Stamp duty varies by state. Many states in India offer significant concessions for close relatives; for example, Maharashtra charges a nominal stamp duty of two hundred rupees for gifting property to a spouse or child.",
    },
    {
      question: "Can a minor receive property as a gift?",
      answer: "Yes, a minor can receive property as a gift. A natural or legal guardian must accept the gift on behalf of the minor in the gift deed and manage the property in trust until the minor reaches eighteen.",
    },
    {
      question: "Can a guardian sell a minor property?",
      answer: "No, a natural guardian cannot sell, mortgage, or exchange a minor immovable property without securing prior permission from the local district court, showing that the sale is for the benefit of the minor.",
    },
    {
      question: "When does a family settlement agreement require registration?",
      answer: "A family settlement agreement requires registration if it creates, assigns, or extinguishes rights in an immovable property. If it merely records a past verbal family compromise, it does not require registration.",
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
            Find answers to the most common questions regarding gift deeds, relinquishment deeds, partition deeds, tax exemptions, and minor property transfers in India.
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
