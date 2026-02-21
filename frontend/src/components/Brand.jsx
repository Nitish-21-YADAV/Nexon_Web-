import React from "react";

function Brands() {
  const logos = [
    "/logos/amazon.png",
    "/logos/flipkart.png",
    "/logos/meesho.png",
    "/logos/delhivery.png",
    "/logos/ekart.png",
  ];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl font-bold text-black">
          Trusted By <span className="text-blue-600">Leading Brands</span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-16 w-max">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="brand"
              className="h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;