import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  // Group items by product ID and count quantity
  const groupedItems = cartItems.reduce((acc, item) => {
    acc[item.id] = acc[item.id] || { ...item, quantity: 0 };
    acc[item.id].quantity += 1;
    return acc;
  }, {});

  const cartArray = Object.values(groupedItems);

  const total = cartArray.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>🛒 Cart</h2>
      {cartArray.map((item) => (
        <div key={item.id} className="cart-item">
          {item.name} × {item.quantity} = ₹{item.price * item.quantity}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;
