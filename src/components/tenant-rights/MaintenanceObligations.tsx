import React from "react";

export default function MaintenanceObligations({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-8 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Obligations for Property Maintenance
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            A major source of conflict between landlords and tenants is the allocation of maintenance responsibilities. Under standard legal rules, property maintenance is divided into structural repairs, which keep the building habitable, and routine repairs, which arise from daily wear and tear.
          </p>
        </div>

        {/* Comparison Table Section */}
        <div className="overflow-x-auto my-2 border border-gray-200 rounded-2xl shadow-sm">
          <table className="w-full text-left border-collapse bg-white text-xs sm:text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 font-bold text-[#2D2219] w-1/3">Maintenance Area</th>
                <th className="p-4 font-bold text-[#2D2219]">Landlord Responsibility</th>
                <th className="p-4 font-bold text-[#2D2219]">Tenant Responsibility</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              <tr>
                <td className="p-4 font-semibold text-[#2D2219]">Structural Repairs</td>
                <td className="p-4">Major structural cracks, roof leakage, external wall painting, and structural stability issues.</td>
                <td className="p-4">No responsibility for structural changes, unless caused by tenant negligence.</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#2D2219]">Electrical Systems</td>
                <td className="p-4">Internal electrical wiring replacements, main fusebox repairs, and major short circuit fixes.</td>
                <td className="p-4">Replacement of lightbulbs, tubes, broken sockets, switches, and repair of private appliances.</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#2D2219]">Plumbing &amp; Sanitary</td>
                <td className="p-4">Main water supply lines, sewer blockages, overhead tank repairs, and sanitary pipe replacement.</td>
                <td className="p-4">Repair of dripping water taps, changing washbasin washers, clearing minor sink blockages.</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#2D2219]">Common Areas</td>
                <td className="p-4">Maintenance of elevators, lobby, shared stairs, water pump repairs, and security guard expenses.</td>
                <td className="p-4">Keeping immediate shared passages clean and adhering to housing society guidelines.</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#2D2219]">Cosmetic &amp; Cleaning</td>
                <td className="p-4">Whitewashing or deep repairs before tenancy, chimney repairs, and cleaning septic tanks.</td>
                <td className="p-4">Regular cleaning, minor wall touchups, and maintaining overall property hygiene.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-10">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Consequences of Non-Performance of Maintenance Work
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              If a landlord fails to carry out essential structural repairs despite receiving written requests, the tenant can take legal steps. Under the Model Tenancy Act, the tenant is allowed to execute the repairs themselves and deduct the costs from the monthly rent payments, subject to a cap. Conversely, if a tenant causes significant damage to the property through negligence or refuses to carry out minor routine repairs, the landlord can deduct the repair costs from the security deposit or initiate eviction proceedings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
