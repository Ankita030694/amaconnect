import React from "react";

export default function FilingComplaint({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing a Complaint with Cyber Cell
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When immediate preventative measures like dialing the national helpline or contacting your bank fail to recover the entire stolen sum, filing a formal complaint with the Cyber Cell becomes the key legal avenue for investigation and prosecution. The Cyber Cell is a specialized wing of the Indian police force specifically trained to investigate technology-facilitated crimes, trace IP addresses, examine digital footprints, and compile charge sheets against perpetrators. Under Section 154 of the Code of Criminal Procedure, or the corresponding provisions under the new Bharatiya Nagarik Suraksha Sanhita, the police are duty-bound to register a First Information Report for cognizable offenses, which includes major online financial frauds. Having a registered FIR provides victims with the necessary legal standing to petition courts, request detailed investigation updates, and seek orders to release frozen funds from bank accounts. The formal complaint process can be initiated through two parallel channels, the unified online portal or a physical visit to your local police station, and utilizing both correctly is crucial to ensuring your case receives the urgent attention it deserves from cyber investigators. Furthermore, a properly registered complaint acts as an essential pre-requisite for initiating civil compensation claims, as it establishes the official occurrence of the crime and demonstrates that the victim has sought formal police intervention. Without this, financial regulators and adjudicators may view the claim with skepticism, highlighting why registering an official complaint is a pivotal step in the legal recovery process.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Step-by-Step Online Portal Registration */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Step-by-Step Online Portal Registration
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The National Cyber Crime Reporting Portal, located at cybercrime.gov.in, is a centralized initiative by the Ministry of Home Affairs that allows citizens to report cyber crimes online from the comfort of their homes. The registration process begins by navigating to the portal and clicking on the Report Other Cyber Crime button. First-time users must register their profile by selecting their state, entering their mobile number, and validating it using a One Time Password. Once logged in, the complainant is presented with a structured form divided into multiple detailed tabs. The first tab requires inputting the incident details, including the category of crime, sub-category, date and time of the incident, and the specific platform where the fraud occurred. The second tab focuses on the suspect details, where you can enter any known information, phone numbers, or email addresses. The third tab is the most critical, requiring the upload of corroborative electronic evidence, such as bank statements highlighting the unauthorized transaction, screenshots of WhatsApp chats, screenshots of spoofed website URLs, and the transaction receipt. Finally, after reviewing the draft, the user submits the complaint, generating a unique acknowledgment number that can be used to track the progress of the investigation online. This system automates the routing of complaints to the relevant state cyber cells, ensuring that the jurisdictional transition is handled seamlessly without requiring the victim to travel across borders or engage in complex local police communications.
            </p>
          </div>

          {/* H3: Filing a Complaint at Local Police Station */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Filing a Complaint at Local Police Station
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              While the online portal offers exceptional convenience, filing a physical complaint at your local police station or a dedicated Cyber Police Station is often necessary to secure a formal FIR. Cyber cells have jurisdictional authority over specific geographic regions, and many metropolitan areas now host specialized cyber stations that deal exclusively with Information Technology Act offenses. When visiting the station, you must carry a written complaint addressed to the station house officer, detailing the chronology of events in clear chronological order. Along with this letter, you must provide physical printouts of all digital evidence, including bank transaction logs, phone call records, and identity documents. If the local police station does not have a dedicated cyber unit, they are still legally obligated to register your complaint as a Zero FIR and transfer the case to the appropriate cyber division. It is essential to obtain a signed and stamped copy of the complaint acknowledgment or the FIR, which is free of charge under Indian law. This physical document serves as your definitive legal record, proving to banking institutions and courts that you have initiated formal criminal proceedings against the perpetrators of the fraud. This step is critical because many banks require a physical stamped copy of the police complaint or FIR within a specific timeframe to process insurance claims and finalize the refund of the disputed amount, protecting you from prolonged financial loss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
