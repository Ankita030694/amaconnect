"use client";

import React, { useState } from "react";

export default function ARFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can a housing society (RWA) completely ban pets?",
      answer: "No, according to the Animal Welfare Board of India (AWBI) guidelines, housing societies cannot ban residents from keeping pets. Any such ban resolution is legally void.",
    },
    {
      question: "Can a society restrict my dog from using elevators or common areas?",
      answer: "No, RWAs cannot restrict pets from using lifts, corridors, or common areas. However, owners should keep their dogs on a leash and clean up any mess.",
    },
    {
      question: "What should I do if my RWA issues an arbitrary pet fine notice?",
      answer: "You should reply in writing citing the AWBI guidelines and the lack of RWA statutory authority to levy fines. If harassment continues, you can approach the Registrar of Societies.",
    },
    {
      question: "What are my rights as a street animal feeder?",
      answer: "Citizens have a constitutional right to feed community animals under Article 51A(g), and the Delhi High Court mandates RWAs to establish designated feeding spots.",
    },
    {
      question: "Is it legal to relocate stray dogs from their original territory?",
      answer: "No, under the Animal Birth Control Rules, stray dogs can only be captured for sterilization and vaccination by municipal teams, and must be released back to the exact same spot.",
    },
    {
      question: "How do I file a police complaint against animal cruelty?",
      answer: "You can submit a written complaint with photo or video evidence at the local police station to file an FIR under Sections 428 and 429 of the IPC.",
    },
    {
      question: "What are the penalties for harming or killing animals under the IPC?",
      answer: "Under Sections 428 and 429 of the IPC, maiming, poisoning, or killing animals is a criminal offense carrying jail terms between two to five years, along with fines.",
    },
    {
      question: "What is the liability of a pet owner if their pet bites someone?",
      answer: "The owner can face civil claims for medical expenses and damages for negligence, along with criminal charges under Section 289 of the IPC, carrying up to six months of jail.",
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
            Find answers to the most common questions regarding RWA pet bans, elevator access, stray feeding spots, relocation rules, cruelty FIRs, and owner negligence liabilities.
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
