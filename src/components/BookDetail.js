import React from "react";
import { useParams } from "react-router-dom";

const BookDetail = ({ books, onAddToCart }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id === id);
  const price = Math.floor(Math.random() * (1500 - 500 + 1) + 500);
  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-detail">
      <img src={book.image} alt={book.title} />
      <div className="book-detail-content">
        <h1>{book.title}</h1>
        <h2 className="author">{book.author}</h2>
        <table>
          <tr>
            <td className="label">Price: </td>
            <td className="value">${price}</td>
          </tr>
          <tr>
            <td className="label">categories: </td>
            <td className="value">{book.categories}</td>
          </tr>
          <tr>
            <td className="label">edition: </td>
            <td className="value"> {book.edition}</td>
          </tr>
          <tr>
            <td className="label">pages: </td>
            <td className="value">{book.pages}</td>
          </tr>
        </table>
        <div className="actions">
          <button onClick={() => onAddToCart(book)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default BookDetail;
