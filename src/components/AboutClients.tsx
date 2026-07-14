"use client";

import React from "react";
import Image from "next/image";

interface LogoNode {
  name: string;
  src: string;
  left: string;
  top: string;
  containerClass: string;
  imgPadding?: string;
  invert?: boolean;
}

export default function AboutClients() {
  const logoNodes: LogoNode[] = [
    {
      name: "Settle Loans",
      src: "/aboutclients/settleloans.png",
      left: "50%",
      top: "0%",
      containerClass: "bg-transparent shadow-[0_8px_24px_rgba(56,189,248,0.25)] rounded-[15px] sm:rounded-[22px] md:rounded-[26px] lg:rounded-[30px] overflow-hidden",
      imgPadding: "p-0",
      invert: false,
    },
    {
      name: "Billcut",
      src: "/aboutclients/billcut.png",
      left: "85.36%",
      top: "14.64%",
      containerClass: "bg-black shadow-[0_8px_24px_rgba(0,0,0,0.15)] border border-neutral-800",
      imgPadding: "p-3 sm:p-4 md:p-5 lg:p-6",
    },
    {
      name: "CredSettle",
      src: "/aboutclients/credsettle.png",
      left: "100%",
      top: "50%",
      containerClass: "bg-[#F0F9FA] border border-[#CCFBF1] shadow-[0_8px_24px_rgba(13,148,136,0.05)]",
      imgPadding: "p-2.5 sm:p-3.5 md:p-4.5 lg:p-5.5",
    },
    {
      name: "Li",
      src: "/aboutclients/li.png",
      left: "85.36%",
      top: "85.36%",
      containerClass: "bg-white border border-[#E5E7EB] shadow-[0_8px_24px_rgba(0,0,0,0.06)]",
      imgPadding: "p-3 sm:p-4 md:p-5 lg:p-6",
    },
    {
      name: "Societal",
      src: "/aboutclients/societal.png",
      left: "50%",
      top: "100%",
      containerClass: "bg-white border border-[#E5E7EB] shadow-[0_8px_24px_rgba(0,0,0,0.06)]",
      imgPadding: "p-2 sm:p-3 md:p-4 lg:p-5",
    },
    {
      name: "Saga",
      src: "/aboutclients/saga.png",
      left: "14.64%",
      top: "85.36%",
      containerClass: "bg-black shadow-[0_8px_24px_rgba(0,0,0,0.15)] border border-neutral-800",
      imgPadding: "p-3 sm:p-4 md:p-5 lg:p-6",
    },
    {
      name: "Globaton",
      src: "/aboutclients/jivosolutions.png",
      left: "0%",
      top: "50%",
      containerClass: "bg-white border border-[#E5E7EB] shadow-[0_8px_24px_rgba(0,0,0,0.06)]",
      imgPadding: "p-2.5 sm:p-3.5 md:p-4 lg:p-5",
    },
    {
      name: "HDFC Bank",
      src: "/aboutclients/hdfc.png",
      left: "14.64%",
      top: "14.64%",
      containerClass: "bg-white border border-[#E5E7EB] shadow-[0_8px_24px_rgba(0,0,0,0.06)]",
      imgPadding: "p-3 sm:p-4 md:p-5 lg:p-6",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden relative">
      {/* CSS Stylesheet for Independent Centering and Wave Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-wave {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.02);
          }
        }
        
        .orbit-logo-card {
          position: absolute;
          translate: -50% -50%; /* Modern independent centering - immune to transform keyframe overrides */
          animation: float-wave 5s ease-in-out infinite;
          animation-fill-mode: both;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .orbit-logo-card:hover {
          animation-play-state: paused;
          transform: translateY(-4px) scale(1.12) !important;
          box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.15);
          z-index: 50;
        }
      `}} />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Dynamic Circular Orbit Arena */}
        <div className="relative w-full flex items-center justify-center py-6">
          {/* Main Orbit Ring Wrapper (with custom scaling on mobile to guarantee a perfect round layout) */}
          <div className="relative w-[300px] h-[300px] xs:w-[350px] xs:h-[350px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] lg:w-[700px] lg:h-[700px]">

            {/* Outer Concentric Circle Line */}
            <div className="absolute inset-[-6px] xs:inset-[-8px] sm:inset-[-12px] md:inset-[-16px] lg:inset-[-20px] rounded-full border border-gray-200/90 pointer-events-none" />

            {/* Inner Concentric Circle Line (slight gap inside the outer one) */}
            <div className="absolute inset-[6px] xs:inset-[8px] sm:inset-[12px] md:inset-[16px] lg:inset-[20px] rounded-full border border-gray-200/90 pointer-events-none" />

            {/* Central Copy inside the Orbit Path */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-10 md:p-14 lg:p-20 pointer-events-none select-none">



              {/* Central Heading */}
              <h2 className="text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-[40px] lg:leading-[1.15] font-extrabold text-[#2D2219] mb-2 sm:mb-4 tracking-tight max-w-[190px] xs:max-w-[230px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[530px] pointer-events-auto">
                Businesses across India trust AMA Connect.
              </h2>

              {/* Central Subtitle Description */}
              <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-[15px] lg:leading-relaxed text-gray-500/90 max-w-[170px] xs:max-w-[210px] sm:max-w-[280px] md:max-w-[380px] lg:max-w-[460px] font-normal leading-normal pointer-events-auto">
                Helping companies access faster legal guidance and smarter case management through one seamless platform.
              </p>
            </div>

            {/* The Eight Brand Logo Cards */}
            {logoNodes.map((node, index) => {
              // Custom delays to create a gorgeous floating wave around the circle
              const floatDelay = `${index * 0.5}s`;

              return (
                <div
                  key={node.name}
                  className={`orbit-logo-card flex items-center justify-center rounded-[15px] sm:rounded-[22px] md:rounded-[26px] lg:rounded-[30px] overflow-hidden cursor-pointer select-none group
                    w-[50px] h-[50px] 
                    xs:w-[58px] xs:h-[58px] 
                    sm:w-[78px] sm:h-[78px] 
                    md:w-[94px] md:h-[94px] 
                    lg:w-[110px] lg:h-[110px]
                    ${node.containerClass}`}
                  style={{
                    left: node.left,
                    top: node.top,
                    animationDelay: floatDelay,
                  }}
                  title={node.name}
                >
                  <div className={`relative w-full h-full ${node.imgPadding || "p-3 sm:p-4 md:p-5"}`}>
                    <Image
                      src={node.src}
                      alt={`${node.name} logo`}
                      fill
                      className={`object-contain transition-transform duration-300 group-hover:scale-105 ${node.invert ? "brightness-0 invert" : ""
                        }`}
                      sizes="(max-width: 640px) 48px, (max-width: 768px) 80px, 110px"
                      priority
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
