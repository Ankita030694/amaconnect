import React from "react";

export default function CDPreventiveSecurity({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Preventive Digital Security Best Practices
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            While legal remedies help resolve incidents after they occur, practicing strong digital security is the best way to prevent cyber defamation and harassment. Implementing proactive account security and monitoring access logs helps users block unauthorized takeovers and protect their digital assets.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Securing Social Media Accounts and Logging Access
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A common tactic used by online abusers is hacking or taking over a victim's social media accounts to post embarrassing or defamatory content under their name. To prevent this, users should customize their privacy settings to limit who can view their posts, photos, and list of friends.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, users should regularly review the login history and active sessions page in their account settings on platforms like Facebook, Instagram, and LinkedIn. This logs the exact devices, locations, and IP addresses that have accessed the account. If any unrecognized device or location appears, the user must immediately log out of all active sessions and change their password, preventing unauthorized access.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Utilizing Two-Factor Authentication and Encrypted Mails
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Enabling Two-Factor Authentication (2FA) is one of the most effective ways to secure email and social media accounts. With 2FA enabled, even if an attacker learns your password, they cannot log in without a unique verification code sent to your authenticator app or phone. Users should use secure authenticator apps like Google Authenticator or Microsoft Authenticator, which are safer than SMS codes.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, when sharing sensitive information or documents, users should use encrypted email services like ProtonMail, or enable built-in security features in standard email clients. Using encrypted, password-protected PDF files when sharing personal documents prevents them from being intercepted, copied, or modified by third parties, securing your digital privacy.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Security Action Checklist</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Account Hardening</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Set profile settings to private.</li>
                  <li>Enable 2FA using mobile authenticator apps.</li>
                  <li>Use strong passwords combining letters, numbers, and symbols.</li>
                  <li>Review active login sessions weekly.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Data Protection</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Use encrypted email providers for sensitive data.</li>
                  <li>Apply passwords to shared PDF documents.</li>
                  <li>Avoid using public Wi-Fi without a VPN.</li>
                  <li>Backup essential data on encrypted hard drives.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
