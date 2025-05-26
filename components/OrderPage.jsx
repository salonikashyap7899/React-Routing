import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";


function OrderPage() {
  const { state } = useLocation();
  const product = state?.product;
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate()

  if (!product) return <p>Product not found. Please go back and try again.</p>;

  const handlePlaceOrder = () => {
    // Simulate order placement
    setOrderPlaced(true);
  };

  const handleBackToHome = () => {
    navigate("/");
  }

  return (
    <>
    <div className="order-page">
      <h1>Confirm Your Order</h1>
      {orderPlaced ? (
        <div className="success-message">
          <h2>🎉 Order Placed Successfully!</h2>
          <p>Thank you for ordering <strong>{product.title}</strong>.</p>
        </div>

      ) : (
        <div className="order-card">
          <img src={product.thumbnail} alt={product.title} />
          <div className="order-details">
            <h2>{product.title}</h2>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ₹{product.price}</p>
            <button className="confirm-btn" onClick={handlePlaceOrder}>Place Order</button>
             <button className="home-btn" onClick={handleBackToHome}> Back To Home</button>
          </div>
        </div>
      )}
    </div>
          
    </>
  );
}

export default OrderPage;
