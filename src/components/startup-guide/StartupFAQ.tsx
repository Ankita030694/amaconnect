import React from "react";

export default function StartupFAQ({ id }: { id?: string }) {
  const faqs = [
    {
      question: "Is it mandatory to hire a lawyer or CA to incorporate a startup in India?",
      answer: "While the Ministry of Corporate Affairs has simplified online forms, having a Chartered Accountant, Company Secretary, or advocate is practically essential. The SPICe-Plus forms require a professional certification verifying that all details are accurate, and their professional credentials must be digitally attached to the submission."
    },
    {
      question: "How long does the entire incorporation process take?",
      answer: "The entire process typically takes ten to fifteen business days. This timeline includes obtaining Digital Signature Certificates, securing name approval, drafting the Memorandum and Articles of Association, and receiving the final Certificate of Incorporation from the Registrar of Companies."
    },
    {
      question: "Can an NRI or foreign national be a director in an Indian Private Limited Company?",
      answer: "Yes, non-resident Indians and foreign nationals can be appointed as directors. However, the company must have at least one director who is a resident of India, meaning they must have stayed in the country for at least one hundred and eighty two days in the previous financial year."
    },
    {
      question: "What happens if I do not file Form INC-20A within 180 days?",
      answer: "Failing to file Form INC-20A within one hundred and eighty days is a serious violation. The company can be fined fifty thousand rupees, and directors face a penalty of one thousand rupees per day. Additionally, the Registrar can strike off the company name from the register."
    },
    {
      question: "Can a sole proprietorship or partnership convert into a Private Limited Company?",
      answer: "Yes, existing proprietorships and partnership firms can convert into a Private Limited Company. This transition requires filing specific conversion forms, paying stamp duty, transferring all assets and liabilities to the new corporate entity, and updating tax and bank records."
    },
    {
      question: "Does a DPIIT-recognized startup automatically get the income tax exemption?",
      answer: "No, DPIIT recognition does not guarantee tax exemptions. To get the three year income tax holiday under Section 80-IAC, startups must submit a separate application to the Inter-Ministerial Board, which evaluates their level of innovation before issuing a certificate."
    }
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 9
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            Understanding the complexities of Indian corporate law can be challenging for first time founders. To help clarify the process, we have answered some of the most common questions regarding company incorporation, legal requirements, and government compliance rules.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white">
              <h3 className="text-sm font-bold text-[#2D2219] mb-2">
                {faq.question}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
