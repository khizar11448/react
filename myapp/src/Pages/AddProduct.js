// AddProduct.js
import React, { useState } from 'react';
import '../style.css';

function AddProduct({ onAdd }) {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.price) {
      onAdd(product);
      setProduct({ name: '', price: '', image: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <input
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
      />
      <input
        name="price"
        placeholder="Price"
        type="number"
        value={product.price}
        onChange={handleChange}
      />
      <input
        name="image"
        placeholder="Image URL (optional)"
        value={product.image}
        onChange={handleChange}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
