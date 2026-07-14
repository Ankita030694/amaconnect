import React from "react";

export default function ChoosingStructure({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 border-b border-gray-100 pb-12">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Choosing the Right Startup Structure
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            Selecting the ideal business structure is one of the most critical decisions co-founders must make during their early days. The legal vehicle you choose to house your business operations dictates your tax obligations, the compliance burden you will bear annually, and, most importantly, your long-term capability to raise external institutional capital. In India, the Ministry of Corporate Affairs, or MCA, governs these registrations, offering several pathways tailored to different stages of scale and operational complexity.
          </p>
        </div>

        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-4 flex items-center gap-2">
            Private Limited Company vs LLPs
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            A Private Limited Company, often abbreviated as Pvt Ltd, represents the gold standard for high growth startups. Venture capital funds and angel investors almost exclusively mandate a Pvt Ltd structure before issuing term sheets. This preference stems from the structure's ability to easily issue and transfer equity shares, allocate employee stock option pools, and support complex investment agreements involving preferred shares. However, this flexibility comes with strict compliance obligations, including mandatory annual audits and board meetings.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            In contrast, a Limited Liability Partnership, or LLP, offers a hybrid structure that combines the operational ease of a partnership with the benefit of limited liability. LLPs are governed by the LLP Act of 2008 and are ideal for service businesses, bootstrap startups, and professional consultants who do not plan to raise venture capital. Since LLPs do not have share capital, transferring ownership interest is complex, and investing in them is legally cumbersome for institutional funds. On the positive side, they have fewer compliance requirements, lower maintenance costs, and no requirement to conduct formal board meetings.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white shadow-sm">
          <h3 className="text-base font-bold text-[#2D2219] mb-4 flex items-center gap-2">
            One Person Company for Solo Founders
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            For individual entrepreneurs who wish to retain full control while enjoying limited liability, the One Person Company, or OPC, is a strong alternative. Introduced under the Companies Act of 2013, the OPC structure allows a single owner to form a corporate entity that is legally separate from their personal estate. This offers a significant upgrade over traditional sole proprietorships, where the owner's personal assets are entirely at risk in the event of business debts or litigation.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            An OPC must designate a nominee director who would take over the business in the event of the founder's death or disability. While it requires lower initial compliance compared to a full Private Limited Company, it is restricted from converting to a non-profit company or engaging in financial investment activities. It is also important to note that if an OPC's paid-up share capital or turnover exceeds specific statutory limits, it must convert into a Private Limited Company. This makes it a temporary stepping stone rather than a permanent solution for businesses aiming for massive venture scale.
          </p>
        </div>

        {/* Structure Comparison Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white">
            <h4 className="text-xs font-bold text-[#2D2219] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500" />
              Private Limited Company
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Best for venture-backed startups. Supports equity funding, employee stock options, and quick scaling, but requires extensive regulatory compliance.
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white">
            <h4 className="text-xs font-bold text-[#2D2219] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Limited Liability Partnership
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Best for bootstrapped or service firms. Offers limited liability and low compliance costs, but cannot raise equity funding from institutional investors.
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white">
            <h4 className="text-xs font-bold text-[#2D2219] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              One Person Company
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Best for solo entrepreneurs. Ensures complete operational control and limited liability protection, but requires a nominee and faces limits on growth and funding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
