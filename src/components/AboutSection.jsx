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

     
    </section>
  );
};

export default AboutSection;
