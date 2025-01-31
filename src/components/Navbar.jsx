import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/claspees_logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-[#FFFFF0] w-full py-2 fixed top-0 z-50">
      <div className="lg:max-w-[1100px] lg:mx-auto flex items-center py-2 px-4 lg:py-4 lg:px-5">
        {/* =====================
            DESKTOP SECTION
            (Hidden on mobile)
        ====================== */}
        <div className="hidden lg:flex items-center space-x-10">
          {/* Logo */}
          <NavLink to="/" onClick={closeMenu} className="flex-shrink-0">
            <img
              src={Logo}
              alt="Claspees Logo"
              className="h-10 lg:h-14"
            />
          </NavLink>

          {/* Desktop Nav Links */}
          <nav className="flex space-x-6 text-purple-600 font-montserrat font-medium">
            {[
              ["/", "Home"],
              ["/shop", "Shop"],
              ["/about", "About"],
              ["/contact", "Contact"],
              ["/faqs", "FAQ's"],
              ["/howto", "How To"],
            ].map(([path, title]) => (
              <NavLink
                key={path}
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-[18px] 
                   ${
                     isActive
                       ? "underline text-purple-700"
                       : "hover:underline hover:text-purple-800"
                   }`
                }
              >
                {title}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Desktop Icons (on the right) */}
        <div className="hidden lg:flex items-center space-x-6 text-purple-600 ml-auto">
          <NavLink
            to="/login"
            onClick={closeMenu}
            className="hover:text-purple-800 text-xl"
          >
            <i className="fa fa-user"></i>
          </NavLink>
          <NavLink
            to="/cart"
            onClick={closeMenu}
            className="hover:text-purple-800 text-xl"
          >
            <i className="fa fa-shopping-bag"></i>
          </NavLink>
        </div>

        {/* =====================
            MOBILE SECTION
            (Hidden on desktop)
        ====================== */}
        <div className="block lg:hidden w-full">
          {/* A 3-column flex:
              1) Hamburger (left)
              2) Logo (center)
              3) Cart (right) */}
          <div className="flex items-center h-12">
            {/* Left: Hamburger */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-purple-600 p-2"
            >
              <i className="fa fa-bars text-2xl"></i>
            </button>

            {/* Center: Logo */}
            <div className="flex-1 flex justify-center">
              <NavLink to="/" onClick={closeMenu}>
                <img
                  src={Logo}
                  alt="Claspees Logo"
                  className="h-10"
                />
              </NavLink>
            </div>

            {/* Right: Cart Icon */}
            <NavLink
              to="/cart"
              onClick={closeMenu}
              className="text-purple-600 hover:text-purple-800 text-xl"
            >
              <i className="fa fa-shopping-bag"></i>
            </NavLink>
          </div>
        </div>
      </div>

      {/* =====================
          MOBILE SLIDE-OUT MENU
      ====================== */}
      <nav
        className={`
          lg:hidden fixed top-0 left-0
          h-screen w-4/5
          bg-[#FFFFF0]
          pt-16 px-4
          shadow-lg
          transition-transform duration-300 transform
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="space-y-4 text-purple-600 font-montserrat font-medium">
          {[
            ["/", "Home"],
            ["/shop", "Shop"],
            ["/about", "About"],
            ["/contact", "Contact"],
            ["/faqs", "FAQ's"],
            ["/howto", "How To"],
          ].map(([path, title]) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block text-xl py-3 px-4 rounded-lg
                 ${
                   isActive
                     ? "bg-purple-100 underline"
                     : "hover:bg-purple-50 hover:underline"
                 }`
              }
            >
              {title}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
