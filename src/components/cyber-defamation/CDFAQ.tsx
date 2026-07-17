"use client";

import React, { useState } from "react";

export default function CDFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What qualifies as cyber defamation in India?",
      answer: "Cyber defamation is the act of publishing false, derogatory, or malicious statements about an individual or business on digital platforms (such as social media, blogs, or forums) with the clear intent to damage their reputation.",
    },
    {
      question: "Can a person be arrested for posting defamatory content online?",
      answer: "Yes, criminal defamation is a punishable offense under Section 500 of the IPC (now corresponding BNS sections). The offender can be arrested, and face up to two years of imprisonment, a fine, or both.",
    },
    {
      question: "How do I file a complaint for online harassment?",
      answer: "Complainants can register their case online on the National Cyber Crime Reporting Portal (cybercrime.gov.in) or visit their local police station to file an FIR, submitting screenshots and URLs of the harassment.",
    },
    {
      question: "What is a Section 65B certificate and why is it required?",
      answer: "A Section 65B certificate under the Indian Evidence Act is a mandatory signed declaration certifying that digital evidence (screenshots, printouts, or backups) is authentic and has not been altered, making it admissible in court.",
    },
    {
      question: "How can I identify the person behind an anonymous online account?",
      answer: "You can file a cyber cell complaint. The police have the authority under Section 91 of the CrPC to direct platforms to disclose IP logs, sign up emails, and phone numbers associated with the account.",
    },
    {
      question: "Are social media platforms liable for defamatory comments posted by users?",
      answer: "Under Section 79 of the IT Act, platforms enjoy safe harbor protection and are not liable for user posts, provided they comply with government rules and remove the content once served a court order.",
    },
    {
      question: "Can I get a court order to block defamatory links immediately?",
      answer: "Yes, you can file a civil suit to obtain a temporary injunction directing the removal of the content. You can also secure John Doe orders to block defamatory links across all internet providers.",
    },
    {
      question: "What is cyberstalking and what is the penalty under Indian law?",
      answer: "Cyberstalking is the unauthorized digital monitoring of a woman's internet activities or emails under Section 354D of the IPC. A first conviction carries a penalty of up to three years of simple imprisonment.",
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
            Find answers to the most common questions regarding cyber defamation, online harassment, digital evidence admissibility, and platform liability under Indian laws.
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
