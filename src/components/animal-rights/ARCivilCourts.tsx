import React from "react";

export default function ARCivilCourts({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Approaching Civil Courts for Protection
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When administrative complaints to municipal boards, police cells, or the Registrar of Societies fail to stop harassment from RWAs or neighbors, approaching civil courts becomes necessary. Civil courts hold wide powers to protect pet owners and street animal feeders from illegal restrictions.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Seeking Permanent Injunctions against RWA Restrictions
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A pet owner facing persistent threats from an RWA (such as banning the pet from elevators, imposing daily fine sheets, or blocking access paths) can file a civil suit for permanent injunction and damages before the local Civil Court.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The suit asks the court to permanently restrain the RWA from interfering with the resident's enjoyment of their property, which includes keeping their pet and using common facilities. Along with the main suit, the owner can file an application under Order 39, Rules 1 and 2 of the Code of Civil Procedure (CPC) for an ad-interim stay order. This temporary order prevents the RWA from taking any coercive action during the trial, securing peace of mind.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Writ Petitions for Stray Feeding Protections
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            For community animal feeders facing organized intimidation or violence from residential groups, filing a writ petition under Article 226 of the Constitution before the High Court is an effective remedy.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The petition asks the High Court to issue a Writ of Mandamus directing the local police and municipal authorities to provide protection to the feeders and enforce the AWBI guidelines on designated feeding spots. High Courts review these cases with high priority, often directing the local police station to assign officers to ensure feeders can feed the animals without facing physical attacks or harassment, upholding constitutional duty.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Civil &amp; Constitutional Remedies</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Civil Suit (Order 39 Stay)</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Secures immediate temporary stay orders. Restrains RWAs from enforcing arbitrary fines or restricting elevators during the main trial.
                </p>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Writ of Mandamus (Article 226)</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  High Court orders directing local police to protect animal feeders and enforce designated feeding spot guidelines on hostile societies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
