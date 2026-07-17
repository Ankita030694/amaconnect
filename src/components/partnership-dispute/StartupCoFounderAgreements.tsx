import React from "react";

export default function StartupCoFounderAgreements({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Co-Founder Agreements for Startups
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Modern startups require robust agreements that align founder incentives with long-term company growth. Implementing clear equity allocation, vesting schedules, and intellectual property transfers prevents future capitalization table deadlocks.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Equity Allocation and Reverse Vesting Schedules
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Unlike traditional partnerships, modern startups in India typically incorporate as private limited companies, but the relationships between founders are governed by a critical pre-incorporation contract known as the co-founder agreement. A primary focus of this agreement is equity allocation. Splitting equity equally among co-founders is a common mistake that fails to account for varying contributions, such as intellectual property, initial capital, or operational commitment. The agreement must establish a fair equity split based on these factors. To prevent a scenario where a founder leaves the company early but retains a massive chunk of equity, the agreement must incorporate a reverse vesting schedule. A standard reverse vesting schedule spans four years with a one year cliff. This means that if a founder leaves within the first twelve months, they forfeit all their equity. After the one-year cliff, their equity vests incrementally, usually monthly or quarterly over the remaining three years. If a founder exits the startup prematurely, the company or the remaining co-founders have the legal right to buy back their unvested shares at a nominal price, such as face value. This vesting mechanism ensures that co-founders remain committed to the long term growth of the startup and protects the company from capitalization table damage. Including clear vesting provisions in the co-founder agreement is essential for attracting venture capital funding, as institutional investors will require these schedules to be in place before investing.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Intellectual Property Transfer and Lock-In Clauses
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Another critical pillar of a co-founder agreement is the absolute transfer of intellectual property (IP) to the business entity. During the early stages of a startup, founders often write software source code, design product prototypes, build brand logos, or file patent applications in their individual names. If a dispute arises and a founder exits the company, they could claim ownership over these core intellectual assets, effectively paralyzing the startup. To prevent this, the co-founder agreement must contain a comprehensive IP assignment clause. This clause states that all intellectual property created by any founder in connection with the business, whether before or after the incorporation of the company, is automatically transferred and assigned exclusively to the company. The founders must agree to execute all necessary documents to formalize this transfer. In addition, the agreement should include a lock-in clause, which prohibits founders from selling, transferring, or pledging their vested shares for a specific period, usually two to three years from the date of incorporation or until a major funding round is secured. This lock-in period guarantees stability during the critical early years of the startup, assuring investors and partners that the core team is committed to the business. By combining intellectual property assignment and share lock-ins, the co-founder agreement secures the startup core assets and team stability, creating a solid corporate foundation.
          </p>
        </div>
      </div>
    </section>
  );
}
