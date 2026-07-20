import React from "react";

export default function BiometricLockingTheft({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Biometric Locking and Identity Theft
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Cybercriminals exploit biometric vulnerabilities to conduct unauthorized financial withdrawals. Utilizing UIDAI biometric locking tools is the most effective administrative defense against identity duplication.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            How to Lock/Unlock Aadhaar Biometrics Online
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Locking your Aadhaar biometrics is one of the most effective ways to protect your digital identity from unauthorized authentication attempts and potential financial fraud. The UIDAI provides a free online feature that allows residents to lock their biometric data, which includes fingerprints and iris scans, preventing any authentication request from succeeding while the lock is active. To lock or unlock your biometrics, you can use the official UIDAI website or the mAadhaar mobile application. The process begins by logging into the myAadhaar portal using your twelve digit Aadhaar number and entering the one time password (OTP) sent to your registered mobile number. Once logged in, select the Lock or Unlock Biometrics option from the dashboard. The system will guide you to confirm the lock status, and upon submission, your biometrics will be locked instantly. When locked, any attempt to use your fingerprint or iris for e-KYC or financial transactions will return an error code, protecting you from unauthorized access. If you need to perform a legitimate transaction, such as registering a property or opening a bank account, you can unlock your biometrics temporarily or permanently using the same portal. The temporary unlock feature automatically re-locks your biometrics after ten minutes, ensuring continuous security without manual intervention. Familiarizing yourself with this process is highly recommended for all cardholders, especially those who do not frequently use biometric authentication for their daily transactions, maintaining absolute safety.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Preventing AEPS Banking Scams and Fingerprint Cloning
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The rise of the Aadhaar Enabled Payment System (AEPS) has brought great convenience to rural and underbanked areas by allowing citizens to withdraw cash using only their Aadhaar number and fingerprint. However, it has also become a major target for cybercriminals who exploit the system through fingerprint cloning and identity theft scams. Scammers typically acquire copies of land registry documents, lease agreements, or public records that contain the owner fingerprint scans and Aadhaar details. They then clone these fingerprints using silicon sheets or high precision printer molds, allowing them to authenticate transactions at AEPS merchant points without the knowledge or physical presence of the victim. Since AEPS transactions do not require a mobile OTP or PIN, cloned fingerprints can be used to drain bank accounts silently. To prevent these devastating scams, citizens must actively lock their Aadhaar biometrics when not in use. Additionally, you should monitor your mobile notifications for any unexpected authentication alerts sent by the UIDAI and regularly check your transaction history on the bank portal. If you notice any unauthorized withdrawals, you must immediately report the fraud to your bank, file a cybercrime complaint, and lock your biometrics permanently through the portal. Understanding the risks associated with fingerprint cloning and taking proactive locking measures is essential to secure your hard earned savings and protect your digital footprint from financial exploitation.
          </p>
        </div>
      </div>
    </section>
  );
}
