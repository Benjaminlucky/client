"use client";

import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { animate } from "framer-motion";

function scrollToId(id) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80;
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  animate(window.scrollY, y, {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1],
    onUpdate: (latest) => window.scrollTo(0, latest),
  });
}

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const id = params.get("scroll");
    if (!id) return;

    // small delay to ensure page content is painted before scrolling
    const t = setTimeout(() => {
      scrollToId(id);
      // Remove the query param from the URL so it won't re-trigger on refresh/back
      const url = new URL(window.location.href);
      url.searchParams.delete("scroll");
      window.history.replaceState({}, "", url.toString());
    }, 150);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <section className=" flex items-center justify-center" id="home">
        <Hero />
      </section>
      <section
        className="min-h-screen bg-black-900 flex items-center justify-center"
        id="about"
      >
        <About />
      </section>
      <section
        className="min-h-screen flex bg-gray-50 items-center justify-center"
        id="services"
      >
        <Services />
      </section>
      <section
        className="min-h-screen flex bg-black-900 items-center justify-center"
        id="projects"
      >
        <Projects />
      </section>
      <section
        className="min-h-screen bg-golden-50 flex items-center justify-center py-32"
        id="contact"
      >
        <Contact />
      </section>
    </>
  );
}
