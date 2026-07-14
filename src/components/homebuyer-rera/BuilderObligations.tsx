import React from "react";

export default function BuilderObligations({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Builder Obligations and Code violations
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            RERA places strict accountability standards on developers, making sure they cannot unilaterally alter plans or deliver substandard construction. These statutory obligations protect the physical and financial integrity of the buyer's investment.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Restrictions on Modifying Approved Plans */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Restrictions on Modifying Approved Plans
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              Under Section 14 of the Real Estate, Regulation and Development, Act, developers are bound by strict limits regarding the layouts, plans, and specifications of registered projects. Once a project has been advertised, booked, and approved by the local planning authority, the builder cannot make any alterations or additions to the sanctioned plans, layout plans, or specifications of individual units without the prior written consent of the specific homebuyer. Furthermore, if the developer intends to make minor or major changes to the common areas or the overall layout plan of the entire building, project, or phase, they must obtain the prior written consent of at least two-thirds of the allottees (homebuyers) who have booked apartments in that project. This provision was introduced to prevent the common malpractice where developers would sell units based on certain mock-ups or layouts, only to later build additional floors, reduce open green spaces, or alter common amenities without informing the buyers. RERA ensures that the layout you see at the time of booking is the layout you receive at the time of handover. If a developer violates this section and carries out unauthorized modifications, the homebuyers can approach the RERA authority to halt the construction and seek appropriate relief.
            </p>
          </div>

          {/* H3: Five-Year Warranty against Structural Defects */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Five-Year Warranty against Structural Defects
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              Another critical developer obligation introduced by RERA is the five-year warranty against structural defects, which is covered under Section 14(3) of the Act. The law mandates that if any structural defect, workmanship defect, quality issue, or service deficiency is brought to the notice of the developer by the homebuyer within a period of five years from the date of handing over physical possession, the developer is legally obligated to rectify the issue without any extra charge to the buyer. This rectification must be carried out within thirty days of the complaint being raised. If the builder fails to repair the defect or resolve the workmanship issue within this time, the buyer is entitled to receive appropriate financial compensation under the Act. Structural defects include issues like foundation failure, deep concrete cracks, water seepage through walls or ceilings, faulty plumbing or electrical systems, or substandard construction materials. This warranty shifts the burden of building quality onto the developer, providing homebuyers with long-term peace of mind and protecting them from the financial burden of repairing poorly constructed buildings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
