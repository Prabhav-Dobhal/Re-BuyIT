import Navbar from "./components/Navbar/Navbar";

import HomePage from "./components/Homepage/Homepage";
import BackToTop from "./components/BackToTop/BackToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer1 from "./components/Footer/footer1/Footer1";
import Footer2 from "./components/Footer/footer2/Footer2";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <BackToTop />
      <Footer2 />
      <Footer1 />
    </Router>
  );
}

export default App;
