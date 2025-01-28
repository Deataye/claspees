import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutValuesSection = () => {
  const textRef = useRef(null);
  const valuesContainerRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const valuesContainer = valuesContainerRef.current;

    // Animate the "About Us" text sliding in from left to right
    gsap.fromTo(
      textElement,
      { x: '-100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textElement,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Animate the values container zooming in when it enters the viewport
    gsap.fromTo(
      valuesContainer,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: valuesContainer,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);

  const values = [
    {
      title: 'UNAPOLOGETIC OPTIMISTS',
      content:
        'We envision a limitless world of possibilities, unlocked through a ripple effect of positive change, fostering belonging and community celebration, cherishing the inherent differences as shared experiences.',
      bgColor: 'bg-sky-500',
    },
    {
      title: 'INHERENTLY FUNCTIONAL',
      content:
        'We embrace functionality in our designs and operations, ensuring that our accessories serve a practical purpose while elevating personal style.',
      bgColor: 'bg-purple-600',
    },
    {
      title: 'BRILLIANTLY VIBRANT',
      content:
        'Our energy is vibrant and infectious, spreading positivity and enthusiasm wherever we go.',
      bgColor: 'bg-lime-500',
    },
    {
      title: 'IMAGINATIVELY EXPRESSIVE',
      content:
        'We empower individuals to be expressive and showcase their unique identities through our diverse range of Claspees, enabling them to tell their own fashion narratives.',
      bgColor: 'bg-pink-500',
    },
    {
      title: 'DELIGHTFULLY INCLUSIVE',
      content:
        'We celebrate the uniqueness of every individual and stand together with all diverse expressions, empowering everyone to embrace themselves and one-of-a-kind style.',
      bgColor: 'bg-orange-500',
    },
    {
      title: 'ENTHUSIASTICALLY COLLECTIBLE',
      content:
        'We take pride in creating collectible, shareable moments, each piece thoughtfully designed to embrace the uniqueness of each individual.',
      bgColor: 'bg-sky-400',
    },
  ];

  return (
    <section className="bg-white">
      {/* About Us Section */}
      <div
        ref={textRef}
        className="py-16 px-8 md:px-16 lg:px-24 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-[35px] font-montserrat font-extrabold mb-6 text-black">
          ABOUT US
        </h2>
        <p className="text-[17px] text-gray-700 font-medium font-montserrat leading-relaxed">
          We've created a product that embodies limitless possibilities. As the
          ultimate brand for fashionable yet functional collectible drawstring
          accessories, we're reshaping how individuals express their unique
          style in exciting new ways. Our vision is to cultivate a world where
          people of all ages and backgrounds confidently embrace their
          individuality, crafting their own one-of-a-kind creations. We fulfill
          this vision through innovative designs, collectibility, and an
          unwavering commitment to self-expression.
        </p>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-100 py-0 px-8 md:px-16 lg:px-0">
        <h2 className="text-3xl md:text-[35px] font-montserrat font-extrabold mb-6 text-black lg:px-24">
          OUR VALUES
        </h2>

        {/* Combined Values Container */}
        <div
          ref={valuesContainerRef}
          className="grid grid-cols-1 md:grid-cols-3 "
        >
          {values.map((value, index) => (
            <div
              key={index}
              className={`${value.bgColor} p-14 text-white`}
            >
              <h3 className="text-[20px]  font-montserrat font-extrabold mb-4">{value.title}</h3>
              <p className="text-[17px] font-medium font-montserrat leading-relaxed">{value.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;
