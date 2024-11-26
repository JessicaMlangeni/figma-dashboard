import React from "react";
import { HiSquares2X2 } from "react-icons/hi2"; // Overview
import { AiOutlineBarChart } from "react-icons/ai"; // Analytics
import { FiShoppingCart } from "react-icons/fi"; // Orders
import { BsBag } from "react-icons/bs"; // Products
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa"; // Customers, Settings, Logout
import "./Sidebar.css";



const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <div className="logo">
          
          <img src="/icon.png" alt="Logo" className="logo-image" />

          <span className="logo-text">Hiphonic</span>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className="sidebar-menu">
        <ul>
          <li className="menu-item active">
            <HiSquares2X2 size={24} className="menu-icon" />
            <span className="text">Overview</span>
          </li>
          <li className="menu-item">
            <AiOutlineBarChart size={24} className="menu-icon" />
            <span className="text">Analytics</span>
          </li>
          <li className="menu-item">
            <FiShoppingCart size={24} className="menu-icon" />
            <span className="text">Orders</span>
            <span className="badge">10</span>
          </li>
          <li className="menu-item">
            <BsBag size={24} className="menu-icon" />
            <span className="text">Products</span>
          </li>
          <li className="menu-item">
            <FaUser size={24} className="menu-icon" />
            <span className="text">Customers</span>
          </li>
        </ul>
      </div>

      {/* Sidebar Footer */}
      <div className="sidebar-footer">
        <ul>
          <li className="menu-item">
            <FaCog size={24} className="menu-icon" />
            <span className="text">Settings</span>
          </li>
          <li className="menu-item">
            <FaSignOutAlt size={24} className="menu-icon" />
            <span className="text">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
