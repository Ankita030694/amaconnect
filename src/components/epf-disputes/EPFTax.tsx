import React from "react";

export default function EPFTax({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Income Tax on EPF Withdrawals
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            EPF is popular among employees because it offers EEE (Exempt, Exempt, Exempt) tax status in India. This means the contributions made, interest earned, and final withdrawals are generally tax-free. However, this tax exemption is subject to strict conditions regarding the duration of continuous employment.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Tax Rules for Withdrawal Before 5 Years of Service
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If an employee withdraws their EPF balance before completing five years of continuous service, the withdrawn amount is fully taxable. Continuous service includes employment with multiple companies, provided the PF balance was transferred from the old accounts to the new one.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When withdrawing before five years, the total accumulated amount is taxed: the employer's contribution and interest earned are taxed as salary income, while the employee's contribution interest is taxed as income from other sources. Additionally, if the employee claimed tax deductions on their contributions under Section 80C in previous years, those deductions are reversed and taxed, making it essential to maintain UAN transfers during job changes.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Submitting Form 15G or 15H to Avoid TDS
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 192A of the Income Tax Act, if an employee withdraws more than fifty thousand rupees before five years of service, the EPFO must deduct Tax Deducted at Source (TDS). The TDS rate is ten percent if the employee has submitted their PAN card details, but rises to the maximum marginal rate of over thirty percent if no PAN is linked.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the employee's total taxable income for the financial year (including the EPF withdrawal) is below the taxable threshold, they can avoid TDS by submitting Form 15G (or Form 15H for senior citizens) online during the withdrawal application. This declaration confirms their income is below the taxable limit, directing the EPFO to release the full amount without deducting TDS.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Withdrawal After 5 Years</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Completely tax-free. No TDS is deducted by the EPFO, and the withdrawn amount does not need to be declared as taxable income in annual tax filings.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Withdrawal Before 5 Years</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Fully taxable. TDS at 10 percent is deducted for withdrawals above 50,000 rupees. TDS can be avoided by submitting Form 15G or 15H if eligible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
