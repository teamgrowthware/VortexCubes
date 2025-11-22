import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Screen/Home/Home";
import Faq from "./Screen/Home/Components/Faq";
import Services from "./Screen/Home/Components/Services";
import Footer from "./Screen/Home/Components/Footer";
import Navbar from "./Screen/Home/Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Actual Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/services" element={<Services />} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/navbar" element={<Navbar/>} />

        {/* 404 Handler */}
        <Route path="*" element={<h1 style={{color:"white"}}>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



