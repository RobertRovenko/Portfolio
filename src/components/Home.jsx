import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ChevronDown, Code2, Palette, Trophy } from "lucide-react";

const getAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  const dayDiff = today.getDate() - birth.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) age--;
  return age;
};

const cardsData = [
  {
    id: "about",
    number: "01",
    label: "Background",
    title: "About Me",
    paragraphs: [
      `Hello, I'm Robert, a ${getAge(
        "2001-07-11",
      )}-year-old programming enthusiast and experienced developer, recently graduated from Stockholm Institute of Technology. With a passion for technology, I specialize in frontend and full-stack development, thriving on the excitement of crafting innovative digital solutions.`,
      "My journey has been marked by numerous achievements, including founding my own coding studio, Rovenkodev, and receiving two scholarships: Bästa Studieresultat and Bästa Examensarbete. My love for learning drives me to stay at the forefront of this ever-evolving field. Join me as I explore the boundless possibilities of programming and development.",
    ],
    imageUrl: "/images/home/robertstipendriumbild.jpg",
    icon: Trophy,
    highlight: "Double Scholarships",
  },
  {
    id: "developer",
    number: "02",
    label: "Software Engineering",
    title: "Web, Android and iOS Developer",
    paragraphs: [
      "Starting my programming journey at 16, I immersed myself in game and web development during my gymnasium years. With eight years of hands-on programming experience, I've not only honed my technical skills but also developed a business-oriented mindset that sets me apart in the tech industry.",
      "My passion for innovation drives me to create cutting-edge solutions that seamlessly blend technology with user-centric design, and I'm determined to make a lasting impact in the tech world.",
    ],
    imageUrl: "/images/home/codingimage.jpg",
    icon: Code2,
    highlight: "8+ Years Experience",
  },
  {
    id: "designer",
    number: "03",
    label: "Experience Design",
    title: "UX and UI Design",
    paragraphs: [
      "Alongside my strong foundation in frontend development, I've had the opportunity to dive into the world of UX/UI design. This multidisciplinary approach has enabled me to create not only visually appealing interfaces but also engaging user experiences that resonate emotionally.",
      "By combining programming and design, I've expanded my skill set and gained a deep appreciation for how thoughtful design can significantly impact user satisfaction and technology.",
    ],
    imageUrl: "/images/home/designingimage.jpg",
    icon: Palette,
    highlight: "User-Centric Architecture",
  },
];

const summaryParagraphs = [
  `Robert Falkbäck Rovenko (born 2001) is a Swedish software developer, entrepreneur, and former competitive athlete. He is recognized for his expertise in full-stack web development, mobile software engineering, and digital craftsmanship.`,
  `Alongside his engineering career, Robert has competed at high levels in multiple athletic and artistic disciplines, including figure skating, badminton, and ballroom dance. His versatile achievements extend beyond sports and code—he has conducted the Royal Stockholm Philharmonic Orchestra (Kungliga Filharmonikerna), run a UF enterprise, and founded his independent development studio, RovenkoDev.`,
];

