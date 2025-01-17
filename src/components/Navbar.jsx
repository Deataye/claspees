import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/claspees_logo2.png";

const Navbar = () => {
  return (
    <header className="bg-[#FFFFF0] flex items-center justify-between px-8 py-4 shadow-md">
      <div className="flex items-center">
        <img src={Logo} alt="Claspees Logo" className="h-10" />
      </div>
      <nav className="flex space-x-8 text-purple-600 font-medium">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:underline">
          Shop
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        <Link to="/faqs" className="hover:underline">
          FAQ's
        </Link>
        <Link to="/howto" className="hover:underline">
          How To
        </Link>
      </nav>
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
