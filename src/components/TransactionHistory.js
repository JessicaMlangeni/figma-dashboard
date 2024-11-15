// TransactionHistory.js
import React from 'react';
import './TransactionHistory.css';

const transactions = [
  { id: 1, date: '2024-11-01', amount: '$250.00', status: 'Completed' },
  { id: 2, date: '2024-11-02', amount: '$100.00', status: 'Pending' },
  // Add more transactions as needed
];

const TransactionHistory = () => {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
