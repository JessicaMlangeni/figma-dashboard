import React from "react";
import { FaRegBell, FaChevronDown } from "react-icons/fa"; // Importing Bell and Dropdown icons
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      
      <div className="navbar-left">
        <h2 className="navbar-title">Overview</h2>
        <p className="navbar-subtitle">Detailed information about your store</p>
      </div>
      <div className="navbar-right">
        <input 
          type="text" 
          placeholder="Search..." 
          className="navbar-search" 
        />
        <div className="navbar-notifications">
          <FaRegBell className="notification-icon" />
          <span className="notification-badge">3</span>
        </div>
        <div className="navbar-user">
          <span className="user-icon">👤</span>
          <FaChevronDown className="dropdown-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;






