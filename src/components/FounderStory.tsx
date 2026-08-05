import Image from "next/image";
import FounderBgWaves from "./FounderBgWaves";
import { Users, HeartHandshake, Quote } from "lucide-react";

export default function FounderStory() {
  return (
    <section className="w-full bg-[#FDFBF7] py-4 sm:py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Top Hero Section */}
        <div className="relative bg-[#F8F5EE] rounded-[2rem] sm:rounded-[3rem] overflow-hidden min-h-[350px] md:min-h-[400px]">
          
          <FounderBgWaves />

          <div className="relative z-10 flex flex-col gap-6 md:gap-8 w-full h-full p-8 sm:p-10 lg:p-12">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-[1.1] font-extrabold text-[#2D2219] mb-2 tracking-tight">
              A story of making legal help human again.
            </h2>
            <p className="text-lg text-gray-500 italic font-medium mb-4">
              Why I built AMA Connect
            </p>
            <div className="w-12 h-1 bg-[#C9A227] rounded-full mb-2"></div>
            
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-lg relative bg-[#FDFBF7]">
                <Image
                  src="/founder_new.png"
                  alt="Anuj Anand Malik"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed text-justify max-w-3xl mb-6">
                  Operating at the nexus of business strategy, finance, and the legal sector, Anuj Anand Malik brings extensive expertise in debt resolution and banking disputes. With a strong commitment to democratizing legal support throughout India, he pioneered the nation's first legal assistance application backed by a pro-bono law firm. His primary goal is to empower individuals with dependable, rapid legal advice and broader legal awareness exactly when they require it.
                </p>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold mb-0.5 tracking-tight text-[#2D2219]">Anuj Anand Malik</h3>
                  <p className="text-[#C9A227] font-semibold text-xs sm:text-sm">Founder, AMA Connect — Advocate & Legal Strategist</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
          
          {/* Card 1 */}
          <div className="bg-[#F8F5EE] rounded-3xl p-8 sm:p-10 border border-transparent flex flex-col items-start gap-5 transition-all duration-300 hover:shadow-sm hover:-translate-y-1 hover:border-[#EAE5D8]">
            <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#C9A227]">
              <Users className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <p className="text-[#2D2219] font-medium text-sm sm:text-base leading-relaxed">
              I saw people struggle with legal problems without the right guidance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8F5EE] rounded-3xl p-8 sm:p-10 border border-transparent flex flex-col items-start gap-5 transition-all duration-300 hover:shadow-sm hover:-translate-y-1 hover:border-[#EAE5D8]">
            <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#C9A227]">
              <HeartHandshake className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <p className="text-[#2D2219] font-medium text-sm sm:text-base leading-relaxed">
              I believe everyone deserves fast, clear and affordable legal help.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F8F5EE] rounded-3xl p-8 sm:p-10 border border-transparent flex flex-col items-start gap-5 transition-all duration-300 hover:shadow-sm hover:-translate-y-1 hover:border-[#EAE5D8]">
            <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#C9A227]">
              <Quote className="w-6 h-6 fill-current" strokeWidth={0} />
            </div>
            <p className="text-[#2D2219] font-medium text-sm sm:text-base leading-relaxed">
              That's why AMA Connect brings lawyers and people closer together.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
