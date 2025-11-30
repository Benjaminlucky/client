import React from "react";
import {
  FaWater,
  FaBolt,
  FaVideo,
  FaShieldAlt,
  FaTh,
  FaDoorOpen, // <-- FIXED: replaces FaGate
} from "react-icons/fa";

// 1. Assign imported icons to clearly capitalized variables
const WaterIcon = FaWater;
const BoltIcon = FaBolt;
const VideoIcon = FaVideo;
const GateIcon = FaDoorOpen; // <-- FIXED
const ThIcon = FaTh;
const ShieldIcon = FaShieldAlt;
// Component to display the Amenities and Downloads sections
const EstateFeatures = () => {
  // 2. Define the list using the clearly assigned component variables
  const amenities = [
    { Component: WaterIcon, label: "Portable Water" },
    { Component: BoltIcon, label: "24/7 Electricity" },
    { Component: VideoIcon, label: "24/7 CCTV Surveillance" },
    { Component: GateIcon, label: "Gate House" }, // no longer undefined
    { Component: ThIcon, label: "Perimeter Fence" },
    { Component: ShieldIcon, label: "24/7 Security" },
  ];

  const downloads = [
    { label: "Download Flyer", href: "/downloads/flyer.pdf" },
    { label: "Download FAQ", href: "/downloads/faq.pdf" },
    { label: "Download Form", href: "/downloads/form.pdf" },
  ];

  return (
    <section className="bg-black-900 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Amenities Section === */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white font-cinzel mb-10">
            Amenities
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-8">
            {amenities.map(({ Component, label }, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-2 text-center"
              >
                {/* 3. The JSX syntax remains the same */}
                <Component className="text-golden-500 text-4xl sm:text-5xl mb-3" />
                <p className="text-sm text-gray-300 font-chivo">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- */}

        {/* === Downloads Section (unchanged) === */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white font-cinzel mb-10">
            Downloads
          </h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            {downloads.map((download, index) => (
              <a
                key={index}
                href={download.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-golden-500 text-white font-chivo font-bold py-3 px-8 rounded-lg shadow-xl
                  transition duration-300 ease-in-out transform hover:bg-golden-700 hover:scale-[1.02]
                  flex items-center justify-center space-x-2 w-full sm:w-auto
                "
              >
                <span>{download.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstateFeatures;
