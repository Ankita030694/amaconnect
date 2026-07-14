import React from "react";

export default function CostBreakdown({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 border-b border-gray-100 pb-12">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Cost Breakdown of Startup Incorporation
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            When budgeting for your new venture, it is essential to understand both the direct government levies and the professional fees associated with incorporation. While the central government has waived the basic registration fees for companies with an authorized capital of up to fifteen lakh rupees, several ancillary costs and state-level stamp duties remain. A clear breakdown prevents unexpected cash flow constraints during the initial phase of setup.
          </p>
        </div>

        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Government Registration Fees and Taxes
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            The core government expenses comprise name approval, digital signatures, stamp duty, and tax processing fees. Reserving a name through the RUN service costs a flat fee of one thousand rupees. Class 3 Digital Signature Certificates cost between one thousand and two thousand five hundred rupees per director, depending on the vendor. The actual filing of the SPICe-Plus form is free of registration charges for smaller companies, but founders must pay state-specific stamp duty for the Memorandum and Articles of Association. This stamp duty varies heavily across states, ranging from a nominal thousand rupees in Delhi to over fifteen thousand rupees in states like Punjab or Madhya Pradesh.
          </p>

          {/* Cost breakdown table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#FDFBF7]">
                <tr>
                  <th className="px-6 py-3.5 text-left text-xs font-bold text-[#2D2219] uppercase tracking-wider">Fee Category</th>
                  <th className="px-6 py-3.5 text-left text-xs font-bold text-[#2D2219] uppercase tracking-wider">Approximate Cost (INR)</th>
                  <th className="px-6 py-3.5 text-left text-xs font-bold text-[#2D2219] uppercase tracking-wider">Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs text-gray-600">
                <tr>
                  <td className="px-6 py-4 font-medium text-[#2D2219]">DSC (Digital Signature Certificate)</td>
                  <td className="px-6 py-4">1,000 to 2,500 per director</td>
                  <td className="px-6 py-4">One time (Valid for 2 years)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-[#2D2219]">RUN Name Reservation</td>
                  <td className="px-6 py-4">1,000 per attempt</td>
                  <td className="px-6 py-4">One time (Per reservation)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-[#2D2219]">State Stamp Duty (MoA / AoA)</td>
                  <td className="px-6 py-4">1,000 to 15,000 (State dependent)</td>
                  <td className="px-6 py-4">One time (Based on Capital)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-[#2D2219]">PAN and TAN Processing Fee</td>
                  <td className="px-6 py-4">130 to 150</td>
                  <td className="px-6 py-4">One time</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white shadow-sm">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Professional Fees for Chartered Accountants
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            While the online portals are designed to be self-service, navigating the terminology, drafting the clauses of the Articles of Association, and coordinating with certifying authorities require professional expertise. Most startups hire Chartered Accountants, Company Secretaries, or corporate lawyers to handle the incorporation end-to-end. Professional charges typically range from five thousand to twenty thousand rupees, depending on the complexity of the shareholding structure and the inclusion of customized co-founders agreements.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Hiring a professional is highly recommended to avoid compliance errors. Mistakes made during registration, such as choosing incorrect industry classification codes or drafting restrictive objects clauses in the MoA, can lead to multiple form rejections and costly post-incorporation amendments. Engaging an expert ensures the process goes smoothly on the first attempt, leaving you free to focus on building your core product and talking to early customers.
          </p>
        </div>
      </div>
    </section>
  );
}
