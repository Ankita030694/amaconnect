import React from "react";

export default function DocumentChecklist({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Essential Document Checklist for Court
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Filing a divorce petition in an Indian family court requires a comprehensive collection of documents. The court will not accept a petition unless it is accompanied by proper supporting evidence. Preparing these documents in advance is essential to avoid delays. The first set of documents involves personal identification and proof of marriage, including a copy of the marriage registration certificate or wedding photographs, along with proof of address and identity for both parties. In cases of mutual consent, a copy of the settlement agreement or memorandum of understanding must be submitted to outline the agreed terms. For contested cases, additional evidence supporting the specific grounds for divorce must be compiled. This may include police reports, medical certificates, or correspondence that demonstrates cruelty, desertion, or other statutory faults.
          </p>
        </div>

        {/* Visual Checklist Box */}
        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            Required Document Checklist
          </h3>
          <ul className="space-y-4">
            {[
              {
                category: "Identity and Marriage Proofs",
                docs: ["Marriage Certificate (issued by Registrar of Marriages) or Wedding invitation card", "Joint wedding photographs or family pictures showing cohabitation", "Identity proof (Aadhaar Card, Passport, or Voter ID) of both spouses", "Address proof showing the current place of residence of both parties"]
              },
              {
                category: "Evidence of Separate Living",
                docs: ["Proof of separate living for at least one year (e.g. rent agreements, separate utilities)", "Mediation report, if the parties participated in formal mediation counseling", "Affidavits confirming that the parties have not cohabited during the separation period"]
              },
              {
                category: "Financial Disclosures (Rajnesh v. Neha)",
                docs: ["Income tax returns (ITRs) for the last three financial years", "Detailed bank account statements for the last three years", "Salary slips for the last six months, if employed, along with Form 16", "Property ownership documents, vehicle registration cards, and investment portfolios"]
              }
            ].map((section, idx) => (
              <li key={idx} className="space-y-2">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">{section.category}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {section.docs.map((doc, docIdx) => (
                    <div key={docIdx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-gray-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 flex-shrink-0" />
                      <span className="text-xs text-gray-600 leading-normal">{doc}</span>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Proof of Marriage and Separation Details
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Proving a valid marriage is the primary jurisdictional requirement in any matrimonial proceeding. If a marriage was registered under the Hindu Marriage Act, the Special Marriage Act, or any personal law, a certified copy of the marriage certificate is sufficient. In the absence of a registration certificate, the court accepts alternative evidence, such as the wedding invitation card, joint photographs of the ceremony, or affidavits from family members who witnessed the wedding. To satisfy the requirements of a mutual consent petition, the parties must also present proof of separate living for at least one year. Separation does not necessarily require living under separate roofs. The Supreme Court has clarified that couples living in the same house can be legally separated if they have ceased all conjugal relations and do not share a common household, which can be proved through separate bank accounts or independent utility bills.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-[#FAF9F5]">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Financial Disclosure and Asset Statements
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            In modern divorce litigation, financial disclosure is critical for determining alimony, maintenance, and child support. Following the landmark judgment in *Rajnesh v. Neha (2020)*, the Supreme Court of India mandated that both parties must file a detailed affidavit of assets and liabilities. This affidavit requires disclosing all sources of income, monthly expenditures, bank accounts, investments, properties, loans, and other financial liabilities. The goal of this requirement is to prevent concealment of income, which was common in past maintenance disputes. Spouses must attach income tax returns for the last three years, salary slips for the last six months, and bank statements for the last three years. Failing to file this affidavit or providing false information can lead to severe penalties, including prosecution for perjury, or court-ordered adverse inferences.
          </p>
        </div>
      </div>
    </section>
  );
}
