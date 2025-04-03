import Navbar from "./components/Navbar/Navbar";

import HomePage from "./components/Homepage/Homepage";
import BackToTop from "./components/BackToTop/BackToTop";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
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
