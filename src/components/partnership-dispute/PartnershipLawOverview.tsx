import React from "react";

export default function PartnershipLawOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Introduction to Partnership Law in India
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Partnership law in India balances the flexibility of a joint venture with structured statutory liabilities. Understanding the default provisions of the Partnership Act and the legal implications of mutual agency is essential to protect partners from unexpected liabilities.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Partnership Act of 1932 statutory overview
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The legal framework governing traditional business partnerships in India is primarily codified under the Indian Partnership Act, 1932. This historical statute, which was carved out from the Indian Contract Act, 1872, governs the formation, operation, dissolution, and dispute resolution of partnership firms. The Act provides a comprehensive set of default rules that regulate the rights and duties of partners, their relationship with third parties, and the consequences of insolvency or death of a partner. Although the Act has been in force for nearly a century, it remains a vital pillar of Indian commercial law, offering a flexible structure for small and medium enterprises. One of the key aspects of the Indian Partnership Act, 1932, is that registration of a partnership firm is not mandatory under the law. However, Section 69 of the Act imposes severe legal disabilities on unregistered firms. An unregistered firm cannot file a lawsuit against any third party to enforce a contract or recover debts in a court of law, nor can its partners sue each other for breach of partnership terms. This statutory disadvantage makes registration with the Registrar of Firms highly essential for any business seeking legal security. Understanding these statutory provisions is critical for partners to avoid the pitfalls of unregistered business operations, protect their commercial interests, and ensure that their contractual agreements are legally enforceable across all judicial jurisdictions in India.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Definition of Partnership and Mutual Agency
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 4 of the Indian Partnership Act, 1932, defines a partnership as the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all. This definition highlights three essential ingredients: there must be an agreement, a business objective, and a profit sharing motive. However, the most critical legal element that distinguishes a partnership from other joint business ventures is the principle of mutual agency. The phrase carried on by all or any of them acting for all establishes that every partner is both an agent and a principal for all other partners. Under the law of mutual agency, any act done by a partner in the ordinary course of the firm business binds the partnership and all other partners, making them jointly liable for any liabilities or losses incurred. This means that a single partner can enter into contracts, borrow money, or purchase assets on behalf of the firm, and their actions will legally commit the entire partnership, even if the other partners were unaware of the transaction. This relationship of absolute trust requires partners to act with utmost good faith toward each other. Mutual agency is a double-edged sword: while it facilitates smooth business operations, it also exposes every partner to massive personal financial risks if one partner acts negligently or dishonestly. Managing this mutual agency through clear, binding contractual limits is the primary purpose of a partnership deed.
          </p>
        </div>
      </div>
    </section>
  );
}
