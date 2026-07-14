import React from "react";

export default function MaintenanceEnforcement({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Enforcement of Maintenance Orders
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            The enforcement of maintenance orders is a critical aspect of family law in India, designed to prevent destitution and ensure that dependent spouses and children receive the financial support decreed by the court. While obtaining a maintenance order under Section 125 of the Code of Criminal Procedure or personal laws is a significant legal victory, the actual recovery of these funds often presents a challenging obstacle. Wives and children frequently face situations where the husband deliberately defaults on payments, hides his income, or quits his employment to avoid complying with the court's directives. To address this, Indian courts have established robust execution procedures that allow the dependent party to file for the enforcement of the maintenance order in the family court. The legal framework provides the court with wide-ranging powers to attach the husband's salary, seize his bank accounts, or auction his property to recover the unpaid maintenance amount. Additionally, recent judicial decisions have emphasized that maintenance is a continuous obligation and that husbands cannot escape their responsibility by claiming financial hardship or unemployment. The court expects the defaulting spouse to make honest efforts to clear the dues, failing which severe legal consequences follow. Understanding the enforcement mechanism is essential for dependents to secure their financial survival, as a mere paper decree is ineffective without active execution proceedings. Spouses must act promptly when defaults occur, maintaining clear records of all payments received and missed to present a strong case before the execution court. Filing execution petitions in a timely manner prevents the claims from becoming time-barred, ensuring that the legal remedies remain fully available to the distressed dependents.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-[#FAF9F5]">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Execution under Section 125 CrPC and Recovery of Arrears
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Section 125 of the Code of Criminal Procedure (now replaced by the relevant provisions of the Bharatiya Nagarik Suraksha Sanhita, or BNSS) offers a swift, summary remedy for the recovery of maintenance arrears, allowing the court to issue a warrant for levying the amount due. When a spouse fails to pay the ordered maintenance without sufficient cause, the dependent party can file an execution petition under Section 125(3) of the CrPC to recover the accumulated arrears. The law specifies that an application for execution must be made within one year from the date on which the maintenance became due, making timely action critical for the claimant. Upon receiving the application, the court issues a show-cause notice to the defaulting spouse, requiring him to explain the non-payment. If he fails to offer a valid justification or refuses to clear the arrears, the court can issue a warrant for levying the amount in the manner provided for levying fines. This includes the attachment of both movable and immovable properties belonging to the defaulter, which can be sold to satisfy the debt. Furthermore, courts can direct the husband's employer to deduct the maintenance amount directly from his monthly salary and deposit it in the court or the wife's bank account. This statutory mechanism ensures that the recovery process remains structured and legally enforceable, minimizing the opportunities for the husband to evade his financial obligations through delay tactics or concealment of assets. The Supreme Court has clarified that the one-year limitation period is a directory guideline, and courts can condone delays if the wife shows sufficient cause, ensuring that justice is not denied due to procedural technicalities.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Penalties for Non-Payment and Criminal Consequences
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            In cases of persistent non-compliance and willful default, the law prescribes stringent penalties, including imprisonment, to compel the husband to satisfy the maintenance decree. Under Section 125(3) of the CrPC, the magistrate has the power to sentence the defaulting individual to imprisonment for a term that may extend to one month, or until payment is made sooner, for each month's default. Crucially, the Supreme Court has ruled that sentencing a defaulting husband to jail does not wipe out the outstanding liability for arrears. The husband remains legally obligated to pay the unpaid maintenance amount even after serving his prison sentence, as jail time is a punitive measure to enforce compliance rather than a substitute for the financial debt. In addition to imprisonment, courts can impose monetary penalties, issue lookup circulars to prevent the defaulter from leaving the country, and suspend his passport. The judiciary has increasingly taken a stern stance against husbands who engage in deliberate asset stripping or transfer property to relatives to present themselves as insolvent. Courts frequently hold that a healthy, able-bodied man has a moral and legal duty to earn and support his family, and any attempt to evade this duty will result in severe legal action. These strict penalties serve as a powerful deterrent, forcing defaulting spouses to prioritize their maintenance obligations and respect the authority of the family court, thereby securing the livelihood of the dependent spouse and children. By combining civil recovery tools like property attachment with criminal sanctions like imprisonment, the Indian legal system attempts to balance the rights of both parties while ensuring that vulnerable dependents are not left without financial recourse.
          </p>
        </div>
      </div>
    </section>
  );
}
