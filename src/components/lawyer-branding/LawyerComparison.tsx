import React from "react";
import Link from "next/link";

export default function LawyerComparison({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        
        <div className="text-left mb-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-4">
            How AMAConnect Acts As Your Marketing Engine
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Compare our platform to traditional methods and see why modern advocates are making the switch to scale their practice.
          </p>
        </div>

        {/* The Comparison Table Section Type */}
        <div className="overflow-x-auto bg-white rounded-3xl border border-gray-200 shadow-sm mb-12 w-full">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr>
                <th className="p-4 sm:p-6 bg-gray-50 border-b border-r border-gray-200 text-base font-bold text-gray-900 w-1/3">
                  Feature
                </th>
                <th className="p-4 sm:p-6 bg-white border-b border-r border-gray-200 text-base font-bold text-gray-500 w-1/3">
                  Traditional Directories
                </th>
                <th className="p-4 sm:p-6 bg-[#2D2219] border-b border-[#2D2219] text-base font-bold text-white w-1/3 rounded-tr-3xl relative">
                  AMAConnect Profile
                  {/* Subtle golden top accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]" />
                </th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm font-medium">
              <tr>
                <td className="p-4 sm:p-6 border-b border-r border-gray-200 text-gray-800">Lead Generation</td>
                <td className="p-4 sm:p-6 border-b border-r border-gray-200 text-gray-500">Passive listings</td>
                <td className="p-4 sm:p-6 border-b border-[#E8E6E1] bg-[#FDFBF7] text-[#2D2219] font-bold">Active client matching</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 border-b border-r border-gray-200 text-gray-800">Pre Qualification</td>
                <td className="p-4 sm:p-6 border-b border-r border-gray-200 text-gray-500">None</td>
                <td className="p-4 sm:p-6 border-b border-[#E8E6E1] bg-[#FDFBF7] text-[#2D2219] font-bold">Automated screening</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 border-b border-r border-gray-200 text-gray-800">Platform Visibility</td>
                <td className="p-4 sm:p-6 border-b border-r border-gray-200 text-gray-500">Lost in thousands</td>
                <td className="p-4 sm:p-6 border-b border-[#E8E6E1] bg-[#FDFBF7] text-[#2D2219] font-bold">Showcased to 10,000+ users</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 border-r border-gray-200 text-gray-800 rounded-bl-3xl">Community Access</td>
                <td className="p-4 sm:p-6 border-r border-gray-200 text-gray-500">Isolated profile</td>
                <td className="p-4 sm:p-6 bg-[#FDFBF7] text-[#2D2219] font-bold">Direct Q&A integration</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Feature Highlights with H3s */}
        <div className="grid grid-cols-1 gap-12 w-full">
          <div>
            <h3 className="text-lg font-extrabold text-[#2D2219] mb-3">
              Verified Professional Profiles: The New Standard of Trust
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
              In a digital ecosystem flooded with unverified directories and anonymous legal advice forums, a verified professional profile acts as your ultimate differentiator. When you claim your AMAConnect profile, our internal compliance team conducts a rigorous verification against the Bar Council of India's enrollment database. Once approved, your profile receives a distinct "Verified Advocate" badge. This badge is not merely decorative; it is a critical trust signal. 
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3 text-justify">
              Corporate clients and high-net-worth individuals are inherently risk-averse. They will not retain an advocate whose credentials they cannot independently verify. By maintaining a comprehensive profile detailing your educational background, specific practice areas (e.g., Intellectual Property, NCLT matters, or cyber law), and direct links to your published legal opinions, you remove the friction of skepticism. Your verified status instantly elevates you above unverified competitors in the digital space, converting cautious browsers into confident clients.
            </p>
            <Link href="/ask-me-anything" className="text-sm text-[#D4AF37] font-bold hover:underline inline-flex items-center gap-2 mt-2">
              Explore our AMA format to see how verified profiles perform.
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
          
          <div>
            <h3 className="text-lg font-extrabold text-[#2D2219] mb-3">
              Direct Access to 10,000+ Monthly Users: The Liquidity of Demand
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
              The primary failure of traditional legal directories (like JustDial or Sulekha) is that they are passive platforms. They list your name alongside hundreds of others and rely on the user to blindly make a phone call. AMAConnect operates on a completely different paradigm—it is an active marketplace. Our platform currently routes over 10,000 active, highly specific legal queries per month. 
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3 text-justify">
              Stop waiting for the phone to ring. Our proprietary matchmaking algorithm analyzes the natural language of a user's query and instantly routes it to advocates who possess the exact jurisdictional and subject-matter expertise required to resolve it. If a user in Bangalore searches for a "co-founder equity dispute," the system does not show them a criminal defense lawyer in Delhi. It shows them *you*. This targeted exposure is the most capital-efficient way to build a robust client base in 2026. By participating in this high-liquidity environment, you ensure that every hour spent on business development yields maximum ROI.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-extrabold text-[#2D2219] mb-3">
              Escrow-Backed Consultations: Zero Payment Friction
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
              A major pain point for independent practitioners is the friction associated with collecting consultation fees, especially for remote, initial advice. Clients are hesitant to transfer funds to an unknown bank account, and advocates refuse to block their calendar for unpaid, speculative calls. 
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3 text-justify">
              AMAConnect solves this through an integrated, escrow-backed payment gateway. When a client books a slot on your calendar, they prepay the consultation fee into a secure trust account. The funds are held in escrow until the video or chat session successfully concludes, at which point they are automatically disbursed to your linked bank account. This guarantees that you are compensated for every minute of your professional time, completely eliminating the risk of no-shows and payment defaults.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
