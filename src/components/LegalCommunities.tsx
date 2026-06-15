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
  const [searchQuery, setSearchQuery] = useState("");

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

  // Filter cards based on search query
  const filteredCards = cards.filter((card) => {
    const query = searchQuery.toLowerCase();
    return (
      card.title.toLowerCase().includes(query) ||
      card.category.toLowerCase().includes(query) ||
      card.description.toLowerCase().includes(query) ||
      card.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  return (
    <section id="communities" className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#D49B00] text-xs sm:text-sm font-extrabold tracking-[0.15em] uppercase mb-3">
            ALL COMMUNITIES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2219] leading-tight tracking-tight mb-8">
            Search across all legal communities
          </h2>
          
          {/* Premium Search Bar */}
          <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto relative mt-4">
            <div className="flex items-center bg-[#F5ECD5] border border-[#EAE0CA] rounded-[14px] shadow-[0_6px_24px_rgba(42,32,26,0.04)] hover:shadow-[0_8px_30px_rgba(42,32,26,0.08)] focus-within:shadow-[0_8px_30px_rgba(42,32,26,0.08)] transition-all duration-300">
              <input 
                type="text" 
                placeholder="Search any community" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none pl-6 pr-28 py-4 sm:py-5 text-sm sm:text-base text-[#2A201A] placeholder-[#8C8276] font-medium"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#2A201A] hover:bg-[#1E1714] text-white font-bold px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-[10px] text-sm sm:text-base transition-colors duration-200 shadow-sm">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        {filteredCards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCards.map((card) => (
              <div 
                key={card.id} 
                className="bg-[#EAE5D8] rounded-[16px] p-6 sm:p-7 flex flex-col h-full shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#DFD9CC]/50 hover:translate-y-[-4px] hover:shadow-[0_12px_30px_rgba(44,37,32,0.12)] transition-all duration-300 relative overflow-hidden group"
              >
                {/* Blur wrapper for Coming Soon */}
                <div className={`flex flex-col h-full ${card.isComingSoon ? "filter blur-[4px] select-none pointer-events-none transition-all duration-300" : ""}`}>
                  {/* Dynamic Icon with Premium Styling */}
                  <div className="w-11 h-11 rounded-[8px] flex items-center justify-center mb-6 shadow-sm bg-white border border-[#3B82F6]/20">
                    {getIcon(card.icon)}
                  </div>

                  {/* Content */}
                  <h3 className="text-[22px] sm:text-[24px] font-extrabold text-[#2A201A] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#6E665E] text-sm sm:text-[15px] leading-relaxed mb-5 font-medium min-h-[60px]">
                    {card.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {card.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="bg-[#D49B00] text-white font-bold text-[10px] tracking-wider px-3 py-1.5 rounded-[4px] uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Member Stats & Status Row */}
                  <div className="flex items-center justify-between border-t border-[#DFD9CC]/60 pt-5 mt-auto mb-5">
                    <div className="flex items-center gap-2.5">
                      <Image 
                        src="/peoples.png" 
                        alt="Members" 
                        width={56} 
                        height={24} 
                        style={{ height: 'auto' }}
                        className="object-contain shrink-0" 
                      />
                      <span className="text-xs sm:text-sm font-semibold text-[#6E665E]">
                        <span className="text-[#00A859] font-bold">{card.membersCount}</span> members
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#2A201A] font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#00A859] inline-block animate-pulse"></span>
                      {card.onlineCount} online
                    </div>
                  </div>

                  {/* Join CTA Button */}
                  <a 
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#2A201A] hover:bg-[#1E1714] text-white text-center font-bold py-3.5 rounded-[8px] text-sm sm:text-base transition-colors duration-200 shadow-sm hover:shadow-md block"
                  >
                    Join the Community
                  </a>
                </div>

                {/* Coming Soon Overlay */}
                {card.isComingSoon && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 p-6 text-center transition-all duration-300">
                    <div className="bg-[#2A201A]/95 backdrop-blur-md border border-white/10 text-white rounded-[14px] px-6 py-5 shadow-lg flex flex-col items-center max-w-[85%] scale-95 group-hover:scale-100 transition-all duration-300">
                      <span className="bg-[#D49B00] text-white font-extrabold text-[10px] tracking-[0.2em] px-3 py-1 rounded-[4px] uppercase mb-3">
                        COMING SOON
                      </span>
                      <h4 className="font-extrabold text-lg text-white mb-1">
                        Stay Tuned
                      </h4>
                      <p className="text-xs text-gray-300 font-medium">
                        Launch phase in progress. Stay tuned!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#EAE5D8]/30 rounded-[16px] border border-dashed border-[#DFD9CC]">
            <p className="text-[#6E665E] font-medium text-lg">No communities matching "{searchQuery}" found.</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-4 text-[#D49B00] font-bold hover:underline"
            >
              Clear search filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
