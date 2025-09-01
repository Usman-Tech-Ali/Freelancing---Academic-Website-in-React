<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/academics', label: 'Academics' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-neutral-100 font-sans sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center select-none">
            <span className="text-2xl font-bold tracking-tight font-sans" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
              <span className="text-primary font-extrabold">Global</span>
              <span className="text-secondary font-semibold">assigntech</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex ml-10 items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3 py-2 text-base font-medium transition-all duration-300
                  ${location.pathname === link.to ? 'text-primary' : 'text-text'}
                  hover:text-accent
                  group
                `}
              >
                <span className="group-hover:scale-110 group-hover:text-accent transition-transform duration-300 inline-block">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:block ml-6">
            <Link to="/contact">
              <button
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-base font-semibold shadow-md transition-all duration-300 animate-pulse hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                Start Writing Now
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-text hover:text-primary focus:outline-none"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Bars3Icon className="h-7 w-7" />
=======
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">grade</span>
                <span className="text-xs bg-primary text-white px-2 rounded">BOOST</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium">
                About Us
              </a>
              <a href="#" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium">
                Academics
              </a>
              <a href="#" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium">
                Services
              </a>
              <a href="#" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <button className="bg-primary hover:bg-primary-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
>>>>>>> remote-main
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-72 h-full bg-white shadow-lg z-50 flex flex-col p-8"
          >
            <button
              className="self-end mb-8 text-text hover:text-primary focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-7 w-7" />
            </button>
            <nav className="flex flex-col space-y-6 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-lg font-medium transition-all duration-300 ${location.pathname === link.to ? 'text-primary' : 'text-text'} hover:text-accent`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact">
                <button
                  className="mt-8 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-base font-semibold shadow-md transition-all duration-300 animate-pulse hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  Start Writing Now
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
=======
>>>>>>> remote-main
    </nav>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> remote-main
