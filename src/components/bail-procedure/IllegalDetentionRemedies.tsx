import React from "react";

export default function IllegalDetentionRemedies({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Remedies against Illegal Detention & Harassment
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Illegal detention occurs when a person is kept in custody by law enforcement officers without statutory authority, beyond the permissible 24 hour limit, or in direct violation of procedural guidelines. The Indian legal system provides powerful constitutional and statutory remedies to protect citizens against police excesses, arbitrary confinement, and custodial harassment.
          </p>
        </div>

        <div className="bg-[#FAF9F5] border border-[#D4AF37]/20 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Key Remedies Against Custodial Harassment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Writ of Habeas Corpus",
                desc: "Filed under Article 226 of the Constitution in the High Court, or Article 32 in the Supreme Court. The court issues an order commanding the detaining authority to produce the person in court and justify the legal validity of the detention, ordering immediate release if it is found to be unauthorized."
              },
              {
                title: "Representation Before the Magistrate",
                desc: "When the arrested person is produced within 24 hours, their advocate can file an objection to remand, pointing out procedural violations such as the failure to prepare an arrest memo or lack of medical checkups, seeking immediate judicial release."
              },
              {
                title: "Human Rights Commission Complaints",
                desc: "Filing formal complaints with the National Human Rights Commission (NHRC) or State Human Rights Commissions (SHRC). These independent bodies have the authority to investigate custodial violence, recommend suspension of officers, and grant monetary compensation."
              },
              {
                title: "BNS / IPC Criminal Action",
                desc: "Filing criminal complaints against errant police officers for wrongful confinement, torture, or extorting confessions. Under Sections 342, 330, and 166 of the IPC (and corresponding sections of the Bharatiya Nyaya Sanhita, BNS), officers face trial and imprisonment."
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl p-4 bg-white shadow-sm flex flex-col gap-1.5">
                <span className="text-xs font-bold text-[#2D2219] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  {item.title}
                </span>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            In cases of illegal detention, courts have the power to award monetary compensation to the victim, holding the state vicariously liable for the violations of fundamental rights. The Supreme Court has repeatedly held that sovereign immunity does not apply in cases of constitutional torts. Any officer who registers false cases or detains a person without following due process can be suspended, demoted, or prosecuted, serving as a reminder that executive authority remains subject to judicial review.
          </p>
        </div>
      </div>
    </section>
  );
}
