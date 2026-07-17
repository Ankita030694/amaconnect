import React from "react";
import Link from "next/link";

export default function MNDOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Understanding Municipal Demolition Notices
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Municipal corporations and local urban development bodies in India hold significant statutory powers to regulate building construction and town planning. When construction deviates from sanctioned layout plans or occurs without proper permits, municipal authorities can issue show cause or demolition notices. Understanding these notices is the first line of defense for property owners.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Statutory Powers of Local Bodies to Issue Notices
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Local bodies, such as the Municipal Corporation of Delhi (MCD), Brihanmumbai Municipal Corporation (BMC), or local municipal councils, operate under state specific municipal acts. Under statutory provisions like Section 343 of the DMC Act or Section 351 of the MMC Act, commissioners hold the power to order the stoppage and demolition of unauthorized construction. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            These statutory powers are meant to prevent chaotic, unsafe urban growth, and ensure structural stability. However, municipal officers must exercise these powers within the boundaries of the law and cannot order demolitions arbitrarily without giving property owners a fair opportunity to explain their side.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If you are currently facing a demolition notice or want to challenge an illegal construction next to your property, you can seek advice through the 
            {" "}<Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">AMAConnect Ask Me Anything</Link>{" "} 
            portal, or find free legal assistance on our 
            {" "}<Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "} 
            page. You can also join community discussions on local town planning rules, stay order formats, and builder deviations in our active 
            {" "}<Link href="/communities" className="text-[#D4AF37] hover:underline font-semibold">Legal Communities</Link>{" "} 
            forum.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Required Contents and Notice Windows
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To be legally valid, a demolition notice must meet specific requirements. It must clearly state the exact location of the property, details of the unauthorized deviations, and the specific section of the municipal act that has been violated. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Importantly, the notice must specify a reasonable time window for the owner to reply or regularize the deviations. The statutory notice window varies by state, but is typically between seven to fifteen days. A notice that demands immediate demolition within twenty-four hours without a prior show-cause hearing violates the principles of natural justice and can be challenged in court as illegal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">🏢</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Statutory Authority</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Municipal acts give local commissioners the power to inspect properties, stop illegal work, and issue show-cause notices for construction deviations.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">📄</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Notice Requirements</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Must detail the exact deviations, cite applicable municipal sections, and offer a statutory show-cause window (typically seven to fifteen days) for a reply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
