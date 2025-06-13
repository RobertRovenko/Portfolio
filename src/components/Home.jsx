import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, GraduationCap, ChevronDown } from "lucide-react";

// Custom hook to detect mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return isMobile;
};
const techStack = [
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
];
const sections = [
  {
    id: "about",
    title: "About Me",
    paragraphs: [
      "Hello, I’m Robert, a 23-year-old programming enthusiast and experienced developer, recently graduated from Stockholm Institute of Technology. With a passion for technology, I specialize in frontend and full-stack development, thriving on the excitement of crafting innovative digital solutions.",
      "My journey has been marked by numerous achievements, including founding my own coding studio, Rovenkodev, and receiving two scholarships: Bästa Studieresultat and Bästa Examensarbete. My love for learning drives me to stay at the forefront of this ever-evolving field. Join me as I explore the boundless possibilities of programming and development.",
    ],
    imageUrl: "/images/robertstipendriumbild.jpg",
  },
  {
    id: "developer",
    title: "Web, Android and iOS Developer",
    paragraphs: [
      "Starting my programming journey at 16, I immersed myself in game and web development during my gymnasium years. With six years of hands-on programming experience, I’ve not only honed my technical skills but also developed a business-oriented mindset that sets me apart in the tech industry.",
      "My passion for innovation drives me to create cutting-edge solutions that seamlessly blend technology with user-centric design, and I’m determined to make a lasting impact in the tech world.",
    ],
    imageUrl: "/images/codingimage.jpg",
  },
  {
    id: "designer",
    title: "UX and UI Designer",
    paragraphs: [
      "Alongside my strong foundation in frontend development, I’ve had the opportunity to dive into the world of UX/UI design. This multidisciplinary approach has enabled me to create not only visually appealing interfaces but also engaging user experiences that resonate emotionally.",
      "By combining programming and design, I’ve expanded my skill set and gained a deep appreciation for how thoughtful design can significantly impact user satisfaction and technology.",
    ],
    imageUrl: "/images/designingimage.jpg",
  },
  {
    id: "summary",
    title: "Summary",
    paragraphs: [
      "Robert Falkbäck Rovenko (born 2001) is a Swedish software developer, entrepreneur, and former competitive athlete. He is recognized for his expertise in web development, software engineering, and entrepreneurship. A passionate innovator, Robert loves to explore new challenges—both in technology and beyond.",
      "Alongside his professional career, Robert has excelled in multiple sports and dance disciplines, including figure skating, badminton, and ballroom dance, where he has won numerous prestigious awards. His versatile skill set extends beyond tech and sports—he has also conducted the Kungliga Filharmonikerna, started his own UF company, and founded his freelance coding studio, RovenkoDev.",
    ],
  },
];

export default function Home() {
  const refs = useRef(sections.map(() => React.createRef()));
  const [visibility, setVisibility] = useState(sections.map(() => false));
  const isMobile = useIsMobile();
  const [summaryExpanded, setSummaryExpanded] = useState(false);

  // Use scroll progress of the whole page
  const { scrollYProgress } = useScroll();
  // Rotate Y from -30deg to 30deg as you scroll from top to bottom
  const rotateY = useTransform(scrollYProgress, [0, 1], [-0, 250]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [-0, 20]);

  useEffect(() => {
    if (window.innerWidth < 768) return; // Skip on mobile if needed

    const updateVisibility = () => {
      refs.current.forEach((ref, i) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        // Check if section is at least 20% visible in viewport (simple heuristic)
        const isVisible =
          rect.top < window.innerHeight * 0.8 &&
          rect.bottom > window.innerHeight * 0.2;
        setVisibility((prev) => {
          if (prev[i] === isVisible) return prev;
          const copy = [...prev];
          copy[i] = isVisible;
          return copy;
        });
      });
    };

    // Create IntersectionObservers for scroll detection (optional, you can keep or remove)
    const observers = refs.current.map((ref, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibility((prev) => {
            if (prev[i] === entry.isIntersecting) return prev;
            const copy = [...prev];
            copy[i] = entry.isIntersecting;
            return copy;
          });
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    // Run updateVisibility on resize to update states immediately
    window.addEventListener("resize", updateVisibility);
    // Also run it immediately on mount
    updateVisibility();

    return () => {
      observers.forEach((observer, i) => {
        if (refs.current[i].current)
          observer.unobserve(refs.current[i].current);
      });
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <div className="relative font-sans text-gray-900">
      <img
        src="/images/joel-filipe-VuwAfoHpxgs-unsplash.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <main className="max-w-6xl mx-auto px-12 pt-60 md:pt-1 font-sans text-gray-900 relative z-10">
        <section className="w-full h-screen flex flex-col md:flex-row items-center justify-center text-left bg-cover bg-center bg-no-repeat">
          {/* Left side — Text */}
          <motion.div
            className="relative z-10 flex-1 space-y-6 text-center md:text-left"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl font-bold tracking-tight bg-black text-transparent bg-clip-text"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
            >
              Robert Falkbäck Rovenko
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-gray-700"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
            >
              Building slick apps, interfaces & SaaS
              <br /> iOS, Android & Web Fullstack Developer.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition"
              >
                <ArrowRight size={16} /> View Portfolio
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-indigo-600 hover:text-white transition"
              >
                <GraduationCap size={16} /> Education
              </motion.a>
            </motion.div>

            <section className="mt-16 w-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">
                Tech Stack
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Right side — Rotating Phone */}
          <motion.div
            style={{
              rotateY,
              rotateX,
              rotate: "-20deg",
            }}
            className="hidden md:block flex-1 mt-10 md:mt-0 md:ml-12 w-[300px] md:w-[400px] pointer-events-none"
          >
            <img
              src="/images/30dfe.png"
              alt="App Preview"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </section>

        {sections.map(({ id, title, paragraphs, imageUrl }, idx) => {
          if (id === "summary") {
            return (
              <motion.section
                key={id}
                id={id}
                ref={refs.current[idx]}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isMobile || visibility[idx]
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: idx * 0.1,
                }}
                className="flex flex-col md:flex-row items-center gap-12 mb-24"
              >
                <motion.div
                  className="max-w-xl space-y-5 w-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isMobile || visibility[idx]
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 40 }
                  }
                  transition={{ delay: 0.2 }}
                >
                  <div
                    onClick={() => setSummaryExpanded(!summaryExpanded)}
                    className="flex justify-between items-center cursor-pointer select-none"
                    aria-expanded={summaryExpanded}
                  >
                    <h2 className="text-3xl font-bold text-indigo-600">
                      {title}
                    </h2>
                    <ChevronDown
                      size={24}
                      className={`transition-transform duration-300 ${
                        summaryExpanded ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>

                  {summaryExpanded &&
                    paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-lg text-gray-700 leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                </motion.div>
              </motion.section>
            );
          }

          // Render other sections normally
          return (
            <motion.section
              key={id}
              id={id}
              ref={refs.current[idx]}
              initial={{ opacity: 0, y: 40 }}
              animate={
                isMobile || visibility[idx]
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.1 }}
              className={`flex flex-col md:flex-row ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center gap-12 mb-24`}
            >
              {imageUrl && (
                <motion.div
                  className="w-full max-w-md overflow-hidden rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              )}

              <motion.div
                className="max-w-xl space-y-5"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isMobile || visibility[idx]
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-indigo-600">{title}</h2>
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-lg text-gray-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </motion.div>
            </motion.section>
          );
        })}
      </main>
    </div>
  );
}
