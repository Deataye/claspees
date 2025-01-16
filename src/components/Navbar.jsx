import React from "react";
import Logo from '../assets/claspees_logo2.png';

const Navbar = () => {
  return (
    <header className="bg-[#FFFFF0] flex items-center justify-between px-8 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Claspeer Logo"
          className="h-10"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8 text-purple-600 font-medium">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#shop" className="hover:underline">
          Shop
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
        <a href="#faqs" className="hover:underline">
          FAQ's
        </a>
        <a href="#howto" className="hover:underline">
          How To
        </a>
      </nav>

      {/* User and Cart Icons */}
      <div className="flex items-center space-x-6 text-purple-600">
        <button className="hover:text-purple-800">
          <i className="fa fa-user"></i>
        </button>
        <button className="hover:text-purple-800">
          <i className="fa fa-shopping-bag"></i>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
