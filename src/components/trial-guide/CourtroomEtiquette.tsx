import React from "react";

export default function CourtroomEtiquette({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Courtroom Etiquette &amp; Conduct
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            How you present yourself inside the courtroom is as important as the substance of your arguments. Respect for the bench, professional decorum, and compliance with the Bar Council rules form the foundation of professional credibility. Judges observe young lawyers closely, and your reputation is forged not just by your victories, but by your grace in the face of courtroom pressure.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Etiquette extends beyond simply addressing the judge correctly. It includes how you treat court staff, how you interact with opposing counsel, and how you behave when you are seated and waiting for your matter to be called.
          </p>
        </div>

        {/* Quote Block 2 */}
        <div className="border-l-4 border-[#D4AF37] bg-[#FDFBF7] p-6 rounded-r-2xl italic text-gray-700 text-sm leading-relaxed my-2">
          "The court is not a theater of noise. It is an arena of reason. Address the judge with extreme humility but stand firm on your facts. Never raise your voice; raise the quality of your argument. When the judge speaks, your pen drops and your eyes listen."
          <span className="block text-xs font-bold text-gray-900 mt-3 not-italic">— Senior Advocate Menaka Guruswamy, Advocate Mentorship Logs</span>
        </div>

        {/* Etiquette Rules List */}
        <div className="space-y-6 mt-2">
          <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0 mt-0.5 font-bold text-sm border border-amber-200">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Dress Code & Physical Demeanor</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Always ensure your neckband is clean, crisp, and neatly tied. For male advocates, a black coat and trousers are mandatory, without flashy accessories. For female advocates, sober clothing (like sarees, salwar kameez, or trousers) matching Bar Council guidelines is essential. Robes or gowns must be worn in the High Courts and Supreme Court. Stand tall, keep your hands out of your pockets, and avoid leaning heavily on the podium.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0 mt-0.5 font-bold text-sm border border-amber-200">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Addressing the Bench and the Bar</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Address the judge as "My Lord" or "Your Lordship" in the Higher Judiciary, and "Your Honor" or "Sir/Madam" in the Subordinate Judiciary. Refer to your opponent as "My Learned Friend" or "the Learned Counsel for the petitioner". Never refer to opposing counsel by their name, and never direct your arguments at them. All statements must be directed to the judge.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0 mt-0.5 font-bold text-sm border border-amber-200">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">The Unwritten Rule of Interruption</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Never, under any circumstances, interrupt the judge when they are speaking. If a judge expresses disagreement, acknowledge it respectfully ("I am obliged for Your Lordship's observation, however...") rather than showing frustration. If opposing counsel interrupts you, do not engage in a shouting match. Simply stop, wait for them to finish, and say, "If my learned friend is done, may I proceed?" This contrasts their aggression with your composure.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0 mt-0.5 font-bold text-sm border border-amber-200">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Handling the Court Master and Staff</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                The Court Master, Readers, and Ahlmads run the administrative engine of the court. Treat them with the utmost respect. Building a polite, professional relationship with the court staff ensures your files are traced quickly, your pass-overs are noted correctly, and you are informed of sudden board changes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
