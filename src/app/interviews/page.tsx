import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import { FadeIn } from "@/components/FadeIn";
import Footer from "@/components/Footer";
import BentoInterviewsGrid from "@/components/BentoInterviewsGrid";
import dbConnect from "@/lib/dbConnect";
import { LawyerInterview as LawyerInterviewModel } from "@/lib/models";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Lawyer Interviews",
  description: "Read exclusive interviews with prominent legal professionals.",
  alternates: {
    canonical: "https://amaconnect.in/interviews",
  },
};

const getInterviews = async () => {
  try {
    await dbConnect();
    const list = await LawyerInterviewModel.find({}).sort({ created: -1 }).lean();
    
    // Sort so that the featured interview is always at index 0
    const sorted = JSON.parse(JSON.stringify(list));
    const featuredIndex = sorted.findIndex((item: any) => item.isFeatured);
    if (featuredIndex > 0) {
      const [featuredItem] = sorted.splice(featuredIndex, 1);
      sorted.unshift(featuredItem);
    }
    return sorted;
  } catch (error) {
    console.error("Error fetching lawyer interviews on server:", error);
    return [];
  }
};

const getOptimizedImageSrc = (src: string | undefined | null, width: number, fallback: string = "/ashishbhay.png"): string => {
  if (!src || src.trim() === "") {
    return fallback;
  }
  if (src.includes("/api/images/")) {
    return `${src}?w=${width}`;
  }
  return src;
};

const tickerItems = [
  "Supreme Court tells JioStar to return to Delhi HC over TRAI tariff framework challenge",
  "SC asks JioStar to approach Delhi HC in TRAI tariff framework dispute",
  "SC rejects IEX plea against CERC market coupling order",
  "Lok Sabha passes SC Judges Amendment Bill in 10 mins amid din"
];

// Combine arrays to make a longer marquee for smooth infinite scroll
const marqueeItems = [...tickerItems, ...tickerItems, ...tickerItems];

const gridClasses = [
  "col-span-1 md:col-span-1 lg:col-span-1 row-span-1 lg:row-span-2 min-h-[380px] lg:min-h-[420px]", // Wasim aspect
  "col-span-1 md:col-span-2 lg:col-span-2 row-span-1 min-h-[320px] lg:min-h-0", // Alok aspect
  "col-span-1 md:col-span-1 lg:col-span-1 row-span-1 min-h-[320px] lg:min-h-0", // Deepankar aspect
  "col-span-1 md:col-span-2 lg:col-span-1 row-span-1 lg:row-span-2 min-h-[380px] lg:min-h-[420px]", // Hitesh aspect
  "col-span-1 md:col-span-2 lg:col-span-2 row-span-1 min-h-[320px] lg:min-h-0" // Amit aspect
];

const formatDate = (dateStr: string) => {
  if (!dateStr) return "";
  const cleanStr = dateStr.trim();
  const YmdRegex = /^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/;
  const match = cleanStr.match(YmdRegex);
  if (match) {
    const [_, year, month, day] = match;
    const paddedDay = day.padStart(2, "0");
    const paddedMonth = month.padStart(2, "0");
    return `${year}-${paddedMonth}-${paddedDay}`;
  }
  return dateStr;
};

