"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Mic, Newspaper, Phone } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Interviews", href: "/interviews", icon: Mic },
    { name: "News", href: "/news", icon: Newspaper },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <div 
      className="md:hidden fixed bottom-0 left-0 right-0 bg-[#FDFBF0]/95 backdrop-blur-md border-t border-[#D4AF37]/25 z-50 shadow-[0_-4px_20px_rgba(212,175,55,0.08)]"
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0.5rem)' }}
    >
      <div className="flex items-center overflow-x-auto hide-scrollbar px-2 py-2 gap-1.5 snap-x snap-mandatory">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`snap-center flex flex-col items-center justify-center min-w-[72px] px-1 py-1.5 rounded-xl transition-all duration-300 ${
                isActive
                  ? "text-[#D4AF37] bg-[#D4AF37]/10 scale-105"
                  : "text-[#2D2319]/60 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 active:scale-95"
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${isActive ? "stroke-[2.5px]" : "stroke-[2px]"}`} />
              <span className={`text-[10px] whitespace-nowrap ${isActive ? "font-bold" : "font-medium"}`}>
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
