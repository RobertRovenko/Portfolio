import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation();

  const isAthletePage = location.pathname === "/athlete";

  return (
    <footer
      className={`relative z-50 w-full ${
        isAthletePage
          ? "bg-neutral-900 text-white border-none"
          : "bg-white text-neutral-600 border-t"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div
          className={`space-y-2 text-center sm:text-left ${
            isAthletePage ? "text-white" : "text-neutral-800"
          }`}
        >
          <p className="font-semibold">Robert Falkbäck Rovenko</p>
          <p>Frontend & Fullstack Developer</p>
          <p>© {year} www.robertrovenko.com </p>
        </div>

        <div
          className={`flex justify-center sm:justify-end items-center gap-4 ${
            isAthletePage ? "text-white" : "text-neutral-500"
          }`}
        >
          <Link
            to="/portfolio"
            className="hover:text-neutral-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </Link>
          <a
            href="https://github.com/RobertRovenko"
            className="hover:text-neutral-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.rovenkodev.FitnessGuru"
            className="hover:text-neutral-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            30 Day Fitness
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
