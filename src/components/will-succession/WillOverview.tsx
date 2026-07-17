import React from "react";
import Link from "next/link";

export default function WillOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Understanding Wills and Succession in India
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The distribution of a person's property after their death is one of the most critical legal processes in civil jurisprudence. In India, succession planning is regulated by a combination of statutory laws and personal religious codes. A clear understanding of these laws ensures that family wealth is protected and transferred to the intended beneficiaries without disputes, preventing long litigation in civil courts.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Testate vs Intestate Succession Explained
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When a person dies leaving behind a valid legal Will, the distribution of their property is referred to as testate succession. In this scenario, the deceased person, known as the testator, has the freedom to specify exactly which assets go to which beneficiaries, designate executors to manage the estate, and even create trusts for minor children. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Conversely, if a person dies without making a Will, it is called intestate succession. In an intestate scenario, the estate is distributed strictly according to the default inheritance rules of the personal law applicable to the deceased's religion. This means the family cannot decide how to divide the property, which often leads to conflicts and legal delays. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To explore your options for writing a legally binding Will, you can consult an estate planning advocate at the 
            {" "}<Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">AMAConnect Ask Me Anything</Link>{" "} 
            portal, or seek assistance through our 
            {" "}<Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "} 
            services. You can also join ongoing discussions about asset protection, probate applications, and family inheritance in our interactive 
            {" "}<Link href="/communities" className="text-[#D4AF37] hover:underline font-semibold">Legal Communities</Link>{" "} 
            forums.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Applicability of Indian Succession Act 1925
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The Indian Succession Act, 1925, is the primary national legislation regulating wills, probate processes, and the administration of estates in India. Part six of the Act details the rules for drafting, executing, and revoking wills. It applies to wills made by Hindus, Buddhists, Sikhs, Jains, Christians, Parsis, and Anglo-Indians. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            However, the Act has a complex relationship with personal laws. While Christians, Parsis, and Hindus must follow the procedural requirements of the Indian Succession Act for making wills, Muslims are generally exempted from these provisions. Muslims are instead governed by their personal Sharia laws regarding wills and inheritance, which impose specific restrictions on how much property can be willed away and to whom.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">📄</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Testate Succession</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Distribution occurs according to a written, signed, and witnessed Will. Grants complete control over asset distribution and simplifies estate administration.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">⚖️</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Intestate Succession</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Distribution occurs according to default religious laws (such as the Hindu Succession Act). Requires court-issued succession certificates, which can lead to family disputes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
