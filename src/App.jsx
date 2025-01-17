import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import ContactUs from "./pages/Contact.jsx"; // Correct import for Contact
import FAQs from "./pages/FAQ.jsx"; // Correct import for FAQ
import HowToSection from "./pages/HowTo.jsx"; // Correct import for HowTo
import AboutSection from "./pages/About.jsx"; // Import About
import HomePage from "./pages/HomePage.jsx"; // Import Home
import Shop from "./pages/Shop.jsx"; // Import Shop
import PopUp from "./components/PopUp.jsx";
function App() {
  return (
    <Router>
      <Navbar />
      <PopUp/>
      <div className="min-h-[calc(100vh-200px)]"> {/* Adjust height to account for Navbar and Footer */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/howto" element={<HowToSection />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;
