"use client";

import React, { useState } from "react";

const trialFaqs = [
  {
    question: "What should I do if a witness goes hostile?",
    answer: "If a witness contradicts their previous statements or displays bias against your case, you must request the court's permission under Section 154 of the Indian Evidence Act to declare them hostile. Once granted, you can cross-examine your own witness, putting leading questions to them and pointing out their contradictions to impeach their credibility."
  },
  {
    question: "How do I handle a judge who seems impatient or skeptical?",
    answer: "Keep your composure and never argue with the judge. Focus on the core facts and law. Say: 'I appreciate Your Lordship's concern, and I will be brief. Please permit me to point out the single most relevant paragraph in the agreement (page X) which directly resolves this dispute.' Judges appreciate brevity and clear references."
  },
  {
    question: "Can I cite foreign court judgments during arguments?",
    answer: "Yes, you can cite judgments from common law jurisdictions like the UK, USA, Canada, or Australia. However, foreign judgments only have persuasive value and are not binding precedents under Article 141 of the Constitution. You should first establish your case using binding Supreme Court or jurisdictional High Court precedents."
  },
  {
    question: "What is the best way to handle a delay in the board/hearing?",
    answer: "Delays are common in courts. Use the wait time productively to review your notes, watch senior advocates argue other cases in the same courtroom, and observe the specific judge's questioning style and temperament. This will help you calibrate your presentation when your case is called."
  }
];

export default function TrialGuideFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-3">
            Common Trial Questions
          </h2>
          <p className="text-sm text-gray-600">
            Actionable answers to common challenges junior lawyers face inside the courtroom.
          </p>
        </div>

        <div className="space-y-4">
          {trialFaqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? "border-[#D4AF37] shadow-md" : "border-gray-200"}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-[#2D2219] text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? "bg-[#FDFBF7] text-[#D4AF37] rotate-180" : "bg-gray-50 text-gray-400"}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 pb-6 pt-2 text-sm text-gray-600 leading-relaxed text-justify">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
