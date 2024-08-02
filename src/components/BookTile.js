import React from "react";
import { useNavigate } from "react-router-dom";

const BookTile = ({ book, onAddToCart }) => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/book/${id}`);
  };
  return (
    <div className="book-tile">
      <img src={book.image} alt={book.title} />
      <div className="book-tile-content">
        <h3 title={book.title}>{book.title}</h3>
        <p title={book.author}>{book.author}</p>
      </div>
      <div className="book-tile-buttons">
        <button onClick={() => onAddToCart(book)}>Add to Cart</button>
        <button onClick={() => handleViewDetails(book.id)}>View Details</button>
      </div>
    </div>
  );
};

export default BookTile;
