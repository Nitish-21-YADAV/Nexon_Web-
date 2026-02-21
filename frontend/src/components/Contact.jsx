import React from "react";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-black">
            Contact <span className="text-blue-600">Nexon Services</span>
          </h2>

          <p className="text-gray-600 mb-10 max-w-md">
            Have a requirement for promotional activities, stickering,
            barcode labeling or courier support? Our team is ready to assist you.
          </p>

          <div className="space-y-6 text-gray-700">
            
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600 mt-1" />
              <p>
                Vinayak Park Shop No. 5, Bld No B A-Wing, <br />
                Near Police Station,Thane,Mumbai – 421605
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-blue-600" />
              <p>+91 9820288547 / 7977688971</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <p>nexonservices25@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="text-blue-600" />
              <p>Mon – Sat | 9:00 AM – 8:00 PM</p>
            </div>

          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="bg-slate-50 p-10 rounded-3xl shadow-lg space-y-6 border border-gray-100">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 p-4 rounded-xl outline-none transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 p-4 rounded-xl outline-none transition"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 p-4 rounded-xl outline-none transition"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black hover:bg-blue-600 text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2 transition duration-300"
          >
            Send Message <Send size={18} />
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;