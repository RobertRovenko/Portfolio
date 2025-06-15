import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-4 py-6 bg-neutral-100 text-neutral-600 text-center text-sm sm:text-base">
      <div className="max-w-xl mx-auto space-y-3">
        <p>
          © {currentYear}{" "}
          <a href="https://www.robertrovenko.com" className="hover:underline">
            www.robertrovenko.com
          </a>
          . Designed and built by Robert Falkbäck Rovenko — founder of
          RovenkoDev Coding Studio.
        </p>
        <p>
          Get my app <span className="font-medium">30 Day Fitness</span> on{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.rovenkodev.FitnessGuru&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google Play
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
