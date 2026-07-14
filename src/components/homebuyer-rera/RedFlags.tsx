import React from "react";

export default function RedFlags({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Red Flags of Non-Compliant Projects
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Identifying non-compliance early can save you from years of litigation and financial stress. Homebuyers must examine several key aspects of a real estate project before making any financial commitments or signing contracts.
          </p>
        </div>

        {/* Red Flags List Section Type */}
        <div className="bg-red-50 border border-red-100 rounded-3xl p-6 sm:p-8 my-2 shadow-sm">
          <p className="text-xs text-red-600 font-bold uppercase tracking-wider mb-2">
            Warning Signs
          </p>
          <h3 className="text-lg font-bold text-[#2D2219] mb-4">
            Critical RERA Red Flags to Watch Out For
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-gray-600 list-none pl-0">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">⚠️</span>
              <span>Absence of a valid RERA registration number in brochures or advertisements.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">⚠️</span>
              <span>Builder demanding more than ten percent of the unit cost before executing a formal Agreement for Sale.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">⚠️</span>
              <span>Reluctance or failure to provide the project's designated escrow account details for payments.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">⚠️</span>
              <span>Marketing projects under soft launch schemes before obtaining necessary municipal approvals.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">⚠️</span>
              <span>Refusal to share the sanctioned plans, layout plans, and specifications certified by local authorities.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">⚠️</span>
              <span>Calculating prices based solely on super built-up area rather than the mandated carpet area.</span>
            </li>
          </ul>
        </div>

        <div className="space-y-10">
          {/* H3: Absence of RERA Registration Number */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Absence of RERA Registration Number
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              One of the most critical red flags in any real estate transaction in India is the absence of a valid RERA registration number. Under Section 3 of the Act, developers are strictly prohibited from booking, advertising, selling, or marketing any unit in a project that has not been registered with the state regulatory authority. A registered project will always have a unique registration number which can be verified directly on the state RERA portal. This verification allows buyers to view crucial project parameters, including sanctioned building plans, layout designs, land ownership documents, title search reports, and the developer's historical track record of litigation. When a builder claims that registration is pending, or that the project does not require registration because of a minor technicality, buyers should proceed with extreme caution. Investing in an unregistered project deprives the homebuyer of the fast-track dispute resolution mechanisms and statutory protections provided by RERA. If the project delays, modifies plans, or suffers from quality defects, the buyer would be forced to seek remedies through traditional civil courts, which are notoriously slow and expensive. Therefore, verifying the registration number is an absolute necessity before signing any booking forms or paying any money to the builder.
            </p>
          </div>

          {/* H3: Non-Disclosure of Escrow Account Details */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Non-Disclosure of Escrow Account Details
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              RERA mandates that every registered project must have a dedicated escrow account in a scheduled bank, into which seventy percent of all funds collected from homebuyers must be deposited. The law requires that these funds be used exclusively for covering the cost of land and construction for that specific project. This provision was specifically designed to stop the widespread developer practice of diverting funds from one project to buy land or start construction on another, which frequently led to financial crises and project delays. As a buyer, you must ensure that your booking payments are deposited directly into this designated escrow account. A developer's reluctance or refusal to share these account details, or instructions to deposit money into a general corporate account, is a massive red flag. It indicates potential cash-flow issues, diversion of funds, or non-compliance with RERA rules. Buyers must verify the escrow account details on the state RERA portal and check if the bank details match the ones provided in the Agreement for Sale. Ensuring that your payments are handled through the correct escrow account is essential to protect your money from developer insolvency and project delays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
