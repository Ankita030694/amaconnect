import React from "react";

export default function ARHandlingRWANotices({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Handling RWA Notices and Harassment
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When housing societies issue warnings, levy arbitrary fines, or harass pet owners, the affected residents must respond with clear legal arguments. Understanding how to handle these notices prevents escalation and establishes your rights under the law.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Drafting Replies to Arbitrary Pet Fine Notices
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Many RWAs attempt to impose fines on pet owners for reasons like: the dog barking during the day, using the common lawn, or not submitting a pet registry form. RWAs do not have the statutory authority to levy monetary fines or restrict the basic movement of residents unless authorized by state municipal rules.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A written reply to such a notice should cite: the AWBI circular of 2015, the Supreme Court rulings protecting pets, and the lack of legal authority of the RWA to impose fines. The reply must state that any attempt to enforce these fines or restrict access to common areas will lead to consumer disputes or civil injunction suits, creating immediate legal counter-pressure.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Approaching Registrar of Societies against RWAs
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the RWA committee continues to harass the pet owner by withholding elevator keys, blocking water supplies, or restricting access to their flat, the owner can file a formal complaint before the Registrar of Cooperative Societies.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The complaint must detail: the nature of the harassment, copies of the arbitrary notices, proof of paid maintenance, and the violations of AWBI guidelines by the committee members. The Registrar holds the power to inspect society operations, strike down arbitrary bylaws, and suspend the RWA committee if they are found to be violating state laws, ensuring justice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Notice Response Elements</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cite 2015 AWBI circular and consumer safety rights. Reject the RWA's power to levy fines, and warn of civil litigation if harassment continues.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Registrar of Societies Complaint</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                File a petition detailing RWA overreach. The Registrar can invalidate illegal society bylaws and suspend non-compliant managing committees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
