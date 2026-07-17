import React from "react";

export default function SCMRevokeProperty({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Right to Revoke Property Transfers
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            A common form of elder abuse involves children persuading their parents to transfer their properties, only to abandon them once the transfer is complete. To protect elderly individuals from being left homeless and without resources, the Act contains a unique and powerful provision under Section 23, allowing parents to revoke property transfers.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Section 23 of the Senior Citizens Act Explained
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 23 states that if a senior citizen has transferred their property (whether movable or immovable) by way of a gift deed or transfer, on the condition that the transferee (the child or relative) will provide them with basic amenities and physical needs, and the child later fails or refuses to provide those needs, the transfer of property is legally deemed to have been made by fraud, coercion, or under undue influence.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under this section, the Maintenance Tribunal has the authority to declare the entire transfer or gift deed null and void. This unique remedy bypasses standard civil court litigation, giving senior citizens a fast path to regain legal ownership of their homes and assets from ungrateful or abusive relatives.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Pre-requisites to Declare Gift Deeds Null and Void
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To successfully declare a gift deed null and void under Section 23, certain legal prerequisites must be satisfied. First, the property transfer must have occurred after the commencement of the Act in 2007. Second, the transfer document or gift deed should ideally contain an explicit clause stating that the transfer is made on the condition that the children will support and care for the parent in their old age.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            However, the Supreme Court of India and various High Courts have ruled that even if there is no explicit written condition in the gift deed, the condition to care for the parent can be implied from the circumstances of the transfer. If the parent can prove they transferred their only home to their child and were abandoned immediately afterward, the tribunal can declare the deed void, protecting the parent's rights.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Requirements for Section 23 Property Revocation</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Document Conditions</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Transfer must have occurred after the 2007 Act came into force.</li>
                  <li>Ideally includes a clause linking the transfer to elder care.</li>
                  <li>Imputation of fraud if care is withheld.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Evidentiary Proofs</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Proof of abandonment or denial of basic food, housing, or medicine.</li>
                  <li>Medical records or witness statements proving neglect.</li>
                  <li>Evidence showing the parent lacks other housing options.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
