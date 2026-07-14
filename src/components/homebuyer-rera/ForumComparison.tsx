import React from "react";
import Link from "next/link";

export default function ForumComparison({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Comparing RERA vs NCLT vs Consumer Courts
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When developers default on their commitments, homebuyers have multiple legal channels to seek relief. Selecting the correct legal forum is critical to securing your investment and avoiding prolonged litigation.
          </p>
        </div>

        {/* Comparison Table Section Type */}
        <div className="overflow-x-auto my-2 border border-gray-200 rounded-2xl shadow-sm">
          <table className="w-full text-left border-collapse bg-white text-xs sm:text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 font-bold text-[#2D2219]">Feature</th>
                <th className="p-4 font-bold text-[#2D2219]">RERA Authority</th>
                <th className="p-4 font-bold text-[#2D2219]">NCLT (Insolvency)</th>
                <th className="p-4 font-bold text-[#2D2219]">Consumer Courts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              <tr>
                <td className="p-4 font-semibold text-[#2D2219]">Primary Purpose</td>
                <td className="p-4">Real estate regulation and fast-track homebuyer relief</td>
                <td className="p-4">Corporate insolvency resolution and asset recovery</td>
                <td className="p-4">Consumer protection and compensation for service deficiency</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#2D2219]">Filing Threshold</td>
                <td className="p-4">Individual homebuyer can file independently</td>
                <td className="p-4">Minimum 100 buyers or 10% of total allottees in project</td>
                <td className="p-4">Individual homebuyer can file independently</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#2D2219]">Major Reliefs</td>
                <td className="p-4">Refunds, monthly delay interest, structural repairs</td>
                <td className="p-4">Insolvency resolution, developer company liquidation</td>
                <td className="p-4">Refunds, interest, and damages for mental harassment</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#2D2219]">Average Resolution</td>
                <td className="p-4">6 to 12 months</td>
                <td className="p-4">12 to 24 months</td>
                <td className="p-4">24 to 48 months</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-10">
          {/* H3: Choosing the Most Effective Forum for Relief */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Choosing the Most Effective Forum for Relief
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              When homebuyers face developer defaults, they can choose between three primary legal forums: the RERA Authority, Consumer Disputes Redressal Commissions, commonly known as Consumer Courts, and the National Company Law Tribunal. Each forum serves a different legal purpose and offers unique remedies, making the choice dependent on the buyer's goal. RERA is a specialized real estate regulator that is ideal for fast-track remedies, such as obtaining a monthly interest payout for project delay, demanding structural defect repairs, or seeking orders to complete construction. It has a streamlined online process and resolves disputes faster than civil courts. Consumer Courts, operating under the Consumer Protection Act, are highly effective for buyers seeking substantial compensation for mental harassment, financial distress, and deficiencies in service, though the litigation timeline can be longer. On the other hand, the National Company Law Tribunal is used when a group of buyers wants to initiate corporate insolvency resolution proceedings against a defaulting developer company under the Insolvency and Bankruptcy Code. Navigating these forums requires a strategic approach, and homebuyers often consult legal experts through the{" "}
              <Link href="/ask-me-anything" className="text-[#D4AF37] font-semibold hover:underline">
                ask me anything
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-[#D4AF37] font-semibold hover:underline">
                contact
              </Link>{" "}
              portals to determine which forum fits their specific situation.
            </p>
          </div>

          {/* H3: The Insolvency Path for Homebuyers under IBC */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              The Insolvency Path for Homebuyers under IBC
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              The Insolvency and Bankruptcy Code was amended to recognize homebuyers as financial creditors, granting them the legal standing to initiate corporate insolvency resolution proceedings against a defaulting developer company in the National Company Law Tribunal. However, to prevent individual buyers from destabilizing real estate companies over minor disputes, the government introduced a threshold: a joint application must be filed by at least one hundred homebuyers, or ten percent of the total allottees in the same real estate project, whichever is lower. Initiating an insolvency petition is a powerful remedy that can force a developer to settle disputes, but it is also a double-edged sword. If the tribunal admits the petition, a moratorium is declared, control of the developer company shifts to an Insolvency Resolution Professional, and the company may undergo liquidation if a resolution plan is not approved. While this process can help recover assets from insolvent companies, it does not guarantee immediate refunds or possession. Buyers must carefully evaluate if insolvency is the best path or if standard regulatory relief under RERA is more appropriate. Because this insolvency process involves complex corporate law, seeking guidance from qualified experts is highly recommended before choosing this path over standard property litigation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
