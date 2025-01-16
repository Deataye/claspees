import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      {/* Navigation Links */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between text-center lg:text-left space-y-4 lg:space-y-0">
        {/* Links */}
        <div className="flex flex-wrap justify-center lg:justify-start space-x-4 text-purple-600 font-medium">
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

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 text-purple-600">
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

      {/* Follow Button */}
      <div className="container mx-auto text-center mt-6">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-purple-700 transition">
          <i className="far fa-heart"></i>
          <span>Follow on shop</span>
        </button>
      </div>

      {/* Payment Methods */}
      <div className="container mx-auto flex flex-wrap justify-center items-center mt-8">
        <img
          src="/path-to-payment-icon1.png"
          alt="Payment Method 1"
          className="h-8 mx-2"
        />
        <img
          src="/path-to-payment-icon2.png"
          alt="Payment Method 2"
          className="h-8 mx-2"
        />
        <img
          src="/path-to-payment-icon3.png"
          alt="Payment Method 3"
          className="h-8 mx-2"
        />
        <img
          src="/path-to-payment-icon4.png"
          alt="Payment Method 4"
          className="h-8 mx-2"
        />
        <img
          src="/path-to-payment-icon5.png"
          alt="Payment Method 5"
          className="h-8 mx-2"
        />
        <img
          src="/path-to-payment-icon6.png"
          alt="Payment Method 6"
          className="h-8 mx-2"
        />
      </div>

      {/* Copyright and Policies */}
      <div className="container mx-auto text-center mt-6 text-gray-500 text-sm">
        © 2025, Claspees Powered by Shopify ·{" "}
        <a href="#refund" className="hover:underline">
          Refund policy
        </a>{" "}
        ·{" "}
        <a href="#shipping" className="hover:underline">
          Shipping policy
        </a>
      </div>

      {/* Chat Icon */}
      <div className="absolute bottom-6 right-6 bg-white rounded-full p-3 shadow-md">
        <div className="relative">
          <i className="fas fa-comment text-cyan-600 text-2xl"></i>
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
            1
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
