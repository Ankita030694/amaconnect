"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Who is eligible for free legal aid on AMAConnect?",
    answer: "Eligibility is determined by a strict triage system prioritizing marginalized communities (SC/ST), victims of domestic violence, individuals facing illegal eviction or termination, and those earning below the NALSA-defined income threshold (typically ₹3,00,000 annually)."
  },
  {
    question: "Do I have to pay any hidden fees or court costs?",
    answer: "The legal consultation, advice, and document drafting provided by our pro bono advocates are entirely free. However, any mandatory statutory fees required by the courts (e.g., court fee stamps or official filing fees) must generally be borne by the applicant, unless explicitly waived by the court."
  },
  {
    question: "How long does it take to get a pro bono advocate assigned?",
    answer: "For emergency cases involving domestic violence or illegal detention, our algorithm flags the application for immediate intervention (often within 2-4 hours). For non-emergency civil matters, matching usually occurs within 48 to 72 business hours."
  },
  {
    question: "Are the lawyers handling pro bono cases qualified?",
    answer: "Absolutely. All advocates on AMAConnect, including those volunteering their time, undergo the same rigorous Bar Council verification process. You are receiving counsel from fully licensed, practicing professionals, not paralegals or law students."
  },
  {
    question: "What if I cannot speak English or Hindi fluently?",
    answer: "Our platform supports multi-lingual matchmaking. When you fill out the application form, you can specify your preferred regional language (e.g., Tamil, Bengali, Marathi), and the system will explicitly route your case to a bilingual advocate fluent in that language."
  },
  {
    question: "Can the advocate represent me physically in court?",
    answer: "While the primary offering of the AMAConnect pro bono initiative is digital (virtual consultations, legal strategy, and document drafting), many of our advocates do choose to physically represent their pro bono clients in court if the jurisdiction aligns. This is at the advocate's discretion."
  },
  {
    question: "I am a lawyer. How do I join the 'Pledge 5' initiative?",
    answer: "If you already have a verified AMAConnect profile, you can navigate to the 'Pro Bono' tab on your dashboard and toggle your availability. You simply specify how many hours per month (minimum 5) you wish to dedicate, and the algorithm will begin routing qualified cases to you."
  },
  {
    question: "As a lawyer, can I choose which types of pro bono cases I accept?",
    answer: "Yes. When you pledge your hours, you select your preferred practice areas and jurisdictions. If you are a corporate lawyer, you might choose to help NGOs with compliance. If you practice family law, you can choose to assist domestic violence victims. You only receive cases relevant to your expertise."
  },
  {
    question: "Does participating in pro bono work violate Bar Council advertising rules?",
    answer: "No. Providing free legal aid to marginalized individuals is a fundamental ethical duty of the legal profession, heavily encouraged by the Bar Council of India. Our platform merely acts as a secure technological bridge connecting you to those in genuine need. It does not constitute commercial solicitation."
  },
  {
    question: "How do I prove my income eligibility if I work in the unorganized sector?",
    answer: "We understand that daily wage earners and unorganized sector workers may not have formal tax returns. In such cases, an affidavit, a BPL (Below Poverty Line) card, or a certificate from a local Tehsildar or recognized NGO coordinator is accepted as proof of income."
  },
  {
    question: "Is my personal information and case data kept confidential?",
    answer: "Yes. All communications, uploaded documents, and video consultations are protected by end-to-end encryption and strict attorney-client privilege. Your data is stored in a secure vault and is only accessible by the specific advocate assigned to your case."
  },
  {
    question: "What if the assigned advocate is unresponsive?",
    answer: "We actively monitor engagement metrics. If an assigned advocate fails to respond within the stipulated timeframe, the case is automatically recalled by the system and re-routed to the next available, qualified advocate to ensure you receive timely assistance."
  },
  {
    question: "Can NGOs or social workers apply on behalf of someone else?",
    answer: "Yes. We actively partner with grassroots NGOs and social workers. You can create an 'Advocate Ally' account to submit cases and upload documents on behalf of individuals who may not have smartphone access or digital literacy."
  },
  {
    question: "Do you handle criminal defense cases pro bono?",
    answer: "Yes, provided the applicant meets the strict eligibility criteria. We frequently match individuals who have been wrongfully accused or illegally detained with criminal defense advocates who specialize in bail applications and writ petitions."
  },
  {
    question: "Can I receive ongoing legal support after the initial consultation?",
    answer: "Yes. Once an advocate accepts your pro bono case, they will guide you through the necessary legal steps. The scope of ongoing support (drafting multiple notices, continued strategic advice) depends on the complexity of the case and the advocate's pledged bandwidth."
  }
];

export default function ProBonoFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        <div className="text-left mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600">
            Logistical details regarding eligibility, advocate participation, and data security.
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
                onClick={() => toggleFaq(index)}
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
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 pb-6 pt-2 text-sm text-gray-600 leading-relaxed">
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
