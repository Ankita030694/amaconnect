import React from "react";

export default function EssentialElements({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Essential Elements of a Legal Notice
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            A legal notice must follow a professional, standardized structure to be legally valid and effective in a court of law. It is drafted on the letterhead of an advocate, which lends formal weight and signals that the sender is seeking professional legal representation. The document must begin with the clear details of the sender and the recipient, including their full names, residential or corporate addresses, and contact details. This ensures proper identification and avoids service-related disputes later. The body of the notice is structured in numbered paragraphs, starting with a statement that the advocate is writing under instructions from their client. It is critical to maintain logical coherence, transition from background details to core grievances, and conclude with the legal demands.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Statement of Facts and Cause of Action
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            The heart of a legal notice lies in the detailed narrative of the facts and the clear delineation of the cause of action. The drafting advocate must chronologically list the events that transpired, such as the signing of an agreement, the transfer of funds, or verbal commitments made between the parties. Precise dates, locations, and references to supporting documents, like invoices or correspondence, must be included to establish credibility. The cause of action, which refers to the specific set of facts giving rise to a legal claim, must be explicitly stated. For instance, in a breach of contract dispute, the cause of action arises on the specific date when the defendant failed to deliver the promised services or make the scheduled payment. Clearly defining the cause of action shows the court that the plaintiff's rights were violated and that the court has jurisdiction to adjudicate the matter.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Demand of Relief and Notice Period
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            After stating the facts, the notice must clearly define the demands and the exact relief sought by the sender. This section outlines what the recipient must do to avoid legal action, such as paying outstanding dues, returning possession of property, or performing specific contractual obligations. It is vital to quantify the monetary claims, interest rates, and damages with mathematical precision. Along with the demands, the notice must specify the statutory compliance period, also known as the notice period. This is the timeline, usually 15 days or 30 days depending on the statute, within which the recipient must comply with the demands or send a reply. The notice concludes with a clear warning that if the recipient fails to meet these terms, the advocate has instructions to initiate civil or criminal proceedings in the competent court, holding the recipient liable for all court expenses and legal fees.
          </p>
        </div>

        {/* Breakdown of Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-[#2D2219] mb-3">1. Identification of Parties</h4>
            <p className="text-xs text-gray-500 leading-relaxed text-justify">
              Full name, alias, parentage, complete address, and contact details of both the sender and the recipient are required. Any spelling error or address mistake could lead to delay or failure of service, which the opponent might use to claim they never received the notice.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-[#2D2219] mb-3">2. Detailed Chronological Facts</h4>
            <p className="text-xs text-gray-500 leading-relaxed text-justify">
              The facts must be stated chronologically with precise dates and times. If there is a contract, refer to its clauses. If there is a debt, specify the transaction details. Avoid vague descriptions or general allegations that cannot be backed by documentary evidence.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-[#2D2219] mb-3">3. The Specific Breach or Injury</h4>
            <p className="text-xs text-gray-500 leading-relaxed text-justify">
              Clearly highlight what the recipient did wrong, including breach of terms, illegal possession, default in payment, or defamation. You must connect the recipient's actions directly to the legal injury or financial damage suffered by the sender.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-[#2D2219] mb-3">4. Advocate Signature &amp; Authorization</h4>
            <p className="text-xs text-gray-500 leading-relaxed text-justify">
              The notice must be signed by the advocate and contain their official enrollment number and seal. A legal notice without the signature of an authorized advocate is generally considered a personal letter rather than a formal legal notice, reducing its evidentiary weight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
