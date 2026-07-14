import React from "react";

export default function OpeningArguments({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Opening Statements &amp; Argument Flow
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            First impressions are vital in litigation. An opening argument is not merely a summary of pleadings; it is where you establish your case's central theme and frame the legal issues that the judge must resolve.
          </p>
        </div>

        {/* Quote Block */}
        <div className="border-l-4 border-[#D4AF37] bg-[#FDFBF7] p-5 rounded-r-2xl italic text-gray-700 text-sm leading-relaxed my-2">
          "The first 90 seconds of your oral arguments are the most critical. Do not start with dates and descriptions. Start with the core injustice or the central legal conflict. Give the judge a reason to look at your files."
          <span className="block text-xs font-bold text-gray-900 mt-2 not-italic">— Senior Advocate Fali S. Nariman, Selected Writings &amp; Speeches</span>
        </div>

        {/* Argument flow grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-100 rounded-3xl p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
            <h3 className="text-xs font-bold text-gray-900 mb-2">1. Frame the Core Issue Immediately</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed text-justify">
              Lead with a single, compelling question. For example: "My Lord, the central issue in this case is whether a public utility supplier can disconnect electricity without providing a statutory 15-day notice under Section 56."
            </p>
          </div>

          <div className="border border-gray-100 rounded-3xl p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
            <h3 className="text-xs font-bold text-gray-900 mb-2">2. Map Your Evidence</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed text-justify">
              Briefly outline the witnesses you will call and the key documents they will prove. This gives the judge a clear roadmap of what to expect and why each witness's presence is essential.
            </p>
          </div>

          <div className="border border-gray-100 rounded-3xl p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
            <h3 className="text-xs font-bold text-gray-900 mb-2">3. Structure the Legal Chronology</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed text-justify">
              Avoid jumpy fact summaries. Guide the court chronologically through the facts that establish the cause of action. Have page numbers and paragraph marks memorized so you can guide the judge's eyes instantly.
            </p>
          </div>

          <div className="border border-gray-100 rounded-3xl p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
            <h3 className="text-xs font-bold text-gray-900 mb-2">4. State the Specific Relief</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed text-justify">
              Conclude your opening statement by stating clearly what exact relief you are seeking at this stage (e.g. interim injunction, framing of issues, or summons to a witness).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
