import React from 'react';
import './ProductList.css';

const products = [
  { id: 1, name: 'Watch Nike Series 7', brand: 'Apple', stock: 100, sales: 1234, price: 399.0 },
  { id: 2, name: 'iPhone 13 Pro', brand: 'Apple', stock: 2, sales: 500, price: 2999.0 },
  { id: 3, name: 'iPhone 12 Mini', brand: 'Apple', stock: 110, sales: 789, price: 2699.0 },
];

const ProductList = () => {
  return (
    <div className="products-section">
      <div className="header">
        <h3>Products</h3>
        <span>Dec 20 - Dec 31</span>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Stock</th>
            <th>Sales</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><input type="checkbox" /></td>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.stock}</td>
              <td>{product.sales}</td>
              <td>${product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
