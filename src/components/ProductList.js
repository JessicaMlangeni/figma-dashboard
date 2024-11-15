// ProductList.js
import React from 'react';
import './ProductList.css';

const products = [
  { name: 'Galaxy Watch 4', brand: 'Samsung', stock: 80, sales: 250, price: '$249.00' },
  { name: 'Dell XPS 13', brand: 'Dell', stock: 30, sales: 90, price: '$999.00' },
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <h3>{product.name}</h3>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <p><strong>Sales:</strong> {product.sales}</p>
          <p><strong>Price:</strong> {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
