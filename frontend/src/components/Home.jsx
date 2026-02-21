import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen pt-20 px-6 md:px-10 flex flex-col-reverse md:flex-row items-center justify-center gap-10 ">

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6">
          
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold leading-tight ml-30">
            NEXON SERVICES
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-6xl  font-bold text-blue-600">
            Total Brand Solution 
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-md md:ml-20 text-center mt-10">
            End-to-end fulfillment,Total Brand Solution  secure warehousing,fast & relaible pickup & delivery across India
            for modern businesses.
          </p>

          <button className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition ml-50">
            Get In Touch
          </button>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="/BgImg4.png"
            alt="Hero"
            className="w-full sm:w-4/5 md:w-full h-auto object-contain"
          />
        </div>

      </div>
    </>
  );
}

export default Home;










