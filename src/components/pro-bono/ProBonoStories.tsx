import React from "react";

export default function ProBonoStories({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        
        <div className="text-left mb-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-4">
            Stories of Impact
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Behind every legal case is a human life. By removing the financial and geographic barriers to legal representation, our network of pro bono advocates has successfully intervened in hundreds of critical situations. While we maintain strict attorney-client confidentiality, the following anonymized case studies demonstrate the tangible impact of our digital legal aid initiative.
          </p>
        </div>

        <div className="flex flex-col gap-8 w-full">
          
          {/* Story 1 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-gray-100 pb-4">
              <h3 className="text-lg font-bold text-[#2D2219]">The Illegal Factory Lockout</h3>
              <span className="text-xs font-bold px-3 py-1 bg-gray-100 text-gray-600 rounded-full w-max">Labor Law & Wages</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
              <strong>The Crisis:</strong> A garment manufacturing unit in Tiruppur abruptly shut down operations, locking out over 150 daily-wage workers without paying their accumulated wages for the previous three months. The workers, who possessed no formal contracts and lived below the poverty line, lacked the financial resources to hire local counsel to file a grievance with the labor tribunal.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
              <strong>The Intervention:</strong> A local NGO coordinator assisted the workers in uploading their employee ID cards and attendance logs to the AMAConnect secure vault. The algorithm matched their case with a senior labor law advocate based in Chennai who had pledged 10 pro bono hours that month.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              <strong>The Outcome:</strong> The advocate drafted and served a robust legal notice to the factory owners, citing specific violations of the Payment of Wages Act, 1936. Faced with formal legal pressure from a high-profile metropolitan advocate, the factory management settled out of court within 14 days, disbursing the full ₹12.5 Lakhs in withheld wages to the workers.
            </p>
          </div>

          {/* Story 2 */}
          <div className="bg-[#2D2219] rounded-3xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white">Escaping Generational Debt</h3>
              <span className="text-xs font-bold px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full w-max">Property & Exploitation</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed text-justify mb-4">
              <strong>The Crisis:</strong> A widow from a tribal community in rural Jharkhand was being forcibly evicted from her ancestral farmland by a local moneylender. The moneylender produced a fraudulent thumb-printed document claiming she had forfeited the land against an unpaid micro-loan taken by her late husband. She was functionally illiterate and terrified of the local police.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed text-justify mb-4">
              <strong>The Intervention:</strong> Utilizing a borrowed smartphone, she connected via video call with a bilingual pro bono advocate in Ranchi through the AMAConnect platform. The advocate immediately recognized the document as an illegal, unregistered mortgage deed which held no legal standing under the Chota Nagpur Tenancy Act, which strictly protects tribal land transfers.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed text-justify">
              <strong>The Outcome:</strong> The advocate digitally filed an urgent injunction request in the district court and coordinated with the District Legal Services Authority (DLSA) to provide her physical police protection. The eviction was permanently halted, and the fraudulent debt was legally nullified.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
