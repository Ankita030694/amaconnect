import React from "react";

export default function MisleadingAds({ id }: { id?: string }) {
  const penalties = [
    {
      target: "Manufacturers & Advertisers",
      fine: "First offense: Up to 10 lakh rupees. Subsequent offenses: Up to 50 lakh rupees.",
      imprisonment: "First offense: Up to 2 years. Subsequent offenses: Up to 5 years.",
    },
    {
      target: "Endorsers (Celebrities/Influencers)",
      fine: "First offense: Up to 10 lakh rupees. Subsequent offenses: Up to 50 lakh rupees.",
      imprisonment: "Can be prohibited from endorsing any product or service for 1 to 3 years.",
    },
    {
      target: "Publishers (Media Channels/Platforms)",
      fine: "Up to 10 lakh rupees per publication of a misleading advertisement.",
      imprisonment: "Exempt if published in the ordinary course of business without knowing it was false.",
    },
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Misleading Advertisements &amp; Liability
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The Consumer Protection Act, 2019, introduced strict regulations governing advertisements. It established the Central Consumer Protection Authority (CCPA) to investigate, recall, and penalize false or misleading promotions. For the first time in Indian legal history, endorsers, including celebrities and digital influencers, share legal liability for promoting false claims.
          </p>
        </div>

        {/* What is a Misleading Ad */}
        <div className="bg-[#FAF8F5] border border-gray-200/60 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mb-4">
            Statutory Definition of Misleading Advertisements
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
            Under Section 2(28) of the Act, an advertisement is considered misleading if it:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-600">
            <li>Falsely describes the product or service in terms of its quality, composition, or grade.</li>
            <li>Gives a false guarantee or misleading representation of the performance or efficacy of the product.</li>
            <li>Conveys an express or implied representation which, if made by the manufacturer or seller, would constitute an unfair trade practice.</li>
            <li>Deliberately conceals important information regarding side effects, safety hazards, or limitations.</li>
          </ul>
        </div>

        {/* CCPA Penalties Table */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Penalties and Liability Structure
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            The CCPA can issue directions to stop or modify misleading advertisements, and impose heavy penalties on manufacturers, endorsers, and publishers:
          </p>

          <div className="overflow-x-auto border border-gray-100 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-[#FAF8F5] border-b border-gray-200 text-xs sm:text-sm font-bold text-[#2D2219]">
                  <th className="p-4">Entity</th>
                  <th className="p-4">Monetary Penalty (Fine)</th>
                  <th className="p-4">Other Legal Actions</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm text-gray-600 divide-y divide-gray-100">
                {penalties.map((penalty, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50">
                    <td className="p-4 font-bold text-[#2D2219]">{penalty.target}</td>
                    <td className="p-4">{penalty.fine}</td>
                    <td className="p-4">{penalty.imprisonment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
