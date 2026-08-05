"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustedByGrid() {
  const logosTop = [
    { src: "/aboutclients/hdfc.png", alt: "HDFC Bank logo" },
    { src: "/aboutclients/billcut.png", alt: "Billcut logo" },
    { src: "/aboutclients/credsettle.png", alt: "CredSettle logo" },
    { src: "/aboutclients/settleloans.png", alt: "Settle Loans logo" },
  ];

  const logosBottom = [
    { src: "/aboutclients/jivosolutions.png", alt: "JIVO Solutions logo" },
    { src: "/aboutclients/societal.png", alt: "Societal logo" },
    { src: "/aboutclients/saga.png", alt: "Saga logo" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full bg-[#FDFBF7] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-bold text-gray-600 mb-10 sm:mb-12"
        >
          Trusted by People and Businesses
        </motion.h2>

        {/* 4-Logo Top Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full mb-4 sm:mb-6"
        >
          {logosTop.map((logo, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-white border border-[#EAE5D8] rounded-xl sm:rounded-2xl h-24 sm:h-32 flex items-center justify-center p-4 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#DED8C9]"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 150px, 200px"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3-Logo Bottom Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl mx-auto"
        >
          {logosBottom.map((logo, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-white border border-[#EAE5D8] rounded-xl sm:rounded-2xl h-24 sm:h-32 flex items-center justify-center p-4 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#DED8C9]"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 150px, 200px"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
