"use client";

import { useState, useEffect } from "react";

const activities = [
  "Just now: A client from Bengaluru just joined.",
  "1 min ago: A startup founder received trademark registration advice.",
  "2 mins ago: An employment dispute query was successfully resolved.",
  "142 verified lawyers are currently online and answering queries.",
  "5 mins ago: Someone's property query got resolved by a High Court advocate.",
  "Just now: A user from Mumbai just downloaded the AMA Connect app."
];

export default function LiveActivityTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % activities.length);
        setIsFading(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#FDF9F2] rounded-[1.25rem] border border-[#EAE5D8] px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between overflow-hidden shadow-sm">
      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
        {/* Pulsing Green Dot */}
        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-full w-full bg-[#25D366]"></span>
        </span>
        
        {/* Fading Text Container */}
        <div className="relative flex-1 h-5 flex items-center">
          <p 
            className={`absolute w-full truncate text-[12px] sm:text-[14px] font-bold text-[#8C7355] transition-opacity duration-500 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            {activities[currentIndex]}
          </p>
        </div>
      </div>
      
      {/* Live Badge */}
      <div className="shrink-0 pl-3 hidden sm:block">
        <span className="text-[10px] sm:text-xs font-bold text-[#D4AF37]/70 tracking-widest uppercase">Live Activity</span>
      </div>
    </div>
  );
}
