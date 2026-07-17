import React from "react";

export default function CDStatutory({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Statutory Provisions under IT Act and IPC
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Indian law provides both technology specific statutes and standard criminal codes to address online defamation. Following the Supreme Court decision that struck down Section 66A of the Information Technology Act for being overly broad, prosecutors and victims rely on other active sections of the IT Act and the Indian Penal Code to bring cyber offenders to justice.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Section 66C and 66D of Information Technology Act
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Online harassment and defamation are frequently accompanied by identity theft or the creation of fake profiles. Section 66C of the Information Technology Act, 2000, penalizes identity theft, stating that anyone who fraudulently uses another person's digital signature, password, or biometric details commits a crime. This section is useful when abusers create fake profiles using a victim's actual photos and name to post defamatory content.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, Section 66D of the IT Act penalizes cheating by impersonation using a computer resource. Anyone who uses digital communication tools to impersonate another person to deceive or damage their reputation can be punished. Both Section 66C and 66D carry severe penalties, including imprisonment for up to three years along with a fine of up to one lakh rupees, making them strong tools against digital scammers and trolls.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Criminal Defamation under Indian Penal Code
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Apart from specialized cyber laws, the Indian Penal Code contains standard provisions for criminal defamation. Section 499 of the IPC defines defamation, while Section 500 prescribes the punishment. Under Section 499, anyone who makes or publishes any imputation concerning another person, by words spoken or written, with the intention or knowledge that it will harm their reputation, commits defamation.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Furthermore, Section 503 (criminal intimidation) and Section 509 (word, gesture, or act intended to insult the modesty of a woman) are frequently applied in digital harassment cases. Under Section 500, the penalty for criminal defamation is simple imprisonment for up to two years, a fine, or both. These sections apply directly to emails, blog posts, and messages, giving victims a direct route to seek criminal prosecution against online offenders.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Core Legal Statutes for Cyber Crimes</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">1. Section 66C (IT Act):</span> Targets identity theft. Applied when attackers use victim photos or credentials to set up fake accounts.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">2. Section 66D (IT Act):</span> Targets computer-based impersonation. Applied when trolls post under a victim's name to damage reputation.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">3. Section 499 &amp; 500 (IPC):</span> Defines and penalizes criminal defamation. Applies to written digital words and media uploads.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">4. Section 509 (IPC):</span> Insulting the modesty of a woman. Applied to cyberbullying, trolling, or non-consensual sharing of personal images.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
