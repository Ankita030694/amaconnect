import React from "react";

export default function RentAuthorityFiling({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-8 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing Complaints before Rent Authorities
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When disputes between a landlord and tenant cannot be resolved through mutual discussion, filing a formal complaint before the Rent Authority is the primary legal remedy. The Rent Authority is a specialized officer appointed under state rent control acts to handle tenancy disputes in a fast-track manner.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Step-by-Step Procedure for Filing */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Step-by-Step Procedure for Filing
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              Filing a dispute involves the following standard steps:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base text-gray-600">
              <li>
                <strong>Drafting the Complaint:</strong> Prepare a formal petition outlining the lease history, the specific dispute (such as illegal eviction or withheld security deposit), and the exact relief you seek.
              </li>
              <li>
                <strong>Document Compilation:</strong> Attach all relevant evidence, including the tenancy agreement, bank statements, and any communication between the parties.
              </li>
              <li>
                <strong>Filing and Fee Payment:</strong> Submit the petition either online through the state rent portal or physically at the office of the Rent Authority, paying the prescribed filing fee.
              </li>
              <li>
                <strong>Notice Issuance:</strong> The Rent Authority will issue a formal notice to the opposite party, directing them to file their written reply within a set period.
              </li>
              <li>
                <strong>Hearings and Order:</strong> The authority will conduct hearings to examine the documents, hear arguments from both sides, and pass a final, legally binding order.
              </li>
            </ol>
          </div>

          {/* H3: Essential Checklist of Documents */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Essential Checklist of Documents
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              To ensure your petition is accepted and processed smoothly, you must compile a robust set of documents. This checklist includes the registered lease agreement, proof of payment of stamp duty, recent rent receipts or bank transaction slips, copies of all written notices served to the other party, copies of utility bills, and any written or digital communication (such as emails or messages) regarding the dispute.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
