import React from "react";
import "./Product.css";

function Product({ name, price, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Price: ₹{price.toLocaleString()}</p>
      <button className="add-btn" onClick={() => onAddToCart({ name, price })}>
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default Product;
