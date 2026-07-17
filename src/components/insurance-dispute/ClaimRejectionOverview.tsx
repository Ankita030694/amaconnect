import React from "react";

export default function ClaimRejectionOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Understanding Insurance Claim Rejection
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Receiving a denial letter from an insurance company can be a frustrating experience. To successfully challenge a repudiated claim, policyholders must understand the common reasons insurers use to justify rejections and the legal principles governing insurance contracts.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Common Grounds for Claim Denials
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Understanding the specific reasons behind an insurance claim denial is the first step toward building a successful appeal. In India, insurance companies operate under strict financial models, and claims departments scrutinize every submission to minimize their liabilities. The most common grounds for rejection in health and life insurance include allegations of material non-disclosure, where the insurer claims that the policyholder concealed pre-existing illnesses like diabetes, hypertension, or chronic cardiovascular conditions during the proposal stage. Other frequent reasons include delayed filing, where the claimant fails to notify the insurer within the timeline specified in the policy document, often twenty-four to forty-eight hours for hospitalization. Insurers also routinely deny claims by citing policy exclusions, which are specific medical procedures, lifestyle diseases, or accidents that are explicitly excluded from coverage, such as self-inflicted injuries, cosmetic surgeries, or treatments related to substance use. In motor insurance, claims are frequently denied due to driver policy breaches, such as driving without a valid license, driving under the influence, using a private vehicle for commercial purposes, or failing to file a police report for theft. Furthermore, clerical discrepancies, such as mismatches between the name on the policy and the hospital records, incomplete claim forms, or lack of proper bills and discharge summaries, can lead to immediate rejections. Knowing these common denial grounds helps policyholders prepare their applications meticulously and identify wrongful repudiations early.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Legal Relationship between Insurer and Insured
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The contract of insurance is not a standard commercial agreement but is governed by the strict legal principle of Uberrimae Fidei, which translates to utmost good faith. This foundational legal doctrine imposes a reciprocal duty of honesty and transparency on both the insurer and the insured. The policyholder is legally obligated to disclose all material facts regarding their health, age, habits, and previous insurance coverage that could influence the insurer decision to accept or price the risk. A material fact is defined as any information that would affect the judgment of a prudent insurer in determining whether to take the risk and at what premium. If the insured fails to disclose such facts, the contract becomes voidable at the option of the insurer, allowing them to reject future claims and cancel the policy. However, this duty of good faith is a two-way street that binds the insurance company as well. Insurers are legally mandated to draft policy terms, exclusions, and conditions in clear, unambiguous language. Under the standard rules of contract interpretation, if any clause in an insurance policy is vague or capable of multiple interpretations, the principle of Contra Proferentem applies. This legal rule dictates that any ambiguity in the contract terms must be resolved in favor of the insured, who had no role in drafting the policy. Consequently, the insurer cannot escape liability by relying on self-serving, confusingly worded exclusion clauses to repudiate legitimate claims.
          </p>
        </div>
      </div>
    </section>
  );
}
