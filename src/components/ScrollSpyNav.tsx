"use client";

import React, { useEffect, useState } from "react";

export type ScrollSection = {
  id: string;
  title: string;
};

interface ScrollSpyNavProps {
  sections: ScrollSection[];
}

export default function ScrollSpyNav({ sections }: ScrollSpyNavProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // If no sections, do nothing
    if (sections.length === 0) return;

    // Default to the first section initially
    setActiveId(sections[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        // Find all intersecting entries
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // If multiple are visible, pick the first one
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px", // Trigger when element is in the middle of the screen
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header if any, usually 100px is safe
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveId(id);
    }
  };

  return (
    <nav className="flex flex-col space-y-2 font-sans sticky top-32">
      {sections.map((section) => {
        const isActive = activeId === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => scrollToSection(e, section.id)}
            className={`
              block py-3 px-4 text-xs md:text-sm transition-all duration-200 border-l-[3px]
              ${isActive 
                ? "border-[#D4AF37] font-bold text-[#D4AF37] bg-white/50" 
                : "border-transparent text-gray-500 hover:text-gray-900 font-medium"}
            `}
          >
            {section.title}
          </a>
        );
      })}
    </nav>
  );
}
