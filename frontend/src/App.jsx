import React, { useState, useEffect } from "react";
import {
  Menu, X, Phone, Mail, Box, Truck,
  ShieldCheck, BarChart3, Clock,
  MapPin, Send, Globe
} from "lucide-react";
import Home from "./components/Home";

export default function NexonWebsite() {
  
  return (
    <div className="bg-white text-slate-800">

    <Home/>

      {/* TOP BAR */}
      {/* <div className="hidden lg:flex justify-between px-10 py-2 text-sm bg-blue-600 text-white">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <Phone size={14} /> +1-800-NEXON
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} /> contact@nexon.com
          </span>
        </div>
        <span className="font-bold">Global Logistics Solutions</span>
      </div> */}

      {/* NAVBAR */}
      {/* <nav className={`sticky top-0 z-50 transition ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Box className="text-white" />
            </div>
            <span className="text-xl font-black">
              NEXON <span className="text-blue-600">SERVICES</span>
            </span>
          </div>

          <div className="hidden md:flex gap-8 font-semibold">
            {["Home","About","Services","Pricing","Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600">
                {item}
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav> */}

      {/* HERO */}
      {/* <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex gap-2 items-center bg-blue-100 px-4 py-1 rounded-full text-blue-600 font-bold text-sm">
              <Globe size={14} /> Trusted Worldwide
            </div>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight">
              Smart Logistics <br />
              <span className="text-blue-600">Made Simple</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-lg">
              End-to-end fulfillment, secure warehousing and fast global delivery for modern businesses.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50">
                Learn More
              </button>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7"
            className="rounded-3xl shadow-xl"
            alt="Logistics"
          />
        </div>
      </section> */}

      {/* ABOUT */}
      {/* <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-600 font-bold uppercase mb-3">About Us</h2>
            <h3 className="text-4xl font-black mb-6">Who We Are</h3>
            <p className="text-slate-600 leading-relaxed">
              Nexon Services is a global logistics provider delivering
              enterprise-grade shipping, storage and analytics solutions
              trusted by thousands of businesses worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              ["10+ Years Experience"],
              ["120+ Countries"],
              ["99.9% On-Time"],
              ["24/7 Support"]
            ].map((t,i)=>(
              <div key={i} className="border rounded-xl p-6 text-center shadow-sm">
                <h4 className="text-2xl font-black text-blue-600">{t}</h4>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* SERVICES */}
      {/* <section id="services" className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-black mb-16">
            Our <span className="text-blue-600">Services</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon:<Truck />,title:"Fast Delivery",text:"Global express shipping with live tracking."},
              {icon:<ShieldCheck />,title:"Secure Storage",text:"Monitored warehouses with full insurance."},
              {icon:<BarChart3 />,title:"Analytics",text:"Optimize logistics using smart insights."},
            ].map((s,i)=>(
              <div key={i} className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
                <div className="text-blue-600 mb-4">{s.icon}</div>
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* PRICING */}
      {/* <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-black mb-16">
            Simple <span className="text-blue-600">Pricing</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Starter","$49","Small businesses"],
              ["Business","$149","Growing companies"],
              ["Enterprise","Custom","Large scale logistics"],
            ].map((p,i)=>(
              <div key={i} className="border rounded-2xl p-8 text-center hover:shadow-xl transition">
                <h3 className="font-bold text-xl mb-2">{p[0]}</h3>
                <p className="text-4xl font-black text-blue-600 mb-4">{p[1]}</p>
                <p className="text-slate-600 mb-6">{p[2]}</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CONTACT */}
      {/* <section id="contact" className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black mb-6">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <div className="space-y-4 text-slate-600">
              <p className="flex gap-2"><MapPin /> New York, USA</p>
              <p className="flex gap-2"><Phone /> +1-800-NEXON</p>
              <p className="flex gap-2"><Clock /> Mon-Sat 9AM-8PM</p>
            </div>
          </div>

          <form className="bg-white p-8 rounded-3xl shadow space-y-4">
            <input className="w-full border p-4 rounded-xl" placeholder="Name" />
            <input className="w-full border p-4 rounded-xl" placeholder="Email" />
            <textarea className="w-full border p-4 rounded-xl" rows="4" placeholder="Message"></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold flex justify-center gap-2">
              Send Message <Send />
            </button>
          </form>
        </div>
      </section> */}

      {/* FOOTER */}
      {/* <footer className="py-10 text-center text-slate-500 border-t">
        © 2026 Nexon Services. All Rights Reserved.
      </footer> */}
    </div>
  );
}
