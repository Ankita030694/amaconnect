import React from "react";

export default function EmergencyCareBilling({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Emergency Care Billing Regulations
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Emergency admissions are governed by strict guidelines that prioritize human life over financial deposits. Clinical facilities are legally obligated to stabilize critical patients before initiating billing procedures.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Obligation to Stabilize Patients Without Advance Deposits
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In emergency medical situations, every second counts, and the priority of any hospital must be saving the patient life. Under the guidelines issued by the Supreme Court of India in the historic case of Parmanand Katara v. Union of India, every doctor and hospital, whether government or private, has a mandatory obligation to provide immediate medical assistance and stabilize a patient in an emergency without waiting for administrative or financial formalities. The hospital cannot demand an advance financial deposit or delay treatment due to billing negotiations or police procedures. If a patient is brought to the casualty ward with life threatening injuries or critical conditions, such as cardiac arrest, severe trauma, or poisoning, the medical staff must begin resuscitation and stabilization measures immediately. Only after the patient is out of immediate danger and stabilized can the hospital initiate the admission formalities and request deposits. Denying emergency care or delaying treatment due to non-payment of an advance fee is a severe violation of the right to health and medical ethics. If a patient condition worsens or if they pass away because the hospital refused to treat them without an advance deposit, the hospital administration and the treating doctors can be prosecuted for criminal negligence, face heavy consumer damages, and lose their medical and operational licenses, ensuring that patient care is always prioritized over commercial transactions.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Government Guidelines on Emergency Admission Pricing
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To regulate emergency admission pricing and prevent hospitals from exploiting desperate families during medical crises, various state health departments and the central government have introduced specific guidelines. These regulations require hospitals to maintain a standard, pre-disclosed package for emergency stabilization and basic casualty care. The hospital must charge standardized rates for emergency room occupancy, oxygen administration, basic medications, and initial doctor consultations. In addition, under the rules framed by the National Health Authority for schemes like Ayushman Bharat and state-specific public health insurances, hospitals must provide cashless emergency treatment to eligible beneficiaries without asking for any upfront cash. The guidelines also dictate that hospitals must provide a clear, written cost estimate to the family during the emergency stabilization process, outlining the potential charges if the patient needs to be moved to the ICU or undergo major surgery. If the family decides to transfer the patient to a government facility or another hospital due to cost concerns, the current hospital must facilitate the transfer by providing a referral, stabilizing the patient for transit, and arranging an ambulance, without withholding the patient due to unpaid bills. Understanding these emergency pricing guidelines ensures that families can demand fair billing and resist arbitrary price hikes or forced deposit demands during a high stress medical emergency, protecting their rights and finances.
          </p>
        </div>
      </div>
    </section>
  );
}
