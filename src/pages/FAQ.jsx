import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import HowTo from "../assets/Howto.jpeg"; // Replace with your actual image file

const FAQ = () => {
  const faqs = [
    {
      question: "What are Claspees™?",
      answer:
        "Claspees™ are innovative, functional clasps designed to secure drawstrings on clothing and accessories, offering both style and practicality.",
    },
    {
      question: "How do Claspees™ work?",
      answer:
        "Gently grasp and squeeze the buttons on the side of the Claspees™, then thread the drawstring through. Finally, slide them up or down your drawstring to your preferred position. No more drawstring drama!",
    },
    {
      question: "What can I use Claspees™ for?",
      answer:
        "Claspees™ are incredibly versatile! You can use them on hoodies, sneakers, backpacks, or even as stylish hair accessories. Plus, for added convenience, our Claspees™ blanks are designed to keep your drawstrings secure during the wash and dry cycles. The possibilities are endless. However, please note that using our Claspees™ with printed designs is not recommended, as detergents may gradually wear them out over time.",
    },
    {
      question: "Are Claspees™ easy to remove?",
      answer:
        "Yes. To remove them, gently grasp and squeeze the buttons on the side of the Claspees™ and slide them off the drawstring.",
    },
    {
      question: "Are Claspees™ durable?",
      answer: "Absolutely! Our Claspees™ are designed to withstand daily wear.",
    },
    {
      question: "Do you have different designs?",
      answer:
        "Yes, we offer a variety of designs, including sports, hearts, and more to suit your unique style.",
    },
    {
      question: "Are Claspees™ available in different sizes?",
      answer:
        "Claspees™ come in one size per shape to accommodate average drawstring sizes.",
    },
    {
      question: "Can I mix and match Claspees™ designs?",
      answer:
        "Of course! Get creative and mix different Claspees™ designs to create a unique look.",
    },
    {
      question: "Do you offer limited-edition Claspees™?",
      answer:
        "Yes, we do! Keep an eye out for our limited-edition releases to add some exclusivity to your collection.",
    },
    {
      question: "Where can I purchase Claspees™?",
      answer:
        'You can find Claspees™ on our official website, <a href="https://www.claspees.com">www.claspees.com</a>.',
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times may vary depending on your location and the shipping method you choose during checkout. Typically, orders within the United States take 3-5 business days.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this number to track the status and location of your package.",
    },
    {
      question: "Can I return or exchange my Claspees™?",
      answer:
        "Yes, we have a hassle-free return and exchange policy. If you're not satisfied with your Claspees™, contact our customer support team, and they will assist you with the return process.",
    },
    {
      question: "What if my order arrives damaged or with missing items?",
      answer:
        "In the rare event that your order arrives damaged or with missing items, please contact our customer support team immediately. We will resolve the issue and ensure you receive a replacement.",
    },
    {
      question: "Where is my order confirmation?",
      answer:
        "After placing an order, you should receive an order confirmation to the provided email within a few minutes. If you don't see it in your inbox, please check your spam or junk folder. If you still can't find it, contact our customer support team, and they will assist you.",
    },
    {
      question: "Can I change or cancel my order after it's been placed?",
      answer:
        "We strive to process orders quickly. If you wish to make changes or cancel your order, please contact our customer support team as soon as possible. We will do our best to accommodate your request if the order hasn't been shipped yet.",
    },
    {
      question: "How do I contact Claspees™ customer support?",
      answer:
        'You can reach our customer support team via email at <a href="mailto:howcanwehelp@claspees.com">howcanwehelp@claspees.com</a> or through the contact form on our website. We\'re here to assist you with any questions or concerns you may have.',
    },
    {
      question: "What if my order is delayed or lost in transit?",
      answer:
        "While rare, delays and lost shipments can happen. If your order is delayed or lost in transit, please contact our customer support team, and we will work with the shipping carrier to resolve the issue and ensure you receive your Claspees™.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Currently, we do not offer shipping internationally. However, stay tuned it’s on the roadmap!",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept a variety of payment methods, including major credit cards, debit cards, and secure online payment options like Apple Pay, Google Pay, Shop Pay, and PayPal. You can choose your preferred payment method during checkout.",
    },
    {
      question: "Can I put my Claspees™ in the washing or drying machines?",
      answer:
        "We recommend that you do not put our Claspees™ with printed designs into a washer or dryer. Claspees™ printed designs can experience wear over time when exposed to detergents and high heat. However, our Claspees™ blanks are designed to keep your drawstrings secure during the wash and dry cycles.",
    },
    
  ];
  const generalFaqs = [
    {
      question: "How can I become a Claspees™ retailer?",
      answer: "If you're interested in becoming a Claspees™ retailer, please reach out to us through our contact page: [Contact Us](https://www.claspees.com/pages/contact). We'd love to discuss potential partnership opportunities with you."
    },
    {
      question: "How can I become an influencer for Claspees™?",
      answer: "We are excited to collaborate with influencers who share our passion for style and functionality. To express your interest, please contact us via our contact page: [Contact Us](https://www.claspees.com/pages/contact). We'll get back to you with more details."
    }
  ]

  return (
    <section className="bg-white py-8 font-montserrat">
      {/* FAQ Header */}
      <div className="text-center py-8">
        <h2 className="text-4xl font-extrabold">FAQ's</h2>
        <p className="text-gray-600 mt-2">
          Want to know more about Claspees? Don't worry, we got you covered!
        </p>
      </div>

      {/* How to Apply Section */}
      <div className="py-10 flex justify-center">
        <img
          src={HowTo}
          alt="How to Apply Claspees"
          className="max-w-full h-auto"
        />
      </div>

      {/* Collapsible FAQ List */}
      <div className="bg-gray-100 max-w-[650px] mx-auto text-start py-8 px-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="py-4 border-b border-gray-300"
          >
            <summary className="text-lg font-extrabold cursor-pointer flex justify-between items-center hover:text-blue-600">
              {faq.question}
              <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-gray-500" />
            </summary>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
       {/* General Questions */}
      <div className="max-w-[650px] mx-auto text-start py-8 px-4">
        <h3 className="text-2xl font-extrabold mb-6">General Questions</h3>
        {generalFaqs.map((faq, index) => (
          <details
            key={index}
            className="py-4 border-b border-gray-300"
          >
            <summary className="text-lg font-extrabold cursor-pointer flex justify-between items-center hover:text-blue-600">
              {faq.question}
              <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-gray-500" />
            </summary>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
