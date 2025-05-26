import React from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext";


export default function Header() {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <header className="header">
      <div className="logo">ShopEasy</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">Shop</Link>
        <Link to="/order">Order</Link>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </div>
    </header>
  );
}
