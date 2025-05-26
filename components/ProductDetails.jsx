import  { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ProductDetails() {
    const {id} = useParams()
    const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleBuyNow = () =>{
    navigate('/order', { state: { product } });
  }

  if (!product) return <p className="loading-text">Loading product details...</p>;

  return (
    <div className="details-container">
        <Link to="/" className='back-button'>Back To Store</Link>
      {/* <Link to="/" className="back-button">← Back to Store</Link> */}
      <div className="details-card">
        <img src={product.thumbnail} alt={product.title} className="details-image" />
        <div className="details-info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <button className="buy-button" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
