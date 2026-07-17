import React from "react";

export default function PNSDMSection133({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing Public Nuisance Complaints under Section 133
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            One of the most effective and speedy legal routes against persistent public nuisance is Section 133 of the Code of Criminal Procedure, 1973 (CrPC). This section gives executive magistrates wide powers to remove public obstructions or hazards quickly, bypassing slow civil lawsuits.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Approaching the Sub-Divisional Magistrate (SDM)
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A citizen or a group of residents can file a petition under Section 133 before the Sub-Divisional Magistrate (SDM) or District Magistrate (DM) of their area. The petition must describe the ongoing nuisance, such as a factory discharging toxic fumes in a residential area, a commercial generator operating without silencers, or unauthorized construction blocking a public road.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The petition must be accompanied by supporting evidence, including photographs, witness statements, police reports, and decibel measurements if applicable. The SDM can also direct the local police to submit an independent report verifying the facts on the ground, establishing a record of the nuisance.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Conditional Orders to Remove or Stop Nuisance
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If satisfied by the petition and police report that a public nuisance exists, the SDM will pass a conditional order. This order directs the offending party to remove the obstruction, shut down the polluting activity, or install silencers/filters within a set period.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the offender objects to the order, they must appear before the magistrate to show cause why the order should not be made permanent. If they fail to appear or show sufficient cause, the SDM will make the order absolute. Under Section 188 of the IPC, violating an absolute order is a criminal offense, and the magistrate can direct the local police to physically remove the nuisance and arrest the offender, securing the community's health.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Section 133 CrPC Action Steps</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Petition Filing</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Draft petition explaining the public nature of the nuisance.</li>
                  <li>Include photo evidence, location tags, and witness statements.</li>
                  <li>File before the local SDM or District Magistrate.</li>
                  <li>Request a police report to verify the nuisance.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Magistrate Directives</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>SDM issues a conditional stop or removal order.</li>
                  <li>Hearing conducted to let the offender explain.</li>
                  <li>Final absolute order issued if no cause is shown.</li>
                  <li>Police execution of order under Section 188.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
