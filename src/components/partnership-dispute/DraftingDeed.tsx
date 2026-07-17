import React from "react";

export default function DraftingDeed({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Drafting a Registered Partnership Deed
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            A well-drafted partnership deed is essential to establish the operational and financial terms of the business. Registering this deed with the Registrar of Firms provides the firm with full legal capacity to enforce contracts and recover debts.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Key Clauses: Profit Sharing, Capital, and Duties
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A partnership deed is the primary constitution of the firm, and drafting it carefully is essential to prevent future disputes. The deed must outline the capital contribution of each partner, specifying whether it is in cash, property, or services, and clarify if interest will be paid on this capital. The profit sharing ratio must be clearly defined, and it is a common misconception that profits must be shared equally; partners can agree to any ratio, and can even agree that a partner will share profits but not losses. The deed should also specify the roles, responsibilities, and management duties of each partner, indicating who has the authority to operate the firm bank accounts, sign contracts, and hire employees. To ensure smooth operations, the deed must contain clauses regarding partner salaries, drawings (withdrawal of funds), and the introduction of new partners. It is also critical to include provisions for the retirement, death, or insolvency of a partner, clarifying how their share will be valued and paid out to their legal heirs. Furthermore, the deed must restrict partners from engaging in competing businesses to protect the firm goodwill. Setting out clear boundaries for partner conduct, financial transactions, and administrative powers ensures that the business operates efficiently while protecting each individual partner personal assets from misuse or unauthorized transactions by other members.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Procedure for Registration with Registrar of Firms
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Although registration of a partnership firm is optional, the legal advantages of registration make it highly recommended. The registration process is carried out under Section 58 of the Indian Partnership Act, 1932, and is administered by the Registrar of Firms (ROF) of the state where the business is located. The procedure begins by drafting the partnership deed on non-judicial stamp paper of the appropriate value, which varies by state, and getting it notarized. The partners must then prepare Form A, which is the official application for registration. Form A requires details such as the name of the firm, the principal place of business, the names and permanent addresses of all partners, the date of joining of each partner, and the duration of the firm. The application must be signed and verified by all partners or their authorized agents. Along with Form A, you must submit a certified copy of the partnership deed, proof of ownership or lease of the business premises, and the prescribed registration fee. In recent years, many states have introduced online portals for the Registrar of Firms, allowing partners to submit applications and upload documents digitally. The Registrar will review the application and, if satisfied that all legal requirements are met, will record the firm details in the Register of Firms and issue a Certificate of Registration. This certificate serves as conclusive proof of the firm existence, allowing it to open bank accounts, apply for licenses, and enforce contracts in court.
          </p>
        </div>
      </div>
    </section>
  );
}
