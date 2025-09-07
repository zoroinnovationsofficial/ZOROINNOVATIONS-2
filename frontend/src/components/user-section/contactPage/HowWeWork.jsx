import React from "react";
import step1 from "../../../assets/Background+Shadow.svg";
import step2 from "../../../assets/Background+Shadow-1.svg";
import step3 from "../../../assets/Background+Shadow-2.svg";

const HowWeWork = () => {
  return (
    <section className="how-we-work">
      <div className="how-we-work-container">
        <div className="how-we-work-header">
          <h2>How we works</h2>
          <p>
            A systematic approach to understanding your needs and delivering
            tailored digital solutions.
          </p>
        </div>
        <div className="process-timeline">
          <div className="timeline-line"></div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">
                <img src={step1} alt="Step 1" className="step-icon" />
              </div>
              <h3>Discovery</h3>
              <p>
                We start by understanding your business model, goals, and
                technical needs through deep consultation and analysis.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">
                <img src={step2} alt="Step 2" className="step-icon" />
              </div>
              <h3>Strategy</h3>
              <p>
                Our Employee crafts a tailored digital roadmap — selecting the
                right technologies, architecture, and development plan aligned
                with your vision.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">
                <img src={step3} alt="Step 3" className="step-icon" />
              </div>
              <h3>Implementation</h3>
              <p>
                We bring the strategy to life with clean code, AI-powered
                systems, scalable infrastructure, and seamless deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
