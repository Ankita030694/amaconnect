import React from "react";

export default function MBMedicalBonus({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Medical Bonus and Nursing Breaks
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            In addition to paid leave, the Maternity Benefit Act grants female employees specific financial and daily rest benefits. These statutory rights are designed to support the financial and physical well-being of the mother during and after childbirth.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Right to Claim Statutory Medical Bonus
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 8 of the Act, every woman entitled to maternity benefits is also eligible to receive a medical bonus from her employer. This bonus is paid if the employer does not provide pre-natal confinement and post-natal medical care free of charge.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The statutory medical bonus amount is updated periodically by the central government. Currently, the minimum medical bonus is set at three thousand five hundred rupees. It must be paid to the employee along with her first maternity benefit payment. If the employer refuses to pay this bonus, the employee can include this in her complaint to the Labor Inspector, ensuring recovery.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Mandatory Daily Breaks for Nursing Mothers
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When a woman returns to her duties after childbirth, she requires regular intervals to feed her infant. Section 11 of the Act mandates that every woman who returns to work must be allowed daily breaks for nursing.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The employer must allow her two breaks of a prescribed duration daily for nursing the child until the child reaches the age of fifteen months. These nursing breaks are in addition to the standard rest intervals allowed to her. The employer cannot deduct wages or increase working hours to compensate for these nursing breaks, as doing so violates basic labor rules.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Nursing and Financial Benefits</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Medical Bonus (Section 8)</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Paid if free pre-natal and post-natal care is not provided. Set at a minimum of three thousand five hundred rupees, paid along with leave salary.
                </p>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Nursing Breaks (Section 11)</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Two daily breaks in addition to standard rest intervals. Mandatory until the child reaches fifteen months. No wage reductions permitted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
