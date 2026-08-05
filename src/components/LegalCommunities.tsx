"use client";

import { useState } from "react";
import Image from "next/image";
import { Copyright, Briefcase, Home, FileText, Handshake, Hourglass } from "lucide-react";

// Helper function to return beautiful and highly consistent Lucide icons
const getIcon = (type: string) => {
  const iconClass = "w-6 h-6 text-[#3B82F6]";

  switch (type) {
    case "trademark":
      return <Copyright className={iconClass} strokeWidth={2} />;
    case "corporate":
      return <Briefcase className={iconClass} strokeWidth={2} />;
    case "property":
      return <Home className={iconClass} strokeWidth={2} />;
    case "drafting":
      return <FileText className={iconClass} strokeWidth={2} />;
    case "loan":
      return <Handshake className={iconClass} strokeWidth={2} />;
    default:
      return <Hourglass className={iconClass} strokeWidth={2} />;
  }
};

export default function LegalCommunities() {
  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      id: 1,
      isFirst: true,
      title: "IPR, Trademark & Copyright Legal Community",
      category: "Intellectual Property",
      description: "Discuss brand registration, trademark filings, copyrights, and intellectual property rights protection with legal experts.",
      tags: ["TRADEMARK", "IP RIGHTS", "BRANDING"],
      membersCount: "+8.2k",
      onlineCount: 64,
      link: "https://chat.whatsapp.com/KhhmwpBnXQ05njEpChZFPN?mode=gi_t",
      icon: "trademark"
    },
    {
      id: 3,
      isFirst: false,
      title: "Property Law & Real Estate Legal Help",
      category: "Real Estate",
      description: "Get advice on property disputes, land registration, leasing agreements, inheritance laws, and real estate guidance.",
      tags: ["REAL ESTATE", "PROPERTY", "LEASING"],
      membersCount: "+12.4k",
      onlineCount: 145,
      link: "https://chat.whatsapp.com/H4SrztIjgt9GqU3ej9rXiC?mode=gi_t",
      icon: "property"
    },
    {
      id: 4,
      isFirst: false,
      title: "Legal Drafting - Agreements, Contracts & Wills",
      category: "Legal Drafting",
      description: "Collaborate and get support on drafting legal contracts, deeds, partnership agreements, and reviewing legal notices.",
      tags: ["DRAFTING", "CONTRACTS", "AGREEMENTS"],
      membersCount: "+7.8k",
      onlineCount: 48,
      link: "https://chat.whatsapp.com/CRUjrhp0zYJ1wmO1Yvk65I?mode=gi_t",
      icon: "drafting"
    },
    {
      id: 5,
      isFirst: false,
      title: "Loan Settlement & Debt Relief Support India",
      category: "Finance & Debt",
      description: "Seek professional legal guidance and discussions on loan restructuring, bank negotiations, and debt resolution.",
      tags: ["LOANS", "FINANCE", "DEBT SETTLEMENT"],
      membersCount: "+6.4k",
      onlineCount: 35,
      link: "https://chat.whatsapp.com/KS4wL8xEVsI1skDuRJCa4q?mode=gi_t",
      icon: "loan"
    },
    {
      id: 2,
      isFirst: false,
      title: "Corporate Law & Business Compliance Network",
      category: "Corporate",
      description: "Dedicated conversations around business structuring, corporate governance, company compliance, and legal frameworks.",
      tags: ["CORPORATE", "COMPLIANCE", "BUSINESS"],
      membersCount: "+9.5k",
      onlineCount: 112,
      link: "https://chat.whatsapp.com/LFys33bhoMcHzr1PaByDPS?mode=gi_t",
      icon: "corporate"
    },
    {
      id: 6,
      isFirst: false,
      isComingSoon: true,
      title: "New Legal Community",
      category: "Legal Support",
      description: "An exciting new legal discussion group is currently in development. Stay tuned for expert legal support and updates.",
      tags: ["LEGAL HELP", "UPCOMING", "COMMUNITY"],
      membersCount: "0",
      onlineCount: 0,
      link: "#",
      icon: "upcoming"
    }
  ];

  const displayCards = showAll ? cards : cards.slice(0, 4);

  return (
    <section id="communities" className="w-full bg-white py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#D49B00] text-xs sm:text-sm font-extrabold tracking-[0.15em] uppercase mb-3">
            ALL COMMUNITIES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2219] leading-tight tracking-tight">
            Explore our legal communities
          </h2>
        </div>

        {/* Cards Grid */}
        {cards.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {displayCards.map((card) => (
                <div 
                  key={card.id} 
                  className="rounded-[16px] p-4 sm:p-5 flex flex-col h-full shadow-2xl hover:translate-y-[-2px] hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] transition-all duration-300 relative overflow-hidden group border border-[#2D2A26]"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(5, 12, 28, 0.85) 10%, rgba(5, 12, 28, 0.1) 85%), linear-gradient(to top, rgba(5, 12, 28, 0.9) 0%, transparent 50%), url('/community_card_bg.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right center'
                  }}
                >
                  {/* Blur wrapper for Coming Soon */}
                  <div className={`flex flex-col h-full z-10 relative ${card.isComingSoon ? "filter blur-[4px] select-none pointer-events-none transition-all duration-300" : ""}`}>
                    
                    {/* Top Row: Icon aligned to the left */}
                    <div className="flex justify-start mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1C2033] border border-[#D4AF37]/30 text-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.15)]">
                        <div className="scale-75">
                          {getIcon(card.icon)}
                        </div>
                      </div>
                    </div>

                    {/* Heading */}
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-white mb-2 leading-[1.2] line-clamp-2">
                      {card.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-[13px] leading-snug mb-4 font-medium pr-2 line-clamp-2">
                      {card.description}
                    </p>

                    <div className="mt-auto">
                      {/* Member Stats & Status Row */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {/* Overlapping Avatars */}
                          <div className="flex -space-x-2">
                            <img src="/hero_portrait_1.png" alt="Member" className="w-6 h-6 rounded-full object-cover border border-[#050C1C]" />
                            <img src="/hero_portrait_2.png" alt="Member" className="w-6 h-6 rounded-full object-cover border border-[#050C1C]" />
                            <img src="/indian_man.webp" alt="Member" className="w-6 h-6 rounded-full object-cover border border-[#050C1C]" />
                          </div>
                          <span className="text-[12px] font-semibold text-gray-300">
                            <span className="text-[#D4AF37]">{card.membersCount}</span> members
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[12px] text-white font-medium">
                          <span className="w-2 h-2 rounded-full bg-[#00D26A] inline-block shadow-[0_0_6px_#00D26A]"></span>
                          {card.onlineCount} online
                        </div>
                      </div>

                      <div className="w-full h-px bg-white/10 mb-3"></div>

                      {/* Tags */}
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {card.tags.map((tag, idx) => (
                           <span 
                            key={idx} 
                            className="bg-transparent border border-[#D4AF37]/60 text-[#D4AF37] font-semibold text-[9px] tracking-wider px-2.5 py-1 rounded-full uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Join CTA Button */}
                      <a 
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-b from-[#E6CA76] to-[#CBA238] hover:from-[#EAD592] hover:to-[#D4B34B] text-[#1A1508] text-center font-bold py-2.5 px-4 rounded-[10px] text-[14px] transition-all duration-300 shadow-[0_2px_10px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_15px_rgba(212,175,55,0.3)] flex items-center justify-center gap-1.5"
                      >
                        Join the Community
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.459 5.705 1.459h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      </a>
                    </div>
                  </div>

                  {/* Coming Soon Overlay */}
                  {card.isComingSoon && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#050C1C]/70 backdrop-blur-[2px] p-6 text-center transition-all duration-300">
                      <div className="bg-[#1A1A1A]/95 border border-white/10 text-white rounded-[14px] px-6 py-5 shadow-2xl flex flex-col items-center max-w-[85%] scale-95 group-hover:scale-100 transition-all duration-300">
                        <span className="bg-[#D4AF37] text-black font-extrabold text-[10px] tracking-[0.2em] px-3 py-1 rounded-[4px] uppercase mb-3">
                          COMING SOON
                        </span>
                        <h4 className="font-extrabold text-lg text-white mb-1">
                          Stay Tuned
                        </h4>
                        <p className="text-xs text-gray-400 font-medium">
                          Launch phase in progress. Stay tuned!
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* View All Button */}
            {cards.length > 3 && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-white hover:bg-gray-50 border border-gray-200 text-[#2D2219] font-bold py-3.5 px-8 rounded-full shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
                >
                  <span>{showAll ? "Show less communities" : "View all communities"}</span>
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`w-4 h-4 stroke-current stroke-[3] transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-[#EAE5D8]/30 rounded-[16px] border border-dashed border-[#DFD9CC]">
            <p className="text-[#6E665E] font-medium text-lg">No communities found.</p>
          </div>
        )}

      </div>
    </section>
  );
}
