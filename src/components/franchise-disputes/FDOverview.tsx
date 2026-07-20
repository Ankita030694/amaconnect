import React from "react";
import Link from "next/link";

export default function FDOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Franchise Business Model in India
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The commercial market in India has seen an exponential rise in franchise operations across retail, food and beverage, education, and healthcare sectors. While this model offers entrepreneurs a path to scale using an established brand, the absence of a single federal franchise law requires parties to rely heavily on structured contracts.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Contractual Nature of Indian Franchise Laws
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Unlike countries with specific statutory franchise laws, India regulates franchising through a combination of general business laws. The primary legislation governing these relationships is the Indian Contract Act, 1872.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            This means the rights, duties, fees, and termination terms are decided by the written contract signed between the franchisor and the franchisee. Other relevant laws include: the Trade Marks Act, 1999, the Competition Act, 2002, and the Specific Relief Act, 1963. Because the contract itself is the law between the parties, any ambiguity in the agreement can lead to protracted disputes, making careful pre-signing audits essential.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If you are currently facing a dispute over royalty calculations, territory encroachment, or require an audit of a new agreement, you can consult a commercial contract expert through our
            {" "}<Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">AMAConnect Ask Me Anything</Link>{" "} 
            portal, or check resources on our 
            {" "}<Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "} 
            page. You can also share business templates, discuss trademark licensing, and network with other retail business owners in our active 
            {" "}<Link href="/communities" className="text-[#D4AF37] hover:underline font-semibold">Legal Communities</Link>{" "} 
            forum.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Differences between Franchise, Agency, and Distribution
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            It is critical to distinguish franchising from other business models like agencies and distribution networks. In an agency, the agent acts on behalf of the principal, and the principal remains liable for the agent's actions, with transactions routed directly to the principal.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In a distributorship, the distributor buys goods from the manufacturer and sells them to retailers or customers, operating independently with minimal brand control. In contrast, a franchise is a comprehensive business relationship where the franchisee operates under the franchisor's brand name, business format, marketing strategy, and quality controls, in exchange for fee payments and royalties, creating a highly integrated operational structure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">🤝</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Contract Act Foundations</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Regulated by the Indian Contract Act, 1872. All terms of royalty, supply chain, and exit must be explicitly drafted to prevent future disputes.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">🏢</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Integrated Format</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Unlike simple distribution, a franchise involves licensing trademarks, operational manuals, and marketing systems, requiring ongoing quality audits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
