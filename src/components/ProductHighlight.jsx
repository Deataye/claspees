import React from "react";
import ProductHighlight1 from "../assets/ProductHighlight-1.gif";

const ProductHighlight = () => {
  return (
    <section className="bg-white flex flex-col lg:flex-row items-center justify-between h-screen p-8">
      {/* Image Section */}
      <div className="flex-1 bg-yellow-400 flex justify-center items-center">
        <img
          src={ProductHighlight1} // Updated to use imported image
          alt="Claspees with Shoe"
          className="max-w-full h-auto object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left px-8">
        <h1 className="text-[#00AEEF] text-4xl lg:text-5xl font-extrabold mb-4">
          Hold Onto Your <br /> Style
        </h1>
        <p className="text-[#00AEEF] text-lg lg:text-xl mb-6">
          Claspees keep your strings on your clothes and accessorize, well, anything they fit.
        </p>
        <button className="bg-[#7B2CBF] text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-[#5A1E8E] transition">
          Shop
        </button>
      </div>

      {/* Chat Icon */}
      <div className="absolute bottom-6 right-6 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition">
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
