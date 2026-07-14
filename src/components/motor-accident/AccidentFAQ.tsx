"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface AccidentFAQProps {
  id: string;
}

export default function AccidentFAQ({ id }: AccidentFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is the time limit to file a motor accident claim in India?",
      answer: "Under the amended Section 166(3) of the Motor Vehicles Act, which came into force on April 1, 2022, a claim petition must be filed within a strict time limit of six months from the date of the accident. Prior to this amendment, there was no limitation period. Since the new amendment does not allow for condonation of delay, failing to file within six months will cause your right to claim compensation to be permanently lost."
    },
    {
      question: "Can I claim compensation if the offending vehicle was not insured?",
      answer: "Yes, you can still claim compensation even if the offending vehicle did not have insurance. Under the principle of vicarious liability, the owner of the vehicle is personally liable to pay the award determined by the tribunal. In such cases, the tribunal will direct the owner to pay the amount. If the owner fails to pay, the tribunal can issue orders to attach and sell their property to recover the compensation."
    },
    {
      question: "Who can file a claim in case of the victim's death?",
      answer: "In the event of a fatal accident, the claim petition can be filed by any or all of the legal representatives of the deceased victim. This includes the spouse, parents, and children of the deceased. Additionally, an agent duly authorized by the deceased person's legal representatives can also file the petition on their behalf."
    },
    {
      question: "How is the multiplier selected in motor accident claims?",
      answer: "The multiplier is selected based on the age of the victim at the time of the accident, as established by the Supreme Court of India in the Sarla Verma judgment. The multiplier ranges from a maximum of 18 (for victims aged 15 to 25 years) down to 5 (for victims aged over 65 years). It is a key factor in calculating the total loss of dependency."
    },
    {
      question: "What is the difference between Section 164 and Section 166 of the Motor Vehicles Act?",
      answer: "Section 164 deals with no-fault liability, where the claimant receives a fixed compensation (five lakh rupees for death, two and a half lakh rupees for grievous hurt) without needing to prove the driver's negligence. Section 166 is a fault-based claim, where the claimant must prove negligence to seek unlimited, actual-loss-based compensation. Claimants can choose the route that best suits their evidence and urgency."
    },
    {
      question: "Can a claim petition be filed if the driver did not have a valid license?",
      answer: "Yes, you can file a claim. If the driver of the offending vehicle did not possess a valid license, it constitutes a breach of the insurance policy conditions. In such cases, the tribunal usually applies the 'pay and recover' principle, directing the insurance company to pay the compensation to the victim first, and then allowing the insurer to recover the amount from the vehicle owner."
    },
    {
      question: "Where should a motor accident claim petition be filed?",
      answer: "A motor accident claim petition can be filed before the Motor Accident Claims Tribunal (MACT) in any of the following jurisdictions: the area where the accident occurred, the area where the claimant resides or carries on business, or the area where the owner or driver of the offending vehicle resides. This provides maximum convenience to the victim."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="py-8 scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2219] mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-100 rounded-2xl overflow-hidden transition-all bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left font-bold text-sm sm:text-base text-[#2D2219] hover:bg-amber-50/20 transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span className={`text-[#D4AF37] font-bold text-xl ml-4 transform transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[500px] border-t border-gray-50" : "max-h-0"
                }`}
              >
                <p className="p-5 text-xs sm:text-sm text-gray-600 leading-relaxed bg-[#FAF9F5]/30">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
