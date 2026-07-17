import React from "react";
import Link from "next/link";

export default function LegalNoticeClaim({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing Legal Notice to Insurance Company
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Serving a formal legal notice is a powerful pre-litigation step. It officially puts the insurance company on notice of your intent to pursue legal remedies, often prompting their legal department to reconsider the rejection.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Drafting Notice for Wrongful Repudiation
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Serving a formal legal notice to the insurance company is a highly strategic step before initiating legal action in the Consumer Commission. A legal notice is a formal written document drafted by an advocate that warns the insurance company of your intention to file a lawsuit if they do not resolve the dispute. The notice must be drafted with legal precision, detailing the exact terms of the policy, the premium payments made, the details of the claim, and a comprehensive breakdown of why the repudiation was illegal and wrongful. It must cite relevant clauses of the policy and specific consumer protection laws that have been violated by the insurer. Furthermore, the notice should mention that the insurer has committed a breach of contract and engaged in unfair trade practices by denying a valid claim. The draft must be addressed to the Managing Director and the head of the claims department of the insurance company, ensuring it reaches the highest decision makers who can override the claims team. It is essential to attach copies of the rejection letter and the clinical or factual evidence supporting your claim. Preparing this notice establishes a formal record of your grievance and demonstrates to the insurer that you are prepared to pursue the matter judicially. If you need assistance in drafting a professional, legally sound notice, you can connect with specialized consumer protection advocates through our{" "}
            <Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">Ask Me Anything</Link>{" "}
            portal or seek help via our{" "}
            <Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "}
            programs.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Setting Timelines for Payment Release
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A key element of a legal notice is the inclusion of a specific demand and a strict timeline for the insurance company to comply. Typically, the notice sets a period of fifteen days from the date of receipt for the insurer to release the full claim amount along with interest and any accrued benefits. The notice must state clearly that if the insurer fails to comply with the demands within this fifteen-day window, the policyholder will proceed to file a complaint in the Consumer Commission or initiate civil proceedings without any further notice. The notice must also hold the insurance company liable for all subsequent litigation costs, advocate fees, and compensation for mental agony and harassment. Setting a clear timeline forces the insurer legal department to review the claim file urgently. In many cases, insurance companies prefer to settle the claim out of court during this notice period to avoid public litigation, brand damage, and the risk of paying interest and penalties imposed by the commission. It is critical to send the legal notice via Registered Post with an Acknowledgment Card or Speed Post, as the delivery receipt serves as proof that the insurer was officially notified. If they ignore the notice, this delivery proof will be submitted to the Consumer Commission to show that you gave the insurer a final, reasonable opportunity to resolve the dispute, strengthening your position before the judges.
          </p>
        </div>
      </div>
    </section>
  );
}
