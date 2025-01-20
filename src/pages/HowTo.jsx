import React from "react";
import HowToImage from "../assets/Howto.jpeg"; // Replace with your actual image file
import VideoThumbnail1 from "../assets/thumbnail2.png"; // Replace with your actual video thumbnail
import VideoThumbnail2 from "../assets/thumbnail1.png";
import VideoThumbnail3 from "../assets/thumbnail3.png";
import VideoThumbnail4 from "../assets/thumbnail4.png";

const HowTo = () => {
  return (
    <section>
      {/* How to Apply Claspees Section */}
      <div className="   flex justify-center">
        <div className=" ">
          <img
            src={HowToImage}
            alt="How to Apply Claspees"
            className="max-w-full h-auto "
          />
        </div>
      </div>

      {/* Style Hacks Section */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-extrabold text-center mb-6">
            Claspees Style Hacks
          </h2>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Video 1 */}
            <div className="relative">
              <div className="h-[480px]"><img
                src={VideoThumbnail1}
                alt="Style Hack 1"
                className="rounded-lg h-full shadow-lg"
              /></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-play text-white text-4xl"></i>
              </div>
            
            </div>

            {/* Video 2 */}
            <div className="relative">
            <div className="h-[480px]">
              <img
                src={VideoThumbnail2}
                alt="Style Hack 2"
                className="rounded-lg shadow-lg h-full"
              />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-play text-white text-4xl"></i>
              </div>
            </div>

            {/* Video 3 */}
            <div className="relative">
            <div className="h-[480px]">
              <img
                src={VideoThumbnail3}
                alt="Style Hack 3"
                className="rounded-lg shadow-lg h-full"
              />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-play text-white text-4xl"></i>
              </div>
            </div>

            {/* Video 4 */}
            <div className="relative">
            <div className="h-[480px]">
              <img
                src={VideoThumbnail4}
                alt="Style Hack 4"
                className="rounded-lg shadow-lg h-full" 
              />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-play text-white text-4xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
