import React from "react";

interface RequiredDocumentsProps {
  id: string;
}

export default function RequiredDocuments({ id }: RequiredDocumentsProps) {
  const documents = [
    {
      category: "Police and State Records",
      items: [
        "First Information Report (FIR) - copy from the jurisdictional police station.",
        "Spot Panchnama and Site Map - details the physical layout of the accident spot.",
        "Mechanical Inspection Report - verifies the mechanical condition of the vehicles.",
        "Charge Sheet - official criminal charges filed against the offending driver.",
        "Driver's License and Vehicle Registration Certificate (RC) of the offending vehicle."
      ]
    },
    {
      category: "Medical Records and Proofs",
      items: [
        "Medico-Legal Case (MLC) Report - initial medical assessment at admission.",
        "Hospital Discharge Summary - dates of admission, discharge, and procedures.",
        "Disability Certificate - issued by a government Medical Board detailing impairment percentage.",
        "Original Pharmacy and Treatment Bills - matching physician prescriptions.",
        "Diagnostic Reports - MRI, CT scans, X-rays, and blood analysis reports."
      ]
    },
    {
      category: "Income and Dependency Records",
      items: [
        "Salary Slips and Form 16 - for salaried employees (last 3 to 6 months).",
        "Income Tax Returns (ITR) - for self-employed individuals (past 3 financial years).",
        "Employment Contract or Certificate of Business Registration.",
        "Legal Heir Certificate or Succession Certificate - in case of fatal accidents.",
        "Aadhaar Cards and Birth Certificates - proving dependency of claimants."
      ]
    }
  ];

  return (
    <section id={id} className="py-8 border-b border-gray-100 scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2219] mb-6">
        Documents Required for Accident Claims
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            Essential Police and Medical Records
          </h3>
          <p className="mb-4">
            When submitting a compensation claim to the Motor Accident Claims Tribunal, the quality of your documentary evidence directly determines your success. The primary layer of this evidence consists of official police and medical records, which establish the occurrence of the accident, verify the identities of the parties, and detail the injuries sustained. On the police side, the essential records include the First Information Report, the spot panchnama or site map illustrating the physical positioning of the vehicles, the mechanical inspection report of both the claimant's and the offending vehicle, the charge sheet filed against the driver, and verification of the driver's license and vehicle registration.
          </p>
          <p className="mb-4">
            On the medical side, claimants must produce the medico-legal case report issued by the hospital immediately after admission, detailed discharge summaries, operation theater notes if surgeries were performed, all original bills for medicines, hospitalization, and diagnostic tests, and prescriptions signed by registered doctors. If the accident has resulted in permanent or temporary disability, a formal disability certificate issued by a state-appointed Medical Board is mandatory. This certificate must specify the exact percentage of physical impairment, as it plays a central role in calculations of future loss of earnings. Insurance defense attorneys scrutinize medical records to detect pre-existing conditions or delays in treatment; hence, keeping a chronologically ordered file of all diagnostic scans and original medical vouchers is vital to counter these defenses.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            Proof of Income and Dependency Documents
          </h3>
          <p className="mb-4">
            To obtain substantial compensation under the heads of loss of dependency and loss of estate, claimants must present concrete proof of the victim's income and establish the legal dependency of the family members. In fatal accident claims, the tribunal determines the award by assessing what the deceased would have contributed to the household had they survived. For salaried employees, the essential documents include official salary slips for the months preceding the accident, employment contracts, bank statements showing salary credits, and Form 16 or income tax returns.
          </p>
          <p className="mb-4">
            For self-employed individuals, business owners, or professionals, the income is proved by presenting audited balance sheets, profit and loss statements, registration certificates of the business, and income tax returns filed for the past three assessment years. In cases where the victim was a student or did not have a taxable income, the tribunal relies on minimum wage notifications issued by the state government, taking into account the educational qualifications of the victim to estimate potential earnings. To establish dependency, claimants must submit relationship proofs, such as Aadhaar cards, ration cards, birth certificates, and marriage certificates. These documents prove that the claimants are indeed the legal heirs of the deceased and were financially dependent on them. If a claimant fails to establish legal dependency, the tribunal may only award compensation under the head of loss of estate, which is a significantly smaller sum than loss of dependency.
          </p>
        </div>

        {/* Document Checklist Visual Block */}
        <div className="mt-8 bg-amber-50/40 border border-amber-100 rounded-3xl p-6 sm:p-8">
          <h4 className="text-lg font-bold text-[#2D2219] mb-6">
            Document Checklist for Claims Filing
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documents.map((cat, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h5 className="font-bold text-[#2D2219] text-sm sm:text-base border-b border-gray-100 pb-3 mb-4">
                  {cat.category}
                </h5>
                <ul className="space-y-3">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                      <input 
                        type="checkbox" 
                        readOnly 
                        checked 
                        className="mt-1 rounded text-[#D4AF37] focus:ring-[#D4AF37] border-gray-300"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
