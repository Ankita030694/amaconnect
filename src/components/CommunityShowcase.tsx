"use client";

import React from "react";
import Link from "next/link";
import { communities } from "@/data/communities";

const chatQuestions = [
  "How can I check if a property has any hidden bank mortgage or loan in Karnataka?",
  "What are the legal steps if a company refuses to return my original educational documents?",
  "Can a husband claim maintenance from his wife under Section 125 of CrPC?",
  "How do I protect my mobile app's source code under Indian Copyright Law?",
  "What should I do if a bank recovery agent visits my office and threatens me?",
  "How is child custody decided in India if the mother is earning less than the father?",
  "Is a digitally signed service agreement legally binding without physical stamp paper?",
  "Can my landlord evict me immediately if I delay the rent payment by a single week?",
  "How can an Indian startup register for MSME benefits, and what are the tax exemptions?",
  "What is the penalty under Section 138 of the NI Act if a cheque bounces?",
  "Can a daughter claim a share in her father's ancestral property after her marriage?",
  "What is the difference between trademark registration and copyright for a brand logo?",
  "Is it legal for an employer to put a 2-year non-compete clause in an employment letter?",
  "How do I send a formal legal notice to a builder for delay in flat possession?",
  "Can a mutual consent divorce be cancelled by one partner after filing first motion?",
  "What legal action can I take if someone uses my trademark name on Amazon India?",
  "How do I legally remove my name from a bank loan as a co-borrower?",
  "What documents are required to legally register a gift deed of land to a sibling?",
  "Is a registered will valid if it was not signed in front of two witnesses?",
  "What are the legal liabilities of a sleeping partner in a registered partnership firm?",
  "Can a wife file for domestic violence even after living separately for a year?",
  "What is the legal process to claim an unclaimed insurance policy after a parent passes away?",
  "How can I legally challenge a false FIR filed against me or my family members?",
  "Does a tenant acquire any ownership rights over a property after 10 years of tenancy?",
  "How do I draft a legally airtight Non-Disclosure Agreement (NDA) for freelancers?",
  "Can bank recovery agents call my relatives or friends if I default on a personal loan?",
  "What is the legal remedy if a partner withdraws firm money without informing others?",
  "How long does a trademark registration remain valid in India before renewal is needed?",
  "Is it compulsory to register a rent agreement if the tenancy duration is only 11 months?",
  "What are the grounds for a husband to seek divorce under the Hindu Marriage Act?",
  "How do I file a consumer court case online for receiving a defective laptop?",
  "Can I patent an innovative business process or software algorithm under Indian patent law?",
  "How can an MSME recover outstanding payments from a client refusing to pay for 6 months?",
  "What should I look for in the title deed before buying an agricultural plot in Maharashtra?",
  "How can I draft a legal notice for the recovery of money lent to a friend?",
  "Is there a legal limit on the maximum interest a private lender can charge in India?",
  "Can a grandmother claim custody of a minor child after the parents' demise?",
  "What legal steps should I take if a competitor copies my website layout and product images?",
  "Is it legally possible to convert a sole proprietorship into a private limited company?",
  "Can a builder demand extra charges for parking space after the apartment sale agreement?",
  "What is the legal procedure to register a trademark for a brand name in India?",
  "Can a wife claim a share in the husband's self-acquired property during a divorce?",
  "What are the legal implications of not paying credit card dues for more than 90 days?",
  "How do I draft a partition deed among four brothers for a commercial building?",
  "Can a housing society ban bachelors or pets from renting flats in their society?",
  "What are the legal compliances required for a private limited company in its first year?",
  "Can a copyrighted song be used for 15 seconds in a commercial YouTube video?",
  "How can I legally stop bank recovery agents from harassing me during business hours?",
  "What is the difference between a judicial separation and a divorce under Indian laws?",
  "How do I legally transfer shares of a private limited company to an external investor?",
  "Can a builder change the layout plan of a building without the buyers' prior consent?",
  "What are the mandatory clauses to include in an Indian startup founder's agreement?",
  "Is an unregistered agreement to sell legally valid in court for a property dispute?",
  "How can I legally protect my proprietary recipe from being copied by former chefs?",
  "What are the legal options if a bank rejects a one-time settlement (OTS) proposal?",
  "Can stepchildren claim a share in their stepfather's ancestral property in India?",
  "How do I legally handle a situation where a client defaults on a service contract?",
  "What is the legal procedure to register a commercial lease deed in Delhi NCR?",
  "Can a wife file for interim maintenance immediately after filing a divorce petition?",
  "How do I draft a general power of attorney (GPA) for selling a flat in India?",
  "What constitutes trademark infringement on Google Ads keyword targeting?",
  "Is a cheque bounce case bailable, and does it require the accused to go to jail?",
  "What legal documents are needed to start a food delivery startup in Bangalore?",
  "Can parents evict an abusive adult son from their self-acquired house in India?",
  "What is the difference between a sale deed and a conveyance deed under RERA?",
  "How can I draft a formal reply to a legal notice sent by my former employer?",
  "Can a credit card company file a criminal case for outstanding credit card debt?",
  "Is it legal for a company to hold a month's salary as security deposit from employees?",
  "What are the legal steps to secure a patent for a medical device in India?",
  "How is ancestral property defined, and can it be sold by the father without kids' consent?",
  "Can a wife claim maintenance under Section 125 even if she is highly educated?",
  "What is the legal validity of an email as evidence in a commercial arbitration case?",
  "What legal actions can be taken against a company for selling duplicate products?",
  "How do I apply for a legal heir certificate after the sudden demise of my father?",
  "What should a tenant do if the landlord cuts off electricity or water supply illegally?",
  "Can I negotiate a one-time settlement (OTS) for an education loan after defaulting?",
  "What are the legal risks of running a startup without registering the company first?",
  "How do I draft an end-user license agreement (EULA) for a software-as-a-service app?",
  "Can a trademark be registered under a personal name instead of a business name?",
  "What is the recourse if a cooperative society refuses to issue a NOC for selling a flat?",
  "Is a mutual consent divorce valid if the one-year separation period is not complete?",
  "What are the legal consequences of breaching a non-disclosure agreement in India?",
  "How can I legally settle my business loan if my company goes into heavy losses?",
  "How do I draft a partnership deed with unequal profit sharing and capital contributions?",
  "What is the legal process to challenge a gift deed made under pressure or fraud?",
  "Can a father disinherit his son completely from his self-acquired property through a will?",
  "What legal remedies are available to a franchisee if the franchisor violates territory rights?",
  "How do I legally report a brand selling cheap copies of my trademarked product on Instagram?",
  "Does the SARFAESI Act apply to unsecured personal loans or only home/car loans?",
  "What is the cost of stamp duty for registering a sale deed of property in UP?",
  "Can a mother appoint a legal guardian for her child in her will if the father is alive?",
  "How do I legally draft a termination letter for a non-performing consulting contract?",
  "What legal actions can be taken against a partner who opened a competing business?",
  "How can a startup protect its trade secrets when pitching ideas to venture capital firms?",
  "What should I do if my CIBIL score is ruined due to a bank's error in loan reporting?",
  "Can a tenant claim rights to a property if they have been paying property tax for years?",
  "How is alimony calculated in Indian courts, and is it a one-time lump sum?",
  "Is a scanned copy of a contract signed on plain paper legally valid in India?",
  "What is the legal process to change the registered office of a company to another state?",
  "What legal protection exists for whistleblowers in private sector companies in India?"
];

