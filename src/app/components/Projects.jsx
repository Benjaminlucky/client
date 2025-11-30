import React from "react";
import { projects } from "../data";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="container w-full mx-auto items-center justify-center px-4">
      <div className="wrapper w-full max-w-7xl items-center justify-center mx-auto ">
        <div className="content text-gray-100">
          <div className="title text-center mb-8 text-4xl font-bold py-24">
            <h3>Our Landmark Development</h3>
          </div>
          <div className="projects grid grid-cols-1  md:grid-cols-2 gap-6 pb-32">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card bg-golden-800 p-8 rounded-sm "
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.estate}
                    className="w-full max-h-84 object-cover rounded-sm  hover:scale-105 transition-transform duration-300 "
                  />
                  <div className="absolute bottom-6 left-6 bg-black/60 font-semibold text-white text-lg px-4 py-2 rounded-md flex items-center gap-1">
                    <project.icon className="inline-block" />
                    {project.location}
                  </div>
                </div>
                <h4 className="text-xl py-6 font-bold mt-3 text-center">
                  {project.estate}
                </h4>
                <p className="text-lg min-h-50 text-gray-300 mt-1 text-justify">
                  {project.desc}
                </p>
                <Link
                  href={project.link}
                  className="mt-4 bg-golden-50 py-3 px-4 w-full text-center inline-block text-golden-500 font-semibold text-xl"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
