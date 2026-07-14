import React from "react";

export default function AlimonyCustody({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Alimony, Custody, and Child Support
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Alimony, maintenance, and child custody are the most sensitive issues in any divorce case, often leading to intense litigation. In India, maintenance can be sought under various personal laws or Section 125 of the Code of Criminal Procedure (now BNSS), which provides a secular remedy for wives, children, and parents. Maintenance is categorized into two types: maintenance pendente lite (interim maintenance granted during the pendency of the case to cover immediate expenses) and permanent alimony (granted at the time of the final decree as a lump sum or monthly payment). Child support is calculated separately, ensuring the child's education, health, and living standards are maintained. Courts emphasize that both parents share the responsibility of raising a child, though the financial contribution is balanced according to their respective incomes.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-[#FAF9F5]">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Calculating Maintenance for Wife and Child
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Calculating maintenance in India does not follow a strict mathematical formula. Instead, courts exercise judicial discretion guided by principles laid down in Supreme Court rulings. The landmark *Rajnesh v. Neha* case set clear parameters, including the financial status of both spouses, their reasonable needs, the number of dependents, the earning capacity of the husband, and the wife's education and employment status. If the wife is educated and capable of earning, the court takes this into account but does not deny maintenance if she is currently unemployed. As a general guide, courts consider 20 to 25 percent of the husband's net monthly salary as an appropriate amount for monthly maintenance. For child support, the key factor is the child's welfare, ensuring their school fees, medical expenses, and extracurricular costs are covered by the father, the mother, or shared proportionally.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Determining Custody: Joint vs. Sole
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Child custody decisions are guided by the principle of the welfare of the child, which overrides all other statutory provisions. Under the Hindu Minority and Guardianship Act of 1956, the natural guardian of a Hindu minor is the father, and after him, the mother. However, courts interpret this flexibly, often granting custody of children under five to the mother. Custody can be sole (where one parent has physical custody and the other has visitation rights) or joint (where both parents share physical custody and decision-making responsibilities). Joint custody is gaining popularity as courts recognize the importance of both parents in a child's development. If a child is over nine years old, the court often asks for their preference. The court also evaluates the moral, financial, and emotional environment provided by each parent, ensuring custody decisions prioritize the child's stability.
          </p>
        </div>
      </div>
    </section>
  );
}
