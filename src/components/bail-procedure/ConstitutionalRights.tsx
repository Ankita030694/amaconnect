import React from "react";

export default function ConstitutionalRights({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Constitutional Rights of an Arrested Person
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            The Constitution of India, primarily through Articles 20, 21, and 22, provides robust safeguards to protect individuals from arbitrary arrest and state excesses. These constitutional guarantees are supplemented by statutory provisions under the Code of Criminal Procedure (CrPC) and the Bharatiya Nagarik Suraksha Sanhita (BNSS). Every arrested individual has fundamental rights that cannot be suspended, ensuring that dignity and justice are preserved even while in state custody.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white shadow-sm">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Comparison Table: Pre-Arrest Rights vs. Post-Arrest Rights
          </h3>
          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            Understanding the distinction between rights available before a formal arrest is executed and rights triggered immediately after being taken into custody is critical:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="py-3 px-4 font-bold text-[#2D2219]">Right Category</th>
                  <th className="py-3 px-4 font-bold text-[#2D2219]">Pre-Arrest Protections</th>
                  <th className="py-3 px-4 font-bold text-[#2D2219]">Post-Arrest Guarantees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  {
                    category: "Information & Grounds",
                    preArrest: "Right to be informed of the specific accusation or grounds for questioning. Right to verify the identity of the police officers conducting the inquiry.",
                    postArrest: "Statutory right to receive written grounds of arrest immediately. For bailable offenses, the right to be informed that bail can be arranged."
                  },
                  {
                    category: "Legal Counsel & Aid",
                    preArrest: "Right to consult an advocate of choice. Right to have legal counsel present during preliminary inquiries or notices under Section 41A CrPC.",
                    postArrest: "Right to meet an advocate during interrogation (Section 41D CrPC). Right to free legal aid from state services if unable to afford a lawyer."
                  },
                  {
                    category: "Custody & Time Limits",
                    preArrest: "Protection against illegal confinement or coercion before formal arrest. Interrogation must happen during reasonable daytime hours.",
                    postArrest: "Absolute right to be produced before the nearest judicial magistrate within 24 hours of arrest, excluding travel time."
                  },
                  {
                    category: "Self-Incrimination",
                    preArrest: "Right to remain silent under Article 20(3) to avoid self-incrimination. Police cannot force confessions during questioning.",
                    postArrest: "Confessions made to a police officer are inadmissible in court. Physical or mental coercion during custody is illegal."
                  },
                  {
                    category: "Health & Well-being",
                    preArrest: "Right to be treated with basic dignity. General protection against harassment or verbal abuse during interrogation.",
                    postArrest: "Mandatory medical examination at the time of arrest and every 48 hours during custody. Protection from torture or custodial violence."
                  }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/55 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#2D2219]">{row.category}</td>
                    <td className="py-3.5 px-4 text-gray-600 leading-relaxed">{row.preArrest}</td>
                    <td className="py-3.5 px-4 text-gray-600 leading-relaxed">{row.postArrest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            A key landmark decision in this domain is the D.K. Basu vs State of West Bengal case, which established strict guidelines that the police must adhere to during every arrest. These include wearing visible, clear identification showing the officer's designation, preparing a memo of arrest witnessed by at least one family member or respected citizen, and documenting any pre-existing injuries on the arrestee in an inspection memo. Any deviation from these guidelines is treated as a serious breach of duty and can lead to immediate administrative punishment of the guilty officers.
          </p>
        </div>
      </div>
    </section>
  );
}
