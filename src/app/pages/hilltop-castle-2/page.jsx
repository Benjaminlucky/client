import React from "react";
import Head from "next/head";
import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image"; // Make sure 'Image' is imported
import EstateFeatures from "@/app/components/EstateFeatures";

// Assuming your image is located at: /public/assets/hilltopFrontGate.jpg
// If the image is inside a sub-folder of 'public', the path is correct: /assets/hilltopFrontGate.jpg

const HilltopCastleEstate = () => {
  const price = "N5,000,000";
  const locationText =
    "Located in Imokun Community, Poka-Eredo, Epe Lagos, Hilltop Castle Estate Phase 1 offers 600sqm serviced plots designed for discerning investors. Strategically positioned near key infrastructure like the Lekki-Epe Expressway, Dangote Refinery, Deep Seaport, Alaro City, and the new Lagos International Airport, this estate is primed for exponential growth.";
  const landmarks = [
    "Epe Resort",
    "Isimi Lagos",
    "Michael Otedola Housing Estate",
    "Yaba College of Technology",
    "Access Bank",
  ];

  return (
    <div className="min-h-screen bg-black-900 text-white font-chivo">
      <Head>
        <title>Hilltop Castle Estate Phase 2</title>
        <meta
          name="description"
          content="Hilltop Castle Estate Phase 1 in Shiraye Epe Lagos"
        />
      </Head>

      <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* ... Header Section ... */}
        <header className="text-center py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-cinzel mb-1">
            Hilltop Castle Estate Phase 2
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Shiraye Epe Lagos |{" "}
            <span className="text-golden-400 font-bold">
              Govt. Approved Excision
            </span>
          </p>

          <div className="inline-block px-4 py-2">
            <p className="text-5xl sm:text-6xl font-extrabold text-golden-400 font-cinzel">
              {price}
            </p>
          </div>
        </header>

        {/* === Image Section === */}
        <section className="mb-8">
          {/* FIX: Use relative positioning on the parent div when using layout="fill" */}
          <div className="relative w-full h-80 bg-black-700 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/assets/gateHouse.webp"
              alt="Hilltop Castle Estate Entrance"
              layout="fill" // Tells the image to fill the parent container
              objectFit="cover" // Ensures the image covers the area without distortion
            />
          </div>
        </section>

        {/* ... Details and Landmarks Section ... */}
        <section className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <p className="text-base leading-relaxed text-gray-300">
              <FaMapMarkerAlt className="flex flex-row text-justify leading-3 mr-2 text-golden-500 text-lg" />
              {locationText}
            </p>
          </div>

          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold text-golden-300 font-cinzel mb-4 border-b border-golden-800 pb-2">
              Landmarks
            </h2>
            <ul className="space-y-3">
              {landmarks.map((landmark, index) => (
                <li key={index} className="flex items-start text-gray-200">
                  <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-golden-500 text-lg" />
                  <span className="font-chivo">{landmark}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <EstateFeatures />
      </main>
    </div>
  );
};

export default HilltopCastleEstate;
