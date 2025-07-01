import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import StaticParticles from "./StaticParticles.tsx";

// Mobile detection hook
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

// Career sections data
const careerSections = [
  {
    id: "xr-solutions",
    title: "Internship at XR Solutions",
    duration: "November 2023 - April 2024",
    paragraphs: [
      "I started my internship as a Fullstack iOS Developer, where I gained practical experience and contributed to the development of XR software for an iOS Native app.",
      "My primary role was to be the lead iOS developer for the app developed for the startup company. I got to work closely with our UX/UI Team, Backend as well as our product owner and my position meant I got to work with the following:",
      "• Developing the App",
      "• Research for hardware and software",
      "• Documentation",
      "• Proof of concept testing",
      "• Customer testing",
      "• Git and Bitbucket",
      "• Scrum Methodology",
      "Furthermore, I gained skills in team collaboration using Git with Bitbucket, Slack for communication, Jira for our agile planning and sprints, and Figma to understand the design I was coding.",
    ],
    imageUrl: "/images/career/XRSolutionsLogo.png",
  },
  {
    id: "rovenkodev",
    title: "CEO and Founder of RovenkoDev",
    duration: "December 2017 – Present",
    paragraphs: [
      "As a passionate and self-driven developer, I founded RovenkoDev to refine my coding skills and build high-quality digital products. Through this venture, I have developed visually appealing, maintainable, and scalable web and mobile applications for clients and personal projects.",
      "Notable Projects:",
      "• 30 Day Fitness – A highly successful mobile app designed to help users stay consistent with their workout routines. Originally created as my final project in Högskolan, it later became a top-selling app on the Play Store and earned me a scholarship for 'Bästa Examensarbete.'",
      "• E-commerce Websites – Custom-built online stores with seamless user experiences, secure payment integrations, and robust backend functionality.",
      "• SaaS Platforms – Scalable web applications designed to help businesses streamline their operations with intuitive tools and automation.",
      "Freelancing & Consulting:",
      "In addition to building my own products, I have worked as a freelance developer on Fiverr and Upwork, helping businesses and individuals turn their ideas into reality. My freelancing services include:",
      "• Custom Web & Mobile App Development (React Native, React, TypeScript, JavaScript)",
      "• Bug Fixing & Code Optimization",
      "• UI/UX Improvements & Feature Enhancements",
      "• Consultation & Technical Guidance",
      "I am always striving to create high-quality, innovative digital solutions that combine clean, efficient code with a great user experience. My goal is to continue pushing the boundaries of what’s possible in web and mobile development.",
    ],
    imageUrl: "/images/career/Rovenkodev30DayFitness.png",
  },
  {
    id: "mobile-dev",
    title: "App Development – Stockholm Institute of Technology",
    duration: "2022 – 2024",
    paragraphs: [
      "In 2022, I began my studies at the Stockholm Institute of Technology, specializing in Mobile App Development.",
      "Over the course of my education, I’ve built web apps using HTML, CSS, JavaScript, React, Next.js, and TypeScript; developed hybrid mobile apps with React Native and Node.js; and created native apps with Swift (iOS) and Kotlin (Android).",
      "I have a strong foundation in Object-Oriented Programming (OOP) with Java and earned two scholarships: Bästa Studieresultat and Bästa Examensarbete.",
      "My expertise extends to agile methodologies, Git/GitHub, Tailwind, and tools like Visual Studio Code, Android Studio, and Xcode.",
      "Now, as a graduate, I’m developing my own apps at my independent coding studio, Rovenkodev.",
    ],
    imageUrl: "/images/career/MobileAppDeveloper.jpg",
  },
  {
    id: "web-dev",
    title: "Web Development – Nordens Teknikerinstitut Gymnasiet",
    duration: "2017 – 2021",
    paragraphs: [
      "My web development journey began in 2017 at Nordens Teknikerinstitut Gymnasiet, where I built a strong foundation in HTML, CSS, and JavaScript.",
      "Since graduating, my passion for coding has only grown, leading me to create visually appealing, functional websites with modern frameworks like React, Next.js, and Tailwind.",
      "Through continuous learning and hands-on projects, I’ve honed my skills in frontend development, focusing on seamless user experiences and cutting-edge design.",
    ],
    imageUrl: "/images/career/WebDevelopment.jpg",
  },
  {
    id: "game-dev",
    title: "Game Development – Unity, Unreal, RPG Maker",
    duration: "2017 – 2021",
    paragraphs: [
      "From 2017 to 2021, I studied game development, specializing in Unity, Unreal Engine, and RPG Maker. I became proficient in C# scripting for Unity and Unreal Engine Blueprints, allowing me to develop a diverse portfolio of 2D and 3D games.",
      "In addition to programming, I explored graphic design, using Photoshop, Blender, and Maya to create in-game visuals and assets.",
      "This combination of coding and design has given me a well-rounded skill set for building immersive gaming experiences.",
    ],
    imageUrl: "/images/career/GameDevelopment.jpg",
  },
  {
    id: "console-games",
    title: "C# and Java Console Projects",
    duration: "Before 2017",
    paragraphs: [
      "My programming journey had humble beginnings, starting with simple text-based games in the console.",
      "Using C# and Java, I brought interactive stories to life—everything from adventure games and RPGs to Blackjack.",
      "These early projects ignited my passion for coding, laying the foundation for my future as a developer.",
      "As I honed my skills, I ventured into more complex projects, but those first console-based games remain a defining moment in my journey toward becoming a programmer.",
    ],
    imageUrl: "/images/career/ConsoleCoding.png",
  },
];

export default function Career() {
  const refs = useRef(careerSections.map(() => React.createRef()));
  const [visibility, setVisibility] = useState(careerSections.map(() => false));
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll();
  const rotateY = useTransform(scrollYProgress, [0, 1], [-0, 250]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [-0, 20]);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const observers = refs.current.map((ref, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibility((prev) => {
            if (prev[i] === entry.isIntersecting) return prev;
            const cp = [...prev];
            cp[i] = entry.isIntersecting;
            return cp;
          });
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });
    return () => {
      observers.forEach((obs, i) => {
        if (refs.current[i].current) obs.unobserve(refs.current[i].current);
      });
    };
  }, []);

  return (
    <div className="relative bg-white font-sans min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 -z-10">
        <StaticParticles />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-10 pt-40 pb-20">
        {/* Hero title */}
        <section className="text-center mb-16">
          <motion.h1
            className="text-5xl sm:text-6xl font-bold bg-black text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Career Highlights
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            A detailed journey through my professional development.
          </motion.p>
        </section>

        {/* Career Sections */}
        {careerSections.map(
          ({ id, title, duration, paragraphs, imageUrl }, idx) => (
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
                className="max-w-xl space-y-3"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isMobile || visibility[idx]
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-indigo-600">{title}</h2>
                <p className="text-indigo-500 italic">{duration}</p>
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-lg text-gray-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </motion.div>
            </motion.section>
          )
        )}
      </main>
    </div>
  );
}
