import React from "react";

export default function HostileWitnesses({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Handling Hostile Witnesses &amp; Skeptical Benches
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Trials are unpredictable. Even with extensive preparation, witnesses can turn hostile and judges can show skepticism. Knowing how to pivot in real-time is what separates the novices from the veterans.
          </p>
        </div>

        {/* Quote Block */}
        <div className="border-l-4 border-[#D4AF37] bg-[#FDFBF7] p-5 rounded-r-2xl italic text-gray-700 text-sm leading-relaxed my-2">
          "When a witness turns hostile in the witness box, do not panic or show anger. Request the court to declare them hostile under Section 154 of the Evidence Act. Calmly put their previous statements to them and block every escape route."
          <span className="block text-xs font-bold text-gray-900 mt-2 not-italic">— Senior Advocate Kapil Sibal, Trial Advocacy Logs</span>
        </div>

        {/* Strategic Points */}
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0 mt-0.5 font-bold text-xs">
              01
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Section 154: Declaring a Witness Hostile</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                If your own witness departs from their signed statement (e.g. under Section 161 or 164 of CrPC), immediately tell the judge: "My Lord, the witness is resiling from their previous statement. I request permission to put leading questions to this witness under Section 154 of the Evidence Act." Once permitted, you can cross-examine your own witness to demonstrate their contradiction.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0 mt-0.5 font-bold text-xs">
              02
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Dealing with Judicial Skepticism</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                If a judge appears skeptical or states that your argument is not sustainable, do not show frustration. Stay extremely polite and redirect their attention: "I appreciate Your Lordship's concern, and I will address it immediately. Please refer to paragraph 5 of the Supreme Court's ruling in *State v. X* (page 12 of my citation bundle) which specifically addresses this point."
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0 mt-0.5 font-bold text-xs">
              03
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Pivot to Documentary Evidence</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                If oral testimonies fall flat, rely heavily on documentary evidence. In Indian courts, documentary evidence holds higher weight than oral testimonies. Highlight contemporaneous emails, bank records, and registered agreements to support your case.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
