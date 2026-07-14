import React from "react";

export default function FastTrackInsolvency({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Fast-Track Insolvency for Corporate Debtors
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The standard Corporate Insolvency Resolution Process (CIRP) under the IBC can take up to 180 days, with a maximum extension of 90 days, or a cumulative limit of 330 days including legal delays. Recognizing that small companies and startups cannot endure such prolonged uncertainty, the IBC introduces the Fast-Track Corporate Insolvency Resolution Process (FTCIRP) under Sections 55 to 58. This fast-track mechanism aims to complete the resolution process in half the standard time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#FAF9F5] rounded-3xl border border-gray-100">
            <div className="text-xl font-bold text-[#D4AF37] mb-3">90 Days</div>
            <h4 className="font-bold text-[#2D2219] text-sm sm:text-base mb-2">Accelerated Timeline</h4>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed text-justify">
              The entire FTCIRP must be completed within 90 days from the insolvency commencement date, compared to the 180 days allowed under the standard process.
            </p>
          </div>

          <div className="p-6 bg-[#FAF9F5] rounded-3xl border border-gray-100">
            <div className="text-xl font-bold text-[#D4AF37] mb-3">45 Days</div>
            <h4 className="font-bold text-[#2D2219] text-sm sm:text-base mb-2">Single Extension</h4>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed text-justify">
              If the resolution professional cannot complete the process in 90 days, they must apply to the NCLT. The NCLT can grant a single extension of up to 45 days.
            </p>
          </div>

          <div className="p-6 bg-[#FAF9F5] rounded-3xl border border-gray-100">
            <div className="text-xl font-bold text-[#D4AF37] mb-3">Targeted</div>
            <h4 className="font-bold text-[#2D2219] text-sm sm:text-base mb-2">Eligible Entities</h4>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed text-justify">
              Applies to small companies with paid-up capital under 4 Crore rupees, unlisted companies with assets below 1 Crore rupees, or government-notified startups.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#2D2219] mb-4">
            Advantages of Fast-Track Insolvency for MSMEs
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            For MSMEs that are creditors, the fast-track process reduces the time during which their capital remains locked up. If the corporate debtor is a small enterprise, the fast-track route ensures that restructuring or liquidation happens rapidly, saving the company from losing value due to prolonged stagnation. It allows for a swift exit or reorganization, returning cash flows back to the operating ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
