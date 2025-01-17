import React from "react";
import Newsletter1 from "../assets/Newsletter1.png";
import Newsletter2 from "../assets/Newsletter2.png";
import Newsletter3 from "../assets/Newsletter3.png";

const NewsletterSection = () => {
  return (
    <section>
      {/* Service Information */}
      <div className="bg-[#FF03E7] text-white py-8">
        <div className="container mx-auto flex flex-col lg:flex-row justify-evenly items-center space-y-8 lg:space-y-0 lg:space-x-4">
          {/* Service Card 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={Newsletter1}
              alt="Next Day Dispatch"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-bold">Next Day Dispatch</h3>
            <p className="text-sm">
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
            <h3 className="text-lg font-bold">Fast Delivery</h3>
            <p className="text-sm">
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
            <h3 className="text-lg font-bold">Exchange & Returns</h3>
            <p className="text-sm">
              We are here to help. Reach out to us directly at info@claspees.com
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#FFD600] py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-blue-700 text-3xl font-bold mb-4">
            Don't Miss a Drop
          </h2>
          <p className="text-blue-600 mb-6">
            Stay up to date on the latest product releases, special offers &
            news by signing up for our newsletter.
          </p>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 w-80 border border-gray-300 rounded-l-md"
            />
            <button className="bg-purple-600 text-white px-6 py-2 rounded-r-md hover:bg-purple-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Chat Icon */}
      <div className="absolute bottom-6 right-6 bg-white rounded-full p-3 shadow-md">
        <div className="relative">
          <img
            src={Newsletter1}
            alt="Chat Icon"
            className="w-8 h-8"
          />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
            1
          </span>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
