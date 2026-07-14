import React from "react";

export default function CustodyLimits({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Police Custody vs Judicial Custody Limits
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            When a person is arrested and cannot be immediately released, they are produced before a Magistrate who determines where they will be held. Indian law draws a sharp distinction between police custody and judicial custody. Understanding this difference is vital, as the protections available to the accused, the level of access to legal counsel, and the rules of interrogation vary significantly between the two.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white shadow-sm flex flex-col gap-4">
            <h3 className="text-base font-bold text-[#2D2219] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
              Police Custody (Interrogation Stage)
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Police custody means the accused is held in a police station lockup under the direct physical control of the investigating officer:
            </p>
            <ul className="space-y-3 text-xs text-gray-600">
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span><strong>Purpose:</strong> Primary goal is interrogation, verification of statements, reconstruction of crime scenes, and recovery of stolen property or physical evidence.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span><strong>Time Limit:</strong> Under Section 167 of CrPC, police custody can only be granted during the first 15 days of arrest. Under Section 187 of BNSS, police custody can be spread across the first 40 or 60 days of detention, but remains capped at a maximum cumulative duration of 15 days for most offenses.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span><strong>Access:</strong> Access to legal counsel is restricted, though Section 41D of CrPC permits meeting an advocate during interrogation.</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white shadow-sm flex flex-col gap-4">
            <h3 className="text-base font-bold text-[#2D2219] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
              Judicial Custody (Remand Stage)
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Judicial custody means the accused is committed to a local prison or central jail under the authority of the Magistrate:
            </p>
            <ul className="space-y-3 text-xs text-gray-600">
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span><strong>Purpose:</strong> Safe keeping of the accused during the investigation and trial period. The police no longer have direct physical access to the prisoner.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span><strong>Interrogation Rules:</strong> The police cannot interrogate the accused in jail without seeking explicit prior permission and directions from the Magistrate.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span><strong>Time Limit:</strong> Can extend up to a maximum of 60 or 90 days depending on the severity of the offense. Any detention beyond this period without a charge sheet triggers default bail rights.</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-3">
            The Statutory Charge Sheet Filing Deadlines
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            The law prescribes strict timelines for completing investigations. If the police fail to file a final report or charge sheet before the Magistrate within these time frames, the accused gains an indefeasible right to bail:
          </p>
          <ul className="mt-3 space-y-2 text-xs text-gray-600 pl-4 list-disc">
            <li><strong>90-Day Limit:</strong> Applies to serious crimes punishable by death, life imprisonment, or a prison term of ten years or more.</li>
            <li><strong>60-Day Limit:</strong> Applies to all other offenses where the statutory punishment is less than ten years.</li>
            <li><strong>Default Bail Right:</strong> If these limits are breached, the accused must be released on default bail under Section 167(2) of CrPC (Section 187(2) of BNSS), provided they are ready to furnish bail bonds.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
