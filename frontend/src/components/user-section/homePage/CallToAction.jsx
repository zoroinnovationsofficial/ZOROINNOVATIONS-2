import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CallToAction() {
  const navigate = useNavigate();

  // helper to navigate & scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 ensures scrolls to start
  };

  return (
    <section className="bg-gradient-to-br from-orange-500 to-orange-700 text-white text-center py-20 px-4">
      <h2 className="text-4xl font-bold mb-4">
        Ready to Transform Your Business?
      </h2>
      <p className="text-xl font-normal mb-12 text-orange-100 max-w-3xl mx-auto">
        Let's discuss how our innovative solutions can help you achieve your
        goals and stay ahead of the competition.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {/* Start Project -> Careers Page */}
        <button
          onClick={() => handleNavigation("/careers")}
          className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-6 rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 text-center"
        >
          Start Project
        </button>

        {/* Schedule Consultation -> Contact Page */}
        <button
          onClick={() => handleNavigation("/contact")}
          className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-3 px-6 rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 text-center"
        >
          Schedule Consultation
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
