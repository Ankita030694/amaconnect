import React from "react";

export default function PoliceArrestRights({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Police &amp; Arrest Rights in India
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Understanding your **basic legal rights** during an interaction with law enforcement is crucial for safeguarding your liberty and dignity. In India, the Constitution and the Code of Criminal Procedure (CrPC / BNSS) provide clear safeguards to prevent arbitrary detention and abuse of power.
          </p>
        </div>

        {/* DK Basu Guidelines Checklist */}
        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            The Supreme Court's D.K. Basu Guidelines
          </h3>
          <p className="text-xs text-gray-500 mb-6">
            The landmark Supreme Court judgment in *D.K. Basu v. State of West Bengal* laid down strict guidelines that police officers must follow during arrest and interrogation to ensure transparent procedures:
          </p>
          <ul className="space-y-4">
            {[
              {
                title: "Identification of Arresting Officers",
                desc: "All police personnel carrying out arrests and interrogations must wear clear, visible identification tags showing their name and designation."
              },
              {
                title: "Arrest Memo",
                desc: "The arresting officer must prepare an arrest memo at the time of the arrest, witnessed by at least one family member or respected citizen, and counter-signed by the arrested person."
              },
              {
                title: "Right to Inform a Friend or Relative",
                desc: "The arrested person has the right to have a relative or friend informed of their arrest and place of detention within 8 to 12 hours of arrest."
              },
              {
                title: "Medical Examination",
                desc: "The arrested person must be medically examined at the time of arrest and re-examined every 48 hours during detention by a trained doctor on the state panel."
              }
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-0.5">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Women Arrest Rules - Alert box */}
        <div className="bg-amber-50/50 border border-amber-100 rounded-3xl p-6 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-bold text-amber-950 mb-1">
              Special Arrest Protections for Women
            </h3>
            <p className="text-xs text-amber-900/80 leading-relaxed">
              Under Section 46(4) of the CrPC (and BNSS equivalent), no woman can be arrested after sunset (6 PM) and before sunrise (6 AM), except under exceptional circumstances with the prior written permission of a Judicial Magistrate. Furthermore, any arrest or search of a woman must be conducted strictly by a female police officer.
            </p>
          </div>
        </div>

        {/* Essential Rights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white">
            <h4 className="text-xs font-bold text-[#2D2219] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Right to Know Grounds of Arrest
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              You must be informed immediately of the exact reasons for your arrest, and whether the offense is bailable (allowing release on bail bond) or non-bailable.
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white">
            <h4 className="text-xs font-bold text-[#2D2219] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Produced within 24 Hours
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Article 22(2) of the Constitution mandates that the police must produce an arrested person before the nearest Judicial Magistrate within 24 hours of arrest (excluding travel time).
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white md:col-span-2">
            <h4 className="text-xs font-bold text-[#2D2219] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Right to Consult an Advocate
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              You have the right to consult and be defended by a legal practitioner of your choice. During interrogation, you are entitled to meet your lawyer, though not throughout the entire interrogation process.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
