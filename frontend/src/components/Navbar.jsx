import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between h-20 px-6 md:px-10">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/NexonLogo.png" alt="Logo" className="h-10 w-auto" />
          <span className="text-lg md:text-xl font-semibold">
            <span className="text-2xl">N</span>EXON
            <span className="text-2xl"> S</span>ERVICES
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">Service</a>
          <a href="#" className="hover:text-blue-600 transition">About Us</a>
          <a href="#" className="hover:text-blue-600 transition">Contact Us</a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" onClick={() => setIsOpen(false)}>Service</a>
          <a href="#" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#" onClick={() => setIsOpen(false)}>Contact Us</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;