import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === "shahzaiba61@gmail.com") {
      // Redirect to admin panel
      navigate("/admin-panel");
    } else {
      // Handle regular user flow
      console.log("Email submitted:", email);
    }
  };

  return (
    <div className=" bg-gray-100 flex pt-16 mt-20 justify-center">
      <div className="bg-white w-full max-w-md p-8  font-montserrat rounded-lg shadow-md">
        <h1 className="text-[26px] font-medium text-center mb-4">Claspees</h1>
        <h2 className="text-[24px] font-medium text-start mb-6">Log in</h2>
        <p className="text-start text-[14px] text-gray-600 mb-6">
          Enter your email and we'll send you a login code
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white font-semibold ${
              email ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!email}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;