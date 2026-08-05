import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200/60 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          
          {/* Brand & Social */}
          <div className="flex flex-col max-w-sm">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Image 
                src="/logo2.svg" 
                alt="AMA CONNECTS Logo" 
                width={160} 
                height={50} 
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 font-medium text-xs sm:text-[13px] leading-relaxed mt-4 mb-6">
              Empowering citizens with India's first law firm-backed, pro-bono driven legal advice platform. Access verified expert consultations and legal drafting resources easily.
            </p>
            <div className="flex items-center gap-2">
              {[
                { icon: "linkedin", href: "https://in.linkedin.com/company/ama-legal-solutions" },
                { icon: "facebook", href: "https://www.facebook.com/amalegalsolutions/" },
                { icon: "instagram", href: "https://www.instagram.com/amalegalsolutions/" },
                { icon: "youtube", href: "https://www.youtube.com/@amalegalsolution" }
              ].map((social) => (
                <a 
                  key={social.icon}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all hover:scale-105"
                  aria-label={social.icon}
                >
                  {social.icon === "linkedin" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                  )}
                  {social.icon === "facebook" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  )}
                  {social.icon === "youtube" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" /></svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 w-full lg:w-auto flex-1 lg:justify-end">
            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 font-bold text-sm tracking-wide uppercase mb-5">Quick Links</h3>
              <ul className="grid grid-cols-2 gap-x-12 gap-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Communities", href: "/communities" },
                  { name: "AMA Q&A", href: "/ask-me-anything" },
                  { name: "Interviews", href: "/interviews" },
                  { name: "Sitemap", href: "/sitemap" },
                  { name: "Privacy Policy", href: "/privacy-policy" },
                  { name: "Contact Us", href: "/contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-500 hover:text-[#D4AF37] transition-colors duration-200 text-[13px] font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get the App */}
            <div>
              <h3 className="text-gray-900 font-bold text-sm tracking-wide uppercase mb-5">Get the App</h3>
              <div className="flex flex-row sm:flex-col gap-3">
                <a 
                  href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block hover:-translate-y-0.5 transition-transform"
                >
                  <Image 
                    src="/apptrans.svg" 
                    alt="App Store" 
                    width={120} 
                    height={36} 
                    className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity drop-shadow-sm"
                  />
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block hover:-translate-y-0.5 transition-transform"
                >
                  <Image 
                    src="/playtrans.svg" 
                    alt="Google Play" 
                    width={120} 
                    height={36} 
                    className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity drop-shadow-sm"
                  />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs font-medium">
            © {new Date().getFullYear()} AMA Connect. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-gray-600 text-xs font-medium transition-colors">Privacy</Link>
            <Link href="/contact" className="text-gray-400 hover:text-gray-600 text-xs font-medium transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
