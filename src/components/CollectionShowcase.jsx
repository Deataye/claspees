import React from "react";

const CollectionShowcase = () => {
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

      {/* Collection Grid */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-8 px-4 lg:px-16 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Section: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/path-to-your-model-image.png"
            alt="Model wearing Claspees"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>

        {/* Right Section: Products */}
        <div className="flex-1 grid grid-cols-2 gap-6 justify-items-center">
          {/* Product Rows */}
          <div className="flex flex-col items-center">
            <img
              src="/path-to-product1.png"
              alt="Product 1"
              className="w-20 h-20 object-contain"
            />
            <p className="text-center mt-2 font-bold">"Love" Pack</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/path-to-product2.png"
              alt="Product 2"
              className="w-20 h-20 object-contain"
            />
            <p className="text-center mt-2 font-bold">"Ballin'" Pack</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/path-to-product3.png"
              alt="Product 3"
              className="w-20 h-20 object-contain"
            />
            <p className="text-center mt-2 font-bold">"Sprinkles" Pack</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/path-to-product4.png"
              alt="Product 4"
              className="w-20 h-20 object-contain"
            />
            <p className="text-center mt-2 font-bold">"Express Yourself" Pack</p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Additional Products */}
      <div className="flex flex-wrap justify-center mt-8 px-4 lg:px-16 space-x-8">
        {/* Individual Product */}
        <div className="w-48 flex flex-col items-center">
          <img
            src="/path-to-product5.png"
            alt="Product 5"
            className="w-24 h-24 object-contain"
          />
          <p className="text-center font-bold mt-4">"I Am" Pack</p>
          <p className="text-center text-gray-600">$9.99 USD</p>
          <button className="bg-purple-600 text-white mt-4 px-4 py-2 rounded-full hover:bg-purple-700 transition">
            Add to cart
          </button>
        </div>

        {/* Another Product */}
        <div className="w-48 flex flex-col items-center">
          <img
            src="/path-to-product6.png"
            alt="Product 6"
            className="w-24 h-24 object-contain"
          />
          <p className="text-center font-bold mt-4">"Express Yourself" Pack</p>
          <p className="text-center text-gray-600">$9.99 USD</p>
          <button className="bg-purple-600 text-white mt-4 px-4 py-2 rounded-full hover:bg-purple-700 transition">
            Add to cart
          </button>
        </div>
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
