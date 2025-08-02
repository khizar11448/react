// pages/Order.js
import React, { useState } from "react";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed!\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="page order-page">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="product"
          placeholder="Product Name"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="quantity"
          min="1"
          placeholder="Quantity"
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Order;
