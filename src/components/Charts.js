import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import { FaChevronDown } from "react-icons/fa";
import "./Charts.css";

const Charts = () => {
  // Data for Overall Revenue (Line Chart)
  const overallRevenueData = [
    { month: "Jun", revenue: 20000 },
    { month: "Jul", revenue: 25000 },
    { month: "Aug", revenue: 15000 },
    { month: "Sep", revenue: 35000 }, 
    { month: "Oct", revenue: 20000 },
    { month: "Nov", revenue: 30000 },
    { month: "Dec", revenue: 20000 },
  ];

  // Data for User Activity (Bar Chart)
  const userActivityData = [
    { day: "S", activity: 0 },
    { day: "M", activity: 3000 },
    { day: "T", activity: 12000 },
    { day: "W", activity: 15000 }, 
    { day: "T", activity: 9000 },
    { day: "F", activity: 13000 },
    { day: "S", activity: 7000 },
  ];

  return (
    <div className="charts-container">
      {/* Overall Revenue (Line Chart) */}
      <div className="chart-card">
        <div className="chart-header">
          <h3>Overall Revenue</h3>
          <div className="chart-period">
            <span>This Year</span>
            <FaChevronDown className="dropdown-icon" />
          </div>
        </div>
        <div className="chart-details">
          <span className="chart-amount">$48,574.21</span>
          <span className="chart-percentage" style={{ color: "green" }}>
            +20%
          </span>
        </div>
        <LineChart
          width={600}
          height={300}
          data={overallRevenueData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid horizontal={true} vertical={false} stroke="#F1F5F9" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#6B7280" }}
            padding={{ left: 50, right: 50 }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#6B7280" }}
            tickFormatter={(value) => `${value / 1000}k`}
            domain={[15000, 40000]}
            ticks={[10000, 20000, 30000, 40000, 50000]}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563EB"
            strokeWidth={2}
            dot={(props) => {
              const { cx, cy, payload } = props;
              if (payload.month === "Sep" && payload.revenue === 35000) {
                return <circle cx={cx} cy={cy} r={5} fill="#2563EB" />;
              }
              return null;
            }}
          />
        </LineChart>
      </div>

      {/* User Activity (Bar Chart) */}
      <div className="chart-card">
        <div className="chart-header">
          <h3>User Activity</h3>
          <div className="chart-period">
            <span>This Week</span>
            <FaChevronDown className="dropdown-icon" />
          </div>
        </div>
        <div className="chart-details">
          <span className="chart-amount">$10,320</span>
          <span className="chart-percentage" style={{ color: "red" }}>
            -20%
          </span>
        </div>
        <div className="chart-container">
          <BarChart
            width={400}
            height={250}
            data={userActivityData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid horizontal={true} vertical={false} stroke="#F1F5F9" />
            <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#6B7280" }} />
            <YAxis
              tick={{ fontSize: 12, fill: "#6B7280" }}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip />
            <Bar
  dataKey="activity"
  barSize={20}
  fill="#DBEAFE" // Default color for all bars
  radius={[6, 6, 0, 0]} // Top corners rounded
  shape={(props) => {
    const { x, y, width, height, payload } = props;

    // Check if the bar corresponds to Wednesday
    const barColor = payload.day === "W" ? "#2563EB" : "#DBEAFE";

    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={barColor}
        rx={6} // Apply corner rounding
        ry={6} // Apply corner rounding
      />
    );
  }}
/>

          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Charts;
