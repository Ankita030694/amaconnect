"use client";

const CHAT_MESSAGES = [
  { id: 1, type: 'green', text: "Is it legal for a company to hold a month's salary as security deposit from employees?" },
  { id: 2, type: 'gray', text: "What are the legal steps to secure a patent for a medical device in India?", avatar: true },
  { id: 3, type: 'green', text: "How is ancestral property defined, and can it be sold by the father without kids' consent?" },
  { id: 4, type: 'gray', text: "Can a wife claim maintenance under Section 125 even if she is highly educated?", avatar: true },
  { id: 5, type: 'green', text: "What is the legal validity of an email as evidence in a commercial arbitration case?" },
  { id: 6, type: 'gray', text: "What legal actions can be taken against a company for selling duplicate products?", avatar: true },
];

export default function LiveActivityFeed() {
  return (
    <>
      <style>{`
        .animate-marquee-vertical {
          animation: marqueeVertical 30s linear infinite;
          will-change: transform;
        }
        .animate-marquee-vertical:hover {
          animation-play-state: paused;
        }
        @keyframes marqueeVertical {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(0, -50%, 0); }
        }
      `}</style>
      
      <section className="bg-[#EFEAE2] border border-[#EAE5D8] rounded-[2rem] w-full h-full relative overflow-hidden flex flex-col min-h-[300px] sm:min-h-[350px] shadow-sm">
        
        {/* WhatsApp-style Header */}
        <div className="bg-[#008069] px-4 py-3 flex items-center gap-3 z-20 shadow-md shrink-0">
          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
            <img src="/logo.svg" alt="AMA" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-white text-[15px] leading-tight tracking-wide">AMA Connect</h3>
            <p className="text-[11px] text-white/80 tracking-wide font-medium">Typically replies instantly</p>
          </div>
        </div>

        {/* Chat Area (Continuous Scroll) */}
        <div 
          className="flex-1 overflow-hidden relative bg-[#EFEAE2]"
          style={{
            backgroundImage: 'url("https://w0.peakpx.com/wallpaper/818/148/HD-wallpaper-whatsapp-background-solid-color-whatsapp-profiles-backgrounds-whatsapp-bg-whatsapp-dark-solid-colors-whatsapp-background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Solid Color Overlay (Replaces backgroundBlendMode for GPU performance) */}
          <div className="absolute inset-0 bg-[#EFEAE2]/85 pointer-events-none z-0" />

          {/* Top and Bottom Fading Gradients */}
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#EFEAE2] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#EFEAE2] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="animate-marquee-vertical absolute inset-x-0 top-0 flex flex-col gap-4 py-4 w-full z-10">
            {[...CHAT_MESSAGES, ...CHAT_MESSAGES].map((msg, i) => {
              const isAma = msg.type === 'green';
              return (
                <div 
                  key={`${msg.id}-${i}`} 
                  className={`max-w-[85%] flex flex-col px-4 ${isAma ? 'self-end' : 'self-start'}`}
                >
                  <div className={`relative px-3 pt-2 pb-1.5 rounded-xl shadow-sm text-[13px] sm:text-[14px] leading-relaxed ${isAma ? 'bg-[#D9FDD3] text-[#111B21] rounded-tr-none' : 'bg-white text-[#111B21] rounded-tl-none'}`}>
                    {msg.text}
                    <span className={`block text-[9px] text-gray-500 mt-1 text-right font-medium`}>10:00 AM</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
