import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = ({ getBookById, onAddToCart }) => {
  const { id } = useParams();
  const book = getBookById(id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-detail">
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <button onClick={() => onAddToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default BookDetail;
