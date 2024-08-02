import React from 'react';
import BookTile from './BookTile';

const BookList = ({ books, onFilter, onViewDetails }) => {
  return (
    <div>
      <input type="text" placeholder="Search books..." onChange={onFilter} />
      <div className="book-list">
        {books.map((book) => (
          <BookTile key={book.id} book={book} onViewDetails={onViewDetails} />
        ))}
      </div>
    </div>
  );
};

export default BookList;