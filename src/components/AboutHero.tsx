"use client";

import Image from "next/image";
import { Clock, ShieldCheck, ShieldEllipsis } from "lucide-react";
import TrustStatBadge from "./TrustStatBadge";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function AboutHero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Use springs for smooth interpolation
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  // Map normalized mouse positions (-0.5 to 0.5) to rotation angles
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F8F5EE] border border-[#EAE5D8] rounded-md">
               <ShieldCheck className="w-4 h-4 text-[#C9A227]" strokeWidth={2.5} />
               <span className="text-xs sm:text-sm font-bold text-[#2D2219]">AMA Legal Solutions</span>
            </div>
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
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#C9A227]/15 rounded-full blur-[100px] pointer-events-none"></div>
           
           <motion.div 
             className="absolute -top-8 sm:-top-16 lg:-top-24 right-[-10%] sm:right-[-20%] lg:right-[-30%] w-[120%] sm:w-[130%] lg:w-[150%] h-[110%] origin-center drop-shadow-2xl"
             style={{
               rotateX,
               rotateY,
               transformStyle: "preserve-3d"
             }}
           >
             {/* The initial 4deg rotation is applied to a child div so the framer-motion container can freely handle dynamic tilt */}
             <div className="relative w-full h-full transform rotate-[4deg]">
               <Image
                 src="/about-phone.png"
                 alt="AMA Connect App"
                 fill
                 className="object-contain object-center md:object-right pointer-events-none"
                 priority
               />
             </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
