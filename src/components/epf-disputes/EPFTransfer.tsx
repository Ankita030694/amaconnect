import React from "react";

export default function EPFTransfer({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            EPF Transfer Process during Job Changes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When changing jobs, transferring your accrued provident fund balance from your previous member ID to your new member ID is essential. Maintaining a single UAN history ensures that your continuous service is recorded accurately, which has major benefits for pension eligibility and income tax exemptions on withdrawals.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Form 13 Online via Member Portal
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The transfer process can be initiated online through the EPFO Member Unified Portal. The employee must log in, navigate to the online services section, and select the One Member One EPF Account (Transfer Request) option. This opens the digital Form 13 interface.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The employee must enter their UAN or previous member ID to fetch their employment details. They then select whether the transfer request should be attested by their previous employer or their current employer. Once selected and submitted, the portal generates a digital copy of Form 13 and sends it to the selected employer for online signature and verification, allowing the transfer to proceed automatically.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Solving Employer Attestation Delay Issues
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A common issue faced by employees is when a previous employer delays or refuses to sign the transfer request online. This often occurs due to disputes, pending dues, or administrative negligence. To bypass these delays, the EPFO allows employees to route their transfer request through their current employer.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the current employer verifies the details, they can attest the transfer request using their digital signature. If both employers refuse to cooperate, the employee can submit a physical Form 13 directly to the regional EPFO office where the old account is registered. The regional commissioner has the authority to verify the database and process the transfer without waiting for employer signatures, ensuring the employee's retirement savings are protected.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Form 13 Online Filing</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Initiated via the Member Unified Portal. Can be routed through previous or current employer for digital signature verification.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Attestation Bypass</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Allows current employer to sign the transfer request. Alternatively, physical Form 13 can be filed directly at the EPFO office for administrative processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
