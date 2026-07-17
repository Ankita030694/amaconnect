import React from "react";

export default function LegalRemediesDissolution({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Legal Remedies: Injunctions and Dissolution
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When a partnership completely breaks down, partners must seek immediate legal remedies to protect the business assets. Civil courts and arbitral tribunals possess the authority to grant interim injunctions and order the formal dissolution of the firm.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Seeking Interim Court Injunctions for Assets
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When a serious dispute arises, and one partner is suspected of siphoning off funds, stealing intellectual property, or selling business assets without authorization, immediate legal protection is necessary. The non-defaulting partners can approach a civil court or an arbitral tribunal to seek interim injunctions to protect the assets of the firm. Under Section 9 of the Arbitration and Conciliation Act, 1996, or Order 39 Rules 1 and 2 of the Code of Civil Procedure, 1908, courts have the power to grant temporary injunctions before the final trial or arbitration award is decided. An interim injunction can restrain the defaulting partner from operating the firm bank accounts, accessing the physical offices, contacting clients, or transferring shareholdings. To secure an interim injunction, the applicant must satisfy the court on three core legal principles: first, that there is a prima facie case in their favor; second, that they will suffer irreparable injury if the injunction is not granted; and third, that the balance of convenience lies in their favor. The applicant must present clear documentary evidence, such as bank transaction logs, unauthorized contracts, or email correspondence, to demonstrate the urgency of the situation. Securing an interim injunction acts as a vital freeze order, preserving the status quo of the business and preventing the defaulting partner from causing irreparable financial damage while the main dispute is being litigated or arbitrated.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Dissolution of Partnership Firm by Court Order
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When the relationship of trust between partners has completely broken down, and amicable operation is no longer possible, the final legal remedy is the dissolution of the partnership firm. Under Section 44 of the Indian Partnership Act, 1932, a partner can file a suit in a civil court seeking the dissolution of the firm on specific grounds. The statutory grounds for dissolution by court order include: if a partner has become of unsound mind; if a partner becomes permanently incapable of performing their duties; if a partner is guilty of misconduct that is likely to affect the business; if a partner willfully or persistently commits breach of the partnership agreement; if a partner has transferred the whole of their interest in the firm to a third party; or if the business of the firm cannot be carried on save at a loss. Furthermore, the court can order dissolution on any ground that renders it just and equitable to do so, such as a complete deadlock in management. Once the court orders dissolution, the firm ceases to carry on active business, and the process of winding up begins. Under Section 48 of the Act, the firm assets must be sold to settle third-party debts, repay partner advances, and return partner capital, with any remaining surplus distributed among the partners in their profit-sharing ratio. Dissolution by court order ensures a structured, legally supervised exit, protecting partners from unauthorized liabilities during the winding-up phase.
          </p>
        </div>
      </div>
    </section>
  );
}
