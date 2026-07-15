"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#F8F8F5] rounded-[16px] sm:rounded-[20px] shadow-sm border border-gray-100 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo2.svg"
                alt="AMA CONNECTS"
                width={100}
                height={200}
                className="h-20 sm:h-10 w-auto object-cover"
              />
            </Link>
          </div>

          {/* Links - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Interviews", href: "/interviews" },
              { name: "Communities", href: "/communities" },
              { name: "Blogs", href: "/blog" },
              { name: "Contact", href: "/contact" }
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 font-semibold text-[15px] hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section: CTA & Burger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/#download" className="hidden sm:block bg-[#D4AF37] text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-[10px] sm:rounded-[12px] font-bold text-[13px] sm:text-[15px] border border-[#B8962D] shadow-sm hover:bg-[#C09F32] transition-all active:scale-95 text-center">
              Get the App
            </Link>

            {/* Mobile Burger Icon */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors"
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
          <div className="md:hidden absolute top-[110%] left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Interviews", href: "/interviews" },
              { name: "Communities", href: "/communities" },
              { name: "Blogs", href: "/blog" },
              { name: "Contact", href: "/contact" }
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 font-semibold text-lg hover:text-[#D4AF37] transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#download"
              className="w-full bg-[#D4AF37] text-white px-6 py-3.5 rounded-xl font-bold text-base mt-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get the App
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
