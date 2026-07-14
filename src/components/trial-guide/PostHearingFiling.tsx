import React from "react";

export default function PostHearingFiling({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 9
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Post-Hearing Actions &amp; Submission Filing
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            A successful trial advocate's job does not end when they step out of the courtroom. The hours immediately following a trial session are critical for logging the deposition correctly, tracking the court's daily order, and filing subsequent notes.
          </p>
        </div>

        {/* Quote Block */}
        <div className="border-l-4 border-[#D4AF37] bg-[#FDFBF7] p-5 rounded-r-2xl italic text-gray-700 text-sm leading-relaxed my-2">
          "The deposition must be checked line-by-line before the stenographer prints it. Once a witness signs it, corrections are incredibly difficult to make. Always request a draft printout to verify spelling of names, numbers, and key statements."
          <span className="block text-xs font-bold text-gray-900 mt-2 not-italic">— Senior Advocate Mukul Rohatgi, Curated Litigator Guides</span>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xs font-bold text-gray-900 mb-2">1. Deposition Verification</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed text-justify">
              Observe the court typist during the recording of evidence. If the witness's statement is recorded incorrectly, object immediately. Ask for a copy of the recorded statement at the end of the day to file in your records.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xs font-bold text-gray-900 mb-2">2. Apply for Certified Copies</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed text-justify">
              Apply for certified copies of the daily order, deposition logs, and any interim applications resolved. This ensures you have officially signed copies ready for appeal or subsequent arguments.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xs font-bold text-gray-900 mb-2">3. File Written Submissions</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed text-justify">
              Draft a short 3-page "Written Note of Arguments" summarizing your oral submissions, referencing the page numbers of the deposition. File it in the court registry so it forms part of the permanent record.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
