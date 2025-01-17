import React, { useState } from "react";
import OriginalCollection1 from "../assets/OriginalCollection1.jpg";
import OriginalCollection2 from "../assets/OriginalCollection2.png";
import OriginalCollection3 from "../assets/OriginalCollection3.png";
import OriginalCollection4 from "../assets/OriginalCollection4.png";
import OriginalCollection5 from "../assets/OriginalCollection5.png";
import OriginalCollection6 from "../assets/OriginalCollection6.png";
import OriginalCollection7 from "../assets/OriginalCollection7.png";
import OriginalCollection8 from "../assets/OriginalCollection8.png";
import OriginalCollection9 from "../assets/OriginalCollection9.png";
import HeroBg3 from "../assets/slide-4.png";

const CollectionShowcase = () => {
  // Mapping images for hover effect
  const products = [
    {
      defaultImg: OriginalCollection5,
      hoverImg: OriginalCollection1,
      title: "Product 1",
    },
    {
      defaultImg: OriginalCollection6,
      hoverImg: OriginalCollection2,
      title: "Product 2",
    },
    {
      defaultImg: OriginalCollection7,
      hoverImg: OriginalCollection3,
      title: "Product 3",
    },
    {
      defaultImg: OriginalCollection8,
      hoverImg: OriginalCollection4,
      title: "Product 4",
    },
    {
      defaultImg: OriginalCollection9,
      hoverImg: HeroBg3,
      title: "Product 5",
    },
  ];

  return (
    <section className="bg-white py-8">
      {/* Header */}
      <div className="bg-black text-white py-4 text-center font-bold text-xl uppercase">
        Collect Them All
      </div>

      {/* Title */}
      <h2 className="text-orange-500 text-center text-3xl font-bold mt-6">
        Original Collection
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4 lg:px-16">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center group"
          >
            {/* Image with hover effect */}
            <img
              src={product.defaultImg}
              alt={product.title}
              className="w-40 h-40 object-contain rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              onMouseOver={(e) => (e.currentTarget.src = product.hoverImg)}
              onMouseOut={(e) => (e.currentTarget.src = product.defaultImg)}
            />
            {/* Title */}
            <p className="text-center font-bold mt-4">{product.title}</p>
          </div>
        ))}
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

export default CollectionShowcase;
