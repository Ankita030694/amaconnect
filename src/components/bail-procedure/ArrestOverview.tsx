import React from "react";

export default function ArrestOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Overview of Arrest Laws and Procedures
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Under the Indian legal framework, an arrest constitutes the physical deprivation of a person's liberty by legal authority. The procedure for arrest is governed primarily by the Code of Criminal Procedure (CrPC), 1973, and its modern statutory successor, the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023. An arrest is not merely a coercive act, it is a highly regulated procedure designed to balance the state's interest in maintaining law and order with an individual's fundamental right to freedom under Article 21 of the Constitution of India. Legal arrest requires a clear statutory basis, and police officers must follow prescribed protocols to ensure the detention is lawful.
          </p>
        </div>

        <div className="bg-[#FAF9F5] border border-[#D4AF37]/20 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-3">
            Types of Arrests under Indian Criminal Law
          </h3>
          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            Criminal offenses are classified based on gravity, which directly dictates the authority of a police officer to make an arrest:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Arrest Without a Warrant",
                desc: "Permissible only in cognizable offenses, which are serious crimes such as murder, rape, theft, or kidnapping. Under Section 41 of CrPC (Section 35 of BNSS), police can arrest if there is reasonable suspicion or complaint."
              },
              {
                title: "Arrest With a Warrant",
                desc: "Mandatory for non-cognizable offenses, which are less severe infractions. A police officer has no authority to arrest or initiate an investigation without a specific judicial warrant issued by a competent Magistrate."
              },
              {
                title: "Formal Arrest vs Detainment",
                desc: "An arrest involves taking a person into custody to answer for an offense. Detainment or custody for questioning without formal arrest is strictly restricted and must comply with clear legal boundaries."
              },
              {
                title: "Notice of Appearance",
                desc: "For offenses punishable by less than 7 years, Section 41A of CrPC (Section 35(3) of BNSS) mandates that police should first issue a notice of appearance rather than making a routine arrest, unless specific reasons exist."
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl p-4 bg-white shadow-sm flex flex-col gap-1.5">
                <span className="text-xs font-bold text-[#2D2219] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  {item.title}
                </span>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            A key standard established by the Supreme Court of India in the landmark Arnesh Kumar vs State of Bihar case is that arrest must be the exception, not the rule, especially in cases where the maximum punishment is less than seven years. The police must document written reasons explaining the necessity of the arrest, such as preventing the accused from committing further offenses, tampering with evidence, or absconding. If a police officer fails to comply with these statutory guidelines, they face disciplinary action and can be held liable for contempt of court, reinforcing the principle that arbitrary detention has no place under the rule of law.
          </p>
        </div>
      </div>
    </section>
  );
}
