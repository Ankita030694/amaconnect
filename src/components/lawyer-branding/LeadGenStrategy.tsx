import React from "react";

export default function LeadGenStrategy({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Lead Generation Strategy for Modern Advocates
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6 text-justify">
            Securing high-quality legal leads requires moving beyond passive listings. Modern advocates must build structured pathways to educate prospective clients, establish trust, and simplify the initial inquiry process. By implementing a proactive strategy, you can turn casual visitors into active clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#2D2219] mb-3">
              1. Educational Content Marketing
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Publishing detailed articles on common legal problems (such as family law checklists or property verification steps) establishes your authority. Clients prefer hiring advocates who have already demonstrated a clear understanding of their issues.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#2D2219] mb-3">
              2. Pre-Qualifying Consultations
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Use structured forms to collect preliminary details about a case before you speak to the client. This filters out irrelevant queries and ensures that your initial consultation is productive and focused.
            </p>
          </div>
        </div>

        <div className="bg-[#FAF9F5] border border-gray-150 rounded-3xl p-6 sm:p-8 mt-4">
          <h3 className="text-lg font-bold text-[#2D2219] mb-4">
            Legal Client Acquisition Funnel
          </h3>
          <div className="space-y-4">
            {[
              {
                step: "Phase 1: Digital Discovery",
                desc: "Prospect searches for a legal query online and finds your detailed article or profile index page."
              },
              {
                step: "Phase 2: Intent Validation",
                desc: "Prospect submits a structured inquiry form detailing their case history and specific legal relief sought."
              },
              {
                step: "Phase 3: Contextual Response",
                desc: "You review the pre-qualified details and schedule a brief focused call to discuss strategy and terms."
              }
            ].map((phase, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-bold text-white">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#2D2219] mb-1">{phase.step}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
