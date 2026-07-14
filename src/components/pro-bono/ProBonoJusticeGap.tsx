import React from "react";

export default function ProBonoJusticeGap({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        <div className="text-left mb-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-4">
            The Justice Gap in India
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            The fundamental right to legal representation is guaranteed by the Constitution, yet millions of Indians remain effectively excluded from the justice system due to financial constraints. By visualizing the scale of the problem, we can better understand the urgent need for scalable, digital pro bono infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-gray-100 text-center flex flex-col justify-center">
            <span className="text-3xl font-black text-[#D4AF37] mb-2">50M+</span>
            <span className="text-xs font-bold text-[#2D2219] uppercase tracking-wider">Pending Cases</span>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              Across district courts, High Courts, and the Supreme Court, creating a massive backlog.
            </p>
          </div>
          
          <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-gray-100 text-center flex flex-col justify-center">
            <span className="text-3xl font-black text-[#D4AF37] mb-2">76%</span>
            <span className="text-xs font-bold text-[#2D2219] uppercase tracking-wider">Undertrial Prisoners</span>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              Of all prison inmates are awaiting trial, many unable to afford bail bonds or lawyers.
            </p>
          </div>

          <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-gray-100 text-center flex flex-col justify-center">
            <span className="text-3xl font-black text-[#D4AF37] mb-2">1:200k</span>
            <span className="text-xs font-bold text-[#2D2219] uppercase tracking-wider">Legal Aid Ratio</span>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              Only one government-appointed legal aid lawyer is available for every 200,000 citizens.
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-[#1A1410] rounded-2xl">
          <p className="text-sm text-gray-300 leading-relaxed italic border-l-2 border-[#D4AF37] pl-4">
            "We cannot solve a problem of this magnitude with traditional brick-and-mortar legal aid clinics alone. We must leverage technology to seamlessly route the surplus bandwidth of metropolitan corporate lawyers directly to the marginalized individuals who need it most."
          </p>
        </div>

      </div>
    </section>
  );
}
