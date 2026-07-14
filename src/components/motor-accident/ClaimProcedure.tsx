import React from "react";

interface ClaimProcedureProps {
  id: string;
}

export default function ClaimProcedure({ id }: ClaimProcedureProps) {
  const steps = [
    {
      title: "Filing the FIR",
      timeframe: "Within 24 Hours",
      desc: "Report the incident to the local jurisdiction police station. Obtain a free copy of the First Information Report to lock in crucial accident details, vehicle registration numbers, and witness testimonies."
    },
    {
      title: "Medical Record Compilation",
      timeframe: "Days 1 to 30",
      desc: "Collect all original hospital admissions, discharge summaries, treatment logs, pharmacy bills, and disability certificates from treating medical officers to establish physical damage."
    },
    {
      title: "Detailed Accident Report (DAR)",
      timeframe: "Within 90 Days",
      desc: "The investigating police officer prepares and submits the DAR to the Tribunal, containing verified reports, photographs, insurance details, and driver licensing status."
    },
    {
      title: "Filing of the Claim Petition",
      timeframe: "Flexible (Soonest Preferred)",
      desc: "File a formal petition under Section 166 or Section 164 of the Motor Vehicles Act before the local MACT having jurisdiction over your residence or the accident location."
    },
    {
      title: "Summons and Response",
      timeframe: "Days 90 to 150",
      desc: "The Tribunal issues formal notices to the owner, driver, and insurance provider of the offending vehicle. The respondents must submit written responses and policy disclosures."
    },
    {
      title: "Trial and Award",
      timeframe: "12 to 24 Months",
      desc: "Conduct cross-examinations of witnesses, medical experts, and employers. The Tribunal then calculates the final compensation package and passes the binding award."
    }
  ];

  return (
    <section id={id} className="py-8 border-b border-gray-100 scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2219] mb-6">
        Step-by-Step MACT Claim Procedure
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            Filing the First Information Report (FIR)
          </h3>
          <p className="mb-4">
            Filing a First Information Report, commonly known as an FIR, at the nearest police station having jurisdiction over the accident site is the foundational step in the legal process of claiming compensation. Under Section 154 of the Code of Criminal Procedure, the police are duty-bound to register an FIR upon receiving information about a cognizable offense, which road accidents involving bodily injury or death invariably are. The FIR acts as the primary official record that verifies the date, time, and exact location of the accident, as well as the registration numbers of the vehicles involved and the identities of the drivers and eyewitnesses.
          </p>
          <p className="mb-4">
            It is absolutely critical that the FIR is filed immediately after the occurrence of the incident. Any unexplained delay in filing the FIR can lead to suspicions of fabrication or collusion, which defense lawyers for insurance companies often exploit to contest the legitimacy of the claim. If the victim is hospitalized and unable to visit the station, the police are required to record the statement at the hospital. A copy of the FIR must be obtained by the victim or their family, as it forms the basis of all subsequent investigations and is a mandatory document for the tribunal. The FIR initiates the police investigation, during which they visit the spot, draft a site map, conduct mechanical inspections of the vehicles, and record statements. This document serves as the first objective proof that the accident did indeed occur, precluding any claims by the insurer that the injuries were sustained in a different, non-compensable manner.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            Submission of Detailed Accident Report (DAR)
          </h3>
          <p className="mb-4">
            The Detailed Accident Report, or DAR, is a comprehensive investigative document introduced to accelerate the process of motor accident claims in India. Following directives from the Supreme Court and subsequent amendments to the Motor Vehicles Rules, the investigating police officer is mandated to compile and submit the DAR to the claims tribunal within a strict timeline, typically within ninety days of the accident. The DAR is a crucial consolidation of evidence that includes the FIR, the site plan, photographs of the accident scene, details of the victims, their medical certificates, proof of income, and the insurance details of the offending vehicle.
          </p>
          <p className="mb-4">
            The police must also serve copies of the DAR to the victim, the owner of the offending vehicle, and the insurance company. The integration of the DAR system has transformed the MACT litigation landscape. Previously, claimants had to independently gather all records and file a petition, which took months. Now, the DAR itself is treated as a claim petition under Section 166(4) of the Motor Vehicles Act if the victim or their representatives choose to accept it as such. This reduces the burden on the victim to file a separate petition from scratch. When the DAR is submitted, the tribunal schedules a hearing and calls upon the insurance company to submit its response or offer a settlement. The DAR serves as an objective, verified repository of facts, preventing the manipulation of evidence and ensuring that the tribunal has all necessary data to evaluate the claim without unnecessary delays.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            Presenting the Petition before the Tribunal
          </h3>
          <p className="mb-4">
            Presenting the formal petition before the Motor Accident Claims Tribunal is the final procedural phase of initiating a claim if a settlement cannot be reached through the DAR process. The petition must be drafted carefully, specifying the personal details of the claimant, details of the deceased or injured person, their monthly income, the nature of the injuries, the duration of hospitalization, and the total financial loss incurred. It must also detail the negligence of the driver of the offending vehicle, the registration number of the vehicle, and the name of the insurance company.
          </p>
          <p className="mb-4">
            Once filed, the tribunal issues summons to the driver, the owner of the vehicle, and the insurance company, requiring them to file their written statements. The proceedings that follow are judicial in nature. The claimants must present evidence, including testimony from eyewitnesses, doctors who treated the victim, and employers who can verify income. The insurance company has the right to cross-examine these witnesses to contest either the negligence or the quantum of compensation claimed. After hearing both sides and examining the evidence, the tribunal passes an award determining the compensation amount and directing the insurance company to pay the sum, along with interest, usually within thirty days of the order. The presentation of the petition requires strategic legal drafting, as any discrepancy between the petition and the police reports can lead to a reduction in the compensation amount or total rejection of the claim.
          </p>
        </div>

        {/* Timeline Component Section */}
        <div className="mt-8">
          <h4 className="text-lg font-bold text-[#2D2219] mb-6">
            The MACT Claim Roadmap and Timeline
          </h4>
          <div className="relative border-l-2 border-amber-200 ml-4 pl-6 space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#D4AF37] border-2 border-white shadow-sm" />
                
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                    {step.timeframe}
                  </span>
                  <h5 className="text-base font-bold text-[#2D2219] mb-2">
                    {step.title}
                  </h5>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
