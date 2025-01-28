import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Newsletter1 from '../assets/NewsLetter1.png';
import Newsletter2 from '../assets/NewsLetter2.png';
import Newsletter3 from '../assets/NewsLetter3.png';

gsap.registerPlugin(ScrollTrigger);
const NewsletterSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    gsap.fromTo(
      element,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef}>
      {/* Service Information */}
      <div className="bg-[#FF03E7] font-montserrat text-black py-8">
        <div className="container mx-auto flex flex-col lg:flex-row justify-evenly items-center space-y-8 lg:space-y-0 lg:space-x-4">
          {/* Service Card 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={Newsletter1}
              alt="Next Day Dispatch"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-[20px] font-montserrat ">Next Day Dispatch</h3>
            <p className="text-[17px] font-montserrat ">
              All orders placed before 3pm EST Monday to Friday are processed
              next day.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={Newsletter2}
              alt="Fast Delivery"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-[20px] font-montserrat ">Fast Delivery</h3>
            <p className="text-[17px] font-montserrat ">
              A free fully trackable 2-3 day delivery service is available on
              all orders.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={Newsletter3}
              alt="Exchange & Returns"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-[20px] font-montserrat ">Exchange & Returns</h3>
            <p className="text-[17px] font-montserrat ">
              We are here to help. Reach out to us directly at info@claspees.com
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#FFD600] py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-[#00AAE6] text-3xl font-montserrat lg:text-[40px] font-extrabold mb-4">
            Don't Miss a Drop
          </h2>
          <p className="text-blue-600 text-[16px] font-montserrat leading-relaxed font-medium mb-6">
            Stay up to date on the latest product releases, special offers & news by signing up for our newsletter.
          </p>
          <div className="flex flex-col justify-center items-center space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 w-80 border border-gray-300 rounded-md"
            />
            <button className="bg-purple-600 text-white w-80 px-6 py-2 rounded-md hover:bg-purple-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;


