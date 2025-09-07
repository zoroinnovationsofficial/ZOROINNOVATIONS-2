import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/user-section/Navbar.jsx";
import Footer from "./components/user-section/Footer.jsx";
import Home from "./pages/user-section/Home.jsx";
import About from "./pages/user-section/About.jsx";
import Service from "./pages/user-section/Service.jsx";
import Projects from "./pages/user-section/Projects.jsx";
import Blog from "./pages/user-section/Blog.jsx";
import Career from "./pages/user-section/Career.jsx";
import ContactPage from "./pages/user-section/ContactPage.jsx";
import VerifyIDPage from "./pages/user-section/VerifyIDPage.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import AdminLayout from "./components/admin-section/AdminLayout.jsx";
import AdminLogin from "./pages/admin-section/login.jsx";
import AdminDashboard from "./pages/admin-section/Dashboard.jsx";
import AdminCareer from "./pages/admin-section/Career.jsx";
import AdminTeam from "./pages/admin-section/Team.jsx";
import AdminBlog from "./pages/admin-section/Blog.jsx";
import AdminEmployeeVer from "./pages/admin-section/EmployeeVer.jsx";
import AdminLocation from "./pages/admin-section/Location.jsx";
import AdminProjects from "./pages/admin-section/Projects.jsx";
import Admin from "./pages/admin-section/Contacts.jsx";
import ProtectedRoute from "./components/admin-section/ProtectedRoute.jsx";

import PrivacyPolicy from "./components/user-section/PrivacyPolicy/Page.jsx";
import TermsPage from "./components/user-section/TermsConditions/Page.jsx";

import AdminLandingPage from "./pages/admin-section/LandingPage.jsx";
import "./App.css";

/* ✅ ScrollToTop inside same file */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // change to "smooth" for smooth scrolling
    });
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="App">
      <ScrollToTop /> {/* 👈 ensures scroll resets on every route change */}
      {!isAdminRoute && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/termsPage" element={<TermsPage />} />
          <Route
            path="/projects"
            element={
              <ErrorBoundary>
                <Projects />
              </ErrorBoundary>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/verify" element={<VerifyIDPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/landing" element={<AdminLandingPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="career" element={<AdminCareer />} />
              <Route path="team" element={<AdminTeam />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="verify" element={<AdminEmployeeVer />} />
              <Route path="location" element={<AdminLocation />} />
              <Route path="projects" element={<AdminProjects />} />
              <Route path="contacts" element={<Admin />} />
            </Route>
          </Route>
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
