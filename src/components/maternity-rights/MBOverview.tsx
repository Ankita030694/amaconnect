import React from "react";
import Link from "next/link";

export default function MBOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Overview of Maternity Benefit Act
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The Maternity Benefit Act, 1961, serves as a crucial social security legislation in India, designed to protect the employment of women during the time of maternity and entitle them to full paid leave from work. The legislation recognizes that maternity is a natural phase of life and ensures that working women are not forced to choose between motherhood and career progression.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Statutory 26-Week Leave Entitlement
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A major amendment to the Act in 2017 significantly increased the paid maternity leave entitlement from twelve weeks to twenty-six weeks. Out of these twenty-six weeks, a maximum of eight weeks can be claimed preceding the expected date of delivery, and the remaining period can be utilized after childbirth.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            This extended period is designed to support the health of the mother and child during the crucial early months. For women who already have two or more surviving children, the statutory leave entitlement remains at twelve weeks, split equally before and after the delivery date, ensuring basic health protection.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If you are currently facing a denial of maternity benefits, workplace bias, or threat of termination due to pregnancy, you can seek advice through the 
            {" "}<Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">AMAConnect Ask Me Anything</Link>{" "} 
            portal, or secure free legal assistance on our 
            {" "}<Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "} 
            page. You can also join community discussions on corporate policies, return-to-work guidelines, and labor inspector complaints in our active 
            {" "}<Link href="/communities" className="text-[#D4AF37] hover:underline font-semibold">Legal Communities</Link>{" "} 
            forum.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Applicability of the Act to Private Sector Offices
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The Maternity Benefit Act holds wide applicability across both public and private sectors in India. Under Section 2, the Act applies to every shop, establishment, factory, mine, or plantation where ten or more persons are employed on any day of the preceding twelve months.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            This covers all private sector offices, including technology startups, multinational corporations, consultancy firms, and retail outlets. The employer cannot use the type of contract (such as temporary, probationary, or contractual work) to deny these benefits. High Courts have repeatedly ruled that even daily-wage or contract workers are entitled to paid maternity benefits if they satisfy the working requirement, protecting all female employees.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">🤰</span>
              <h4 className="font-bold text-[#2D2219] mb-2">26-Week Paid Leave</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Applicable for the first two children. Includes up to eight weeks of pre-delivery leave, ensuring full salary payments during the entire period.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">🏢</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Private Sector Applicability</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Applies to all shops, offices, and establishments with ten or more employees. Covers permanent, probationary, and contractual workers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
