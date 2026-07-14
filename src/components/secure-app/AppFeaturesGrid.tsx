import React from "react";

export default function AppFeaturesGrid({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mb-3 tracking-tight">
            Core App Features: Engineering a Fortified Legal Environment
          </h2>
          <p className="text-sm text-gray-600 text-justify leading-relaxed mb-4">
            A secure legal consultation is not just about making a video call; it requires an entire ecosystem of cryptographic protocols, secure vaults, and verified identities. The AMAConnect platform is engineered to replicate the absolute confidentiality of a closed-door attorney's office, but with the massive convenience of mobile accessibility.
          </p>
          <p className="text-sm text-gray-600 text-justify leading-relaxed">
            By combining AES-256 military-grade encryption with intuitive, consumer-friendly UI elements, we have eliminated the technical friction usually associated with secure platforms. Whether you are dealing with sensitive intellectual property disputes or intensely private family matters, our core features ensure that your data remains exclusively yours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          
          {/* Feature 1 */}
          <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#5A4C33]/10 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-gray-100">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                <rect x="9" y="9" width="2" height="2" fill="#D4AF37" stroke="none" />
                <rect x="13" y="9" width="2" height="2" fill="#D4AF37" stroke="none" />
                <rect x="17" y="9" width="2" height="2" fill="#D4AF37" stroke="none" />
              </svg>
            </div>
            <h3 className="text-lg font-extrabold text-[#2D2219] mb-3">
              End-to-End Encrypted Secure Lawyer Chat
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify mb-3">
              Every single text message, voice note, and query sent through AMAConnect is heavily encrypted using AES-256 protocols before it ever leaves your device. This means that the data traveling through the internet is completely scrambled and indecipherable. The decryption keys exist only on your device and your verified advocate's device. 
            </p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Even if a malicious actor, a network snooper, or our own database administrators attempted to intercept the transmission, they would only see cryptographic noise. This zero-knowledge architecture guarantees that your strategy discussions, admission of facts, and legal hypotheses cannot be weaponized against you by third parties or opposing counsel.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#5A4C33]/10 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-gray-100">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"/>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
              </svg>
            </div>
            <h3 className="text-lg font-extrabold text-[#2D2219] mb-3">
              High-Definition, Peer-to-Peer Video Consultations
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify mb-3">
              Skip the traffic, the waiting room, and the risk of being seen entering a specific law firm. You can schedule and launch crystal clear, high-definition secure video consultations directly from your phone screen. Our WebRTC-based video infrastructure establishes a direct peer-to-peer tunnel between you and the advocate whenever possible, bypassing central relay servers entirely.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              This technology ensures that your facial expressions, emotional state, and verbal admissions are not recorded or monitored. Furthermore, dynamic bandwidth adaptation ensures that even if you are connecting from a remote district in Uttar Pradesh with fluctuating 4G networks, the connection stabilizes to maintain uninterrupted audio, ensuring your legal briefing is never cut short.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#5A4C33]/10 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-gray-100">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                <line x1="12" y1="11" x2="12" y2="17"/>
                <line x1="9" y1="14" x2="15" y2="14"/>
              </svg>
            </div>
            <h3 className="text-lg font-extrabold text-[#2D2219] mb-3">
              Confidential Document Sharing Vault
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify mb-3">
              Uploading a sensitive contract, a police FIR, or a contested will to a standard cloud drive is highly dangerous. AMAConnect features a built-in, isolated digital vault specifically designed for legal discovery. When you upload a document, it is encrypted and sandboxed within the app.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              These files are never saved to your phone's public storage or camera roll, meaning other apps (like social media or games) cannot scrape them. You maintain absolute access control: you decide exactly which verified advocate can view a specific document, and you can revoke that access instantaneously at any time, ensuring total control over your legal assets.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#5A4C33]/10 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-gray-100">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 className="text-lg font-extrabold text-[#2D2219] mb-3">
              Strict Advocate Verification & Credentialing
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify mb-3">
              The fundamental basis of attorney-client privilege is that the person you are speaking to is, in fact, a legally recognized advocate. On the open internet, it is easy for fraudsters to masquerade as legal professionals. 
            </p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              We employ a rigorous, multi-step credentialing system. Every advocate on AMAConnect must submit their official Bar Council enrollment numbers, identity proofs, and undergo a manual verification process by our compliance team. When you see the "Verified" badge on an advocate's profile, you can be 100% certain that your communications are legally privileged and protected under Section 126 of the Indian Evidence Act.
            </p>
          </div>
          
          {/* Feature 5 */}
          <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#5A4C33]/10 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-gray-100">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
                <line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
            </div>
            <h3 className="text-lg font-extrabold text-[#2D2219] mb-3">
              Transparent, Escrow-Backed Payments
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify mb-3">
              Financial disputes with legal counsel are incredibly common and stressful. We eliminate this entirely through a transparent, upfront payment system. Advocates set their own consultation rates, which are displayed clearly on their profiles with absolutely zero hidden fees.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              When you book a session, your payment is held securely in an escrow-like system. The funds are only released to the advocate after the consultation has been successfully completed. If a technical issue prevents the call, or if the advocate fails to show up, our system ensures an automated, frictionless refund process, protecting both your privacy and your wallet.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
