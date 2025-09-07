import "./Service.css";
import React, { useState, lazy, Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ServiceTile from "../../components/user-section/servicePage/ServiceTile";
import SideMenu from "../../components/user-section/servicePage/SideMenu";

// ✅ Lazy-load sections for better performance
const WebDevelopmentExcellence = lazy(() =>
  import("../../components/user-section/servicePage/WebDevelopmentExcellence.jsx")
);
const PricingPackages = lazy(() =>
  import("../../components/user-section/servicePage/PricingPackages.jsx")
);
const ServiceProcess = lazy(() =>
  import("../../components/user-section/servicePage/ServiceProcess.jsx")
);
const AiApplications = lazy(() =>
  import("../../components/user-section/servicePage/AiApplications.jsx")
);
const TrackRecord = lazy(() =>
  import("../../components/user-section/servicePage/TrackRecord.jsx")
);
const SuccessStories = lazy(() =>
  import("../../components/user-section/servicePage/SuccessStories.jsx")
);
const ServiceQuoteForm = lazy(() =>
  import("../../components/user-section/servicePage/ServiceQuoteForm.jsx")
);
const ResourcesDocs = lazy(() =>
  import("../../components/user-section/servicePage/ResourcesDocs.jsx")
);
const CTASection = lazy(() =>
  import("../../components/user-section/servicePage/CTA.jsx")
);

const servicesData = [
  {
    id: 1,
    icon: "/Serviceimages/Background.svg",
    title: "Web Development",
    description:
      "Modern, responsive web applications built with cutting-edge technologies and frameworks for optimal performance, ensuring a seamless user experience across all devices.",
  },
  {
    id: 2,
    icon: "/Serviceimages/Background-1.svg",
    title: "Custom Software",
    description:
      "Tailored software solutions designed to meet your specific business requirements and streamline operations, increasing efficiency and reducing manual overhead.",
  },
  {
    id: 3,
    icon: "/Serviceimages/Background-2.svg",
    title: "SaaS Applications",
    description:
      "Scalable Software-as-a-Service platforms with multi-tenant architecture and seamless cloud deployment, ready to grow with your user base.",
  },
  {
    id: 4,
    icon: "/Serviceimages/Background-3.svg",
    title: "AI Applications",
    description:
      "Intelligent applications powered by machine learning and artificial intelligence to automate complex tasks, provide predictive insights, and optimize business processes.",
  },
  {
    id: 5,
    icon: "/Serviceimages/Background-4.svg",
    title: "Managed IT Services",
    description:
      "Comprehensive IT infrastructure management, monitoring, and support services for seamless operations, allowing you to focus on your core business.",
  },
  {
    id: 6,
    icon: "/Serviceimages/Background-5.svg",
    title: "IT Consultancy",
    description:
      "Strategic technology consulting to align IT initiatives with business objectives and drive digital transformation, ensuring your technology investments deliver maximum value.",
  },
];

function ServicePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const handleLearnMoreClick = (service) => {
    setSelectedService(service);
    setIsMenuOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCloseMenu = () => setIsMenuOpen(false);

  // ✅ Lock scroll when side menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMenuOpen]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* ✅ Hero Section */}
      <header className="bg-gradient-to-br from-blue-900 via-blue-600 to-orange-500 text-white py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-5">
          Our Services & Solutions
        </h1>
        <p className="max-w-2xl mx-auto mb-10 font-light text-xl">
          Comprehensive technology services designed to transform your business
          and drive innovation across all aspects of your digital journey.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => navigate("/careers")}
            className="bg-white hover:bg-gray-100 text-orange-500 px-6 py-2 rounded font-semibold transition"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="hover:bg-blue-600 text-white px-6 py-2 rounded font-semibold border border-white transition"
          >
            Contact Us
          </button>
        </div>
      </header>

      {/* ✅ Core Services */}
      <section className="py-20 px-6 sm:px-4 max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold text-center">Our Core Services</h2>
        <p className="text-2xl font-normal text-center mb-10 mt-6 leading-relaxed">
          Explore our comprehensive range of technology solutions
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceTile
              key={service.id}
              {...service}
              onLearnMoreClick={() => handleLearnMoreClick(service)}
            />
          ))}
        </div>
      </section>

      {/* ✅ Lazy Loaded Sections */}
      <Suspense
        fallback={<div className="text-center py-10 text-gray-500">Loading sections...</div>}
      >
        <WebDevelopmentExcellence />
        <PricingPackages />
        <ServiceProcess />
        <AiApplications />
        <TrackRecord />
        <SuccessStories />
        <ServiceQuoteForm />
        <ResourcesDocs />
        <CTASection />
      </Suspense>

      {/* ✅ Side Menu */}
      <SideMenu
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        title={selectedService?.title || "Service Details"}
      >
        {selectedService ? (
          <p className="text-gray-600 px-4">{selectedService.description}</p>
        ) : (
          <p className="text-gray-400 text-center py-4">
            No service selected.
          </p>
        )}
      </SideMenu>
    </div>
  );
}

export default ServicePage;
