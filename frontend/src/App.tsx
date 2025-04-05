import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Homepage/Homepage";
import BackToTop from "./components/BackToTop/BackToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingAnimation from "./components/LoadingReBuyIt/animation";
import SellPage from "./components/SellPage/SellPageHomePage";
import useLoading from "./hooks/useLoading";
import SellCameras from "./components/SellPage/SellPageCategories/Cameras/SellCameras";
import SellCars from "./components/SellPage/SellPageCategories/Cars/SellCars";
import SellScooters from "./components/SellPage/SellPageCategories/Scooters/SellScooters";
import SellMotorcycles from "./components/SellPage/SellPageCategories/Motorcycles/SellMotorcycles";
import SellPhones from "./components/SellPage/SellPageCategories/Phones/SellPhones";
import SellLaptops from "./components/SellPage/SellPageCategories/Laptops/SellLaptops";
import SellHouses from "./components/SellPage/SellPageCategories/Houses/SellHouses";

function App() {
  const isLoading = useLoading();

  if (isLoading) return <LoadingAnimation />;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sell" element={<SellPage />} />
        <Route path="/Sell/Cameras" element={<SellCameras />} />
        <Route path="/Sell/Cars" element={<SellCars />} />
        <Route path="/Sell/Scooters" element={<SellScooters />} />
        <Route path="/Sell/Phones" element={<SellPhones />} />
        <Route path="/Sell/Houses" element={<SellHouses />} />
        <Route path="/Sell/Laptops" element={<SellLaptops />} />
        <Route path="/Sell/Motorcycles" element={<SellMotorcycles />} />
      </Routes>
      <BackToTop />
      <Footer />
    </Router>
  );
}

export default App;
