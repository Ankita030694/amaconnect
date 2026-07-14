import React from "react";

export default function SecurityDeposit({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-8 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Recovering Withheld Security Deposits
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The security deposit is a sum paid by the tenant at the beginning of the tenancy to cover any potential damage or unpaid dues. However, many landlords withhold security deposits unreasonably, claiming deductions for routine wear and tear like whitewashing, which is illegal.
          </p>
        </div>

        {/* Timeline Roadmap Section */}
        <div className="my-4">
          <h3 className="text-lg font-bold text-[#2D2219] mb-6">
            Timeline Roadmap: Notice and Action
          </h3>
          <div className="relative border-l border-gray-200 ml-4 pl-6 space-y-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1 bg-white border-2 border-[#D4AF37] w-4 h-4 rounded-full flex items-center justify-center">
                <div className="bg-[#D4AF37] w-1.5 h-1.5 rounded-full"></div>
              </div>
              <h4 className="font-bold text-sm sm:text-base text-[#2D2219]">
                Day of Vacating: Key Handover and Inspection
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                The tenant should conduct a joint inspection of the property with the landlord. Take photos and videos of the empty house to establish its condition, and obtain a signed acknowledgment of key delivery.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1 bg-white border-2 border-[#D4AF37] w-4 h-4 rounded-full flex items-center justify-center">
                <div className="bg-[#D4AF37] w-1.5 h-1.5 rounded-full"></div>
              </div>
              <h4 className="font-bold text-sm sm:text-base text-[#2D2219]">
                Within 30 Days: The Refund Window
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Under modern rent guidelines and the Model Tenancy Act, the landlord is legally obligated to return the security deposit within one month of the tenant vacating. Any deductions must be itemized and shared.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1 bg-white border-2 border-[#D4AF37] w-4 h-4 rounded-full flex items-center justify-center">
                <div className="bg-[#D4AF37] w-1.5 h-1.5 rounded-full"></div>
              </div>
              <h4 className="font-bold text-sm sm:text-base text-[#2D2219]">
                Day 31 to 45: Serving a Formal Legal Notice
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                If the deposit is not refunded or if arbitrary deductions are made, the tenant should send a formal legal notice through an advocate. This demands the refund of the deposit within 15 days of receipt.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1 bg-white border-2 border-[#D4AF37] w-4 h-4 rounded-full flex items-center justify-center">
                <div className="bg-[#D4AF37] w-1.5 h-1.5 rounded-full"></div>
              </div>
              <h4 className="font-bold text-sm sm:text-base text-[#2D2219]">
                Day 46 and Beyond: Filing a Petition
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                If the landlord fails to comply with the legal notice, the tenant can file a claim before the Rent Authority or Rent Court to recover the amount, along with interest and compensation for mental distress.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Rules for Deductions from Security Deposit
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              Landlords can only deduct from the security deposit for unpaid rent, outstanding utility bills, or repairs needed due to damage caused by the tenant's negligence. Deductions for normal wear and tear, such as faded wall paint, minor scratches on floors, or aging plumbing fixtures, are legally prohibited. Landlords must provide receipts and invoices for the repair work done to justify any deductions they make.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
