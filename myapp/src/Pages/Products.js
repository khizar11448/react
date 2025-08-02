// Products.js
import React, { useState } from 'react';
import AddProduct from './AddProduct';
import '../style.css';

function Products() {
  const [products, setProducts] = useState([
    { name: 'Sewing Machine A', price: 10000, image: '' },
    { name: 'Sewing Machine B', price: 15000, image: '' }
  ]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <AddProduct onAdd={addProduct} />

      <div className="product-list">
        {products.map((prod, index) => (
          <div className="product-card" key={index}>
            <h3>{prod.name}</h3>
            <p>Price: Rs {prod.price}</p>
            {prod.image && <img src={prod.image} alt={prod.name} style={{ width: '100px' }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
