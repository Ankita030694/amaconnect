import React from "react";

interface LimitationTimelinesProps {
  id: string;
}

export default function LimitationTimelines({ id }: LimitationTimelinesProps) {
  return (
    <section id={id} className="py-8 border-b border-gray-100 scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2219] mb-6">
        Statutory Limitation and Tribunal Timelines
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            Abolition of Six-Month Limitation Rule
          </h3>
          <p className="mb-4">
            The statutory limitation period for filing a motor accident claim in India has undergone significant legislative revisions. Under the original Motor Vehicles Act of 1939, a limitation period of six months was prescribed, which was carried over into the 1988 Act. However, in 1994, the Parliament amended Section 166(3) to completely abolish the limitation period, allowing victims to file compensation petitions at any time after the accident. This humanitarian amendment recognized that many victims belong to marginalized, rural, or illiterate backgrounds and may take years to recover from severe injuries or secure the necessary legal representation.
          </p>
          <p className="mb-4">
            Unfortunately, the Motor Vehicles Amendment Act of 2019 has reintroduced a strict limitation period, creating a major shift in legal strategy. Under the amended Section 166(3), which came into effect on April 1, 2022, a claim petition must be filed within six months of the occurrence of the accident. The amended law does not contain any provision for condoning delay, meaning that if a petition is not filed within this six-month window, the right to claim compensation is permanently extinguished. This change makes it imperative for victims and their families to initiate legal proceedings immediately after the accident. While the previous open-ended timeline allowed for delayed filings, the current strict timeline requires claimants to act with extreme urgency, securing the FIR and compiling the necessary documents to file the petition before the six-month deadline expires.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            Standard Disposal Timelines of MACT Cases
          </h3>
          <p className="mb-4">
            The duration of proceedings before the Motor Accident Claims Tribunal varies widely depending on the complexity of the case, the number of parties involved, and the caseload of the specific tribunal. While the law mandates summary procedures to ensure speedy disposal, a typical MACT case can take anywhere from one to three years to reach a final judgment. In cases where the offending vehicle is uninsured or the driver's license is fake, litigation tends to drag on as the parties dispute liability and the insurance company seeks to exonerate itself.
          </p>
          <p className="mb-4">
            To address these delays, the Supreme Court has issued guidelines requiring police officers to submit the Detailed Accident Report within ninety days of the accident, which the tribunal can immediately treat as a claim petition. When the insurance company accepts the DAR findings, they are encouraged to make a settlement offer within thirty days. If the offer is accepted by the claimant, the case is disposed of immediately, offering a fast-track resolution within four to six months of the accident. However, if the claimant rejects the offer, or if the insurer disputes the claims, the case goes to trial. The trial involves framing issues, recording evidence, cross-examining witnesses, and delivering arguments. Even after the tribunal passes the award, the insurer has ninety days to file an appeal before the High Court, which can further delay the receipt of compensation, emphasizing the need for skilled legal representation to navigate these timelines.
          </p>
        </div>
      </div>
    </section>
  );
}
