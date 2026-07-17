"use client";

import React, { useState } from "react";

export default function PNFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What qualifies as a public nuisance under Indian law?",
      answer: "Under Section 268 of the IPC, a public nuisance is any act or illegal omission that causes common injury, danger, annoyance, or obstruction to the public or local residents in general.",
    },
    {
      question: "What are the permissible noise limits in residential areas?",
      answer: "Under the Noise Pollution Rules 2000, residential zones have a permissible noise limit of fifty-five decibels (dB) during the day (6 AM to 10 PM) and forty-five dB at night (10 PM to 6 AM).",
    },
    {
      question: "How can I stop a neighbor or vendor from playing loud music late at night?",
      answer: "You can call the police emergency helpline (112 or 100) to report the nighttime loudspeaker violation. The police have the authority to stop the music, seize the sound equipment, and register FIRs.",
    },
    {
      question: "What is Section 133 of the CrPC and how does it help?",
      answer: "Section 133 of the CrPC allows residents to file a petition before the local Sub-Divisional Magistrate (SDM), who can issue conditional orders to quickly stop or remove public obstructions or hazards.",
    },
    {
      question: "How do I file a complaint against a polluting factory in my area?",
      answer: "You can submit a complaint online or via post to your State Pollution Control Board under the Air Act 1981 or Water Act 1974. The board can inspect, seal the factory, or cut off utility supplies.",
    },
    {
      question: "What is the penalty for violating noise pollution rules?",
      answer: "Violations under the Environment Protection Act carry criminal penalties of up to five years of imprisonment, a fine of up to one lakh rupees, or both, along with immediate seizure of equipment.",
    },
    {
      question: "Can I file a petition directly in the National Green Tribunal (NGT)?",
      answer: "Yes, any affected citizen or NGO can file a petition in the NGT under Section 14 or 15 of the NGT Act for substantial questions of environmental law and seek financial compensation for damages.",
    },
    {
      question: "What should I include in a legal notice for public nuisance?",
      answer: "The notice should detail the siphoning of garbage or noise disturbances, dates/times, health impacts, specific violated environmental laws, and set a compliance deadline (seven to fifteen days).",
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
            Find answers to the most common questions regarding decibel limits, police emergency calls, SDM petitions, pollution board closedowns, and NGT claims.
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
