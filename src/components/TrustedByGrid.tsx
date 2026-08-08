"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function TrustedByGrid() {
  const logos = [
    {
      type: 'component',
      content: <span className="font-bold text-[14px] xs:text-[16px] sm:text-[20px] md:text-[24px] text-[#004B87] tracking-tight">Reliance</span>,
      alt: "Reliance logo"
    },
    {
      type: 'image',
      src: '/hinduja-logo-transparent.png',
      alt: "Hinduja logo"
    },
    {
      type: 'image',
      src: '/airtel-logo.png',
      alt: "Airtel logo"
    },
    {
      type: 'component',
      content: <span className="font-black text-[18px] xs:text-[20px] sm:text-[26px] md:text-[32px] text-[#0530AD] tracking-tighter">IBM</span>,
      alt: "IBM logo"
    },
    {
      type: 'image',
      src: '/hdfc-logo.png',
      alt: "HDFC Bank logo"
    },
    {
      type: 'component',
      content: (
        <span className="font-bold text-[12px] xs:text-[14px] sm:text-[18px] md:text-[22px] text-[#F37021] tracking-tight">
          ICICI<span className="text-[#00427A]">Bank</span>
        </span>
      ),
      alt: "ICICI Bank logo"
    }
  ];

  return (
    <section className="w-full bg-[#FCFBF7] pt-8 sm:pt-12 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden border-t border-[#F2EDE1]">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* The main circular area */}
        <div className="relative w-full max-w-[340px] sm:max-w-[500px] md:max-w-[700px] aspect-square flex items-center justify-center -mt-4 sm:-mt-8 md:-mt-12 mb-4 sm:mb-6 md:mb-10">
          
          {/* Dotted Circle SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" overflow="visible">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#D4AF37" strokeWidth="0.3" strokeDasharray="1 1.5" opacity="0.6"/>
          </svg>

          {/* Dots on the circle */}
          {logos.map((_, i) => {
            const theta = (i * 360) / 6 + (360 / 12);
            const rad = (theta * Math.PI) / 180;
            const x = 50 + 40 * Math.sin(rad);
            const y = 50 - 40 * Math.cos(rad);
            return (
              <div 
                key={`dot-${i}`}
                className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D4AF37]"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            );
          })}

          {/* Center Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10 pointer-events-none"
          >
            <h2 className="text-lg sm:text-2xl md:text-4xl font-extrabold text-[#362D24] leading-[1.2] max-w-[160px] sm:max-w-[280px] md:max-w-[400px]">
              Businesses across India <br/> trust AMA Connect.
            </h2>
            <p className="mt-2 sm:mt-4 text-[10px] sm:text-xs md:text-sm font-medium text-[#7A7268] max-w-[180px] sm:max-w-[260px] md:max-w-[360px] leading-relaxed">
              Helping companies access faster legal guidance and smarter case management through one seamless platform.
            </p>
          </motion.div>

          {/* Logos */}
          {logos.map((logo, i) => {
            const theta = (i * 360) / 6;
            const rad = (theta * Math.PI) / 180;
            const x = 50 + 40 * Math.sin(rad);
            const y = 50 - 40 * Math.cos(rad);
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5, x: '-50%', y: '-50%' }}
                whileInView={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                whileHover={{ scale: 1.05, x: '-50%', y: '-50%' }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="absolute bg-white rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-[#EAE5D8] flex items-center justify-center p-2 sm:p-5 md:p-6 z-20 cursor-default"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: 'clamp(50px, 14vw, 130px)',
                  height: 'clamp(50px, 14vw, 130px)'
                }}
              >
                 <div className="relative w-full h-full flex items-center justify-center">
                    {logo.type === 'image' && logo.src ? (
                      <Image 
                        src={logo.src} 
                        alt={logo.alt} 
                        fill 
                        className="object-contain" 
                        sizes="(max-width: 640px) 50px, (max-width: 768px) 100px, 130px"
                      />
                    ) : (
                      logo.content
                    )}
                 </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Bottom Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg font-semibold text-gray-700 tracking-wide mt-2 sm:mt-4 md:mt-8 relative z-30"
        >
           <span>Trusted</span>
           <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
           <span>Verified</span>
           <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
           <span>Reliable</span>
        </motion.div>

      </div>
      
    </section>
  );
}
