import React from "react";

export default function SCMEnforcement({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Enforcement of Maintenance Orders
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Securing a maintenance order from a tribunal is only the first step. The law contains strict provisions to ensure children comply with these orders quickly, preventing them from using procedural delays to avoid supporting their parents.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Recovery of Arrears and Fines for Non-compliance
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Once a Maintenance Tribunal issues an order, the children must deposit the monthly allowance within thirty days of the order date. If they fail to pay on time, the parent can file a recovery application before the tribunal.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The tribunal can issue a warrant for recovering the due amount in the same way fines are collected under the Code of Criminal Procedure. This includes attaching the child's bank accounts, seizing their personal property, or directing their employer to deduct the maintenance amount directly from their monthly salary, ensuring the parent receives support.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Penalties of Imprisonment for Defaulting Children
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If a child continues to default on their maintenance payments without a valid reason, the law provides for criminal penalties. Under Section 24 of the Act, if a person neglects their maintenance duties after a warrant is issued, the tribunal can sentence them to imprisonment.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The defaulting child can be sentenced to imprisonment for up to one month, or until the payment is made, whichever is earlier. Furthermore, under Section 24, abandoning a senior citizen completely after promising to care for them is a cognizable offense, carrying a penalty of up to three months of imprisonment, a fine of five thousand rupees, or both. These strict penalties deter neglect and ensure compliance.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Enforcement and Default Penalties</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Financial Recovery Directives</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Tribunals can issue warrants to seize bank accounts, attach salaries, or sell physical assets of the children to recover unpaid maintenance.
                </p>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Imprisonment Penalties</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Defaulting children face up to one month of jail time for unpaid maintenance. Abandonment carries up to three months of criminal imprisonment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
