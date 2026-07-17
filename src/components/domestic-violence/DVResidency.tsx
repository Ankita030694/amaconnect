import React from "react";

export default function DVResidency({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Rights of Residency and Shared Household
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            One of the most important protections under the PWDVA is Section 17, which guarantees every woman in a domestic relationship the right to reside in the shared household. This right is independent of whether she has any ownership, financial title, or rent rights in the property, protecting women from being left homeless after a domestic dispute.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Protection Against Forceful Eviction
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 17 states that a woman cannot be evicted or excluded from the shared household by the husband or his relatives except through procedures established by law. The shared household is defined as a house owned or rented jointly by the woman and the husband, or owned or rented by either of them individually, or a home where they lived together as part of a joint family.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Even if the house is owned solely by the father in law or husband, a woman cannot be thrown out overnight without a court order. If she has been forcefully evicted, she can file a complaint with a magistrate court to regain access and secure police protection to re-enter the home safely.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Obtaining Residence Orders in Family Court
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To enforce these residency rights, Section 19 of the Act gives magistrates the power to issue Residence Orders. These orders can take several forms depending on the safety of the woman. The court can restrain the husband or his family members from entering the portion of the house where the woman lives, or even order the husband to remove himself from the shared household if his presence threatens her safety.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If living in the same house is not possible due to extreme violence, the court can direct the husband to secure alternative accommodation for the woman that matches her standard of living, and pay all her rental expenses. These options ensure that women are not forced to endure violence simply because they lack alternative housing options.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Residence Remedies Available</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">1. Restraining Orders:</span> Preventing the husband or relatives from evicting the woman or entering her living area.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">2. Restitution of Possession:</span> Directing the police to assist a woman in re-entering her shared household after eviction.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">3. Alternative Rent Coverage:</span> Ordering the husband to pay for a separate rental home if cohabitation is unsafe.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">4. Exclusion of Respondent:</span> Ordering the abuser to move out of the house to ensure the safety of the family.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
