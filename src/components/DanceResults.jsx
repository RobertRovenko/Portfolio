import { useState } from "react";

const resultsData = [
  {
    year: 2019,
    entries: [
      { position: 1, text: "Standard - Stars of Tomorrow" },
      { position: 1, text: "DSF - JSM" },
      { position: 1, text: "Standard - Stars of Tomorrow" },
    ],
  },
  {
    year: 2018,
    entries: [
      { position: 1, text: "Standard - Alemana Cup" },
      { position: 3, text: "Standard - Elite Dance Trophy" },
      { position: 1, text: "Latin - Quick and Quick Autumn Trophy" },
      { position: 2, text: "Standard - Quick and Quick Autumn Trophy" },
      { position: 1, text: "Standard - Quick and Quick Autumn Trophy" },
      { position: 2, text: "Latin - Quick and Quick Trophy" },
      { position: 2, text: "Standard - Quick and Quick Trophy" },
      { position: 3, text: "Latin - Quick and Quick Trophy" },
      { position: 2, text: "DSF SM" },
      { position: 1, text: "DSF - JSM" },
    ],
  },
  {
    year: 2017,
    entries: [
      { position: 1, text: "Standard - Elite Dance Spring Trophy" },
      { position: 1, text: "Latin - Stockholm Dance Cup" },
      { position: 1, text: "Standard - Quick and Quick Trophy" },
      { position: 3, text: "Latin - Elite Dance Autumn" },
      { position: 1, text: 'Standard "REGIONMESTER" LSKDance' },
      { position: 2, text: "Latin LSKDance" },
    ],
  },
  {
    year: 2016,
    entries: [
      { position: 1, text: "Latin - Quick And Quick Trophy" },
      { position: 1, text: "Latin - Quick and Quick Trophy" },
      { position: 1, text: "Standard - HBG Trophy" },
    ],
  },
  {
    year: 2015,
    entries: [
      { position: 2, text: "Standard - Elite Dance Awesome Trophy" },
      { position: 2, text: "Standard - Elite Dance Awesome Trophy" },
      { position: 3, text: "Standard - Elite Dance Awesome Trophy" },
      { position: 3, text: "Elite Dance Spring Trophy" },
      { position: 2, text: "Latin - Elite Dance Spring Trophy Latin" },
      { position: 4, text: "Standard - Elite Dance Spring Trophy" },
      { position: 2, text: "Quick and Quick Autumn Trophy" },
      { position: 3, text: "Latin - Quick and Quick Autumn Trophy" },
      { position: 2, text: "Standard - Quick and Quick Autumn Trophy" },
      { position: 2, text: "Latin - Alemana Dance Cup" },
      { position: 2, text: "Latin - Magic Cup" },
      { position: 2, text: "Standard - Magic Cup" },
    ],
  },
  {
    year: 2014,
    entries: [
      { position: 3, text: "Latin - Alemana Cup" },
      { position: 2, text: "Standard - Magic Cup" },
      { position: 2, text: "Latin - Magic Cup" },
    ],
  },
  {
    year: 2013,
    entries: [
      { position: 2, text: "Latin - Quick and Quick Autumn Trophy" },
      { position: 2, text: "Standard - Quick and Quick Autumn Trophy" },
      { position: 3, text: "Latin - SM" },
    ],
  },
  {
    year: 2012,
    entries: [
      { position: 2, text: "Latin - SM" },
      { position: 3, text: "Latin - Alemana Cup" },
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

export default function DanceResults() {
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
            {open ? "Hide DanceSport Results" : "Show DanceSport Results"}
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
              The results below showcase <strong>only podium finishes</strong>{" "}
              (1st to 4th place) in competitive Ballroom DanceSport events.
              While this highlights major achievements, it represents just a
              portion of a much broader competition history — including numerous
              national and international appearances beyond the podium.
            </p>

            {resultsData.map(({ year, entries }) => (
              <div key={year} className="mb-6">
                <h3 className="text-lg font-bold mb-2 border-b border-neutral-700 pb-1">
                  {year}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-y-1 gap-x-6">
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
