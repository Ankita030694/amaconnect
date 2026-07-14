import React from "react";

export default function MediationResolution({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Settling Disputes through Alternate Mechanisms
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            While filing a civil suit is the traditional path for resolving property disputes in India, the massive backlog of cases in civil courts makes alternative dispute resolution mechanisms an attractive option. The Legal Services Authorities Act, 1987, establishes Lok Adalats (People's Courts) as a forum where pending disputes or disputes at the pre-litigation stage can be settled amicably. Lok Adalats are presided over by sitting or retired judicial officers along with legal practitioners and social workers. They act as conciliators to help parties reach a compromise. A major benefit of Lok Adalats is that the award passed by them is deemed to be a decree of a civil court and is final and binding on all parties. Crucially, no appeal lies against this award in any court of law, which prevents future litigation. If the dispute is settled at the pre-litigation stage, the parties do not have to pay any court fees, and if the case is already pending in court, the court fee paid is refunded. This mechanism is highly effective for family partition disputes or boundary squabbles among neighbors, as it focuses on consensus rather than adversarial arguments. By participating in Lok Adalats, parties can bypass the procedural delays, evidentiary requirements, and substantial financial costs associated with standard civil trials. It offers a speedy, cost-effective, and mutually acceptable solution that preserves family relationships and social harmony, making it a highly recommended first step before initiating formal litigation. Furthermore, the collaborative atmosphere of Lok Adalats encourages open communication, allowing parties to express their concerns directly without the formal constraints of a traditional courtroom setting.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Court-Annexed Mediation Process */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Court-Annexed Mediation Process
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              For disputes that have already entered the court system, Section 89 of the Code of Civil Procedure, 1908, empowers judges to refer pending matters to court-annexed mediation. In this structured process, a trained mediator facilitates discussions between the disputing parties to help them identify key issues, explore potential settlement options, and negotiate a mutually agreeable solution. Unlike a judge or arbitrator, the mediator does not impose a decision but helps the parties find common ground. Court-annexed mediation sessions are confidential, meaning that any statements or offers made during mediation cannot be used as evidence in court if the mediation fails and the trial resumes. This confidentiality encourages parties to be more open and realistic about their claims. If the mediation succeeds, the parties sign a settlement agreement, which is then submitted to the court. The court reviews the agreement and passes a decree based on it, giving it the same legal force as a regular judgment. If mediation fails, the case is sent back to the trial judge without any prejudice, ensuring that the parties' right to a full trial is preserved. This mechanism is particularly beneficial for property disputes because it allows for creative solutions, such as physical division of property or financial compensation, which might not be available under the strict remedies of civil law. Furthermore, it significantly reduces stress and costs for all involved. By resolving conflicts in a neutral setting, parties can reach agreements that satisfy their practical needs, rather than facing the all or nothing outcomes of a court decree. This constructive approach helps maintain long term relations and prevents future conflicts from arising.
            </p>
          </div>

          {/* H3: Private Arbitration Options */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Private Arbitration Options
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Another powerful out of court mechanism is private arbitration, which is governed by the Arbitration and Conciliation Act, 1996. While arbitration is most common in commercial real estate and developer-buyer disputes, it can also be adopted for private family property matters if all parties agree to include an arbitration clause in their contracts or execute a separate submission agreement. In arbitration, the parties select an independent, neutral third party called an arbitrator, or a panel of arbitrators, who act as private judges. The arbitrator conducts a formal hearing, reviews the evidence presented by both sides, and passes a binding decision known as an arbitral award. One of the main advantages of private arbitration is its speed and flexibility. The parties can choose their own arbitrator, decide the venue and timing of the hearings, and agree on simplified procedural rules, bypassing the rigid steps of the Code of Civil Procedure. Under Section 34 of the Arbitration and Conciliation Act, an arbitral award can only be challenged in court on very narrow grounds, such as fraud, conflict of interest, or violation of public policy, making the arbitrator's decision highly final. However, arbitration can be more expensive than mediation or Lok Adalats because the parties must pay the arbitrator's fees and the cost of the venue. Despite these expenses, arbitration remains a preferred option for high-value commercial property disputes, where parties require a private, expert, and rapid resolution to avoid the multi-year delays of the civil court system. Furthermore, since arbitration proceedings are conducted behind closed doors, they offer a level of confidentiality that public court trials cannot match. This feature is particularly valuable for protecting business secrets and maintaining corporate reputations during high stakes property negotiations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