const StackCard = ({ card, index, total, progress }) => {
  const Icon = card.icon;
  const targetScale = 1 - (total - index - 1) * 0.04;
  const startRange = index / total;

  const scale = useTransform(progress, [startRange, 1], [1, targetScale]);

  return (
    <div className="sticky top-16 sm:top-24 h-auto lg:h-[78vh] flex items-center justify-center mb-12">
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl h-auto lg:h-full bg-[#001a2b] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden text-white"
      >
        {/* HEADER */}
        <div className="flex-shrink-0 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#00cc8e]" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/80">
              {card.label}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#00cc8e] font-medium">
            <Icon size={18} />
            <span>{card.highlight}</span>
          </div>
        </div>

        {/* MIDDLE CONTENT GRID */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center py-6">
          {/* TEXT SIDE */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight font-oswald">
              {card.title}
            </h2>
            <div className="space-y-4 text-neutral-200 text-sm sm:text-lg lg:text-xl leading-relaxed font-normal">
              {card.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="lg:col-span-5 h-auto lg:h-full w-full min-h-0 flex items-center justify-center">
            <img
              src={card.imageUrl}
              alt={card.title}
              className={`w-full h-auto lg:h-full max-h-none lg:max-h-full object-contain lg:object-cover rounded-2xl sm:rounded-3xl hover:scale-105 transition-transform duration-300 ${
                card.id === "about"
                  ? "object-top lg:object-center"
                  : "object-center"
              }`}
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex-shrink-0 flex items-center justify-between pt-4 border-t border-white/10 text-xs sm:text-sm text-white/50 font-mono uppercase tracking-wider">
          <span>ROVENKODEV</span>
          <span>CHAPTER {card.number} / 03</span>
        </div>
      </motion.div>
    </div>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const summaryRef = useRef(null);
  const [summaryExpanded, setSummaryExpanded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const toggleSummary = () => {
    const nextState = !summaryExpanded;
    setSummaryExpanded(nextState);

    // Scroll into view if expanding
    if (nextState) {
      setTimeout(() => {
        summaryRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  };

  return (
    <div className="bg-[#001220] text-white min-h-screen selection:bg-[#00cc8e] selection:text-[#001220] overflow-x-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap');
        .font-oswald {
          font-family: 'Oswald', sans-serif;
        }
      `}</style>

      {/* HERO SECTION */}
      <header className="relative w-full bg-[#001220] pt-20 sm:pt-24 md:pt-32 lg:pt-16 z-20">
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0 overflow-visible">
          <div className="absolute top-0 bottom-[-160px] left-0 lg:w-[32%] xl:w-[36%] z-0">
            <svg
              className="w-full h-full fill-[#00cc8e]"
              viewBox="0 0 320 800"
              preserveAspectRatio="none"
            >
              <path d="M 0,0 L 240,0 C 310,180 180,380 280,580 C 320,680 250,800 220,800 L 0,800 Z" />
            </svg>
          </div>

          <svg
            className="absolute top-0 right-0 lg:w-[380px] xl:w-[420px] h-auto fill-[#00cc8e]"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
          >
            <path d="M 120,0 C 220,120 280,180 400,160 L 400,0 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[460px] items-center px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 lg:col-span-7 p-4 sm:p-6 lg:p-8 flex flex-col justify-center space-y-6 relative w-full pt-4 sm:pt-6 md:pt-8"
          >
            <div className="space-y-2 sm:space-y-3 w-full">
              <h1 className="font-bold uppercase tracking-tight text-white leading-[1.05] sm:leading-[1.0] font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="mr-2 sm:mr-3">ROBERT</span>
                <span>FALKBÄCK</span>
              </h1>
              <h1 className="font-bold uppercase tracking-tight text-[#00cc8e] leading-[1.05] sm:leading-[1.0] font-oswald pt-1 sm:pt-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                ROVENKO
              </h1>
            </div>

            <div className="pt-2 space-y-2 w-full max-w-full">
              <div className="flex items-center gap-2 sm:gap-3 w-full">
                <span className="text-xl sm:text-3xl lg:text-4xl font-bold uppercase text-white tracking-wide font-oswald whitespace-nowrap">
                  FULLSTACK DEVELOPER
                </span>

                <div className="flex items-center flex-grow min-w-[10px]">
                  <span className="w-2.5 h-2.5 rounded-full bg-white flex-shrink-0" />
                  <div className="h-[2px] bg-white flex-grow" />
                </div>
              </div>

              <div className="flex flex-col items-end text-right pt-1 w-full">
                <p className="text-xl sm:text-3xl font-bold uppercase text-white tracking-wider font-oswald leading-tight">
                  ROVENKODEV
                </p>
                <p className="text-xs sm:text-base text-white/80 font-sans tracking-widest lowercase">
                  robertrovenko.com
                </p>
              </div>
            </div>
          </motion.div>

          <div className="order-2 lg:order-1 lg:col-span-5 p-4 sm:p-6 lg:p-8 flex items-start justify-center relative z-30 flex-nowrap min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-30 flex-shrink-0 -mr-12 xl:-mr-16"
            >
              <img
                src="/images/home/leftheroimage.png"
                alt="Left Hero Feature"
                className="
                  translate-y-20 sm:translate-y-28 lg:translate-y-36 
                  w-[180px] sm:w-[240px] lg:w-[300px] h-auto
                  max-w-none 
                  object-contain 
                  drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]
                "
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden xl:block flex-shrink-0 w-[180px] sm:w-[230px] lg:w-[280px] pt-6 relative z-10"
            >
              <img
                src="/images/home/rightheroimage.png"
                alt="Right Hero Feature"
                className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          </div>
        </div>
      </header>

      {/* MAIN SCROLL AREA */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12 pt-16 sm:pt-28 pb-24 relative z-10">
        <section className="mb-20 pb-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="space-y-1">
              <p className="text-xl sm:text-2xl lg:text-3xl text-white font-medium font-oswald tracking-wide">
                Building slick apps, interfaces &amp; SaaS
              </p>
              <p className="text-base sm:text-lg text-neutral-300">
                iOS, Android &amp; Web Fullstack Developer.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/portfolio"
                className="bg-[#00cc8e] text-[#001220] px-6 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-emerald-400 transition-colors shadow-lg shadow-[#00cc8e]/20"
              >
                View Portfolio
              </a>
              <a
                href="/education"
                className="border border-white/20 text-white px-6 py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wide uppercase hover:border-[#00cc8e] hover:text-[#00cc8e] transition-colors"
              >
                Education
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/RobertRovenko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#00cc8e] hover:text-[#00cc8e] transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/robert-falkb%C3%A4ck/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#00cc8e] hover:text-[#00cc8e] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-3 pt-2 max-w-lg mx-auto">
              <p className="text-xs uppercase font-mono tracking-widest text-[#00cc8e]">
                [ Tech Stack ]
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {[
                  "React",
                  "JavaScript",
                  "TypeScript",
                  "Tailwind",
                  "Swift",
                  "Kotlin",
                  "Java",
                  "React Native",
                  "Firebase",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono border border-white/10 px-3.5 py-2 rounded-full text-[#00cc8e] hover:border-[#00cc8e] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STICKY SCROLL SHOWCASE */}
        <section id="focus-areas" className="relative">
          <div className="mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00cc8e]">
              [ Focus Areas ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-oswald">
              ENGINEERING &amp; BACKGROUND
            </h2>
          </div>

          <div ref={containerRef} className="relative">
            {cardsData.map((card, idx) => (
              <StackCard
                key={card.id}
                card={card}
                index={idx}
                total={cardsData.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </section>

        {/* SUMMARY ACCORDION */}
        <section
          id="summary"
          ref={summaryRef}
          className="border-t border-white/10 pt-16 mt-24 scroll-mt-12"
        >
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#00cc8e] tracking-widest">
                [04]
              </span>
              <span className="h-px w-8 bg-white/20" />
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                Overview
              </span>
            </div>

            <div
              onClick={toggleSummary}
              className="group flex justify-between items-center cursor-pointer py-4 select-none border-b border-white/10 hover:border-[#00cc8e] transition-colors"
              aria-expanded={summaryExpanded}
            >
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-oswald group-hover:text-[#00cc8e] transition-colors">
                SUMMARY &amp; BIO
              </h2>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#00cc8e] transition-colors">
                <ChevronDown
                  size={20}
                  className={`text-white transition-transform duration-500 ease-out ${
                    summaryExpanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>

            <AnimatePresence>
              {summaryExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-8 space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
                    {summaryParagraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
}
