import React from "react";

export default function PNNationalGreenTribunal({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Approaching National Green Tribunal (NGT)
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            For major environmental violations that affect large numbers of people or ecosystems, citizens can approach a highly specialized judicial forum. Established under the National Green Tribunal Act, 2010, the NGT provides expedited justice in environmental matters.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Pecuniary Jurisdiction and Powers of NGT
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The NGT is a specialized judicial body equipped with the same powers as a civil court. It has jurisdiction over all civil cases where a substantial question relating to the environment is involved. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Importantly, the NGT has no strict pecuniary limits on its jurisdiction, meaning it can hear claims of any monetary value. The tribunal can issue injunctions to stop polluting projects, direct the closure of defaulting industries, and order the restoration of damaged environments. The NGT is not bound by the strict procedure laid down under the Code of Civil Procedure, but is guided by the principles of natural justice, allowing cases to be resolved within six months of filing.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Petitions for Environmental Damages
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Any affected individual, group, or registered NGO can file a petition before the NGT under Section 14 or Section 15 of the NGT Act. The petition must show that a substantial question of environmental law is involved, arising from the violation of acts listed in the NGT schedule, such as the Forest Conservation Act, Air Act, Water Act, or Environment Protection Act.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 15, the NGT can award relief and compensation to the victims of pollution and other environmental damage. The tribunal can direct the polluter to pay compensation for property damage, personal health injuries, and clean-up costs, applying the polluter pays principle. The collected compensation is deposited in the Environment Relief Fund, ensuring resources are available to restore local ecosystems and protect public health.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">NGT Powers &amp; Focus</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Specialized environmental court guided by natural justice principles. Holds the power to order closures, issue injunctions, and demand environmental cleanups.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Section 15 Compensation</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Authorizes NGT to award financial compensation for health injuries, property damage, and ecosystem restoration, based on the polluter pays doctrine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
