"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
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

function scrollToId(id) {
  if (typeof window === "undefined") return;
  const target = document.getElementById(id);
  if (!target) return;
  const offset = 80;
  const y = target.getBoundingClientRect().top + window.scrollY - offset;
  animate(window.scrollY, y, {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1],
    onUpdate: (latest) => window.scrollTo(0, latest),
  });
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  /* scroll-spy on pages that have the sections (only runs when those elements exist) */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const navbarOffset = 80;
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
    decideActive();
    window.addEventListener("scroll", throttled, { passive: true });
    window.addEventListener("resize", throttled, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttled);
      window.removeEventListener("resize", throttled);
      throttled.cancel && throttled.cancel();
    };
  }, []);

  const linkClasses = (id) =>
    `px-4 w-full text-left py-2 rounded-md transition font-medium font-chivo text-lg block ${
      mounted && active === id
        ? "bg-golden-100 text-golden-700"
        : "text-black-700 hover:bg-golden-200"
    }`;

  /* When user clicks a nav link */
  const handleNavClick = (id) => {
    // If already on homepage, just scroll
    if (pathname === "/") {
      scrollToId(id);
      setIsOpen(false);
      return;
    }

    // Not on homepage -> navigate to homepage with query telling it to scroll after load
    // We use search param ?scroll=<id>
    router.push(`/?scroll=${encodeURIComponent(id)}`);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1">
          <button
            onClick={() => handleNavClick("home")}
            className="font-cinzel text-xl font-bold text-golden-600 focus:outline-none"
            aria-label="Go to top"
          >
            <img
              src="/assets/companyLogo.png"
              alt="Gabvic Logo"
              className="h-22"
            />
          </button>

          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={linkClasses(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

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

      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                handleNavClick(link.id);
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
