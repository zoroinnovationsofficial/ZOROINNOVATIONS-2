import React from "react";

import logo from "../../../assets/zoroLogo.png";
import linkedInLogo from "../../../assets/linkedin.svg";
import twitterLogo from "../../../assets/twitter.svg";
import facebookLogo from "../../../assets/facebook.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-white py-10 px-20 md:px-20 relative">
      {/* Background Image if needed */}
      {/* <div className="absolute inset-0 opacity-10 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/path-to-background-image.jpg')" }}></div> */}

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col justify-between md:flex-row md:justify-between gap-10">
        {/* Left Column */}
        <div className="md:w-1/4 space-y-4">
          <img src={logo} alt="Zoro Logo" className="h-10" />
          <p className="text-md text-gray-300">
            Transforming businesses through innovative AI solutions and
            cutting-edge technology.
          </p>
          <div className="flex space-x-2 pt-1">
            <a
              href="#"
            >
                <img src={linkedInLogo} alt="linkedIn" className="w-16 p-2 rounded-xl hover:scale-120 transition" />
            </a>
            <a
              href="#"
            >
                <img src={twitterLogo} alt="linkedIn" className="w-16 p-2 rounded-xl hover:scale-120 transition" />
            </a>
            <a
              href="#"
            >
                <img src={facebookLogo} alt="linkedIn" className="w-16 p-2 rounded-xl hover:scale-120 transition" />
            </a>
          </div>
        </div>

        <div className="md:w-1/4 space-y-4 px-8">
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="text-gray-400 space-y-2 text-md">
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Custom Software</a>
              </li>
              <li>
                <a href="#">AI Applications</a>
              </li>
              <li>
                <a href="#">IT Consulting</a>
              </li>
            </ul>
        </div>

        <div className="md:w-1/4 space-y-4 px-8">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="text-gray-400 space-y-2 text-md">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Careers & Certs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
        </div>

        <div className="md:w-1/4 space-y-4 px-8">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="text-gray-400 space-y-2 text-md">
              <li>contact@company.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Innovation Drive</li>
              <li>Tech City, TC 12345</li>
            </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-700"></div>

      {/* Bottom Footer */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Zoro Innovations. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
