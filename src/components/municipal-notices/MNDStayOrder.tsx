import React from "react";

export default function MNDStayOrder({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Securing a Stay Order from Civil Court
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            If local authorities reject your reply and issue a final demolition order, property owners must act quickly. To prevent physical demolition, the owner can approach the local civil court or municipal court to secure a temporary injunction or stay order.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing a Suit for Permanent Injunction against Municipalities
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The owner must file a civil suit for declaration and permanent injunction under Section 38 of the Specific Relief Act, 1963. In the suit, the owner requests the court to declare the demolition notice illegal and restrain the municipality from demolishing the property. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Before filing, the owner must serve a statutory notice (such as under Section 80 of the CPC or corresponding municipal sections) to the local body, giving them sixty days' notice. However, if there is an urgent threat of demolition, the owner can file an application to waive this notice period, allowing the court to hear the case immediately and protect the structure.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Concept of Ad-Interim Stay Orders
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Because a standard civil suit can take months or years to resolve, the owner must apply for an urgent temporary injunction under Order 39, Rules 1 and 2 of the Code of Civil Procedure (CPC). This application requests an immediate, ad-interim stay order to stop demolition while the main lawsuit is decided.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To secure this stay order, the owner must prove three legal principles: first, a prima facie case (the notice seems illegal on its face); second, balance of convenience (demolishing the property causes more harm than letting it stand during the trial); and third, irreparable injury (once demolished, the building cannot be restored, whereas the municipality suffers no harm from a temporary delay). If these conditions are met, the judge will issue a stay order, protecting the property.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Permanent Injunction Suit</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Filed under Section 38 of the Specific Relief Act. Asks the court to declare the municipal demolition order illegal and issue a permanent stop order.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Temporary Stay (Order 39)</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Urgent relief to prevent physical demolition during trial. Requires proof of a prima facie case, balance of convenience, and irreparable injury.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
