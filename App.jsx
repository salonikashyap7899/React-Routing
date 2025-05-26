import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import Header from "./components/Header";
import Card from "./components/Card";
import ProductDetails from "./components/ProductDetails";
import OrderPage from "./components/OrderPage";
import "./App.css";

function App() {
  return (
    <SearchProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;
