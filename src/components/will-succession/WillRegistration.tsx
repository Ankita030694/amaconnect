import React from "react";

export default function WillRegistration({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Registration of a Will: Process and Benefits
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Under Section 18 of the Registration Act, 1908, registering a Will in India is completely optional. An unregistered Will is just as legally valid as a registered one, provided it is signed and attested correctly. However, registering a Will is a highly recommended safety measure because it creates an official, permanent government record of the document.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing before the Sub-Registrar Office
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To register a Will, the testator and the two attesting witnesses must personally visit the office of the Sub-Registrar having jurisdiction over the area. The registration can occur at any time, even years after the Will was first signed. The applicant must submit the original Will, identity proofs of the testator and witnesses, and passport photographs.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            During the appointment, the Sub-Registrar verifies the identities of the parties, confirms that the testator is acting of their own free will, and records their biometric thumbprints and photographs. The original Will is then scanned into the official government registry, and a unique registration number is issued. The original document is returned to the testator, while a copy is preserved in the government database, protecting it from loss, theft, or fire.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Evidentiary Value of a Registered Will
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A registered Will carries much higher evidentiary weight in civil courts. Because the Sub-Registrar has personally verified the identity and sound mind of the testator during registration, it is extremely difficult for disgruntled relatives to challenge the Will later by claiming it is a forgery or was executed under force.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Furthermore, registration protects the document from being lost or destroyed. If the original Will is misplaced after the testator's death, the executor can easily obtain an official certified copy from the Sub-Registrar office. This certified copy is accepted by courts for probate proceedings and by municipal authorities for transferring property titles, ensuring a smooth transition of assets to the family.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Comparison: Unregistered vs Registered Will</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Unregistered Will</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Valid if signed and witnessed.</li>
                  <li>Higher risk of forgery claims.</li>
                  <li>If lost, proving terms is difficult.</li>
                  <li>No registration fees or office visits.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Registered Will</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Officially verified by Sub-Registrar.</li>
                  <li>Strong protection against court disputes.</li>
                  <li>Certified copy available if lost.</li>
                  <li>Biometric recording of testator and witnesses.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
