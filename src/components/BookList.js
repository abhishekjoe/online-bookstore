import React from 'react';
import BookTile from './BookTile';

const BookList = ({ books, onFilter,onAddToCart }) => {
  return (
    <div>
      <input type="text" placeholder="Search books..." onChange={onFilter} />
      <div className="book-list">
        {books.map((book) => (
          <BookTile key={book.id} book={book} onAddToCart={onAddToCart}/>
        ))}
      </div>
    </div>
  );
};

export default BookList;