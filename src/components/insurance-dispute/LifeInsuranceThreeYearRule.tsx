import React from "react";

export default function LifeInsuranceThreeYearRule({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Life Insurance Claims and the Three-Year Rule
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            In life insurance, nominees are often faced with delayed investigations and sudden claim rejections. The law provides a crucial statutory protection under Section 45 of the Insurance Act, which severely limits the insurer ability to challenge a policy after a specific duration.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Section 45 of the Insurance Act Explained
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In life insurance, one of the most critical legal protections available to policyholders and their nominees is Section 45 of the Insurance Act, 1938. This section, which was heavily amended in 2015, is commonly referred to as the three year indisputability rule. Under Section 45, no life insurance policy can be called into question by the insurer on any ground whatsoever, including misstatement of facts, non-disclosure, or fraud, after the expiry of three years from the date of the policy issuance or the date of reinstatement of the policy, whichever is later. This means that once a life insurance policy has remained active for a continuous period of three years, the insurance company loses its legal right to reject a death claim or repudiate the contract by claiming that the insured lied about their health, age, or lifestyle habits at the time of purchase. If the policyholder dies after the three-year mark, the insurer is legally bound to settle the claim and cannot launch investigations into the past medical history of the deceased to find grounds for rejection. This amendment was specifically introduced to prevent insurers from collecting premiums for years and then rejecting claims when the insured is no longer alive to defend their statements. For families and nominees who are grieving the loss of a primary breadwinner, Section 45 provides a vital statutory shield that guarantees financial security and prevents arbitrary rejections of long term life insurance policies.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Indisputability Clauses and Claims Settlement
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The practical application of the indisputability clause has completely revolutionized the landscape of life insurance claims settlement in India. Prior to the amendment, insurance companies could investigate and reject claims even ten or fifteen years after policy inception, citing minor discrepancies in the original proposal form. Under the current legal framework, if a claim arises within three years of policy issuance, the insurer still has the right to reject the claim, but the burden of proof is extremely high. The insurer must prove that the non-disclosure was material and that the policyholder was aware of the fact and made the misstatement with clear fraudulent intent. However, once the three-year threshold is crossed, even if the insurer discovers a major non-disclosure, they cannot cancel the policy or deny the claim. The only minor exception is if the insurer can prove that the policy was obtained by impersonation or that the insured was already dead, which are rare cases of criminal fraud. Nominees facing rejections on policies older than three years should immediately cite Section 45 in their appeals to the GRO and the Ombudsman. The judiciary and the commissions enforce this rule strictly, and any insurer attempting to bypass Section 45 is heavily penalized. This statutory certainty provides absolute peace of mind to policyholders, ensuring that the financial protection they purchased for their families remains secure against administrative challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
