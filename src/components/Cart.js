import React from "react";

const Cart = ({ cart, onRemoveFromCart }) => {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Your Cart</h1>
      </div>
      {cart?.length > 0 ? (
        <ul className="cart-items">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h2 className="cart-item-title">{item.title}</h2>
                <p className="cart-item-author">{item.author}</p>
                <p className="cart-item-price">
                  ${Math.floor(Math.random() * (1500 - 500 + 1) + 500)}
                </p>
              </div>
              <div className="cart-item-actions">
                <button
                  className="cart-item-remove"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        "Your Cart Is Empty"
      )}
    </div>
  );
};

export default Cart;
