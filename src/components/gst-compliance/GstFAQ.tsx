"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Who is mandatorily required to register for GST in India?",
    answer: "Under Section 22 and 24 of the CGST Act, 2017, businesses supplying goods with an aggregate annual turnover exceeding forty lakh rupees (twenty lakh rupees for services) must register. Registration is mandatory regardless of turnover for inter-state suppliers, e-commerce operators, and reverse charge taxpayers."
  },
  {
    question: "What are the key eligibility conditions for claiming Input Tax Credit (ITC)?",
    answer: "Under Section 16, a registered taxpayer can claim Input Tax Credit if they hold a valid tax invoice, have received the goods or services, the supplier has deposited the tax with the government, and the taxpayer has filed returns in Form GSTR-3B."
  },
  {
    question: "What is a blocked credit under Section 17(5) of the CGST Act?",
    answer: "Blocked credits under Section 17(5) are specific business purchases ineligible for tax credit. Examples include motor vehicles for passenger transport, outdoor catering, beauty treatments, club memberships, and works contracts for constructing immovable property (except plant and machinery)."
  },
  {
    question: "How is a GST audit conducted by department officials under Section 65?",
    answer: "Under Section 65, authorized officers conduct audits at the taxpayer's place of business or office. Taxpayers receive fifteen working days notice via Form GST ADT-01, and the audit must finish within three months, with potential extensions up to six months."
  },
  {
    question: "How should a taxpayer respond to a GST Show Cause Notice (SCN) for mismatches?",
    answer: "A taxpayer should verify discrepancies, compile matching purchase registers, and file a point-by-point written reply online in Form GST DRC-06 within thirty days. It is critical to request a personal hearing to present arguments before adverse final orders."
  },
  {
    question: "What is the time limit for filing an online GST appeal?",
    answer: "Under Section 107 of the CGST Act, an appeal before the First Appellate Authority must be filed online using Form GST APL-01 within three months from the date of communication of the order, along with a ten percent pre-deposit."
  },
  {
    question: "What are the consequences of non-compliance or tax evasion under GST law?",
    answer: "Non-compliance attracts penalties under Section 122 of ten thousand rupees or the tax evaded (whichever is higher). For serious evasion exceeding five crore rupees, Section 132 provides for non-bailable arrest and prison sentences of up to five years."
  },
  {
    question: "How can businesses avoid GST litigation and audit disputes?",
    answer: "Businesses can avoid disputes by conducting monthly reconciliations between purchase registers and Form GSTR-2B, executing due diligence on vendor compliance, retaining accounts for seventy-two months under Section 35 and 36, and seeking timely counsel from tax advocates."
  }
];

export default function GstFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-3">
            Frequently Asked Questions on GST Compliance and Disputes
          </h2>
          <p className="text-sm text-gray-600">
            Highly searchable, practical answers to common GST compliance and litigation questions.
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
