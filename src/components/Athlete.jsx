import { useState, useEffect } from "react";
import DanceResults from "./DanceResults";
import OtherSportsResults from "./OtherSportsResults";
import SummaryDropdown from "./SummaryDropdown";
export default function Athlete() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffsetY(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-black font-sans text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image with parallax and left anchor */}
        <img
          src="/images/athlete/RobertDance6.jpg"
          alt="Athlete Robert Dance"
          className="absolute inset-0 object-cover object-left w-full h-full"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        />

        {/* Dim Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text Overlay */}
        <div className="relative z-10 flex items-center justify-center h-screen px-4 text-center">
          <h1 className="relative top-[-3rem] text-white text-4xl md:text-6xl font-bold">
            Swedish National Team
          </h1>
        </div>
      </div>

      {/* New Section Under Hero */}
      <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 py-12 gap-12">
        {/* Left Image */}
        <div className="md:w-3/5 flex justify-center md:justify-start">
          <img
            src="/images/athlete/RobertDance1.png"
            alt="Robert Dancing"
            className="w-full max-w-none h-auto rounded-lg shadow-lg  transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-2/5 text-white text-lg leading-relaxed md:ml-12">
          <p>
            Licensed World DanceSport Federation (WDSF) athlete and Swedish
            national team representative in competitive dance.
          </p>
          <p className="mt-4">
            I have competed internationally, including at the North European
            Championships, and have won multiple cups and prizes throughout my
            career.
          </p>
          <p className="mt-4">
            As a professional dancer, I have demonstrated technical precision,
            artistry, and athleticism on the international stage. My journey in
            DanceSport reflects dedication, discipline, and a commitment to
            excellence in movement and performance. I have retired from the
            sport.
          </p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 md:pr-0 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl font-bold mb-6">Athlete</h2>
            <a
              href="https://www.worlddancesport.org/Athletes/Robert-Rovenko-ac18cf0e-bff6-4b7c-ad9c-aadc01592c31#discipline=&tab=general"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
            >
              World DanceSport Athlete Certificate
            </a>
          </div>
          <img
            src="/images/athlete/WDSFCertification.png"
            alt="World DanceSport Athlete Certification"
            className="w-80 md:w-[500px] rounded-md shadow-lg  transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Array.from({ length: 8 }, (_, i) => (
            <img
              key={i}
              src={`/images/athlete/RobertDance${i + 2}.jpg`}
              alt={`Robert Dance ${i + 2}`}
              className="w-full h-auto rounded-lg shadow-lg object-cover  transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
          ))}
        </div>
      </section>
      <DanceResults />
      <OtherSportsResults />
      <div className="max-w-6xl mx-auto px-4 mt-6">
        {/* Full-width Trophy 1 */}
        <div className="mb-6 ">
          <img
            src="/images/athlete/RobertTrophy1.jpg"
            alt="Robert Trophy 1"
            className="w-full h-full object-cover rounded-md shadow-lg  transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* Row of Trophy 2–4 */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {[
            "/images/athlete/RobertTrophy2.jpg",
            "/images/athlete/RobertTrophy3.jpg",
            "/images/athlete/RobertTrophy4.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="w-full md:w-1/3 h-94 rounded-md overflow-hidden shadow-lg bg-neutral-900  transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={src}
                alt={`Robert Trophy ${i + 2}`}
                className="w-full h-full object-contain  transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Row of Medal 1 & 2 */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {[
            "/images/athlete/RobertMedal1.jpg",
            "/images/athlete/RobertMedal2.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="w-full md:w-1/2 h-94 rounded-md overflow-hidden shadow-lg bg-neutral-900"
            >
              <img
                src={src}
                alt={`Robert Medal ${i + 1}`}
                className="w-full h-full object-contain  transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Row of Medal 3 & 4 */}
        <div className="flex flex-col md:flex-row gap-4 pb-10">
          {[
            "/images/athlete/RobertMedal3.jpg",
            "/images/athlete/RobertMedal4.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="w-full md:w-1/2 h-94 rounded-md overflow-hidden shadow-lg bg-neutral-900"
            >
              <img
                src={src}
                alt={`Robert Medal ${i + 3}`}
                className="w-full h-full object-contain  transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      <SummaryDropdown></SummaryDropdown>
    </div>
  );
}
