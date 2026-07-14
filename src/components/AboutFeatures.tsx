import Image from "next/image";

export default function AboutFeatures() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">


        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2219] mb-16 tracking-tight">
          Smarter Legal Support
        </h2>

        {/* 3-Column Alternating Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Card 1: Ask AMA */}
          <div className="bg-[#F8F7F6] rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden h-[500px] sm:h-[560px] text-left relative group">
            {/* Content above is elevated with z-20 */}
            <div className="relative z-20">
              <h3 className="text-2xl font-bold text-[#2D2219] mb-3">
                Ask AMA
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-normal">
                Get answers to your legal questions within 45 minutes from experienced experts and trusted professionals.
              </p>
            </div>

            {/* Phone Mockup at the bottom showing only the top half (30% bigger) */}
            <div className="absolute -bottom-[260px] sm:-bottom-[300px] left-1/2 -translate-x-1/2 w-[338px] sm:w-[390px] h-[520px] sm:h-[600px] z-10 transition-transform duration-500 ease-out group-hover:-translate-y-4 group-hover:scale-[1.01]">
              <Image
                src="/phone.png"
                alt="Ask AMA mobile mockup"
                fill
                className="object-top object-contain"
                priority
              />
            </div>
          </div>

          {/* Card 2: Case Desk (Reversed Layout) */}
          <div className="bg-[#F8F7F6] rounded-3xl p-6 sm:p-8 flex flex-col justify-end overflow-hidden h-[500px] sm:h-[560px] text-left relative group">
            {/* Phone Mockup at the top edge showing only the bottom half (30% bigger) */}
            <div className="absolute -top-[260px] sm:-top-[300px] left-1/2 -translate-x-1/2 w-[338px] sm:w-[390px] h-[520px] sm:h-[600px] z-10 transition-transform duration-500 ease-out group-hover:translate-y-4 group-hover:scale-[1.01]">
              <Image
                src="/casedesk.png"
                alt="Case Desk mobile mockup"
                fill
                className="object-bottom object-contain"
                priority
              />
            </div>
            <div className="relative z-20">
              <h3 className="text-2xl font-bold text-[#2D2219] mb-3">
                Ask Your Lawyer
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-normal">
                Connect directly with your lawyer to discuss case updates, ask questions, and get clarity whenever needed.
              </p>
            </div>



          </div>

          {/* Card 3: Ask Your Lawyer */}
          <div className="bg-[#F8F7F6] rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden h-[500px] sm:h-[560px] text-left relative group">
            {/* Content above is elevated with z-20 */}
            {/* Content below is elevated with z-20 */}
            <div className="relative z-20">
              <h3 className="text-2xl font-bold text-[#2D2219] mb-3">
                Case Desk
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-normal">
                Track case progress, manage updates, store important documents, and stay informed in one organized space.
              </p>
            </div>

            {/* Phone Mockup at the bottom showing only the top half (30% bigger) */}
            <div className="absolute -bottom-[260px] sm:-bottom-[300px] left-1/2 -translate-x-1/2 w-[338px] sm:w-[390px] h-[520px] sm:h-[600px] z-10 transition-transform duration-500 ease-out group-hover:-translate-y-4 group-hover:scale-[1.01]">
              <Image
                src="/casedesk.png"
                alt="Ask Your Lawyer mobile mockup"
                fill
                className="object-top object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
