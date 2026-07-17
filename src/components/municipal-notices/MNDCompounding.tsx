import React from "react";

export default function MNDCompounding({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Compounding of Deviations and Regularization
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Town planning laws in India distinguish between minor construction deviations, which can be regularized, and major structural violations, which must be demolished. Property owners must understand these boundaries to verify if their structure can be saved through regularization.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Understand Permissible Compounding Limits under Town Planning
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Compounding is permitted only for deviations that do not violate public safety, fire safety codes, or major zoning regulations. Permissible compounding limits are specified in local town planning bylaws, typically allowing deviations of five to ten percent in areas like setbacks, height, or floor area ratio (FAR). 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Major violations, such as building on public roads, occupying green belts, constructing extra floors without structural approvals, or violating structural safety standards, are considered non-compoundable. In such cases, the municipality has a statutory duty to order demolition, and courts will generally refuse to issue stay orders, protecting public interests.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Regularization Applications and Paying Penalties
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To regularize permissible deviations, the owner must file an application for regularization before the local municipal corporation. The application must be submitted through a registered architect or engineer. It must contain the detailed building plans, showing both the sanctioned layout and the actual constructed layout, highlighting the deviations.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The municipal engineering department reviews the plans, verifies the structural safety, and calculates the applicable regularization fees or compounding penalties. Once the owner deposits these fees, the municipality issues an official regularization certificate, modifying the sanctioned plans to match the existing structure, saving it from demolition.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Compounding vs Non-Compoundable Violations</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Compoundable (Can be Saved)</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Minor setbacks deviations (under ten percent).</li>
                  <li>Slight height increases within zoning bylaws.</li>
                  <li>Small balcony projection extensions.</li>
                  <li>Requires paying penalty and securing certificate.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Non-Compoundable (Demolition Risk)</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Encroachments on public land or roads.</li>
                  <li>Violations of fire safety and safety codes.</li>
                  <li>Adding extra floors without sanctioned approval.</li>
                  <li>Building on protected green belts or wetlands.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
