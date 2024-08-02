import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import Cart from './components/Cart';
import books from './mock/books.json'
const App = () => {
  const [filteredBooks, setFilteredBooks] = useState(books);
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
console.log(cart)
  return (
    <Router>
      <div className="app">
      <nav className="navbar">
          <Link to="/" className="nav-link">Book List</Link><br/>
          <Link to="/cart" className="nav-link">Cart ({cart.length})</Link>
        </nav>
        <Routes>
          <Route path="/" element={<BookList books={filteredBooks} onFilter={handleFilter} onAddToCart={handleAddToCart} />} />
          <Route
            path="/book/:id"
            element={<BookDetail books={filteredBooks} onAddToCart={handleAddToCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
