import React from "react";
import { HiArrowLeft } from "react-icons/hi";

const SectionHeader = () => {
  const handleBackToHome = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#3B82F6] to-[#FF6B35]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            About Zoro Innovation
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Building financial security and trust for over two decades. We are
            your dedicated partners in creating a prosperous future through
            expert guidance and personalized solutions.
          </p>
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <HiArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </button>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default SectionHeader;
