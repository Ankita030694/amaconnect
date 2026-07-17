import React from "react";

export default function PoliceWrongfulConfinement({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing Police Complaints for Wrongful Confinement
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Confining a patient is a punishable criminal offense under Indian penal laws. Families can initiate immediate police complaints under the IPC or apply for urgent Habeas Corpus writs in the High Court to restore personal liberty.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Sections 340 and 342 of IPC for Illegal Detention
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When a hospital prevents a patient or a deceased person relatives from leaving the premises due to unpaid medical bills, it constitutes a clear criminal offense of wrongful confinement under the Indian Penal Code (IPC) or the corresponding sections of the Bharatiya Nyaya Sanhita (BNS). Under Section 340 of the IPC, whoever wrongfully restrains any person in such a manner as to prevent that person from proceeding beyond certain circumscribing limits is said to have wrongfully confined that person. Section 342 provides the punishment for wrongful confinement, which includes imprisonment of either description for a term which may extend to one year, or a fine, or both. The patient family should immediately file a written complaint with the local police station, naming the hospital administrator, the treating doctors, and the security staff involved in the confinement. The complaint should request the police to register an FIR under Section 342 and dispatch an officer to the hospital to release the confined individual. Under the law, the police are required to act immediately upon receiving a complaint of wrongful confinement, as it involves a violation of physical liberty. Knowing these specific sections of the IPC provides families with immediate legal leverage, making it clear to the hospital management that their financial recovery disputes cannot be resolved by committing criminal offenses, protecting the personal safety of patients.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Applying for Habeas Corpus Writs in Urgent Cases
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In extreme or highly urgent cases where the hospital refuses to release a patient and the local police station fails to intervene or delays action, the family has the constitutional right to file a writ of Habeas Corpus. Under Article 226 of the Constitution of India, the High Court has the power to issue a writ of Habeas Corpus, which is a judicial order directing the person detaining another to produce the body of the detained individual before the court and explain the legal justification for the detention. If the court finds that the detention is unauthorized and illegal, it will order the immediate release of the confined person. A Habeas Corpus petition can be filed by a relative, a friend, or even an advocate on behalf of the detained patient. High Courts treat Habeas Corpus petitions involving hospital detention with the highest priority, often listing the matter for hearing on the very same day or within twenty-four hours. The court will typically summon the hospital management, order them to release the patient immediately, and censure the administration for resorting to illegal detention. Furthermore, the court can award significant monetary compensation to the victim for the violation of their fundamental rights. Filing a Habeas Corpus writ provides an emergency legal recourse, bypassing lower court delays and securing the immediate intervention of the highest state judicial authority.
          </p>
        </div>
      </div>
    </section>
  );
}
