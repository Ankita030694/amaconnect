import React from "react";

export default function DVCustodyOrders({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Child Custody and Protection Orders
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            In domestic violence disputes, children are often used as tools for emotional pressure. To protect children from trauma and prevent mothers from staying in abusive homes due to threats of separation, the PWDVA provides specific rules for temporary custody and immediate protection orders.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Temporary Custody Rules under Section 21
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 21 of the Act gives magistrates the power to grant temporary custody of any child or children to the woman at any stage of the proceedings. This temporary custody can be ordered during the initial filing stage, preventing the husband from forcefully taking the children away while the case is being resolved.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The law also allows the magistrate to decide on visitation rights. The court can set specific times and conditions under which the husband can visit the children. If the court believes that direct contact with the father could be harmful, abusive, or cause distress to the children, the magistrate can refuse visitation rights entirely, ensuring the physical and emotional safety of the children.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Securing Restraining Orders Against Abusers
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To protect women from ongoing harassment and threats, Section 18 of the Act provides for Protection Orders (commonly known as Restraining Orders). A protection order is a legally binding court directive that prohibits the respondent from committing any further acts of domestic violence, aiding or abetting others to commit abuse, or contacting the woman directly.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            These protection orders can prohibit the abuser from entering the woman's workplace, school, or any other place she frequently visits. They also prohibit the abuser from attempting to communicate with her through phone calls, emails, messages, or social media. Under Section 31 of the Act, breaching a protection order is a criminal offense, and the police can arrest the abuser immediately without a warrant, providing strong, immediate enforcement.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Enforcing Protection and Custody</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Section 21 Custody Protection</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Temporary custody granted directly to the mother.</li>
                  <li>Prevents forceful separation during litigation.</li>
                  <li>Visitation rights decided solely on child welfare.</li>
                  <li>Visitation can be completely denied if unsafe.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Section 18 Protection Directives</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Restricts abuser from contacting the woman.</li>
                  <li>Bans entry to her workplace or school.</li>
                  <li>Restrains communication via phone or web.</li>
                  <li>Breach leads to immediate arrest without warrant.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
