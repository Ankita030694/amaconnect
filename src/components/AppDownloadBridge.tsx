"use client";

import { 
  ShieldCheck, Users, Clock, HelpCircle, UserCheck, CheckCircle, 
  Apple, Play, Menu, Bell, CheckCircle2, BadgeCheck, 
  ThumbsUp, Share2, Lock, Home, MessageSquarePlus, MessageCircle, 
  Users2, User, Sun, Moon
} from "lucide-react";
import QRCode from "react-qr-code";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setActivityIndex((prev) => (prev + 1) % LIVE_ACTIVITIES.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 xl:pt-6 xl:pb-24 font-sans">
            <div className="flex flex-col gap-8">
                
                {/* Top Block: Text + Stats + How it works */}
                <div className="relative rounded-[2rem] p-8 md:p-10 xl:p-12 text-white bg-[#0A0A0A] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] border border-[#2D2219] z-10 overflow-hidden">
                    {/* Expanded background glows using the exact requested dark brown */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[900px] bg-[#2D2219] rounded-full blur-[160px] pointer-events-none -z-10" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#2D2219] rounded-full blur-[120px] pointer-events-none -z-10" />
                    
                    <div className="max-w-4xl mx-auto w-full">
                        
                        {/* Left Side: Text and Stats */}
                        <div className="flex flex-col gap-10">
                            
                            {/* Text Section */}
                            <div className="flex flex-col items-center text-center gap-5 relative z-10">
                                <span className="text-[#C9A227] font-bold tracking-widest text-xs uppercase">AMA Connect App</span>
                                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight">
                                    Ask a legal question. Get a verified answer.<br />
                                    <span className="text-[#C9A227]">All in one app.</span>
                                </h2>
                                <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed mt-2 max-w-xl mx-auto">
                                    Connect with verified lawyers, get instant advice, and resolve your legal issues with confidence.
                                </p>
                                
                                {/* Features List */}
                                <div className="flex flex-col sm:flex-row justify-center gap-x-6 gap-y-3 mt-2">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="text-[#C9A227] w-4 h-4 shrink-0" />
                                        <span className="text-[12px] text-gray-300 font-medium">Backed by <span className="text-white font-bold">AMA Legal Solutions</span></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="text-[#C9A227] w-4 h-4 shrink-0" />
                                        <span className="text-[12px] text-gray-300 font-medium"><span className="text-white font-bold">200+</span> Verified Lawyers</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="text-[#C9A227] w-4 h-4 shrink-0" />
                                        <span className="text-[12px] text-gray-300 font-medium">Avg. response: <span className="text-white font-bold">45 min</span></span>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Section (Joined) */}
                            <div className="bg-[#121212] rounded-2xl border border-white/10 p-6 flex flex-col gap-6 shadow-lg">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center border border-[#C9A227]/30 shadow-sm shrink-0">
                                            <svg className="w-6 h-6 text-[#C9A227]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-extrabold text-[17px] text-white">Trusted by Thousands</h4>
                                            <p className="text-[11px] text-gray-400 font-medium leading-relaxed">Real people. Real legal challenges.<br/>Real verified experts.</p>
                                        </div>
                                    </div>

                                    {/* Live Activity Block inside Stats */}
                                    <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-3 flex flex-col gap-2 min-w-[200px] shadow-sm shrink-0 w-full sm:w-auto">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shadow-[0_0_8px_rgba(37,211,102,0.5)]"></span>
                                            <span className="text-[11px] font-bold text-white tracking-wide">Live Activity</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 mt-1">
                                            <div className="flex -space-x-1.5 shrink-0">
                                                <div className="w-6 h-6 rounded-full border-2 border-[#1A1A1A] bg-gray-600 overflow-hidden relative"><Image src="/peoples.png" alt="Users" fill className="object-cover scale-[1.5]" /></div>
                                                <div className="w-6 h-6 rounded-full border-2 border-[#1A1A1A] bg-gray-600 overflow-hidden relative"><Image src="/peoples.png" alt="Users" fill className="object-cover scale-[2]" /></div>
                                                <div className="w-6 h-6 rounded-full border-2 border-[#1A1A1A] bg-gray-600 overflow-hidden relative"><Image src="/peoples.png" alt="Users" fill className="object-cover scale-[2.5]" /></div>
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
                                                        <p className="text-[10px] text-gray-400 font-medium leading-tight truncate">
                                                            <span className="text-white font-bold">{LIVE_ACTIVITIES[activityIndex].title}</span><br/>{LIVE_ACTIVITIES[activityIndex].sub}
                                                        </p>
                                                    </motion.div>
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-around sm:justify-between gap-6 pt-6 border-t border-white/10 px-2">
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-black text-[#C9A227] leading-none">150K+</div>
                                        <div className="text-[9px] text-gray-300 font-bold mt-2 uppercase tracking-widest">Questions Answered</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-black text-[#C9A227] leading-none">{APP_STATS.RATING}/5</div>
                                        <div className="text-[9px] text-gray-300 font-bold mt-2 uppercase tracking-widest">App Rating</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-black text-[#C9A227] leading-none">97%</div>
                                        <div className="text-[9px] text-gray-300 font-bold mt-2 uppercase tracking-widest">User Satisfaction</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-black text-[#C9A227] leading-none">24/7</div>
                                        <div className="text-[9px] text-gray-300 font-bold mt-2 uppercase tracking-widest">Support</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Block: Phone and Download */}
                <div className="relative rounded-[2rem] p-8 md:p-12 xl:p-14 text-white bg-[#2D2219] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] border border-[#4A382A] z-10 overflow-hidden flex flex-col xl:flex-row items-center justify-center xl:justify-around gap-12">
                    {/* Glowing Accents */}
                    <div className="absolute top-[-20%] right-[-10%] w-[350px] h-[350px] bg-[#C9A227]/20 rounded-full blur-[120px] pointer-events-none -z-10" />
                    <div className="absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] bg-black/60 rounded-full blur-[150px] pointer-events-none -z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C9A227]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
                    
                    {/* Subtle Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />
                    
                    {/* Smooth Vignette/Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/10 via-transparent to-black/40 pointer-events-none -z-10" />
                    
                    {/* Phone Column - Custom HTML/CSS Phone Render */}
                    <div className="w-full max-w-[380px] mx-auto overflow-visible flex items-center justify-center relative z-20">
                        {/* CUSTOM CSS FLOATING PHONE MOCKUP */}
                        <div className="transform rotate-[-6deg] hover:rotate-[-4deg] hover:-translate-y-2 transition-all duration-700 ease-out drop-shadow-[20px_40px_60px_rgba(0,0,0,0.8)] scale-90 sm:scale-95 xl:scale-100 origin-center">
                            
                            <div className={`relative w-[280px] sm:w-[300px] h-[600px] sm:h-[640px] rounded-[3rem] border-8 ${isDarkMode ? 'border-[#333] bg-[#050505]' : 'border-black bg-white'} shadow-inner overflow-hidden flex flex-col font-sans transition-colors duration-500`}>
                                {/* Dynamic Island / Notch */}
                                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[14px] h-[14px] bg-black rounded-full z-50"></div>
                                
                                {/* Screen Content - Themed */}
                                <div className={`w-full h-full flex flex-col pt-12 transition-colors duration-500 ${isDarkMode ? "bg-[#151515] text-white" : "bg-[#F8F7F6] text-[#2D2219]"}`}>
                                    {/* Top Bar */}
                                    <div className={`pb-3 px-5 flex items-center justify-between border-b transition-colors duration-500 ${isDarkMode ? "border-white/5" : "border-[#2D2219]/10"}`}>
                                       <Menu className={`w-5 h-5 transition-colors duration-500 ${isDarkMode ? "text-gray-400" : "text-[#2D2219]"}`} />
                                       <div className={`font-bold tracking-widest text-[10px] uppercase flex items-center gap-1.5 transition-colors duration-500 ${isDarkMode ? "text-gray-200" : "text-[#2D2219]"}`}>
                                           <div className="w-3.5 h-3.5 bg-[#C9A227] rounded-sm flex items-center justify-center"><ShieldCheck className="w-2.5 h-2.5 text-black" /></div>
                                           AMA Connect
                                       </div>
                                       <div className="flex items-center gap-2.5">
                                           <button onClick={() => setIsDarkMode(!isDarkMode)} className="outline-none">
                                               {isDarkMode ? <Sun className="w-4 h-4 text-gray-400 hover:text-white transition-colors" /> : <Moon className="w-4 h-4 text-[#2D2219] hover:text-[#C9A227] transition-colors" />}
                                           </button>
                                           <div className="relative">
                                               <Bell className={`w-4 h-4 transition-colors duration-500 ${isDarkMode ? "text-gray-400" : "text-[#2D2219]"}`} />
                                               <div className={`absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#C9A227] border rounded-full transition-colors duration-500 ${isDarkMode ? "border-[#151515]" : "border-[#F8F7F6]"}`}></div>
                                           </div>
                                       </div>
                                    </div>

                                    {/* How It Works Inside Phone */}
                                    <div className="flex-1 px-5 py-6 overflow-hidden flex flex-col justify-center gap-8">
                                        <div className="text-center mb-2">
                                            <h3 className={`font-extrabold text-[16px] transition-colors duration-500 ${isDarkMode ? "text-white" : "text-[#2D2219]"}`}>How it works</h3>
                                            <p className={`text-[10px] mt-1 transition-colors duration-500 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Simple steps to resolve your legal queries</p>
                                        </div>
                                        
                                        <div className="flex flex-col gap-6 relative px-2">
                                            {/* Step 1 */}
                                            <div className="flex items-start gap-4 relative">
                                                {/* Segment connecting to Step 2 */}
                                                <div className="absolute left-[15.5px] top-[24px] bottom-[-24px] w-[1px] bg-gradient-to-b from-[#C9A227] to-[#C9A227]/60 z-0"></div>
                                                <div className="w-8 h-8 rounded-full bg-[#C9A227] text-black flex items-center justify-center font-bold text-xs shrink-0 z-10 shadow-[0_0_10px_rgba(201,162,39,0.4)]">1</div>
                                                <div className="flex flex-col pt-1">
                                                    <h4 className={`font-bold text-[13px] mb-0.5 transition-colors duration-500 ${isDarkMode ? "text-white" : "text-[#2D2219]"}`}>Ask Your Question</h4>
                                                    <p className={`text-[11px] leading-relaxed transition-colors duration-500 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Post your legal question anonymously.</p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex items-start gap-4 relative">
                                                {/* Segment connecting to Step 3 */}
                                                <div className="absolute left-[15.5px] top-[24px] bottom-[-24px] w-[1px] bg-gradient-to-b from-[#C9A227]/60 to-[#C9A227]/10 z-0"></div>
                                                <div className="w-8 h-8 rounded-full bg-[#C9A227] text-black flex items-center justify-center font-bold text-xs shrink-0 z-10 shadow-[0_0_10px_rgba(201,162,39,0.4)]">2</div>
                                                <div className="flex flex-col pt-1">
                                                    <h4 className={`font-bold text-[13px] mb-0.5 transition-colors duration-500 ${isDarkMode ? "text-white" : "text-[#2D2219]"}`}>Verified Lawyers Respond</h4>
                                                    <p className={`text-[11px] leading-relaxed transition-colors duration-500 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Our experts review and respond with clarity.</p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex items-start gap-4 relative">
                                                <div className="w-8 h-8 rounded-full bg-[#C9A227] text-black flex items-center justify-center font-bold text-xs shrink-0 z-10 shadow-[0_0_10px_rgba(201,162,39,0.4)]">3</div>
                                                <div className="flex flex-col pt-1">
                                                    <h4 className={`font-bold text-[13px] mb-0.5 transition-colors duration-500 ${isDarkMode ? "text-white" : "text-[#2D2219]"}`}>Get Clarity. Resolve.</h4>
                                                    <p className={`text-[11px] leading-relaxed transition-colors duration-500 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Use the advice to make informed decisions.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Secure Line */}
                                    <div className={`flex items-center justify-center gap-1.5 py-3 border-t transition-colors duration-500 ${isDarkMode ? "border-white/5" : "border-[#2D2219]/10"}`}>
                                        <Lock className="w-3 h-3 text-[#25D366]" />
                                        <span className="text-[9px] font-medium text-[#25D366]">Your conversation is 100% secure</span>
                                    </div>

                                    {/* Bottom Nav */}
                                    <div className={`border-t pt-3 pb-6 px-8 flex justify-between items-center relative z-10 rounded-b-[1.2rem] transition-colors duration-500 ${isDarkMode ? "bg-gradient-to-b from-[#1E1E1E] to-[#121212] border-white/5" : "bg-[#2D2219] border-[#2D2219]"}`}>
                                        
                                        {/* Home (Active) */}
                                        <div className="flex flex-col items-center gap-1.5 text-[#C9A227]">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                                                <path d="M4 10 L12 3.5 L20 10 V20 A2 2 0 0 1 18 22 H6 A2 2 0 0 1 4 20 Z" />
                                                <circle cx="12" cy="14" r="2.5" />
                                            </svg>
                                            <span className="text-[10px] font-bold tracking-wide">Home</span>
                                        </div>

                                        {/* Services */}
                                        <div className={`flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-all cursor-pointer ${isDarkMode ? "text-gray-400 hover:text-white" : "text-white/50 hover:text-[#C9A227]"}`}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                                                <circle cx="6" cy="6" r="1.5" />
                                                <circle cx="6" cy="12" r="1.5" />
                                                <circle cx="6" cy="18" r="1.5" />
                                                <rect x="10.5" y="5" width="8.5" height="2" rx="1" fill="currentColor" stroke="none" />
                                                <rect x="10.5" y="11" width="8.5" height="2" rx="1" fill="currentColor" stroke="none" />
                                                <rect x="10.5" y="17" width="8.5" height="2" rx="1" fill="currentColor" stroke="none" />
                                            </svg>
                                            <span className="text-[10px] font-medium tracking-wide">Services</span>
                                        </div>

                                        {/* AMA */}
                                        <div className={`flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-all cursor-pointer ${isDarkMode ? "text-gray-400 hover:text-white" : "text-white/50 hover:text-[#C9A227]"}`}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                                                <path d="M20 15a2 2 0 0 1-2 2H7.5l-3.5 3.5V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                <rect x="8" y="9" width="8" height="2" rx="1" fill="currentColor" stroke="none" />
                                                <rect x="8" y="13" width="5" height="2" rx="1" fill="currentColor" stroke="none" />
                                            </svg>
                                            <span className="text-[10px] font-medium tracking-wide">AMA</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    {/* Download Section */}
                    <div className="flex flex-col items-center xl:items-start justify-center gap-5 shrink-0 z-20 w-full max-w-[300px]">
                        <h3 className="font-extrabold text-[28px] leading-tight text-white hidden xl:block mb-2">Get the<br/>AMA Connect App</h3>
                        <p className="font-bold text-[14px] text-center xl:text-left leading-snug text-gray-300 px-2 xl:px-0">Experience faster legal solutions directly on your phone.</p>
                        
                        {/* Premium QR Code */}
                        <div className="bg-[#121212] p-2.5 rounded-2xl border border-white/10 shadow-xl hidden lg:block">
                            <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center p-2">
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
                           <a href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" rel="noopener noreferrer" className="bg-[#121212] border border-white/10 rounded-xl px-4 py-3 flex items-center justify-center gap-3 hover:bg-white/10 transition-all group w-full shadow-lg">
                             <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0">
                               <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
                             </svg>
                             <div className="flex flex-col items-start">
                               <span className="text-[8px] text-gray-400 uppercase leading-none mb-0.5 tracking-wide">Download on the</span>
                               <span className="text-[14px] font-bold text-white leading-none tracking-wide">App Store</span>
                             </div>
                           </a>
                           <a href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" rel="noopener noreferrer" className="bg-[#121212] border border-white/10 rounded-xl px-4 py-3 flex items-center justify-center gap-3 hover:bg-white/10 transition-all group w-full shadow-lg">
                             <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 ml-0.5">
                               <path d="M3.25 1.55a1.73 1.73 0 0 0-.47 1.22v18.46a1.73 1.73 0 0 0 .47 1.22l.06.06L13.88 12v-.15L3.31 1.5z" fill="#00F0FF" />
                               <path d="M17.41 15.58L13.88 12v-.15L17.41 8.3l.08.05 4.17 2.37c1.19.67 1.19 1.78 0 2.46l-4.17 2.37-.08.03z" fill="#FFC700" />
                               <path d="M17.49 15.53L13.88 11.92L3.25 22.45a1.44 1.44 0 0 0 1.83.06l12.41-7.07" fill="#FF003F" />
                               <path d="M17.49 8.35L5.08 1.28A1.44 1.44 0 0 0 3.25 1.34L13.88 11.93l3.61-3.58" fill="#00E676" />
                             </svg>
                             <div className="flex flex-col items-start">
                               <span className="text-[8px] text-gray-400 uppercase leading-none mb-0.5 tracking-wide">GET IT ON</span>
                               <span className="text-[14px] font-bold text-white leading-none tracking-wide">Google Play</span>
                             </div>
                           </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}