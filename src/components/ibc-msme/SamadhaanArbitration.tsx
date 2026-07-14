import React from "react";

export default function SamadhaanArbitration({ id }: { id?: string }) {
  const myths = [
    {
      myth: "MSME Samadhaan is just a simple complaint portal with no real legal authority.",
      fact: "The MSEFC is a statutory tribunal. Awards passed by the Council or the referred arbitration centers are legally binding commercial arbitration awards, enforceable in civil courts across India."
    },
    {
      myth: "Filing and pursuing a case before the MSEFC is highly expensive and requires huge fees.",
      fact: "Filing on the MSME Samadhaan portal is free of cost. The statutory conciliation and arbitration proceedings have minimal administrative charges, making it highly cost-effective for small suppliers."
    },
    {
      myth: "Buyers can easily appeal and stay the execution of an MSEFC award in civil courts.",
      fact: "Under Section 19 of the MSMED Act, no court can entertain an application to set aside an MSEFC award unless the buyer deposits 75 percent of the awarded amount in the court first, protecting supplier interests."
    },
    {
      myth: "If the purchase agreement has a private arbitration clause, you cannot approach the MSEFC.",
      fact: "The Supreme Court of India has held that the MSMED Act has overriding effect. Statutory arbitration under the MSMED Act overrides any private arbitration agreements between buyers and sellers."
    }
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The MSME Samadhaan Arbitration Path
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            For micro and small businesses, the MSME Samadhaan portal provides an alternative to the NCLT. Governed by the MSMED Act 2006, this statutory mechanism handles disputes relating to delayed payments. If a buyer fails to pay within 45 days of accepting goods or services, the supplier can file a case. The Micro and Small Enterprises Facilitation Council (MSEFC) first attempts conciliation, and if that fails, it proceeds to resolve the dispute through arbitration.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219] mb-6">
            Myth vs Fact: MSME Samadhaan &amp; Arbitration
          </h3>

          <div className="space-y-4">
            {myths.map((item, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-[#FAF9F5] rounded-3xl border border-gray-100 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex gap-3">
                  <div className="text-red-500 font-extrabold text-sm mt-0.5 shrink-0">❌ Myth:</div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                    {item.myth}
                  </p>
                </div>
                <div className="flex gap-3 border-t md:border-t-0 md:border-l border-gray-200 pt-3 md:pt-0 md:pl-4">
                  <div className="text-emerald-600 font-extrabold text-sm mt-0.5 shrink-0">✓ Fact:</div>
                  <p className="text-xs sm:text-sm text-[#2D2219] leading-relaxed text-justify font-medium">
                    {item.fact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