export default async function InterviewsPage() {
  const interviews = await getInterviews();
  const gridStories = interviews; // Pass all interviews, filtering happens in the component

  return (
    <>
      <style>{`
        body {
          background-color: #31261C !important;
        }
      `}</style>
      <div className="flex flex-col min-h-screen bg-[#31261C] text-[#F5F3EE] font-sans selection:bg-[#C9A227] selection:text-[#31261C] overflow-x-hidden">
        <main className="flex-grow pt-[72px]">
        
        {/* HERO SECTION */}
        {interviews.length > 0 && (
          <section className="relative w-full min-h-[85vh] flex flex-col lg:flex-row border-b border-[#3A3530]">
            {/* Left Image Column */}
            <div className="w-full lg:w-[55%] relative aspect-[3/2] lg:aspect-auto lg:h-[85vh] overflow-hidden bg-[#1E1C19] flex items-center justify-center">
              
              {/* Blurred background to fill space */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={getOptimizedImageSrc(interviews[0].image, 200)} 
                  alt=""
                  className="w-full h-full object-cover blur-2xl opacity-40 scale-110" 
                />
              </div>

              {/* Actual image uncropped */}
              <img 
                src={getOptimizedImageSrc(interviews[0].image, 1200)} 
                alt={interviews[0].lawyer}
                className="relative z-10 w-full h-full object-contain p-4 lg:py-12 lg:px-8" 
              />

              {/* Blend into right column on desktop */}
              <div 
                className="hidden lg:block absolute inset-0 z-20 pointer-events-none" 
                style={{ background: 'linear-gradient(to right, transparent 75%, #31261C 100%)' }}
              ></div>
              {/* Blend into bottom on mobile */}
              <div 
                className="block lg:hidden absolute inset-0 z-20 pointer-events-none" 
                style={{ background: 'linear-gradient(to bottom, transparent 75%, #31261C 100%)' }}
              ></div>
            </div>

            {/* Right Content Column */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center px-6 py-12 lg:pl-[60px] lg:pr-12 lg:py-20 bg-[#31261C] z-10 relative">
              <FadeIn delay={0.1} className="max-w-xl">
                {/* Meta Row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <div className="flex flex-col">
                    <div className="w-6 h-[2px] bg-[#C9A227] mb-2"></div>
                    <span className={`${inter.className} text-[#C9A227] text-[12px] font-medium tracking-[0.15em] uppercase`}>FEATURED INTERVIEW</span>
                  </div>
                  <span className={`${inter.className} text-[#9C958C] text-[12px] font-medium tracking-[0.15em] uppercase`}>
                    {formatDate(interviews[0].date)}
                  </span>
                </div>

                {/* Headline */}
                <h1 className={`${playfair.className} text-[36px] lg:text-[48px] leading-[1.2] mb-6 text-[#F5F3EE] line-clamp-4`}>
                  {interviews[0].title}
                </h1>

                {/* Name & Title */}
                <div className="mb-8">
                  <h2 className={`${inter.className} text-[#F5F3EE] text-[14px] lg:text-[16px] font-medium tracking-[0.1em] uppercase mb-2`}>{interviews[0].lawyer}</h2>
                  <p className={`${inter.className} text-[#9C958C] text-[16px] leading-[1.6]`}>
                    {(interviews[0].designation || interviews[0].companyName) ? 
                      `${interviews[0].designation || ''}${interviews[0].designation && interviews[0].companyName ? ', ' : ''}${interviews[0].companyName || ''}` :
                      interviews[0].specialization
                    }
                  </p>
                </div>

                {/* CTA */}
                <Link href={`/interviews/${interviews[0].slug}`}>
                  <button className={`${inter.className} group w-fit relative inline-flex items-center justify-center px-[28px] py-[14px] border border-[#C9A227] rounded-sm text-[#C9A227] text-[12px] font-medium tracking-[0.15em] uppercase hover:bg-[#C9A227] hover:text-[#31261C] transition-all duration-300 ease-out`}>
                    <span>Read Full Interview</span>
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </Link>
              </FadeIn>
            </div>
          </section>
        )}

        {/* MORE INTERVIEWS */}
        {gridStories.length > 0 && (
          <BentoInterviewsGrid interviews={gridStories} excludeFirstOnEmptySearch={true} />
        )}

        {/* LEGAL NEWS TICKER */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-[40px]">
          <FadeIn delay={0.2} className="flex items-center mb-8">
            <h2 className={`${inter.className} text-[12px] font-medium tracking-[0.15em] uppercase text-[#F5F3EE] whitespace-nowrap`}>LEGAL NEWS & COURT UPDATES</h2>
            <div className="h-[1px] bg-[#3A3530] flex-grow ml-6"></div>
          </FadeIn>
        </section>

        {/* Ticker Bar Full Width */}
        <div className="w-full bg-[#1E1C19] border-y border-[#3A3530] py-4 overflow-hidden relative group mb-[80px]">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
            }
          `}</style>
          <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] w-max">
            {marqueeItems.map((item, i) => (
              <div key={i} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#C9A227] mx-6 flex-shrink-0"></div>
                <span className={`${inter.className} text-[14px] md:text-[15px] text-[#F5F3EE]`}>{item}</span>
                {i !== marqueeItems.length - 1 && (
                  <span className="text-[#3A3530] ml-6 mr-0">•</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SUGGEST AN INTERVIEW FORM */}
        <section className="w-full relative z-0 flex flex-col">
          
          {/* Top Dark Section */}
          <div className="w-full bg-[#31261C] relative pt-[40px] pb-[340px] md:pb-[420px]">
            {/* Gold wavy pattern (SVG) */}
            <div className="absolute top-0 right-0 pointer-events-none opacity-30 overflow-hidden w-[300px] h-[300px]">
              <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 -50 C 200 50, 100 150, 350 200" stroke="#C9A227" strokeWidth="1" fill="none" opacity="0.2"/>
                <path d="M120 -50 C 220 50, 120 150, 370 200" stroke="#C9A227" strokeWidth="1" fill="none" opacity="0.3"/>
                <path d="M140 -50 C 240 50, 140 150, 390 200" stroke="#C9A227" strokeWidth="1" fill="none" opacity="0.4"/>
                <path d="M160 -50 C 260 50, 160 150, 410 200" stroke="#C9A227" strokeWidth="1" fill="none" opacity="0.5"/>
                <path d="M180 -50 C 280 50, 180 150, 430 200" stroke="#C9A227" strokeWidth="1" fill="none" opacity="0.6"/>
                <path d="M200 -50 C 300 50, 200 150, 450 200" stroke="#C9A227" strokeWidth="1" fill="none" opacity="0.7"/>
                <path d="M220 -50 C 320 50, 220 150, 470 200" stroke="#C9A227" strokeWidth="1" fill="none" opacity="0.8"/>
              </svg>
            </div>

            <div className="max-w-[900px] mx-auto px-6 relative z-10 flex flex-col items-center">
              
              {/* Scale Icon */}
              <div className="mb-6 text-[#C9A227]">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
              </div>

              <h3 className={`${inter.className} text-[#C9A227] text-[13px] md:text-[14px] font-bold tracking-[0.15em] uppercase mb-4`}>
                SUGGEST AN INTERVIEW
              </h3>
              
              <h2 className={`${inter.className} text-[32px] md:text-[44px] font-bold text-center leading-[1.2] mb-6 text-[#F5F3EE]`}>
                Know a lawyer with an <br className="hidden md:block"/> <span className="text-[#C9A227]">inspiring story?</span>
              </h2>
              
              <p className={`${inter.className} text-[#D1CCC5] text-center text-[15px] md:text-[16px] max-w-[650px] mb-4 leading-relaxed`}>
                Tell us about them or recommend yourself. Our editorial team conducts deep-dive interviews with leading courtroom professionals.
              </p>
            </div>
          </div>

          {/* Bottom Beige Section */}
          <div className="w-full bg-[#F5F2EB] relative pb-[80px]">
            <div className="max-w-[900px] mx-auto px-6 relative z-20 -mt-[300px] md:-mt-[360px]">
              {/* Form Container */}
              <div className="w-full bg-[#FCFBF9] rounded-[24px] p-6 md:p-10 lg:p-12 shadow-xl border border-[#E5E0D8]">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  
                  {/* Name */}
                  <div className="col-span-1 md:col-span-2">
                    <label className={`${inter.className} block text-[#2A2622] text-[14px] font-semibold mb-2`}>
                      Enter your name <span className="text-[#C9A227]">*</span>
                    </label>
                    <input type="text" placeholder="Your full name (e.g. Rajesh Kumar)" className={`${inter.className} w-full bg-white border border-[#E8E6E1] rounded-md px-4 py-3 text-[#2A2622] text-[15px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-colors placeholder:text-[#A39E98]`} />
                  </div>

                  {/* Email */}
                  <div className="col-span-1">
                    <label className={`${inter.className} block text-[#2A2622] text-[14px] font-semibold mb-2`}>
                      Enter your email <span className="text-[#C9A227]">*</span>
                    </label>
                    <input type="email" placeholder="Your professional email" className={`${inter.className} w-full bg-white border border-[#E8E6E1] rounded-md px-4 py-3 text-[#2A2622] text-[15px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-colors placeholder:text-[#A39E98]`} />
                  </div>

                  {/* Phone */}
                  <div className="col-span-1">
                    <label className={`${inter.className} block text-[#2A2622] text-[14px] font-semibold mb-2`}>
                      Enter your phone number <span className="text-[#C9A227]">*</span>
                    </label>
                    <input type="tel" placeholder="10-digit mobile number" className={`${inter.className} w-full bg-white border border-[#E8E6E1] rounded-md px-4 py-3 text-[#2A2622] text-[15px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-colors placeholder:text-[#A39E98]`} />
                  </div>

                  {/* State */}
                  <div className="col-span-1">
                    <label className={`${inter.className} block text-[#2A2622] text-[14px] font-semibold mb-2`}>
                      State / Union Territory <span className="text-[#C9A227]">*</span>
                    </label>
                    <select className={`${inter.className} w-full bg-white border border-[#E8E6E1] rounded-md px-4 py-3 text-[#6B6560] text-[15px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-colors appearance-none`} style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236B6560%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}>
                      <option value="">Select State/UT</option>
                      <option value="delhi">Delhi</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="karnataka">Karnataka</option>
                    </select>
                  </div>

                  {/* Reason */}
                  <div className="col-span-1">
                    <label className={`${inter.className} block text-[#2A2622] text-[14px] font-semibold mb-2`}>
                      Reason for Contact <span className="text-[#C9A227]">*</span>
                    </label>
                    <select className={`${inter.className} w-full bg-white border border-[#E8E6E1] rounded-md px-4 py-3 text-[#2A2622] text-[15px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-colors appearance-none`} style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236B6560%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}>
                      <option value="suggest">Suggest a Professional Interview</option>
                      <option value="self">Recommend Myself</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Textarea */}
                  <div className="col-span-1 md:col-span-2">
                    <label className={`${inter.className} block text-[#2A2622] text-[14px] font-semibold mb-2`}>
                      Why should we interview this lawyer? / Tell us about them <span className="text-[#C9A227]">*</span>
                    </label>
                    <textarea rows={4} placeholder="Describe their legal expertise, landmark cases, or why their story is inspiring..." className={`${inter.className} w-full bg-white border border-[#E8E6E1] rounded-md px-4 py-3 text-[#2A2622] text-[15px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-colors resize-none placeholder:text-[#A39E98]`}></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="col-span-1 md:col-span-2 flex justify-center mt-6">
                    <button type="button" className={`${inter.className} bg-[#1A1816] hover:bg-[#2A2622] text-[#F5F3EE] px-8 py-3 rounded-md font-medium text-[14px] transition-colors flex items-center justify-center gap-2 w-full md:w-auto md:min-w-[240px]`}>
                      Submit Suggestion
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      </div>
    </>
  );
}
