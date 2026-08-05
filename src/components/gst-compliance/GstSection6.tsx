import React from "react";

export default function GstSection6({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Online GST Appeals and Appellate Tribunal Roadmap
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            If a taxpayer disagrees with a demand order passed by a GST adjudicating officer, they have the statutory right to appeal. The process is governed by strict online filing timelines and pre-deposit rules.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            First Appellate Authority and Online Filing Process
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 107 of the CGST Act, taxpayers can challenge demand orders before the first Appellate Authority (Commissioner of Appeals) within three months of communication. The appeal is filed online in Form GST APL-01, along with a mandatory ten percent pre-deposit of the disputed tax, which stays recovery of the remaining ninety percent. Fulfilling the timeline is critical, as the authority can only condone a one-month delay under exceptional circumstances, after which appeals are rejected as time-barred. Late filings are generally inadmissible, forcing businesses to clear demands prematurely.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Structure and Scope of the GST Appellate Tribunal (GSTAT)
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The GST Appellate Tribunal is the second appeal tier, consisting of National and State Benches. Aggrieved parties can appeal first appellate decisions before GSTAT in Form GST APL-05 within three months. Filing requires an additional twenty percent pre-deposit of the disputed tax, bringing total pre-deposits to thirty percent. The tribunal contains judicial and technical members, resolving complex legal questions. GSTAT decisions are final on facts, though appeals can proceed to High Courts on substantial questions of law. This roadmap provides businesses a structured legal remedy.
          </p>
        </div>
      </div>
    </section>
  );
}
