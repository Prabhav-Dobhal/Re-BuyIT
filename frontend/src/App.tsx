// import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Homepage/Homepage";
import BackToTop from "./components/BackToTop/BackToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingAnimation from "./components/LoadingReBuyIt/animation";
import useLoading from "./hooks/useLoading"
import MyAds from "./components/myAds/myAds";
import WishList from "./components/WishList/WishList";
import ProductPage from "./components/ProductDetails/ProductPage";

function App() {
  const isLoading = useLoading();

  if (isLoading) return <LoadingAnimation />;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/myads" element={<MyAds />} />
        <Route path="/productDetails" element={<ProductPage />} />
        <Route path="/WishList" element={<WishList />} />
      </Routes>
      <BackToTop />
      <Footer />
    </Router>
  );
}

export default App;
