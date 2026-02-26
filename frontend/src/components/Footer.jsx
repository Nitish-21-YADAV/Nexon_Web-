import React from "react";
import { Facebook, Twitter, Globe, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-10 px-6 py-3">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold  leading-snug max-w-2xl">
            We Understand The Importance <br />
            Approaching Each Work!
          </h2>

          <div className="mt-6 md:mt-0">
            <span className="text-blue-500 text-3xl font-bold">
              +91 9820288547
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-12"></div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h3 className=" font-semibold mb-6 tracking-wide">
              COMPANY
            </h3>
            <ul className="space-y-3">
              
              <li><Link className="hover:text-blue-500 cursor-pointer" to="/#about">About Us</Link></li>
              <li><Link className="hover:text-blue-500 cursor-pointer" to="/contact">Contact Us</Link></li>
              <li><Link className="hover:text-blue-500 cursor-pointer" to="/#track">Track Shippment</Link></li>
              <li><Link className="hover:text-blue-500 cursor-pointer">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Open Hour */}
          <div>
            <h3 className=" font-semibold mb-6 tracking-wide">
              OPEN HOUR
            </h3>
            <ul className="space-y-3">
              <li>Monday to Saturday: 10am to 7pm</li>
              <li>Sunday: Closed</li>
              <li>Customer Care: 24*7 Everyday </li>
              
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className=" font-semibold mb-6 tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li className="hover:text-blue-500 cursor-pointer">Air Service</li>
              <li className="hover:text-blue-500 cursor-pointer">Surface Service</li>
              <li className="hover:text-blue-500 cursor-pointer">By Train Service</li>
              <li className="hover:text-blue-500 cursor-pointer">Warehousing solutions</li>
              <li className="hover:text-blue-500 cursor-pointer">FLT service</li>
              <li className="hover:text-blue-500 cursor-pointer">PLT Service</li>
            </ul>
          </div>

          {/* Logo & About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-blue-500 text-3xl font-bold">➤</div>
              <div>
                <h4 className=" font-bold text-lg">Nexon</h4>
                <h4 className=" font-bold text-lg -mt-1">
                  Services
                </h4>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6">
              Modern logistics and packaging solutions designed for E-commerce and growing businesses.
            </p>

            {/* Lucide Social Icons */}
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer transition" />
              <Twitter className="w-5 h-5 hover:text-blue-500 cursor-pointer transition" />
              <Globe className="w-5 h-5 hover:text-blue-500 cursor-pointer transition" />
              <Instagram className="w-5 h-5 hover:text-blue-500 cursor-pointer transition" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;