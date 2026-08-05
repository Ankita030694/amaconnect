"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NewNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Interviews", href: "/interviews" },
    { name: "Legal Q&A", href: "/ask-me-anything" },
    { name: "Communities", href: "/communities" },
    { name: "Blogs", href: "/blog" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-[#FDFBF0]/85 via-[#FFFDF5]/90 to-[#FDFBF0]/85 backdrop-blur-md border-b border-[#D4AF37]/25 sticky top-0 z-50 transition-all duration-300 shadow-[0_4px_30px_rgba(212,175,55,0.04)] supports-[backdrop-filter]:bg-[#FDFBF0]/75">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Left Section: Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
              <Image
                src="/logo2.svg"
                alt="AMA CONNECTS"
                width={140}
                height={44}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Center Section: Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-[14px] lg:text-[15px] font-bold tracking-wide transition-all duration-300 py-2.5 px-1 ${isActive
                    ? "text-[#D4AF37] drop-shadow-[0_2px_8px_rgba(212,175,55,0.15)]"
                    : "text-[#2D2319]/80 hover:text-[#D4AF37]"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_1px_6px_rgba(212,175,55,0.8)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Section: Apps Capsule & Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Apps Pill Container */}
            <div className="flex items-center bg-[#231A11]/90 backdrop-blur-sm px-4.5 py-2.5 rounded-full border border-[#D4AF37]/35 shadow-[0_2px_12px_rgba(212,175,55,0.06)] select-none gap-3.5 hover:border-[#D4AF37]/65 transition-all duration-300">
              {/* Google Play Store */}
              <a
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                title="Get it on Google Play"
                aria-label="Get it on Google Play"
                className="flex items-center justify-center text-white hover:scale-110 transition-transform active:scale-95 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]">
                  <path
                    d="M3.25 1.55a1.73 1.73 0 0 0-.47 1.22v18.46a1.73 1.73 0 0 0 .47 1.22l.06.06L13.88 12v-.15L3.31 1.5z"
                    fill="#00F0FF"
                  />
                  <path
                    d="M17.41 15.58L13.88 12v-.15L17.41 8.3l.08.05 4.17 2.37c1.19.67 1.19 1.78 0 2.46l-4.17 2.37-.08.03z"
                    fill="#FFC700"
                  />
                  <path
                    d="M17.49 15.53L13.88 11.92L3.25 22.45a1.44 1.44 0 0 0 1.83.06l12.41-7.07"
                    fill="#FF003F"
                  />
                  <path
                    d="M17.49 8.35L5.08 1.28A1.44 1.44 0 0 0 3.25 1.34L13.88 11.93l3.61-3.58"
                    fill="#00E676"
                  />
                </svg>
              </a>

              {/* Vertical Divider */}
              <div className="w-[1px] h-5 bg-white/20"></div>

              {/* Apple App Store */}
              <a
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
                target="_blank"
                rel="noopener noreferrer"
                title="Download on the App Store"
                aria-label="Download on the App Store"
                className="flex items-center justify-center text-white hover:scale-110 transition-transform active:scale-95 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] fill-white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Mobile Hamburguer / Actions Toggle */}
          <div className="flex md:hidden items-center gap-3">
            {/* Apps Pill Container (Slightly smaller for mobile) */}
            <div className="flex sm:hidden items-center bg-[#231A11]/90 backdrop-blur-sm p-1 rounded-full border border-[#D4AF37]/35 shadow-[0_2px_12px_rgba(212,175,55,0.06)] select-none gap-0.5">
              <a
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="flex items-center justify-center text-white px-3.5 py-1.5 hover:bg-white/10 rounded-full transition-all active:scale-95 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                  <path
                    d="M3.25 1.55a1.73 1.73 0 0 0-.47 1.22v18.46a1.73 1.73 0 0 0 .47 1.22l.06.06L13.88 12v-.15L3.31 1.5z"
                    fill="#00F0FF"
                  />
                  <path
                    d="M17.41 15.58L13.88 12v-.15L17.41 8.3l.08.05 4.17 2.37c1.19.67 1.19 1.78 0 2.46l-4.17 2.37-.08.03z"
                    fill="#FFC700"
                  />
                  <path
                    d="M17.49 15.53L13.88 11.92L3.25 22.45a1.44 1.44 0 0 0 1.83.06l12.41-7.07"
                    fill="#FF003F"
                  />
                  <path
                    d="M17.49 8.35L5.08 1.28A1.44 1.44 0 0 0 3.25 1.34L13.88 11.93l3.61-3.58"
                    fill="#00E676"
                  />
                </svg>
              </a>
              <div className="w-[1px] h-4 bg-white/20 self-center"></div>
              <a
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                className="flex items-center justify-center text-white px-3.5 py-1.5 hover:bg-white/10 rounded-full transition-all active:scale-95 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </nav>
  );
}
