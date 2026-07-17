import React from "react";

export default function PNWasteDumping({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Solid Waste Dumping and Encroachments
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Unauthorized dumping of municipal solid waste, construction debris, or commercial garbage on vacant plots and roadsides is a major public nuisance. It blocks access, breeds disease, and pollutes local soil and water, violating the rights of residents.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Municipal Rules for Waste Management
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Solid waste management in India is governed by the Solid Waste Management Rules, 2016, framed under the Environment Protection Act. The rules place a statutory duty on local municipal authorities to establish systems for waste collection, transport, segregation, and scientific disposal.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under these rules, throwing, burning, or burying solid waste in open public spaces, drains, or vacant plots is strictly prohibited. The municipal bylaws empower authorities to impose spot fines on individuals or businesses that dump garbage illegally. Furthermore, developers must dispose of construction and demolition debris at designated municipal recycling sites, with violations leading to heavy penalties.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Nuisance Complaints against Local Municipal Bodies
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When local municipal bodies fail to collect garbage, letting huge dumps build up in residential neighborhoods, they violate their statutory duties. In such cases, citizens can file complaints directly on the municipal grievance portal or submit written petitions to the health officer or commissioner.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the municipality ignores these complaints, residents can file a public interest lawsuit or approach the Sub-Divisional Magistrate under Section 133 of the CrPC. The SDM has the authority to issue a conditional order directing the municipal corporation to clear the garbage dumps, fix sanitation systems, or clear public road encroachments within a set timeframe. This administrative pressure forces local bodies to fulfill their duties, securing clean neighborhoods.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Waste Management Guidelines</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Solid Waste Rules, 2016</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Mandates door-to-door garbage collection.</li>
                  <li>Prohibits open burning or dumping of waste.</li>
                  <li>Imposes spot fines on offending businesses.</li>
                  <li>Requires segregation into wet, dry, and domestic hazard waste.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Municipal Accountability</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Grievances can be filed with the municipal health officer.</li>
                  <li>Section 133 CrPC orders can force garbage removals.</li>
                  <li>Municipalities are liable for cleaning drains and sewers.</li>
                  <li>Allows public lawsuits in case of persistent negligence.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
