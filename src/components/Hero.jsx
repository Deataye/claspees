import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-[#a6a44d] h-screen flex items-center">
      {/* Text Content */}
      <div className="max-w-lg ml-16 z-10">
        <h3 className="text-white text-xl font-semibold mb-2">
          Introducing Claspees™
        </h3>
        <h1 className="text-white text-4xl font-bold mb-6 leading-tight">
          The fashionable solution to pesky drawstring loss!
        </h1>
        <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-[#a6a44d] transition">
          Shop
        </button>
      </div>

      {/* Image Content */}
      <div className="absolute right-0 bottom-0">
        <img
          src="/path-to-your-image.png"
          alt="Hero Model"
          className="object-contain h-full w-auto opacity-80"
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

export default HeroSection;
