import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext"; // ✅ Import context

function Card() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useSearch(); // ✅ Get search term from context

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="store-container">
      <div className="products-container">
        {loading ? (
          <p className="loading-text">Loading products...</p>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
              />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">${product.price}</p>
              <Link to={`/product/${product.id}`} className="details-button">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No matching products found.</p>
        )}
      </div>
    </div>
  );
}

export default Card;
