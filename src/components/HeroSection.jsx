import React, { useState, useEffect } from 'react';
import HeroBg1 from "../assets/Herobg-1.png";
import HeroBg2 from "../assets/Herobg-2.png";
import HeroBg3 from "../assets/slide-3.png";
import HeroBg4 from "../assets/slide-4.png";
import HeroBg5 from "../assets/slide-5.png";
import HeroBg6 from "../assets/slide-6.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const slides = [
    { image: HeroBg1, bgColor: "#00AEEF" },
    { image: HeroBg2, bgColor: "#00CFEA" },
    { image: HeroBg3, bgColor: "#F57C00" },
    { image: HeroBg4, bgColor: "#8E44AD" },
    { image: HeroBg5, bgColor: "#27AE60" },
    { image: HeroBg6, bgColor: "#E74C3C" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      className="relative h-screen flex items-center px-8 md:px-16 overflow-hidden transition-all duration-1000"
      style={{ 
        backgroundColor: slides[currentIndex].bgColor,
        transition: 'background-color 1s ease-in-out'
      }}
    >
      {/* Text Content */}
      <div className="w-5/12 z-10 text-white">
        <h3 className="text-2xl font-semibold mb-4">Introducing Claspees™</h3>
        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          The fashionable solution to pesky drawstring loss!
        </h1>
        <Link
          to="/shop"
          className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-medium rounded-full hover:bg-white hover:text-[#00AEEF] transition-all duration-300"
        >
          Shop
        </Link>
      </div>

      {/* Rotating Images */}
      <div className="w-7/12 h-full flex items-center justify-center pt-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-4/5 h-4/5 transition-all duration-1000 ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Chat Icon */}
      <div className="absolute bottom-8 right-8 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
        <div className="relative">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-cyan-600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            1
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;