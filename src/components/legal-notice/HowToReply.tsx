import React from "react";

export default function HowToReply({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            How to Reply to a Legal Notice
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            Receiving a legal notice can be a stressful experience, but it must be handled with calmness and immediate legal action. Ignoring a legal notice is highly inadvisable and can severely damage your legal position if the sender decides to initiate court proceedings. When you receive a legal notice, the first step is to carefully read and understand the allegations and demands made by the sender. You must check the deadline for responding, which is usually 15 or 30 days. It is critical to contact a qualified advocate immediately to review the notice and draft a suitable reply statement. The reply notice is your first opportunity to present your defense, refute false claims, and set the record straight before any formal litigation begins.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Consequences of Ignoring a Notice
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            Choosing to ignore a legal notice can result in severe legal consequences. In civil law, if a recipient remains silent after receiving a formal notice containing specific allegations, the courts may draw an adverse inference under Section 114 of the Indian Evidence Act. The court may assume that the recipient did not respond because they did not have a valid defense to offer. In specific statutory matters, such as cheque bounce cases under Section 138 of the Negotiable Instruments Act, 1881, the failure to pay the amount or reply to the notice within the mandatory 15 day period gives the sender the immediate right to file a criminal complaint in court. Furthermore, during trials, judges often view the failure to reply to a notice as a sign of bad faith and non-cooperation, which can negatively affect the court's discretion when awarding costs or damages.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Drafting the Written Reply Statement
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            Drafting a written reply statement, commonly referred to as a reply notice, requires a strategic and precise approach. The reply must be drafted on the letterhead of an advocate and must address the allegations of the original notice paragraph-by-paragraph. In legal drafting, any allegation that is not specifically denied in the reply is presumed to be admitted by the recipient. Therefore, a general denial is insufficient; every allegation of fact must be specifically disputed, explaining the recipient's version of events. The reply should also outline any counterclaims, such as unpaid dues from the sender, or highlight that the notice is legally defective or barred by the law of limitation. Once the reply is drafted, it is signed by the advocate and the recipient, and dispatched via Registered Post AD or Speed Post, preserving the postal receipt as proof of delivery.
          </p>
        </div>

        {/* Strategic Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-[#2D2219] mb-3">1. Check the Date of Receipt</h4>
            <p className="text-xs text-gray-500 leading-relaxed text-justify">
              Note the exact date you received the notice, as the statutory response window begins on the day of delivery, not the day of drafting. Keep the original envelope with the postal tracking sticker, as it serves as primary proof of the delivery date.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-[#2D2219] mb-3">2. Paragraph-by-Paragraph Denial</h4>
            <p className="text-xs text-gray-500 leading-relaxed text-justify">
              Ensure your advocate refutes each allegation individually. For instance, if the notice claims you failed to deliver services, your reply should reference delivery receipts, completion certificates, or email approvals showing compliance.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-[#2D2219] mb-3">3. Highlighting Legal Defects</h4>
            <p className="text-xs text-gray-500 leading-relaxed text-justify">
              Point out if the notice is defective, such as if it was sent past the limitation period, if it lacks the signature of an advocate, or if it was served under the wrong statutory provision. These defects can be used to seek dismissal of the suit.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-[#2D2219] mb-3">4. Proposal for Settlement</h4>
            <p className="text-xs text-gray-500 leading-relaxed text-justify">
              If the claims are partially valid, your reply can propose a conditional settlement or mediation to resolve the dispute amicably. Offering a reasonable compromise in writing demonstrates your good faith and cooperative intent to the judge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
