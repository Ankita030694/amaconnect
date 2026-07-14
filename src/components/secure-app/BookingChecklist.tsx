import React from "react";
import Link from "next/link";

export default function BookingChecklist({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full flex flex-col gap-10">
        
        {/* Top: Step Checklist */}
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mb-8 tracking-tight">
            Step-by-Step: Booking Your First Consultation
          </h2>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#D4AF37]/50 before:to-transparent">
            
            {[
              {
                step: "01",
                title: "Download & Biometric Verification",
                desc: "Begin by installing the AMAConnect app from the official iOS App Store or Google Play Store. Unlike casual apps that require just a phone number, our onboarding process includes a mandatory biometric lock setup (using FaceID or fingerprint recognition) and an OTP-based phone verification. This ensures that even if your device is stolen or unlocked by a third party, your legal application and its contents remain physically inaccessible. Your account is linked exclusively to your verified hardware."
              },
              {
                step: "02",
                title: "Advanced Advocate Discovery",
                desc: "Navigate to our verified advocate directory, where you can browse profiles based on hyper-specific specializations (e.g., cyber crime, corporate insolvency, or family law), their practicing jurisdictions (such as the Allahabad High Court or district courts), and spoken languages. Every profile displays verified Bar Council enrollment details, years of active practice, and peer-reviewed success metrics. This transparency ensures you are consulting with a legitimate, highly qualified legal professional, not a paralegal or an intern."
              },
              {
                step: "03",
                title: "Secure Evidence Vault Submission",
                desc: "Before your consultation begins, you can securely upload relevant case materials—such as property deeds, financial statements, or police FIRs—into our encrypted digital vault. The vault employs zero-knowledge architecture, meaning the files are encrypted locally on your phone and can only be decrypted by the specific advocate you have hired. Once you grant them access, they can review the documents in preparation for your session, maximizing the efficiency of your paid consultation time."
              },
              {
                step: "04",
                title: "Transparent Escrow Payment",
                desc: "Once you have selected an advocate and chosen a consultation time slot, you will proceed to the payment gateway. To protect both clients and advocates, AMAConnect uses an escrow-backed payment model. Your consultation fee is held securely in an independent trust account. The advocate is only paid after the video or chat session has successfully concluded, ensuring you never pay for dropped calls, no-shows, or technical failures."
              },
              {
                step: "05",
                title: "Launch Secure Tele-Legal Session",
                desc: "At the scheduled time, you will receive a push notification to join the secure session. The app establishes a WebRTC peer-to-peer encrypted tunnel, allowing you to connect instantly via high-definition video or secure chat directly within the app's protected environment. Because there are no central recording servers, your consultation is completely ephemeral and private, replicating the legal sanctity of a physical law office."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-6 last:mb-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#2D2219] bg-[#D4AF37] text-[#2D2219] font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
                  {item.step}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-[#FAF8F5] border border-[#5A4C33]/10 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-base mb-2 text-[#2D2219]">{item.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed text-justify">{item.desc}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="w-full">
          <div className="bg-white rounded-3xl p-8 shadow-2xl text-[#2D2219] sticky top-24">
            <h3 className="text-lg font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-100 pb-4 text-center">
              Transparent Cost Breakdown
            </h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex justify-between items-center text-base">
                <span className="font-medium text-gray-600">App Download</span>
                <span className="font-bold text-[#4ade80]">Free</span>
              </li>
              <li className="flex justify-between items-center text-base">
                <span className="font-medium text-gray-600">Account Setup</span>
                <span className="font-bold text-[#4ade80]">Free</span>
              </li>
              <li className="flex justify-between items-center text-base">
                <span className="font-medium text-gray-600">Document Vault</span>
                <span className="font-bold text-[#4ade80]">Included</span>
              </li>
              <li className="flex justify-between items-center text-base pt-4 border-t border-gray-100">
                <span className="font-bold text-gray-900">Per Consultation</span>
                <span className="font-extrabold text-[#D4AF37]">Varies by Advocate</span>
              </li>
            </ul>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#D4AF37]/20 text-xs text-gray-600 mb-6 text-center leading-relaxed">
              Advocates set their own rates based on experience. You will always see the exact cost before booking. No hidden fees. Read our <Link href="/blog" className="text-[#D4AF37] font-bold hover:underline">blog</Link> to learn how to budget for legal expenses.
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
