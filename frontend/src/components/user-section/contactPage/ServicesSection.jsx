import React, { useState } from "react";

import webIcon from "../../../assets/Background.svg";
import softwareIcon from "../../../assets/Background-1.svg";
import saasIcon from "../../../assets/Background-2.svg";
import aiIcon from "../../../assets/Background-3.svg";
import itIcon from "../../../assets/Background-4.svg";
import consultingIcon from "../../../assets/Background-5.svg";

const ServicesSection = () => {
  const services = [
    {
      icon: webIcon,
      title: "Web Development",
      description:
        "Modern, responsive web applications built with cutting-edge technologies.",
      details: `We specialize in creating scalable and secure web applications. 
Our team leverages React, Next.js, and Node.js to deliver high-performance solutions. 
These applications are tailored for businesses of all sizes.`,
    },
    {
      icon: softwareIcon,
      title: "Custom Software",
      description:
        "Tailored software solutions designed for your business needs.",
      details: `We build ERP systems, CRM platforms, and workflow automation tools. 
Every solution is aligned with your unique processes. 
This ensures maximum efficiency and scalability.`,
    },
    {
      icon: saasIcon,
      title: "SaaS Applications",
      description:
        "Scalable SaaS platforms with cloud-based architecture.",
      details: `We design SaaS platforms with subscription billing and user management. 
Cloud-ready deployment ensures seamless scalability. 
Perfect for startups and enterprises alike.`,
    },
    {
      icon: aiIcon,
      title: "AI Applications",
      description:
        "Intelligent applications powered by machine learning & AI.",
      details: `We build AI-powered chatbots and recommendation engines. 
Predictive analytics improves decision-making. 
Automation drives productivity and reduces manual tasks.`,
    },
    {
      icon: itIcon,
      title: "Managed IT Services",
      description:
        "Complete IT infrastructure monitoring & support services.",
      details: `We provide 24/7 IT monitoring and network management. 
Our cloud hosting ensures high availability. 
Security compliance keeps your systems safe.`,
    },
    {
      icon: consultingIcon,
      title: "IT Consultancy",
      description:
        "Strategic consulting to drive digital transformation.",
      details: `We guide businesses through digital transformation. 
Our team provides support for cloud migration and cybersecurity. 
We help you plan and scale enterprise IT architecture.`,
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  const closeModal = () => setSelectedService(null);

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Core Services</h2>
          <p>Explore our comprehensive range of technology solutions</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <img
                  src={service.icon}
                  alt={service.title}
                  width={60}
                  height={60}
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button
                className="service-btn"
                onClick={() => setSelectedService(service)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedService && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
            padding: "1rem",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              maxWidth: "600px",
              width: "100%",
              padding: "1.5rem",
              position: "relative",
              boxShadow: "0px 6px 20px rgba(0,0,0,0.25)",
              lineHeight: "1.6",
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "12px",
                right: "16px",
                background: "none",
                border: "none",
                fontSize: "1.6rem",
                cursor: "pointer",
                color: "#444",
              }}
            >
              ✕
            </button>

            {/* Header with Icon left + Title/Desc right */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <img
                src={selectedService.icon}
                alt={selectedService.title}
                width={65}
                height={65}
              />
              <div>
                <h2 style={{ margin: 0, fontSize: "1.5rem" }}>
                  {selectedService.title}
                </h2>
                <p style={{ color: "#555", fontSize: "0.95rem", margin: 0 }}>
                  {selectedService.description}
                </p>
              </div>
            </div>

            {/* Details */}
            <div style={{ textAlign: "left" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                Details
              </h3>
              <p
                style={{
                  whiteSpace: "pre-line",
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                {selectedService.details}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
