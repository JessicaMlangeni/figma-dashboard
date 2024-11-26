// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import KpiCards from './components/KpiCards';
import Charts from './components/Charts';
import ProductList from './components/ProductList';
import TransactionHistory from './components/TransactionHistory';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard">
          <KpiCards />
          <Charts />
          <div className="dashboard-lower">
            <ProductList />
            <TransactionHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


