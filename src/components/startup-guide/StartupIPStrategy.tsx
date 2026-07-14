import React from "react";

export default function StartupIPStrategy({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 border-b border-gray-100 pb-12">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Intellectual Property Strategies for Startups
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            Developing a robust intellectual property strategy is fundamental to safeguarding a startup's unique innovations, brand identity, and competitive edge in the market. In India, the process begins with securing a trademark, which protects the company's brand name, logos, slogans, and product names from unauthorized usage by competitors. The Trademark Registry under the Controller General of Patents, Designs and Trade Marks processes these applications. Securing a trademark not only prevents public confusion but also establishes an intangible asset that increases the startup's valuation. When drafting the application, founders must conduct a comprehensive search across the online trademark database to ensure their proposed mark does not conflict with existing registered marks or pending applications in the relevant classes. Additionally, copyright protection provides immediate and automatic protection for original works of authorship, such as software code, database structures, user interfaces, website designs, marketing materials, and internal manuals. Registering these copyrights under the Copyright Office of India is highly recommended because it provides clear, legally admissible evidence of ownership in the event of disputes or infringement lawsuits. For startups building proprietary software, a registered copyright acts as a crucial layer of defense, ensuring that former employees or external contractors cannot claim ownership of the code they worked on. Thus, proactive registration of trademarks and copyrights serves as the primary shield for a young company's brand and creative assets. Furthermore, it gives founders the legal standing to issue cease and desist notices and demand statutory damages, which is essential when protecting market share against copycat products and establishing solid partnerships with international vendors.
          </p>
        </div>

        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Patent Registration for Tech Startups
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            For technology-driven startups, patent registration offers a highly powerful mechanism to secure proprietary inventions and establish a temporary monopoly in the marketplace. The Indian Patent Office, operating under the Patents Act of 1970, grants patent rights for inventions that are novel, involve an inventive step, and are capable of industrial application. Obtaining a patent involves a rigorous, multi-stage process that begins with filing either a provisional specification or a complete specification. Startups often file a provisional application to secure an early priority date while they continue to refine and test their technology. However, they must file the complete specification within twelve months of the provisional filing, or the application will be abandoned. The patent examination process involves detailed searches by patent examiners to ensure the invention is not excluded under Section 3 of the Patents Act, which prohibits patents on mere discoveries, mathematical methods, or computer programs per se. Startups must work closely with registered patent agents to draft precise, comprehensive patent claims, as these claims define the scope of legal protection. A well-defined patent portfolio not only deters competitors but also serves as a critical asset during valuation discussions with potential venture capital investors. Furthermore, the Indian government offers a substantial eighty percent rebate on patent filing fees for recognized startups and provides expedited examination pathways, helping them secure patent grants much faster than standard applicants. Consequently, integrating patent planning into the early business strategy is vital for long-term tech defense. By leveraging the fast-track mechanism, startups can accelerate their time-to-market and establish their proprietary tech as a standard in the fast-paced ecosystem.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white shadow-sm">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Waterproof IP Assignment Clauses
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Equally important to registering intellectual property is establishing clear ownership through robust IP assignment clauses. In the collaborative environment of a startup, software developers, designers, and marketing professionals frequently generate valuable assets. Without explicit agreements, ownership of these assets may remain with the individual creators rather than the company. To prevent this, every founder, employee, and independent contractor must sign a comprehensive Proprietary Information and Inventions Agreement, or PIIA, before commencing work. This agreement contains an IP assignment clause that legally transfers all rights, titles, and interests in any work created during their association with the company to the startup itself. Under Section 17 of the Copyright Act of 1957, the default rule is that the employer owns work created in the course of employment, but this rule is highly vulnerable to disputes and does not automatically cover independent contractors. An explicit, written assignment clause overrides any ambiguity, stating that the developer assigns all rights in perpetuity, globally, and without any territorial or financial limits. The clause must also include a waiver of moral rights, which prevents creators from later objecting to modifications or updates made to their work by the company. Venture capital investors will perform thorough due diligence on a startup's IP ownership trail before investing, and any gap in assignment agreements can delay or entirely derail a funding round. Therefore, establishing a watertight IP assignment policy is a core legal hygiene requirement that protects the startup from costly litigation and ensures clean title to its core assets, giving comfort to both founders and institutional venture funds.
          </p>
        </div>

        {/* IP Checklist Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white">
            <h4 className="text-xs font-bold text-[#2D2219] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500" />
              Trademark & Copyright
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Register early to secure brand identity, logos, and software source code. Establishes legal ownership and provides defense against competitors.
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white">
            <h4 className="text-xs font-bold text-[#2D2219] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Patent & Assignment Clauses
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              File provisional patents to secure priority date. Sign PIIAs with all developers and founders to ensure the company owns 100% of the IP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
