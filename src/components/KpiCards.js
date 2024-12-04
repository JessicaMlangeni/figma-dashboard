import React from "react";
import "./KpiCards.css";
import { FaShoppingCart, FaDollarSign, FaUndoAlt } from "react-icons/fa";

const KpiCards = () => {
  const cards = [
    {
      title: "Monthly Sales",
      value: "$1,234.00",
      icon: <div className="monthly-sales"><FaShoppingCart /></div>,
      bgColor: "#FFFBEB",
      percentage: "+12%",
      isPositive: true,
    },
    {
      title: "Total Revenue",
      value: "$10,566.01",
      icon: <div className="total-revenue-icon"><FaDollarSign /></div>,
      bgColor: "#E5F3FF",
      percentage: "+35%",
      isPositive: true,
    },
    {
      title: "Returns",
      value: "$956.00",
      icon: <div className="returns"><FaUndoAlt /></div>,
      bgColor: "#FDF2F8",
      percentage: "-5%",
      isPositive: false,
    },
    {
      title: "Ad Spend",
      value: "$5,566.01",
      icon: <div className="ad-spent-icon"><FaDollarSign /></div>, // Updated to match Total Revenue icon
      bgColor: "#F0F8FF",
      percentage: "+15%",
      isPositive: true,
    },
  ];

  return (
    <div className="kpi-cards-container">
      {cards.map((card, index) => (
        <div className="kpi-card" key={index}>
          <div
            className="icon-wrapper"
            style={{ backgroundColor: card.bgColor }}
          >
            {card.icon}
          </div>
          <div className="content">
            <h4>{card.title}</h4>
            <div className="value-row">
              <h3>{card.value}</h3>
              <p
                className={
                  card.isPositive ? "percentage positive" : "percentage negative"
                }
              >
                {card.percentage}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KpiCards;






