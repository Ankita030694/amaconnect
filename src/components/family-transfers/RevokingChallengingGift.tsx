import React from "react";

export default function RevokingChallengingGift({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Revoking or Challenging a Gift Deed
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Although a registered gift deed is generally permanent, the law provides statutory provisions to suspend or cancel the transfer under specific circumstances. Recognizing the grounds for revocation and the limitations of challenging a deed is essential for estate protection.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Conditions Under Which a Gift Can Be Revoked
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Once a gift deed is registered, the transfer is generally considered absolute and irrevocable, meaning the donor cannot unilaterally cancel the deed or demand the property back. However, Section 126 of the Transfer of Property Act, 1882, outlines specific conditions under which a gift deed can be suspended or revoked. The first scenario is when the donor and the donee agree that on the happening of any specified event, which does not depend on the will of the donor, the gift shall be suspended or revoked. This mutual agreement must be recorded as an express condition inside the registered gift deed itself at the time of execution. For example, the deed can state that the gift will be revoked if the donee fails to maintain the donor in their old age. A second scenario arises under Section 23 of the Maintenance and Welfare of Parents and Senior Citizens Act, 2007. This powerful section states that if a senior citizen transfers property by gift, subject to the condition that the donee shall provide them basic amenities and physical needs, and the donee fails to do so, the transfer of property shall be deemed to have been made by fraud or coercion or under undue influence and can be declared void by the Maintenance Tribunal. Beyond these statutory provisions, a gift cannot be revoked at the mere whim of the donor, and any attempt to do so without a court decree is legally invalid.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Challenging a Gift Deed on Grounds of Coercion or Fraud
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 126 of the Transfer of Property Act, 1882, a gift may also be revoked in any of the cases (save want or failure of consideration) in which a contract might be rescinded. This means that a gift deed can be challenged in a civil court if the donor consent was obtained through fraud, coercion, undue influence, or misrepresentation. Coercion occurs when the donor is threatened with physical harm or illegal confinement to force them to sign the deed. Fraud arises when the donee uses active concealment or false promises to deceive the donor, such as getting an elderly parent to sign a gift deed under the pretext that it is a power of attorney or a lease agreement. Undue influence is frequently cited in disputes involving senior citizens or physically weak donors who are dependent on a caregiver or a relative. In such cases, the court examines whether the donee was in a position to dominate the will of the donor and used that position to obtain an unfair advantage. The burden of proving fraud or coercion lies on the person challenging the deed, and they must submit detailed particulars of the deceit or threats in their pleadings. A suit to challenge or cancel a gift deed must be filed in a civil court within the limitation period of three years from the date the fraud or coercion was discovered, seeking a declaration that the deed is null and void.
          </p>
        </div>
      </div>
    </section>
  );
}
