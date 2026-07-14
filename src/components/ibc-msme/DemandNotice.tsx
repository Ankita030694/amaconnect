import React from "react";

export default function DemandNotice({ id }: { id?: string }) {
  const steps = [
    {
      step: "01",
      title: "Draft the Notice in Form 3 or Form 4",
      desc: "Prepare the statutory demand notice in accordance with the IBC rules. Form 3 is a general demand notice, while Form 4 is a demand notice accompanied by a copy of an invoice. Clearly specify the exact debt amount and date of default."
    },
    {
      step: "02",
      title: "Compile Supporting Financial Records",
      desc: "Attach all relevant documents including unpaid invoices, purchase orders, proof of delivery, bank statements proving non-receipt of payment, and the supplier ledger accounts showing the outstanding balance."
    },
    {
      step: "03",
      title: "Serve via Approved Delivery Modes",
      desc: "Send the notice to the registered office of the corporate debtor via registered post with acknowledgment due, speed post, or hand delivery. You can also send an electronic copy to the registered email address of the debtor."
    },
    {
      step: "04",
      title: "Track Delivery and Record Service Proof",
      desc: "Maintain proof of delivery such as postal tracking receipts, signed acknowledgment cards, or email delivery reports. This proof is mandatory when filing the subsequent insolvency petition in the NCLT."
    },
    {
      step: "05",
      title: "Wait 10 Days for Debtor Response",
      desc: "Under the law, the debtor has exactly 10 days from receipt of the notice to respond. They must either pay the unpaid operational debt or show the existence of a pre-existing dispute before the notice was served."
    },
    {
      step: "06",
      title: "Assess Response and Determine Next Step",
      desc: "If the debtor pays, the matter is resolved. If the debtor replies alleging a pre-existing dispute, assess if the dispute is genuine or a mere sham. If the debtor remains silent or fails to pay, proceed to file a Section 9 petition."
    }
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Serving a Section 8 Demand Notice
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Serving a demand notice under Section 8 of the IBC is a mandatory prerequisite for initiating corporate insolvency proceedings. This notice acts as a formal warning, giving the corporate debtor a ten-day window to settle the dues or notify the creditor of any pre-existing disputes. A properly drafted and served Section 8 notice is critical, as any procedural flaw at this stage can result in the rejection of the insolvency petition by the NCLT.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219] mb-6">
            Step-by-Step Checklist for Serving Section 8 Demand Notice
          </h3>

          <div className="relative border-l-2 border-[#D4AF37]/20 ml-4 pl-6 space-y-8">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                {/* Bullet circle */}
                <div className="absolute -left-[35px] top-0.5 w-6 h-6 rounded-full bg-white border-2 border-[#D4AF37] flex items-center justify-center text-[10px] font-bold text-[#D4AF37] shadow-sm">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold text-[#2D2219] text-base mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed text-justify">
                    {item.desc}
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
