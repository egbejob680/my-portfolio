import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="Navba">
      <nav className="w-11/12 mx-auto p-4 border border-yellow-500 rounded-lg mt-6">
        <div className="flex justify-between items-center">
          {/* Brand Section */}
          <div className="text-white text-2xl font-bold">
            J <span className="text-yellow-500">graphics</span>
          </div>

          {/* Hamburger Menu Icon */}
          <div
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`text-white text-lg px-4 py-2 ${
                    location.pathname === link.path
                      ? 'bg-yellow-500 rounded-md'
                      : 'hover:bg-yellow-600 rounded-md'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <ul className="flex flex-col md:hidden mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`block text-white text-lg px-4 py-2 ${
                    location.pathname === link.path
                      ? 'bg-yellow-500 rounded-md'
                      : 'hover:bg-yellow-600 rounded-md'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
