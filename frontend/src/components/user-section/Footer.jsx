import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

// Memoized components for better performance
const SocialButton = React.memo(({ src, alt, href = "#" }) => (
  <a
    href={href}
    className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors duration-200 hover:scale-105 transform"
    aria-label={alt}
  >
    <img src={src} alt={alt} className="w-8 h-8" />
  </a>
));
SocialButton.displayName = "SocialButton";

const FooterSection = React.memo(({ title, children, className = "" }) => (
  <div className={className}>
    <h3 className="text-lg font-semibold mb-6 text-white">{title}</h3>
    {children}
  </div>
));
FooterSection.displayName = "FooterSection";

const Footer = React.memo(() => {
  const navigate = useNavigate();

  // Memoized static data
  const socialLinks = useMemo(
    () => [
      {
        src: "/linkedin.svg",
        alt: "LinkedIn",
        href: "https://www.linkedin.com/company/zoroinnovations/",
      },
      { src: "/twitter.svg", alt: "Twitter", href: "https://x.com/zoroinnovations" },
      { src: "/facebook.svg", alt: "Facebook", href: "#" },
    ],
    []
  );

  const serviceLinks = useMemo(
    () => ["Web Development", "Custom Software", "AI Applications", "IT Consulting"],
    []
  );

  const contactInfo = useMemo(
    () => ({
      email: "zoroinnovations@yahoo.com",
      phone: "+919481414295",
      address: {
        line1: "#117 Reddys Colony Street",
        line2:
          "Thondebhavi, Gowribidanuru Taluk, Chikkaballapur District, KA 561213",
      },
    }),
    []
  );

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToTeam = (e) => {
    e.preventDefault();
    navigate("/about#leadership-team");

    setTimeout(() => {
      const section = document.getElementById("leadership-team");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-4" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="/zoro_logo_white.png"
                alt="Zoro Innovations Logo"
                className="h-20 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming businesses through innovative AI solutions and
              cutting-edge technology.
            </p>
            <div className="flex space-x-4" role="list">
              {socialLinks.map((social, index) => (
                <SocialButton key={`${social.alt}-${index}`} {...social} />
              ))}
            </div>
          </div>

          {/* Services */}
          <FooterSection title="Services">
            <ul className="space-y-3 text-gray-400" role="list">
              {serviceLinks.map((service, index) => (
                <li key={`service-${index}`}>{service}</li>
              ))}
            </ul>
          </FooterSection>

          {/* Company */}
          <FooterSection title="Company">
            <ul className="space-y-3 text-gray-400" role="list">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors duration-200 hover:underline"
                  onClick={handleScrollTop}
                >
                  About Us
                </Link>
              </li>
            <li>
              <a
                href="/about#leadership-team"
                className="hover:text-white transition-colors duration-200 hover:underline cursor-pointer"
              >
                Our Team
              </a>
            </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-white transition-colors duration-200 hover:underline"
                  onClick={handleScrollTop}
                >
                  Careers & Certs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors duration-200 hover:underline"
                  onClick={handleScrollTop}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </FooterSection>

          {/* Contact */}
          <FooterSection title="Contact">
            <div className="space-y-3 text-gray-400">
              <p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <address className="not-italic">
                {contactInfo.address.line1}
                <br />
                {contactInfo.address.line2}
              </address>
            </div>
          </FooterSection>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zoro Innovations. All rights reserved.
          </p>
          <nav
            className="flex space-x-6 mt-4 md:mt-0"
            role="navigation"
            aria-label="Legal"
          >
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline"
              onClick={handleScrollTop}
            >
              Privacy Policy
            </Link>
            <Link
              to="/termsPage"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline"
              onClick={handleScrollTop}
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
