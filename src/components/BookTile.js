import React from 'react';

const BookTile = ({ book, onViewDetails }) => (
  <div className="book-tile">
    <img src={book.image} alt={book.title} />
    <h3>{book.title}</h3>
    <p>{book.author}</p>
    <button onClick={() => onViewDetails(book.id)}>View Details</button>
  </div>
);

export default BookTile;