import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = ["Home", "Education", "Portfolio", "Career", "Athlete"];

  const isAthletePage = location.pathname === "/athlete";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);
  if (location.pathname === "/Irma") {
    return null;
  }
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isAthletePage
          ? "bg-transparent border-none shadow-none"
          : "bg-white/30 backdrop-blur-md shadow-sm border-b border-white/20"
      }`}
    >
      <div className="max-full mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-semibold tracking-tight transition cursor-pointer ${
            isAthletePage
              ? "text-white hover:text-gray-300"
              : "text-gray-900 hover:opacity-80"
          }`}
        >
          rovenkodev
        </Link>

        {/* Desktop nav */}
        <nav
          className={`hidden md:flex gap-10 text-base font-medium transition-colors duration-300 ${
            isAthletePage ? "text-white" : "text-gray-800"
          }`}
        >
          {links.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={`relative px-1 py-1 transition-transform transform hover:scale-105 duration-200 group ${
                isAthletePage ? "hover:text-gray-300" : "hover:text-black"
              }`}
            >
              {item}
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${
                  isAthletePage ? "bg-white" : "bg-black"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none transition-colors ${
              isAthletePage ? "text-white" : "text-gray-900"
            }`}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
          className={`fixed inset-0 z-50 h-screen flex flex-col items-center justify-center space-y-0 text-xl font-semibold transition-all duration-300 md:hidden ${
            isAthletePage ? "bg-black/90 text-white" : "bg-white text-gray-900"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className={`absolute top-6 right-6 focus:outline-none ${
              isAthletePage
                ? "text-white hover:text-gray-300"
                : "text-gray-900 hover:text-black"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {links.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={`py-5 px-6 block transition-transform transform hover:scale-105 duration-200 ${
                isAthletePage ? "hover:text-gray-300" : "hover:text-black"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
