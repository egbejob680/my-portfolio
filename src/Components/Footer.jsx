import React from "react";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white px-6 md:px-20 py-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">Egbe Job</h2>
          <p className="text-gray-400">
            Passionate Web Developer, Designer, and Creator. Let's build something amazing together.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#" className="hover:text-yellow-500">About</a></li>
            <li><a href="#" className="hover:text-yellow-500">Services</a></li>
            <li><a href="#" className="hover:text-yellow-500">Portfolio</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Email: jobegbe39@gmail.com</li>
            <li>Phone: +237 673 000 156</li>
            <li>Location: Bamenda, Cameroon</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-4 text-yellow-500 text-xl">
            <a href="#" className="hover:text-yellow-600"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-600"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-600"><FaGithub /></a>
            <a href="#" className="hover:text-yellow-600"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Egbe Job. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
