import React from "react";
import "./Product.css";

function Product({ name, price }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Price: ₹{price.toLocaleString()}</p>
    </div>
  );
}

export default Product;

