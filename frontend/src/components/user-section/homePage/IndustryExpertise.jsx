import React from 'react';

function IndustryExpertise() {
  return (
    <section className="bg-white py-20 px-4 sm:px-10 animate-bg-pulse-white">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800 animate-fade-in-up hover:animate-title-hover">
        Our Industry Expertise and Solutions
      </h2>
      <p className="text-center text-gray-600 font-normal text-xl mb-16 animate-fade-in-up animation-delay-200">
        Specialized solutions across diverse industries
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Healthcare */}
        <div className="bg-gradient-to-br from-[#3B82F6] via-[#3B82F6] to-[#9333EA] text-white p-10 rounded-3xl shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] group">
          <img 
            src="/Homeimages/Icon-6.svg" 
            alt="Healthcare" 
            className="mb-10 h-12 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-semibold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            Healthcare
          </h3>
          <p className="text-base text-gray-300">
            Digital health solutions and medical technology innovations.
          </p>
        </div>

        {/* E-commerce */}
        <div className="bg-gradient-to-br from-[#22C55E] to-[#0D9488] text-white p-10 rounded-3xl shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] group">
          <img 
            src="/Homeimages/Icon-7.svg" 
            alt="E-commerce" 
            className="mb-10 h-12 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-semibold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            E-commerce
          </h3>
          <p className="text-base text-gray-300">
            Advanced e-commerce platforms and customer experience solutions.
          </p>
        </div>

        {/* Finance */}
        <div className="bg-gradient-to-br from-[#F97316] to-[#DC2626] text-white p-10 rounded-3xl shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img 
            src="/Homeimages/Icon-8.svg" 
            alt="Finance" 
            className="mb-10 h-12 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-semibold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            Finance
          </h3>
          <p className="text-base text-gray-300">
            Fintech solutions and financial services automation.
          </p>
        </div>

        {/* Education */}
        <div className="bg-gradient-to-br from-[#A855F7] to-[#DB2777] text-white p-10 rounded-3xl shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] group">
          <img 
            src="/Homeimages/Icon-9.svg" 
            alt="Education" 
            className="mb-10 h-12 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-semibold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            Education
          </h3>
          <p className="text-base text-gray-300">
            EduTech platforms and learning management systems.
          </p>
        </div>

        {/* Automotive */}
        <div className="bg-gradient-to-br from-[#6366F1] to-[#2563EB] text-white p-10 rounded-3xl shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(99,102,241,0.6)] group">
          <img 
            src="/Homeimages/Icon-10.svg" 
            alt="Automotive" 
            className="mb-10 h-12 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-semibold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            Automotive
          </h3>
          <p className="text-base text-gray-300">
            Connected vehicle solutions and automotive technology.
          </p>
        </div>

        {/* Real Estate */}
        <div className="bg-gradient-to-br from-[#14B8A6] to-[#16A34A] text-white p-10 rounded-3xl shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(20,184,166,0.6)] group">
          <img 
            src="/Homeimages/Icon-11.svg" 
            alt="Real Estate" 
            className="mb-10 h-12 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-semibold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            Real Estate
          </h3>
          <p className="text-base text-gray-300">
            PropTech solutions for smart building and property management.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IndustryExpertise;
