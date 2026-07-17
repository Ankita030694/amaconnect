"use client";

import React, { useState } from "react";

export default function HospitalBillingFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can a hospital detain a patient for unpaid bills?",
      answer: "No, holding a patient hostage for outstanding dues is completely illegal and violates Article 21 (Personal Liberty) of the Constitution of India. Hospitals must release the patient and can seek civil recovery of bills.",
    },
    {
      question: "What is the law regarding withholding a deceased person body?",
      answer: "Retaining a dead body due to billing disputes is a criminal offense under the IPC and violates the right to a decent burial. Hospitals are legally bound to release the body immediately.",
    },
    {
      question: "How can I file a complaint for overcharging under the Clinical Establishments Act?",
      answer: "You can file a written complaint supported by billing receipts with the District Registering Authority, typically headed by the District Magistrate or Chief Medical Officer.",
    },
    {
      question: "Is a hospital required to treat an emergency patient without an advance deposit?",
      answer: "Yes, under the Supreme Court ruling in Parmanand Katara, hospitals must stabilize emergency patients immediately without waiting for financial deposits or administrative clearances.",
    },
    {
      question: "Can I approach the Consumer Commission for medical overcharging?",
      answer: "Yes, overcharging, package deviations, and double billing constitute deficiency of service and unfair trade practices, which can be filed under the Consumer Protection Act, 2019.",
    },
    {
      question: "What documents do I need to prove hospital overbilling?",
      answer: "You must compile itemized medical bills, payment receipts, doctor prescriptions, ready reckoner rates, and copy of diagnostic reports or daily nursing charts.",
    },
    {
      question: "Can I file a police complaint if a hospital detains my relative?",
      answer: "Yes, you can file a police complaint under Section 340 and 342 of the IPC for wrongful confinement, and police officers are required to secure the immediate release of the individual.",
    },
    {
      question: "How do I report a doctor for participating in fraudulent billing?",
      answer: "You can submit a written complaint detailing the misconduct and ethical violations to the State Medical Council where the doctor is registered, supported by an affidavit.",
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
            Find answers to the most common questions regarding patient detention, withholding deceased bodies, emergency stabilization rules, overbilling complaints, and medical council audits.
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
