import React from "react";

export default function BasicCriminalDefense({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Basic Criminal Defense Rights
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            If you or a family member face criminal accusations or police inquiries, understanding the basic safeguards guaranteed by the Constitution of India and the Code of Criminal Procedure is vital. These rights ensure that the state's machinery does not overreach or violate individual liberty.
          </p>
        </div>

        {/* Core Rights list */}
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0 mt-0.5 font-bold text-xs">
              01
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Right to a Free Copy of the FIR</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                Under Section 154 of the CrPC (and its equivalent under the Bharatiya Nagarik Suraksha Sanhita), an accused person has a statutory right to obtain a copy of the First Information Report (FIR) free of cost from the police. If the police refuse, a petition can be filed before the Senior Superintendent of Police (SSP) or the concerned Magistrate.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0 mt-0.5 font-bold text-xs">
              02
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Bailable vs. Non-Bailable Offences</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                For bailable offences (less severe crimes like simple hurt, trespass, or defamation), bail is a matter of right. The police officer in charge must release the accused upon execution of a bail bond. For non-bailable offences (severe crimes like theft, murder, or forgery), bail is a judicial discretion and must be applied for before the Magistrate or Sessions Court.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0 mt-0.5 font-bold text-xs">
              03
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Right to Silence &amp; Protection from Self-Incrimination</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                Article 20(3) of the Constitution guarantees that no person accused of any offence shall be compelled to be a witness against himself. Confessions made to a police officer are completely inadmissible in a court of law under Section 25 of the Indian Evidence Act. You have the right to refuse to answer questions that might incriminate you.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0 mt-0.5 font-bold text-xs">
              04
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Search &amp; Seizure Protections</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                Police officers conducting a search of physical premises must typically hold a valid search warrant issued by a Magistrate. During any search, the police must invite at least two independent respectable inhabitants of the locality to witness the search. A detailed 'Panchnama' or search list of all seized items must be prepared and signed by these witnesses, and a copy must be handed over to the occupant immediately.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
