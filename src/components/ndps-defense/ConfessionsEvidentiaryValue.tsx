import React from "react";

export default function ConfessionsEvidentiaryValue({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Evidentiary Value of Confessions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Incriminating statements recorded during custodial investigations have restricted legal weight. Citing Supreme Court precedents that reject confessions made to officers is a key tool in trials.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Section 67 Statements Made to Officers during Investigation
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 67 of the NDPS Act, 1985, authorizes any officer referred to in Section 42, who is conducting an investigation under the Act, to call for information from any person for the purpose of satisfying himself whether there has been any violation of the provisions of the Act. During the inquiry, the officer can record statements from the suspect or witnesses. Historically, the narcotics control departments and state police officers frequently used Section 67 statements as confessions of guilt, recording incriminating admissions from suspects while they were in custody. These statements were often written under duress, coercion, or sleep deprivation, and the prosecution would submit them to the court as substantive evidence to secure convictions, bypassing the standard protections of the Indian Evidence Act. Under the standard rules of criminal jurisprudence in India, any confession made to a police officer is inadmissible in court under Section 25 of the Indian Evidence Act. However, the prosecution argued that officers of specialized departments, such as the Narcotics Control Bureau (NCB) or the Department of Revenue Intelligence (DRI), are not police officers, and therefore confessions made to them under Section 67 should be admissible. This interpretation created a major loophole, leading to situations where suspects were convicted based solely on their signed statements, without any corroborating physical evidence of drug possession or trafficking, violating basic human rights.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Supreme Court Rulings Rejecting Confessions Made to Police
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            This controversial practice of using Section 67 statements as substantive evidence was permanently resolved by the Supreme Court of India in the landmark judgment of Tofan Singh v. State of Tamil Nadu. The constitution bench, in a majority decision, held that officers of specialized agencies like the NCB, DRI, and state excise departments are indeed police officers within the meaning of Section 25 of the Evidence Act. Consequently, the Court ruled that any confessional statement recorded by these officers under Section 67 of the NDPS Act is inadmissible in evidence and cannot be used to convict an accused. The Court emphasized that allowing custodial confessions as evidence violates the constitutional right against self-incrimination guaranteed under Article 20(3) of the Constitution and the right to a fair trial under Article 21. This judgment has a massive impact on narcotics trials, as it means that the prosecution must prove its case using independent physical evidence, such as search and seizure records, chemical reports, and independent witness testimonies, rather than relying on extracted confessions. If a suspect was arrested based solely on a Section 67 statement of a co-accused, they are entitled to apply for bail, as an inadmissible statement cannot form the sole basis of prosecution. Knowing this precedent is essential for defense advocates to challenge the admissibility of custodial statements and protect their clients during investigation.
          </p>
        </div>
      </div>
    </section>
  );
}
