import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // adjust path if needed

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      {/* Navbar stretches full width */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
