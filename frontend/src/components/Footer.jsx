import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-accent text-white pointer-events-auto">
=======

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
>>>>>>> remote-main
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">About Us</h3>
<<<<<<< HEAD
            <p className="text-gray-200 leading-relaxed">
=======
            <p className="text-gray-300 leading-relaxed">
>>>>>>> remote-main
              We provide professional academic writing services to help students achieve their academic goals with confidence and excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
<<<<<<< HEAD
              <li><button className="text-gray-200 hover:text-white transition-colors cursor-pointer">Dissertation Writing</button></li>
              <li><button className="text-gray-200 hover:text-white transition-colors cursor-pointer">Essay Writing</button></li>
              <li><button className="text-gray-200 hover:text-white transition-colors cursor-pointer">Research Papers</button></li>
              <li><button className="text-gray-200 hover:text-white transition-colors cursor-pointer">Literature Reviews</button></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-200 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/academics" className="text-gray-200 hover:text-white transition-colors">Academics</Link></li>
              <li><Link to="/services" className="text-gray-200 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-200 hover:text-white transition-colors">Contact</Link></li>
=======
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Dissertation Writing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Essay Writing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Literature Reviews</a></li>
>>>>>>> remote-main
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
<<<<<<< HEAD
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586l-8 8-8-8V4z" />
                  <path d="m3 8.414 8 8 8-8V20a1 1 0 01-1 1H4a1 1 0 01-1-1V8.414z" />
                </svg>
                <span className="text-gray-200">info@globalassigntech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-200">+91 576916122</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <span className="text-gray-200">24/7 Available</span>
              </div>
              <div className="flex space-x-4 mt-4">
                {/* Social Media Buttons (placeholder href) */}
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.56v14.91a2.54 2.54 0 01-2.54 2.54H2.54A2.54 2.54 0 010 19.47V4.56A2.54 2.54 0 012.54 2h18.92A2.54 2.54 0 0124 4.56zM7.19 19.47V9.5l7.62 4.99-7.62 4.98z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 8.96 4.07 7.13 1.64 4.15c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6a4.28 4.28 0 01-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 012 19.47c0 .01 0 .01 0 0z" />
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.07 8.24 8.93.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.23-3.23-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.23 0 4.64-2.8 5.67-5.47 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A8.6 8.6 0 0022 12c0-5.5-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/30 mt-12 pt-8 text-center">
          <p className="text-gray-200">© 2025 Globalassigntech. All rights reserved.</p>
=======
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586l-8 8-8-8V4z"/>
                  <path d="m3 8.414 8 8 8-8V20a1 1 0 01-1 1H4a1 1 0 01-1-1V8.414z"/>
                </svg>
                <span className="text-gray-300">info@gradeboostdigitals.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-gray-300">+91 576916122</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-gray-300">24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.989C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 Grade Boost Digitals. All rights reserved.</p>
>>>>>>> remote-main
        </div>
      </div>
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> remote-main
