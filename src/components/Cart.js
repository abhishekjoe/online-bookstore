import React from 'react';

const Cart = ({ cart, onRemoveFromCart }) => (
  <div className="cart">
    <h2>Shopping Cart</h2>
    {cart.map((item) => (
      <div key={item.id} className="cart-item">
        <h3>{item.title}</h3>
        <p>{item.author}</p>
        <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
      </div>
    ))}
  </div>
);

export default Cart;
