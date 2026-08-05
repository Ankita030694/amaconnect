"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Is a suicide note alone sufficient to convict someone under Section 306 IPC?",
    answer: "No, a suicide note is not automatic proof of guilt. The Supreme Court has ruled that a suicide note must be supported by independent, corroborative evidence. The prosecution must prove that the accused committed a positive act of instigation or intentional aid with the specific intent (mens rea) to push the deceased to commit suicide. Without this intent and corroboration, a conviction cannot stand on the note alone."
  },
  {
    question: "What is the difference between Section 306 IPC and Section 302 IPC?",
    answer: "Section 302 IPC (or the corresponding BNS section) deals with murder, where the accused directly and physically causes the death of another person with intent. Section 306 IPC deals with abetment of suicide, where the deceased takes their own life, but the accused actions, harassment, or instigation created a situation that led them to do so. In abetment, the physical act of ending life is performed by the deceased themselves."
  },
  {
    question: "Can I get anticipatory bail if I am named in a suicide note?",
    answer: "Yes, you can apply for anticipatory bail under Section 438 of the CrPC (or the corresponding BNSS section) before the Sessions Court or the High Court. Courts frequently grant anticipatory bail in abetment cases if the defense shows that the allegations are vague, arise from normal relationship disputes, or lack any intent to instigate. Getting anticipatory bail protects you from immediate arrest during the investigation."
  },
  {
    question: "How does the court define instigation in suicide abetment cases?",
    answer: "Instigation means to goad, urge, provoke, incite, or encourage a person to do an act. In suicide cases, the court requires proof that the accused actions were of such a severe nature that they active-incited the deceased to end their life. Normal arguments, demanding repayment of a loan, or filing a legal complaint do not amount to instigation under the law."
  },
  {
    question: "What are the legal options to quash an FIR filed under Section 306 IPC?",
    answer: "You can file a petition under Section 482 of the CrPC in the High Court to quash the FIR. To succeed, your petition must demonstrate that the allegations in the FIR, even if fully accepted, do not fulfill the legal requirements of abetment. If there is no proof of instigation, intent, or immediate connection between your actions and the suicide, the High Court can quash the FIR to prevent abuse of the law."
  },
  {
    question: "Does the Bharatiya Nyaya Sanhita (BNS) change the laws surrounding suicide abetment?",
    answer: "The BNS transition retains the core principles of suicide abetment under Section 108 of the new code, matching the old Section 306 IPC. The legal definitions of abetment, requirements for proving active instigation, and punishments remain identical. However, legal documents and petitions must cite the correct BNS or BNSS sections for cases registered under the new laws."
  },
  {
    question: "Can a spouse or in-laws be charged with abetment if a partner commits suicide?",
    answer: "Yes, family members are sometimes charged under Section 306 IPC, often alongside Section 498A (cruelty). However, courts apply the same strict standards to family disputes. The prosecution must prove that the cruelty was so severe and continuous that it directly drove the deceased to commit suicide, and that the accused had the intent to cause that result."
  },
  {
    question: "What happens if the suicide note is suspected to be forged or fabricated?",
    answer: "If there are doubts about the authenticity of the suicide note, the defense can request forensic analysis of the handwriting. The police are also required to send the document to a Government Forensic Science Laboratory (FSL) for verification. If the FSL report is inconclusive or indicates that the handwriting does not match the deceased, the prosecution case will be significantly weakened."
  }
];

export default function SuicideFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-3">
            Frequently Asked Questions on Suicide Notes &amp; Abetment Charges
          </h2>
          <p className="text-sm text-gray-600">
            Authoritative, practical answers to critical questions about Section 306 IPC and criminal defense.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
