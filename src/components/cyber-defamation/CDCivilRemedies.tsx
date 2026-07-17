import React from "react";

export default function CDCivilRemedies({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Civil Remedies: Injunctions and Damages
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            While criminal complaints punish offenders, civil lawsuits help victims recover financial losses and stop ongoing damage. Civil courts in India provide effective remedies for cyber defamation, allowing victims to seek financial compensation and secure court orders to prevent further publication.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Damage Suits in Civil Courts
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A victim of cyber defamation can file a civil suit for damages in a court of competent jurisdiction. The suit must prove that the offender published false statements, that the statements referred directly to the plaintiff, and that the publication caused actual harm to their reputation, business revenue, or mental health.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The primary goal of a civil suit is to obtain an injunction. An injunction is a court order directing the defendant to remove the defamatory content and stop posting further false statements. Courts can grant temporary or ad-interim injunctions during the early stages of a case to prevent ongoing harm while the trial is decided, protecting the victim's business and personal life.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Obtaining John Doe Orders against Anonymous Scammers
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A major issue in digital disputes is when defamatory content is spread across many websites or shared by unknown accounts. In such cases, plaintiffs can apply for John Doe orders (known in India as Ashok Kumar orders). A John Doe order is an ex-parte injunction issued against unknown defendants who are infringing on a person's rights.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Once a John Doe order is granted, the plaintiff can serve it to internet service providers, search engines, and social media platforms, directing them to block the defamatory links and search terms immediately, even if the real creators remain unidentified. This protection prevents the viral spread of malicious content and helps victims secure their digital footprint quickly.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Civil Litigation Remedies</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Temporary Injunctions</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Urgent court orders directing the immediate removal of defamatory posts. Prevents ongoing damage to reputation while the lawsuit is pending.
                </p>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Ashok Kumar (John Doe) Orders</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Ex-parte injunctions issued against unidentified internet users. Compels internet service providers to block URLs and search queries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
