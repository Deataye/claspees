import React from "react";

const AccessoryShowcase = () => {
  return (
    <section className="bg-purple-700 h-screen flex flex-col lg:flex-row items-center justify-between p-8">
      {/* Text Section */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left text-white px-6">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Tiny Accessory <br />
          Enormous <br />
          Expression
        </h1>
        <p className="text-lg lg:text-xl mb-6">
          Excite your wardrobe. Express your uniqueness and have fun with your
          style! Collect signature Claspees before they run out.
        </p>
        <button className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-purple-700 transition">
          Shop
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="/path-to-your-heart-image.png"
          alt="Heart Accessory"
          className="max-w-full h-auto"
        />
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 flex items-center justify-center space-x-4">
        <button className="bg-white text-purple-700 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-purple-800 hover:text-white transition">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="bg-white text-purple-700 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-purple-800 hover:text-white transition">
          <i className="fas fa-arrow-right"></i>
        </button>
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
    </section>
  );
};

export default AccessoryShowcase;
