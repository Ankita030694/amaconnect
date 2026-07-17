import React from "react";

export default function MediationArbitrationPartnership({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Resolving Disputes through Mediation &amp; Arbitration
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Rushing to court can drain startup resources and destroy public goodwill. Implementing structured, multi-tiered dispute resolution clauses ensures that conflicts are resolved confidentially through mediation and arbitration.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Drafting Effective Multi-Tiered Dispute Clauses
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When co-founders draft their initial agreement, they should assume that disputes will occur and create a structured mechanism to resolve them without immediately going to court. An effective way to achieve this is by drafting a multi-tiered dispute resolution clause. This clause establishes a step-by-step process that the parties must follow when a dispute arises. The first tier typically requires the founders to engage in formal, good faith negotiations for a defined period, such as fifteen to thirty days, to resolve the issue amicably. If negotiations fail, the second tier mandates structured mediation, where the parties appoint a neutral, independent mediator to facilitate a settlement. Mediation is a voluntary, confidential process that helps preserve business relationships, and any agreement reached during mediation can be formalized as a binding contract. If the dispute remains unresolved after mediation, the third and final tier is binding commercial arbitration. By dividing the process into tiers, the clause prevents parties from rushing to court over minor issues, saving substantial time and legal costs. The clause must be drafted with precise timelines, procedures for appointing mediators and arbitrators, and specify the seat, venue, and governing law of the proceedings. Courts in India respect these multi-tiered clauses and will generally refuse to hear a lawsuit if the parties have bypassed the mandatory negotiation and mediation stages outlined in their agreement.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Initiating Commercial Arbitration under 1996 Act
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If mediation fails to resolve the co-founder dispute, the next step is initiating formal commercial arbitration under the Arbitration and Conciliation Act, 1996. The process begins by sending a formal notice of arbitration to the disputing partner, invoking the arbitration clause in the agreement. This notice must outline the nature of the dispute, the claims, and propose the name of an arbitrator. If the parties cannot agree on a sole arbitrator, they can petition the High Court under Section 11 of the Act to appoint an arbitrator. Once the arbitral tribunal is constituted, the proceedings are governed by the rules established under the 1996 Act, which provides a fast-track mechanism for commercial disputes. One of the main advantages of arbitration is that the proceedings are private and confidential, preventing sensitive financial data or business strategies from becoming public record. Furthermore, the arbitral award passed by the tribunal is final and binding on all parties, possessing the same legal force as a decree of a civil court. The award can be executed in court, and the grounds for challenging an arbitral award under Section 34 of the Act are extremely limited, ensuring a final resolution. During the arbitration, partners can also apply to the High Court or the tribunal itself under Section 9 or Section 17 for interim protection, such as freezing bank accounts or securing assets, to prevent the defaulting partner from siphoning off funds before the final award is passed.
          </p>
        </div>
      </div>
    </section>
  );
}
