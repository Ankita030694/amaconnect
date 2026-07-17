import React from "react";

export default function PropertyTransferMinors({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Transfer of Property to Minor Children
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Gifting property to minors is a common estate planning strategy. However, because minors are legally incompetent to contract, guardians must be formally appointed to accept the transfer and manage the estate under court supervision.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Appointing Guardians for Property Transfer to Minors
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Transferring property to a minor child who is under eighteen years of age is legally permissible in India, but the execution of such transfers requires specific safeguards because a minor is not legally competent to enter into contracts. Under the Indian Contract Act, 1872, any agreement entered into by a minor is void ab initio, meaning it is void from the beginning. However, a minor is legally capable of receiving property as a transferee, provided the transfer is a gift and does not impose any reciprocal financial obligations or liabilities on the minor. When gifting property to a minor, a guardian must be appointed in the gift deed to accept the gift on behalf of the minor. This guardian is typically a natural guardian, such as the father or the mother, or a court appointed guardian if the parents are not alive. The guardian will sign the registered gift deed, formally recording the acceptance of the transfer. Crucially, the guardian holds and manages the property in trust for the sole benefit of the minor until the child attains the age of majority. If the minor passes away before reaching eighteen, the property will inherit according to the relevant personal laws of succession. Ensuring that the guardian role is drafted clearly in the deed is essential to satisfy the acceptance requirements under Section 122 of the Transfer of Property Act, secure a valid title, and prevent any procedural rejections by the sub-registrar.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Minor Rights and Powers of Natural Guardians
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The powers of natural guardians regarding the management and disposal of a minor property are regulated by the Hindu Minority and Guardianship Act, 1956, and similar personal laws. Under Section 8 of the Act, a natural guardian has the power to do all acts that are necessary or reasonable and proper for the realization, protection, or benefit of the minor estate. However, the guardian authority is subject to severe statutory restrictions when it comes to disposing of the minor property. A natural guardian cannot sell, gift, mortgage, lease for a term exceeding five years, or exchange the minor immovable property without securing the prior permission of the local district court. Any such sale or mortgage executed without court approval is voidable at the option of the minor, who can file a lawsuit to set aside the transaction within three years of attaining majority. To obtain court permission, the guardian must demonstrate to the judge that the sale or mortgage is for the evident advantage of the minor, such as funding their higher education or life-saving medical treatments. This strict court supervision protects minor properties from exploitation or unauthorized sales by relatives. In addition, when the minor turns eighteen, they must execute a declaration of majority and mutation of records, completing the process and assuming absolute, direct control over their registered properties.
          </p>
        </div>
      </div>
    </section>
  );
}
