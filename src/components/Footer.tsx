import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Links and Apps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16">
          {/* Logo Column */}
          <div className="flex flex-col items-start">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Image 
                src="/logo2.svg" 
                alt="AMA CONNECTS Logo" 
                width={180} 
                height={60} 
                className="h-10 sm:h-12 w-auto object-contain mb-6 sm:mb-0"
              />
            </Link>
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
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Communities", href: "/communities" },
                { name: "AMA", href: "/ask-me-anything" },
                { name: "Interviews", href: "/interviews" },
                { name: "Success Stories", href: "/success-stories" },
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

          {/* Legal Column */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">Legal</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: "Terms and Conditions", href: "https://amaconnect.in/terms-and-conditions" },
                { name: "Privacy Policy", href: "https://amaconnect.in/privacy-policy" },
                { name: "Disclaimer", href: "https://amaconnect.in/disclaimer" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-base sm:text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Featured In Section */}
        <div className="mb-10 sm:mb-12">
          <div className="bg-[#F8F8F6] rounded-[20px] sm:rounded-3xl p-6 sm:p-12 shadow-sm border border-gray-100 flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6 sm:mb-10">As Featured In</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-16 w-full opacity-80">
              <Image 
                src="/media/barandbench.png" 
                alt="Bar & Bench" 
                width={120} 
                height={32} 
                className="h-16 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image 
                src="/media/livemint.png" 
                alt="Mint" 
                width={80} 
                height={24} 
                className="h-16 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image 
                src="/media/medium.png" 
                alt="Medium" 
                width={90} 
                height={22} 
                className="h-16 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image 
                src="/media/yourstory.png" 
                alt="YourStory" 
                width={100} 
                height={28} 
                className="h-16 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
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
