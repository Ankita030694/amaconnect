import React from "react";
import Link from "next/link";

export default function IPOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Overview of Intellectual Property in India
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Intellectual property serves as the legal foundation for innovation, creativity, and brand identity in the modern Indian market. Under the legal framework established by the government, intellectual property rights empower creators, companies, and innovators to secure exclusive ownership over their intangible assets. This protection ensures that original work, brand identity, and inventions are not exploited or copied by third parties without permission, thereby fostering a healthy ecosystem for business growth and cultural development.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Statutory Framework of IP Laws
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The legal structure governing intellectual property in India is comprehensive and is composed of several independent acts designed to align with global standards like the TRIPS agreement. Trademarks are governed by the Trademarks Act, 1999, which protects names, logos, slogans, and distinct designs. Creative works like books, movies, music, software, and artwork fall under the Copyright Act, 1957. Inventions, novel processes, and unique technologies are regulated by the Patents Act, 1970. In addition, other specialized legislations such as the Designs Act, 2000, and the Geographical Indications of Goods Act, 1999, safeguard specific industrial designs and regional specialties. Together, these laws establish the registration portals, criteria for eligibility, duration of rights, and the judicial pathways for resolving disputes in commercial courts.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Navigating these separate statutes can be challenging for early stage developers and artists. If you need immediate assistance navigating the registration platforms, you can seek a consultation at the 
            {" "}<Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">AMAConnect Ask Me Anything</Link>{" "} 
            portal, or access resources via the 
            {" "}<Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "} 
            section. You can also discuss intellectual property trends and share strategies with fellow creators and legal professionals in our active 
            {" "}<Link href="/communities" className="text-[#D4AF37] hover:underline font-semibold">Legal Communities</Link>{" "} 
            forum.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Difference Between Trademark, Copyright, and Patent
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A common point of confusion is selecting the right category of protection for a particular intellectual asset. Trademarks protect brand identity, including names, logos, symbols, shapes of packaging, and even sound marks. The primary goal of a trademark is to prevent market confusion and ensure customers can identify the source of goods or services. Copyrights, on the other hand, protect original expressions of ideas, including written books, software source code, digital designs, music, movies, and drawings. A copyright does not protect the underlying idea itself, but rather the specific form in which it is expressed. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Patents protect functional inventions, machinery, chemical formulations, and industrial processes that are new, useful, and non-obvious. While a trademark can last indefinitely through timely renewals every ten years, a copyright generally lasts for sixty years beyond the life of the creator, and a patent expires after a non-renewable term of twenty years from the date of filing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">🏷️</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Trademark</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Protects brand name, logo, catchphrase, and commercial identity. Renewable every 10 years indefinitely.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">📝</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Copyright</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Protects expression in books, software, art, and music. Lasts for life of author plus 60 years.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">💡</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Patent</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Protects functional inventions, processes, and formulations. Lasts for 20 years from filing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
