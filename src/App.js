// App.js
import React, { useState } from 'react';
import LandingPage from "./pages/LandingPage"; // Ensure correct casing for the filename
import Charts from './components/Charts';
import KpiCards from './components/KpiCards';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import TransactionHistory from './components/TransactionHistory';
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('landing'); // State to track the current page

    const handleArrowClick = () => {
        if (currentPage === 'landing') {
            setCurrentPage('dashboard'); // Change to the second page
        } else {
            setCurrentPage('landing'); // Optionally allow returning to the landing page
        }
    };

    return (
        <div className="App">
            {currentPage === 'landing' ? (
                <LandingPage onArrowClick={handleArrowClick} />
            ) : (
                <div className="App">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <KpiCards />
        
        <div className="charts-container">
          <div className="chart">
            <Charts />
          </div>
        </div>

        <ProductList />
        <TransactionHistory />
      </div>
    </div>
            )}
            {/* Optionally include the arrow for navigation */}
            <div className="arrow" onClick={handleArrowClick} style={{ cursor: 'pointer', textAlign: 'center', marginTop: '20px' }}>
                ➔ {/* Simple arrow character, can replace with SVG or icon */}
            </div>
        </div>
    );
}

export default App;
