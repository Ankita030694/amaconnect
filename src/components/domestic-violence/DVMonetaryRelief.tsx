import React from "react";

export default function DVMonetaryRelief({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Monetary Relief and Maintenance Orders
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Financial control is a common form of domestic abuse that leaves women unable to seek legal help or leave abusive homes. To address this vulnerability, Section 20 of the PWDVA gives magistrates the authority to order immediate monetary relief to cover the expenses and financial losses suffered by a woman as a result of domestic violence.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Claiming Maintenance under Section 20
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 20, a woman can claim maintenance for herself and her children. This maintenance is separate from and can be claimed in addition to maintenance under Section 125 of the Criminal Procedure Code or personal family laws. The amount ordered by the court must be adequate, fair, and consistent with the standard of living the woman was accustomed to in her matrimonial home.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When deciding the maintenance amount, the court reviews the husband's income, assets, and financial duties. The court can order the maintenance to be paid as a monthly payment or a lump sum, depending on the needs of the family. If the husband fails to pay the maintenance, the court can direct his employer to deduct the amount directly from his salary, or order his bank accounts to be frozen to ensure compliance.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Compensation for Medical Expenses and Losses
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In addition to basic maintenance, Section 20 allows women to claim compensation for specific financial losses caused by abuse. This includes reimbursement for medical expenses incurred due to physical injuries, compensation for loss of earnings caused by being forced away from work, and recovery for any destruction or damage to physical property within the household.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Furthermore, Section 22 gives the court the power to award separate compensation and damages for the mental agony, emotional distress, and harassment caused by the domestic violence. These financial reliefs help women secure the resources needed to pay medical bills, support their children, and establish financial independence away from the abuser.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Section 20 Maintenance</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Covers basic living costs for the woman and her children. Calculated based on the husband's financial capacity and the family's accustomed standard of living.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Section 22 Compensation</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Covers medical bills for physical trauma, compensation for lost employment income, and damages for emotional distress and mental agony.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
