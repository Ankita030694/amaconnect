import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F8F9FA] border-t border-gray-200/80 pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Links and Apps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-16">
          {/* Logo Column */}
          <div className="flex flex-col items-start max-w-sm">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80 mb-4">
              <Image 
                src="/logo2.svg" 
                alt="AMA CONNECTS Logo" 
                width={180} 
                height={60} 
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 font-medium text-xs sm:text-sm leading-relaxed mb-6">
              Empowering citizens with India's first law firm-backed, pro-bono driven legal advice platform. Access verified expert consultations and legal drafting resources easily.
            </p>
            <div className="flex items-center gap-4.5">
              <a 
                href="https://in.linkedin.com/company/ama-legal-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#2D2219] hover:text-[#D4AF37] transition-all p-1 hover:scale-110 active:scale-95"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/amalegalsolutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#2D2219] hover:text-[#D4AF37] transition-all p-1 hover:scale-110 active:scale-95"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/amalegalsolutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#2D2219] hover:text-[#D4AF37] transition-all p-1 hover:scale-110 active:scale-95"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@amalegalsolution" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#2D2219] hover:text-[#D4AF37] transition-all p-1 hover:scale-110 active:scale-95"
                title="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Get the App Column */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">Get the App</h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              <a 
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block transform transition-transform hover:scale-105"
              >
                <Image 
                  src="/apptrans.svg" 
                  alt="Download on the App Store" 
                  width={120} 
                  height={36} 
                  className="h-9 sm:h-10 w-auto"
                />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block transform transition-transform hover:scale-105"
              >
                <Image 
                  src="/playtrans.svg" 
                  alt="Get it on Google Play" 
                  width={120} 
                  height={36} 
                  className="h-9 sm:h-10 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Communities", href: "/communities" },
                { name: "AMA", href: "/ask-me-anything" },
                { name: "Interviews", href: "/interviews" },
                { name: "Drafts Library", href: "/drafts" },
                { name: "Contact Us", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-base sm:text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Featured In Section */}
        <div className="mb-10 sm:mb-12">
          <div className="bg-white rounded-[20px] sm:rounded-3xl p-6 sm:p-12 shadow-sm border border-gray-200/50 flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6 sm:mb-10">As Featured In</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-16 w-full opacity-80">
              <a 
                href="https://www.barandbench.com/news/ama-legal-solutions-launches-indias-first-law-firm-backed-pro-bono-driven-mobile-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image 
                  src="/media/barandbench.png" 
                  alt="Bar & Bench" 
                  width={120} 
                  height={32} 
                  className="h-16 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                />
              </a>
              <a 
                href="https://www.livemint.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image 
                  src="/media/livemint.png" 
                  alt="Mint" 
                  width={80} 
                  height={24} 
                  className="h-16 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                />
              </a>
              <a 
                href="https://medium.com/@amalegalsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image 
                  src="/media/medium.png" 
                  alt="Medium" 
                  width={90} 
                  height={22} 
                  className="h-16 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                />
              </a>
              <a 
                href="https://yourstory.com/companies/ama-legal-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image 
                  src="/media/yourstory.png" 
                  alt="YourStory" 
                  width={100} 
                  height={28} 
                  className="h-16 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-6 sm:pt-8 border-t border-gray-100">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2026 AMA Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
