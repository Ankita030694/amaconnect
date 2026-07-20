import React from "react";

export default function FDBrandUsage({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Intellectual Property and Brand Usage
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The core asset licensed in any franchise agreement is the franchisor's intellectual property. Protecting these trademarks, trade secrets, and operating methods is critical for the franchisor, while the franchisee must have clear rights to use them to run the business.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Licensing Trademarks, Logos, and Proprietary Formulations
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A standard franchise agreement must contain a clear IP licensing clause. Under Section 48 of the Trade Marks Act, 1999, the franchisee is registered as a registered user of the trademark.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            This license grants the franchisee the non-exclusive right to use the brand name, logos, and proprietary formulations (such as secret spice mixes or software codes) solely for operating the franchise outlet. The license must be limited to the duration of the agreement and the specific location, with the franchisor retaining complete ownership of the IP, protecting the brand's long-term value.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Consequences of Trademark Misuse by Franchisees
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If a franchisee misuses the licensed trademarks, they face severe consequences. Misuse includes: using the logo on unapproved products, altering the trademark, or continuing to use the brand name after the agreement is terminated.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under the Trade Marks Act, trademark misuse constitutes infringement and passing off. The franchisor can file a suit in commercial courts seeking an immediate ex-parte injunction to stop the misuse, seize the inventory, and claim damages. Additionally, the franchisor can terminate the agreement immediately without notice, as trademark misuse threatens the brand's reputation and constitutes a material breach of trust, enabling swift enforcement.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">IP Protection Guidelines</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Licensing Rules</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Registered User status under Section 48 of Trade Marks Act.</li>
                  <li>Usage limited to the approved store location and duration.</li>
                  <li>Strict prohibition on altering logos or brand assets.</li>
                  <li>Franchisor retains complete ownership of all trademarks.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Misuse Penalties</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Immediate termination of the franchise agreement.</li>
                  <li>Commercial court lawsuits for trademark infringement.</li>
                  <li>Ex-parte injunctions to seize branded signage and stock.</li>
                  <li>Heavy financial damages for brand dilution.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
