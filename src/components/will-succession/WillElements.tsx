import React from "react";

export default function WillElements({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Essential Elements of a Valid Will
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Under Indian law, a Will does not require a specific format, stamp paper, or complex legal terms to be valid. It can be written on plain paper, in any language, and even in handwriting. However, a Will must contain certain essential clauses and clear language to ensure it is legally binding and can withstand challenges in probate courts.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Declaration of Sound Mind and Free Will
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A valid Will must begin with an explicit introductory declaration by the testator. This declaration must state the testator's full name, age, address, and confirm that they are of sound mental health and are executing the Will of their own free choice, without any force, coercion, or influence from others.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To prevent future challenges claiming the testator lacked mental capacity, it is a recommended practice to attach a medical fitness certificate from a registered practitioner to the Will, especially if the testator is elderly or ill. The certificate must confirm that the testator is mentally fit to understand the consequences of making a Will on the date of execution.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Details of Assets, Beneficiaries, and Executors
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The body of the Will must contain an accurate, detailed list of the testator's assets. This list must specify all movable assets, such as bank accounts, mutual funds, insurance policies, shares, and jewelry, as well as immovable properties, including land, apartments, and commercial buildings. The testator must also provide the full names and details of the beneficiaries who will receive these assets.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, the testator must appoint a trusted executor. The executor is the person responsible for managing the estate, filing for court probate, paying outstanding debts, and distributing the assets according to the terms of the Will. The testator should also include a residual clause to specify how any assets not mentioned in the Will or acquired after its writing should be distributed.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Key Clauses in a Legal Will</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">1. Declaration Clause:</span> Confirms the testator's identity, age, and sound mental capacity, and revokes all previous wills.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">2. Schedule of Properties:</span> Lists all bank accounts, investments, and physical properties with exact identification details.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">3. Appointment of Executor:</span> Designates a trusted person to carry out the instructions, along with an alternate executor.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">4. Residual Clause:</span> Directs the distribution of any remaining or future assets not explicitly mentioned elsewhere.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
