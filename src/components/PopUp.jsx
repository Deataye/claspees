import React, { useState, useEffect } from "react";
// Replace with your image file

const PopUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup on page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay to simulate popup
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>

            <div className="flex flex-col lg:flex-row items-center">
              {/* Image Section */}
              {/* <div className="flex-1 bg-cover bg-center h-48 lg:h-full" style={{ backgroundImage: `url(${PopupImage})` }}>
              </div> */}

              {/* Form Section */}
              <div className="flex-1 p-6">
                <h2 className="text-2xl font-bold text-gray-800">Don't Miss Out</h2>
                <p className="text-gray-600 mb-4">
                  Sign up to get a hold of our latest updates and exclusives!
                </p>
                <form>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
                  />
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                  >
                    Sign Up
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-2">
                  By signing up, you agree to receive marketing emails. View our
                  privacy policy and terms of service for more info.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
