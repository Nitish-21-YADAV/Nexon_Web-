import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate=useNavigate();

  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/AboutImg1.png"
              alt="About Nexon Services"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-6 text-gray-700">
            
            {/* Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                About <span className="text-blue-600">Nexon Services</span>
              </h2>
              <div className="w-20 h-1 bg-blue-600 mt-3"></div>
            </div>

            {/* Paragraph */}
            <p className="text-base md:text-lg leading-relaxed text-justify md:text-left">
              Nexon Services is regarded as one of India’s most trusted and seasoned integrated logistics companies. Built on a foundation of reliability, innovation, and operational excellence, we have grown into a complete logistics solutions provider, delivering specialized services in Freight Forwarding, Project Logistics, Supply Chain Management, Specialty Logistics, ISO Tank Depot operations, Empty Container Depot services, and MHE Leasing.
            </p>

            {/* Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300"
              onClick={()=>{navigate('/about')}}
            >
              Read More
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;