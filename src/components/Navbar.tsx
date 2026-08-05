"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import QRCode from "react-qr-code";

interface LawyerInterview {
  _id?: string;
  title: string;
  lawyer: string;
  image: string;
  slug: string;
  duration?: string;
  date?: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAppModal, setShowAppModal] = useState(false);
  const [interviews, setInterviews] = useState<LawyerInterview[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const res = await fetch("/api/interviews");
        if (res.ok) {
          const data = await res.json();
          setInterviews(data.slice(0, 3));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchInterviews();
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Interviews", href: "/interviews" },
    { name: "Legal Q&A", href: "/ask-me-anything" },
    { name: "Communities", href: "/communities" },
    { name: "Blogs", href: "/blog" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" }
  ];

  const getOptimizedImageSrc = (src: string | undefined | null, width: number, fallback: string = "/ashishbhay.png"): string => {
    if (!src || src.trim() === "") return fallback;
    if (src.includes("/api/images/")) return `${src}?w=${width}`;
    return src;
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-8 transition-all duration-300 pt-4 sm:pt-6 ${isScrolled ? "pb-2" : "pb-3"}`}>
        <div className="max-w-7xl mx-auto">
          <div className={`rounded-[16px] sm:rounded-[20px] border border-gray-200 flex items-center justify-between px-4 sm:px-6 transition-all duration-300 bg-[#F8F8F5]/80 backdrop-blur-md ${isScrolled ? "py-2 shadow-md" : "py-3 shadow-none"}`}>

            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <motion.div 
                  initial={{ opacity: 0, x: -8 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.4, type: "tween" }}
                >
                  <Image
                    src="/logo2.svg"
                    alt="AMA CONNECTS"
                    width={110}
                    height={40}
                    className="h-11 w-auto object-contain"
                  />
                </motion.div>
              </Link>
            </div>

            {/* Links - Hidden on Mobile */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const isInterviews = link.name === "Interviews";

                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => isInterviews && setShowDropdown(true)}
                    onMouseLeave={() => isInterviews && setShowDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`relative font-bold text-[14px] xl:text-[15px] tracking-tight transition-colors py-1.5 px-3.5 block ${isActive ? "text-[#D4AF37] bg-[#2D2219] shadow-sm rounded-full" : "text-gray-800 hover:text-[#2D2219]"}`}
                    >
                      {link.name}
                      {!isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                      )}
                    </Link>
                    
                    {/* Desktop Dropdown for Interviews */}
                    {isInterviews && (
                      <AnimatePresence>
                        {showDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[340px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden cursor-default"
                          >
                            <div className="p-4 bg-[#F8F8F5] border-b border-gray-100">
                              <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest">Recent Interviews</span>
                            </div>
                            <div className="flex flex-col">
                              {interviews.length > 0 ? interviews.map((interview) => (
                                <Link 
                                  key={interview._id} 
                                  href={`/interviews/${interview.slug}`}
                                  className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                                >
                                  <img 
                                    src={getOptimizedImageSrc(interview.image, 100)} 
                                    alt={interview.lawyer} 
                                    className="w-12 h-12 rounded-full object-cover border border-gray-200"
                                  />
                                  <div className="flex flex-col">
                                    <span className="font-bold text-sm text-gray-900 line-clamp-1">{interview.title}</span>
                                    <span className="text-xs text-gray-500 font-medium">{interview.lawyer}</span>
                                  </div>
                                </Link>
                              )) : (
                                <div className="p-4 text-center text-sm text-gray-500">Loading...</div>
                              )}
                            </div>
                            <Link href="/interviews" className="block w-full text-center p-3 text-sm font-bold text-[#D4AF37] hover:bg-gray-50 transition-colors bg-white">
                              View All Interviews
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Section: CTA & Burger */}
            <div className="flex items-center gap-3 sm:gap-4">
              
              <div className="hidden lg:block w-[1px] h-6 bg-gray-200 mr-2"></div>
              
              <button 
                onClick={() => setShowAppModal(true)}
                className="hidden sm:block bg-[#D4AF37] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-[13px] sm:text-[14px] shadow-sm hover:bg-[#C09F32] hover:shadow-md transition-all active:scale-95 text-center tracking-tight"
              >
                Get the App
              </button>

              {/* Mobile Burger Icon */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-[110%] left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-semibold text-lg transition-colors px-3 py-2 rounded-xl ${pathname === link.href ? "bg-[#2D2219] text-[#D4AF37] shadow-sm" : "text-gray-800 hover:text-[#D4AF37]"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                className="w-full bg-[#D4AF37] text-white px-6 py-3.5 rounded-xl font-bold text-base mt-2 text-center"
                onClick={() => {
                  setIsMenuOpen(false);
                  setShowAppModal(true);
                }}
              >
                Get the App
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* App Download Modal */}
      <AnimatePresence>
        {showAppModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setShowAppModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              <button 
                onClick={() => setShowAppModal(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors z-10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
              
              <div className="p-8 flex flex-col items-center text-center bg-[#FDFBF0]">
                <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center mb-4 border border-[#D4AF37]/30">
                  <Image src="/logo2.svg" alt="AMA Connect" width={40} height={40} className="object-contain opacity-80" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Get AMA Connect App</h3>
                <p className="text-gray-500 text-sm mb-6">Scan the QR code to download the app and connect with verified legal experts instantly.</p>
                
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-6">
                  <QRCode value="https://amaconnect.in/get" size={140} style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
                </div>
                
                <div className="flex gap-3 w-full">
                  <a href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" rel="noopener noreferrer" className="flex-1 bg-black text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" /></svg>
                    <div className="text-left flex flex-col leading-none">
                      <span className="text-[9px] text-gray-300">Download on the</span>
                      <span className="text-[13px] font-bold">App Store</span>
                    </div>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" rel="noopener noreferrer" className="flex-1 bg-black text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <path d="M3.25 1.55a1.73 1.73 0 0 0-.47 1.22v18.46a1.73 1.73 0 0 0 .47 1.22l.06.06L13.88 12v-.15L3.31 1.5z" fill="#00F0FF" />
                      <path d="M17.41 15.58L13.88 12v-.15L17.41 8.3l.08.05 4.17 2.37c1.19.67 1.19 1.78 0 2.46l-4.17 2.37-.08.03z" fill="#FFC700" />
                      <path d="M17.49 15.53L13.88 11.92L3.25 22.45a1.44 1.44 0 0 0 1.83.06l12.41-7.07" fill="#FF003F" />
                      <path d="M17.49 8.35L5.08 1.28A1.44 1.44 0 0 0 3.25 1.34L13.88 11.93l3.61-3.58" fill="#00E676" />
                    </svg>
                    <div className="text-left flex flex-col leading-none">
                      <span className="text-[9px] text-gray-300">GET IT ON</span>
                      <span className="text-[13px] font-bold">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
