import { useState } from "react";

const resultsData = [
  {
    year: "Badminton",
    entries: [
      { position: 1, text: "U13 Pojkar 12-13 - 2012" },
      { position: 3, text: "U 11:2 - 2012" },
    ],
  },
  {
    year: "Figure Skating",
    entries: [
      { position: 3, text: "EIF Piruetten (Ungdom B Pojk) - 2014" },
      { position: 3, text: "Isprinsesan (Ungdom 13 B Pojk) - 2014" },
    ],
  },
  {
    year: "Marathon",
    entries: [
      { position: 1, text: "Skolgången Våren - 2013" },
      { position: 1, text: "Skolgången Våren - 2012" },
    ],
  },
];

const positionColors = {
  1: "text-yellow-300",
  2: "text-gray-300",
  3: "text-orange-400",
  4: "text-gray-500",
};

const positionLabel = (pos) => `${pos}${["st", "nd", "rd"][pos - 1] || "th"}`;

export default function OtherSportsResults() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-black px-4 py-8 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full bg-neutral-900 text-white px-6 py-4 rounded-md flex justify-between items-center font-semibold text-base hover:bg-neutral-800 transition"
        >
          <span>
            {open ? "Hide Other Sports Results" : "Show Other Sports Results"}
          </span>
          <svg
            className={`w-5 h-5 transform transition-transform ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Results */}
        {open && (
          <div className="mt-1 bg-neutral-900 rounded-md px-6 py-6 text-sm sm:text-base">
            <p className="text-neutral-400 mb-4">
              The following are <strong>only podium placements</strong> (1st to
              4th place) across multiple sports Robert Falkbäck Rovenko has
              competed in, including badminton, figure skating, and
              long-distance running. These represent highlighted achievements
              from a broader and more extensive sports history.
            </p>

            {resultsData.map(({ year, entries }) => (
              <div key={year} className="mb-6">
                <h3 className="text-lg font-bold mb-2 border-b border-neutral-700 pb-1">
                  {year}
                </h3>
                <ul className="space-y-1">
                  {entries.map(({ position, text }, idx) => (
                    <li key={idx} className="flex items-start">
                      <span
                        className={`min-w-[40px] ${
                          positionColors[position] || "text-white"
                        } font-semibold`}
                      >
                        {positionLabel(position)}
                      </span>
                      <span className="ml-2 text-white/90">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
