import React from "react";

export default function CDIntermediaryLiability({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Liability of Social Media Intermediaries
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Social media platforms, search engines, and internet service providers act as intermediaries hosting user content. Under Indian law, their liability for defamatory posts published by third-party users is regulated by specific guidelines that balance platform protection with user safety.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Safe Harbor Protections and Section 79 Rules
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 79 of the Information Technology Act, 2000, provides intermediaries with safe harbor protection. This protection states that an intermediary is not legally liable for any third-party information, data, or communication link hosted by them, provided they act solely as a transmitter and do not modify the content.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            However, this safe harbor is not absolute and is subject to due diligence requirements. Under the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, platforms must maintain a clear grievance redressal mechanism, appoint a resident grievance officer, and publish compliance reports, ensuring they actively address user complaints to maintain their legal protection.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Compelling Platforms to Take Down Content
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Following the landmark Supreme Court decision in Shreya Singhal vs Union of India, intermediaries are not required to remove content based solely on direct user complaints, as this could lead to private censorship. Instead, they must remove content once they receive actual knowledge in the form of a court order or a directive from a competent government agency.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Once a court order or government takedown notice is served, the intermediary must disable or remove the defamatory content within thirty-six hours. Additionally, under the IT Rules 2021, if the content involves non-consensual sharing of intimate images or impersonation, platforms must remove it within twenty-four hours of receiving a complaint, providing fast protection for victims of digital abuse.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Safe Harbor Protection</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Protects social media platforms from lawsuits for user posts. Only applies if the platform complies with government due diligence rules.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Takedown Mandate</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Requires platforms to remove content within 36 hours of receiving a court order. 24-hour limit applies for sexual harassment or identity impersonation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
