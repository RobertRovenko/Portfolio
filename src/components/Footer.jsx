import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation();

  const isAthletePage = location.pathname === "/athlete";
  const isHomePage = location.pathname === "/";

  if (location.pathname === "/irma") {
    return null;
  }

  return (
    <footer
      className={`relative z-50 w-full ${
        isAthletePage
          ? "bg-neutral-900 text-white border-none"
          : isHomePage
            ? "bg-[#00182b] text-white border-t border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            : "bg-white text-neutral-600 border-t"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div
          className={`space-y-2 text-center sm:text-left ${
            isAthletePage || isHomePage ? "text-white" : "text-neutral-800"
          }`}
        >
          <p className="font-semibold">Robert Falkbäck Rovenko</p>
          <p className={isHomePage ? "text-neutral-300" : ""}>
            Frontend &amp; Fullstack Developer
          </p>
          <p className={isHomePage ? "text-neutral-400 text-xs" : ""}>
            © {year} www.robertrovenko.com
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center sm:justify-end items-center gap-4 ${
            isAthletePage || isHomePage ? "text-white" : "text-neutral-500"
          }`}
        >
          <Link
            to="/portfolio"
            className={
              isHomePage
                ? "hover:text-[#00cc8e] transition"
                : "hover:text-neutral-400 transition"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </Link>
          <a
            href="https://github.com/RobertRovenko"
            className={
              isHomePage
                ? "hover:text-[#00cc8e] transition"
                : "hover:text-neutral-400 transition"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://foodlens.robertrovenko.com/"
            className={
              isHomePage
                ? "hover:text-[#00cc8e] transition"
                : "hover:text-neutral-400 transition"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            FoodLens
          </a>
          <a
            href="https://www.30dayfitness.robertrovenko.com/"
            className={
              isHomePage
                ? "hover:text-[#00cc8e] transition"
                : "hover:text-neutral-400 transition"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            30 Day Fitness
          </a>
          <a
            href="https://www.quizzypop.robertrovenko.com/"
            className={
              isHomePage
                ? "hover:text-[#00cc8e] transition"
                : "hover:text-neutral-400 transition"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            QuizzyPop
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
