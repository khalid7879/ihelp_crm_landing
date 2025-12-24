"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CrmHeroSection = () => {
  // Define animation variants for staggered appearance and elements moving into view
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children animations
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="py-16 md:py-24 bg-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* === HEADER & CTA Area === */}
        <motion.h1
          className="text-4xl md:text-6xl mt-5 font-extrabold text-gray-900 tracking-tight mb-4"
          variants={itemVariants}>
         AI-Driven CRM for Growing Teams  Simple, Affordable,  Powerful
        </motion.h1>

        <motion.p
          className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto mb-5"
          variants={itemVariants}>
         Track your entire sales pipeline in one centralized CRM. Automatically score leads, trigger follow-ups, 
         run targeted marketing campaigns, and increase team productivity—so you can convert more leads into revenue..
        </motion.p>

        {/* CTA Buttons - The 'motion.div' could also handle a slight lift/scale effect on hover */}
        <motion.div
          className="flex justify-center space-x-4 mb-5"
          variants={itemVariants}>
          <Link href="/contact">
            <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-700 transition duration-300">
              Get a demo
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 border-2 border-orange-500 text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 transition duration-300">
              Try CRM for free
            </button>
          </Link>
        </motion.div>

        <motion.p
          className="mt-4 text-sm text-gray-500 italic"
          variants={itemVariants}>
          See it in action or start your trial - no credit card required.
        </motion.p>

        {/* === MAIN DASHBOARD VISUAL (Image Placeholder) === */}
        <motion.div
          className="relative mt-5 shadow-2xl rounded-xl p-4 md:p-8 bg-gray-100/50 transform perspective-[1000px]"
          variants={itemVariants}
          // The 'whileHover' and 'whileInView' props from Framer Motion are great here
          // This will simulate the entire dashboard tilting slightly as it comes into view or on hover
          initial={{ rotateX: 5, scale: 0.95 }}
          animate={{ rotateX: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}>
          <img
            src="/images/hero.webp"
            alt="Flexible CRM Dashboard Interface"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
        <motion.p
          className="mt-15 text-4xl text-gray-500 italic"
          variants={itemVariants}>
          Powering customer operations for businesses across nearly every industry with IhelpBD CRM.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default CrmHeroSection;
