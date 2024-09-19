import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Products from "./Pages/Products";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer";
import FloatingContactIcons from "./Components/FloatingContactIcons";
import SubSectionPage from "./Pages/SubSectionPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category/:categoryId/subsection/:subSectionId" element={<SubSectionPage />} />
            <Route path="/category/:categoryId/subsection/:subSectionId/product/:productId" element={<ProductDetailsPage />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
          <FloatingContactIcons />
        </Router>
      </div>
    </>
  );
}

export default App;
