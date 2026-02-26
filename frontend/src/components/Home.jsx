import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />

      {/* Main Container */}
      <div className="w-full min-h-screen pt-20 px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-center gap-12">

        {/* Text Content Left/Bottom */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-5">
          
          {/* Kicker / Overline */}
          <p className="text-sm md:text-base font-semibold tracking-wider text-gray-500 uppercase">
            Nexon Services
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Total Brand <span className="text-blue-600">Solution</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-gray-600 max-w-lg mt-2">
            End-to-end fulfillment, secure warehousing, and fast, reliable pickup & delivery across India for modern businesses.
          </p>

          {/* CTA Button */}
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/30 transform hover:-translate-y-1">
            Get In Touch
          </button>
        </div>

        {/* Image Right/Top */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="/BgImg7.png"
            alt="Nexon Services Hero"
            className="w-full sm:w-4/5 md:w-full max-full h-auto object-contain  h-full"
          />
        </div>

      </div>
    </>
  );
}

export default Home;