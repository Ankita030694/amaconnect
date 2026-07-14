import React from "react";

export default function RegularDefaultBail({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing Regular and Default Bail Applications
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Securing freedom during an ongoing investigation or trial involves filing either a regular bail application or a default bail application. While regular bail is subject to judicial discretion based on the merits of the case, default bail is an absolute statutory right that arises due to procedural delay on the part of the prosecution.
          </p>
        </div>

        <div className="bg-[#FAF9F5] border border-[#D4AF37]/20 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Procedures for Regular and Default Bail
          </h3>
          <div className="space-y-6">
            <div className="border border-gray-100 rounded-2xl p-4 bg-white shadow-sm flex flex-col gap-2">
              <span className="text-xs font-bold text-[#2D2219] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                Regular Bail Filing (Section 437 & 439 CrPC / Section 480 & 482 BNSS)
              </span>
              <p className="text-xs text-gray-500 leading-relaxed">
                Applied for when the accused is in custody. The application can be submitted to the trial court, the Court of Session, or the High Court:
              </p>
              <ul className="text-xs text-gray-500 list-disc pl-5 space-y-1">
                <li><strong>Trial Court (Magistrate):</strong> Initial application under Section 437 CrPC. Magistrates have limited powers and rarely grant bail in serious offenses carrying life terms or death sentences.</li>
                <li><strong>Sessions Court and High Court:</strong> Broad discretionary powers under Section 439 CrPC to grant bail, set conditions, or modify existing bail orders.</li>
                <li><strong>Key Considerations:</strong> The court evaluates the gravity of the crime, the criminal history of the accused, the risk of absconding, and the potential for tampering with state evidence.</li>
              </ul>
            </div>

            <div className="border border-gray-100 rounded-2xl p-4 bg-white shadow-sm flex flex-col gap-2">
              <span className="text-xs font-bold text-[#2D2219] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                Default Bail Filing (Section 167(2) CrPC / Section 187(2) BNSS)
              </span>
              <p className="text-xs text-gray-500 leading-relaxed">
                Also known as statutory bail, this is an absolute, indefeasible right. It is triggered automatically if the police fail to file the investigation charge sheet within the prescribed 60 or 90 day window:
              </p>
              <ul className="text-xs text-gray-500 list-disc pl-5 space-y-1">
                <li><strong>Indefeasible Right:</strong> Once the 60 or 90 day limit expires, the right to default bail accrues to the accused. The court must grant bail if an application is filed before the charge sheet is submitted.</li>
                <li><strong>Procedural Requirement:</strong> The accused must file a formal application under Section 167(2) CrPC and show readiness to furnish bail bonds and sureties as determined by the court.</li>
                <li><strong>Subsequent Charge Sheet:</strong> If the police file the charge sheet after the 60 or 90 day window but before the accused files their default bail application, the right to default bail is lost. Filing speed is critical.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Once bail is granted, the accused must fulfill the conditions set by the court, which usually include executing a personal bond and providing solvent sureties. Sureties are individuals who guarantee that the accused will attend court hearings, and they are held financially liable if the accused absconds. If the accused violates any condition, such as traveling abroad without permission or contacting prosecution witnesses, the court has the power to cancel the bail and order immediate re-arrest.
          </p>
        </div>
      </div>
    </section>
  );
}
