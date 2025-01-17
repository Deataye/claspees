import React from "react";
import AboutHeroBg from "../assets/About-hero.png"; // Ensure the image path is correct

const AboutSection = () => {
  return (
    <section className="relative bg-orange-500 h-screen flex justify-center items-center">
      {/* Image Content */}
      <div className="flex justify-center items-center">
        <img
          src={AboutHeroBg} // Using the imported image
          alt="About Model"
          className="h-auto max-w-full object-contain"
        />
      </div>

      {/* Chat Icon */}
      <div className="absolute bottom-6 right-6 bg-white rounded-full p-3 shadow-md">
        <div className="relative">
          <i className="fas fa-comment text-[#00aaff] text-2xl"></i>
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
            1
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
