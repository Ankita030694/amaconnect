import React from "react";

export default function DefectiveGoods({ id }: { id?: string }) {
  const remedies = [
    {
      title: "Repair and Rectification",
      desc: "Direction to the seller or manufacturer to remove the defect pointed out by the consumer or laboratory.",
    },
    {
      title: "Replacement of Goods",
      desc: "Replacement of the defective product with a new one of similar description, free of any defects.",
    },
    {
      title: "Price Refund",
      desc: "Refund of the price or charges paid by the consumer, along with reasonable interest in many cases.",
    },
    {
      title: "Compensation for Harm",
      desc: "Payment of compensation for any loss, injury, or mental agony suffered by the consumer due to negligence.",
    },
    {
      title: "Product Liability Claims",
      desc: "Under the CPA 2019, manufacturers, service providers, and sellers can be sued directly for damages caused by a defective product.",
    },
    {
      title: "Withdrawal of Hazardous Goods",
      desc: "Ordering the withdrawal of hazardous goods from marketing, or preventing their manufacture.",
    },
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Recourse for Defective Goods &amp; Services
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When a product fails to meet quality standards or a service provider fails to perform their duties, consumers are entitled to specific legal remedies. The Consumer Protection Act, 2019, distinguishes between a defect in goods and a deficiency in services, establishing clear avenues for liability and recourse.
          </p>
        </div>

        {/* Defect vs Deficiency Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FAF8F5] border border-[#2D2219]/10 rounded-2xl p-6">
            <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mb-3 flex items-center gap-2">
              <span className="text-yellow-600">📦</span> Defect in Goods
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
              Defined under Section 2(10) of the Act as any fault, imperfection, or shortcoming in the quality, quantity, potency, purity, or standard which is required to be maintained by or under any law or contract. This applies to tangible items, including electronic appliances, motor vehicles, packed food products, and manufactured merchandise.
            </p>
          </div>

          <div className="bg-[#FAF8F5] border border-[#2D2219]/10 rounded-2xl p-6">
            <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mb-3 flex items-center gap-2">
              <span className="text-yellow-600">🛠️</span> Deficiency in Services
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
              Defined under Section 2(11) as any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance which is required to be maintained by law or undertaken in relation to any service. This applies to banking, healthcare, telecom, hospitality, transport, insurance, and real estate.
            </p>
          </div>
        </div>

        {/* Product Liability & Remedies */}
        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Legal Remedies Available to Injured Parties
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            The Consumer Commissions possess wide-ranging powers to grant relief. Depending on the nature of the dispute, they can order one or more of the following actions:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {remedies.map((remedy, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:border-[#D4AF37]/20 transition-all"
              >
                <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
                  Remedy {idx + 1}
                </div>
                <h4 className="text-sm font-bold text-[#2D2219] mb-2">
                  {remedy.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {remedy.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
