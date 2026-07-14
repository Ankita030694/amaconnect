"use client";

import React, { useState } from "react";

export const divorceFaqs = [
  {
    question: "How long does a mutual consent divorce take in India?",
    answer: "A mutual consent divorce typically takes between 6 to 18 months, depending on the court's calendar and scheduling. However, if the parties file a waiver application for the statutory six-month cooling-off period and the court grants it, the entire process can be concluded in as little as 1 to 2 months from the date of the first motion."
  },
  {
    question: "Can I file for divorce in India if the marriage took place abroad?",
    answer: "Yes, you can file for divorce in India even if the marriage was solemnized abroad, provided both parties are of Indian domicile or residence, or if the marriage was registered under the Special Marriage Act of 1954. The family court will have jurisdiction if the couple last resided together in India or if the respondent currently resides in India."
  },
  {
    question: "Is the six-month waiting period in mutual consent divorce mandatory?",
    answer: "No, the six-month waiting period is directory rather than mandatory. As established by the Supreme Court of India in the Amardeep Singh v. Harveen Kaur judgment, the family court can waive this cooling-off period if the marriage is irretrievably broken down, all settlement terms are finalized, and a minimum of one year of separation has passed."
  },
  {
    question: "What happens if one spouse withdraws consent during mutual consent divorce?",
    answer: "Either spouse can unilaterally withdraw their consent at any point before the final decree is passed. If one spouse withdraws consent, the petition for mutual consent divorce is dismissed by the court. In such a scenario, the other spouse's only remaining legal option is to file a fresh petition for a contested divorce on statutory grounds."
  },
  {
    question: "How is alimony calculated in a contested divorce?",
    answer: "Alimony in a contested divorce is decided by the court based on several factors, including the income and assets of both spouses, their respective age and health, their standard of living, and the reasonable needs of the dependent spouse. Typically, courts consider 20 to 25 percent of the husband's net monthly income as a reasonable benchmark for monthly maintenance."
  },
  {
    question: "Who gets custody of a child under five years of age?",
    answer: "Under Indian family laws, custody of a child under the age of five is ordinarily granted to the mother, as the mother is considered the natural guardian best suited for nurturing a child during their formative years. However, the father can still be granted custody if the court finds that the mother is mentally unfit, abusive, or unable to care for the child."
  },
  {
    question: "Can a husband claim maintenance from his wife under Indian law?",
    answer: "Yes, under Section 24 and Section 25 of the Hindu Marriage Act of 1955, either spouse can claim maintenance. A husband can claim maintenance and permanent alimony from his wife if he proves that he has no independent income for his support and that the wife has sufficient financial means to provide maintenance, though such orders are granted under strict scrutiny."
  }
];

export default function DivorceFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600">
            Find immediate, authoritative answers to the most common queries regarding divorce procedures, timelines, and legal rights in India.
          </p>
        </div>

        <div className="space-y-4">
          {divorceFaqs.map((faq, index) => (
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
