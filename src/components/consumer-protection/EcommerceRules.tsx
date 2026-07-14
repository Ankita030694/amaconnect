import React from "react";

export default function EcommerceRules({ id }: { id?: string }) {
  const redFlags = [
    {
      title: "Missing Corporate Identification or Address",
      desc: "Legitimate sellers are legally required to display their official corporate name, physical address, and contact details. Avoid sellers listing only a generic email or mobile number.",
    },
    {
      title: "Vague or Absence of Return and Refund Policies",
      desc: "If a seller has a 'no returns under any circumstances' policy, or fails to specify how and when refunds are processed, they violate the E-Commerce Rules, 2020.",
    },
    {
      title: "Absence of a Grievance Officer's Details",
      desc: "Every e-commerce platform and seller must list the name and contact info of a Grievance Officer who must acknowledge complaints within 48 hours.",
    },
    {
      title: "Highly Inflated Fake Reviews",
      desc: "Dozens of identical, overly enthusiastic positive reviews posted on the same day, combined with complaints about defective items, usually point to manipulated ratings.",
    },
    {
      title: "No Country of Origin or Pricing Breakdown",
      desc: "Sellers must display the country of origin, delivery charges, and all applicable taxes separately. Hidden fees at checkout are a major red flag.",
    },
  ];

  const rulesList = [
    {
      title: "No Manipulation of Price",
      desc: "E-commerce entities are strictly prohibited from manipulating the price of goods or services offered on their platforms to gain unreasonable profit or discriminate among consumers.",
    },
    {
      title: "Search Result Neutrality",
      desc: "Marketplace platforms must not manipulate search results or algorithms to favor preferred sellers or sponsored listings without clear disclosure.",
    },
    {
      title: "Explicit Consent for Purchases",
      desc: "Pre-ticked checkboxes or automatic addition of ancillary services, like insurance or extended warranties, are banned. Consent must be affirmative and explicit.",
    },
    {
      title: "Mandatory Country of Origin",
      desc: "To enable informed decisions, all sellers must clearly declare the country of origin for all listed products.",
    },
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Unfair Trade Practices &amp; E-Commerce Rules
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The Consumer Protection (E-Commerce) Rules, 2020, regulate all electronic retailers operating in India, whether registered locally or abroad. These rules target unfair trade practices, such as fake reviews, arbitrary price inflation, and refusing returns of defective goods. E-commerce platforms are classified into marketplaces (like Amazon or Flipkart) or inventory-led sellers, each carrying strict liabilities.
          </p>
        </div>

        {/* E-commerce Rules Core Obligations */}
        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Core Legal Obligations of E-Commerce Platforms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rulesList.map((rule, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <h4 className="text-sm sm:text-base font-bold text-[#2D2219] mb-2">
                  {rule.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Red Flags List */}
        <div className="bg-[#FAF8F5] border border-gray-200/60 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
                Red Flags List: Spotting Predatory Sellers
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Before purchasing online, check for these warning signs to avoid fraudulent transactions.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {redFlags.map((flag, idx) => (
              <div 
                key={idx} 
                className="flex gap-4 items-start bg-white p-4 rounded-xl border border-gray-100"
              >
                <span className="text-xs font-bold bg-red-50 text-red-600 px-2 py-1 rounded-md shrink-0">
                  FLAG {idx + 1}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2D2219]">
                    {flag.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {flag.desc}
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
