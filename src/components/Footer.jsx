import React from "react";

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
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-purple-700 transition">
          <i className="far fa-heart"></i>
          <span>Follow on shop</span>
        </button>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-purple-600">
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
          src="/path-to-payment-icon1.png"
          alt="Payment Method 1"
          className="h-8"
        />
        <img
          src="/path-to-payment-icon2.png"
          alt="Payment Method 2"
          className="h-8"
        />
        <img
          src="/path-to-payment-icon3.png"
          alt="Payment Method 3"
          className="h-8"
        />
        <img
          src="/path-to-payment-icon4.png"
          alt="Payment Method 4"
          className="h-8"
        />
        <img
          src="/path-to-payment-icon5.png"
          alt="Payment Method 5"
          className="h-8"
        />
        <img
          src="/path-to-payment-icon6.png"
          alt="Payment Method 6"
          className="h-8"
        />
      </div>

      {/* Copyright and Policies */}
      <div className="text-center text-gray-500 text-sm">
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
