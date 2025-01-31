import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import AccessoryShowcase1 from "../assets/AccessaryShowcase1.png";
import AccessoryShowcase2 from "../assets/AccessaryShowcase2.png";
import AccessoryShowcase3 from "../assets/AccessaryShowcase3.png";
import AccessoryShowcase4 from "../assets/AccessaryShowcase4.png";
import AccessoryShowcase5 from "../assets/AccessaryShowcase5.png";

const AccessoryShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const images = [
    AccessoryShowcase1,
    AccessoryShowcase2,
    AccessoryShowcase3,
    AccessoryShowcase4,
    AccessoryShowcase5,
  ];

  // Add color array matching your slides
  const colors = [
    "#8E44AD",  // Purple
    "#00AEEF",  // Blue
    "#FF7500",  // Orange
    "#FF03E7",  // Pink
    "#00DDE2"   // Teal
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const radius = isMobile ? 150 : 300;
    const horizontalOffset = isMobile ? 0 : 400;
    const imageElements = Array.from(carouselRef.current.children);
    const totalImages = images.length;

    imageElements.forEach((image, index) => {
      const angle = ((index - currentIndex) * (360 / totalImages)) * (Math.PI / 180);
      const x = Math.cos(angle) * radius * -1 + horizontalOffset;
      const y = Math.sin(angle) * radius;
      const scale = index === currentIndex ? (isMobile ? 1.2 : 1.5) : (isMobile ? 0.5 : 0.7);
      const blur = index === currentIndex ? 0 : 7;

      gsap.to(image, {
        duration: 0.2,
        x,
        y,
        scale,
        filter: `blur(${blur}px)`,
        opacity: index === currentIndex ? 1 : 0.4,
        ease: "power1.inOut",
        zIndex: index === currentIndex ? 1 : 0,
      });
    });
  }, [currentIndex, images.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section 
      className="lg:h-screen h-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 relative overflow-hidden"
      style={{
        backgroundColor: colors[currentIndex],
        transition: 'background-color 1s ease-in-out'
      }}
    >
      {/* Rest of the component remains exactly the same */}
      {/* Text Section */}
      <div className="flex-1 flex flex-col font-montserrat items-center lg:items-start text-center lg:text-left text-white px-2 lg:px-6 z-10 mt-8 lg:mt-0">
        <h1 className="text-3xl lg:text-[50px] leading-tight font-extrabold mb-4">
          Tiny Accessory <br />
          Enormous <br />
          Expression
        </h1>
        <p className="text-sm lg:text-[22px] leading-relaxed mb-4 lg:mb-6 max-w-sm lg:max-w-none">
          Excite your wardrobe. Express your uniqueness and have fun with your
          style! Collect signature Claspees before they run out.
        </p>
        <button className="hidden lg:block bg-transparent font-montserrat font-extrabold text-white border-4 border-white px-8 py-4 min-w-52 rounded-full text-xl hover:bg-white hover:text-purple-700 transition">
          Shop
        </button>
      </div>

      {/* Carousel Section */}
      <div className="flex-1 relative h-[35vh] lg:h-full w-full flex items-center justify-center perspective-1000 mt-24 lg:mt-0 mb-32 lg:mb-0">
        <div 
          ref={carouselRef} 
          className="relative w-full h-full transform-style-preserve-3d"
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Accessory ${index + 1}`}
              className="absolute top-1/2 left-80 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40  lg:w-64 lg:h-64 object-contain transition-all duration-500"
            />
          ))}
        </div>
      </div>

      {/* Mobile Controls */}
      <div className="lg:hidden w-full  flex flex-col items-center  pt-8 pb-12 space-y-8">
        <button className="bg-transparent font-montserrat font-extrabold text-white border-4 border-white px-6 py-3 min-w-48 rounded-full text-lg hover:bg-white hover:text-purple-700 transition">
          Shop
        </button>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handlePrev}
            className="bg-transparent text-white border-2 border-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-purple-800 hover:text-white transition"
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <button
            onClick={handleNext}
            className="bg-transparent text-white border-2 border-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-purple-800 hover:text-white transition"
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Desktop Arrows */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 items-center justify-center space-x-4 z-10">
        <button
          onClick={handlePrev}
          className="bg-transparent border border-white text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-purple-800 hover:text-white transition"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <button
          onClick={handleNext}
          className="bg-transparent border border-white text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-purple-800 hover:text-white transition"
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default AccessoryShowcase;