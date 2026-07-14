import React from "react";

export default function EvictionDefense({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-8 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Defending against Illegal Evictions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            In India, eviction is a strictly regulated process. Landlords cannot simply demand that a tenant leave on a whim, nor can they resort to self-help tactics like changing the locks, throwing out belongings, or disconnecting utility services. Tenants have strong legal protections against such actions.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Legitimate Grounds for Eviction in India */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Legitimate Grounds for Eviction in India
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              For an eviction to be legally valid, it must be based on one of the recognized statutory grounds under state rent control acts or the Model Tenancy Act. These grounds include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-600">
              <li>
                <strong>Default in Rent Payment:</strong> The tenant fails to pay the agreed rent for two or more consecutive months.
              </li>
              <li>
                <strong>Unauthorized Subletting:</strong> The tenant sublets the whole or part of the premises to another person without obtaining the written consent of the landlord.
              </li>
              <li>
                <strong>Misuse of Property:</strong> The tenant uses the residential property for commercial or illegal activities, or in a manner that causes a public nuisance.
              </li>
              <li>
                <strong>Property Damage:</strong> The tenant causes significant structural damage to the property, reducing its utility or value.
              </li>
              <li>
                <strong>Bona Fide Necessity:</strong> The landlord requires the property for their own genuine residential use or for their family members.
              </li>
            </ul>
          </div>

          {/* H3: Immediate Legal Protections and Remedial Actions */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Immediate Legal Protections and Remedial Actions
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              If a landlord attempts to evict a tenant forcefully or without serving a proper written notice, the tenant can seek immediate legal remedies. The tenant can file a suit for injunction in a civil court under Section 38 of the Specific Relief Act, 1963, to restrain the landlord from taking forceful possession. Additionally, if the landlord cuts off essential services like electricity or water, the tenant can immediately petition the Rent Authority or the local Magistrate, who has the power to order the immediate restoration of services and impose heavy penalties on the landlord for harassment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
