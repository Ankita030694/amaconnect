import React from "react";

export default function WomenChildrenArrests({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Guidelines on Arrests of Women & Children
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Indian law provides special, stringent protections for vulnerable groups, specifically women and children, during the process of arrest and detention. Recognizing the risk of custodial abuse and harassment, both the Code of Criminal Procedure (CrPC) and the Bharatiya Nagarik Suraksha Sanhita (BNSS), alongside the Juvenile Justice (Care and Protection of Children) Act, 2015, mandate strict protocols that law enforcement agencies must follow under threat of legal penalties.
          </p>
        </div>

        {/* Red Flags List */}
        <div className="bg-[#FFFDF9] border border-red-200 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-red-800 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
            Red Flags List: Violations of Arrest Code
          </h3>
          <p className="text-xs text-gray-600 mb-6 leading-relaxed">
            The following actions represent serious violations of Indian law. If any of these occur, it constitutes illegal detention or procedure, and immediate remedies should be sought through courts:
          </p>
          <div className="space-y-4">
            {[
              {
                violation: "Arrest of a Woman After Sunset and Before Sunrise",
                details: "Section 46(4) of CrPC (Section 43(5) of BNSS) strictly prohibits the arrest of a woman between 6:00 PM and 6:00 AM. Exceptions are only permitted under highly urgent situations and require the prior written approval of a Judicial Magistrate First Class."
              },
              {
                violation: "Search of a Female Accused by a Male Officer",
                details: "Any physical search of a female arrestee must be carried out exclusively by a female police officer, maintaining the highest standards of decency and privacy (Section 51(2) CrPC)."
              },
              {
                violation: "Detention of a Minor in a Police Lockup",
                details: "Under the Juvenile Justice Act, a minor (under 18 years) cannot be detained in a standard police station lockup or jail. They must be handed over to the Special Juvenile Police Unit or a child welfare officer, and housed in an observation home."
              },
              {
                violation: "Handcuffing a Minor or Woman",
                details: "The use of handcuffs or physical restraints on children, women, or individuals accused of non-violent, minor offenses is illegal, unless specifically authorized by a Magistrate due to a high risk of escape."
              },
              {
                violation: "Failing to Notify Guardians Immediately",
                details: "Failing to contact the parents, guardians, or Child Welfare Committee immediately upon taking a child into custody is a direct breach of statutory guidelines."
              },
              {
                violation: "Absence of Female Officer During Arrest",
                details: "Whenever a woman is being arrested or interrogated, a female police officer must be present. Interrogations should not take place in isolated environments without female staff present."
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-red-100 rounded-2xl p-4 bg-white shadow-sm flex flex-col gap-1.5">
                <span className="text-xs font-bold text-red-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {item.violation}
                </span>
                <p className="text-xs text-gray-500 leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-3">
            Special Custodial Safeguards
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            For women, custody must be separate from men. Female prisoners must be housed in completely separate wards or lockups to prevent any risk of gender-based violence. For juveniles, the law emphasizes rehabilitation over punishment. A juvenile must be produced before the Juvenile Justice Board (JJB) within 24 hours. The police are required to dress in plain clothes (not uniforms) when interacting with children to minimize psychological trauma, and the entire process must remain confidential.
          </p>
        </div>
      </div>
    </section>
  );
}