const getCardStyle = (diff: number) => {
  if (diff === 0) {
    return {
      transform: "translateY(0) scale(1)",
      zIndex: 30,
      opacity: 1,
      pointerEvents: "auto" as const,
    };
  } else if (diff === 1) {
    return {
      transform: "translateY(16px) scale(0.95)",
      zIndex: 20,
      opacity: 0.8,
      pointerEvents: "auto" as const,
    };
  } else if (diff === 2) {
    return {
      transform: "translateY(32px) scale(0.90)",
      zIndex: 10,
      opacity: 0.45,
      pointerEvents: "auto" as const,
    };
  } else {
    return {
      transform: "translateY(40px) scale(0.85)",
      zIndex: 0,
      opacity: 0,
      pointerEvents: "none" as const,
    };
  }
};

export default function CommunityShowcase() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const total = communities.length;

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const isChatHoveredRef = React.useRef(false);

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.55; // pixels per frame for buttery smooth vertical movement

    const scroll = () => {
      if (!isChatHoveredRef.current) {
        container.scrollTop += speed;
        // Loop seamlessly once scrolled halfway through the duplicated array
        if (container.scrollTop >= container.scrollHeight / 2) {
          container.scrollTop = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  React.useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, total]);

  return (
    <section className="w-full bg-[#FAF9F6] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Top Badge and Headline Header */}
        <div className="mb-12 sm:mb-16">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2219] leading-tight tracking-tight mb-6 max-w-3xl">
            Connect with people facing similar legal challenges.
          </h2>
          <p className="text-gray-500 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Explore real conversations, shared experiences, and helpful discussions from a growing community learning and supporting each other.
          </p>
        </div>

        {/* Two-Column Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Endless Communities & Expert Lawyer Support */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            
            {/* Card 1: Endless Communities with Interactive Deck Stack */}
            <div className="bg-[#F3F2EC] rounded-[2rem] p-5 sm:p-10 flex flex-col justify-between items-center text-center shadow-sm relative group min-h-[460px]">
              
              {/* Card Stack Deck (Passive container) */}
              <div 
                className="relative w-full h-[235px] max-w-[340px] select-none mx-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {communities.map((card, index) => {
                  const diff = (index - activeIndex + total) % total;
                  const style = getCardStyle(diff);
                  
                  return (
                    <div
                      key={index}
                      style={style}
                      onClick={(e) => {
                        if (diff === 0) {
                          // Active card click cycles to next
                          setActiveIndex((prev) => (prev + 1) % total);
                        } else {
                          // Click on background card brings it directly to the front
                          e.stopPropagation();
                          setActiveIndex(index);
                        }
                      }}
                      className={`absolute top-0 left-0 w-full h-[195px] bg-white rounded-2xl p-5 border border-gray-100/50 flex flex-col justify-between overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${
                        diff === 0 
                          ? "shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)]" 
                          : diff === 1
                            ? "shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:opacity-90"
                            : "shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:opacity-70"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 w-full">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-50 rounded-xl shrink-0">
                            {card.icon}
                          </div>
                          <span className="text-[#2D241E] font-bold text-[14px] sm:text-[15px] text-left">
                            {card.title}
                          </span>
                        </div>
                        {/* Subtle 'Join' button/link */}
                        {diff === 0 && (
                          <a
                            href={card.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#D49B00] hover:text-[#B38000] text-xs font-extrabold shrink-0 hover:underline flex items-center gap-1 transition-colors duration-200"
                            onClick={(e) => e.stopPropagation()} // Prevent card cycling on link click
                          >
                            <span>Join</span>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 stroke-current stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="7" y1="17" x2="17" y2="7"></line>
                              <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                          </a>
                        )}
                      </div>
                      <p className="text-gray-500 text-[11px] sm:text-[12px] text-left leading-relaxed">
                        {card.description}
                      </p>
                      
                      {/* Dynamic Overlapping Ghost Text at the bottom of active card */}
                      {diff === 0 && (
                        <div className="text-left mt-1 opacity-60 select-none pointer-events-none">
                          <p className="text-[#8C8276]/80 text-[10px] font-bold tracking-wide uppercase leading-none truncate">
                            Next: {communities[(index + 1) % total].title}
                          </p>
                          <p className="text-[#8C8276]/45 text-[9px] font-bold tracking-wide uppercase mt-1 leading-none truncate">
                            Later: {communities[(index + 2) % total].title}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-4 mb-2 z-10 relative">
                {communities.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === idx 
                        ? "bg-[#D49B00] w-6" 
                        : "bg-[#2D241E]/20 hover:bg-[#2D241E]/40"
                    }`}
                    aria-label={`Go to community ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Endless communities Content */}
              <div className="mt-4 z-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2D241E] mb-3">
                  Endless communities
                </h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed px-2">
                  Explore legal communities built around real problems, real experiences, and people helping each other every day.
                </p>
              </div>
            </div>

            {/* Card 2: Expert Lawyer Support */}
            <div className="bg-[#F3F2EC] rounded-[2rem] pt-8 sm:pt-10 flex flex-col justify-between items-center text-center shadow-sm relative overflow-hidden min-h-[440px] group">
              <div className="mb-6 z-10 px-5 sm:px-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2D241E] mb-3">
                  Expert Lawyer Support
                </h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed px-2">
                  Get guidance from experienced lawyers inside AMA communities through expert discussions, practical insights, and real legal conversations.
                </p>
              </div>

              {/* Lawyer Photo connecting directly to parent container boundaries */}
              <div className="w-full relative mt-4 overflow-hidden aspect-[4/3] flex items-end">
                {/* Visual Gradient Fade Overlay at the top */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#F3F2EC] via-transparent to-transparent h-12 z-10 pointer-events-none"></div>
                <img
                  src="/lawyers.jpg"
                  alt="AMA Expert Lawyers"
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Chat Interface & CTA Section */}
          <div className="lg:col-span-7 bg-[#F3F2EC] rounded-[2rem] p-5 sm:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden min-h-[700px]">
            
            {/* Scroll/Fade Mask Overlay for Chat Top */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F3F2EC] to-transparent z-10 pointer-events-none"></div>

            {/* Chat Stream Section */}
            <div className="relative flex-grow h-[460px] mt-6 overflow-hidden">
              {/* Premium Top Gradient Fade Mask */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F3F2EC] via-[#F3F2EC]/85 to-transparent z-10 pointer-events-none"></div>
              {/* Subtle Bottom Gradient Fade Mask */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F3F2EC] to-transparent z-10 pointer-events-none"></div>

              {/* Scrolling Container */}
              <div
                ref={scrollContainerRef}
                className="w-full h-full overflow-y-hidden flex flex-col gap-4 py-4 pr-1 select-none cursor-pointer"
                onMouseEnter={() => {
                  isChatHoveredRef.current = true;
                }}
                onMouseLeave={() => {
                  isChatHoveredRef.current = false;
                }}
              >
                {/* 200 items (100 duplicated) to ensure perfect visual alignment and loop continuity */}
                {[...chatQuestions, ...chatQuestions].map((item, index) => {
                  const isEven = index % 2 === 0;
                  if (isEven) {
                    // Left received dark-gray
                    return (
                      <div
                        key={index}
                        className="flex items-end gap-3 max-w-[85%] shrink-0 transition-all duration-300"
                      >
                        <img
                          src="/indian_man.jpg"
                          alt="User Avatar"
                          className="w-9 h-9 rounded-full object-cover border border-gray-200 shrink-0"
                        />
                        <div className="bg-[#4A4A4A] text-white rounded-2xl rounded-bl-none px-5 py-3.5 text-sm sm:text-[15px] leading-relaxed shadow-sm hover:bg-[#575757] transition-colors duration-300">
                          {item}
                        </div>
                      </div>
                    );
                  } else {
                    // Right sent olive-green
                    return (
                      <div
                        key={index}
                        className="flex justify-end w-full shrink-0 transition-all duration-300"
                      >
                        <div className="bg-[#4C8200] text-white rounded-2xl rounded-br-none px-5 py-3.5 text-sm sm:text-[15px] leading-relaxed max-w-[80%] shadow-sm hover:shadow hover:bg-[#569300] transition-all duration-300">
                          {item}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>

            {/* Input field area & Bottom CTA */}
            <div className="mt-8 z-10">
              
              {/* Fake Input Search Bar */}
              <div className="flex items-center gap-3 w-full bg-[#E5E2D9] rounded-2xl p-1.5 pl-5 mb-8 shadow-inner border border-gray-300/30">
                <span className="text-[#8C8276] text-sm sm:text-[15px] flex-grow select-none">
                  Ask your legal doubt...
                </span>
                <button 
                  className="w-11 h-11 bg-[#2D241E] hover:bg-[#1E1714] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-[1.05] shrink-0"
                  aria-label="Send query"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-current stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>

              {/* CTA Description & Button */}
              <div className="text-center flex flex-col items-center">
                <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#2D241E] mb-3 leading-tight">
                  Join conversations that matter
                </h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
                  Connect with active WhatsApp communities where people discuss real legal issues, share experiences, and help each other with practical guidance.
                </p>

                {/* Dark Brown WhatsApp CTA Button */}
                <Link
                  href="/communities#communities"
                  className="flex items-center justify-center gap-3 w-full max-w-[380px] bg-[#2D241E] hover:bg-[#1E1714] text-white font-bold py-4 px-6 rounded-full text-base transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 group"
                >
                  <span>Powered through WhatsApp</span>
                  {/* WhatsApp SVG Logo (matching Hero section) */}
                  <svg 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-6 h-6 fill-[#25D366] group-hover:scale-110 transition-transform duration-300 shrink-0"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.459 5.705 1.459h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
