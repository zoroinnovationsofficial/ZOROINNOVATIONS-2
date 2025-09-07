import React, { useState } from "react";

function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  // service data with detailed explanation
  const services = [
    {
      id: 1,
      title: "Web Development",
      img: "/Homeimages/Overlay-3.svg",
      desc: "Custom web applications built with cutting-edge technologies.",
      details:
        "We build scalable, responsive, and high-performance websites using modern frameworks like React, Next.js, and Node.js. Our solutions are tailored to enhance your business presence online.",
    },
    {
      id: 2,
      title: "Software",
      img: "/Homeimages/Overlay-4.svg",
      desc: "Tailored software designed to meet your specific requirements.",
      details:
        "From enterprise applications to small business tools, we design and develop software solutions that streamline workflows and improve efficiency, with a focus on usability and performance.",
    },
    {
      id: 3,
      title: "SaaS Applications",
      img: "/Homeimages/Overlay-5.svg",
      desc: "Scalable SaaS solutions for storage and cloud deployment.",
      details:
        "We create cloud-native SaaS platforms that are secure, scalable, and user-friendly. Our team ensures seamless deployment and integration into your existing ecosystem.",
    },
    {
      id: 4,
      title: "AI Applications",
      img: "/Homeimages/Overlay-6.svg",
      desc: "Intelligent applications powered by AI.",
      details:
        "Leverage Artificial Intelligence and Machine Learning to automate processes, analyze data, and make smarter business decisions. We design AI-driven solutions tailored to your needs.",
    },
    {
      id: 5,
      title: "Managed IT Services",
      img: "/Homeimages/Overlay-7.svg",
      desc: "Comprehensive IT infrastructure management and support.",
      details:
        "Our managed IT services cover monitoring, maintenance, security, and support for your infrastructure, ensuring smooth operations and minimizing downtime.",
    },
    {
      id: 6,
      title: "IT Consultancy",
      img: "/Homeimages/Overlay-8.svg",
      desc: "Strategic IT consulting to align business and technology.",
      details:
        "We provide expert IT consulting to help you align technology with business goals. From digital transformation strategies to IT infrastructure optimization, we guide your success.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 animate-bg-pulse-gray">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 animate-fade-in-up hover:animate-title-hover">
        Our Services
      </h2>
      <p className="text-center text-xl font-normal text-gray-500 mb-12 animate-fade-in-up animation-delay-200">
        Comprehensive technology solutions for your business
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-[1280px] mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-3xl p-10 shadow-lg w-full transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group"
          >
            <img
              src={service.img}
              alt={service.title}
              className="mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <h3 className="text-xl font-bold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
              {service.title}
            </h3>
            <p className="text-[16px] font-normal text-[#4B5563]">
              {service.desc}
            </p>
            <button
              onClick={() => setSelectedService(service)}
              className="mt-4 bg-white hover:text-orange-700 text-orange-500 font-bold py-2 px-4"
            >
              Learn More...
            </button>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] md:w-[600px] relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedService.title}
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              {selectedService.details}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default ServicesSection;
