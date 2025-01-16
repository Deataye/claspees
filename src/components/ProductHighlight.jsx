import React from "react";

const ProductHighlight = () => {
  return (
    <section className="bg-yellow-400 flex flex-col lg:flex-row items-center justify-between h-screen p-8">
      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="/path-to-your-shorts-image.png"
          alt="Shorts with Claspees"
          className="max-w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left px-8">
        <h1 className="text-cyan-600 text-4xl lg:text-5xl font-bold mb-4">
          Hold Onto Your Style
        </h1>
        <p className="text-cyan-500 text-lg lg:text-xl mb-6">
          Claspees keep your strings on your clothes and accessorize, well,
          anything they fit.
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full shadow-lg text-lg hover:bg-purple-700 transition">
          Shop
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

export default ProductHighlight;
