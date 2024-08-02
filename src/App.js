import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import Cart from './components/Cart';

const App = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch books from API or database
    // Example: setBooks(fetchBooks());
    // Here you should set both books and filteredBooks with the fetched data
  }, []);

  const handleFilter = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(keyword)
    );
    setFilteredBooks(filtered);
  };

  const handleAddToCart = (book) => {
    setCart([...cart, book]);
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getBookById = (id) => {
    return books.find((book) => book.id === id);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<BookList books={filteredBooks} onFilter={handleFilter} />} />
          <Route
            path="/book/:id"
            element={<BookDetail getBookById={getBookById} onAddToCart={handleAddToCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
