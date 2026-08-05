"use client";

import { 
  ShieldCheck, Users, Clock, HelpCircle, UserCheck, CheckCircle, 
  Apple, Play, Menu, Bell, CheckCircle2, BadgeCheck, 
  ThumbsUp, Share2, Lock, Home, MessageSquarePlus, MessageCircle, 
  Users2, User 
} from "lucide-react";
import QRCode from "react-qr-code";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { APP_STATS } from "@/lib/appStats";

const LIVE_ACTIVITIES = [
  { title: "27 questions", sub: "asked in last 15 mins" },
  { title: "Bengaluru client", sub: "matched with expert" },
  { title: "Corporate query", sub: "resolved in 12 mins" },
  { title: "150+ active users", sub: "browsing legal advice" },
  { title: "New startup", sub: "consulted a lawyer" }
];

export default function AppDownloadBridge() {
    const [activityIndex, setActivityIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActivityIndex((prev) => (prev + 1) % LIVE_ACTIVITIES.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 xl:pt-6 xl:pb-24 font-sans">
            
            {/* Top White Bar (Trusted Bar) - Moved above the dark block */}
            <div className="mb-8 bg-[#FDFBF0] rounded-2xl border border-[#EAE5D8] p-5 sm:p-6 lg:p-7 flex flex-col xl:flex-row items-center justify-between gap-8 shadow-sm relative z-0 max-w-[1300px] mx-auto">
                
                {/* Left: Trusted By */}
                <div className="flex items-center gap-4 shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-[#C9A227]/20 shadow-sm shrink-0">
                        <svg className="w-6 h-6 text-[#C9A227]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="font-extrabold text-[17px] text-[#0A0A0A]">Trusted by Thousands</h4>
                        <p className="text-[10px] text-gray-500 font-medium leading-relaxed mt-0.5">Real people. Real legal challenges.<br/>Real verified experts.</p>
                    </div>
                </div>

                {/* Middle: Stats */}
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 flex-1 xl:border-x border-[#EAE5D8]/50 px-4">
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-black text-[#C9A227] leading-none">150K+</div>
                        <div className="text-[9px] text-[#0A0A0A] font-bold mt-2 uppercase tracking-widest">Questions Answered</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-black text-[#C9A227] leading-none">{APP_STATS.RATING}/5</div>
                        <div className="text-[9px] text-[#0A0A0A] font-bold mt-2 uppercase tracking-widest">App Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-black text-[#C9A227] leading-none">97%</div>
                        <div className="text-[9px] text-[#0A0A0A] font-bold mt-2 uppercase tracking-widest">User Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-black text-[#C9A227] leading-none">24/7</div>
                        <div className="text-[9px] text-[#0A0A0A] font-bold mt-2 uppercase tracking-widest">Support</div>
                    </div>
                </div>

                {/* Right: Live Activity Block */}
                <div className="bg-white border border-[#EAE5D8] rounded-xl p-3.5 flex flex-col gap-2 min-w-[220px] shadow-sm shrink-0">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shadow-[0_0_8px_rgba(37,211,102,0.5)]"></span>
                        <span className="text-[11px] font-bold text-gray-800 tracking-wide">Live Activity</span>
                    </div>
                    <div className="flex items-center gap-2.5 mt-1">
                        <div className="flex -space-x-1.5 shrink-0">
                            <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden"><img src="/peoples.png" alt="Users" className="w-full h-full object-cover scale-[1.5]" /></div>
                            <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden"><img src="/peoples.png" alt="Users" className="w-full h-full object-cover scale-[2]" /></div>
                            <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden"><img src="/peoples.png" alt="Users" className="w-full h-full object-cover scale-[2.5]" /></div>
                        </div>
                        <div className="flex flex-col relative w-[120px] h-[30px] overflow-hidden ml-1">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activityIndex}
                                    initial={{ y: 15, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -15, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 flex flex-col justify-center"
                                >
                                    <p className="text-[10px] text-gray-500 font-medium leading-tight truncate">
                                        <span className="text-gray-900 font-bold">{LIVE_ACTIVITIES[activityIndex].title}</span><br/>{LIVE_ACTIVITIES[activityIndex].sub}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Outer Container - Strict CSS Grid for precise column boundaries */}
            <div className="relative rounded-[2rem] p-8 md:p-12 xl:p-12 text-white grid grid-cols-1 xl:grid-cols-[1.4fr_1fr_1.2fr_0.8fr] gap-12 xl:gap-6 items-center xl:items-start shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] border border-[#2D2219] z-10">
                
                {/* Background Layer with Glows */}
                <div className="absolute inset-0 bg-[#0A0A0A] rounded-[2rem] overflow-hidden -z-10">
                    <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A227]/10 rounded-full blur-[140px] pointer-events-none" />
                </div>

                {/* Left Column (1fr) */}
                <div className="flex flex-col gap-5 relative z-10 xl:pr-4">
                    <span className="text-[#C9A227] font-bold tracking-widest text-xs uppercase">AMA Connect App</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight">
                        Ask a legal question.<br />Get a verified answer.<br />
                        <span className="text-[#C9A227]">All in one app.</span>
                    </h2>
                    <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed mt-2">
                        Connect with verified lawyers, get instant advice, and resolve your legal issues with confidence.
                    </p>
                    
                    {/* Simplified Horizontal Stats Row */}
                    <div className="flex flex-col sm:flex-row xl:flex-col gap-x-5 gap-y-3 mt-4">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="text-[#C9A227] w-4 h-4 shrink-0" />
                            <span className="text-[11px] sm:text-xs text-gray-300 font-medium whitespace-nowrap">Backed by <span className="text-white font-bold">AMA Legal Solutions</span></span>
                        </div>
                        <div className="hidden sm:block xl:hidden w-[1px] h-3 bg-white/20"></div>
                        <div className="flex items-center gap-2">
                            <Users className="text-[#C9A227] w-4 h-4 shrink-0" />
                            <span className="text-[11px] sm:text-xs text-gray-300 font-medium whitespace-nowrap"><span className="text-white font-bold">200+</span> Verified Lawyers</span>
                        </div>
                        <div className="hidden sm:block xl:hidden w-[1px] h-3 bg-white/20"></div>
                        <div className="flex items-center gap-2">
                            <Clock className="text-[#C9A227] w-4 h-4 shrink-0" />
                            <span className="text-[11px] sm:text-xs text-gray-300 font-medium whitespace-nowrap">Avg. response: <span className="text-white font-bold">45 min</span></span>
                        </div>
                    </div>
                </div>

                {/* Middle Column (1fr) - How it works timeline */}
                <div className="flex flex-col gap-5 relative z-10 w-full max-w-[340px] mx-auto">
                    <h3 className="text-[#C9A227] font-bold tracking-widest text-xs uppercase mb-1">How it works</h3>
                    
                    <div className="flex flex-col gap-6 relative">
                        
                        {/* Step 1 */}
                        <div className="flex items-start gap-4 relative">
                            {/* Segment connecting to Step 2 */}
                            <div className="absolute left-[19.5px] top-[20px] bottom-[-44px] w-[1px] bg-gradient-to-b from-[#C9A227] to-[#C9A227]/60 z-0"></div>
                            <div className="w-10 h-10 rounded-full bg-[#C9A227] text-[#0A0A0A] flex items-center justify-center font-bold text-base shrink-0 z-10 shadow-[0_0_15px_rgba(201,162,39,0.3)]">1</div>
                            <div className="bg-[#121212] border border-[#2D2219] rounded-2xl p-4 flex gap-3.5 w-full shadow-lg z-10 relative">
                                <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center shrink-0">
                                    <MessageSquarePlus className="text-[#C9A227] w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[13px] mb-1 text-white">Ask Your Question</h4>
                                    <p className="text-[11px] text-gray-400 leading-relaxed">Post your legal question anonymously in simple steps.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex items-start gap-4 relative">
                            {/* Segment connecting to Step 3 */}
                            <div className="absolute left-[19.5px] top-[20px] bottom-[-44px] w-[1px] bg-gradient-to-b from-[#C9A227]/60 to-[#C9A227]/10 z-0"></div>
                            <div className="w-10 h-10 rounded-full bg-[#C9A227] text-[#0A0A0A] flex items-center justify-center font-bold text-base shrink-0 z-10 shadow-[0_0_15px_rgba(201,162,39,0.3)]">2</div>
                            <div className="bg-[#121212] border border-[#2D2219] rounded-2xl p-4 flex gap-3.5 w-full shadow-lg z-10 relative">
                                <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center shrink-0">
                                    <UserCheck className="text-[#C9A227] w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[13px] mb-1 text-white">Verified Lawyers Respond</h4>
                                    <p className="text-[11px] text-gray-400 leading-relaxed">Our verified experts review and respond with clarity.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex items-start gap-4 relative">
                            <div className="w-10 h-10 rounded-full bg-[#C9A227] text-[#0A0A0A] flex items-center justify-center font-bold text-base shrink-0 z-10 shadow-[0_0_15px_rgba(201,162,39,0.3)]">3</div>
                            <div className="bg-[#121212] border border-[#2D2219] rounded-2xl p-4 flex gap-3.5 w-full shadow-lg z-10 relative">
                                <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center shrink-0">
                                    <CheckCircle className="text-[#C9A227] w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[13px] mb-1 text-white">Get Clarity. Resolve Confidently.</h4>
                                    <p className="text-[11px] text-gray-400 leading-relaxed">Use the advice to make informed decisions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Phone Column (1.2fr) - Custom HTML/CSS Phone Render */}
                <div className="w-full max-w-[380px] mx-auto overflow-visible flex items-center justify-center relative z-20 xl:pl-6">
                    
                    {/* CUSTOM CSS FLOATING PHONE MOCKUP */}
                    <div className="transform rotate-[-8deg] hover:rotate-[-6deg] hover:-translate-y-2 transition-all duration-700 ease-out xl:-mt-10 xl:-mb-10 drop-shadow-[20px_40px_60px_rgba(0,0,0,0.8)] scale-90 xl:scale-95 origin-center">
                        
                        <div className="relative w-[280px] sm:w-[300px] h-[600px] sm:h-[640px] bg-[#050505] rounded-[3rem] border-8 border-[#333] shadow-inner overflow-hidden flex flex-col font-sans">
                            {/* Dynamic Island / Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[28px] bg-black rounded-b-[1.2rem] z-50"></div>
                            
                            {/* Screen Content - Dark Mode */}
                            <div className="w-full h-full bg-[#151515] text-white flex flex-col pt-12">
                                {/* Top Bar */}
                                <div className="pb-3 px-5 flex items-center justify-between border-b border-white/5">
                                   <Menu className="w-5 h-5 text-gray-400" />
                                   <div className="font-bold tracking-widest text-[10px] uppercase flex items-center gap-1.5 text-gray-200">
                                       <div className="w-3.5 h-3.5 bg-[#C9A227] rounded-sm flex items-center justify-center"><ShieldCheck className="w-2.5 h-2.5 text-black" /></div>
                                       AMA Connect
                                   </div>
                                   <div className="relative">
                                       <Bell className="w-5 h-5 text-gray-400" />
                                       <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#C9A227] border border-[#151515] rounded-full"></div>
                                   </div>
                                </div>

                                {/* Chat Content */}
                                <div className="flex-1 px-4 py-5 overflow-hidden flex flex-col gap-4">
                                   {/* User Question */}
                                   <div className="flex flex-col gap-1.5 self-end w-[85%]">
                                      <div className="flex justify-between items-end px-1">
                                         <span className="text-[9px] text-[#C9A227] font-semibold">Your Question</span>
                                         <span className="text-[9px] text-gray-500">2:35 PM</span>
                                      </div>
                                      <div className="bg-[#2D2219] border border-[#C9A227]/30 rounded-2xl rounded-tr-sm p-3.5 shadow-sm">
                                         <p className="text-[12px] leading-snug">Can my landlord increase the rent without my consent?</p>
                                      </div>
                                      <div className="text-[9px] text-gray-500 mt-0.5 ml-1">
                                         Posted in <span className="text-[#C9A227]">Landlord & Tenant</span>
                                      </div>
                                   </div>

                                   {/* System Match Message */}
                                   <div className="flex items-center justify-center gap-1.5 my-1">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                                      <span className="text-[10px] text-[#25D366] font-medium">Matched with a verified lawyer</span>
                                   </div>

                                   {/* Lawyer Reply Card */}
                                   <div className="bg-[#1E1E1E] border border-white/10 rounded-2xl p-4 shadow-sm relative mt-2">
                                       <span className="absolute top-3 right-3 text-[9px] text-gray-500">2:58 PM</span>
                                       <div className="flex items-center gap-3 mb-3">
                                           <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden shrink-0 border border-white/10">
                                              <img src="/peoples.png" className="w-full h-full object-cover scale-[2]" alt="Lawyer profile" />
                                           </div>
                                           <div className="flex flex-col">
                                               <div className="flex items-center gap-1">
                                                   <span className="font-bold text-[13px]">Rohit Sharma</span>
                                                   <BadgeCheck className="w-3.5 h-3.5 text-[#C9A227] fill-[#C9A227] text-black" />
                                               </div>
                                               <span className="text-[9px] text-gray-400 leading-tight mt-0.5">Senior Associate<br/>8+ Years Experience</span>
                                           </div>
                                       </div>
                                       
                                       <p className="text-[12px] text-gray-200 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                                           Rent cannot be increased without your consent during the agreed period. Please share your agreement.
                                       </p>
                                       
                                       <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/5">
                                           <button className="flex items-center gap-1.5 text-[10px] font-medium text-gray-400 hover:text-white transition-colors">
                                               <ThumbsUp className="w-3.5 h-3.5" /> Helpful
                                           </button>
                                           <button className="flex items-center gap-1.5 text-[10px] font-medium text-gray-400 hover:text-white transition-colors">
                                               <Share2 className="w-3.5 h-3.5" /> Share
                                           </button>
                                       </div>
                                   </div>
                                </div>
                                
                                {/* Secure Line */}
                                <div className="flex items-center justify-center gap-1.5 py-3 border-t border-white/5">
                                    <Lock className="w-3 h-3 text-[#25D366]" />
                                    <span className="text-[9px] font-medium text-[#25D366]">Your conversation is 100% secure</span>
                                </div>

                                {/* Bottom Nav */}
                                <div className="bg-[#0A0A0A] border-t border-white/5 pt-3 pb-6 px-6 flex justify-between items-center relative z-10">
                                    <div className="flex flex-col items-center gap-1 opacity-40"><Home className="w-5 h-5"/><span className="text-[8px] font-medium">Home</span></div>
                                    <div className="flex flex-col items-center gap-1 opacity-40"><MessageSquarePlus className="w-5 h-5"/><span className="text-[8px] font-medium">Ask</span></div>
                                    <div className="flex flex-col items-center gap-1 text-[#C9A227]"><MessageCircle className="w-5 h-5 fill-current"/><span className="text-[8px] font-bold">Chats</span></div>
                                    <div className="flex flex-col items-center gap-1 opacity-40"><Users2 className="w-5 h-5"/><span className="text-[8px] font-medium">Communities</span></div>
                                    <div className="flex flex-col items-center gap-1 opacity-40"><User className="w-5 h-5"/><span className="text-[8px] font-medium">Profile</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                {/* Download Section (0.8fr) */}
                <div className="flex flex-col items-center xl:items-start justify-center gap-5 shrink-0 z-20 w-full xl:pl-4">
                        <p className="font-bold text-[14px] text-center leading-snug text-white hidden lg:block px-2">Continue your legal journey on the AMA Connect app.</p>
                        
                        {/* Premium QR Code */}
                        <div className="bg-[#121212] p-2.5 rounded-2xl border border-white/10 shadow-xl hidden lg:block">
                            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-2">
                                <QRCode value="https://amaconnect.in/get" size={100} style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
                            </div>
                        </div>
                        <span className="text-[#C9A227] font-bold text-[10px] tracking-widest uppercase hidden lg:block mt-1">Scan to Download</span>
                        
                        <div className="hidden lg:flex items-center gap-3 w-full opacity-50 my-1">
                            <div className="h-px bg-white/30 flex-1" />
                            <span className="text-[8px] text-white font-bold uppercase tracking-widest whitespace-nowrap">Or Download From</span>
                            <div className="h-px bg-white/30 flex-1" />
                        </div>
                        
                        {/* Stacked App Buttons */}
                        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto lg:w-full">
                           <a href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" rel="noopener noreferrer" className="bg-[#121212] border border-white/10 rounded-xl px-4 py-2.5 flex items-center justify-center gap-3 hover:bg-white/10 transition-all group w-full">
                             <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0">
                               <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
                             </svg>
                             <div className="flex flex-col items-start">
                               <span className="text-[8px] text-gray-400 uppercase leading-none mb-0.5 tracking-wide">Download on the</span>
                               <span className="text-[13px] font-bold text-white leading-none tracking-wide">App Store</span>
                             </div>
                           </a>
                           <a href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" rel="noopener noreferrer" className="bg-[#121212] border border-white/10 rounded-xl px-4 py-2.5 flex items-center justify-center gap-3 hover:bg-white/10 transition-all group w-full">
                             <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 ml-0.5">
                               <path d="M3.25 1.55a1.73 1.73 0 0 0-.47 1.22v18.46a1.73 1.73 0 0 0 .47 1.22l.06.06L13.88 12v-.15L3.31 1.5z" fill="#00F0FF" />
                               <path d="M17.41 15.58L13.88 12v-.15L17.41 8.3l.08.05 4.17 2.37c1.19.67 1.19 1.78 0 2.46l-4.17 2.37-.08.03z" fill="#FFC700" />
                               <path d="M17.49 15.53L13.88 11.92L3.25 22.45a1.44 1.44 0 0 0 1.83.06l12.41-7.07" fill="#FF003F" />
                               <path d="M17.49 8.35L5.08 1.28A1.44 1.44 0 0 0 3.25 1.34L13.88 11.93l3.61-3.58" fill="#00E676" />
                             </svg>
                             <div className="flex flex-col items-start">
                               <span className="text-[8px] text-gray-400 uppercase leading-none mb-0.5 tracking-wide">GET IT ON</span>
                               <span className="text-[13px] font-bold text-white leading-none tracking-wide">Google Play</span>
                             </div>
                           </a>
                        </div>
                    </div>
                </div>


        </section>
    );
}