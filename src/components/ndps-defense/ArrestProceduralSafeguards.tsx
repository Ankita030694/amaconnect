import React from "react";

export default function ArrestProceduralSafeguards({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Procedural Safeguards during Arrest
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Law enforcement must log grounds of arrest within statutory windows and maintain the chain of custody for seized items. Pointing out procedural lapses is central to establishing doubt in trials.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Requirement to Log Grounds of Arrest within 48 Hours
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The NDPS Act contains built-in procedural safeguards designed to prevent abuse of power and ensure administrative accountability when an arrest is made. Section 57 of the Act mandates that whenever any person is arrested or any search and seizure is conducted under the Act, the officer making the arrest or seizure must submit a detailed report of all the particulars of such arrest or seizure to their immediate official superior within forty-eight hours. This requirement is a vital procedural safeguard because it forces the arresting officer to document the legal grounds, the place of arrest, the quantities seized, and the names of the witnesses immediately after the event, preventing subsequent alterations or fabrications of the story. The report must explain the reasonable grounds that led the officer to believe the suspect was guilty of the offense. While the Supreme Court has held that Section 57 is directory rather than mandatory, any unexplained delay or total failure to submit this forty-eight hour report is viewed with serious suspicion by the courts. The defense can use the absence or delay of this report to argue that the arrest was arbitrary and that the evidence was manipulated by the police. Documenting these administrative steps is crucial to demonstrate that the officers did not act out of personal malice or bypass the chains of command established by the narcotics control regulations, securing the rights of the suspect, protecting liberty.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Search of Premises and Writing Detailed Inventory Reports
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When law enforcement officers conduct a search of any building, conveyance, or enclosed place under Section 42 or Section 43 of the NDPS Act, they must follow a strict statutory procedure to ensure the integrity of the seized contraband. Under the law, the officers must perform the search in the presence of at least two independent, respectable local witnesses from the locality. The officers are required to prepare a detailed search list or Panchnama at the spot, which must contain an exact inventory of all the items seized, the precise weights of the drugs, the wrapping materials, and the identification markings placed on the samples. The Panchnama must be signed by the search officers, the independent witnesses, and the suspect, who must be provided with a copy of the document immediately. To prevent tampering, the seized drugs must be packed, sealed, and marked with a unique official seal on the spot. Under Section 52A of the Act, the seizing officer must present the seized contraband before a Judicial Magistrate as soon as possible to conduct an official inventory, take photographs of the packets, and draw representative samples under the supervision of the magistrate. The certification issued by the magistrate serves as primary evidence during the trial. Any failure to secure independent witnesses, delays in sealing the contraband, or discrepancies in the sample weights between the spot seizure and the chemical lab report can severely weaken the prosecution case, paving the way for an acquittal.
          </p>
        </div>
      </div>
    </section>
  );
}
