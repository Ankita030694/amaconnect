"use client";

import React, { useState } from "react";

export default function VehicleTheftFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much time do I have to inform the insurance company after vehicle theft?",
      answer: "You must inform the insurance company immediately, typically within twenty-four to forty-eight hours of the incident, as specified in your policy document. Delaying this notification can lead to claim rejection.",
    },
    {
      question: "What is the first legal step after discovering a vehicle theft?",
      answer: "The first step is to file a First Information Report (FIR) under Section 154 CrPC at the nearest police station having jurisdiction over the area where the theft occurred.",
    },
    {
      question: "Why does the insurance company require both original car keys?",
      answer: "Insurers require both original keys to verify that the vehicle was not left unlocked or unattended, and that the owner did not facilitate the theft through negligence, violating the reasonable care clause.",
    },
    {
      question: "What is an untraced report and why is it necessary?",
      answer: "An untraced report is the final report submitted by the police to the judicial magistrate under Section 173 CrPC. It confirms that the vehicle remains untraced despite all investigation efforts, which is mandatory to settle a theft claim.",
    },
    {
      question: "How is the settlement amount for a stolen vehicle calculated?",
      answer: "The settlement amount is based on the Insured Declared Value (IDV) listed in the policy schedule. It is the maximum sum insured, adjusted for the age and depreciation of the vehicle, and is paid without further depreciation deductions.",
    },
    {
      question: "What happens if my stolen vehicle is recovered after the claim is settled?",
      answer: "If the vehicle is recovered after the claim has been settled, the ownership of the vehicle legally transfers to the insurance company. The insurer takes possession and can auction it to recover their costs.",
    },
    {
      question: "Do I need to notify the RTO about the theft of my vehicle?",
      answer: "Yes, you are legally required to notify the RTO in writing within fourteen days of the theft. The RTO will record a theft endorsement in their database to prevent illegal transfer or re-registration.",
    },
    {
      question: "Are stolen car accessories covered under standard comprehensive insurance?",
      answer: "Standard accessories are covered under the main policy, subject to depreciation. However, aftermarket or non-standard electrical and non-electrical accessories are only covered if they were declared and an additional premium was paid.",
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
            Find answers to the most common questions regarding police FIRs, RTO filings, original keys, untraced reports, IDV calculations, and accessory theft in India.
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
