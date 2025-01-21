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

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const radius = isMobile ? 150 : 300;
    const horizontalOffset = isMobile ? 200 : 400;
    const imageElements = Array.from(carouselRef.current.children);
    const totalImages = images.length;

    imageElements.forEach((image, index) => {
      const angle = ((index - currentIndex) * (360 / totalImages)) * (Math.PI / 180);
      const x = Math.cos(angle) * radius * -1 + horizontalOffset;
      const y = Math.sin(angle) * radius;
      const scale = index === currentIndex ? (isMobile ? 1.2 : 1.5) : (isMobile ? 0.5 : 0.7);
      const blur = index === currentIndex ? 0 : 7;

      gsap.to(image, {
        duration: 0.4,
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
    <section className="bg-purple-700 h-screen flex flex-col lg:flex-row items-center justify-between px-8 relative overflow-hidden">
      {/* Text Section */}
      <div className="flex-1 flex flex-col font-montserrat items-center lg:items-start text-center lg:text-left text-white px-6 z-10 mt-12 lg:mt-0">
        <h1 className="text-4xl lg:text-7xl leading-tight font-extrabold mb-4">
          Tiny Accessory <br />
          Enormous <br />
          Expression
        </h1>
        <p className="text-sm lg:text-xl mb-6 max-w-sm lg:max-w-none">
          Excite your wardrobe. Express your uniqueness and have fun with your
          style! Collect signature Claspees before they run out.
        </p>
        <button className="bg-transparent font-montserrat text-white border-2 border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-purple-700 transition">
          Shop
        </button>
      </div>

      {/* Carousel Section */}
      <div className="flex-1 relative h-[50vh] lg:h-full flex items-center justify-center perspective-1000">
        <div 
          ref={carouselRef} 
          className="relative w-full h-full transform-style-preserve-3d"
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Accessory ${index + 1}`}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 lg:w-64 lg:h-64 object-contain transition-all duration-500"
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-4 z-10">
        <button
          onClick={handleNext}
          className="bg-transparent text-white border border-purple-800 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full hover:bg-purple-800 hover:text-white transition"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <button
          onClick={handlePrev}
          className="bg-transparent border border-purple-800 text-white w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full hover:bg-purple-800 hover:text-white transition"
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default AccessoryShowcase;