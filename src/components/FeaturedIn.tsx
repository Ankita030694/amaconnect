"use client";

import Image from "next/image";

/**
 * Extracted from AskAMAFeature.tsx so it can render directly after Hero,
 * instead of being buried between two app-download pitches.
 */
export default function FeaturedIn() {
    const logos = [
        {
            href: "https://www.barandbench.com/news/ama-legal-solutions-launches-indias-first-law-firm-backed-pro-bono-driven-mobile-app",
            src: "/media/barandbench.png",
            alt: "Bar & Bench",
            widthClass: "w-36 sm:w-48",
        },
        {
            href: "https://www.livemint.com/",
            src: "/media/livemint.png",
            alt: "Mint",
            widthClass: "w-28 sm:w-40",
        },
        {
            href: "https://medium.com/@amalegalsolutions",
            src: "/media/medium.png",
            alt: "Medium",
            widthClass: "w-32 sm:w-44",
        },
        {
            href: "https://yourstory.com/companies/ama-legal-solutions",
            src: "/media/yourstory.png",
            alt: "YourStory",
            widthClass: "w-32 sm:w-44",
        },
        {
            href: "https://www.mid-day.com/",
            src: "/media/mid_day.png",
            alt: "Mid-Day",
            widthClass: "w-32 sm:w-44",
        },
    ];

    return (
        <section className="w-full bg-white py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-[#F8F8F6] rounded-2xl sm:rounded-[1.5rem] py-6 sm:py-8 border border-gray-100 flex flex-col items-center overflow-hidden">
                    {/* As Featured In heading removed as requested */}
                    
                    <div className="w-full relative flex overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                        <style dangerouslySetInnerHTML={{__html: `
                            @keyframes marquee {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-50%); }
                            }
                            .animate-marquee {
                                animation: marquee 20s linear infinite;
                            }
                            .animate-marquee:hover {
                                animation-play-state: paused;
                            }
                        `}} />
                        
                        <div className="flex items-center gap-12 sm:gap-16 opacity-80 select-none animate-marquee whitespace-nowrap min-w-max px-6">
                            {/* Render two identical sets of logos for seamless looping */}
                            {[...logos, ...logos].map((logo, index) => (
                                <a
                                    key={index}
                                    href={logo.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Featured in ${logo.alt}`}
                                    className={`relative h-20 sm:h-24 ${logo.widthClass} grayscale hover:grayscale-0 transition-all duration-300 block flex-shrink-0`}
                                >
                                    <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}