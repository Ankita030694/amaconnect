import React from "react";

export default function RecoveryStolenVehicle({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Recovery of Stolen Vehicle by Police
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            If the police recover your stolen vehicle, it is placed in police custody as case property. Regaining possession requires navigating the judicial Superdari process, which also alters your active insurance claims status.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Procedure to Claim Vehicle from Police Custody (Superdari)
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In some cases, the police may successfully locate and recover the stolen vehicle, either during the active investigation or after the case is closed. When a stolen vehicle is recovered, it is taken into police custody and classified as case property. The owner cannot simply walk into the police station and drive the vehicle away; they must follow a formal judicial procedure to release the vehicle from police custody. This legal procedure is known as Superdari (or release of property), which is filed under Section 451 of the Code of Criminal Procedure (CrPC). The owner must file an application before the Judicial Magistrate having jurisdiction over the case, requesting the release of the vehicle. The application must include the FIR details, proof of ownership (RC), and insurance records. The court will call for a report from the police station to verify the recovery and the condition of the vehicle. If the magistrate is satisfied, they will order the release of the vehicle to the owner upon the execution of a Superdarinama. The Superdarinama is a legal bond where the owner promises to produce the vehicle before the court whenever required during the trial of the accused thieves, and agrees not to sell or modify the vehicle without prior court permission. Securing the Superdari order from the magistrate is a mandatory step that must be completed to regain legal custody and operation of the recovered vehicle.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Impact of Vehicle Recovery on Active Insurance Claims
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The recovery of a stolen vehicle has a major impact on the status of your active insurance claim, and the consequences depend on the stage of the settlement process. If the vehicle is recovered before the insurance company has finalized the claim and released the payout, the total loss claim will be closed. The insurer will assess the damage caused to the vehicle during the theft, and process the claim as a partial damage or repair claim, paying for the cost of repairs and restoring the vehicle to its original condition. If the vehicle is recovered in a completely damaged or dismantled state, the insurer will proceed with a constructive total loss claim, paying the full IDV. However, if the vehicle is recovered after the insurance company has already settled the claim and paid the full IDV to the policyholder, the ownership of the vehicle legally transfers to the insurance company. This is because the policyholder has already received the compensation for the loss and has executed a subrogation letter and ownership transfer forms (Form 29 and 30) in favor of the insurer during settlement. In this scenario, the insurance company takes possession of the recovered vehicle and has the legal right to sell or auction it to recover their costs. The policyholder cannot claim the recovered vehicle unless they return the full insurance payout to the company, ensuring that the owner does not receive double compensation for the same loss.
          </p>
        </div>
      </div>
    </section>
  );
}
