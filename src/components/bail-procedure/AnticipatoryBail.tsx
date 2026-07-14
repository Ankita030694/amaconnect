import React from "react";

export default function AnticipatoryBail({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Anticipatory Bail Filing Procedures
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Anticipatory bail, governed by Section 438 of the CrPC (Section 482 of the BNSS), is a critical legal shield for individuals who apprehend arrest on false, politically motivated, or malicious charges of a non-bailable offense. Unlike regular bail, which is applied for after an arrest has taken place, anticipatory bail is sought before custody is executed. It acts as a preemptive order directing that, in the event of an arrest, the individual shall be released immediately on bail upon furnishing necessary sureties.
          </p>
        </div>

        {/* Step Checklist for Filing */}
        <div className="bg-[#FAF9F5] border border-[#D4AF37]/20 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Step Checklist: Filing for Anticipatory Bail
          </h3>
          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            Follow this structured procedural path to draft, file, and argue an anticipatory bail petition before the competent court:
          </p>
          <div className="space-y-4">
            {[
              {
                step: "Step 1: Document Gathering & Apprehension Proof",
                desc: "Obtain a copy of the First Information Report (FIR) if registered. If no FIR is registered, compile documents demonstrating a reasonable, concrete apprehension of arrest, such as threat messages or civil dispute notices."
              },
              {
                step: "Step 2: Drafting the Petition",
                desc: "Work with an advocate to draft a petition detailing the facts of the case, highlighting the absence of any criminal intent, establishing a clean track record, and expressing unconditional willingness to cooperate with police inquiries."
              },
              {
                step: "Step 3: Filing in the Court of Session",
                desc: "Submit the drafted petition along with supporting affidavits and a power of attorney (vakalatnama) to the Court of Sessions. This is the primary court of choice, although a direct petition to the High Court is permitted in exceptional scenarios."
              },
              {
                step: "Step 4: Arguing for Interim Protection",
                desc: "During the first hearing, your advocate will request the judge to grant ad-interim protection from arrest until the final hearing. If granted, the police cannot arrest you while the petition is pending."
              },
              {
                step: "Step 5: Service of Notice to Public Prosecutor",
                desc: "The court will issue a notice to the state or Public Prosecutor, allowing them to examine the case files, present the police report, and argue against the grant of bail."
              },
              {
                step: "Step 6: Compliance with Bail Conditions",
                desc: "Upon the court granting anticipatory bail, you must comply with statutory conditions, such as joining the police investigation when summoned, not leaving the country without court permission, and not contacting or threatening witnesses."
              },
              {
                step: "Step 7: High Court Appeal (If Rejected)",
                desc: "If the Court of Sessions rejects the petition, a fresh application or appeal must be filed before the High Court of the respective state seeking similar protective orders."
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl p-4 bg-white shadow-sm flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-[#2D2219]">
                    {item.step}
                  </span>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Anticipatory bail is not a blanket immunity and is subject to strict judicial scrutiny. The Supreme Court in the Sushila Aggarwal case reaffirmed that the duration of anticipatory bail does not automatically end when the charge sheet is filed, it can continue till the end of the trial. However, the court has the absolute right to impose restrictions or cancel the bail if the accused is found to be abusing their liberty, violating bail conditions, or attempting to subvert the judicial process.
          </p>
        </div>
      </div>
    </section>
  );
}
