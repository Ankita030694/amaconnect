import React from "react";
import Link from "next/link";

export default function PrivacyRedFlags({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32">
      <div className="flex flex-col gap-10">
        
        {/* Top Copy */}
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mb-4 tracking-tight">
            Why Privacy Matters in Virtual Legal Advice
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
            The legal landscape has shifted dramatically over the past decade. As courts across India, including the Supreme Court and various High Courts, increasingly embrace digital evidence and virtual hearings, the methods by which clients and advocates communicate have come under intense judicial scrutiny. Discussing your legal challenges on consumer-grade apps puts your sensitive data at massive risk. A casual conversation regarding a family dispute, property litigation, or corporate insolvency on a standard messaging application is rarely afforded the strict, uncompromising umbrella of attorney-client privilege. In fact, many recent cyber law precedents have demonstrated that unencrypted, casually backed-up digital communications can and will be subpoenaed during discovery phases. Read our <Link href="/success-stories" className="text-[#D4AF37] font-bold hover:underline">success stories</Link> to see how critical absolute confidentiality is during a dispute.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
            When you consult an advocate, you are sharing the most intimate, vulnerable, and legally consequential details of your life. Whether you are navigating a high-stakes divorce, contesting a fabricated criminal charge, or negotiating a multi-crore real estate settlement, the information you disclose is highly explosive. If this data is intercepted, inadvertently leaked, or algorithmically harvested by a third-party platform, it can destroy your legal strategy. Opposing counsel often hunt for digital footprints, and consumer platforms willingly surrender chat histories, media files, and metadata when faced with a simple police request or court order. 
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            We built AMAConnect specifically for strict legal parameters. Our architecture is designed not just to facilitate communication, but to construct a legally recognized, impermeable fortress around your attorney-client interactions. If your current consultation method exhibits any of the following red flags, your data is not safe, and you are actively compromising your case before you even enter the courtroom.
          </p>
        </div>

        {/* Red Flags List */}
        <div className="w-full">
          <div className="bg-white rounded-3xl p-8 border border-red-100 shadow-xl relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 shadow-sm border border-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            
            <h3 className="text-sm font-bold text-red-600 mb-6 uppercase tracking-wider">
              Critical Privacy Red Flags
            </h3>
            
            <ul className="space-y-6">
              {[
                {
                  title: "Cloud Backup Exploits & Plaintext Vulnerabilities",
                  desc: "Standard apps backup your unencrypted chat history to third-party consumer clouds (like Google Drive or iCloud) by default. While the chat itself might claim end-to-end encryption in transit, the backups stored in these massive commercial data centers are often stored in plaintext or with keys controlled by the provider. This means law enforcement, malicious hackers, or even corporate entities can easily extract your entire consultation history without breaking a sweat. AMAConnect physically prevents cloud backups of your sessions."
                },
                {
                  title: "Metadata Harvesting and Behavioral Profiling",
                  desc: "Commercial platforms are ad-driven machines. Even if they can't read your messages, they track critical metadata: who you speak with, at what time, from what IP address, and for how long. This behavioral data is aggressively harvested and sold to advertisers or data brokers. If you are consulting a bankruptcy lawyer, that metadata alone reveals your financial distress to the market. AMAConnect operates on a zero-knowledge architecture, meaning we strip and destroy all metadata immediately after your session concludes."
                },
                {
                  title: "Local Media Storage & Cross-App Contamination",
                  desc: "When you share a confidential FIR, a forged signature document, or private matrimonial evidence on a regular app, it is automatically saved to your phone's accessible camera roll or public storage folders. Any other app on your phone with 'storage permission' (like social media apps, games, or photo editors) can scrape these documents. Our platform uses an isolated sandbox environment. Your legal files live exclusively inside the encrypted AMA vault and are mathematically isolated from the rest of your operating system."
                },
                {
                  title: "Zero Attorney Privilege Enforcement",
                  desc: "For a communication to be protected under Section 126 of the Indian Evidence Act, the platform must verify that the interaction is strictly between a licensed advocate and a client. Consumer apps have no concept of professional verification; anyone can claim to be a lawyer. This makes it impossible to assert privilege if your device is seized. AMAConnect mandates rigorous Bar Council verification for every advocate on the platform, ensuring that every byte of data exchanged is legally recognized as privileged and immune from discovery."
                }
              ].map((flag, idx) => (
                <li key={idx} className="flex gap-4 items-start border-b border-gray-50 pb-6 last:border-0 last:pb-0">
                  <div className="w-5 h-5 rounded bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{flag.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed text-justify">{flag.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
