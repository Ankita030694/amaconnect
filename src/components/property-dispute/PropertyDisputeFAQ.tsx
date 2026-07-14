import React from "react";

export default function PropertyDisputeFAQ({ id }: { id?: string }) {
  const faqs = [
    {
      question: "Is a Power of Attorney sufficient to claim ownership of property in India?",
      answer: "No. A General Power of Attorney is not a valid document to transfer ownership of immovable property. The Supreme Court of India has ruled that property transactions executed via Power of Attorney do not transfer title. Absolute ownership can only be transferred through a registered Sale Deed, which must be executed under the Transfer of Property Act, 1882, and registered at the local Sub-Registrar Office."
    },
    {
      question: "What should I do if someone tries to encroach on my land or property?",
      answer: "If you detect unauthorized entry or construction on your land, you must act swiftly. First, file a formal complaint with the local police department for criminal trespass. Second, consult a property advocate to file a civil suit for permanent injunction under Section 38 of the Specific Relief Act, 1963, along with an application for a temporary injunction under Order 39 of the Code of Civil Procedure to halt all encroachment activities immediately."
    },
    {
      question: "How long does a property dispute case typically take in Indian civil courts?",
      answer: "Property litigation in India can be time-consuming due to heavy case backlogs and procedural stages. A typical title declaration or partition suit can take anywhere from five to ten years in the trial court, depending on the complexity of the evidence and the cooperation of the parties. If the judgment is appealed to the High Court and Supreme Court, the entire process can extend even further."
    },
    {
      question: "What is the difference between Section 5 and Section 6 of the Specific Relief Act?",
      answer: "Section 5 of the Specific Relief Act, 1963, allows an owner to recover possession of immovable property based on their legal title through a standard civil trial. Section 6 provides a summary remedy for any person dispossessed of property without consent, otherwise than in due course of law. A Section 6 suit must be filed within six months of dispossession, and the court will restore possession without examining the underlying title."
    },
    {
      question: "Can a registered Will be challenged in court by legal heirs?",
      answer: "Yes, a registered Will can be challenged in a civil or probate court. While registration indicates that the testator appeared before an official, it does not confirm the Will's legal validity. Legal heirs can contest a registered Will on grounds of lack of testamentary capacity, undue influence, fraud, coercion, suspicious circumstances, or improper execution."
    }
  ];

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
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Get quick answers to the most common queries regarding property disputes, title searches, adverse possession, and legal remedies in India.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#2D2219] mb-3 flex gap-3">
                <span className="text-[#D4AF37]">Q.</span>
                {faq.question}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed pl-6 text-justify">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
