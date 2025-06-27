"use client";
import Hero from "./components/Hero";
import About from "./components/About";

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
        className="min-h-screen flex items-center justify-center"
        id="services"
      >
        Services
      </section>
      <section
        className="min-h-screen flex items-center justify-center"
        id="projects"
      >
        Projects
      </section>
      <section
        className="min-h-screen flex items-center justify-center"
        id="contact"
      >
        Contact
      </section>
    </>
  );
}
