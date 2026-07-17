import React from "react";

export default function TrademarkProcess({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Trademark Registration Process
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Registering a trademark in India requires careful planning and compliance with legal procedures. A trademark acts as the public face of a business, distinguishing its products and services from competitors in a crowded marketplace. Securing a trademark registration grants the owner exclusive rights to use the mark, take legal action against unauthorized usage, and license or sell the brand to generate revenue.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Selecting a Unique Mark and Class Search
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The initial step in the trademark journey involves selecting a mark that is legally viable and commercially strong. Legal experts classify trademarks from strongest to weakest: coined or invented words (like Kodak) are the strongest, followed by arbitrary marks (like Apple for computers), and suggestive marks (like Netflix for streaming). Generic or purely descriptive words (like Sweet for sugar) cannot be registered. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Once a potential mark is chosen, a search must be conducted on the IP India public search database. Goods and services are categorized into forty-five distinct classes under the Nice Classification system. Classes one through thirty-four cover physical goods, while classes thirty-five through forty-five cover services. Conducting a search across the relevant classes ensures the proposed mark is not identical or confusingly similar to an existing registered trademark or pending application, reducing the risk of conflicts.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Application and Handling Objections
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            After completing the class search, the applicant files the trademark application using Form TM-A on the e-filing portal of the Controller General of Patents, Designs, and Trade Marks. The application must include the name of the applicant, the goods or services, the user date (claiming prior usage or proposed to be used), and a clear representation of the logo or word.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Once submitted, the registrar examines the application and issues an examination report. If the office raises objections, they generally fall under Section 9 (absolute grounds, such as lack of distinctiveness or descriptive nature) or Section 11 (relative grounds, such as conflict with an existing mark) of the Trademarks Act, 1999. The applicant must submit a detailed written response within thirty days, proving the mark is unique or has acquired distinctiveness through long-term commercial usage. If the response is accepted, the mark is advertised in the Trade Marks Journal for four months to allow for public opposition before final registration.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Key Stages in Trademark Prosecution</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">1. Search &amp; Class Selection:</span> Verify mark availability in classes 1 to 45 using the official public database.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">2. Application Submission:</span> Online filing of Form TM-A with user affidavit if claiming prior commercial usage.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">3. Examination &amp; Response:</span> Reviewing office objections and submitting a detailed response within 30 days.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">4. Journal Publication &amp; Registration:</span> Advertising for public opposition followed by the issuance of a 10-year registration certificate.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
