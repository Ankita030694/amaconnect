import React from "react";
import Link from "next/link";

export default function SCMOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Maintenance and Welfare of Parents Act
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The Maintenance and Welfare of Parents and Senior Citizens Act, 2007, represents a significant statutory shift in Indian social legislation. It was enacted to address the growing vulnerability of elderly individuals in modern society, where traditional family support systems are weakening. The legislation establishes a fast, cost-effective, and legally binding process to ensure that senior citizens and parents are not left without financial support, shelter, or medical care in their old age.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Objectives of the 2007 Welfare Legislation
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The primary goal of the 2007 Act is to provide simple, speedy, and inexpensive legal remedies for senior citizens who are unable to support themselves from their own income or assets. Traditional civil litigation in India is slow and expensive, which is a major hurdle for elderly parents facing neglect.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To bypass these delays, the Act provides for specialized Maintenance Tribunals in every sub-division. These tribunals operate with simplified procedures, strict timelines for resolving cases, and a complete bar on professional legal representation in standard circumstances. This ensures that elderly individuals can easily secure monthly maintenance allowances, protection from abuse, and recovery of withheld properties without facing complex courtroom procedures.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If you need immediate legal assistance to protect yourself or an elderly relative from neglect or financial abuse, you can seek advice through the 
            {" "}<Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">AMAConnect Ask Me Anything</Link>{" "} 
            portal, or access resources via the 
            {" "}<Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "} 
            page. You can also connect with advocacy groups and tech specialists in our active 
            {" "}<Link href="/communities" className="text-[#D4AF37] hover:underline font-semibold">Legal Communities</Link>{" "} 
            forum to discuss rights, tribunal filing tips, and safety measures.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Definition of Maintenance and Senior Citizen
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To apply for relief under the Act, an individual must fit the statutory definitions. A senior citizen is defined as any citizen of India who has reached the age of sixty years or above. A parent includes biological, adoptive, or stepfathers and stepmothers, regardless of whether they have reached the age of sixty. This ensures that younger disabled parents can also claim maintenance from adult children.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 2(b) of the Act, maintenance is defined broadly to cover all basic requirements of life, including food, clothing, residence, medical attendance, and treatment. The obligation to provide maintenance falls on the adult children or grandchildren of the parent. If a senior citizen is childless, they can claim maintenance from any relative who is in possession of their property or who will inherit their estate after their death.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">👴</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Senior Citizen &amp; Parent</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Senior citizens must be Indian citizens aged 60 or above. Parents (biological, adoptive, or step) can seek relief even if they are under 60.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">🏥</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Scope of Maintenance</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Includes food, clothing, housing, and all medical expenses and geriatric treatments needed to maintain a healthy, dignified life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
