import React, { useState } from "react";
import expertIcon from "../../../assets/Overlay-3.svg";
import quickIcon from "../../../assets/Overlay-4.svg";
import secureIcon from "../../../assets/Overlay-5.svg";
import { sendContactMessage } from "../../../api/contactApi.js";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await sendContactMessage(formData);
      console.log("Message submitted successfully:", result);
      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", city: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting message:", error);
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="contact-content">
          
          {/* Left Section */}
          <div className="contact-left">
            <div className="section-tag">[ Let's Connect ]</div>
            <h2>Ready to Transform Your Digital Future?</h2>
            <p>
              Take the first step toward innovation and growth. Our experts are
              here to understand your unique goals and deliver cutting-edge tech
              solutions tailored to your business.
            </p>

            <div className="features">
              <div className="feature">
                <div className="feature-icon expert-guidance">
                  <img src={expertIcon} alt="Expert Guidance" className="feature-img" />
                </div>
                <div className="feature-content">
                  <h4>Expert Guidance</h4>
                  <p>Professional advice tailored to your goals</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon quick-response">
                  <img src={quickIcon} alt="Quick Response" className="feature-img" />
                </div>
                <div className="feature-content">
                  <h4>Quick Response</h4>
                  <p>Get answers within 24 hours</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon secure">
                  <img src={secureIcon} alt="Secure & Confidential" className="feature-img" />
                </div>
                <div className="feature-content">
                  <h4>Secure & Confidential</h4>
                  <p>Your information is safe with us</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="contact-right">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">Your City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your goals or concerns..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13" stroke="white" strokeWidth="2" />
                      <path
                        d="M22 2L15 22L11 13L2 9L22 2Z"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    Send Message
                  </>
                )}
              </button>

              {status.message && (
                <p
                  style={{
                    color: status.type === "success" ? "green" : "red",
                    marginTop: "10px",
                  }}
                >
                  {status.message}
                </p>
              )}

              <p className="privacy-text">
                By submitting this form, you agree to our{" "}
                <a href="#">Privacy Policy</a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
