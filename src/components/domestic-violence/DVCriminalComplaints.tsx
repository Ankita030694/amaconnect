import React from "react";

export default function DVCriminalComplaints({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Criminal Complaints under Section 498A
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            While the PWDVA is primarily a civil law providing relief to victims of domestic abuse, the Indian Penal Code contains strong criminal provisions to punish abusers. Section 498A is the primary criminal statute used to address severe domestic abuse, providing imprisonment for husband or relatives who subject a woman to cruelty.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Understanding Cruelty by Husband or Relatives
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 498A defines cruelty as any deliberate conduct that is likely to drive a woman to suicide, or cause grave injury or danger to her life, limb, or physical or mental health. The definition also covers harassment aimed at forcing her or her relatives to meet unlawful demands for dowry, property, or valuable security.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Cruelty under Section 498A is a cognizable and non-bailable offense. This means the police can arrest the accused without a warrant, and bail cannot be claimed as a matter of right but must be decided by a magistrate. The offense carries a penalty of up to three years of imprisonment along with a fine, acting as a strong deterrent against dowry harassment and physical abuse.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Supreme Court Guidelines on Immediate Arrests
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Due to concerns regarding the misuse of Section 498A, the Supreme Court of India has issued guidelines to regulate the arrest process. In the landmark case of Arnesh Kumar vs State of Bihar, the court ruled that the police should not make automatic arrests under Section 498A immediately after a complaint is filed.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Instead, the police must follow the procedures listed in Section 41 of the Code of Criminal Procedure. They must first issue a Notice of Appearance (under Section 41A) to the husband and his relatives, directing them to join the investigation. An arrest can only occur if the husband refuses to cooperate, or if the police record written reasons showing that an arrest is necessary to prevent him from destroying evidence, threatening witnesses, or committing further offenses, balancing the protection of women with fair procedure.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Section 498A Guidelines</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Definition of Cruelty</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Includes conduct driving a woman to self-harm, physical violence endangering health, or mental harassment for unpaid dowry demands.
                </p>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Arnesh Kumar Guidelines</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Automatic arrests are barred. Police must serve Section 41A notices first. Arrests require written justification submitted to a magistrate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
