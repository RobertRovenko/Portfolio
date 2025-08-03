import React from "react";

const flowerSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#f472b6"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#db2777"
    className="w-6 h-6 inline-block mx-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21c4.418 0 8-3.582 8-8 0-1.657-1.343-3-3-3-1.41 0-2.592 1.108-2.916 2.507L12 15l-2.084-2.493C9.592 11.108 8.41 10 7 10c-1.657 0-3 1.343-3 3 0 4.418 3.582 8 8 8z"
    />
  </svg>
);

const Irma = () => {
  return (
    <>
      {/* Font import for Great Vibes */}
      <link
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          fontFamily: "'Great Vibes', cursive",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.04)), url('/videos/flowerrs.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-pink-50 via-pink-100 to-pink-200 p-8 overflow-hidden"
      >
        {/* Decorative flowers around the edges */}
        <div className="pointer-events-none absolute top-4 left-4 animate-pulse">
          {flowerSVG}
        </div>
        <div className="pointer-events-none absolute top-4 right-4 animate-pulse delay-200">
          {flowerSVG}
        </div>
        <div className="pointer-events-none absolute bottom-4 left-4 animate-pulse delay-400">
          {flowerSVG}
        </div>
        <div className="pointer-events-none absolute bottom-4 right-4 animate-pulse delay-600">
          {flowerSVG}
        </div>

        <h1 className="text-6xl text-pink-700 mb-10 drop-shadow-lg select-none flex items-center justify-center">
          {flowerSVG}
          <span className="mx-3">Happy 80th Birthday, Irma!</span>
          {flowerSVG}
        </h1>

        <div className="rounded-3xl p-2 bg-gradient-to-r from-pink-400 via-pink-600 to-pink-400 shadow-2xl border-8 border-pink-300 max-w-xl w-full">
          <video
            src="/videos/irma.mp4"
            controls
            autoPlay
            loop
            className="rounded-2xl shadow-xl border-4 border-pink-700"
          />
        </div>

        <p className="mt-8 max-w-lg text-center text-pink-100 text-5xl drop-shadow-md">
          Wishing you endless joy, love, and beautiful moments on your special
          day.
        </p>

        <p className="mt-10 text-pink-600 font-semibold text-3xl">
          — From Robert Falkbäck Rovenko & Natalia Blonski
        </p>
      </div>
    </>
  );
};

export default Irma;
