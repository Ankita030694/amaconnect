import React from "react";
import Link from "next/link";

export default function ImmediateStepsTheft({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Immediate Steps after Vehicle Theft
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Acting swiftly in the first few hours of a vehicle theft is critical to protect your legal and financial interests. Registering a police complaint and notifying your insurance provider immediately prevents claim rejections.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing First Information Report (FIR) with Local Police
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The moment you realize that your vehicle has been stolen, the first and most critical legal action is to file a First Information Report (FIR) under Section 154 of the Code of Criminal Procedure (CrPC) at the nearest police station having jurisdiction over the area of theft. The police department will require you to provide a detailed statement of the incident, including the exact location where the vehicle was parked, the time it was last seen, and the registration details, engine number, chassis number, and color of the vehicle. If the police officer refuses to register the FIR, you should immediately send a written draft of the complaint to the Superintendent of Police via registered post under Section 154(3) or file a complaint online on the state police portal, which is widely available across India. The date and time of registering the FIR are vital, as any delay in filing can make the insurance company suspicious, leading them to allege negligence or staged theft. Once the FIR is registered, the police will provide you with a certified copy free of cost, which is a mandatory legal document for all subsequent insurance and registration office notifications. If you face any administrative difficulties or if the police refuse to log your complaint, seeking immediate advice from legal professionals through our{" "}
            <Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">Ask Me Anything</Link>{" "}
            portal or consulting via our{" "}
            <Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "}
            programs can assist you in navigating the administrative hurdles effectively.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Informing the Insurance Company within Statutory Window
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Simultaneously with the police notification, the policyholder must inform the insurance company about the theft within the statutory window specified in the policy terms, which is typically twenty-four to forty-eight hours from the time of the incident. This initial notification can be done through the insurer customer care helpline, email, or their mobile application. Delaying this notification is a common ground for claim rejection, as insurance contracts require immediate intimation of any loss to allow the insurer claims team to conduct a timely investigation. When you contact the insurer, they will log your claim and assign a unique claim registration number. You must provide details of the theft, the registered owner name, the policy number, and the copy of the police complaint or FIR. The insurer will immediately appoint an independent investigator or surveyor to verify the facts of the theft. The surveyor will visit the spot, speak to local residents, review the FIR, and assess whether the owner exercised reasonable care to prevent the theft. If the policyholder fails to notify the insurer within the specified timeframe, the insurer may argue that their right to investigate the loss was prejudiced, leading to repudiation of the claim. Maintaining a record of the exact date, time, and name of the representative you spoke to, along with all email confirmations, is essential to counter any future allegations of delayed intimation during the settlement process.
          </p>
        </div>
      </div>
    </section>
  );
}
