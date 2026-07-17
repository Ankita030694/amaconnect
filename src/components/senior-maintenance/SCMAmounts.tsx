import React from "react";

export default function SCMAmounts({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Determining Maintenance Amounts
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When deciding how much maintenance a parent should receive, the tribunal must balance the actual needs of the senior citizen with the financial capacity of their children. The law sets clear boundaries for these payments while also allowing flexibility based on the cost of living and specific medical requirements.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Statutory Caps on Monthly Maintenance Allowance
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 9 of the Senior Citizens Act, the maximum monthly maintenance allowance that a tribunal can order is capped at ten thousand rupees. This statutory cap was introduced to ensure that a basic safety net is available to all parents. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            However, recognizing that ten thousand rupees may not cover high medical expenses or rent in metropolitan cities, many state amendments and judicial decisions have pushed to raise or remove this limit. Proposed amendments to the national Act aim to remove the ten thousand rupee cap entirely, allowing tribunals to award higher, realistic maintenance amounts based on the specific health conditions, age, and actual requirements of the senior citizen.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Assessing Children's Income and Financial Capacity
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To determine the exact maintenance amount, the tribunal reviews the financial capacity of the children or relatives. The children must submit declarations details of their income, monthly salaries, owned properties, and personal financial obligations.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the parent has multiple adult children, the tribunal can divide the maintenance responsibility among them. For example, if three children are working, the court can direct each child to pay a portion of the monthly allowance. If a child claims they are unemployed or lack income, the tribunal reviews their qualifications and potential earning capacity. A child cannot avoid their legal duty to support their parents simply by claiming they do not have a job, ensuring parents are protected.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Statutory Limits</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Currently capped at ten thousand rupees per month nationally, though state-level amendments and court rulings frequently award higher amounts to cover real medical and housing costs.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Liability Apportionment</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Tribunals distribute the financial duty among all adult children and grandchildren, assessing their income details and dividing the monthly payments fairly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
