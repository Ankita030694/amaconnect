import React from "react";

export default function Section37BailProvisions({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Bail Provisions under Section 37
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Securing bail in commercial narcotics cases requires satisfying strict dual statutory conditions. Understanding Section 37 restrictions and High Court appeal timelines is essential for defense preparation.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Double Conditions Required to Secure Commercial Quantity Bail
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Securing bail in an NDPS case involving a commercial quantity is subject to the exceptionally rigorous restrictions outlined in Section 37 of the Act, which overrides the standard bail provisions of the Code of Criminal Procedure. Section 37(1)(b) mandates that when the Public Prosecutor opposes the bail application of an accused charged with a commercial quantity, the court cannot release the accused on bail unless two statutory conditions are satisfied. First, the court must be satisfied that there are reasonable grounds for believing that the accused is not guilty of the alleged offense. Second, the court must be satisfied that the accused is unlikely to commit any offense while on bail. The Supreme Court has clarified that the term reasonable grounds means something more than a prima facie case; it requires the court to evaluate the evidence and find substantial reasons to believe that the accused is innocent. This requirement places a heavy burden of proof on the defense at the pre-trial stage, as they must point to major gaps in the prosecution case, such as a clear violation of search procedures, a lack of independent witnesses, or evidence of tampering with the chemical samples. If the defense cannot convince the court of these two conditions, bail will be denied, resulting in prolonged incarceration during the trial. Understanding these dual conditions is critical for structuring a detailed bail petition that addresses both procedural compliance and the personal record of the accused.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Standard Timelines and Procedures for NDPS Bail Hearings
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The procedure for securing bail under the NDPS Act follows a structured judicial process, starting from the Special Court established specifically to try narcotics cases. When a suspect is arrested, they must be presented before a magistrate within twenty-four hours, who will typically remand them to police or judicial custody. The defense can then file a regular bail application before the Special Court under Section 439 of the CrPC read with Section 37 of the NDPS Act. The court will serve a notice to the narcotics control department or the state police, requiring them to submit a detailed status report and the case diary. During the bail hearing, the prosecution will highlight the quantity of the seized contraband, the criminal antecedents of the accused, and the risk of witness tampering or flight. If the Special Court rejects the bail application, which is common in commercial quantity cases due to Section 37, the accused must appeal the decision before the High Court. The timeline for resolving bail petitions in the High Court can range from a few weeks to several months, depending on court backlogs. To expedite the hearing, the defense can request an urgent listing if there are compelling medical grounds, clean records, or if the trial is excessively delayed. Highlighting judicial delays and the right to a speedy trial under Article 21 can serve as additional grounds to secure bail in long pending trials.
          </p>
        </div>
      </div>
    </section>
  );
}
