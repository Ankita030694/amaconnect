import React from "react";
import Link from "next/link";

export default function EPFOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Employees Provident Fund Scheme
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The Employees Provident Fund (EPF) scheme, established under the Employees Provident Funds and Miscellaneous Provisions Act, 1952, serves as the primary social security safety net for salaried workers in India. Regulated by the Employees Provident Fund Organisation (EPFO), the scheme ensures that workers build a long-term financial reserve to support themselves and their families after retirement, or in case of disability or death.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Constitutional Basis of Social Security Benefits
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The statutory framework of the EPF Act finds its roots in the Directive Principles of State Policy under the Constitution of India. Article 41 directs the state to secure the right to work, education, and public assistance in cases of old age, sickness, disablement, and other undeserved want. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Similarly, Article 43 mandates that the state should secure a living wage and decent conditions of work to ensure a high quality of life. The EPF scheme functions as a practical implementation of these constitutional promises, forcing co-contributions from employers and employees to guarantee financial protection during retirement.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If you need immediate assistance to resolve a delayed EPF transfer, check employer default disputes, or claim pension benefits, you can consult a qualified labor expert at the 
            {" "}<Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">AMAConnect Ask Me Anything</Link>{" "} 
            portal, or seek support via our 
            {" "}<Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "} 
            services. You can also discuss PF interest rates, withdrawal timelines, and labor dispute steps in our active 
            {" "}<Link href="/communities" className="text-[#D4AF37] hover:underline font-semibold">Legal Communities</Link>{" "} 
            forums.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Overview of EPFO Mandates for Employers
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under the Act, any establishment employing twenty or more persons is legally mandated to register with the EPFO and comply with its rules. Registration is mandatory for employees earning a basic salary of up to fifteen thousand rupees per month, though employees earning more can join voluntarily with mutual consent.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The employer must contribute twelve percent of the employee's basic salary plus dearness allowance directly to the fund, while match-contributing a similar twelve percent from the employee's earnings. Of the employer's twelve percent contribution, 8.33 percent is directed to the Employees Pension Scheme (EPS), and the remaining 3.67 percent goes to the EPF. Employers are also responsible for filing monthly electronic returns and depositing contributions on time, with defaults leading to heavy penalties and interest charges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">🏦</span>
              <h4 className="font-bold text-[#2D2219] mb-2">EPF Contribution Division</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Employee contributes 12 percent entirely to EPF. Employer's 12 percent is split: 8.33 percent goes to EPS (pension) and 3.67 percent goes to EPF.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">💼</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Establishment Mandate</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Applies to all companies with 20 or more workers. Voluntary registration allowed for smaller firms. Registration mandatory for salaries under 15,000 rupees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
