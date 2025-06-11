import React, { useState } from "react";
import Product from "./components/Product";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

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
      <h1>🛒 Product Catalog</h1>
      <h3>🧺 Items in Cart: {cart.length}</h3>
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
    </div>
  );
}

export default App;
