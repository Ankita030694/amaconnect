import React from "react";

export default function EPFPension({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Employees Pension Scheme (EPS) Benefits
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The Employees Pension Scheme, 1995 (EPS), is a mandatory pension scheme linked with the EPF account. It provides monthly pension benefits to employees after retirement, or to their spouse and children in case of the employee's death, establishing long-term security.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Eligibility for Pension after 10 Years of Service
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To qualify for a regular monthly pension under the EPS, an employee must satisfy two core requirements. First, they must complete a cumulative total of ten years of contributory service. Second, they must reach the age of fifty-eight years to claim the full pension amount, though they can apply for an early, reduced pension after reaching the age of fifty.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If an employee has completed more than ten years of service but is under fifty, they cannot withdraw the pension money. They must wait until they reach fifty-eight to start receiving monthly payments. If they leave the workforce before completing ten years of service, they can choose to withdraw the pension accumulations using Form 10C, or obtain a Scheme Certificate to preserve their service history for future jobs, protecting their pension track.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Calculating Pension Amounts and Scheme Certificates
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The monthly pension amount is calculated using a standard formula: pensionable salary multiplied by the years of service, divided by seventy. The pensionable salary is calculated as the average of the basic salary earned during the last sixty months of service, capped at the statutory limit of fifteen thousand rupees per month unless the employee opted for a higher pension.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A Scheme Certificate is an official document issued by the EPFO that serves as proof of service years. If an employee changes jobs, they should submit their Scheme Certificate to their new employer. This links their past service years with their new member ID. When they eventually reach retirement age, the EPFO aggregates all the service periods to calculate the final pension, ensuring they receive the full benefits they earned over their career.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">EPS Key Elements</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Pension Eligibility Rules</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Requires a minimum of ten years of contributory service.</li>
                  <li>Full pension begins at fifty-eight years of age.</li>
                  <li>Early, reduced pension available at fifty years of age.</li>
                  <li>Compulsory heirs receive family pension in case of death.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Scheme Certificate Benefits</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Acts as official proof of continuous service years.</li>
                  <li>Allows employees to link multiple member IDs together.</li>
                  <li>Essential when changing jobs before retirement.</li>
                  <li>Ensures continuous tracking of pension rights.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
