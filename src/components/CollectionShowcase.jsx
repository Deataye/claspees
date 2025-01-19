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
      {/* Scrolling Text Banner */}
      <div className="bg-black text-white overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="text-2xl font-bold uppercase px-8">Collect Them All</span>
          <span className="text-2xl font-bold uppercase px-8">•</span>
          <span className="text-2xl font-bold uppercase px-8">Collect Them All</span>
          <span className="text-2xl font-bold uppercase px-8">•</span>
          <span className="text-2xl font-bold uppercase px-8">Collect Them All</span>
          <span className="text-2xl font-bold uppercase px-8">•</span>
        </div>
        <div className="inline-block animate-marquee2">
          <span className="text-2xl font-bold uppercase px-8">Collect Them All</span>
          <span className="text-2xl font-bold uppercase px-8">•</span>
          <span className="text-2xl font-bold uppercase px-8">Collect Them All</span>
          <span className="text-2xl font-bold uppercase px-8">•</span>
          <span className="text-2xl font-bold uppercase px-8">Collect Them All</span>
          <span className="text-2xl font-bold uppercase px-8">•</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-orange-500 text-center text-4xl font-bold mt-12 mb-16">
        Original Collection
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-8 lg:px-24">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center group"
          >
            {/* Image with hover effect */}
            <img
              src={product.defaultImg}
              alt={product.title}
              className="w-64 h-64 object-contain transition-transform transform group-hover:scale-110"
              onMouseOver={(e) => (e.currentTarget.src = product.hoverImg)}
              onMouseOut={(e) => (e.currentTarget.src = product.defaultImg)}
            />
            {/* Title */}
            <p className="text-center font-bold text-lg mt-6">{product.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionShowcase;