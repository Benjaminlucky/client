"use client";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
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
