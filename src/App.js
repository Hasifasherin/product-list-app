// src/App.js
import React, { useState } from "react";
import Product from "./components/Product";
import Cart from "./Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    { id: 1, name: "Gaming Laptop", price: 85000 },
    { id: 2, name: "Smartphone", price: 30000 },
    { id: 3, name: "Bluetooth Headphones", price: 4500 },
    { id: 4, name: "Wireless Mouse", price: 1200 },
    { id: 5, name: "Mechanical Keyboard", price: 3500 },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app-container">
      <h1>🛍️ Product Catalog</h1>
      <div className="cart-header">
        <button className="view-cart-btn" onClick={() => setShowCart(!showCart)}>
          {showCart ? "Back to Shop" : `Go to Cart (${cart.length})`}
        </button>
      </div>
      {showCart ? (
        <Cart cartItems={cart} />
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
