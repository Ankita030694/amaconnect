import React from "react";

export default function TenantRightsOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-8 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Understanding Tenant Rights under Rent Laws
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            In India, rental housing is primarily governed by state-specific Rent Control Acts, which were originally enacted to protect tenants from exploitation in high-demand urban centers. These laws establish legal rights for tenants, balancing the power dynamics between landlords and renters. Understanding the underlying statutory framework is crucial for anyone leasing residential or commercial property.
          </p>
        </div>

        <div className="space-y-10">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              The Constitutional and Legal Basis of Tenancy
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              While the right to property is a constitutional right under Article 300A, rental relationships are regulated by legislative entries under the Concurrent List of the Constitution of India. This allows both the Union and the State Governments to enact laws. Historically, state legislatures took the lead, establishing Rent Control Acts that capped rents, restricted eviction grounds, and protected tenants. Additionally, the Transfer of Property Act, 1882, governs general lease provisions where specific rent control acts do not apply, creating a multi-layered legal structure that safeguards the interests of renters.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Fundamental Tenant Protections in Everyday Leases
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              Every tenant in India enjoys certain basic protections that cannot be overridden by standard lease agreements. First, tenants have a right to quiet enjoyment, meaning the landlord cannot enter the premises without prior notice or interfere with the tenant's daily life. Second, tenants are protected from the sudden cutoff of essential utility services, such as water, electricity, or sewage, which are recognized as basic necessities. Third, tenants are protected against arbitrary eviction, ensuring they can only be asked to leave based on specific, legally recognized grounds and through due process of law.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
