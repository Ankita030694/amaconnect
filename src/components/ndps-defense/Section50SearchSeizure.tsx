import React from "react";

export default function Section50SearchSeizure({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Search and Seizure Rights under Section 50
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Personal physical searches require strict adherence to procedural safeguards to protect suspects from arbitrary recovery claims. Knowing the mandatory nature of Section 50 notifications is critical for defense preparation.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Statutory Right to Be Searched in Presence of a Magistrate
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 50 of the NDPS Act, 1985, provides one of the most vital procedural safeguards to protect suspects from arbitrariness, false implication, or planting of evidence by law enforcement officers. This section applies specifically to the physical search of a person, which includes searching their clothing, pockets, or physical body. Under Section 50(1), when an authorized officer is about to search any person under the provisions of the Act, the officer is legally obligated to inform the suspect that they have the right to request to be searched in the presence of the nearest Gazetted Officer of any department, or in the presence of a Judicial Magistrate. If the suspect exercises this right and requests the presence of such an authority, the officer must stop the search immediately and take the suspect to the nearest Gazetted Officer or Magistrate without delay. The search can only proceed once the suspect is presented before the independent authority, who will evaluate the grounds for the search and oversee the process. Having an independent magistrate or gazetted officer present during the physical search ensures transparency and provides a strong safeguard against police misconduct. This right is absolute, and the suspect cannot be coerced or persuaded by the officers to waive it. Knowing this right enables individuals to protect their personal dignity and ensure that the search is conducted in strict compliance with the statutory provisions of the Act, maintaining safety.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Consequences of Failing to Inform Suspects of Section 50 Rights
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The provisions of Section 50 are mandatory, and compliance is not optional for the investigating officers. The Supreme Court of India, in a series of landmark judgments including State of Punjab v. Baldev Singh, has held that the requirement to inform the suspect of their right to be searched before a Gazetted Officer or a Magistrate is an imperative statutory safeguard. The Court ruled that failing to inform the suspect of this right makes the search illegal and violates their constitutional rights. Crucially, any recovery of contraband resulting from an illegal search is vitiated, meaning the seized drugs cannot be used as admissible evidence against the accused during the trial. This procedural lapse strikes at the root of the prosecution case, often resulting in the absolute acquittal of the accused, regardless of the quantity of drugs seized. It is important to note that Section 50 applies only to the search of a person physical body, and does not apply to the search of a bag, a vehicle, or a residential premise held by the suspect. However, if the police search both the person body and their bag, and fail to comply with Section 50 during the personal search, the entire search operation can be challenged by the defense. Defense advocates must carefully review the arrest memo, search documents, and witness statements to verify if the Section 50 notice was served in writing and accepted by the suspect before the search began.
          </p>
        </div>
      </div>
    </section>
  );
}
