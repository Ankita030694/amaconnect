import React from "react";

export default function TenantFAQ({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-8 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 9
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-8">
            Find answers to the most common questions regarding tenant protections, rent control laws, eviction notices, and security deposit disputes in India.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                1. Is it legally mandatory to register a rent agreement for 11 months?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                Under Section 17 of the Registration Act, 1908, only lease agreements with a duration of twelve months or longer must be registered at the Sub-Registrar's Office. Because of this, most landlords sign eleven month agreements to save on stamp duty and registration fees. However, under the Model Tenancy Act, all tenancies, regardless of their duration, must be submitted to the Rent Authority.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                2. Can a landlord enter the rented property at any time without the tenant's consent?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                No, a landlord cannot enter the rented house or commercial property without the tenant's permission. Under the standard rules of quiet enjoyment and the Model Tenancy Act, the landlord must provide a written or digital notice at least twenty four hours in advance, detailing the time and purpose of entry, which must be during reasonable daytime hours.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                3. What is the maximum security deposit a landlord can demand under the Model Tenancy Act?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                Under the Model Tenancy Act, the security deposit to be paid by the tenant in advance is capped at a maximum of two months' rent for residential premises and a maximum of six months' rent for commercial premises. This cap prevents landlords from demanding excessive deposit amounts, which was a common practice in major cities.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                4. Can a landlord cut off essential services like water or electricity if I fail to pay rent?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                Absolutely not. Under all state rent control acts and the Model Tenancy Act, landlords are strictly prohibited from disconnecting essential services like electricity, water supply, or sewage systems as a tool to pressure tenants. If a landlord cuts off these services, the tenant can approach the Rent Authority to restore services immediately and penalize the landlord.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                5. What options do I have if my landlord refuses to return my security deposit?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                If the landlord refuses to return the security deposit without a valid reason, you should first serve a formal legal notice through an advocate, demanding the refund within fifteen days. If the landlord does not comply, you can file a petition before the Rent Authority or Rent Court to recover the money, along with interest and compensation.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                6. Am I allowed to sublet the rented property to another tenant?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                No, a tenant cannot sublet the rented property, or any part of it, to another person without obtaining the explicit, written consent of the landlord. Subletting without permission is a serious breach of contract and constitutes a valid, legally recognized ground for eviction under rent laws.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                7. How much notice must a landlord give before raising the rent?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                Under the Model Tenancy Act, if the lease agreement does not specify a rent revision rate, the landlord must serve a written notice at least three months in advance of the proposed increase. If the tenant does not agree to the hike, they must serve notice of termination and vacate the property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
