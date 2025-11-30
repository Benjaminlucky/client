"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Service } from "../data";

export default function ServicesManual() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  console.log("Services mounted", Date.now());

  useEffect(() => {
    const rootEl = document.querySelector("#__next") || null; // change if your scroll container has an id/class
    const opts = { root: null, threshold: 0.2 }; // set root to your inner scroll container if needed
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          console.log("ServicesManual intersecting");
          setVisible(true);
          // If you only need once, unobserve
          obs.disconnect();
        }
      });
    }, opts);

    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-20">
      <div className="container w-full mx-auto px-4">
        <h3 className="text-4xl font-bold mb-8">What We Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Service.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="service bg-gray-200 p-8 rounded"
            >
              {React.createElement(s.icon)}
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
