import React from "react";

export default function CopyrightProtection({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Copyright Protection for Creators
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Copyright law in India protects the creative expressions of writers, artists, musicians, filmmakers, and digital creators. The Copyright Act, 1957, ensures that creators have control over how their original works are copied, distributed, performed, or adapted. In the digital age, where content can be copied and shared instantly, copyright registration acts as a shield, helping creators defend their assets and license them for commercial use.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing for Literary, Artistic, and Digital Works
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The registration process begins on the official e-filing portal of the Copyright Office of India. Creators file Form XIV, along with the prescribed fees and copies of the work. The application categorizes works into literary (such as books, articles, and computer software), artistic (such as drawings, paintings, and architectural plans), dramatic, musical, cinematograph films, or sound recordings.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Software source code and applications are registered as literary works, requiring the submission of the first and last few pages of the code. Once the application is submitted, a mandatory thirty-day waiting period is enforced. This delay allows the public to raise objections if they claim the work is not original or violates another copyright. If no objections are received, an examiner reviews the work for originality and technical requirements. If the examiner finds the work compliant, they register it and issue a Diary Number followed by a Registration Certificate.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Concept of Automatic Protection vs Registration
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under international treaties such as the Berne Convention, to which India is a signatory, copyright protection is automatic. The moment an original work is written down, typed, drawn, or recorded in a fixed medium, copyright protection begins immediately. The creator does not need to complete a formal government registration to own the copyright.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            However, relying solely on automatic protection is risky in commercial disputes. In a court of law, a registration certificate from the Copyright Office serves as prima facie evidence of ownership and the validity of the copyright. Without a registration certificate, proving the exact date of creation and ownership in an infringement case requires extensive documentation, witness statements, and technical analysis, which can delay justice and increase legal costs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Automatic Protection</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Applies the instant a work is created and saved in a physical or digital format. No government filing fees are required, and it applies in over 170 countries under the Berne Convention.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Official Registration</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Provides a public record of ownership and serves as prime evidence in courts. It simplifies commercial licensing, assignment agreements, and the process of sending digital takedown notices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
