import React from "react";

export default function IbcFAQ({ id }: { id?: string }) {
  const faqs = [
    {
      question: "What is the minimum default amount required to initiate insolvency against a buyer under the IBC?",
      answer: "The minimum default threshold is 1 Crore rupees. If the outstanding amount is less than 1 Crore, the MSME cannot file a Section 9 petition under the IBC, but can file a recovery case under MSME Samadhaan, which has no minimum threshold."
    },
    {
      question: "Can a registered MSME file an insolvency case against a partnership firm or a sole proprietorship under the IBC?",
      answer: "No. Part II of the IBC applies only to the insolvency resolution and liquidation of corporate debtors, which includes registered companies and LLPs. For partnership firms or proprietorships, recovery must be pursued through MSME Samadhaan or civil summary suits."
    },
    {
      question: "What is a Section 8 demand notice and is it mandatory before filing an NCLT petition?",
      answer: "Yes, it is mandatory. Under Section 8 of the IBC, an operational creditor must deliver a demand notice in Form 3 or Form 4 to the corporate debtor registered office. The debtor has exactly 10 days to pay or show a pre-existing dispute."
    },
    {
      question: "What constitutes a pre-existing dispute under the IBC?",
      answer: "A pre-existing dispute refers to any dispute regarding the quality, quantity, price of goods or services, or breach of representation or warranty that was raised in writing, including letters, emails, or notices, before the Section 8 demand notice was served."
    },
    {
      question: "Does the MSMED Act override private arbitration clauses in buyer-supplier agreements?",
      answer: "Yes, the Supreme Court of India has ruled that the MSMED Act has overriding effect. Statutory conciliation and arbitration before the MSEFC override any private arbitration agreements between the parties."
    },
    {
      question: "What happens if a buyer challenges an MSEFC award in court?",
      answer: "Under Section 19 of the MSMED Act, a buyer cannot challenge or appeal an MSEFC award or decree unless they deposit 75 percent of the awarded amount in the court first, protecting the supplier from frivolous delays."
    },
    {
      question: "How long does the Fast-Track Corporate Insolvency Resolution Process (FTCIRP) take?",
      answer: "The FTCIRP must be completed within 90 days from the insolvency commencement date, with a single potential extension of up to 45 days if approved by the NCLT, compared to the standard 180-day process."
    },
    {
      question: "What is the deadline for an MSME to submit its claims after NCLT admits the insolvency petition?",
      answer: "An MSME must submit its proof of claim in Form B to the Interim Resolution Professional (IRP) within 14 days from the date of the public announcement of the admission of the insolvency petition."
    }
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 9
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-8">
            Find quick, authoritative answers to the most common questions regarding insolvency, NCLT petitions, demand notices, and MSME Samadhaan recovery processes.
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                <h3 className="text-base font-bold text-[#2D2219] mb-2 flex gap-2">
                  <span>{index + 1}.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed text-justify pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
