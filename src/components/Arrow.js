// src/components/Arrow.js
import React from 'react';
import './Arrow.css';

const Arrow = ({ onClick }) => {
    return (
        <div className="arrow" onClick={onClick}>
            ➔ 
        </div>
    );
};

export default Arrow;
