import React from "react";

export default function WillSuccessionLaws({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Succession Laws for Different Faiths
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            In India, inheritance rules and the power to dispose of property through a Will are closely tied to a person's religion. If a person does not write a Will, their estate is divided according to the personal laws of their faith. Even when writing a Will, the legal limits on property distribution differ significantly between religions, making it essential to understand these faith specific rules.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Rules under Hindu Succession Act
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The Hindu Succession Act, 1956, regulates inheritance for Hindus, Buddhists, Sikhs, and Jains. Under Section 30 of this Act, a Hindu has the right to dispose of any of their self acquired property through a Will to anyone they choose, completely overriding the default rules of intestate succession. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            However, coparcenary property within a Hindu Undivided Family (HUF) is treated differently. Historically, HUF property passed solely by survivorship. Following major legal updates, a coparcener now has the right to dispose of their undivided share in HUF property through a Will. If they do not write a Will, their share passes by intestate succession to Class one heirs (such as spouse, children, and mother), rather than going to the remaining coparceners, ensuring fair protection for close family members.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Concept of Sharia Wills under Muslim Law
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Muslim succession in India is governed by Islamic personal law, which imposes strict limits on testate power to protect natural heirs. Under Muslim law, a person can only dispose of a maximum of one third of their net estate through a Will (known as the thirding rule). The remaining two thirds of the estate must be distributed among the compulsory legal heirs according to Quranic inheritance rules.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, a bequest made under a Muslim Will to any of the compulsory heirs is not valid unless all the other legal heirs give their consent after the testator's death. Unlike under the Indian Succession Act, a Muslim Will can be made orally, though a written document is highly recommended to prevent proof issues. These religious limits prevent a person from disinheriting close family members without their consent, maintaining family support structures.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Faith-Based Succession Rules</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Hindu Succession Act Jursiprudence</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Applies to Hindus, Jains, Sikhs, and Buddhists. Allows complete testamentary freedom over self acquired property. Coparceners can bequeath their undivided share in HUF assets.
                </p>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Islamic Succession Jurisprudence</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Applies to Muslims. Restricts testamentary distribution to one third of net assets. Bequests to legal heirs require consent of other heirs after death.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
