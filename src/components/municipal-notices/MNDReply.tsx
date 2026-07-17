import React from "react";

export default function MNDReply({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Drafting Reply to Local Authorities
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Receiving a demolition notice requires a quick and structured response. Simply ignoring the notice can lead to the municipality executing demolition actions. Property owners must submit a formal reply within the notice window, backed by all relevant legal and technical documents.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Submitting Sanctioned Plans and Occupancy Certificates
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The reply should include copies of the sanctioned building plans, municipal approvals, and tax payment receipts. If the construction has been completed, the owner must submit the Occupancy Certificate (OC) or Completion Certificate issued by the local authority. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            These documents prove that the construction occurred under municipal authority. If the property is old, the owner can submit tax receipts, water bills, or electricity registration documents showing that the building has existed for many years. Many municipal laws protect older structures from summary demolition, making these historic records vital for defense.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Seeking Compounding of Unauthorized Deviations
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the building has minor deviations from the sanctioned plan, the owner does not have to face demolition. In the reply, the owner can request the municipal commissioner to compound the deviations. Compounding is a legal process where minor unauthorized construction is regularized in exchange for a penalty or compounding fee.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In the response, the owner should include a drawing by a registered architect showing the exact extent of the deviations and showing that they fall within the permissible compounding limits under local bylaws. By submitting this proposal, the owner requests the municipality to hold demolition actions in abeyance while the regularization application is processed, securing the property.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Notice Response Checklist</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">1. Approved Plans:</span> Attached sanctioned plans and municipal approvals.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">2. Occupancy Proof:</span> Completion Certificates, municipal tax receipts, and utility bills.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">3. Technical Report:</span> Architect's drawing showing structural safety and exact deviation percentages.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">4. Regularization Offer:</span> Explicit request for compounding, expressing willingness to pay penalties.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
