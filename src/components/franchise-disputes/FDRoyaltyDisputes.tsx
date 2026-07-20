import React from "react";

export default function FDRoyaltyDisputes({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Royalty and Advertising Fee Disputes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Financial disputes regarding fee calculations are common in franchising. Franchisees often complain about high royalty rates that eat into profits, while franchisors face delays in payments, requiring clear audit systems to resolve disputes.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Calculating and Auditing Royalty Payments
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Royalty fees are usually calculated as a percentage of the franchisee's gross sales (typically four to eight percent) rather than net profit. This means the franchisee must pay royalties even if the outlet operates at a loss.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To prevent under-reporting of sales, franchisors include audit clauses in the agreement. These clauses allow the franchisor to inspect the franchisee's point of sale (POS) systems, cash registers, and tax returns (GST filings). If an audit reveals under-reported sales, the franchisee must pay the difference along with penalty interest. Clear definitions of gross sales (such as excluding taxes or product returns) help prevent calculation disputes, protecting both parties.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Obligations of Franchisors regarding National Marketing Funds
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Many franchise agreements require the franchisee to pay an additional advertising fee (usually one to three percent of gross sales) into a National Marketing Fund managed by the franchisor.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Franchisors hold a fiduciary duty to manage this fund solely for brand promotion and marketing campaigns that benefit all outlets. If the franchisor uses the marketing fund to meet their general corporate expenses or fails to run regional campaigns, the franchisee can demand an accounting of the fund. If the franchisor refuses to provide audits showing how the marketing fees were spent, the franchisee can withhold future marketing payments, claiming a breach of contract.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">POS &amp; GST Audits</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Authorizes franchisors to inspect POS logs and tax returns. Under-reporting can lead to immediate franchise termination and penalty interest.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Marketing Fund Accountability</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Mandates franchisors to provide annual audited statements of marketing funds, ensuring fees are spent solely on brand promotion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
