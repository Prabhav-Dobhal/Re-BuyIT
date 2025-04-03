import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Homepage/Homepage";
import BackToTop from "./components/BackToTop/BackToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingAnimation from "./components/LoadingReBuyIt/animation";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  if (isLoading) return <LoadingAnimation />;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <BackToTop />
      <Footer />
    </Router>
  );
}

export default App;
