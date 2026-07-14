import React from "react";

export default function AdversePossession({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Law of Adverse Possession
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Adverse possession is a unique and controversial doctrine of property law in India where a trespasser can acquire legal ownership of a property by continuously occupying it against the wishes of the true owner for a specified period. This doctrine is based on the legal maxim that the law assists those who are vigilant about their rights, not those who sleep over them.
          </p>
        </div>

        {/* Case Study Section Type */}
        <div className="bg-[#F4F8FD] border border-[#C2D7E7] rounded-3xl p-6 sm:p-8 my-2 shadow-sm">
          <p className="text-xs text-[#0288D1] font-bold uppercase tracking-wider mb-2">
            Case Study: The Supreme Court Test
          </p>
          <h3 className="text-lg font-bold text-[#01579B] mb-2">
            Applying Nec Vi, Nec Clam, Nec Precario
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            In the landmark case of Karnataka Board of Wakf v. Government of India (2004), the Supreme Court of India laid down the precise elements required to claim adverse possession. The court held that a person claiming adverse possession must prove that their possession was hostile, open, continuous, and exclusive. The possession must be peaceful (nec vi), public and visible (nec clam), and without permission or license from the true owner (nec precario). The claimant must disclose the exact date they took possession, the nature of their possession, and the fact that the true owner was aware of their hostile presence, making the burden of proof exceptionally high.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Understanding the Twelve-Year Limitation */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Understanding the Twelve-Year Limitation
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The statutory basis for adverse possession is found in the Limitation Act, 1963. Article 65 of the Schedule to the Limitation Act prescribes a limitation period of twelve years for a true owner to file a suit for possession of immovable property based on title. The twelve year countdown begins from the moment the possession of the defendant becomes adverse to the plaintiff. If the true owner fails to file a recovery suit within this twelve year window, their right to reclaim the property is extinguished under Section 27 of the Limitation Act, and the adverse possessor gains a legal title. It is important to note that when the land belongs to the Government, the limitation period is extended to thirty years under Article 112 of the Limitation Act. The Supreme Court in the case of Ravinder Kaur Grewal v. Manjit Kaur (2019) clarified that adverse possession is not merely a defense for a defendant, but it can also be used as a weapon by a plaintiff to seek declaration of title and recovery of possession if they have completed the twelve year term.
            </p>
          </div>

          {/* H3: Elements Required to Prove Possession */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Elements Required to Prove Possession
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Proving adverse possession in a court of law is a complex factual task, as courts generally look upon such claims with skepticism. To establish adverse possession, the claimant must present strong documentary evidence demonstrating continuous occupancy. This includes electricity bills, water connection receipts, property tax payments, voter ID records, and ration cards registered at that specific address over the entire twelve year period. The occupant must also show that they acted as the de facto owner, making improvements to the property, maintaining fences, and letting out portions to tenants under their own name. Crucially, the possession must be hostile, meaning the occupant must openly deny the true owner's title. If the occupant pays any rent to the owner or acknowledges their ownership in writing at any point during the twelve years, the chain of continuity is broken, and the possession is deemed permissive rather than adverse. Permissive possession, no matter how long it lasts, can never ripen into adverse possession.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
