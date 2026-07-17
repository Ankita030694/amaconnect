import React from "react";

export default function SCMSection125({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Maintenance Rights under Section 125 CrPC
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Apart from the specialized 2007 legislation, parents in India have a long standing right to claim maintenance under the standard criminal procedure code. Understanding how these separate legal routes compare helps parents select the most effective method for their situation.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Comparing Senior Citizens Act vs CrPC Route
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 125 of the Code of Criminal Procedure, 1973 (CrPC), states that if any person having sufficient means neglects or refuses to maintain their parents who are unable to maintain themselves, a magistrate can order them to pay a monthly allowance. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The primary difference between the two routes lies in speed and scope. The 2007 Senior Citizens Act is a specialized civil law with a strict ninety day deadline for resolving cases and does not allow lawyers, keeping things simple. Section 125 of the CrPC is a criminal proceeding that allows legal representation for both sides. While Section 125 cases can take longer to resolve, they offer strong enforcement mechanisms because the criminal court can issue immediate arrest warrants and order jail terms for children who default on payments.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Claims in Judicial Magistrate Courts
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To claim maintenance under Section 125, the parent must file a petition before a Judicial Magistrate of the First Class. The petition must be filed in the district where the parent resides or where the children live.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            During the trial, the parent must show that the children are neglecting their duties, and that the children have sufficient financial means. Under Section 125, parents can also apply for interim maintenance, which requires the court to decide on temporary monthly payments within sixty days of serving the notice, protecting the parent from financial distress while the final case is decided.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Comparing Maintenance Pathways</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Senior Citizens Act, 2007 Route</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Heard by specialized administrative tribunals.</li>
                  <li>Strict 90-day statutory timeline for orders.</li>
                  <li>No lawyers permitted, keeping costs low.</li>
                  <li>Includes property revocation powers.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Section 125 CrPC Route</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Heard by Judicial First-Class Magistrates.</li>
                  <li>Full judicial trial allowing legal counsel.</li>
                  <li>Can take longer to resolve.</li>
                  <li>Stronger criminal enforcement and arrest powers.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
