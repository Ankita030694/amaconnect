"use client";

import React, { useState } from "react";

export default function AadhaarPrivacyFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I lock my Aadhaar biometrics?",
      answer: "You can lock your Aadhaar biometrics online by logging into the official UIDAI myAadhaar portal or using the mAadhaar mobile application. Go to the Lock or Unlock Biometrics option and confirm.",
    },
    {
      question: "What is the benefit of locking Aadhaar biometrics?",
      answer: "Locking biometrics prevents any unauthorized fingerprint or iris authentication requests from succeeding, protecting you against AEPS banking scams and identity theft.",
    },
    {
      question: "Can private companies mandate Aadhaar for their services?",
      answer: "No, under the Supreme Court Puttaswamy ruling, private entities like banks, telecom operators, and schools cannot mandate Aadhaar. It is voluntary, and they must accept alternative OVDs.",
    },
    {
      question: "What is a Virtual ID (VID) and how is it used?",
      answer: "A Virtual ID is a temporary sixteen digit number mapped to your Aadhaar that allows you to perform e-KYC without sharing your physical Aadhaar number, protecting your details.",
    },
    {
      question: "What is a Masked Aadhaar card?",
      answer: "A Masked Aadhaar card is an officially valid card format where the first eight digits of your Aadhaar number are replaced with asterisks, concealing your full number during physical verification.",
    },
    {
      question: "Can my Aadhaar be deactivated or suspended?",
      answer: "Yes, the UIDAI can deactivate or suspend an Aadhaar number under specific rules if there are duplicate enrollments, document errors, or low quality biometrics.",
    },
    {
      question: "How can I resolve fingerprint matching failures for pensioners?",
      answer: "You can update your biometrics at an Aadhaar center. If failures persist, Section 7 mandates fallback options like mobile OTPs or physical validation to prevent denial of benefits.",
    },
    {
      question: "Under what laws can I claim compensation for Aadhaar leaks?",
      answer: "You can claim compensation under Section 43A of the Information Technology Act, 2000, or approach the Consumer Disputes Redressal Commission for deficiency in banking services.",
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
            Find answers to the most common questions regarding biometric locking, Virtual IDs, Masked Aadhaars, mandatory usages, and deactivation remedies.
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
