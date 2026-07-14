import React from "react";

export default function ComplianceRoadmap({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 border-b border-gray-100 pb-12">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Post-Incorporation Compliance Roadmap
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            Receiving your Certificate of Incorporation is a major milestone, but it does not mean your legal and administrative obligations are complete. The Ministry of Corporate Affairs mandates a series of strict post-incorporation filings that must be executed within specific timeframes. Failure to meet these deadlines can result in heavy financial penalties, personal liability for directors, and even the forced closure of the business.
          </p>
        </div>

        {/* Visual Process Map Timeline */}
        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-6 flex items-center gap-2">
            Timeline of Crucial Legal Milestones
          </h3>
          
          <div className="relative border-l border-[#D4AF37]/30 ml-4 pl-6 space-y-8">
            {/* Step 1 */}
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 bg-[#D4AF37] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">1</span>
              <h4 className="text-sm font-bold text-[#2D2219] mb-1">Within 30 Days: Appointing the Statutory Auditor</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                The Board of Directors must appoint the first statutory auditor of the company. This auditor must be a practicing Chartered Accountant holding a valid certificate. Form ADT-1 must be filed on the MCA portal within fifteen days of the appointment to notify the registry.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 bg-[#D4AF37] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
              <h4 className="text-sm font-bold text-[#2D2219] mb-1">Within 60 Days: Share Certificate Issuance</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                The company must issue physical share certificates to the subscribers of the Memorandum of Association. These certificates represent proof of ownership and must bear the company seal and signatures of at least two directors.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 bg-[#D4AF37] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
              <h4 className="text-sm font-bold text-[#2D2219] mb-1">Within 180 Days: Filing Commencement of Business</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Under Section 10A of the Companies Act, founders must file Form INC-20A. This form proves that all subscribers have paid their agreed share capital into the company bank account. No business activities can begin before this is filed.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 bg-[#D4AF37] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">4</span>
              <h4 className="text-sm font-bold text-[#2D2219] mb-1">Annual Recurring: AGMs and Annual Filings</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Each financial year, the company must conduct an Annual General Meeting, prepare audited financial statements, and file Form AOC-4 (financial statements) and Form MGT-7 (annual return) to maintain clean legal standing.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white shadow-sm">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Appointing the First Statutory Auditor
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            The first major statutory duty is appointing a neutral professional to oversee the company's financial compliance. According to Section 139(6) of the Companies Act, the Board of Directors must appoint the first statutory auditor within thirty days of the incorporation date. If the board fails to make this appointment, they must inform the shareholders, who can then appoint the auditor at an Extraordinary General Meeting within ninety days.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Once appointed, the auditor holds office until the conclusion of the first Annual General Meeting. Filing Form ADT-1 online is the official method of registering this appointment with the Registrar of Companies. Delaying this appointment can lead to severe fines and prevents the company from obtaining audited accounts, which are essential for raising funds or securing loans.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Filing Commencement of Business Form
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Form INC-20A, representing the Declaration of Commencement of Business, is a critical legal milestone. Under Section 10A of the Companies Act, any company incorporated after November 2018 that has share capital cannot begin operations or exercise borrowing powers until the directors file this declaration with the Registrar of Companies. The deadline for filing this declaration is one hundred and eighty days from the date of incorporation.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            To file Form INC-20A, two conditions must be met: first, every subscriber to the Memorandum of Association must pay their share subscription money into the company's newly opened bank account. A copy of the bank statement showing these credit transactions must be attached to the form. Second, the company must verify its registered office. The form must be digitally certified by a practicing Chartered Accountant, Company Secretary, or Cost Accountant, ensuring that the government has verified proof of capital deposit.
          </p>
        </div>
      </div>
    </section>
  );
}
