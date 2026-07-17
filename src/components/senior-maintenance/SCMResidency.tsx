import React from "react";

export default function SCMResidency({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Right to Peaceful Cohabitation and Eviction
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            A major issue faced by elderly parents is harassment and physical or mental abuse by children living in the same house. To protect parents, courts in India have recognized that senior citizens have a right to a peaceful life, which includes the power to evict abusive children from their homes.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Evicting Abusive Children from Self-Acquired Homes
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under various state rules framed under the Senior Citizens Act, a parent has the right to apply for the eviction of their children or grandchildren from their self acquired property. The self acquired home belongs solely to the parent, and children do not have an automatic right to occupy it if their presence causes harassment, distress, or physical danger.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            High Courts in India have repeatedly ruled that a child's license to live in their parents' self acquired home can be terminated at any time by the parent. If a child behaves abusively, the parent can withdraw this permission and file an eviction petition before the competent authority, ensuring they can enjoy their home in peace.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Special Powers of District Magistrates to Enforce Eviction
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To prevent parents from having to go through slow, standard civil eviction lawsuits, the state rules give special powers to the District Magistrate (DM) or Deputy Commissioner to enforce eviction orders. A senior citizen can file an eviction application directly before the District Magistrate.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The District Magistrate conducts a summary inquiry, giving both sides a chance to be heard. If satisfied that the children are harassing the parents and occupying the property illegally, the DM can pass a summary eviction order directing the children to leave the house within a set timeframe. If they refuse to comply, the DM can direct the local police to assist the parent, physically removing the children and their belongings from the house, providing immediate and effective relief.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Self-Acquired Property Eviction</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Applies to properties earned or built by the parent. Children have no automatic right of residency and can be evicted for causing distress.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">District Magistrate Action</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Summary eviction process bypassing slow civil courts. DM can direct local police to physically remove abusive children from the parent's home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
