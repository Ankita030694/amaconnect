import React from "react";

export default function CriminalComplaint({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing a Criminal Complaint in Magistrate Court
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            If the drawer ignores the legal notice or refuses to clear the payment within fifteen days, you must initiate criminal proceedings. A formal criminal complaint is filed in the Court of the Metropolitan Magistrate or Judicial Magistrate First Class. The entire process requires careful drafting and absolute accuracy in documentation, as any procedural flaw can lead to the acquittal of the accused.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FAF9F5] rounded-3xl p-6 border border-gray-100 flex flex-col gap-3">
            <h3 className="text-base sm:text-lg font-bold text-[#2D2219]">
              1. Identifying the Correct Jurisdiction
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
              Following the 2015 amendment to the Negotiable Instruments Act, the rules of territorial jurisdiction were simplified. If the payee delivers the cheque for collection through their bank account, the complaint must be filed in the court where the payee bank branch is located. If the cheque is presented directly at the drawer bank branch, the case must be filed in the court having jurisdiction over that branch.
            </p>
          </div>

          <div className="bg-[#FAF9F5] rounded-3xl p-6 border border-gray-100 flex flex-col gap-3">
            <h3 className="text-base sm:text-lg font-bold text-[#2D2219]">
              2. Checklist of Required Documents
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>Original bounced cheque and bank return memo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>Copy of the Section 138 legal notice sent to the drawer.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>Original postal dispatch receipts and online tracking reports.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>Proof of underlying debt, such as invoices or contracts.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-[#2D2219]">
            The Trial Process: Step by Step
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Once filed, the complainant submits an affidavit of evidence under Section 145 of the NI Act. If the magistrate finds a prima facie case, summons are issued. The accused must appear in court, apply for bail (as Section 138 is a bailable offense), and record their plea. If the accused pleads not guilty, the trial proceeds to cross-examination and final arguments.
          </p>
          <div className="border border-gray-100 rounded-2xl p-5 bg-white shadow-sm flex flex-col gap-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">Pre-summoning Evidence</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  The magistrate verifies the complaint details and complainant statements to establish a valid case.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">Service of Summons</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  The court issues formal summons directing the accused drawer to appear before the court on a designated date.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">Framing of Notice &amp; Trial</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  The court frames charges, conducts cross-examinations, evaluates arguments, and delivers the final judgment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
