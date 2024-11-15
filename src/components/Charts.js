// components/Charts.js
import React from 'react';
import './Charts.css';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = () => {
  const lineData = [
    { month: 'Jan', revenue: 12000 },
    { month: 'Feb', revenue: 15000 },
    { month: 'Mar', revenue: 10000 },
    { month: 'Apr', revenue: 20000 },
    { month: 'May', revenue: 18000 },
    { month: 'Jun', revenue: 22000 },
    { month: 'Jul', revenue: 25000 },
    { month: 'Aug', revenue: 24000 },
    { month: 'Sep', revenue: 26000 },
    { month: 'Oct', revenue: 23000 },
    { month: 'Nov', revenue: 21000 },
    { month: 'Dec', revenue: 29000 },
  ];

  const barData = [
    { day: 'Mon', activity: 1000 },
    { day: 'Tue', activity: 1200 },
    { day: 'Wed', activity: 800 },
    { day: 'Thu', activity: 1500 },
    { day: 'Fri', activity: 1300 },
    { day: 'Sat', activity: 1700 },
    { day: 'Sun', activity: 1100 },
  ];

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <h2 className="chart-title">Revenue Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#4BC0C0" fill="#4BC0C0" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-wrapper">
        <h2 className="chart-title">User Activity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="activity" fill="#9966FF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
