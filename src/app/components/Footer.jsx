"use client";
import React from "react";

export default function Footer({ className = "" }) {
  const year = new Date().getFullYear(); // same on server & client

  return (
    <footer className={`w-full bg-neutral-900 text-white ${className}`}>
      {/* Container keeps the content centred but no longer clips the background */}
      <div className="container  w-full max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
        <p className="">
          &copy; {year} All Rights
          Reserved&nbsp;|&nbsp;Gabvic Homes &amp; Properties Ltd.
        </p>
        <p>Developed by InspireMe Media Networks</p>
      </div>
    </footer>
  );
}
