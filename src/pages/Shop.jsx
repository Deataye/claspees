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

const Shop = () => {
  const products = [
    {
      defaultImg: OriginalCollection5,
      hoverImg: OriginalCollection1,
      name: '"Love" Pack',
      price: "$9.99 USD",
    },
    {
      defaultImg: OriginalCollection6,
      hoverImg: OriginalCollection2,
      name: '"Ballin\'" Pack',
      price: "$9.99 USD",
    },
    {
      defaultImg: OriginalCollection7,
      hoverImg: OriginalCollection3,
      name: '"Sprinkles" Pack',
      price: "$9.99 USD",
    },
    {
      defaultImg: OriginalCollection8,
      hoverImg: OriginalCollection4,
      name: '"I Am" Pack',
      price: "$9.99 USD",
    },
    {
      defaultImg: OriginalCollection9,
      hoverImg: OriginalCollection1,
      name: '"Express Yourself" Pack',
      price: "$9.99 USD",
    },
  ];

  return (
    <section className="bg-white mx-auto mt-20 lg:max-w-[1300px] py-12">
      {/* Title Section */}
      <h1 className=" text-center lg:text-start text-[35px] lg:text-[55px] font-montserrat  font-extrabold mb-4">
        ORIGINAL COLLECTION STARTER PACKS
      </h1>
      <p className="  text-gray-600 text-xl px-6 lg:px-0 mb-8 ">
        Start your collection with everything you need to embrace your cool.
        Every Claspees™ wave showcases exclusive designs that will remain
        one-of-a-kind, never to resurface. Once they bid adieu, they're gone
        forever, transforming each piece into a treasured rarity, ready to be
        traded, displayed, or shared among old and new friends.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:max-w-[1350px] mx-auto lg:grid-cols-3 gap-12 px-8">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center group">
            {/* Image with hover effect */}
            <img
              src={product.defaultImg}
              alt={product.title}
              className="w-[360px] h-[460px] object-contain rounded-3xl transition-transform transform group-hover:scale-110"
              onMouseOver={(e) => (e.currentTarget.src = product.hoverImg)}
              onMouseOut={(e) => (e.currentTarget.src = product.defaultImg)}
            />
            {/* Title */}
            <p className="text-center font-semibold">{product.name}</p>
            <p className="text-center text-gray-700">{product.price}</p>
            {/* Add to Cart Button */}
            <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-purple-700 transition">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
