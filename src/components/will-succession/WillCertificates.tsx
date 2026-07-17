import React from "react";

export default function WillCertificates({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Succession Certificates and Letter of Administration
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When a person dies without leaving behind a valid Will, or when a Will does not name an executor, the family must apply for alternative court certificates. These documents give the family the legal authority to claim and manage the deceased's assets, ensuring third parties like banks and corporate registrars can transfer titles safely.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Claiming Movable Assets via Succession Certificate
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A Succession Certificate is a court document issued under part ten of the Indian Succession Act, 1925. It is specifically used to claim and transfer movable assets, such as bank deposits, fixed deposits, government securities, shares, and insurance payouts belonging to a person who died intestate. It does not transfer ownership of immovable properties like land or buildings.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To obtain a succession certificate, the heirs must file a petition in the District Court where the deceased resided. The petition must list the exact details of the debts and securities they wish to claim. After publishing a public notice in local newspapers to check for objections, the court holds a hearing to identify the rightful heirs. The court then issues the certificate, which protects banks and financial companies from liability when they release the funds to the heirs named in the document.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Administering Estates Without a Will
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the deceased left behind immovable properties but did not make a Will, the family cannot use a succession certificate. Instead, they must apply to the court for a Letter of Administration. A Letter of Administration gives the administrator the legal authority to manage and distribute both the movable and immovable properties of the deceased.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The process for securing a Letter of Administration is similar to the probate process. Heirs file a petition listing all assets and heirs, and the court issues public notices. The court usually grants the letter to the spouse or the closest legal heir of the deceased. The administrator is often required to execute an administration bond with sureties, promising to manage the estate honestly and distribute the assets according to the applicable personal laws of intestate succession.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Comparing Court Succession Documents</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-gray-600">
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block">Probate</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Issued only when there is a valid Will naming an executor. Certifies the Will's validity and gives the executor authority over all assets.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block">Succession Certificate</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Issued when a person dies intestate. Used exclusively to claim and transfer movable assets like bank accounts and shares.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block">Letter of Administration</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Issued when there is no Will or no executor is named. Gives the administrator authority over both movable and immovable properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
