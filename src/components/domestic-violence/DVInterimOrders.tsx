import React from "react";

export default function DVInterimOrders({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Interim Orders and Appeals Procedure
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Domestic violence situations often require immediate intervention to prevent physical harm or financial abandonment. The PWDVA contains special provisions that allow courts to grant urgent temporary relief during the initial stages of a case, while also establishing clear pathways for both parties to appeal final decisions.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Obtaining Ex-Parte Interim Relief Orders
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 23 of the Act gives magistrates the power to pass interim orders as they deem fit during the case. If the magistrate is satisfied, based on the woman's affidavit, that the husband is committing or is likely to commit domestic violence, the court can issue ex-parte interim orders. Ex-parte means the order is issued immediately, without waiting to hear the husband's defense or arguments.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            These ex-parte orders can grant immediate temporary protection, stop the husband from selling shared property, order immediate maintenance payments, or award temporary child custody. This emergency relief protects women from retaliation or financial distress while the court gathers evidence for a full trial, which can take several months.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Appeals Against Magistrate Decisions
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 29 of the Act, if either party (the woman or the husband) is unsatisfied with an order passed by the magistrate, they have the right to file an appeal. The appeal must be filed in the Court of Session within thirty days from the date on which the magistrate's order was served to them.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The Sessions Court reviews the magistrate's decisions to ensure they align with the evidence and legal standards. Filing an appeal does not automatically suspend the magistrate's order, meaning the husband must continue paying maintenance or respecting the protection orders unless the Sessions Court issues a specific stay order. This rule ensures that women remain protected and supported during the appeal process, preventing procedural delays from causing hardship.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Litigation Steps in Domestic Violence Cases</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Section 23 Ex-Parte Orders</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Granted based solely on the victim's application. Secures temporary housing rights, child protection, and emergency maintenance.
                </p>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Section 29 Sessions Appeal</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Must be filed within thirty days of the order. Heard by the Sessions Judge, but does not pause existing protection and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
