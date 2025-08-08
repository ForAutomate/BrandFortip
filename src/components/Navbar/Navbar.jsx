import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setVisible(false); 
      } else { // if scroll up show the navbar
        setVisible(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 px-6 md:px-12 bg-[#F0F4F8] shadow-sm border-b border-gray-100 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Logo and Brand Name */} 
      <div className="flex-shrink-0">
        <Link to="/" className="text-2xl font-popr text-blue-900">
          <span className="font-judi">BrandFort Ip</span>.
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8 lg:space-x-12 lg:mr-96 items-center text-lg font-popr text-sky-300">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
      </div>

      {/* Contact Button & Hamburger Icon (Mobile) */}
      <div className="flex items-center space-x-4">
        {/* Contact Button */}
        <Link to="/contact">
          <button className="hidden md:flex items-center px-6 py-3 text-lg font-popr text-blue-900 border-[2px] border-blue-900 rounded-full transition-all duration-300 hover:bg-blue-900 hover:text-white">
            <span>Contact Us</span>
            <ArrowUpRight size={20} className="ml-2" />
          </button>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#003366] hover:bg-gray-100 rounded-lg transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 md:hidden flex flex-col p-6 space-y-4 bg-white border-t border-gray-200 shadow-md">
          <NavLink to="/" mobile>Home</NavLink>
          <NavLink to="/about" mobile>About</NavLink>
          <NavLink to="/services" mobile>Services</NavLink>
          <NavLink to="/privacy-policy" mobile>Privacy Policy</NavLink>
          <Link to="/contact">
            <button className="flex items-center justify-center w-full px-4 py-3 text-lg font-medium text-[#003366] border-2 border-[#003366] rounded-full transition-all duration-300 hover:bg-[#003366] hover:text-white shadow-md mt-4">
              <span>Contact Us</span>
              <ArrowUpRight size={20} className="ml-2" />
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ children, mobile, to }) => (
  <Link
    to={to}
    className={`
      ${mobile ? 'text-lg font-medium w-full text-center' : 'hover:text-sky-300'}
      text-[#003366] transition-colors duration-300 relative
      after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-[#003366] after:transition-all after:duration-300 after:-translate-x-1/2
      hover:after:w-full
    `}
  >
    {children}
  </Link>
);

export default Navbar;