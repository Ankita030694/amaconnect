"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import { Star, ShieldCheck, Lock, Clock, HandCoins, CheckCircle2 } from "lucide-react";

// Expanded list of reviews for dynamic cycling
const allReviews = [
  {
    id: 1,
    name: "Rajesh K.",
    role: "Business Owner",
    content: "AMA Connect changed how I handle my legal issues. Fast, reliable, and completely transparent. The experts are top-notch!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya S.",
    role: "Freelancer",
    content: "I had a property dispute and the lawyer I connected with was incredibly helpful. Highly recommend this platform for anyone needing legal help.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit V.",
    role: "Homeowner",
    content: "Finally an app that makes legal advice accessible. Got my query answered in 30 mins. It gave me so much peace of mind.",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha M.",
    role: "Startup Founder",
    content: "Drafting contracts used to be a headache. The lawyers here made it seamless and extremely affordable.",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram D.",
    role: "Software Engineer",
    content: "I needed quick advice on an employment agreement. I was connected to a verified expert instantly. 10/10 experience.",
    rating: 5,
  },
  {
    id: 6,
    name: "Sneha R.",
    role: "Artist",
    content: "Amazing platform for copyright issues. The privacy feature is great, and the advice I got was incredibly detailed.",
    rating: 5,
  },
  {
    id: 7,
    name: "Rahul T.",
    role: "Retailer",
    content: "Had a vendor dispute and AMA Connect helped me understand my legal rights clearly. Saved me a lot of money and stress.",
    rating: 5,
  },
  {
    id: 8,
    name: "Anjali P.",
    role: "Doctor",
    content: "Very professional and secure. I appreciate how quickly the lawyers respond and how confidential everything is.",
    rating: 5,
  },
  {
    id: 9,
    name: "Karan S.",
    role: "Student",
    content: "I had questions regarding a rental lease. The lawyer explained the terms simply. Very grateful for this service.",
    rating: 5,
  },
];

const trustItems = [
  { icon: ShieldCheck, title: "Verified Lawyers" },
  { icon: Lock, title: "Secure & Confidential" },
  { icon: Clock, title: "Quick Response" },
  { icon: HandCoins, title: "Affordable Solutions" },
];

