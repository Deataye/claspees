import React from "react";
import Productimage from "../assets/ProductsSection1.png"; // Ensure the path is correct

const ProductsSection = () => {
  return (
    <section className="bg-white   flex flex-col md:flex-row items-center relative">
      {/* Text Content */}
      <div className="md:w-1/2 h-screen bg-[#00AEEF] text-white flex flex-col justify-start py-10 px-8 lg:px-16">
        <h2 className="text-4xl font-extrabold mb-6">OUR PRODUCTS</h2>
        <p className="text-lg leading-relaxed mb-6">
          Have you ever experienced that sinking feeling when you pull your
          favorite hoodie out of the washer, to find one of the drawstrings
          wholly lost? We've all felt that frustration. But fear not, the
          solution has arrived, called Claspees™.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Say goodbye to those moments of drawstring dread, as Claspees™ is here
          to end the hassle once and for all. From hoodies to footwear,
          Claspees™ has you covered, literally.
        </p>
        <p className="text-lg leading-relaxed">
          Claspees™ are stylish collectible accessories that prevent the loss of
          drawstrings, while accessorizing your look. They are collectible and
          come in different shapes, designs, and colors, creating limitless
          possibilities for all ages, styles, and brand partnership
          opportunities.
        </p>
      </div>

      {/* Image Content */}
      <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={Productimage} // Using the imported image
          alt="Our Products"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default ProductsSection;
