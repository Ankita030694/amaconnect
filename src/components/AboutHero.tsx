"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Clock, ShieldCheck, ShieldEllipsis, Sun, Bell, Scale, Map, Building } from "lucide-react";
import TrustStatBadge from "./TrustStatBadge";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

export default function AboutHero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Use springs for smooth interpolation
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  // Map normalized mouse positions (-0.5 to 0.5) to rotation angles
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["18deg", "-18deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-18deg", "18deg"]);

  // Glare translations for deep 3D effect
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["-150%", "150%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["-150%", "150%"]);

  const hasInteracted = useRef(false);
  const animX = useRef<any>(null);
  const animY = useRef<any>(null);

  useEffect(() => {
    let isActive = true;
    
    // Continuous floating animation to emphasize 3D interactivity
    const sequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      
      while (isActive && !hasInteracted.current) {
        // Deep swing right/down
        animX.current = animate(x, 0.45, { duration: 1.8, ease: "easeInOut" });
        animY.current = animate(y, 0.35, { duration: 1.8, ease: "easeInOut" });
        await Promise.all([animX.current, animY.current]);
        if (!isActive || hasInteracted.current) break;

        // Deep swing left/up
        animX.current = animate(x, -0.45, { duration: 2.2, ease: "easeInOut" });
        animY.current = animate(y, -0.35, { duration: 2.2, ease: "easeInOut" });
        await Promise.all([animX.current, animY.current]);
        if (!isActive || hasInteracted.current) break;
        
        // Gentle center cross
        animX.current = animate(x, 0.2, { duration: 1.5, ease: "easeInOut" });
        animY.current = animate(y, -0.15, { duration: 1.5, ease: "easeInOut" });
        await Promise.all([animX.current, animY.current]);
        if (!isActive || hasInteracted.current) break;
      }
    };
    
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      sequence();
    }

    return () => {
      isActive = false;
      animX.current?.stop();
      animY.current?.stop();
    };
  }, [x, y]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    hasInteracted.current = true;
    animX.current?.stop();
    animY.current?.stop();
    
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / rect.width) - 0.5;
    const yPct = (mouseY / rect.height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="w-full bg-[#FDFBF7] pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Text Column */}
        <div className="flex-1 flex flex-col items-center md:items-start w-full order-1 text-center md:text-left">
          {/* Pill Badge */}
          <div className="inline-flex items-center justify-center border border-[#EAE5D8] rounded-full px-4 py-1.5 mb-6">
            <span className="text-[10px] sm:text-xs font-bold text-gray-800 tracking-wider uppercase">
              Trusted by Thousands of People & Businesses Across India
            </span>
          </div>

          {/* Ratings & Downloads */}
          <div className="mb-8">
             <TrustStatBadge />
          </div>

          {/* Headline */}
          <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-extrabold text-[#2D2219] leading-[1.05] mb-6 tracking-tight">
            India's Smarter Way to Get Legal Help.
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 font-medium mb-6">
            One app. Verified lawyers. Real answers.
          </p>

          {/* Powered by */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-12">
            <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-widest">Powered by</span>
            <a 
              href="https://www.amalegalsolutions.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-[#F8F5EE] border border-[#EAE5D8] rounded-md hover:bg-[#F0EBE0] hover:shadow-sm transition-all cursor-pointer"
            >
               {/* Crop the logo.svg to only show the golden cube symbol */}
               <div className="w-[24px] h-[20px] overflow-hidden relative shrink-0">
                  <img src="/logo.svg" alt="AMA Logo" className="absolute top-0 left-0 h-[20px] w-auto max-w-none" />
               </div>
               <span className="text-xs sm:text-sm font-bold text-[#2D2219] tracking-tight">AMA Legal Solutions</span>
            </a>
          </div>

          {/* Mission */}
          <div className="mb-12 w-full flex flex-col items-center md:items-start">
            <div className="w-12 h-1 bg-[#C9A227] rounded-full mb-4"></div>
            <h2 className="text-xs font-bold text-[#C9A227] uppercase tracking-widest mb-2">Our Mission</h2>
            <p className="text-2xl sm:text-3xl font-medium text-[#2D2219] leading-tight max-w-lg">
              Making legal help simple, fast and accessible for everyone.
            </p>
          </div>

          {/* 3 Icons Row */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-8 sm:gap-6 w-full pt-8 border-t border-[#EAE5D8]">
            <div className="flex flex-col items-center md:items-start gap-3 flex-1">
              <div className="w-12 h-12 rounded-full border-2 border-[#C9A227] flex items-center justify-center text-[#C9A227]">
                <Clock className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-sm text-[#2D2219] mb-1">Fast Answers</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Get guidance within<br className="hidden sm:block" /> 45 minutes.</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3 flex-1">
              <div className="w-12 h-12 rounded-full border-2 border-[#C9A227] flex items-center justify-center text-[#C9A227]">
                <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-sm text-[#2D2219] mb-1">Verified Experts</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Connect with trusted<br className="hidden sm:block" /> legal professionals.</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3 flex-1">
              <div className="w-12 h-12 rounded-full border-2 border-[#C9A227] flex items-center justify-center text-[#C9A227]">
                <ShieldEllipsis className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-sm text-[#2D2219] mb-1">Secure & Private</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Your privacy and data<br className="hidden sm:block" /> are always protected.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Phone Mockup (3D CSS Tilt) */}
        <div 
          className="flex-1 w-full order-2 flex justify-center md:justify-end relative min-h-[500px] sm:min-h-[600px] lg:min-h-[750px] mt-8 md:mt-0 [perspective:1200px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
           {/* Decorative background glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#C9A227]/15 rounded-full blur-3xl md:blur-[100px] pointer-events-none"></div>
           
           <motion.div 
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-full origin-center drop-shadow-md md:drop-shadow-2xl z-20 pointer-events-none sm:pointer-events-auto"
             style={{
               rotateX,
               rotateY,
               transformStyle: "preserve-3d"
             }}
           >
              {/* HTML Phone Mockup replacing the image */}
              <div className="transform rotate-[-4deg] scale-90 sm:scale-[0.85] lg:scale-[0.95] origin-center [transform-style:preserve-3d]">
                 <div className="relative w-[300px] h-[640px] bg-[#050505] rounded-[3rem] border-8 border-[#333] shadow-inner overflow-hidden flex flex-col font-sans pointer-events-auto [transform-style:preserve-3d]">
                    
                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[28px] bg-black rounded-b-[1.2rem] z-50 shadow-[0_10px_20px_rgba(0,0,0,0.5)] [transform:translateZ(60px)]"></div>
                    
                    {/* Screen Content - Dark Mode */}
                    <div className="w-full h-full bg-[#241A13] text-white flex flex-col pt-12 relative [transform-style:preserve-3d]">
                        
                        {/* Glare effect */}
                        <motion.div 
                          className="absolute inset-0 z-40 pointer-events-none mix-blend-overlay"
                          style={{
                             background: "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)",
                             x: glareX,
                             y: glareY
                          }}
                        />

                        {/* Top Bar */}
                        <div className="flex items-center justify-between px-5 mb-5 border-b border-[#4A382A] pb-3 relative z-10 [transform:translateZ(20px)]">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full border border-[#C9A227]/50 bg-[#33261C] overflow-hidden shrink-0">
                                  <img src="/peoples.png" className="w-full h-full object-cover scale-[1.5]" alt="User" />
                                </div>
                                <span className="font-semibold text-sm tracking-wide text-gray-100">Hi, User</span>
                            </div>
                            <div className="flex items-center gap-3.5">
                                <Sun className="w-[18px] h-[18px] text-[#C9A227]" />
                                <div className="relative">
                                  <Bell className="w-[18px] h-[18px] text-[#C9A227]" />
                                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-[#241A13]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto px-5 flex flex-col gap-4 no-scrollbar pb-4 relative z-10 [transform-style:preserve-3d]">
                           {/* Banner */}
                           <div className="bg-gradient-to-br from-[#38281C] to-[#241A13] rounded-2xl p-4 flex justify-between relative overflow-hidden border border-[#4A382A] shadow-[0_10px_20px_rgba(0,0,0,0.3)] [transform:translateZ(40px)]">
                               <div className="relative z-10 flex flex-col pt-1">
                                  <div className="flex items-center gap-1.5 mb-2">
                                      <div className="w-4 h-4 bg-[#241A13] rounded-sm flex items-center justify-center border border-[#4A382A]">
                                          <ShieldCheck className="w-2.5 h-2.5 text-[#C9A227]" />
                                      </div>
                                      <span className="text-[7px] text-[#C9A227] font-bold uppercase tracking-widest">AMA Legal Solutions</span>
                                  </div>
                                  <h2 className="text-xl font-bold leading-tight text-white z-10 relative">India's First<br/>Legal App</h2>
                               </div>
                               <div className="absolute top-0 right-0 h-full w-[140px] pointer-events-none overflow-hidden">
                                  {/* India Flag Graphic approximation using CSS gradients */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF9933]/30 via-white/10 to-[#138808]/30 blur-xl"></div>
                                  {/* Chakra approximation */}
                                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-2 border-blue-500/20 rounded-full blur-[1px]"></div>
                               </div>
                           </div>

                           {/* Two Square Cards */}
                           <div className="flex gap-3 [transform-style:preserve-3d]">
                               <div className="flex-1 bg-gradient-to-b from-[#33261C] to-[#241A13] rounded-2xl p-4 border border-[#4A382A] flex flex-col justify-between h-[130px] group cursor-pointer hover:border-[#C9A227] transition-colors shadow-lg [transform:translateZ(30px)]">
                                  <div className="flex items-center gap-2 mb-2">
                                     <div className="w-7 h-7 rounded-full overflow-hidden border border-[#C9A227]/50 bg-[#241A13]">
                                       <img src="/peoples.png" className="w-full h-full object-cover scale-[2]" alt="Lawyer" />
                                     </div>
                                     <Scale className="w-4 h-4 text-[#C9A227]" />
                                  </div>
                                  <div>
                                     <h3 className="text-xs font-semibold mb-1 text-gray-200">Connect to Lawyer</h3>
                                     <p className="text-[9px] text-gray-400 leading-tight">Trusted advice from verified experts</p>
                                  </div>
                               </div>
                               <div className="flex-1 bg-gradient-to-b from-[#33261C] to-[#241A13] rounded-2xl p-4 border border-[#4A382A] flex flex-col justify-between h-[130px] group cursor-pointer hover:border-[#C9A227] transition-colors shadow-lg [transform:translateZ(35px)]">
                                  <div className="flex justify-between items-start mb-2">
                                     <div className="w-8 h-8 rounded-lg bg-[#241A13] flex items-center justify-center relative border border-[#C9A227]/30">
                                        <Map className="w-4 h-4 text-blue-400" />
                                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-[#241A13]"></div>
                                     </div>
                                  </div>
                                  <div>
                                     <h3 className="text-xs font-semibold mb-1 text-gray-200">Track My Case</h3>
                                     <p className="text-[9px] text-gray-400 leading-tight">Live status & case progress</p>
                                  </div>
                               </div>
                           </div>

                           {/* Stats Banner */}
                           <div className="border border-[#C9A227]/40 rounded-2xl p-4 flex justify-between items-center text-center bg-[#241A13] shadow-[0_10px_20px_rgba(201,162,39,0.05)] [transform:translateZ(20px)]">
                               <div className="flex-1 border-r border-[#4A382A]">
                                  <div className="font-bold text-[15px] text-white">200+</div>
                                  <div className="text-[9px] text-[#C9A227] font-medium mt-0.5">Case handled</div>
                               </div>
                               <div className="flex-1 border-r border-[#4A382A]">
                                  <div className="font-bold text-[15px] text-white">40+</div>
                                  <div className="text-[9px] text-[#C9A227] font-medium mt-0.5">Year Experience</div>
                               </div>
                               <div className="flex-1">
                                  <div className="font-bold text-[15px] text-white">200+</div>
                                  <div className="text-[9px] text-[#C9A227] font-medium mt-0.5">Client Served</div>
                               </div>
                           </div>

                           {/* Trusted Organizations */}
                           <div className="flex-1 flex flex-col justify-center mt-2 [transform:translateZ(10px)]">
                               <h3 className="text-[11px] text-[#C9A227] mb-2.5 font-medium">Trusted by Leading Organizations</h3>
                               <div className="flex justify-between items-center w-full gap-2 opacity-60">
                                  <div className="h-8 flex-1 bg-[#33261C] rounded-lg border border-[#4A382A] flex items-center justify-center">
                                      <Building className="w-4 h-4 text-[#C9A227]" />
                                  </div>
                                  <div className="h-8 flex-1 bg-[#33261C] rounded-lg border border-[#4A382A] flex items-center justify-center">
                                      <Building className="w-4 h-4 text-[#C9A227]" />
                                  </div>
                                  <div className="h-8 flex-1 bg-[#33261C] rounded-lg border border-[#4A382A] flex items-center justify-center">
                                      <Building className="w-4 h-4 text-[#C9A227]" />
                                  </div>
                                  <div className="h-8 flex-1 bg-[#33261C] rounded-lg border border-[#4A382A] flex items-center justify-center">
                                      <Building className="w-4 h-4 text-[#C9A227]" />
                                  </div>
                               </div>
                           </div>
                        </div>

                        {/* Bottom Nav (3 Icons) */}
                        <div className="bg-[#241A13] border-t border-[#4A382A] pt-3 pb-6 px-8 flex justify-between items-center relative z-20 rounded-b-[1.2rem] mt-auto shadow-[0_-10px_20px_rgba(0,0,0,0.5)] [transform:translateZ(50px)]">
                            {/* Home (Active) */}
                            <div className="flex flex-col items-center gap-1.5 text-[#C9A227]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                                    <path d="M4 10 L12 3.5 L20 10 V20 A2 2 0 0 1 18 22 H6 A2 2 0 0 1 4 20 Z" />
                                    <circle cx="12" cy="14" r="2.5" />
                                </svg>
                                <span className="text-[10px] font-bold tracking-wide">Home</span>
                            </div>

                            {/* Services */}
                            <div className="flex flex-col items-center gap-1.5 text-[#A58D66] opacity-70 hover:opacity-100 hover:text-[#C9A227] transition-all cursor-pointer">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                                    <circle cx="6" cy="6" r="1.5" />
                                    <circle cx="6" cy="12" r="1.5" />
                                    <circle cx="6" cy="18" r="1.5" />
                                    <rect x="10.5" y="5" width="8.5" height="2" rx="1" fill="currentColor" stroke="none" />
                                    <rect x="10.5" y="11" width="8.5" height="2" rx="1" fill="currentColor" stroke="none" />
                                    <rect x="10.5" y="17" width="8.5" height="2" rx="1" fill="currentColor" stroke="none" />
                                </svg>
                                <span className="text-[10px] font-medium tracking-wide">Services</span>
                            </div>

                            {/* AMA */}
                            <div className="flex flex-col items-center gap-1.5 text-[#A58D66] opacity-70 hover:opacity-100 hover:text-[#C9A227] transition-all cursor-pointer">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                                    <path d="M20 15a2 2 0 0 1-2 2H7.5l-3.5 3.5V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                    <rect x="8" y="9" width="8" height="2" rx="1" fill="currentColor" stroke="none" />
                                    <rect x="8" y="13" width="5" height="2" rx="1" fill="currentColor" stroke="none" />
                                </svg>
                                <span className="text-[10px] font-medium tracking-wide">AMA</span>
                            </div>
                        </div>

                    </div>
                 </div>
              </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
