import React from "react";

export default function InfringementOnline({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Handling IP Infringement Online
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            With the rise of e-commerce, digital content platforms, and social media networks, intellectual property infringement has largely shifted online. Competitors frequently copy logos, duplicate product images, upload pirated videos, or sell counterfeit goods on online marketplaces. Protecting your intellectual property online requires quick, structured action combining legal notices with digital platform rules.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Drafting and Serving a Cease and Desist Notice
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A Cease and Desist notice is a formal legal letter sent to an individual or business demanding they immediately stop infringing on your intellectual property. While not a court order, this notice serves as a warning and establishes a paper trail showing the infringer was informed of their violation. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A professional Cease and Desist notice must include: your details and proof of intellectual property ownership, the specific trademark registration or copyright details, clear evidence of the infringement (such as links or screenshots), and a list of demands. These demands include removing the infringing content, deleting social media profiles using the mark, destroying counterfeit inventory, and providing a written commitment to stop further violations. If the infringer ignores the notice, it can be used in court to prove they acted knowingly and in bad faith, which can lead to higher damages.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing DMCA and Digital Takedown Requests
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When infringing content appears on global web services like Google, YouTube, Amazon, or social media sites, filing a digital takedown request is often the fastest remedy. United States platforms follow the Digital Millennium Copyright Act (DMCA) system, which protects intermediaries if they act quickly to remove content once notified of an infringement.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In India, online platforms are regulated by the Information Technology Act, 2000, and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021. Under these rules, platforms must appoint a grievance officer and establish a process for reporting intellectual property violations. Once a valid copyright or trademark takedown notice is submitted, the platform must remove the infringing material within thirty-six hours to maintain its intermediary liability protection. This fast process helps creators protect their work online without needing immediate, expensive litigation.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Online Takedown Checklist</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">1. Document the Infringement:</span> Save active links, take high-resolution screenshots, and record the date of discovery.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">2. Identify the Platform:</span> Check the website host, domain registrar, or e-commerce intermediary hosting the content.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">3. Submit Official Takedown:</span> Use the platform IP portal or email their designated Grievance Officer with registration certificates.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">4. Monitor Compliance:</span> Confirm the removal of the content and track counter-notifications from the infringer.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
