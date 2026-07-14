import React from "react";

export default function ConsumerRights({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Consumer Rights &amp; Protection Laws
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Under the **Consumer Protection Act, 2019**, any person who buys goods or avails services is protected against exploitation, defective products, and deficient services. The law provides a robust three-tier quasi-judicial mechanism to resolve grievance cases efficiently.
          </p>
        </div>

        {/* The 6 Core Rights list */}
        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">The 6 Core Consumer Rights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Right to Safety", desc: "Protection against marketing of goods and services which are hazardous to life and property." },
              { title: "Right to be Informed", desc: "Right to know the quality, quantity, potency, purity, standard, and price of goods or services." },
              { title: "Right to Choose", desc: "Assurance of access to a variety of goods and services at competitive prices." },
              { title: "Right to be Heard", desc: "Assurance that consumer interest will receive due consideration at appropriate forums." },
              { title: "Right to Seek Redressal", desc: "Right to seek settlement against unfair trade practices or exploitation." },
              { title: "Right to Consumer Awareness", desc: "Right to acquire the knowledge and skill to be an informed consumer." }
            ].map((right, idx) => (
              <div key={idx} className="flex gap-2.5 items-start">
                <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-0.5">{right.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{right.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step by step for filing */}
        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-4">How to Address Service Deficiency or Defective Products</h3>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Serve a Written Notice",
                desc: "Send a formal written notice to the seller or service provider pointing out the defect or deficiency and requesting a resolution (refund, replacement, or repair) within a reasonable timeframe (usually 15 days)."
              },
              {
                step: "2",
                title: "File a Complaint via National Consumer Helpline (NCH)",
                desc: "If the seller ignores the notice, register a complaint online through the National Consumer Helpline (NCH) portal or call 1915. Many corporate complaints are settled at this stage."
              },
              {
                step: "3",
                title: "File on e-Daakhil Portal",
                desc: "If NCH fails, file a formal complaint in the Consumer Dispute Redressal Commission using the official 'e-Daakhil' online portal. You do not strictly need a lawyer to file a complaint in consumer courts; you can argue your own case."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs mb-0.5">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
