import React from "react";

export default function TrialDayChecklist({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Trial Day: The Ultimate Checklist
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Trial day is intense and fast-paced. A minor procedural oversight can delay hearings or damage your case. Use this checklist compiled by senior trial advocates to stay organized.
          </p>
        </div>

        {/* Quote Block 4 */}
        <div className="border-l-4 border-[#D4AF37] bg-[#FDFBF7] p-5 rounded-r-2xl italic text-gray-700 text-sm leading-relaxed my-2">
          "On the day of the trial, arrive at least 45 minutes before the court board starts. Go to the courtroom, locate the court clerk, check the serial number of your case on the board, and verify if the files are placed in order. Local administration matters."
          <span className="block text-xs font-bold text-gray-900 mt-2 not-italic">— Senior Advocate Abhishek Manu Singhvi, Court Prep Logbooks</span>
        </div>

        {/* Checklist */}
        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-sm font-bold text-[#2D2219] mb-4">Advocate Trial Day Actions</h3>
          <ul className="space-y-4">
            {[
              {
                title: "File Verification",
                desc: "Check that you have the original case file, duplicate files, court copy sets, and all relevant exhibit logs ready. Carry blank sheets and stationery for quick notes during arguments."
              },
              {
                title: "Client & Witness Briefing",
                desc: "Meet your client and witnesses outside the courtroom. Calm their nerves, briefly run through their statements, and remind them to answer honestly and look at the judge while testifying."
              },
              {
                title: "Board Tracking",
                desc: "Double check the court's cause list (serial number) and keep track of running matters. Be ready to ask the court master or clerk for an adjustment if there is a clash of courts."
              },
              {
                title: "Citation Binder Ready",
                desc: "Organize your citations chronologically with sticky notes identifying key paragraphs. Ensure you have the exact citations that support your core legal issues."
              }
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs text-[#D4AF37] font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-0.5">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
