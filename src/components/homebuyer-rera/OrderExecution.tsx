import React from "react";

export default function OrderExecution({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Execution of RERA Orders and Execution Petitions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Securing a favorable RERA order is a major milestone, but ensuring the builder actually complies requires understanding the execution process. Homebuyers have strong legal tools to enforce recovery and penal interest.
          </p>
        </div>

        <div className="space-y-10">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Filing Execution Petitions under Section 40
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              Obtaining a favorable judgment from a RERA authority is only the first step in resolving a dispute, as the physical enforcement of the order often presents a separate legal challenge for homebuyers. When a developer fails to comply with a RERA order, whether it involves refunding money, paying delay compensation, or carrying out repairs, the buyer must file a formal execution petition under Section 40 of the Act. The execution petition is submitted to the same RERA authority that passed the original order, requesting it to enforce its decision against the non-compliant developer. In many cases, developers ignore the initial order or attempt to delay the process by filing appeals in the RERA Appellate Tribunal without depositing the mandated pre-deposit. To initiate execution, the homebuyer must submit a detailed application containing copies of the original order, evidence of service to the developer, and proof of non-compliance. The RERA authority then issues a show-cause notice to the developer, demanding an explanation for their failure to comply. If the developer remains unresponsive, the authority can initiate recovery proceedings. Filing an execution petition requires careful tracking, as any procedural delays can give developers time to divert funds or alienate assets. Homebuyers must remain proactive during this stage, regularly attending hearings and urging the authority to exercise its execution powers to ensure the judgment does not remain a paper decree. Additionally, execution petitions can request the attachment of the developer's bank accounts or the freezing of unsold units in the project. This pressure is often highly effective in forcing builders to negotiate settlements or release payouts, as they cannot continue commercial sales or operations while their primary assets and bank accounts are locked by official regulatory order.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Recovering Refunds as Arrears of Land Revenue
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              Under Section 40(1) of the RERA Act, if a promoter fails to pay any interest, penalty, or compensation, the recovery is conducted in the same manner as arrears of land revenue. This process involves the RERA authority forwarding a recovery certificate to the local District Collector or Magistrate of the area where the developer's properties or assets are situated. Once the recovery certificate is received, the revenue department is empowered to initiate attachment and auction proceedings against the developer's land, building projects, bank accounts, and personal properties. This mechanism is designed to bypass the slower civil court execution systems, leveraging the state's administrative revenue machinery to recover consumer dues. However, in practice, this process can suffer from administrative delays due to the heavy workload of district revenue offices. To expedite the recovery, homebuyers must coordinate between the RERA office and the local tehsildar or collector, ensuring that the recovery certificate is actively tracked and served. The collector has the power to issue arrest warrants against directors of partner firms or attach personal bank accounts if corporate assets are insufficient. When these recovery procedures are actively pursued, they serve as a powerful deterrent against developer defaults, forcing companies to liquidate properties or settle their liabilities. Homebuyers must maintain pressure on the revenue office to execute the certificate, as state actions are highly effective once the machinery is put into motion. Furthermore, recent judicial amendments allow the RERA authority itself to appoint receiver managers to take control of the developer's unfinished projects and complete construction using the proceeds of attached assets. This prevents the developer from hiding behind bankruptcy claims and ensures that buyers eventually receive their homes even if direct recovery is slow.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Enforcement of Penalty Interest and Dues
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              The enforcement of penalty interest is a key financial remedy under RERA, designed to offset the holding costs incurred by buyers during builder delays. Under Section 18 of the RERA Act, developers are required to pay interest at a rate prescribed by state rules, which is typically set at the State Bank of India lending rate plus two percent. This interest must be paid for every month of delay until the physical possession of the property is handed over to the buyer. If the builder refuses to pay this interest voluntarily, the homebuyer can seek relief from the RERA authority, which can issue an order specifying the exact interest liability. To ensure compliance, RERA rules mandate that this interest is calculated on the total amount paid by the buyer from the original date of default up to the actual date of possession. If the developer fails to pay, the interest accumulates and can be recovered using execution petitions or revenue recovery certificates. The strict enforcement of these interest payments prevents developers from treating buyer funds as interest-free loans to finance their operations. Furthermore, the interest liability continues to accrue monthly, creating a continuous financial burden on the developer that incentivizes them to speed up construction. Homeowners must ensure their petitions detail the exact payment timeline and the interest rate applicable under state regulations, as precise calculations prevent developers from disputing the interest amount and delaying execution proceedings further. In addition to the basic delay interest, Section 18 also allows homebuyers to claim a complete refund of their investment along with interest if they choose to withdraw from the project due to developer delay. This dual protection makes the interest provision a highly versatile tool for consumers seeking redress under the RERA framework.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
