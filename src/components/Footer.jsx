import React from "react";
import Logo1 from '../assets/american-express-logo.svg'
import Logo2 from '../assets/google-pay-logo.png'
import Logo3 from '../assets/dinners-club-logo.svg'
import Logo4 from '../assets/discover-logo.svg'
import Logo5 from '../assets/google-pay-logo.png'
import Logo6 from '../assets/mastercard-logo.svg'
import Logo7 from '../assets/paypal-logo.svg'
import Logo8 from '../assets/shop-logo.png'
import Logo9 from '../assets/visa-logo.png'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 font-montserrat">
      {/* Navigation Links */}
      <div className="container mx-auto text-center mb-6">
        <div className="flex justify-center flex-wrap space-x-6 text-purple-600 font-medium">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#shop" className="hover:underline">
            Shop
          </a>
          <a href="#faq" className="hover:underline">
            FAQ
          </a>
          <a href="#terms" className="hover:underline">
            Terms Of Services
          </a>
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#sweepstakes" className="hover:underline">
            Sweepstakes Rules
          </a>
        </div>
      </div>

      {/* Follow Button and Social Icons */}
      <div className="container mx-auto flex justify-between items-center mb-6 px-8">
        {/* Follow Button */}
        <button className="bg-purple-600 text-white text-[16px] px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-purple-700 transition">
          <i className="far fa-heart"></i>
          <span>Follow on shop</span>
        </button>

        {/* Social Media Icons */}
        <div className="flex space-x-4  text-purple-600">
          <a href="#instagram" className="hover:text-purple-800">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="#facebook" className="hover:text-purple-800">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="#linkedin" className="hover:text-purple-800">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="flex justify-center items-center flex-wrap gap-4 mb-6">
        <img
          src={Logo1}
          alt="Payment Method 1"
          className="h-4"
        />
        <img
          src={Logo2}
          alt="Payment Method 2"
          className="h-4"
        />
        <img
          src={Logo3}
          alt="Payment Method 3"
          className="h-4"
        />
        <img
          src={Logo4}
          alt="Payment Method 4"
          className="h-4"
        />
        <img
          src={Logo5}
          alt="Payment Method 5"
          className="h-4"
        />
        <img
          src={Logo6}
          alt="Payment Method 6"
          className="h-4"
        />
        <img
          src={Logo7}
          alt="Payment Method 6"
          className="h-4"
        />
        <img
          src={Logo8}
          alt="Payment Method 6"
          className="h-4"
        />
        <img
          src={Logo9}
          alt="Payment Method 6"
          className="h-4"
        />
      </div>

      {/* Copyright and Policies */}
      <div className="text-center font-montserrat text-[#9300F5] text-sm">
        © 2025, Claspees Powered by Shopify ·{" "}
        <a href="#refund" className="hover:underline">
          Refund policy
        </a>{" "}
        ·{" "}
        <a href="#shipping" className="hover:underline">
          Shipping policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
