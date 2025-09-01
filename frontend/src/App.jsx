<<<<<<< HEAD

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Academics from './pages/Academics';
import Services from './pages/Services';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
=======
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
>>>>>>> remote-main

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/services" element={<Services />} />
      </Routes>
=======
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
>>>>>>> remote-main
      <Footer />
    </div>
  );
}

export default App;