import React from "react";
import AdminPanel from "./AdminPanel";

const ContactUs = () => {
  return (
    <section className="flex justify-center mt-16 bg-white">
      <div className="w-full max-w-md px-6 py-8 bg-white  rounded-lg">
        {/* Heading */}
        <h1 className="text-[55px] font-montserrat font-extrabold text-center mb-2 text-black">
          Contact Us
        </h1>
        <p className="text-center text-xl font-montserrat font-extrabold text-gray-600 mb-6">
          We would love to hear from You!
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* First Name Field */}
          <div>
            <input
              type="text"
              placeholder="First name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition focus:outline-none"
            >
              Get In Touch!
            </button>
          </div>
        </form>
      </div>
      
    </section>
  );
};

export default ContactUs;
