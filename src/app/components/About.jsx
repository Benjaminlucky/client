"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const EASING = [0.25, 0.1, 0.25, 1];

export default function About() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, filter: "blur(15px)", y: 40 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 1.1, ease: EASING },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1, y: 60 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.3, ease: EASING },
    },
  };

  return (
    <section ref={ref} className="relative w-full py-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left content */}
        <motion.div variants={textVariants} className="space-y-6">
          <h2 className="text-[29px] font-bold text-golden-400 leading-tight">
            About Gabvic Homes & Properties Limited
          </h2>
          <p className="text-lg text-golden-100 leading-relaxed leading-8 text-justify hyphens-auto">
            Gabvic Homes & Properties Limited is a premier real estate
            development company dedicated to transforming Nigeria’s landscape
            through visionary projects. As a subsidiary of Gabvic Homes Limited,
            our mission is to deliver sustainable, secure, and high-return real
            estate investments exclusively within Nigeria. With deep market
            expertise and an unshakable commitment to integrity, we develop
            residential communities that redefine modern living while maximizing
            long-term value for investors and homeowners.
          </p>
        </motion.div>

        {/* Right image */}
        <motion.div
          variants={imageVariants}
          className="w-full rounded-lg overflow-hidden shadow-lg will-change-transform"
        >
          <img
            src="/assets/aerial.jpeg"
            alt="Aerial View of Hilltop Castle Estate Phase II"
            className="w-full h-auto object-cover transform-gpu"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