export default function ReviewsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  
  const [startIndex, setStartIndex] = useState(0);

  // Auto-cycle reviews every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 3) % allReviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const visibleReviews = allReviews.slice(startIndex, startIndex + 3);

  const gridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.4 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="relative w-full max-w-[1400px] mx-auto bg-[#0D0D0D] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden sm:rounded-[2.5rem] my-8 sm:my-10 border border-[#D4AF37]/10 shadow-2xl">
      
      {/* --- Background Details --- */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,30,30,0.5)_0%,rgba(13,13,13,1)_100%)] pointer-events-none" />
      
      {/* Flowing golden mesh waves & radial gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-[radial-gradient(circle,rgba(212,175,55,0.04)_0%,transparent_70%)] blur-[80px] pointer-events-none" />
      
      {/* Faint dotted decorative patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Large translucent quotation marks on upper corners */}
      <div className="absolute top-8 left-8 sm:left-12 opacity-[0.04] pointer-events-none">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="#D4AF37" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.731 1.039 8.983 0L9.98 2.151C7.548 3.068 5.985 5.789 5.985 8H10V18H0Z"/>
        </svg>
      </div>
      <div className="absolute top-8 right-8 sm:right-12 opacity-[0.04] pointer-events-none transform scale-x-[-1]">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="#D4AF37" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.731 1.039 8.983 0L9.98 2.151C7.548 3.068 5.985 5.789 5.985 8H10V18H0Z"/>
        </svg>
      </div>
      
      {/* Tiny floating particles / light streaks */}
      <div className="absolute left-[20%] top-[25%] w-1.5 h-1.5 bg-[#D4AF37] rounded-full blur-[1px] opacity-30 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
      <div className="absolute right-[25%] top-[15%] w-2 h-2 bg-[#D4AF37] rounded-full blur-[1px] opacity-20 animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite_1s]" />
      <div className="absolute left-[15%] bottom-[25%] w-1 h-1 bg-[#D4AF37] rounded-full blur-[1px] opacity-40 animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute right-[10%] bottom-[20%] w-1 h-1 bg-white rounded-full blur-[1px] opacity-20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_2s]" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10" ref={containerRef}>
        
        {/* --- Top Center Badge --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-3 bg-white/5 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 shadow-[0_4px_24px_rgba(212,175,55,0.08)] mb-6 transition-transform duration-300 cursor-default"
        >
          {/* Google Icon */}
          <div className="flex items-center justify-center bg-white rounded-full p-1 shadow-sm">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
          
          <span className="font-semibold text-white text-[13px]">4.9</span>
          
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
          
          <div className="w-[1px] h-3 bg-white/15 ml-1 mr-1" />
          
          <span className="text-gray-300 text-[12px] font-medium">
            Based on 500+ reviews
          </span>
        </motion.div>

        {/* --- Heading & Paragraph --- */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white text-center mb-3 tracking-tight leading-[1.1]"
        >
          Trusted by thousands of <br className="hidden sm:block" />
          <span className="text-[#D4AF37]">happy users.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-gray-400 text-[14px] sm:text-[15px] text-center max-w-[600px] leading-relaxed mb-8 font-medium"
        >
          Don't just take our word for it. Here is what people are saying about their experience with AMA Connect's legal services.
        </motion.p>

        {/* --- Dynamic Testimonial Cards --- */}
        <div className="w-full overflow-hidden pb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex overflow-x-auto sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 hide-scrollbar"
            >
              {visibleReviews.map((review) => (
                  <motion.div
                    key={review.id}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    className="group relative flex flex-col w-[300px] shrink-0 sm:w-auto h-full bg-[#1A1A1A]/40 backdrop-blur-2xl rounded-[20px] p-6 border border-[#D4AF37]/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_6px_24px_rgba(0,0,0,0.3)] transition-all duration-500 hover:bg-[#1A1A1A]/60 hover:border-[#D4AF37]/40 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]"
                  >
                      {/* Inner soft highlight */}
                      <div className="absolute inset-0 rounded-[20px] border border-white/[0.02] pointer-events-none" />
                      
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-[16px] h-[16px] text-[#D4AF37] fill-[#D4AF37]" />
                          ))}
                      </div>
                      
                      {/* Testimonial Content */}
                      <p className="text-gray-300 text-[14px] leading-[1.6] mb-5 flex-grow font-medium relative z-10">
                          "{review.content}"
                      </p>
                      
                      {/* User Info */}
                      <div className="flex items-center gap-3 mt-auto relative z-10">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#9E7A15] rounded-full flex items-center justify-center text-[#0D0D0D] font-bold text-base shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)]">
                            {review.name.charAt(0)}
                          </div>
                          <div className="flex flex-col">
                            <h4 className="font-bold text-white text-[14px] mb-0.5 tracking-wide">{review.name}</h4>
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                                <span className="text-gray-400 text-[12px] font-medium">{review.role}</span>
                            </div>
                          </div>
                      </div>
                  </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- Bottom Trust Bar --- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-8 sm:mt-12 w-full border-t border-white/[0.06] pt-6 sm:pt-8"
        >
          <div className="flex flex-wrap justify-center sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-y-6 gap-x-6 max-w-5xl mx-auto w-full">
            {trustItems.map((item, index) => (
              <div key={index} className="flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 group relative flex-1">
                <div className="flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[5deg]">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] stroke-[1.5]" />
                </div>
                <span className="text-gray-300 text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase whitespace-nowrap">{item.title}</span>
                
                {/* Dividers */}
                {index !== trustItems.length - 1 && (
                  <div className="hidden lg:block absolute right-[-12px] top-1/2 -translate-y-1/2 w-[1px] h-6 bg-white/10" />
                )}
                {index % 2 === 0 && (
                  <div className="hidden sm:block lg:hidden absolute right-[-12px] top-1/2 -translate-y-1/2 w-[1px] h-6 bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
