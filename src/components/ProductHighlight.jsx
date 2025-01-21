import React from "react";
import ProductHighlight1 from "../assets/ProductHighlight-1.gif";

const ProductHighlight = () => {
  return (
    <section className="bg-white flex flex-col lg:flex-row items-center justify-between h-screen">
      {/* Image Section */}
      <div className="flex-1 bg-yellow-400 flex justify-center items-center">
        <img
          src={ProductHighlight1}
          alt="Claspees with Shoe"
          className="max-w-full h-screen object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 flex flex-col font-montserrat justify-center items-end pr-20">
        <h1 className="text-[#00AEEF] text-4xl lg:text-[55px] font-extrabold mb-4 text-right">
          Hold Onto Your Style
        </h1>
        <p className="text-[#00AEEF] text-lg lg:text-xl mb-8 text-right max-w-md">
          Claspees keep your strings on your clothes and accessorize,
          well, anything they fit.
        </p>
        <button className="bg-[#7B2CBF] text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-[#5A1E8E] transition">
          Shop
        </button>
      </div>

     
    </section>
  );
};

export default ProductHighlight;