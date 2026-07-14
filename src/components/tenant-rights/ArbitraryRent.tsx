import React from "react";

export default function ArbitraryRent({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-8 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Legal Rules on Arbitrary Rent Hikes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            One of the most frequent points of friction between landlords and tenants is the increase of rent. While landlords naturally seek to adjust rent inline with market trends, they are legally prohibited from implementing arbitrary or extortionate rent hikes during or at the end of a tenancy.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Rent Revision Constraints under Rent Control Acts */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Rent Revision Constraints under Rent Control Acts
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              Under older state Rent Control Acts, such as the Delhi Rent Control Act, 1858, or the Maharashtra Rent Control Act, 1999, the concept of Standard Rent was established. This standard rent is calculated using a formula based on the cost of construction and land value. Under these acts, landlords cannot increase rent beyond the standard rate, and any hike must align with the statutory limits, which are often capped at small annual percentages. For properties falling outside these acts, the rent revision is strictly governed by the written terms of the lease agreement, meaning a landlord cannot unilaterally raise the rent mid-lease.
            </p>
          </div>

          {/* H3: Notice Requirements and Tenant Consent under Model Tenancy Act */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Notice Requirements and Tenant Consent
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              The Model Tenancy Act introduces a structured process for rent revisions. Under the Act, a landlord can only revise the rent in accordance with the terms specified in the registered tenancy agreement. If the agreement does not specify a rate of revision, the landlord must serve a written notice to the tenant at least three months before the proposed hike takes effect. The tenant must then accept the revised rent or give notice of termination. If the tenant fails to respond or vacate, the landlord can approach the Rent Authority to resolve the issue or terminate the tenancy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
