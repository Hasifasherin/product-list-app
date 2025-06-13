// src/Cart.js
import React from "react";
import axios from "axios";
import "./App.css";

function Cart({ cartItems, onRemove }) {
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    try {
      const response = await axios.post("http://localhost:5000/checkout", {
        items: cartItems,
        totalItems,
        totalPrice,
      });
      alert("Checkout successful! 🎉 Server Response: " + response.data.message);
    } catch (error) {
      alert("Checkout failed: " + error.message);
    }
  };

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span>
                  {item.name} - ₹{item.price.toLocaleString()}
                </span>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>
                  🗑️ Remove
                </button>
              </li>
            ))}
          </ul>
          <h4>Total Items: {totalItems}</h4>
          <h4>Total Price: ₹{totalPrice.toLocaleString()}</h4>
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
