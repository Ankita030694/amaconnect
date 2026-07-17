"use client";

import React, { useState } from "react";

export default function WillFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is it mandatory to register a Will in India?",
      answer: "No, under Section 18 of the Registration Act, 1908, registering a Will is completely optional. An unregistered Will is legally valid as long as it satisfies the requirements of signing and independent witness attestation.",
    },
    {
      question: "Can a Will be written on plain paper or in handwriting?",
      answer: "Yes, a Will can be written on plain paper and does not require stamp paper or notarization. A handwritten Will, known as a holographic Will, is fully valid in India if it is signed by the testator and properly witnessed.",
    },
    {
      question: "Who can be a witness to a Will?",
      answer: "Any competent adult of sound mind can be a witness. However, witnesses must be independent, meaning they must not be beneficiaries under the Will, nor should they be close relatives of a beneficiary. If a beneficiary witnesses the Will, their witness signature is valid but the gift made to them becomes void.",
    },
    {
      question: "What happens if a person dies without making a Will?",
      answer: "If a person dies intestate (without a Will), their estate is distributed among their legal heirs according to the personal succession laws of their religion, such as the Hindu Succession Act or Indian Succession Act. The family must apply for court certificates to claim the assets.",
    },
    {
      question: "What is the difference between a Will and a Codicil?",
      answer: "A Will is the primary document detailing the distribution of a person's entire estate after death. A Codicil is a supplementary document used to make minor updates or explanations to an existing Will without needing to rewrite the entire original document.",
    },
    {
      question: "When is probate of a Will mandatory under Indian law?",
      answer: "Probate is mandatory under Section 213 of the Indian Succession Act, 1925, if the Will was executed within Chennai, Kolkata, or Mumbai municipal limits, or if the immovable properties mentioned in the Will are located within these metropolitan areas.",
    },
    {
      question: "Can a Muslim bequeath all their property through a Will?",
      answer: "No, under Islamic personal law in India, a Muslim can only bequeath a maximum of one third of their net estate through a Will (the thirding rule). The remaining two thirds of the property must be distributed among compulsory heirs according to Quranic rules, unless all other heirs consent to a larger bequest.",
    },
    {
      question: "How can I challenge a Will in court?",
      answer: "A Will can be challenged in a civil court during probate proceedings on specific legal grounds. These include proving the testator lacked mental capacity, proving the signature was forged, or proving the Will was executed under undue influence, fraud, or coercion.",
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
            Find answers to the most common questions regarding drafting, executing, registering, and probating a Will in India under the Indian Succession Act.
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
