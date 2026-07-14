import React from "react";

export default function PreTrialBriefing({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Pre-Trial Case Briefing &amp; Preparation
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Mastering the case file before stepping foot in the courtroom is the hallmark of a successful litigator. For a junior advocate, preparation is your single greatest equalizer against years of courtroom experience. The trial court is a fast-paced environment where judges manage dozens of matters daily. If you stumble when asked for a specific date or page number, you risk losing the judge's attention and compromising your client's case.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Comprehensive preparation involves more than just reading the brief. It requires internalizing the facts to such a degree that you can narrate the sequence of events chronologically, backward, or topically. You must intimately understand every exhibit, knowing not only what it proves, but how it was obtained, its evidentiary value under the Indian Evidence Act, and potential objections opposing counsel might raise against its admissibility.
          </p>
        </div>

        {/* Quote Block 1 */}
        <div className="border-l-4 border-[#D4AF37] bg-[#FDFBF7] p-6 rounded-r-2xl italic text-gray-700 text-sm leading-relaxed my-2">
          "The battle is won or lost in your office, long before you open your mouth in court. If you do not know the exact page number of the FIR, the medical report, or the disputed agreement, you have already lost the judge's attention. Preparation is the ultimate respect you pay to the court, your client, and the profession."
          <span className="block text-xs font-bold text-gray-900 mt-3 not-italic">— Senior Advocate Harish Salve, Curated Interview Series</span>
        </div>

        {/* Strategy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 mb-3">1. Fact-Timeline Mastery</h3>
            <p className="text-xs text-gray-500 leading-relaxed text-justify">
              Create a chronological chart listing every key event, communication, or filing date. Aligning dates with exhibit marks helps you present facts seamlessly without shuffling papers. In complex commercial disputes, a visual timeline can be handed over to the judge (with permission) to simplify the narrative.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 mb-3">2. Master the Briefing Note</h3>
            <p className="text-xs text-gray-500 leading-relaxed text-justify">
              When preparing a case for a senior advocate, compile a concise 2-page brief summarizing the facts, issues involved, key statutory provisions, and list of essential documents with exact page indexes. A senior will judge your competence based on the clarity and precision of this note.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 mb-3">3. Anticipate the Defense</h3>
            <p className="text-xs text-gray-500 leading-relaxed text-justify">
              Write down the three strongest arguments your opponent can make and prepare your counter-arguments, backed by specific statutes or binding judicial precedents. You must be your own harshest critic during preparation to avoid surprises during arguments.
            </p>
          </div>
          
          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 mb-3">4. The 4-Column Evidence Matrix</h3>
            <p className="text-xs text-gray-500 leading-relaxed text-justify">
              Create a spreadsheet with four columns: Fact to Prove, Witness to Depose, Document/Exhibit, and Potential Objection. This matrix becomes your master guide during examination-in-chief, ensuring no crucial element of the statute is left unproven.
            </p>
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-[#2D2219] mb-3">Organizing the Physical File</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Courtrooms are unforgiving to disorganized lawyers. Use distinct colored flags for different types of documents: Red for pleadings (Plaint/Written Statement), Blue for documentary exhibits (Agreements, Notices), Yellow for witness depositions, and Green for legal precedents and judgments. 
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Always carry a "Master Index" pasted on the inside cover of your file. When the judge asks, "Where is the termination clause?", you should be able to state, "Volume 2, Page 145, My Lord," within three seconds. This level of physical organization projects confidence and reliability.
          </p>
        </div>

        {/* Tip Box */}
        <div className="bg-blue-50/50 border border-blue-100 rounded-3xl p-6 flex flex-col sm:flex-row gap-5 items-start mt-2">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 22 22 22"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <div>
            <h3 className="text-base font-bold text-blue-950 mb-2">
              Advocate Tip: The Compilation Rule
            </h3>
            <p className="text-sm text-blue-900/80 leading-relaxed text-justify">
              Keep a separate binder labeled "Judgments &amp; Citations". Ensure you have three copies of every judgment you intend to rely on: one for the judge, one for opposing counsel, and one for yourself. Highlight the exact paragraphs you intend to read out. Do not dump a 100-page Supreme Court judgment on the bench without highlighting the specific ratio decidendi.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
