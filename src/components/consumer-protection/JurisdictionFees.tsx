import React from "react";

export default function JurisdictionFees({ id }: { id?: string }) {
  const comparisonData = [
    {
      level: "District Commission",
      limit: "Up to 50 lakh rupees",
      fees: "Nil (up to 5 lakh) or 200 to 1,000 rupees",
      appeal: "State Commission",
      appealTime: "Within 45 days of order receipt",
    },
    {
      level: "State Commission",
      limit: "Above 50 lakh to 2 crore rupees",
      fees: "2,000 to 2,500 rupees",
      appeal: "National Commission (NCDRC)",
      appealTime: "Within 30 days of order receipt",
    },
    {
      level: "National Commission (NCDRC)",
      limit: "Above 2 crore rupees",
      fees: "3,000 to 7,500 rupees",
      appeal: "Supreme Court of India",
      appealTime: "Within 30 days of order receipt",
    },
  ];

  const feeStructure = [
    { value: "Up to 5 lakh rupees", fee: "Nil" },
    { value: "Above 5 lakh to 10 lakh rupees", fee: "200 rupees" },
    { value: "Above 10 lakh to 20 lakh rupees", fee: "400 rupees" },
    { value: "Above 20 lakh to 50 lakh rupees", fee: "1,000 rupees" },
    { value: "Above 50 lakh to 1 crore rupees", fee: "2,000 rupees" },
    { value: "Above 1 crore to 2 crore rupees", fee: "2,500 rupees" },
    { value: "Above 2 crore to 4 crore rupees", fee: "3,000 rupees" },
    { value: "Above 4 crore to 6 crore rupees", fee: "4,000 rupees" },
    { value: "Above 6 crore to 10 crore rupees", fee: "5,000 rupees" },
    { value: "Above 10 crore rupees", fee: "7,500 rupees" },
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Pecuniary Jurisdiction &amp; Court Fees
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Under the Consumer Protection Act, 2019, jurisdiction is determined by the total value of goods or services paid as consideration at the time of purchase. This is a significant departure from the 1986 Act, where jurisdiction was decided based on the value of the goods plus the compensation claimed, which often led to inflated claims to bypass lower courts. The pecuniary limits were further revised by the Central Government in December 2021.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Comparison Table: Commission Hierarchies
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            The table below compares the revised limits, fees, and appeal routes across the three tiers of consumer commissions:
          </p>

          <div className="overflow-x-auto border border-gray-100 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-[#FAF8F5] border-b border-gray-200 text-xs sm:text-sm font-bold text-[#2D2219]">
                  <th className="p-4">Forum Level</th>
                  <th className="p-4">Pecuniary Jurisdiction (Dec 2021 Rules)</th>
                  <th className="p-4">Estimated Court Fee</th>
                  <th className="p-4">Appeal Forum</th>
                  <th className="p-4">Limitation for Appeal</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm text-gray-600 divide-y divide-gray-100">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50">
                    <td className="p-4 font-bold text-[#2D2219]">{row.level}</td>
                    <td className="p-4">{row.limit}</td>
                    <td className="p-4">{row.fees}</td>
                    <td className="p-4">{row.appeal}</td>
                    <td className="p-4">{row.appealTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Court Fee structure */}
        <div className="bg-[#FAF8F5] border border-gray-200/60 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mb-4">
            Schedule of Consumer Court Fees (Consumer Protection Rules, 2020)
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
            Court fees are structured to keep litigation affordable. For cases involving transaction amounts below five lakh rupees, no fee is payable:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {feeStructure.map((item, idx) => (
              <div 
                key={idx} 
                className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100 text-xs sm:text-sm"
              >
                <span className="text-gray-500">{item.value}</span>
                <span className="font-bold text-[#2D2219] bg-[#FDFBF7] px-2 py-0.5 rounded border border-[#D4AF37]/20">
                  {item.fee}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
