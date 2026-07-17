"use client";

import React, { useState } from "react";

export default function SCMFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who is considered a senior citizen under the 2007 Act?",
      answer: "Under the Act, a senior citizen is any Indian citizen aged sixty years or above. A parent includes biological, adoptive, or stepfathers and stepmothers, regardless of whether they have reached sixty years of age.",
    },
    {
      question: "Can a stepmother or stepfather claim maintenance from stepchildren?",
      answer: "Yes, the definition of parent under the Act explicitly includes stepmothers and stepfathers, allowing them to claim maintenance provided they do not have independent sources of income.",
    },
    {
      question: "Is it mandatory to hire a lawyer to file a claim in the Maintenance Tribunal?",
      answer: "No, Section 17 of the Act bars lawyers from representing parties before the tribunal to keep the process simple. Complainants are assisted by state appointed Maintenance Advocates.",
    },
    {
      question: "What is the maximum monthly maintenance amount a tribunal can award?",
      answer: "The national statutory cap under Section 9 is ten thousand rupees per month, though several states have amended their rules or issued court judgments to award higher amounts to meet real medical costs.",
    },
    {
      question: "Can a parent revoke a property gift deed if the child abandons them?",
      answer: "Yes, under Section 23 of the Act, if a senior citizen transfers property on the condition of receiving care, and the child fails to provide it, the tribunal can declare the transfer null and void.",
    },
    {
      question: "How long does a tribunal take to resolve a maintenance claim?",
      answer: "The Act mandates that the Maintenance Tribunal must resolve the petition within ninety days from the date of serving the notice to the children, though it can extend by thirty days in rare cases.",
    },
    {
      question: "Can a parent file under both Section 125 CrPC and the 2007 Act?",
      answer: "A parent can choose either route but cannot claim double maintenance for the same expenses. They can file under the 2007 Act for speed and property rights, or under Section 125 for criminal enforcement.",
    },
    {
      question: "What is the penalty if children refuse to pay the ordered maintenance?",
      answer: "If children refuse to pay, the tribunal can issue warrants to attach their salaries or seize assets. Under Section 24, defaulting children can also face imprisonment for up to one month.",
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
            Find answers to the most common questions regarding Maintenance Tribunals, monthly allowances, gift deed revocations, and safety helpline support under Indian laws.
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
