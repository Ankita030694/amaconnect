import React from "react";

export default function SCMTribunal({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing Claims in Maintenance Tribunals
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The filing process in Maintenance Tribunals is designed to be simple, accessible, and free from the procedural delays that occur in standard civil courts. This user-friendly structure ensures that elderly individuals can easily approach the tribunal and secure orders without needing extensive legal knowledge.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Drafting and Submitting the Application Form
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The process begins by drafting a maintenance petition, which can be written in English or the local regional language. The petition must include: the name and age of the senior citizen, the details and addresses of their children or relatives, proof of relationship, and a detailed list of the senior citizen's monthly expenses.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The applicant must also show that they are unable to support themselves from their own income, pension, or property revenue, while proving that the children have sufficient financial capacity but have neglected to support them. If the senior citizen is physically disabled or too weak to travel, the law allows a registered NGO, a authorized representative, or the tribunal itself (acting on its own initiative) to file the petition on their behalf, ensuring support is always accessible.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Without Professional Legal Representation
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A unique feature of the Senior Citizens Act is Section 17, which explicitly states that no party to a proceeding before a Maintenance Tribunal or Appellate Tribunal can be represented by a legal practitioner. This rule is designed to keep proceedings simple, prevent wealthy children from using lawyers to delay the case, and ensure a level playing field for the parent.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To assist elderly parents who may struggle to present their case, the state government appoints a Maintenance Advocate. The Maintenance Advocate is a designated public officer who acts as a helper, guiding the senior citizen through the hearings, explaining the legal issues, and ensuring their voice is heard. This administrative support, combined with the informal nature of the hearings, helps resolve disputes within the statutory deadline of ninety days from the date of serving the notice.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Tribunal Application Checklist</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">1. Complainant Details:</span> Identity proof, age certificate (such as Aadhaar or PAN card), and current residential address.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">2. Respondent Details:</span> Names, relationship proofs, occupations, and estimated monthly income of all children or relatives.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">3. Income Proof:</span> Bank statements or declarations proving the senior citizen lacks independent funds or pension.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">4. Expense Details:</span> Detailed breakdown of medical bills, rent, food, and clothing expenses.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
