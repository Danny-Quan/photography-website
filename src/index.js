import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GalleryPage from "./pages/GalleryPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PackagesPage from "./pages/PackagesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/packages/:id/:title" element={<PackagesPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
);
