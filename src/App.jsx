import React from "react";

import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/Hero.jsx";
import ProductHighlight from "./components/ProductHighlight.jsx";
import AccessoryShowcase from "./components/AccessoryShowcase.jsx";
import CollectionShowcase from "./components/CollectionShowcase.jsx";
import NewsletterSection from "./components/NewsletterSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductHighlight />
      <AccessoryShowcase />
      <CollectionShowcase />
      <NewsletterSection />
      <Footer />
    </>
  );
}

export default App;
