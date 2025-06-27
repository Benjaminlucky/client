import React from "react";

export default function About() {
  return (
    <section className="w-full text-black-700 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <h2 className="text-[29px] font-bold text-white leading-tight">
            About Gabvic Homes & Properties Limited
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed leading-8 text-justify hyphens-auto">
            Gabvic Homes & Properties Limited is a premier real estate
            development company dedicated to transforming Nigeria’s landscape
            through visionary projects. As a subsidiary of Gabvic Homes Limited,
            our mission is to deliver sustainable, secure, and high-return real
            estate investments exclusively within Nigeria. With deep market
            expertise and an unshakable commitment to integrity, we develop
            residential communities that redefine modern living while maximizing
            long-term value for investors and homeowners.
          </p>
        </div>

        {/* Right image */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <img
            src="/assets/aerial.jpeg"
            alt="Aerial View of Hilltop Castle Estate Phase II"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
