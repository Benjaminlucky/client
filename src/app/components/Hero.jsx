"use client";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen w-full bg-black-900 text-white flex items-center border-b-12 border-golden-500">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* ---------- Left content ---------- */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
              Building Nigeria's Future One Estate at a Time
            </h1>

            <p className="text-lg text-gray-400 text-center md:text-left">
              Smart real estate investments. Thriving communities. Future-ready
              developments.
            </p>

            <Link
              href="/#projects"
              className="
                bg-golden-500 hover:bg-golden-700 transition-colors
                text-golden-100 font-semibold text-[17px]
                px-6 py-3 rounded-sm
                w-fit mx-auto md:mx-0
              "
            >
              View Projects
            </Link>
          </div>

          {/* ---------- Right image ---------- */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/gateHouse.webp"
              alt="Hilltop Castle Gate House"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
