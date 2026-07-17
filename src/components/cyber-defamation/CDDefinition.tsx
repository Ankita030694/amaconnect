import React from "react";
import Link from "next/link";

export default function CDDefinition({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Defining Cyber Defamation in India
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Cyber defamation is the act of publishing derogatory, false, or malicious statements about a person or business on digital platforms with the clear intention of harming their reputation. With the growth of social media networks, forums, and blogs, damaging content can spread worldwide in seconds, causing immediate and lasting damage to a victim's personal life and professional career.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Difference Between Libel and Slander Online
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In traditional tort law, defamation is divided into libel (written or permanent defamation) and slander (spoken or transient defamation). On the internet, this distinction becomes blurred but remains legally significant. Online posts, emails, articles, and shared digital images constitute libel because they are saved in a permanent format on web servers and can be retrieved, shared, or archived indefinitely.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Conversely, live video broadcasts, audio chats on temporary forums, or temporary audio messages may be classified as slander if they are not recorded or saved. However, because most online platforms record and archive user data, the vast majority of cyber defamation cases are treated as libel, which is generally viewed more seriously by courts because of its potential to reach millions of readers.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If you need immediate assistance to stop digital harassment or character assassination, you can seek advice through the 
            {" "}<Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">AMAConnect Ask Me Anything</Link>{" "} 
            portal, or access resources via the 
            {" "}<Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] hover:underline font-semibold">Pro Bono Free Legal Aid</Link>{" "} 
            page. You can also connect with cyber litigation experts and tech specialists in our active 
            {" "}<Link href="/communities" className="text-[#D4AF37] hover:underline font-semibold">Legal Communities</Link>{" "} 
            forum to discuss strategies for removing defamatory material and identifying offenders.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Constitutional Right to Reputation vs Free Speech
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The legal battle against cyber defamation involves balancing two constitutional rights under the Indian Constitution. Article 19(1)(a) guarantees the fundamental right to freedom of speech and expression. However, this right is not absolute and is subject to reasonable restrictions under Article 19(2), which explicitly lists defamation as a ground for restriction.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The Supreme Court of India has ruled that the right to reputation is a fundamental part of the right to life and personal liberty guaranteed under Article 21. Therefore, one person's right to free speech cannot be used to destroy another person's reputation through false statements. When resolving disputes, courts verify if the shared content is true, serves the public interest, or is fair comment, protecting honest expression while penalizing malicious digital trolling.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">📰</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Libel Online</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Applies to permanent digital text, blog articles, social media posts, shared images, or emails. Retained on servers and shared widely.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">🗣️</span>
              <h4 className="font-bold text-[#2D2219] mb-2">Slander Online</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Applies to transient spoken words, unrecorded live audio streams, or momentary phone statements. Harder to document and prove in court.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
