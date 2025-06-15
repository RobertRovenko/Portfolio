import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "Education", "Portfolio", "Career", "Athlete"];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-tight text-gray-900 hover:opacity-80 transition cursor-pointer">
          rovenko
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10 text-base font-medium text-gray-800">
          {links.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="relative px-1 py-1 hover:text-black transition-transform transform hover:scale-105 duration-200 group"
            >
              {item}
              <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 bg-black transition-transform origin-left duration-300" />
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none"
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
          className="fixed inset-0 z-50 bg-white h-screen flex flex-col items-center justify-center space-y-0 text-xl font-semibold text-gray-900 transition-all duration-300 md:hidden"
        >
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 text-gray-900 hover:text-black focus:outline-none"
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
              className="hover:text-black transition-transform transform hover:scale-105 duration-200 py-5 px-6 block"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
