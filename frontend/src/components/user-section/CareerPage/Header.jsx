import React from 'react';
import './Header.css';
import logo from '../../../assets/white_logo.png'; 
import searchIcon from '../../../assets/Icon.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Join Our Employee<br />& Grow Your Career</h1>
        <p>
          Discover exciting opportunities at Zoro Innovation.<br />
          We're seeking talented individuals who are passionate about<br />
          technology and innovation to help shape the future of digital solutions.
        </p>
        <button className="view-btn">
          <img src={searchIcon} alt="Search" className="search-icon" />
          View Open Positions
        </button>
      </div>

      <div className="header-right">
        <img src={logo} alt="Zoro Innovations" className="header-logo" />
      </div>
    </header>
  );
};

export default Header;

