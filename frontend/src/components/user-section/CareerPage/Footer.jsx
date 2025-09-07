import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import logo from '../../../assets/white_logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <img src={logo} alt="Zoro Logo" className="footer-logo" />
          <p>
            Transforming businesses through innovative AI solutions and cutting-edge technology.
          </p>
          <div className="footer-icons">
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>Custom Software</li>
            <li>AI Applications</li>
            <li>IT Consulting</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Our Employee</li>
            <li>Careers & Certs</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>contact@company.com</p>
          <p>+1 (555) 123-4567</p>
          <p>123 Innovation Drive</p>
          <p>Tech City, TC 12345</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Zoro Innovations. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
