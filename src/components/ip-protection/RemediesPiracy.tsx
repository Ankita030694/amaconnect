import React from "react";

export default function RemediesPiracy({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Remedies Against Piracy and Passing Off
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Indian intellectual property law provides strong remedies against piracy and passing off. When unauthorized reproduction occurs, or when a competitor tries to pass off their goods as yours to benefit from your brand reputation, owners can pursue both civil and criminal legal routes. Utilizing these remedies helps businesses recover financial losses, secure their market position, and deter future infringers.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Civil Remedies: Injunctions and Damages
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Civil lawsuits filed in commercial courts are the most common way to resolve intellectual property infringement. The primary goal of a civil suit is to obtain an injunction, which is a court order preventing the infringer from continuing their illegal activities. In urgent cases, courts can grant temporary or ad-interim injunctions before a full trial to prevent ongoing damage. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Courts also use specialized civil orders: Anton Piller orders allow the plaintiff, accompanied by a court commissioner, to search the defendant's premises and secure evidence without prior notice. John Doe or Ashok Kumar orders are issued against unknown defendants, which is very useful for blocking pirated content across multiple web service providers and websites. In addition to injunctions, plaintiffs can claim actual damages, punitive damages, or a rendition of accounts, which requires the infringer to surrender the profits they earned from the infringement.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Criminal Prosecution under Copyright Act
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Unlike many commercial disputes, copyright and trademark infringement are criminal offenses under Indian law. Section 63 of the Copyright Act, 1957, states that anyone who knowingly infringes or abets the infringement of a copyright commits a cognizable offense. This classification allows the police to register a First Information Report (FIR) and launch investigations without waiting for a magistrate's warrant.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 64, a police officer not below the rank of sub-inspector has the power to seize all infringing copies and equipment used for duplication without a warrant, provided they are satisfied that infringement has occurred. The criminal penalties are severe, including a mandatory prison sentence of at least six months, which can extend to three years, along with a fine of fifty thousand rupees, which can go up to two lakh rupees. These criminal procedures provide a strong, cost-effective deterrent against large-scale software piracy and counterfeit manufacturing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Civil Actions</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Aimed at stopping infringement and recovering money. Includes temporary or permanent injunctions, John Doe orders for web blocking, and financial compensation or return of profits.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Criminal Actions</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Aimed at punishing the infringer and deterring others. Includes police search and seizure without a warrant, mandatory jail terms from six months to three years, and hefty criminal fines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
