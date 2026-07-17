import React from "react";

export default function DVStreedhanRights({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Streedhan Rights and Asset Recovery
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            In many domestic disputes, a woman's personal assets and jewelry are withheld by her husband or his family, leaving her without financial security. Under Hindu law, a woman's personal property is recognized as Streedhan, and she retains absolute ownership over these assets throughout her marriage and during any separation.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            What Constitutes Streedhan under Hindu Law
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Streedhan constitutes all gifts, cash, jewelry, and property presented to a woman before her marriage, at the time of her wedding, during the marriage ceremony, or during her lifetime as a wife. This includes gifts from her parents, relatives, husband, or friends. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            It is distinct from dowry, which is property demanded by the husband's family as a condition for the marriage. Streedhan belongs solely to the woman. While the husband or his family can keep the jewelry in safe custody, they do not acquire any ownership rights over it. They are legally considered trustees of her property and must return it to her immediately upon demand.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Legal Recourse for Withheld Jewelry and Property
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the husband or his family refuses to return the Streedhan, the woman has several legal options. Under Section 19(8) of the PWDVA, a magistrate can direct the respondent to return the possession of all Streedhan, jewelry, clothes, or other assets to the woman, backed by police enforcement if necessary.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, withholding a woman's Streedhan constitutes criminal breach of trust under Section 406 of the Indian Penal Code. A woman can file a criminal complaint under this section, which carries a penalty of up to three years of imprisonment. This criminal provision, combined with the civil return orders under the Domestic Violence Act, provides women with a strong mechanism to recover their personal wealth and jewelry.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Reclaiming Personal Property</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Streedhan Assets</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Includes wedding jewelry, physical gifts from relatives, cash deposits, or real estate titled in her name before or after marriage.
                </p>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Section 406 Remedy</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Allows filing criminal breach of trust complaints for refusal to return assets. Can lead to search warrants and recovery by police.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
