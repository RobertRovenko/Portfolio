import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-50 w-full bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-neutral-600">
        <div className="space-y-2 text-center sm:text-left">
          <p className="font-semibold text-neutral-800">
            Robert Falkbäck Rovenko
          </p>
          <p>Frontend & Fullstack Developer</p>
          <p>© {year} www.robertrovenko.com </p>
        </div>

        <div className="flex justify-center sm:justify-end items-center gap-4 text-neutral-500">
          <Link
            to="/portfolio"
            className="hover:text-neutral-800 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </Link>
          <a
            href="https://github.com/RobertRovenko"
            className="hover:text-neutral-800 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="mailto:rovenkodev@gmail.com"
            className="hover:text-neutral-800 transition"
          >
            Contact
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.rovenkodev.FitnessGuru"
            className="hover:text-neutral-800 transition"
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
