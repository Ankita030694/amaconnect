"use client";

import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function ChequeFAQ({ id }: { id?: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is the validity period of a cheque under Indian banking rules?",
      answer: "Under Reserve Bank of India directives, a cheque is valid for exactly three months from the date written on its face. It must be presented to the bank for clearing within this three month window, otherwise it becomes stale and legally invalid for presentation."
    },
    {
      question: "Can a legal notice under Section 138 be sent via email or WhatsApp?",
      answer: "Yes, recent judicial rulings have recognized electronic delivery via email or WhatsApp as valid service, provided delivery reports or read receipts are generated and presented in court. However, it is highly recommended to send it via Registered Post AD or Speed Post to ensure robust proof of service."
    },
    {
      question: "What is the maximum penalty if a cheque bounce case is proven against the accused?",
      answer: "If convicted under Section 138 of the Negotiable Instruments Act, the accused can be sentenced to imprisonment for a term extending up to two years, or fined an amount that can go up to double the value of the bounced cheque, or both."
    },
    {
      question: "Is a cheque bounce case bailable, and does the accused have to attend every hearing?",
      answer: "Yes, Section 138 is a bailable offense, meaning the accused is entitled to bail as a matter of right upon appearing in court and executing a bail bond. The accused must attend court hearings, though they can apply for a permanent exemption from personal appearance under Section 205 of the Code of Criminal Procedure under specific grounds."
    },
    {
      question: "Can a cheque bounce case be filed against a company and its directors?",
      answer: "Yes, under Section 141 of the Negotiable Instruments Act, if the cheque was issued by a company, the company itself is the primary accused. The directors who were in charge of and responsible for the conduct of the business at the time of the offense can also be prosecuted as co-accused."
    },
    {
      question: "Can a complaint be filed if the cheque was given as a gift or charity?",
      answer: "No, a Section 138 complaint can only be initiated if the cheque was issued for the discharge of a legally enforceable debt or other liability. Cheques issued as gifts, charity, donations, or without any underlying consideration do not attract criminal liability under this section."
    },
    {
      question: "What is the timeline to file a Section 138 complaint after the notice period expires?",
      answer: "The payee must file the criminal complaint in court within thirty days from the date the cause of action arises. The cause of action arises immediately on the sixteenth day from the date the drawer received the demand notice (giving them fifteen days to pay)."
    },
    {
      question: "What is interim compensation, and how can the complainant apply for it?",
      answer: "Under Section 143A of the NI Act, the trial court can direct the accused to pay up to twenty percent of the cheque amount as interim compensation. The complainant can apply for this after charges are framed or when the accused enters a plea of not guilty during the summons stage."
    },
    {
      question: "What happens if the complainant misses the 30-day timeline to file the court complaint?",
      answer: "If the thirty day window is missed, the payee must file a Condonation of Delay application under Section 142(1)(b) of the NI Act. The court will only condone the delay if the complainant satisfies the court that they had sufficient and genuine cause for not filing the complaint within the statutory period."
    }
  ];

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
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
            Get answers to the most common queries regarding cheque bounce complaints, notices, timelines, and trial procedures under Section 138 of the Negotiable Instruments Act.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="border border-gray-150 rounded-2xl overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-sm sm:text-base text-[#2D2219] hover:bg-[#FAF9F5] transition-all"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className={`text-[#D4AF37] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </span>
                </button>
                <div 
                  className={`transition-all duration-350 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
                  } overflow-hidden`}
                >
                  <p className="p-5 text-xs sm:text-sm text-gray-600 leading-relaxed text-justify bg-[#FAF9F5]/40">
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
