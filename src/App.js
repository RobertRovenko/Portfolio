import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import EducationPage from "./components/Education";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/education" element={<EducationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
