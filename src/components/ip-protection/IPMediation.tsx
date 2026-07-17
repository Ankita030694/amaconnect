import React from "react";

export default function IPMediation({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Resolving IP Disputes through Mediation
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Litigation in Indian courts has historically been slow and expensive, which is a major concern for startups and small creators dealing with intellectual property disputes. To address this, the Indian legal system has introduced specialized pathways for commercial disputes. These include mandatory mediation processes and fast track court procedures designed to resolve infringement cases quickly and efficiently.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Alternative Dispute Resolution in Commercial Courts
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 12A of the Commercial Courts Act, 2015, parties involved in a commercial dispute must undergo pre-institution mediation before filing a lawsuit. This requirement is mandatory unless the plaintiff is seeking urgent interim relief, such as an immediate injunction to stop copyright piracy or trademark infringement. Pre-institution mediation is organized by District Legal Services Authorities and is led by trained mediators.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Mediation offers several key advantages for intellectual property disputes. It is highly confidential, which prevents public disclosure of trade secrets, proprietary technology, or branding strategies during the conflict. It is also more cost effective than a full trial and allows the parties to negotiate creative business solutions, such as licensing agreements or co-branding arrangements, which courts cannot order. If the mediation succeeds, the resulting settlement is legally binding and carries the same status as a court decree, ensuring compliance.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Expedited Court Hearings for Infringement
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If mediation fails, or if a party seeks urgent interim relief, the case is filed in the specialized Commercial Courts. The Commercial Courts Act, 2015, contains strict procedural timelines to speed up litigation. For example, the defendant must file their written statement within one hundred and twenty days, and no extensions are allowed after this deadline.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, the law introduces summary judgments under Order XIII-A of the Civil Procedure Code. This allows the court to decide a case without a full trial if one party has no real prospect of succeeding and there is no need for oral evidence. Courts also hold Case Management Hearings to set fixed timelines for presenting evidence, arguing the case, and delivering the final judgment. These strict rules have shortened the time needed to resolve commercial disputes, making it easier for creators and businesses to defend their intellectual property rights.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Key Benefits of Commercial ADR and Fast-Track Systems</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Pre-Institution Mediation</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Avoids public trials. Saves money and time, allowing both sides to reach mutually beneficial licensing or settlement terms.
                </p>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Expedited Commercial Litigation</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Enforces strict deadlines for filings. Allows summary judgments and case management to prevent procedural delays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
