"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function ReraFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What projects are exempt from registering under RERA?",
      answer: "Projects where the total land area does not exceed five hundred square meters, or where the number of apartments proposed for development does not exceed eight units, are exempt from RERA registration. Additionally, projects meant solely for renovation, repair, or redevelopment that do not involve new advertising, marketing, or selling of units are also exempt."
    },
    {
      question: "Can a developer demand more than ten percent of the property cost as advance booking payment?",
      answer: "No. Under Section 13 of the RERA Act, a developer is strictly prohibited from accepting more than ten percent of the total cost of the apartment, plot, or building as an advance payment or application fee before entering into a written, registered Agreement for Sale with the homebuyer."
    },
    {
      question: "What is the difference between carpet area and super built-up area under RERA?",
      answer: "Under RERA, developers must sell units based on the carpet area, which is defined as the net usable floor area of an apartment, excluding the area covered by the external walls, service shafts, balcony, or open terrace, but including the area covered by the internal partition walls. Super built-up area is an unregulated calculation that includes common areas, lobby, elevator shafts, and stairs, which builders historically used to inflate the sale price."
    },
    {
      question: "What is the time limit within which a builder must rectify structural defects?",
      answer: "If any structural defect, workmanship defect, quality issue, or service deficiency is brought to the developer's attention within five years from the date of physical possession, the developer is legally obligated to rectify the defect without any extra charge to the buyer within thirty days of receiving the complaint."
    },
    {
      question: "Can a developer make changes to the layout or sanctioned plans after booking?",
      answer: "A developer cannot make any alterations to the sanctioned plans of an individual unit without the written consent of that specific buyer. Furthermore, any changes to the common areas or the overall project layout require the prior written consent of at least two-thirds of the total homebuyers in that project."
    },
    {
      question: "Can a homebuyer file complaints under both RERA and Consumer Court?",
      answer: "While the Supreme Court has clarified that the remedies under RERA and the Consumer Protection Act are concurrent, allowing buyers to choose either forum, filing in both forums simultaneously for the exact same relief is generally discouraged to avoid conflicting orders. Most experts recommend choosing the forum that best aligns with the primary relief needed, whether it is fast-track construction monitoring via RERA or damages for mental agony via Consumer Court."
    },
    {
      question: "How does RERA enforce its orders if a developer refuses to comply?",
      answer: "If a developer fails to comply with a RERA order or pay compensation, the RERA authority can enforce the order by recovering the outstanding amount from the developer as arrears of land revenue. The authority can also impose daily penalties or civil imprisonment for continued non-compliance, and in extreme cases, deregister the project to let buyers take over completion."
    }
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div>
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
          Section 9
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-6 tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-[#2D2219] hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-gray-400 font-normal ml-4 flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-gray-600 border-t border-gray-100 leading-relaxed bg-[#FDFBF7]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
