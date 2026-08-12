"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Interviews", href: "/interviews" },
    { name: "News", href: "/news" },
    { name: "Communities", href: "/communities" },
    { name: "Blogs", href: "/blog" },
    { name: "Legal Q&A", href: "/ask-me-anything" },
    { name: "Contact", href: "/contact" }
  ];

  const getOptimizedImageSrc = (src: string | undefined | null, width: number, fallback: string = "/ashishbhay.png"): string => {
    if (!src || src.trim() === "") return fallback;
    if (src.includes("/api/images/")) return `${src}?w=${width}`;
    return src;
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-2`}>
        <div className="max-w-7xl mx-auto">
          <div className={`rounded-[16px] sm:rounded-[20px] border border-gray-200 flex items-center justify-between px-4 sm:px-6 transition-all duration-300 bg-[#F8F8F5]/80 backdrop-blur-md transform-gpu ${isScrolled ? "py-2 shadow-md" : "py-3 shadow-none"}`}>

            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="animate-in fade-in slide-in-from-left-2 duration-500">
                  <Image
                    src="/logo2.svg"
                    alt="AMA CONNECTS"
                    width={110}
                    height={40}
                    priority
                    fetchPriority="high"
                    className="h-11 w-auto object-contain"
                  />
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-5 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative font-bold text-[14px] xl:text-[15px] tracking-tight transition-colors py-1.5 px-3.5 block group ${isActive ? "text-[#D4AF37] bg-[#2D2219] shadow-sm rounded-full" : "text-gray-800 hover:text-[#2D2219]"}`}
                  >
                    {link.name}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Section: CTA & Burger */}
            <div className="flex items-center gap-3 sm:gap-4">
              
              <div className="hidden lg:block w-[1px] h-6 bg-gray-200 mr-2"></div>
              
              <div className="flex items-center gap-1.5">
                <a href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 backdrop-blur-md border border-black/5 transition-all flex items-center justify-center active:scale-95 shadow-sm" aria-label="Download on the App Store">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" /></svg>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 backdrop-blur-md border border-black/5 transition-all flex items-center justify-center active:scale-95 shadow-sm" aria-label="Get it on Google Play">
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M3.25 1.55a1.73 1.73 0 0 0-.47 1.22v18.46a1.73 1.73 0 0 0 .47 1.22l.06.06L13.88 12v-.15L3.31 1.5z" fill="#00F0FF" />
                    <path d="M17.41 15.58L13.88 12v-.15L17.41 8.3l.08.05 4.17 2.37c1.19.67 1.19 1.78 0 2.46l-4.17 2.37-.08.03z" fill="#FFC700" />
                    <path d="M17.49 15.53L13.88 11.92L3.25 22.45a1.44 1.44 0 0 0 1.83.06l12.41-7.07" fill="#FF003F" />
                    <path d="M17.49 8.35L5.08 1.28A1.44 1.44 0 0 0 3.25 1.34L13.88 11.93l3.61-3.58" fill="#00E676" />
                  </svg>
                </a>
              </div>

              {/* Mobile WhatsApp Button */}
              <a 
                href="https://wa.me/918700343611?text=Hi!%20I%20have%20a%20query%20from%20the%20AMA%20Connect%20app." 
                target="_blank" 
                rel="noopener noreferrer"
                className="lg:hidden p-2 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors flex items-center justify-center"
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>

              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>
          </div>

          {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="lg:hidden w-full overflow-hidden animate-in slide-in-from-top-4 fade-in duration-300 mt-3">
                <div className="bg-white border border-gray-200 rounded-[16px] shadow-lg p-4 flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`px-4 py-3 rounded-xl font-bold text-[15px] transition-all ${
                          isActive 
                            ? "bg-[#2D2219] text-[#D4AF37]" 
                            : "text-gray-800 hover:bg-gray-50 active:bg-gray-100"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}

                </div>
              </div>
            )}

        </div>
      </nav>


    </>
  );
}
