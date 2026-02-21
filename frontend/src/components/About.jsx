import React from "react";

const About = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-black">
            About <span className="text-blue-600">Nexon Services</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mt-3"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Nexon Services is a reliable service provider specializing in 
            promotional activities, gifting, stickering solutions, and 
            barcode labeling services for E-commerce companies and 
            courier & logistics businesses.
          </p>

          <p>
            We focus on timely service and customer satisfaction, ensuring 
            that every parcel and document reaches its destination safely 
            and professionally handled.
          </p>
        </div>

        {/* Highlight Box */}
        <div className="mt-10 bg-black text-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-blue-500 mb-3">
            What Makes Us Reliable
          </h3>
          <p className="text-gray-300">
            Accuracy, trained workforce, transparent pricing, and strict 
            compliance with E-commerce and courier standards — helping 
            businesses operate smoothly without delays.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;