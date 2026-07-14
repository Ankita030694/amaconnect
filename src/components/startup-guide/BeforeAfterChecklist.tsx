import React from "react";

export default function BeforeAfterChecklist({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 border-b border-gray-100 pb-12">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Before and After Incorporation Checklist
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            Registering a startup involves distinct phases, starting with aligning expectations between the founding team and ending with setting up robust banking and tax channels. To help you manage this transition, we have compiled a comparative checklist outlining the essential tasks that must be addressed before signing the corporate registry documents, and immediately after the certificate of incorporation is issued.
          </p>
        </div>

        {/* Before vs After Side-by-Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          {/* Before Column */}
          <div>
            <h3 className="text-base font-bold text-red-950 mb-4 flex items-center gap-2 pb-2 border-b border-red-200/50">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              Before Incorporation: Strategic Foundation
            </h3>
            <ul className="space-y-4">
              <li>
                <h4 className="text-xs font-bold text-gray-900 mb-1">Draft the Co-founders Agreement</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Sign a legally binding agreement covering equity splits, vesting schedules, roles, and dispute resolution mechanisms. This protects the company if a founder exits early.
                </p>
              </li>
              <li>
                <h4 className="text-xs font-bold text-gray-900 mb-1">Establish the Vesting Schedule</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Implement a standard vesting system, such as a four year vesting period with a one year cliff, to protect equity allocation from short term departures.
                </p>
              </li>
              <li>
                <h4 className="text-xs font-bold text-gray-900 mb-1">Intellectual Property Assignment</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Ensure all software, designs, and branding created for the startup are legally transferred to the corporate entity rather than belonging to individual founders.
                </p>
              </li>
            </ul>
          </div>

          {/* After Column */}
          <div>
            <h3 className="text-base font-bold text-emerald-950 mb-4 flex items-center gap-2 pb-2 border-b border-emerald-200/50">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              After Incorporation: Operations Setup
            </h3>
            <ul className="space-y-4">
              <li>
                <h4 className="text-xs font-bold text-gray-900 mb-1">Obtain PAN and TAN Cards</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Verify the Permanent Account Number and Tax Deduction Account Number printed on your certificate of incorporation, which are generated automatically.
                </p>
              </li>
              <li>
                <h4 className="text-xs font-bold text-gray-900 mb-1">Open a Corporate Current Account</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Submit the certificate of incorporation, Memorandum, Articles, and a formal board resolution to open a dedicated current account in the company name.
                </p>
              </li>
              <li>
                <h4 className="text-xs font-bold text-gray-900 mb-1">Register for Goods and Services Tax</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Apply for a GST registration if your turnover exceeds the threshold of forty lakh rupees for goods or twenty lakh rupees for service providers.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white shadow-sm">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Before: Preparing Co-founders Agreement
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            A co-founders agreement is a critical contract signed before officially incorporating the company. It governs the professional relationships, equity shares, and responsibilities of the co-founders. A standard agreement details how equity is split among the founders, the vesting terms, decision-making processes, intellectual property ownership, and the protocol for handling disputes or exits.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            The lack of a formal agreement is a leading cause of early startup failure. If a co-founder leaves the company after six months, without a vesting agreement, they might walk away with a large share of the company's equity despite contributing very little long-term value. Setting a four year vesting schedule with a one year cliff ensures that equity is earned gradually over time, protecting the remaining founders and demonstrating professional discipline to future investors.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            After: Opening bank Accounts and PAN
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Once the Certificate of Incorporation is issued, the company receives its tax identity. Under the integrated SPICe-Plus process, the company's PAN and TAN are generated alongside the registration certificate. The next step is setting up the company's financial channels. Founders must open a dedicated corporate current account with a commercial bank. To do this, banks require physical copies of the incorporation certificate, the Memorandum and Articles of Association, the company PAN, and a signed board resolution authorizing the account opening.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            After the account is active, the subscribers must deposit their committed capital, as listed in the Memorandum of Association, into the account. This capital deposit is required to file Form INC-20A. Startups should also evaluate their tax registration obligations. While GST is not mandatory for smaller firms, registering early is often beneficial to claim input tax credits on business purchases and establish vendor relationships with larger clients.
          </p>
        </div>
      </div>
    </section>
  );
}
