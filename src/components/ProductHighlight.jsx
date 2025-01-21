import React from "react";
import ProductHighlight1 from "../assets/ProductHighlight-1.gif";

const ProductHighlight = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col lg:flex-row">
      {/* Image Section */}
      <div className="w-full lg:flex-1 bg-yellow-400 flex justify-center items-center h-[50vh] lg:h-screen">
        <img
          src={ProductHighlight1}
          alt="Claspees with Shoe"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:flex-1 flex flex-col font-montserrat justify-center items-center lg:items-end px-6 py-12 lg:pr-20 lg:py-0">
        <div className="max-w-md w-full">
          <h1 className="text-[#00AEEF] text-4xl lg:text-7xl leading-tight font-extrabold mb-4 text-center lg:text-right">
            Hold Onto Your Style
          </h1>
          <p className="text-[#00AEEF] text-base lg:text-xl mb-8 text-center lg:text-right">
            Claspees keep your strings on your clothes and accessorize,
            well, anything they fit.
          </p>
          <div className="flex justify-center lg:justify-end">
            <button className="bg-[#7B2CBF] text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-[#5A1E8E] transition">
              Shop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;