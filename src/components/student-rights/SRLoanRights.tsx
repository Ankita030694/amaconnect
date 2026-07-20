import React from "react";

export default function SRLoanRights({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Educational Loan and Subsidy Rights
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Financing higher education often requires securing bank loans. The Reserve Bank of India (RBI) and the Central Government have established specific schemes and interest subsidies to ensure students from all financial backgrounds can access educational loans without facing arbitrary rejections.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Model Educational Loan Schemes and Interest Subsidies
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The Indian Banks Association (IBA) has designed a Model Educational Loan Scheme followed by all public sector banks. Under this scheme, loans up to four lakh rupees are provided without requiring any collateral or third-party guarantee, ensuring basic access.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, the Central Sector Interest Subsidy (CSIS) scheme provides full interest subsidy during the moratorium period (course duration plus one year) for students from families with an annual income up to four point five lakh rupees. This subsidy reduces the repayment burden on young graduates, helping them establish their careers before payments begin.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Handling Bank Delays in Loan Disbursements
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Many students face severe delays in loan sanctions or subsequent installment disbursements, risking their enrollment or exam eligibility. Banks cannot delay disbursements arbitrarily if the student has submitted all necessary documents, including fee demand letters and marksheets.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If a bank delays disbursement, the student should first file a written complaint with the branch manager. If unresolved within thirty days, they can approach the RBI Banking Ombudsman online. The Ombudsman holds the power to inspect bank operations, order the bank to release the funds, and award compensation for the mental stress and academic risk caused by the delay, protecting the student.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">CSIS Interest Subsidy</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Covers full interest during the study period and moratorium. Eligible for families earning under four point five lakh rupees annually.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">RBI Ombudsman Route</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Allows students to file complaints against arbitrary loan delays. Ombudsman can compel disbursement and award interest penalties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
