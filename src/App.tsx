import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FarmPage from "./pages/FarmPage";
import ProductsPage from "./pages/ProductsPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import CSRPage from "./pages/CSRPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
export function App() {
  return <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/our-farm" element={<FarmPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/csr" element={<CSRPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}