
import Home from "./components/Home";
import Features from "./components/Feature";
import About from "./components/About";

import Contact from "./components/Contact";
import Brands from "./components/Brand";
import Footer from "./components/Footer";
import MasterAbout from "./components/MasterAbout";
import MasterService from "./components/MasterServices";
import Track from "./components/Track";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from "./components/Navbar";


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};


export default function NexonWebsite() {

  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainLayout />} />
            <Route path="about" element={<MasterAbout />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>

      </BrowserRouter>


    </>
  );
}

export const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToHash/>
      <Outlet />
      <Footer />

    </>

  );
}

export function MainLayout() {
  return (
    <>

      <div id="home">
        <Home />
      </div>
      <div id="service">
        <MasterService />
      </div>
      <div id="brands">
        <Brands />
      </div>
      <div id="track">
        <Track/>
      </div>
      <div id="about">
        <About />
      </div>

    </>
  )
}
