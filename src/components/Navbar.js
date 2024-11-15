// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="search-bar">
        <input type="text" placeholder="Search anything..." />
        <i className="fa fa-search"></i>
      </div>
      <div className="nav-right">
        <i className="fa fa-bell"></i>
        <img src="https://thumbs.dreamstime.com/b/kj-letter-logo-design-black-background-creative-initials-concept-white-k-j-214939869.jpg" className="Profile-Icon" alt="User Profile" />
      </div>
    </nav>
  );
};

export default Navbar;

