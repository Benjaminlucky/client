"use client";

import { useState, useEffect, useCallback } from "react";
import { animate } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import throttle from "lodash.throttle";

/* ---------- Links shown in the navbar ---------- */
const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

/* ---------- Smooth-scroll helper (Framer Motion) ---------- */
function useScrollToSection() {
  return useCallback((id) => {
    if (typeof window === "undefined") return;

    const target = document.getElementById(id);
    if (!target) return;

    const offset = 80; // navbar height
    const y = target.getBoundingClientRect().top + window.scrollY - offset;

    animate(window.scrollY, y, {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  }, []);
}

/* =========================================================== */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [active, setActive] = useState(null); // id of highlighted link
  const [mounted, setMounted] = useState(false); // avoids hydration mismatch
  const scrollToSection = useScrollToSection();

  /* Mark client-side mount (prevents SSR/CSR class mismatch) */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ---------- Scroll-spy: pick section closest to navbar ---------- */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const navbarOffset = 80; // same height you used above

    const decideActive = () => {
      let bestId = navLinks[0].id;
      let bestDistance = Infinity;

      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;

        const distance = Math.abs(
          el.getBoundingClientRect().top - navbarOffset
        );

        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = id;
        }
      });

      setActive(bestId);
    };

    const throttled = throttle(decideActive, 100);

    decideActive(); // run once on mount
    window.addEventListener("scroll", throttled, { passive: true });
    window.addEventListener("resize", throttled, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttled);
      window.removeEventListener("resize", throttled);
      throttled.cancel && throttled.cancel();
    };
  }, []);

  /* ---------- Dynamic link classes ---------- */
  const linkClasses = (id) =>
    `px-4 w-full text-left py-2 rounded-md transition font-medium font-chivo text-lg block ${
      mounted && active === id
        ? "bg-golden-100 text-golden-700"
        : "text-black-700 hover:bg-golden-200"
    }`;

  /* ============== Mark-up ============== */
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1">
          {/* Logo             */}
          <button
            onClick={() => scrollToSection("home")}
            className="font-cinzel text-xl font-bold text-golden-600 focus:outline-none"
            aria-label="Go to top"
          >
            <img
              src="/assets/companyLogo.png"
              alt="Gabvic Logo"
              className="h-22"
            />
          </button>

          {/* Desktop menu     */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={linkClasses(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black-700 hover:text-golden-500 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setIsOpen(false);
              }}
              className={linkClasses(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
