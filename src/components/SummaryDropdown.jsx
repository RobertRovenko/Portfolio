import { useState } from "react";

export default function SummaryDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-black px-4 py-8 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full bg-neutral-900 text-white px-6 py-4 rounded-md flex justify-between items-center font-semibold text-base hover:bg-neutral-800 transition"
          aria-expanded={open}
          aria-controls="summary-content"
        >
          <span>{open ? "Hide Summary" : "Show Summary"}</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Summary Content */}
        {open && (
          <div
            id="summary-content"
            className="mt-1 bg-neutral-900 rounded-md px-6 py-6 text-sm sm:text-base text-white/90"
          >
            <p>
              Robert Falkbäck Rovenko is a multi-disciplinary athlete and dancer
              excelling in Ballroom 10 Dance, figure skating, badminton, and
              marathon running. With extensive experience competing at national
              and international levels, he has proudly represented Sweden in
              prestigious events such as the Swedish Championships and the North
              European Championship.
            </p>
            <p className="mt-3">
              Rovenko earned the esteemed title of Regional Master
              (Regionmester) by securing 1st place in Standard Ballroom Dance at
              the 2017 LSK Dance competition held in Oslo.
            </p>
            <p className="mt-3">
              Throughout his athletic career, Robert Falkbäck Rovenko has
              achieved numerous podium finishes across various sports
              disciplines. Additionally, he has gained invaluable experience by
              competing in high-level tournaments, consistently demonstrating
              strong competitive skills and dedication to his training.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
