import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";


import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import ContactUs from "./pages/Contact.jsx";
import FAQs from "./pages/FAQ.jsx";
import HowToSection from "./pages/HowTo.jsx";
import AboutSection from "./pages/About.jsx";
import HomePage from "./pages/HomePage.jsx";
import Shop from "./pages/Shop.jsx";
import PopUp from "./components/PopUp.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <Router>
    <Navbar />
    <PopUp/>
    <div className="min-h-[calc(100vh-200px)]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/howto" element={<HowToSection />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
    <Footer />
  </Router>
  );
}

export default App;