import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Productimage from '../assets/ProductsSection1.png'; // Ensure the path is correct

gsap.registerPlugin(ScrollTrigger);

const ProductsSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const leftElement = leftRef.current;
    const rightElement = rightRef.current;

    // Animate left section sliding in from left to right when it enters the viewport
    gsap.fromTo(
      leftElement,
      { x: '-100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: leftElement,
          start: 'top 80%', // Adjust as needed
          toggleActions: 'play pause resume reset', // Ensures animation resets when leaving viewport
        },
      }
    );

    // Animate right section sliding in from right to left when it enters the viewport
    gsap.fromTo(
      rightElement,
      { x: '100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: rightElement,
          start: 'top 80%', // Adjust as needed
          toggleActions: 'play pause resume reset', // Ensures animation resets when leaving viewport
        },
      }
    );
  }, []);

  return (
    <section className="bg-[#00AEEF]  flex flex-col md:flex-row items-center relative">
      {/* Text Content */}
      <div
        ref={leftRef}
        className="md:w-1/2 h-screen bg-[#00AEEF] text-white flex flex-col justify-start py-10 px-8 lg:px-16"
      >
        <h2 className="lg:text-[35px] font-montserrat text-3xl font-extrabold mb-6">OUR PRODUCTS</h2>
        <p className="lg:text-[17px] text-sm font-montserrat leading-relaxed mb-6">
          Have you ever experienced that sinking feeling when you pull your
          favorite hoodie out of the washer, to find one of the drawstrings
          wholly lost? We've all felt that frustration. But fear not, the
          solution has arrived, called Claspees™.
        </p>
        <p className="lg:text-[17px] font-montserrat text-sm leading-relaxed mb-6">
          Say goodbye to those moments of drawstring dread, as Claspees™ is here
          to end the hassle once and for all. From hoodies to footwear,
          Claspees™ has you covered, literally.
        </p>
        <p className="lg:text-[17px] font-montserrat text-sm leading-relaxed">
          Claspees™ are stylish collectible accessories that prevent the loss of
          drawstrings, while accessorizing your look. They are collectible and
          come in different shapes, designs, and colors, creating limitless
          possibilities for all ages, styles, and brand partnership
          opportunities.
        </p>
      </div>

      {/* Image Content */}
      <div
        ref={rightRef}
        className=" bg-[#FCFFF3] md:mt-0 md:w-1/2  flex justify-center"
      >
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
