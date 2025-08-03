import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import EducationPage from "./components/Education";
import PortfolioPage from "./components/Portfolio";
import { Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // import it
import Career from "./components/Career";
import Athlete from "./components/Athlete";
import Irma from "./components/Irma";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* this handles scrolling on every route change */}
      <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/athlete" element={<Athlete />} />
          <Route path="/irma" element={<Irma />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
