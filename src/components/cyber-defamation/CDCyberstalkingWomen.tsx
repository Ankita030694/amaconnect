import React from "react";

export default function CDCyberstalkingWomen({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Cyberstalking and Harassment of Women
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Women are disproportionately the targets of digital abuse, including online stalking, non-consensual sharing of intimate images, and gender-based trolling. The Indian legal system contains specific, stringent criminal laws to address these offenses and protect women online.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Sections Protecting Women against Digital Abuse
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 354D of the Indian Penal Code specifically defines and penalizes stalking. In the digital context, cyberstalking occurs when a person monitors a woman's internet, email, or other electronic communications without her consent. A first conviction carries a penalty of up to three years of imprisonment, while repeat offenses carry up to five years.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, Section 67A of the Information Technology Act penalizes publishing or transmitting sexually explicit content in electronic form. This section is applied to combat revenge piracy or threats to leak private photos, carrying a penalty of up to five years of imprisonment and a fine of up to ten lakh rupees. Furthermore, Section 509 of the IPC penalizes insulting the modesty of a woman, which is applied directly to online comments and abusive messages.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Involving Women Police Cells and Protection Officers
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To support victims of cyberstalking, local police departments maintain specialized Crimes Against Women cells. These cells are staffed by female officers who are trained to handle digital harassment complaints sensitively. Women can also contact Protection Officers appointed under the Domestic Violence Act if the digital harassment is committed by a husband or family relative.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, the National Commission for Women (NCW) runs a dedicated digital complaint cell to register cases of online harassment and monitor police actions. Many cities also run specialized She Teams or local cyber patrols that assist women in securing immediate protection, tracing offenders, and coordinating with social media platforms to remove defamatory or private images quickly, ensuring safety.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Key Protections for Women</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-gray-600">
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block">Section 354D IPC</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Penalizes monitoring a woman's digital communication without consent. Includes imprisonment of three to five years.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block">Section 67A IT Act</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Criminalizes sharing sexually explicit digital content. Carries severe fines and up to five years of imprisonment.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block">Section 509 IPC</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Insulting modesty through words or digital messages. Applied directly to abusive social comments and emails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
