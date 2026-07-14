"use client";

import React, { useState } from "react";

export const poshFaqs = [
  {
    question: "What is the definition of a workplace under the POSH Act?",
    answer: "Under the POSH Act, the definition of a workplace is highly expansive. It includes not only traditional offices, public and private sector organizations, and factories, but also any place visited by the employee arising out of or during the course of employment, including transportation provided by the employer, virtual meetings, offsite events, client locations, and work-related travel."
  },
  {
    question: "Who is considered an aggrieved woman under the Act?",
    answer: "An aggrieved woman is any female of any age, whether employed or not, who alleges to have been subjected to any act of sexual harassment by the respondent at a workplace. This includes permanent, temporary, ad-hoc, contractual, daily-wage employees, trainees, interns, apprentices, and even visitors or clients who experience harassment within the office premises."
  },
  {
    question: "Can a POSH complaint be filed against a person who is not an employee?",
    answer: "Yes, a complaint can be filed if the harassment occurred at the workplace or during the course of employment, even if the respondent is a third party, visitor, vendor, client, or contractor. The employer and the ICC are still legally obligated to investigate the incident and take appropriate action, including blocking the individual from the premises or assisting in filing a police complaint."
  },
  {
    question: "What is the statutory time limit to file a POSH complaint?",
    answer: "The statutory time limit to file a POSH complaint is three months from the date of the incident. In case of a series of incidents, it must be filed within three months from the date of the last incident. The ICC can extend this period by another three months if it is satisfied that exceptional circumstances prevented the complainant from filing on time, and must record its reasons in writing."
  },
  {
    question: "What is the difference between conciliation and a formal inquiry?",
    answer: "Conciliation is a voluntary, informal process initiated only at the complainant's written request to settle the dispute without monetary terms or formal investigation. A formal inquiry, on the other hand, is a structured administrative investigation conducted by the ICC to evaluate evidence, interview witnesses, and recommend disciplinary action or penalties if the harassment is proven."
  },
  {
    question: "Can a complainant or respondent be represented by a lawyer in a POSH inquiry?",
    answer: "No, under the POSH Rules, neither the complainant nor the respondent is allowed to bring a legal practitioner to represent them before the ICC during the inquiry proceedings. This rule is designed to keep the process administrative, collaborative, and non-adversarial, though both parties are allowed to consult lawyers outside the hearings for guidance."
  },
  {
    question: "What interim reliefs can a complainant request during the inquiry?",
    answer: "During the inquiry, the complainant can request the ICC for interim reliefs, which include transferring either her or the respondent to another department or branch, granting her paid leave for up to three months (in addition to her statutory leave), or restraining the respondent from evaluating her work performance or writing her annual appraisal report."
  },
  {
    question: "What are the penalties for an employer who fails to comply with the POSH Act?",
    answer: "If an employer fails to constitute an ICC, fails to take action on the ICC's recommendations, or fails to file the mandatory annual compliance report, they can be fined up to fifty thousand rupees. Repeat offenses can result in double the fine, and more severely, the cancellation, withdrawal, or non-renewal of their business license or registration."
  },
  {
    question: "Is the identity of the complainant protected under the POSH Act?",
    answer: "Yes, Section 16 of the POSH Act strictly prohibits the publication or disclosure of the identity, address, or details of the complainant, respondent, witnesses, or inquiry proceedings to the public or media. Any breach of this confidentiality rule by any member of the ICC or organization results in strict disciplinary action and a statutory penalty of five thousand rupees."
  }
];

export default function POSHFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600">
            Find immediate, authoritative answers to the most common queries regarding POSH Act compliance, internal committee structures, and worker safety rights in India.
          </p>
        </div>

        <div className="space-y-4">
          {poshFaqs.map((faq, index) => (
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
