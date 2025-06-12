import React from "react";
import "./App.css";

function Cart({ cartItems }) {
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price.toLocaleString()}
              </li>
            ))}
          </ul>
          <h4>Total Items: {totalItems}</h4>
          <h4>Total Price: ₹{totalPrice.toLocaleString()}</h4>
        </>
      )}
    </div>
  );
}

export default Cart;
