import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-[#bae9ff] text-gray-300 p-6 md:p-8 border-t">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Links and Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 pt-8 md:pt-10 text-sm">
          {/* Company Info */}
          <div>
            <h3 className="text-5xl font-judr font-medium text-[#003366] mb-4">
              BrandFort Ip.
            </h3>
            <p className="text-[#003366] mb-2">(+123) 456-7890</p>
            <p className="text-[#003366] mb-2">
              <a href="mailto:information@legalite.com" className="hover:text-white transition-colors duration-200">
                info@brandfortip.com
              </a>
            </p>
            <p className="text-[#003366]">
              Plot no B-16, Saraswati enclave, sector 143  Noida (UP) Pincode:- 201306
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#003366] mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-[#003366] hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-[#003366] hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-[#003366] hover:text-white transition-colors duration-200">Services</Link></li>
              <li><Link to="/about" className="text-[#003366] hover:text-white transition-colors duration-200">Teams</Link></li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#003366] mb-4">Socials</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#003366] hover:text-white transition-colors duration-200">Facebook</a></li>
              <li><a href="#" className="text-[#003366] hover:text-white transition-colors duration-200">Twitter</a></li>
              <li><a href="#" className="text-[#003366] hover:text-white transition-colors duration-200">LinkedIn</a></li>
              <li><a href="#" className="text-[#003366] hover:text-white transition-colors duration-200">Instagram</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#003366] mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-[#003366] hover:text-white transition-colors duration-200">Trademark Protection</Link></li>
              <li><Link to="/services" className="text-[#003366] hover:text-white transition-colors duration-200">Copyright Protection</Link></li>
              <li><Link to="/services" className="text-[#003366] hover:text-white transition-colors duration-200">Industrial Design Protection</Link></li>
              <li><Link to="/services" className="text-[#003366] hover:text-white transition-colors duration-200">Trade Secrets Protection</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="pt-12 md:pt-16 text-xs text-[#003366] flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-center md:text-left">
            © 2025 ForAutomate. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-conditions" className="hover:text-white transition-colors duration-200">Terms & Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
