"use client";

import Link from "next/link";
import { Copyright, Briefcase, Home, FileText } from "lucide-react";

const getIcon = (type: string) => {
  const baseClass = "w-7 h-7 sm:w-8 sm:h-8";

  switch (type) {
    case "corporate":
      return <Briefcase className={`${baseClass} text-[#1A73E8]`} strokeWidth={1.5} />;
    case "startups":
      return <Copyright className={`${baseClass} text-[#D4AF37]`} strokeWidth={1.5} />;
    case "ip":
      return <FileText className={`${baseClass} text-[#D93025]`} strokeWidth={1.5} />;
    case "employment":
      return <Home className={`${baseClass} text-[#0277BD]`} strokeWidth={1.5} />;
    default:
      return <Copyright className={`${baseClass} text-[#D4AF37]`} strokeWidth={1.5} />;
  }
};

export default function CommunitiesRow() {
  const cards = [
    {
      id: 1,
      title: "Corporate Law Circle",
      link: "https://chat.whatsapp.com/KhhmwpBnXQ05njEpChZFPN?mode=gi_t",
      icon: "corporate",
      members: "1.3K"
    },
    {
      id: 2,
      title: "Startups & Founders",
      link: "https://chat.whatsapp.com/LFys33bhoMcHzr1PaByDPS?mode=gi_t",
      icon: "startups",
      members: "980"
    },
    {
      id: 3,
      title: "IP & Trademarks",
      link: "https://chat.whatsapp.com/H4SrztIjgt9GqU3ej9rXiC?mode=gi_t",
      icon: "ip",
      members: "1.1K"
    },
    {
      id: 4,
      title: "Employment Law",
      link: "https://chat.whatsapp.com/CRUjrhp0zYJ1wmO1Yvk65I?mode=gi_t",
      icon: "employment",
      members: "870"
    }
  ];

  return (
    <section className="w-full flex flex-col font-sans bg-[#FCFAf5] sm:bg-white border border-[#EAE5D8] rounded-[2rem] p-4 sm:p-6 shadow-sm h-full">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          <h3 className="text-xl sm:text-[22px] font-extrabold text-[#1E1712] tracking-tight">WhatsApp Communities</h3>
        </div>
        <Link href="/communities" className="text-sm font-extrabold text-[#D4AF37] hover:text-[#B8860B] transition-colors tracking-wide">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {cards.map((card) => (
          <a
            key={card.id}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-[#EAE5D8] rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md hover:border-[#25D366]/40 group"
          >
            <div className="w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-[1rem] sm:rounded-[1.25rem] bg-[#FDF9F2] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shadow-inner border border-[#F2E8D3]/50 relative">
              {getIcon(card.icon)}
              {/* Small WhatsApp badge on the icon box */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full p-0.5 shadow-sm border border-gray-100 flex items-center justify-center">
                <svg className="w-full h-full text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </div>
            </div>
            <h4 className="font-extrabold text-[#1E1712] text-xs sm:text-[13px] leading-snug mb-2 px-1">
              {card.title}
            </h4>
            <span className="text-[10px] sm:text-[11px] text-[#A89F95] font-bold tracking-wide">
              {card.members} members
            </span>
          </a>
        ))}
      </div>

      {/* CTA Section (From Screenshot 2) */}
      <div className="mt-10 sm:mt-12 flex flex-col items-center text-center px-4 pb-2">
        <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#29221C] mb-4 tracking-tight">
          Join conversations that matter
        </h3>
        <p className="text-[15px] sm:text-[17px] leading-relaxed text-[#64748B] max-w-[600px] mb-8 font-medium">
          Connect with active WhatsApp communities where people discuss real legal issues, share experiences, and help each other with practical guidance.
        </p>
        <Link 
          href="/communities" 
          className="bg-[#29221C] text-white px-7 py-3.5 rounded-full font-bold text-[15px] flex items-center justify-center gap-2.5 hover:bg-[#1E1712] hover:scale-[1.02] transition-all duration-300 shadow-md"
        >
          Powered through WhatsApp
          <svg className="w-[22px] h-[22px] text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
