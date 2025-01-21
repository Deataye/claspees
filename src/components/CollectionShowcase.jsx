import React from "react";
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
    <section className="bg-white pb-16 lg:pb-36">
      {/* Scrolling Text Banner */}
      <div className="bg-black text-white font-montserrat py-3 lg:py-4 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee">
          <span className="text-xl lg:text-3xl font-bold uppercase px-8 lg:px-16">
            Collect Them All
          </span>
          <span className="text-xl lg:text-3xl font-bold uppercase px-8 lg:px-16">
            Collect Them All
          </span>
          <span className="text-xl lg:text-3xl font-bold uppercase px-8 lg:px-16">
            Collect Them All
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 lg:px-0">
        <h2 className="text-orange-500 max-w-[1000px] mx-auto text-3xl lg:text-[55px] font-montserrat font-extrabold mt-8 lg:mt-12 mb-8 lg:mb-12">
          Original Collection
        </h2>
      </div>

      {/* Products Grid */}
      <div className="px-4 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 max-w-[1000px] mx-auto">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group"
            >
              {/* Image Container with fixed aspect ratio */}
              <div className="relative w-full aspect-[3/4] mb-4">
                <img
                  src={product.defaultImg}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-xl transition-transform transform group-hover:scale-110"
                  onMouseOver={(e) => (e.currentTarget.src = product.hoverImg)}
                  onMouseOut={(e) => (e.currentTarget.src = product.defaultImg)}
                />
              </div>
              {/* Product Details */}
              <p className="text-center font-semibold text-sm lg:text-base mb-1">
                {product.name}
              </p>
              <p className="text-center text-gray-700 text-sm lg:text-base mb-3">
                {product.price}
              </p>
              {/* Add to Cart Button */}
              <button className="bg-purple-600 text-white px-5 lg:px-6 py-2 rounded-full shadow-md hover:bg-purple-700 transition text-sm lg:text-base">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;