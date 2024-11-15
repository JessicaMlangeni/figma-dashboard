// KpiCards.js
import React from 'react';
import './KpiCards.css';

const KpiCards = () => {
  const kpis = [
    { title: 'Monthly Sales', value: '$1,234.00', trend: 'up', change: '+12%' },
    { title: 'Total Revenue', value: '$25,678.00', trend: 'down', change: '-5%' },
    { title: 'Returns', value: '$789.00', trend: 'up', change: '+2%' },
    { title: 'Ad Spend', value: '$567.00', trend: 'down', change: '-3%' },
  ];

  return (
    <div className="kpi-container">
      {kpis.map((kpi, index) => (
        <div key={index} className="kpi-card">
          <div className="kpi-title">{kpi.title}</div>
          <div className="kpi-value">{kpi.value}</div>
          <div className={`kpi-trend ${kpi.trend}`}>{kpi.change}</div>
        </div>
      ))}
    </div>
  );
};

export default KpiCards;

