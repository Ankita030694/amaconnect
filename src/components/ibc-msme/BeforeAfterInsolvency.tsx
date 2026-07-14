import React from "react";

export default function BeforeAfterInsolvency({ id }: { id?: string }) {
  const beforeChecks = [
    { title: "Verify Debtor Legal Status", desc: "Confirm the defaulting buyer is a registered Company or LLP. IBC does not apply to proprietorship or partnership firms." },
    { title: "Check the Debt Threshold", desc: "Ensure the total outstanding principal amount is at least 1 Crore rupees, as mandated by the Ministry of Corporate Affairs." },
    { title: "Confirm Absence of Pre-existing Dispute", desc: "Ensure there is no correspondence, arbitration, or litigation regarding product quality or payment delays prior to serving the demand notice." },
    { title: "Compile Document Trail", desc: "Gather signed purchase orders, delivery challans, invoices, and ledger accounts showing the unpaid balance." },
    { title: "Serve Section 8 Notice", desc: "Deliver the statutory demand notice in Form 3 or Form 4 and track delivery to the debtor registered office." },
    { title: "Wait for the 10-Day Window", desc: "Wait for ten days from delivery proof. Check if any payments are received or if a dispute is raised in writing." }
  ];

  const afterChecks = [
    { title: "Track NCLT Case Admission", desc: "Monitor NCLT cause lists for admission hearings and ensure proper representation by an insolvency advocate." },
    { title: "Submit Form B to the IRP", desc: "Submit your formal proof of claim in Form B to the Interim Resolution Professional within 14 days of the public announcement." },
    { title: "Submit Bank Statements", desc: "Attach certified bank statements showing non-receipt of payment to support your claim verification process." },
    { title: "Track Committee of Creditors (CoC) Status", desc: "Monitor CoC formation and proceedings. Know if your operational debt reaches the 10 percent voting rights threshold." },
    { title: "Review the Resolution Plans", desc: "Follow the development of resolution plans submitted by bidders and monitor potential payout percentages for operational creditors." },
    { title: "Monitor Liquidation Process", desc: "If no resolution plan is approved, track the liquidation proceedings to claim payouts under the Section 53 waterfall mechanism." }
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Before &amp; After Filing Insolvency Checklist
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Filing for insolvency requires meticulous planning and swift post-filing actions. MSMEs must follow a structured approach to ensure their application is admitted and their claims are verified by the resolution professional. Use this comprehensive checklist to navigate the phases of insolvency recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Before Filing Column */}
          <div className="p-6 bg-[#FAF9F5] rounded-3xl border border-gray-100 flex flex-col">
            <h3 className="text-lg font-bold text-red-700 mb-5 flex items-center gap-2">
              <span>📋</span> Before Filing Insolvency
            </h3>
            <div className="space-y-5 flex-grow">
              {beforeChecks.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-red-500 font-extrabold mt-0.5 select-none">[ ]</span>
                  <div>
                    <h4 className="font-bold text-[#2D2219] text-sm sm:text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed text-justify">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* After Filing Column */}
          <div className="p-6 bg-[#FAF9F5] rounded-3xl border border-gray-100 flex flex-col">
            <h3 className="text-lg font-bold text-emerald-700 mb-5 flex items-center gap-2">
              <span>📋</span> After Filing Insolvency
            </h3>
            <div className="space-y-5 flex-grow">
              {afterChecks.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-emerald-500 font-extrabold mt-0.5 select-none">[✓]</span>
                  <div>
                    <h4 className="font-bold text-[#2D2219] text-sm sm:text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed text-justify">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
