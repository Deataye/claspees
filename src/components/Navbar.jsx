import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/claspees_logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-[#FFFFF0] w-full py-2 fixed top-0 z-50 shadow-md">
      <div className="lg:max-w-[1100px] lg:mx-auto flex items-center justify-between py-4 px-4 lg:px-10">
      <div className="flex items-center space-x-12">
  {/* Logo */}
  <NavLink to="/" onClick={closeMenu}>
    <img src={Logo} alt="Claspees Logo" className="h-14" />
  </NavLink>

  {/* Navigation Links */}
  <nav
    className={`lg:flex lg:space-x-6 text-purple-600 font-montserrat font-sans font-medium absolute lg:static top-full left-0 w-full bg-[#FFFFF0] lg:w-auto py-4 lg:py-0 shadow-md lg:shadow-none transition-transform duration-300 ${
      menuOpen ? "translate-x-0" : "-translate-x-full"
    } lg:translate-x-0`}
  >
    <NavLink
      to="/"
      onClick={closeMenu}
      className={({ isActive }) =>
        `block lg:inline-block text-[18px]  px-6 lg:px-0 ${
          isActive ? "underline" : "hover:underline"
        }`
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/shop"
      onClick={closeMenu}
      className={({ isActive }) =>
        `block lg:inline-block text-[18px] px-6 lg:px-0 ${
          isActive ? "underline" : "hover:underline"
        }`
      }
    >
      Shop
    </NavLink>
    <NavLink
      to="/about"
      onClick={closeMenu}
      className={({ isActive }) =>
        `block lg:inline-block text-[18px] px-6 lg:px-0 ${
          isActive ? "underline" : "hover:underline"
        }`
      }
    >
      About
    </NavLink>
    <NavLink
      to="/contact"
      onClick={closeMenu}
      className={({ isActive }) =>
        `block lg:inline-block text-[18px] px-6 lg:px-0 ${
          isActive ? "underline" : "hover:underline"
        }`
      }
    >
      Contact
    </NavLink>
    <NavLink
      to="/faqs"
      onClick={closeMenu}
      className={({ isActive }) =>
        `block lg:inline-block text-[18px] px-6 lg:px-0 ${
          isActive ? "underline" : "hover:underline"
        }`
      }
    >
      FAQ's
    </NavLink>
    <NavLink
      to="/howto"
      onClick={closeMenu}
      className={({ isActive }) =>
        `block lg:inline-block text-[18px] px-6 lg:px-0 ${
          isActive ? "underline" : "hover:underline"
        }`
      }
    >
      How To
    </NavLink>
  </nav>
</div>
        {/* User and Cart Icons (Large Screens) */}
        <div className="hidden lg:flex items-center space-x-6 text-purple-600">
          <NavLink to="/login" onClick={closeMenu} className="hover:text-purple-800 text-xl">
            <i className="fa fa-user"></i>
          </NavLink>
          <NavLink to="/cart" onClick={closeMenu} className="hover:text-purple-800 text-xl">
            <i className="fa fa-shopping-bag"></i>
          </NavLink>
        </div>
      </div>

      {/* Mobile User and Cart Icons */}
      {menuOpen && (
        <div className="flex lg:hidden justify-evenly py-4 text-purple-600 border-t">
          <NavLink to="/login" onClick={closeMenu} className="hover:text-purple-800 text-xl">
            <i className="fa fa-user"></i>
          </NavLink>
          <NavLink to="/cart" onClick={closeMenu} className="hover:text-purple-800 text-xl">
            <i className="fa fa-shopping-bag"></i>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
