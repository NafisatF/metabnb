import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/header/Navbar";
import HomePage from "./pages/home/HomePage";
import Place from "./pages/place/Place";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/place" element={<Place />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
