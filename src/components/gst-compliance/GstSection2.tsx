import React from "react";

export default function GstSection2({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Understanding Input Tax Credit (ITC) Mechanics and Eligibility
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Input Tax Credit is a core feature of the GST model, allowing registered businesses to offset tax paid on purchases against their output tax liability. Correctly claiming and maximizing ITC is essential to maintain business cash flows, reduce tax liabilities, and ensure complete regulatory compliance.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Core Principles of Input Tax Credit under Section 16
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 16 of the CGST Act outlines the strict requirements for claiming Input Tax Credit on business purchases. Taxpayers must possess a valid tax invoice or debit note issued by a registered vendor, and must have received the goods or services. Additionally, the supplier must have deposited the tax collected with the government, and the claimant must file regular returns under Section 39. A key proviso mandates that recipients must pay vendors within one hundred and eighty days of the invoice date, or the credit will be reversed with interest. This interest is calculated from the date of credit utilization until reversal, demanding strict tracking.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Document Verification and Matching Requirements
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Claiming credit has evolved into a strict, automated matching process. Suppliers must upload invoice details in their GSTR-1, which then populate the static, monthly GSTR-2B statement for the recipient. Under Section 16(2)(aa), credit is only admissible if communicating invoices are visible in GSTR-2B. Monthly reconciliation cycles are vital to spot filing mismatches. If a vendor fails to file returns or defaults on payments, the recipient cannot claim the credit, making vendor compliance verification a primary corporate risk mitigation duty. Organizations must actively coordinate with default suppliers to secure credit clearance.
          </p>
        </div>
      </div>
    </section>
  );
}
