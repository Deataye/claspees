import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/claspees_logo2.png";

const Navbar = () => {
  return (
    <header className="bg-[#FFFFF0] flex items-center justify-between px-6 py-6 shadow-md">
      <div className="flex items-center">
        <img src={Logo} alt="Claspees Logo" className="h-14" />
      </div>
      
      <nav className="flex space-x-6 text-purple-600 font-medium ml-4">
        <Link to="/" className="hover:underline text-lg">
          Home
        </Link>
        <Link to="/shop" className="hover:underline text-lg">
          Shop
        </Link>
        <Link to="/about" className="hover:underline text-lg">
          About
        </Link>
        <Link to="/contact" className="hover:underline text-lg">
          Contact
        </Link>
        <Link to="/faqs" className="hover:underline text-lg">
          FAQ's
        </Link>
        <Link to="/howto" className="hover:underline text-lg">
          How To
        </Link>
      </nav>
      
      <div className="flex items-center space-x-6 text-purple-600">
        <button className="hover:text-purple-800 text-xl">
          <i className="fa fa-user"></i>
        </button>
        <button className="hover:text-purple-800 text-xl">
          <i className="fa fa-shopping-bag"></i>
        </button>
      </div>
    </header>
  );
};

export default Navbar;