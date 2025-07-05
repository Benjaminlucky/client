"use client";
import React from "react";
import { Service } from "../data";

export default function Services() {
  return (
    <div className="container w-full mx-auto px-4 py-16">
      <div className="wrapper max-w-7xl mx-auto">
        <div className="content w-full flex flex-col items-center justify-center">
          <div className="title text-4xl  font-bold py-22">
            <h3>What We Do</h3>
          </div>
          <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Service.map((service, index) => (
              <div
                className="service bg-gray-200 flex flex-col py-10 px-6 items-center justify-center rounded-sm  "
                key={index}
              >
                <div className="icon text-2xl text-white bg-golden-500 rounded-full p-4 mb-4 ">
                  {React.createElement(service.icon)}
                </div>
                <h4 className="text-center mb-6 text-golden-600 font-bold text-lg  transition duration-300 ease-in-out">
                  {service.title}
                </h4>
                <p className="desc text-center ">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
