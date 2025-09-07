import React from 'react';

function ManageSection() {
  return (
    <section className="text-white">
      {/* Background with Overlay */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-10 px-6 animate-bg-zoom"
        style={{ backgroundImage: "url('/Homeimages/Manage.jpg')" }}
      >
        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-[#A855F7]/90 animate-overlay-pulse-purple z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto py-16 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
            We Manage.
          </h2>
          <p className="text-xl font-semibold text-gray-300 animate-fade-in-up animation-delay-200">
            Providing comprehensive IT management services to ensure your systems run<br />
            smoothly, securely, and efficiently.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 md:px-0">
            <div className="bg-purple-900/30 text-white p-6 rounded-3xl shadow-lg text-start transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] hover:bg-purple-900/40 group">
              <h3 className="text-lg font-semibold mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                24/7 Monitoring
              </h3>
              <p className="text-base text-gray-200">
                Continuous system monitoring and proactive maintenance to prevent issues before they occur.
              </p>
            </div>

            <div className="bg-purple-900/30 text-white p-6 rounded-3xl shadow-lg text-start transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] hover:bg-purple-900/40 group">
              <h3 className="text-lg font-semibold mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                Security Management
              </h3>
              <p className="text-base text-gray-200">
                Comprehensive cybersecurity solutions to protect your data and systems from threats.
              </p>
            </div>

            <div className="bg-purple-900/30 text-white p-6 rounded-3xl shadow-lg text-start transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] hover:bg-purple-900/40 group">
              <h3 className="text-lg font-semibold mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                Performance Optimization
              </h3>
              <p className="text-base text-gray-200">
                Ongoing optimization to ensure peak performance and maximum return on technology investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManageSection;
