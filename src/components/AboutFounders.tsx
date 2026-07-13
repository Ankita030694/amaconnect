import Image from "next/image";

export default function AboutFounders() {
  return (
    <section className="w-full bg-white py-4 px-4 sm:px-6 lg:px-8 font-sans -mt-4 sm:-mt-8 relative z-20">
      <div className="max-w-4xl mx-auto flex justify-center">

        {/* Card: Anuj Anand Malik */}
        <div className="w-full rounded-2xl overflow-hidden flex flex-col sm:flex-row bg-white text-[#2D2219] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          {/* Image Side */}
          <div className="w-full sm:w-[42%] relative min-h-[300px] sm:min-h-[440px] bg-[#1c1c1c]">
            <Image
              src="/founder_new.png"
              alt="Anuj Anand Malik"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Text Side */}
          <div className="w-full sm:w-[58%] p-6 sm:p-8 flex flex-col justify-center">
            <p className="text-[#B8860B] text-xs font-bold tracking-widest uppercase mb-2">The Founder</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-1 tracking-tight text-[#2D2219]">Anuj Anand Malik</h2>
            <p className="text-[#B8860B] font-semibold text-xs sm:text-sm mb-0.5">Founder, AMA Connect</p>
            <p className="text-gray-500 text-xs sm:text-sm mb-4 font-medium">Advocate & Legal Strategist</p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-justify">
              Operating at the nexus of business strategy, finance, and the legal sector, Anuj Anand Malik brings extensive expertise in debt resolution and banking disputes. With a strong commitment to democratizing legal support throughout India, he pioneered the nation's first legal assistance application backed by a pro-bono law firm. His primary goal is to empower individuals with dependable, rapid legal advice and broader legal awareness exactly when they require it.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
