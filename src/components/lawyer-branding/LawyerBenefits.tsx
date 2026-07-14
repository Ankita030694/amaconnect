import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LawyerBenefits({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32">
      <div className="w-full flex flex-col items-start">
        
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mb-4 tracking-tight">
          The Digital Shift in Client Acquisition
        </h2>
        
        <p className="text-sm text-gray-600 leading-relaxed mb-6 text-justify">
          The legal landscape in India is undergoing a massive, irreversible paradigm shift. For decades, independent advocates and boutique law firms relied almost exclusively on geographical proximity and traditional word-of-mouth networks to acquire new clients. A lawyer's reputation was confined to their local bar association, the specific courtrooms they frequented, and the personal recommendations of past clients. While word-of-mouth remains a powerful indicator of trust, it is inherently unscalable. It is entirely unpredictable, subjective, and leaves advocates vulnerable to sudden dry spells in their practice.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-10 text-justify">
          Today, the modern Indian client—whether an individual seeking family law advice or a corporate entity dealing with complex compliance issues—turns to their smartphone before they ever step foot in a law office. They expect instant accessibility, transparent credentials, and the ability to evaluate an advocate's expertise digitally before committing to a paid consultation. To remain competitive in 2026, advocates must establish a commanding digital authority exactly where these high-intent clients are actively searching.
        </p>

        {/* Before vs After Section */}
        <div className="grid grid-cols-1 gap-8 w-full text-left">
          
          {/* Before */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-500 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs">✕</span>
              The Old Way: High Effort, Low Predictability
            </h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Unpredictable Word of Mouth",
                  desc: "Relying entirely on past clients to randomly mention your name to someone who happens to need a lawyer at that exact moment. This creates feast-or-famine cycles in revenue."
                },
                {
                  title: "Wasted Unbillable Hours",
                  desc: "Spending hours conducting 'free' initial consultations over the phone with leads who either cannot afford your services or whose cases fall outside your core jurisdiction and expertise."
                },
                {
                  title: "Geographical Limitations",
                  desc: "Your visibility is strictly limited to your local district or city. Clients from other states who need representation in your specific High Court or Tribunal cannot easily discover you."
                },
                {
                  title: "Outdated Directory Listings",
                  desc: "Paying heavy premiums for static listings in massive digital directories where your profile is buried beneath thousands of others, with no active way to demonstrate your subject-matter expertise."
                }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-0.5 text-gray-400 font-bold">•</span>
                  <span>
                    <strong className="text-gray-800">{item.title}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-[#2D2219] rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-[#D4AF37]">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center text-xs">✓</span>
              The AMAConnect Way: Scalable Digital Authority
            </h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Algorithmic Client Matching",
                  desc: "Receive a consistent flow of high-intent digital inquiries from our 10,000+ monthly active users, specifically filtered to match your declared practice areas and jurisdictional expertise."
                },
                {
                  title: "Automated Pre-Qualification",
                  desc: "Before a user can book your time, they must submit structured queries regarding their legal issues. This ensures you never waste unbillable hours on out-of-scope or unverified matters."
                },
                {
                  title: "Pan-India Visibility & Trust",
                  desc: "Break geographical barriers. A verified digital profile immediately signals trust and Bar Council verified legitimacy to corporate and individual clients across the entire country."
                },
                {
                  title: "Direct Authority Building",
                  desc: "Instead of a passive listing, AMAConnect provides active Q&A forums and secure chat features where you can answer generalized legal queries, instantly proving your expertise before a formal hiring decision is made."
                }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="mt-0.5 text-[#D4AF37] font-bold">•</span>
                  <span>
                    <strong className="text-white">{item.title}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-gray-400 italic text-justify leading-relaxed">
                Furthermore, by joining one of our <Link href="/communities" className="text-[#D4AF37] hover:underline">exclusive WhatsApp legal communities</Link>, you can instantly network with peers, share referrals for cases outside your jurisdiction, and answer community queries to build your long-term digital authority without violating any Bar Council advertising regulations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
