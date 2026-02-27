import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between h-20 px-6 md:px-10">
        
        <div className="flex items-center gap-2">
          <img src="/NexonLogo.png" alt="Logo" className="h-10 w-auto" />
          <span className="text-lg md:text-xl font-semibold">
            <span className="text-2xl">N</span>EXON
            <span className="text-2xl"> S</span>ERVICES
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/#home" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/#service" className="hover:text-blue-600 transition">Service</Link>
          <Link to="/#track" className="hover:text-blue-600 transition">Track Shipment</Link>
          <Link to="about" className="hover:text-blue-600 transition">About Us</Link>
          <Link to="contact" className="hover:text-blue-600 transition">Contact Us</Link>
          <Link to="login" className="hover:text-blue-600 transition">Login</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
          <Link to="/#" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/#" onClick={() => setIsOpen(false)}>Service</Link>
          <Link to="/#" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/#" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;