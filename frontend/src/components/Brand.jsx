import React from "react";

function Brands() {
  const logos = ["/Brand1.png", "/Brand2.png", "/Brand3.png"];

  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Trusted By <span className="text-blue-600">Leading Brands</span>
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center justify-center">
        <div className="flex gap-50 w-max items-center justify-around ">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="brand"
              className="h-30  object-contain hover:scale-110 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;