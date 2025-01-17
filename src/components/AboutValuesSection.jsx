import React from "react";

const AboutValuesSection = () => {
  return (
    <section className="bg-white">
      {/* About Us Section */}
      <div className="py-16 px-8 md:px-16 lg:px-24 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
          ABOUT US
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
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
      <div className="bg-gray-100 py-16 px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black text-center">
          OUR VALUES
        </h2>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-sky-500 p-8 text-white rounded-lg">
            <h3 className="text-xl font-bold mb-4">UNAPOLOGETIC OPTIMISTS</h3>
            <p className="text-base leading-relaxed">
              We envision a limitless world of possibilities, unlocked through a
              ripple effect of positive change, fostering belonging and
              community celebration, cherishing the inherent differences as
              shared experiences.
            </p>
          </div>
          <div className="bg-purple-600 p-8 text-white rounded-lg">
            <h3 className="text-xl font-bold mb-4">INHERENTLY FUNCTIONAL</h3>
            <p className="text-base leading-relaxed">
              We embrace functionality in our designs and operations, ensuring
              that our accessories serve a practical purpose while elevating
              personal style.
            </p>
          </div>
          <div className="bg-lime-500 p-8 text-white rounded-lg">
            <h3 className="text-xl font-bold mb-4">BRILLIANTLY VIBRANT</h3>
            <p className="text-base leading-relaxed">
              Our energy is vibrant and infectious, spreading positivity and
              enthusiasm wherever we go.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-pink-500 p-8 text-white rounded-lg">
            <h3 className="text-xl font-bold mb-4">IMAGINATIVELY EXPRESSIVE</h3>
            <p className="text-base leading-relaxed">
              We empower individuals to be expressive and showcase their unique
              identities through our diverse range of Claspees, enabling them
              to tell their own fashion narratives.
            </p>
          </div>
          <div className="bg-orange-500 p-8 text-white rounded-lg">
            <h3 className="text-xl font-bold mb-4">DELIGHTFULLY INCLUSIVE</h3>
            <p className="text-base leading-relaxed">
              We celebrate the uniqueness of every individual and stand
              together with all diverse expressions, empowering everyone to
              embrace themselves and one-of-a-kind style.
            </p>
          </div>
          <div className="bg-sky-400 p-8 text-white rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              ENTHUSIASTICALLY COLLECTIBLE
            </h3>
            <p className="text-base leading-relaxed">
              We take pride in creating collectible, shareable moments, each
              piece thoughtfully designed to embrace the uniqueness of each
              individual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;
