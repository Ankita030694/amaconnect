import React from "react";

export default function DpiitBenefits({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 border-b border-gray-100 pb-12">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            DPIIT Recognition and Tax Benefits
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            Incorporate is just the initial legal step. To unlock the full potential of government incentives, new businesses should actively seek formal recognition under the Startup India scheme. Administered by the Department for Promotion of Industry and Internal Trade, or DPIIT, this certificate opens doors to substantial tax exemptions, simplified compliance, patent fee rebates, and access to state-sponsored funding pools.
          </p>
        </div>

        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Eligibility for Startup India Schemes
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            To qualify for DPIIT recognition, an entity must satisfy specific legal and operational criteria. First, the business must be incorporated as a Private Limited Company, a Limited Liability Partnership, or a registered partnership firm. Traditional sole proprietorships and unregistered partnerships are excluded from these benefits. Second, the startup must have been incorporated for less than ten years from the date of application.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Third, the annual turnover of the business must not have exceeded one hundred crore rupees in any of the preceding financial years. Fourth, the business model must be focused on innovation, development, or improvement of products, processes, or services, or represent a scalable model with high potential for employment generation or wealth creation. Finally, the entity must not be formed by splitting up or reconstructing an existing business.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white shadow-sm">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Applying for Section 80-IAC Tax Holiday
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Among the various benefits, the most coveted is the income tax exemption under Section 80-IAC of the Income Tax Act. Under this provision, eligible startups can claim a complete tax holiday on their business profits for three consecutive financial years out of their first ten years of operations. This allows young companies to reinvest all generated capital back into product development, hiring, and market expansion without facing initial tax burdens.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            To apply for Section 80-IAC benefits, the startup must first secure DPIIT recognition and then submit a separate application to the Inter-Ministerial Board, or IMB. The board evaluates the application based on the startup's innovative capabilities, market potential, and intellectual property. It is important to note that only Private Limited Companies and LLPs incorporated on or after April 1, 2016, are eligible to apply, and the pitch deck must clearly demonstrate how the product solves a unique problem.
          </p>
        </div>

        {/* Info Alert Box */}
        <div className="bg-amber-50/50 border border-amber-100 rounded-3xl p-6 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-bold text-amber-950 mb-1">
              Important Note on Capital Gains Tax Exemption
            </h3>
            <p className="text-xs text-amber-900/80 leading-relaxed">
              Startups can also leverage Section 56(2)(viib) exemptions, commonly known as Angel Tax exemptions, which allow companies to raise capital at a premium without being taxed on the premium amount. In addition, Section 54GB offers tax relief on capital gains from the sale of residential property when reinvested in the equity of eligible startups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
