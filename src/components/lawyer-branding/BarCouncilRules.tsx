import React from "react";

export default function BarCouncilRules({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Bar Council Rules on Digital Presence
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6 text-justify">
            Rule 36 of the Bar Council of India Rules strictly prohibits advocates from advertising or soliciting work, either directly or indirectly. However, the Bar Council has amended these provisions to permit advocates to maintain websites displaying factual details about their education, practice areas, contact details, and professional credentials.
          </p>
        </div>

        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-[#2D2219] mb-4">
            How AMAConnect Assures absolute BCI Compliance
          </h3>
          <div className="space-y-4">
            {[
              {
                rule: "Information vs Solicitation",
                detail: "Profiles on AMAConnect present only objective, factual information about the advocate. We do not use comparative language, ratings claims, or guarantees of case success."
              },
              {
                rule: "User-Initiated Inquiries",
                detail: "Communication is entirely pull-based. Prospective clients must actively initiate queries or consults; advocates cannot proactively reach out to solicit users."
              },
              {
                rule: "Direct Engagement Control",
                detail: "Advocates retain full autonomy over client selection and scheduling, ensuring standard professional ethics are maintained throughout the consultation."
              }
            ].map((item, idx) => (
              <div key={idx} className="border-l-2 border-[#D4AF37] pl-4 py-1">
                <h4 className="text-sm font-bold text-[#2D2219] mb-1">{item.rule}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
