import React from "react";
import Link from "next/link";

export default function PNOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Understanding Public Nuisance Laws
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            In modern society, balancing individual freedoms with collective convenience is a constant challenge. When activities by neighbors, commercial establishments, or local industries cross the boundaries of sanity, they disrupt community life. Indian law provides strong legal remedies to protect citizens from these disturbances, classifying them under the category of public nuisance.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Definition of Public Nuisance under Section 268 of IPC
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 268 of the Indian Penal Code, 1860 (now corresponding BNS sections), a public nuisance is defined as any act or illegal omission that causes common injury, danger, annoyance, or obstruction to the public or to people in general who dwell or occupy property in the vicinity. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To satisfy this definition, the offensive activity must affect the public at large or a class of people, rather than just one or two individuals. Common examples include: blasting loud music late at night, discharging toxic chemical fumes into residential air, dumping garbage on public roads, or blocking access paths. Section 268 emphasizes that a public nuisance cannot be excused on the ground that it causes some convenience or advantage to others, establishing a clear path to protect community peace.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If you need immediate assistance to stop industrial noise, illegal waste dumping, or residential loudspeaker nuisance, you can consult a qualified legal advisor on the 
            {" "}<Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">AMAConnect Ask Me Anything</Link>{" "} 
            portal, or access resources via the 
            {" "}<Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "} 
            page. You can also participate in discussions on noise monitoring devices, local municipal duties, and stay orders in our active 
            {" "}<Link href="/communities" className="text-[#D4AF37] hover:underline font-semibold">Legal Communities</Link>{" "} 
            forum.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Difference Between Public Nuisance and Private Nuisance
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Understanding the distinction between public and private nuisance is essential to select the correct legal route. A public nuisance is a criminal offense that affects a large group of people or the general public. Because it affects the community, individuals cannot file standard civil lawsuits for damages unless they can show they suffered special, direct damage beyond what the general public suffered.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In contrast, a private nuisance is a civil wrong (tort) that interferes with a specific individual's use or enjoyment of their own property. An example of private nuisance is a neighbor's tree roots cracking your house foundation, or a neighbor constantly burning garbage directly under your window. For private nuisance, the affected individual can file a civil suit for damages and injunction, whereas public nuisance complaints are routed through magistrates, police, or environmental boards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">📢</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Public Nuisance (Criminal)</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Section 268 IPC. Affects the general public or local community. Remedied by approaching SDMs, local police cells, or pollution control boards.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">🏡</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Private Nuisance (Civil Tort)</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Interferes directly with a specific owner's property enjoyment. Remedied by filing private civil lawsuits for damages and injunctions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
