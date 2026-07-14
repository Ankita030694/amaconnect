import React from "react";

export default function AssetDivision({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Division of Assets and Matrimonial Property
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            The division of assets and matrimonial property is one of the most contentiously debated aspects of divorce proceedings in India, primarily due to the absence of unified codification on marital property rights. Unlike western jurisdictions that follow community of property rules, India operates under a separate property regime where assets remain with the individual who holds the legal title unless a joint ownership is explicitly registered. This means that property acquired during the course of the marriage does not automatically become joint property, and the court must carefully evaluate the financial contribution, registration details, and intent of the parties. When couples opt for a mutual consent divorce, they have the freedom to negotiate a comprehensive settlement agreement that outlines the transfer of assets, relinquishment of rights, and distribution of liabilities, which is then incorporated into the final court decree. However, in contested divorces, resolving property disputes requires extensive litigation where parties must present evidence of their financial stakes, including bank accounts, loan statements, and property deeds. The court also considers non-financial contributions, such as homemaking and child-rearing, when deciding on alimony or maintenance, although direct property ownership is strictly determined by legal title and monetary input. Spouses must approach this process with meticulous documentation and strategic planning, ensuring that all settlements are legally binding, registered with appropriate authorities, and free from future claims. Resolving these disputes efficiently is crucial for both parties to achieve financial independence and move forward with their lives after the marriage is dissolved. Seeking legal advice early in the process helps in identifying hidden assets and drafting a robust settlement deed that protects one's interest from unexpected tax liabilities or transfer issues.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-[#FAF9F5]">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Streedhan Rights and Gift Settlements
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Under Indian family law, Streedhan refers to all gifts, ornaments, cash, and property received by a woman before, during, or after her marriage, including during childbirth and festivals. According to Section 14 of the Hindu Succession Act, 1956, and judicial precedents from the Supreme Court of India, a woman has absolute ownership over her Streedhan, and she can dispose of it in any manner she chooses. The husband and his family act only as trustees of these assets and are legally obligated to return them upon demand, failing which they can face criminal liability for breach of trust under the Bharatiya Nyaya Sanhita (formerly Section 406 of the Indian Penal Code). Gift settlements made by relatives during the wedding ceremony must be documented to avoid future litigation, as only voluntary gifts fall under Streedhan, whereas items obtained through coercion or dowry demands are illegal under the Dowry Prohibition Act, 1961. Spouses are encouraged to maintain a detailed list of all gifts and ornaments, signed by both parties and witnesses, to establish clear ownership in court. During divorce proceedings, the division of matrimonial property does not automatically include the wife's Streedhan, which remains her exclusive financial fallback, ensuring her economic security post marriage. Any dispute regarding the custody or return of these assets requires the family court to examine the source of funds and the nature of the gifts, separating personal gifts from joint matrimonial acquisitions. Furthermore, the court has the authority to order the search and seizure of Streedhan items if the husband refuses to return them voluntarily, highlighting the strong protection provided to women regarding their personal assets in matrimonial disputes.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Joint Bank Accounts and Property Registries
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Joint bank accounts and shared properties present complex challenges during a divorce in India, as the division depends heavily on financial contributions and legal registries rather than simple split rules. In India, there is no automatic concept of community property where all assets acquired during marriage are split equally. Instead, the court looks at the names on the property registries and the financial contributions made by each spouse. If a property is registered solely in the husband's name, the wife has a right to reside in it under the Protection of Women from Domestic Violence Act, 2005, but she does not automatically own a share unless she can prove direct financial contribution to its purchase. For jointly registered properties, the division is determined based on the percentage of contribution towards the purchase price, home loans, and registration fees, which requires presenting bank statements, tax returns, and loan payment receipts in court. Similarly, joint bank accounts operate under the mandate of either or survivor, but during a separation, spouses should immediately freeze or convert these accounts to prevent unilateral withdrawals of mutual funds. The court has the power to trace the origin of funds in these joint accounts to ensure that neither party is deprived of their rightful earnings or inheritance. Spouses must document all financial transactions and keep records of shared investments, including mutual funds, fixed deposits, and insurance policies, as these will be scrutinized during the property settlement phase of the divorce process. Furthermore, courts may grant temporary injunctions to restrain either spouse from creating third-party interests or selling off joint matrimonial assets until the final divorce decree is passed.
          </p>
        </div>
      </div>
    </section>
  );
}
