import React from "react";

export default function Track() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      
      {/* HERO SECTION */}
      <div
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0f1b2d]/90"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 text-center text-white">
          <p className="text-blue-500 font-semibold tracking-widest uppercase">
            🚛 Tracking
          </p>

          <h1 className="text-5xl font-bold leading-tight mt-4">
            Track the Status of Your <br /> Shipment Instantly
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Enter your tracking number to get real-time updates on your
            shipment’s location and delivery status.
          </p>

          {/* Tracking Input */}
          <div className="mt-10 flex justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Enter your tracking number"
              className="w-[500px] h-14 rounded-full px-6 text-gray-700 focus:outline-none bg-white"
            />
            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-8 h-14 rounded-full font-semibold flex items-center gap-2">
              Track Now →
            </button>
          </div>
        </div>
      </div>

      {/* FORM CARD */}
      <div className="max-w-5xl mx-auto -mt-28 px-6">
        <div className="bg-white rounded-3xl shadow-xl p-12">
          
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium">
              Request Quote
            </button>
            <button className="bg-[#0f1b2d] text-white px-6 py-2 rounded-full font-medium">
              Traking Shipment
            </button>
          </div>

          <hr className="mb-8" />

          {/* Service Type */}
          <h3 className="text-xl font-semibold mb-6">
            Select Your Services Type*
          </h3>

          <div className="flex gap-6 mb-10">
            <label className="flex items-center gap-2">
              <input type="radio" name="service" className="accent-blue-500" defaultChecked />
              Air Freight
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="service" className="accent-blue-500" />
              Ocean Freight
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="service" className="accent-blue-500" />
              Land Freight
            </label>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name*"
              className="bg-gray-100 rounded-full px-6 h-14 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email*"
              className="bg-gray-100 rounded-full px-6 h-14 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone No*"
              className="bg-gray-100 rounded-full px-6 h-14 focus:outline-none"
            />
            <select className="bg-gray-100 rounded-full px-6 h-14 focus:outline-none">
              <option>Type Of Goods</option>
              <option>Heavy Goods</option>
              <option>Fragile Goods</option>
              <option>Liquid Goods</option>
            </select>
            <input
              type="text"
              placeholder="Dimensions (L x W x H x Unit)"
              className="bg-gray-100 rounded-full px-6 h-14 focus:outline-none"
            />
            <input
              type="date"
              className="bg-gray-100 rounded-full px-6 h-14 focus:outline-none"
            />
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-center mt-12">
            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-10 py-4 rounded-full font-semibold flex items-center gap-2">
              Request A Quote →
            </button>

            <p className="text-gray-600 text-sm">
              Note: Face any trouble? We will contact with You as soon as
              possible ||{" "}
              <span className="text-blue-500 font-medium cursor-pointer">
                Contact Our Expert
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}