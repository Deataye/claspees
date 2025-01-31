import React, { useState, useEffect } from "react";
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
    { image: HeroBg2, bgColor: "#FF7500" },
    { image: HeroBg3, bgColor: "#FF03E7" },
    { image: HeroBg4, bgColor: "#8E44AD" },
    { image: HeroBg5, bgColor: "#00DDE2" },
    { image: HeroBg6, bgColor: "#00AAE6" },
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
      className="relative h-screen flex flex-col lg:flex-row lg:items-center overflow-hidden transition-all duration-1000"
      style={{
        backgroundColor: slides[currentIndex].bgColor,
        transition: "background-color 1s ease-in-out",
      }}
    >
      {/* Mobile View */}
      <div className="lg:hidden h-full w-full relative">
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slides[currentIndex].image})`,
            opacity: 0.9,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-start  items-center text-center pt-24 pb-16 px-4">
          <div className="max-w-[400px]">
            <h3 className="text-xl font-extrabold text-white mb-4">
              Introducing Claspees™
            </h3>
            <h1 className="text-3xl font-extrabold text-white mb-8 leading-tight">
              The fashionable solution to pesky drawstring loss!
            </h1>
            <Link
              to="/shop"
              className="inline-block px-12 py-3 bg-transparent border-4 border-white text-white text-lg font-extrabold rounded-full 
              hover:bg-white hover:text-current transition-all duration-300 whitespace-nowrap"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop View (Unchanged) */}
      <div className="hidden lg:block lg:w-5/12 z-10 mt-8 lg:mt-0 font-montserrat text-white px-16">
        <h3 className="lg:text-2xl font-extrabold font-sans mb-4">
          Introducing Claspees™
        </h3>
        <h1 className="lg:text-[55px] text-4xl font-sans font-extrabold mb-8 leading-[60px]">
          The fashionable solution to pesky drawstring loss!
        </h1>
        <Link
          to="/shop"
          className="lg:inline-block px-6 py-2 min-w-52 lg:px-8 lg:py-4 bg-transparent border-4 border-white text-white text-center text-lg lg:text-xl font-extrabold rounded-full hover:bg-white hover:text-[#00AEEF] transition-all duration-300"
        >
          Shop
        </Link>
      </div>

      <div className="hidden lg:block lg:w-7/12 w-full lg:h-full mt-10 items-start">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute lg:w-4/5 h-full transition-all duration-1000 ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
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
    </section>
  );
};

export default HeroSection;