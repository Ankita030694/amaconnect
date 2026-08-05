import React from "react";

export default function SuicideSection5({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Strategic Approach to Securing Anticipatory Bail under Section 438 CrPC
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Securing anticipatory bail under Section 438 of the Code of Criminal Procedure (CrPC), or the corresponding section of the Bharatiya Nagarik Suraksha Sanhita (BNSS), is the most critical immediate step when facing an abetment charge. Because Section 306 IPC is classified as a non-bailable offense, there is a real risk of immediate detention upon the filing of an FIR. Anticipatory bail acts as a judicial shield, directing the police to release the accused on bail in the event of an arrest, thereby preventing custodial abuse.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Criteria for Granting Pre-Arrest Bail in Abetment Cases
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When deciding an anticipatory bail application in a Section 306 case, the Sessions Court or the High Court evaluates several factors. These include the nature and gravity of the accusation, the antecedents of the applicant, the possibility of the applicant fleeing from justice, and whether the accusation has been made with the object of injuring or humiliating the applicant by having them arrested. In abetment cases, the court will closely look at the suicide note to see if there is prima facie evidence of active instigation. If the court finds that the accusations are vague or arise out of a commercial dispute without criminal intent, it is highly likely to grant anticipatory bail.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Safeguarding Against Arbitrary Police Custody and Harassment
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Obtaining anticipatory bail ensures that the accused can participate in the investigation without the threat of arbitrary detention. The court, while granting bail, may impose conditions such as requiring the accused to make themselves available for interrogation by a police officer as and when required, preventing them from directly or indirectly making any inducement, threat, or promise to any person acquainted with the facts of the case, and restricting travel outside India without prior permission. Complying with these conditions is essential to keep the bail active and demonstrate good faith to the court.
          </p>
        </div>
      </div>
    </section>
  );
}
