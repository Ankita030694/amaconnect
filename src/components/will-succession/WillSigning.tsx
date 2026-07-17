import React from "react";

export default function WillSigning({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Signing and Attestation Process
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The execution and signing of a Will are regulated by Section 63 of the Indian Succession Act, 1925. Even if a Will is drafted by top legal professionals, failing to follow the correct signing and witness attestation rules makes the entire document legally invalid. Strict compliance with these steps is required to ensure the Will is recognized by courts.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Signatures of the Testator and Placement
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The testator must sign the Will or place their thumb mark on the document. The signature or mark must be placed in a way that clearly shows it was intended to execute and validate the Will. It is a standard practice for the testator to sign at the bottom of every single page of the document, and place their full signature at the end of the final page, right after the text.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            This page by page signing prevents anyone from inserting unauthorized pages into the document after it has been executed. If the testator is physically unable to sign due to illness or weakness, they can direct another person to sign on their behalf, but this signing must occur in the testator's presence and under their direct instructions.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Role and Qualifications of Two Independent Witnesses
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            For a Will to be valid under Section 63, it must be attested by at least two independent witnesses. Both witnesses must see the testator sign the Will, or receive a personal acknowledgment from the testator confirming that the signature is theirs. The witnesses must then sign the Will in the presence of the testator, though they do not need to sign in each other's presence.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The witnesses must be competent adults of sound mind. Crucially, they should be independent, meaning they must not be beneficiaries under the Will, nor should they be close relatives of a beneficiary. Under Section 67 of the Indian Succession Act, if a witness is named as a beneficiary, their signature remains valid for executing the Will, but the gift or bequest made to them becomes legally void. This rule prevents conflict of interest and protects the Will from claims of undue influence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Testator Signing</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Requires a signature or thumb mark. Signing every page is recommended to prevent page replacement. Can be done by a proxy in the testator's presence if they are physically disabled.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Witness Attestation</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Requires at least two independent witnesses. Witnesses must see the testator sign. Witnesses must not be beneficiaries or close relatives of beneficiaries to prevent voiding gifts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
