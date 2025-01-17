import React from "react";
import HowTo from "../assets/Howto.jpeg"; // Replace with your actual image file

const FAQ = () => {
  const faqs = [
    { question: "What are Claspees™?", answer: "Claspees™ are stylish accessories designed to prevent drawstring loss." },
    { question: "How do Claspees™ work?", answer: "Claspees™ clip onto drawstrings to keep them in place securely." },
    { question: "What can I use Claspees™ for?", answer: "You can use Claspees™ for hoodies, shoes, bags, and more." },
    { question: "Are Claspees™ easy to remove?", answer: "Yes, Claspees™ can be easily removed and reused." },
    { question: "Are Claspees™ durable?", answer: "Claspees™ are made from high-quality materials to ensure durability." },
    // Add more FAQs as needed
  ];

  return (
    <section className="bg-white py-8">
      {/* FAQ Header */}
      <div className="text-center py-8">
        <h2 className="text-4xl font-bold">FAQ's</h2>
        <p className="text-gray-600 mt-2">
          Want to know more about Claspees? Don't worry, we got you covered!
        </p>
      </div>

      {/* How to Apply Section */}
      <div className=" py-10 flex justify-center">
        <img
          src={HowTo}
          alt="How to Apply Claspees"
          className="max-w-full h-auto"
        />
      </div>

      {/* Collapsible FAQ List */}
      <div className="bg-gray-100 text-center py-8 px-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className=" py-4"
          >
            <summary className="text-lg font-bold cursor-pointer hover:text-blue-600">
              {faq.question}
            </summary>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </details>
        ))}
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

export default FAQ;
