import React from "react";

interface OverviewClaimsProps {
  id: string;
}

export default function OverviewClaims({ id }: OverviewClaimsProps) {
  return (
    <section id={id} className="py-8 border-b border-gray-100 scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2219] mb-6">
        Overview of Motor Accident Claims in India
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            The Role of Motor Accident Claims Tribunals
          </h3>
          <p className="mb-4">
            The Motor Accident Claims Tribunals, commonly referred to as MACT, are specialized civil courts established under Section 165 of the Motor Vehicles Act of 1988. These tribunals were created to provide a speedy, cheap, and expeditious remedy to victims of road accidents, bypassing the lengthy and expensive procedures of traditional civil courts. In India, where road accidents claim thousands of lives daily, the tribunals serve as critical mechanisms for social justice. Unlike standard civil litigation, which is governed strictly by the Code of Civil Procedure, the tribunal is empowered to follow its own summary procedures, making it far more accessible to laypersons and grieving families.
          </p>
          <p className="mb-4">
            The jurisdiction of the tribunal is determined either by the place where the accident occurred, the place where the claimant resides or carries on business, or the place where the defendant resides. This wide choice of jurisdiction is intentionally designed to favor the victims, ensuring they do not have to travel long distances during times of physical or emotional distress. Furthermore, the tribunal is presided over by a judicial officer of the rank of a District Judge or an Additional District Judge, ensuring high legal standards and judicial rigor. The tribunal acts not just as an arbiter but as an active investigator, holding the power to summon witnesses, request police records, and direct insurance companies to produce details of coverage. By streamlining the adjudication process, these tribunals seek to restore victims and their dependents to a position of financial stability, compensating for lost income, medical bills, and emotional trauma.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            Strict Liability and No-Fault Liability Rules
          </h3>
          <p className="mb-4">
            The legal framework governing motor accident compensation in India is anchored in two distinct liability principles: no-fault liability and strict liability, which have evolved through statutory amendments. Under Section 164 of the Motor Vehicles Act, 1988, as amended in 2019, the concept of no-fault liability has been significantly strengthened to ensure immediate financial relief to victims without requiring them to prove negligence on the part of the vehicle owner or driver. This is a critical departure from traditional tort law, where a claimant must establish that the defendant was at fault. Under the no-fault liability regime, the mere occurrence of an accident involving a motor vehicle is sufficient to trigger the liability of the owner and the insurer.
          </p>
          <p className="mb-4">
            Currently, the law mandates a fixed compensation of five lakh rupees for death and two and a half lakh rupees for grievous hurt under this category. This statutory relief operates on a strict liability basis, meaning the insurance company cannot escape liability by claiming that the victim was negligent or that the accident was an act of God. The rationale behind this rule is deeply rooted in public welfare, recognizing that motor vehicles are inherently dangerous instruments and those who operate them must bear the risk of harm caused to others. By removing the burden of proving fault, the law prevents insurance companies from delaying payments through prolonged litigation over contributory negligence. Victims or their legal heirs can opt to claim compensation under this fixed, no-fault route, or they can pursue a fault-based claim under Section 166, where they must prove negligence but can seek a much higher, uncapped compensation amount based on actual financial loss.
          </p>
        </div>

        {/* Eligibility Criteria Component Section */}
        <div className="bg-amber-50/40 border border-amber-100 rounded-2xl p-6 sm:p-8 mt-6">
          <h4 className="text-lg font-bold text-[#2D2219] mb-4">
            Eligibility Criteria to File a Claim
          </h4>
          <p className="text-sm mb-4">
            To seek compensation through the Motor Accident Claims Tribunal under Section 166 of the Motor Vehicles Act, the petition must be filed by an eligible person. Understanding who holds the legal standing, or locus standi, is crucial to prevent premature dismissal of the claim. Below are the primary eligibility criteria established by Indian statutory law:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] font-bold mt-1 text-xs">✓</span>
              <div>
                <strong className="text-[#2D2219]">The Injured Victim:</strong> Any person who has sustained physical injuries, whether minor or grievous, in a road accident involving a motor vehicle is eligible to file a claim.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] font-bold mt-1 text-xs">✓</span>
              <div>
                <strong className="text-[#2D2219]">Legal Representatives of the Deceased:</strong> In the unfortunate event of a fatal accident, the legal heirs, including parents, spouse, and children, are eligible to file the petition for loss of dependency and estate.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] font-bold mt-1 text-xs">✓</span>
              <div>
                <strong className="text-[#2D2219]">Property Owners:</strong> If the accident has caused damage to a private property or third-party vehicle without causing bodily injury, the owner of such property is eligible to claim repair costs.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] font-bold mt-1 text-xs">✓</span>
              <div>
                <strong className="text-[#2D2219]">Authorized Agents:</strong> Any agent or legal representative who has been formally authorized by the injured person or the deceased victim's legal heirs can initiate the proceedings.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
