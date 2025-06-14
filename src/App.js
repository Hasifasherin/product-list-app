import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './cart'; // lowercase 'c'
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const index = cart.findIndex(p => p.id === productId);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  };

  const checkout = async () => {
    const groupedItems = cart.reduce((acc, item) => {
      acc[item.id] = acc[item.id] || { ...item, quantity: 0 };
      acc[item.id].quantity += 1;
      return acc;
    }, {});

    const items = Object.values(groupedItems);
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    try {
      const response = await fetch("http://localhost:5000/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, totalItems, totalPrice }),
      });

      const data = await response.json();
      alert(data.message || "Checkout complete!");
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("Checkout failed.");
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>🛍️ My React Shop</h1>
        <div className="cart-actions">
          <button className="cart-button" onClick={() => setShowCart(!showCart)}>
            🛒 Cart ({cart.length})
          </button>
          <button className="checkout-button" onClick={checkout}>
            🧾 Checkout
          </button>
        </div>
      </div>

      <ProductList addToCart={addToCart} />

      {showCart && (
        <div className="cart-section">
          <Cart cartItems={cart} removeFromCart={removeFromCart} />
        </div>
      )}
    </div>
  );
};

export default App;
