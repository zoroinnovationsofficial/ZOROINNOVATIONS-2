import React from 'react';
import './Navbar.css';
import logo from '../../../assets/black_logo1.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Zoro Logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Projects</li>
        <li>Blog</li>
        <li className="active">Careers</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
