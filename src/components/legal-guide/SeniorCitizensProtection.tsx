import React from "react";

export default function SeniorCitizensProtection({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 9
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Senior Citizen &amp; Parent Protection Laws
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            To ensure the welfare and dignity of elderly citizens, the Parliament enacted specialized legislation to safeguard parents and senior citizens from abandonment, neglect, and property exploitation by their legal heirs.
          </p>
        </div>

        {/* Highlight box */}
        <div className="bg-amber-50/50 border border-amber-100 rounded-3xl p-6 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-bold text-amber-950 mb-1">
              Maintenance and Welfare of Parents and Senior Citizens Act, 2007
            </h3>
            <p className="text-xs text-amber-900/80 leading-relaxed">
              This act provides a speedy and inexpensive mechanism for senior citizens to claim maintenance, basic amenities, and security. Parents, grandparents, and childless senior citizens can file applications before specialized Maintenance Tribunals against their children or legal heirs.
            </p>
          </div>
        </div>

        {/* Detailed Points */}
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0 mt-0.5 font-bold text-xs">
              I
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Right to Claim Maintenance</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                Any senior citizen (above 60 years) who is unable to maintain themselves from their own earning or property can apply for a monthly allowance from their children, grandchildren, or relative (who would inherit their property). The tribunal can order a maximum monthly maintenance (capped at ₹10,000 in some states, and uncapped in others that have adopted the latest amendments) to cover basic food, clothing, shelter, and medical needs.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0 mt-0.5 font-bold text-xs">
              II
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Revocation of Property Gift/Transfer</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                Under Section 23 of the Act, if a senior citizen has transferred their property (by way of gift or otherwise) to an heir on the condition that the heir provides basic amenities and physical needs, and the heir refuses or fails to do so, the transfer of property can be declared void by the Maintenance Tribunal. The property will then revert back to the senior citizen.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0 mt-0.5 font-bold text-xs">
              III
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Punishment for Abandonment</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                Section 24 of the Act makes abandonment of senior citizens a criminal offense. Any person who has the care or protection of a senior citizen and abandons them in any place with the intention of wholly abandoning them can be punished with imprisonment up to 3 months and/or a fine up to ₹5,000.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
