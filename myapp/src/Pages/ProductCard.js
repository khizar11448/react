// components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ name, model, price }) => {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Model: {model}</p>
      <p>Price: {price}</p>
      <Link to="/order">
        <button>Place Order</button>
      </Link>
    </div>
  );
};

export default ProductCard;
