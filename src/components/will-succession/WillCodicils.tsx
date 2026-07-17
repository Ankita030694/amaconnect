import React from "react";

export default function WillCodicils({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Codicils and Revoking a Will
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            A Will is a dynamic legal document that remains revocable and modifiable throughout the testator's lifetime. As family situations, assets, and financial circumstances change, testators must update their estate planning documents. Under the Indian Succession Act, 1925, changes can be made either by adding a codicil or by revoking the existing Will and executing a new one.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            How to Make Minor Modifications to a Will
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A codicil is an official supplementary document used to make minor changes, additions, or explanations to an existing Will. For example, if a testator wants to change the executor, add a new beneficiary, or update the description of a specific property without rewriting the entire Will, they can draft a codicil.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A codicil is legally considered a part of the original Will. Crucially, a codicil must follow the exact same execution procedures as a Will: it must be in writing, signed by the testator, and attested by at least two independent witnesses. The witnesses do not need to be the same individuals who signed the original Will. If the original Will was registered, it is a recommended practice to register the codicil as well to ensure consistency in government records.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Express and Implied Revocation Rules
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If a testator wants to make major changes, it is safer to write a completely new Will and revoke the old one. Revocation can be express or implied. Express revocation occurs when a testator writes a new Will that contains an explicit clause stating: I hereby revoke all previous wills and codicils made by me. This clear statement immediately invalidates all prior documents.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Implied revocation occurs when a testator writes a new Will that distributes their assets in a way that is completely inconsistent with the previous Will, even if there is no explicit revocation clause. In such cases, the newer Will takes legal precedence. A Will can also be revoked by physical destruction, such as burning, tearing, or shredding the document, provided the destruction is done by the testator or under their direct instruction with the clear intention of revoking it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Using Codicils</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Best for minor updates (such as changing an executor or adding a small gift). Must be signed and attested by two witnesses. Avoids the need to rewrite the entire document.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Writing a New Will</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Best for major changes (such as restructuring property division). Must include an express revocation clause. Requires physical destruction or explicit revocation of the older Will.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
