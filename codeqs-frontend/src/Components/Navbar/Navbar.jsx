import React, { useState } from 'react';
import './Navbar.css';
import { CiSearch } from "react-icons/ci";
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div>
        <img src={logo} alt="" className='logo-img' />
        </div>
      <div className="search-bar">
        <input type="text" placeholder="Find your next skill to master..." />
        <CiSearch className="search-icon" />
      </div>
      <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
      <div className="mob-search-bar">
<input type="text" placeholder="Find your next skill to master..." />
<CiSearch className="mob-search-icon" />
</div>
        
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact us</a>

        <button className="signup-btn">Sign up</button>
       
      </nav>
  
     
      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (     
          <span className="close-icon">&times;</span> 
        ) : (
          
          <span className="hamburger-icon">&#9776;</span>
        
     
        )}
      </div>
    </header>
  );
};

export default Navbar;