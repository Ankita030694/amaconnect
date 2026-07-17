import React from "react";

export default function MNDLocalBodies({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Responsibility of Local Bodies to Act
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Municipal corporations are public offices that hold a statutory duty to enforce town planning laws and protect public spaces. When they fail to act against illegal construction, or when they execute demolition actions arbitrarily, property owners can use higher judicial remedies to enforce accountability.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Mandamus Petitions in High Courts for Inaction
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A common problem in India is municipal inaction. When a builder or neighbor constructs a massive illegal building, and the local municipal officers ignore complaints due to corruption or political pressure, affected citizens can approach the High Court. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Article 226 of the Constitution of India, citizens can file a writ petition seeking a Writ of Mandamus. Mandamus is a judicial command directing a public authority to perform its statutory duty. In the petition, the applicant shows that they filed multiple complaints with the municipality, but the officers failed to act. The High Court can direct the municipal commissioner to inspect the site, submit a status report, and execute demolition of the illegal portions within a set timeframe.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Supreme Court Rulings on Arbitrary Bulldozer Actions
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Conversely, the judiciary has taken a very strict view of arbitrary or punitive demolitions conducted by state authorities, often termed bulldozer actions. The Supreme Court of India has ruled that municipal bodies cannot use demolition as a tool for punishment or execute it without following due process of law.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The Supreme Court has mandated strict guidelines: even if a construction is unauthorized, the municipality must issue a formal show-cause notice, allow a statutory reply period, conduct a fair hearing, and pass a reasoned final order. Furthermore, after passing the final order, the authority must provide a reasonable grace period (typically fifteen days) before starting demolition. This grace period allows the property owner to approach a court or tribunal to seek legal stay orders, preventing arbitrary executive actions.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Judicial Remedies for Municipal Oversight</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Mandamus Writ (Article 226)</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  High Court order directing municipal officers to inspect, stop, and demolish illegal constructions when they fail to respond to complaints.
                </p>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Due Process Guidelines</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Mandatory show-cause notice, personal hearing, reasoned final order, and a fifteen-day grace period to allow the owner to approach the courts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
