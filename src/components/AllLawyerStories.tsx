import Image from "next/image";

const stories = Array(9).fill({
  title: "How a Criminal Lawyer Secured Bail in a High-Profile Case",
  tags: "Criminal Law • Delhi, India • 12+ Years Experience",
  author: "Adv. Rohan Mehta",
  designation: "Criminal Lawyer, Delhi High Court",
});

export default function AllLawyerStories() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="mb-10 sm:mb-14">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D241E] leading-[1.1]">
          All Lawyer Stories<br />& Interviews
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {stories.map((story, index) => (
          <div 
            key={index} 
            className="bg-[#EBE5D9] rounded-[1.5rem] p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full"
          >
            <div>
              <h3 className="text-[#2D241E] text-[1.35rem] sm:text-2xl font-bold leading-tight mb-3">
                {story.title}
              </h3>
              <p className="text-gray-600/80 text-[13px] sm:text-sm font-medium">
                {story.tags}
              </p>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F5C518] overflow-hidden flex-shrink-0 flex items-end justify-center">
                <Image
                  src="/ashishbhay.png"
                  alt={story.author}
                  width={40}
                  height={40}
                  className="object-contain h-[90%] w-auto pt-1" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#2D241E] font-bold text-sm sm:text-[15px]">
                  {story.author}
                </span>
                <span className="text-gray-600 text-xs sm:text-[13px]">
                  {story.designation}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="flex items-center gap-2 text-[#2D241E] font-semibold text-lg sm:text-xl hover:opacity-70 transition-opacity">
          Show More
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}
