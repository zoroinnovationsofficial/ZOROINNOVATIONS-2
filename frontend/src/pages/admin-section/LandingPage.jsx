import React from "react";
import Hero from "../../components/admin-section/landingPage/Hero.jsx";
import Footer from '../../components/admin-section/loginPage/LoginFooter.jsx';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#181f2a]">
      <header className="bg-white py-3 shadow">
        <div className="max-w-7xl mx-auto flex items-center px-6">
          <img
            src="/zoroLogo.png"
            alt="ZORO INNOVATIONS"
            className="h-8 md:h-10"
          />
        </div>
      </header>
      <Hero />
      <Footer />
    </div>
  );
}
