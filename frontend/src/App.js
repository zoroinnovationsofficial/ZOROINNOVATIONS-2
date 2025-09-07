import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/user-section/About.jsx";
import VerifyIDPage from "./pages/user-section/VerifyIDPage.jsx";
import ContactPage from "./pages/user-section/ContactPage.jsx";
import ServicePage from "./pages/user-section/Service.jsx";
import HomePage from "./pages/user-section/Home.jsx";
import ProjectsPage from "./pages/user-section/Projects.jsx";
import BlogPage from "./pages/user-section/Blog.jsx";
import CareersPage from "./pages/user-section/Career.jsx";
import Navbar from "./components/user-section/Navbar.jsx";
import Footer from "./components/user-section/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/verify" element={<VerifyIDPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
