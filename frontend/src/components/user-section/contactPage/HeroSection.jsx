import React from "react";
import zoroLogo from "../../../assets/zoro_white_tm_logo.png";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="trusted-badge">Trusted by 10,000+ Clients</div>
            <h1 className="hero-title">
              Transform Your
              <br />
              Digital Vision with
              <br />
              Zoro Innovations
            </h1>
            <div className="hero-description">
              <p>
                Expert solutions in web development, AI, SaaS, and IT services —
                crafted to accelerate your growth and digital success.
              </p>
              <p>
                Let us help you build smarter systems, scalable platforms, and
                future-ready innovations.
              </p>
            </div>
            <div className="hero-buttons">
              <button className="btn-schedule">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="6"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="6"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <line
                    x1="3"
                    y1="10"
                    x2="21"
                    y2="10"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
                Schedule Consultation
              </button>
              <button className="btn-watch">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polygon points="10,8 16,12 10,16" fill="currentColor" />
                </svg>
                Watch Overview
              </button>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-logo">
              <img
                src={zoroLogo}
                alt="Zoro Innovations"
                className="hero-logo-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
