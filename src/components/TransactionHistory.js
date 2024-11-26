import React from "react";
import { FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa"; 
import "./TransactionHistory.css";

const transactions = [
  { id: 1, status: "success", date: "Dec 23, 04:00 PM", amount: 421.0 },
  { id: 2, status: "pending", date: "Dec 23, 04:00 PM", amount: 421.0 },
  { id: 3, status: "failed", date: "Dec 23, 04:00 PM", amount: 421.0 },
];

const TransactionHistory = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <FaCheckCircle className="transaction-icon success-icon" />;
      case "pending":
        return <FaClock className="transaction-icon pending-icon" />;
      case "failed":
        return <FaTimesCircle className="transaction-icon failed-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="transaction-history">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={`transaction ${transaction.status}`}
          >
            {getStatusIcon(transaction.status)}
            <div className="transaction-details">
              <p>Payment from #{transaction.id.toString().padStart(4, "0")}</p>
              <small>{transaction.date}</small>
            </div>
            <p className="transaction-amount">
              ${transaction.amount.toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
