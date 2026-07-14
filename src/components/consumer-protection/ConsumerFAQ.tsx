"use client";

import React, { useState } from "react";

export default function ConsumerFAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What qualifies as a defect in goods under Indian consumer law?",
      answer: "A defect is defined as any fault, imperfection, or shortcoming in the quality, quantity, purity, or standard of a product that is required to be maintained under law or contract. Common examples include hardware failures in electronic appliances, manufacturing defects in cars, contaminated food, or receiving items that do not match the product description.",
    },
    {
      question: "What are the key timelines for filing a consumer complaint?",
      answer: "Under Section 69 of the Consumer Protection Act, 2019, a complaint must be filed within two years from the date on which the cause of action arose (the date the defect was discovered, or when the service provider refused redressal). Late filings are accepted only if you prove sufficient cause for the delay.",
    },
    {
      question: "Can I file a complaint for a purchase made from an international e-commerce website?",
      answer: "Yes, if the international e-commerce entity has a registered office, conducts active business, or targets consumers in India. Under the E-Commerce Rules, 2020, they must appoint a local nodal officer or representative in India to ensure compliance and handle consumer grievances.",
    },
    {
      question: "Do I need to hire a lawyer to represent me in consumer court?",
      answer: "No, consumer commissions are designed for direct consumer access. A consumer can draft, file, and argue their own case without an advocate. However, for high-value claims or complex product liability disputes, consulting a qualified lawyer is recommended to ensure procedural and legal accuracy.",
    },
    {
      question: "What is the difference between product liability and service deficiency?",
      answer: "Product liability holds a manufacturer, seller, or service provider liable to compensate for physical harm, property damage, or death caused by a defective product. Service deficiency is a broader term covering poor, incomplete, or delayed performance of services like banking, insurance, or medical care.",
    },
    {
      question: "Can a consumer claim compensation for mental harassment and litigation costs?",
      answer: "Yes, consumer commissions have the authority to grant compensation not just for financial losses, but also for mental agony, harassment, and physical suffering caused by the defect or deficiency, as well as the actual cost of litigation incurred by filing the case.",
    },
    {
      question: "What happens if a seller or service provider ignores the consumer commission notice?",
      answer: "If the opposite party fails to appear or reply within thirty days (extendable by fifteen days) after receiving the notice, the commission can proceed ex-parte. This means the case will be heard and decided based solely on the evidence and arguments presented by the consumer.",
    },
    {
      question: "How do I appeal against an unfavorable order passed by a District Commission?",
      answer: "If you are unsatisfied with a District Commission's order, you can file an appeal in the State Consumer Disputes Redressal Commission within forty-five days of receiving the order. To appeal, the appellant must deposit fifty percent of the ordered compensation amount with the State Commission.",
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
            Find answers to the most common questions regarding consumer rights, e-commerce disputes, product defects, and the filing procedures in consumer commissions under the Consumer Protection Act, 2019.
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
