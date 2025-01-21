import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/claspees_logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#FFFFF0] w-full">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="px-10">
            <NavLink to="/">
              <img src={Logo} alt="Claspees Logo" className="h-14" />
            </NavLink>
          </div>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden text-purple-600 text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            <i className="fa fa-bars"></i>
          </button>

          {/* Navigation Links */}
          <nav
            className={`lg:flex space-x-6 text-purple-600 font-montserrat ${
              menuOpen ? "block" : "hidden"
            } lg:block absolute lg:static top-full left-0 w-full bg-[#FFFFF0] lg:w-auto py-4 lg:py-0 shadow-md lg:shadow-none`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block lg:inline-block text-xl  px-6 lg:px-0 ${
                  isActive ? "underline" : "hover:underline"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `block lg:inline-block text-xl px-6 lg:px-0 ${
                  isActive ? "underline" : "hover:underline"
                }`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block lg:inline-block text-xl px-6 lg:px-0 ${
                  isActive ? "underline" : "hover:underline"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block lg:inline-block text-xl px-6 lg:px-0 ${
                  isActive ? "underline" : "hover:underline"
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                `block lg:inline-block text-xl px-6 lg:px-0 ${
                  isActive ? "underline" : "hover:underline"
                }`
              }
            >
              FAQ's
            </NavLink>
            <NavLink
              to="/howto"
              className={({ isActive }) =>
                `block lg:inline-block text-xl px-6 lg:px-0 ${
                  isActive ? "underline" : "hover:underline"
                }`
              }
            >
              How To
            </NavLink>
          </nav>
        </div>

        {/* User and Cart Icons */}
        <div className="hidden lg:flex items-center space-x-6 text-purple-600">
          <NavLink to="/login" className="hover:text-purple-800 text-xl">
            <i className="fa fa-user"></i>
          </NavLink>
          <NavLink to="/cart" className="hover:text-purple-800 text-xl">
            <i className="fa fa-shopping-bag"></i>
          </NavLink>
        </div>
      </div>

      {/* Mobile User and Cart Icons */}
      {menuOpen && (
        <div className="flex lg:hidden justify-evenly py-4 text-purple-600 border-t">
          <NavLink to="/login" className="hover:text-purple-800 text-xl">
            <i className="fa fa-user"></i>
          </NavLink>
          <NavLink to="/cart" className="hover:text-purple-800 text-xl">
            <i className="fa fa-shopping-bag"></i>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;