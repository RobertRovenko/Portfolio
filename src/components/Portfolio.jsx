import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // or loadFull from "tsparticles" for the full version

const projects = [
  {
    id: "30dayfitness",
    title: "30 Day Fitness",
    type: "programmed",
    description:
      "30 Day Fitness is a mobile application designed to help users achieve their fitness goals through structured 30-day workout challenges. Originally developed as my final project and thesis at university, the app has since grown into a successful product on the Google Play Store.",
    imageUrls: [
      "/images/portfolio/thumbnails/30DayFitnessThumbnail.jpg",
      "/images/portfolio/group.png",
    ],
    backgroundColor: "#1D1A2F", // soft indigo tint, for example
    foregroundColor: "#e0e7ff", // darker indigo for text

    techStack: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Expo",
      "Google Play",
      "Chart.js",
      "Node.js",
    ],
    features: [
      "Different structured 30-day workout challenges",
      "Interactive charts to track progress",
      "Cross-platform hybrid mobile app with Expo",
      "Intuitive and sleek UI/UX",
      "Published on Google Play Store",
      "Post-launch updates and active user base",
    ],
  },
  {
    id: "githubinsights",
    title: "GitHub Insights",
    type: "programmed",
    description:
      "Web app to visualize GitHub repo data. Offers metrics like commits, contributors, and tech stack using secure token access.",
    imageUrls: ["/images/portfolio/thumbnails/GithubInsightsThumbnail.jpg"],
    techStack: ["React", "Chart.js", "Node.js"],
    features: [
      "OAuth authentication",
      "Interactive charts",
      "Export reports as PDF",
    ],
  },
  {
    id: "jobboardsweden",
    title: "Job Board Sweden",
    type: "programmed",
    description:
      "Job board for software developers in Stockholm. Aggregates listings and offers filters to streamline the search.",
    imageUrls: ["/images/portfolio/thumbnails/JobBoardSwedenThumbnail.jpg"],
    techStack: ["React", "Chart.js", "Node.js"],
    features: [
      "OAuth authentication",
      "Interactive charts",
      "Export reports as PDF",
    ],
  },
  {
    id: "offstage",
    title: "Offstage",
    type: "programmed",
    description:
      "Subscription-based social platform for creators to monetize and share exclusive content with fans.",
    imageUrls: ["/images/portfolio/thumbnails/OffstageThumbnail.jpg"],
    techStack: ["React", "Chart.js", "Node.js"],
    features: [
      "OAuth authentication",
      "Interactive charts",
      "Export reports as PDF",
    ],
  },
  {
    id: "qrcodegenerator",
    title: "QR Code Generator",
    type: "programmed",
    description:
      "SaaS tool to create custom QR codes with styling, logos, and themes. Built with React and deployed on Vercel.",
    imageUrls: ["/images/portfolio/thumbnails/QrCodeGeneratorThumbnails.jpg"],
    techStack: ["React", "Chart.js", "Node.js"],
    features: [
      "OAuth authentication",
      "Interactive charts",
      "Export reports as PDF",
    ],
  },
  {
    id: "fragranceshop",
    title: "E-Commerce Fragrance Shop",
    type: "designed",
    description:
      "Online store concept for fragrances with modern UI and secure payment integration.",
    imageUrls: ["/images/portfolio/thumbnails/rovenkofragranceshopmen.png"],
    techStack: ["React", "Chart.js", "Node.js"],
    features: [
      "OAuth authentication",
      "Interactive charts",
      "Export reports as PDF",
    ],
  },
  {
    id: "movietheater",
    title: "Movie Theater App",
    type: "designed",
    description:
      "Mobile app to browse movie listings and purchase tickets directly from your phone.",
    imageUrls: ["/images/portfolio/thumbnails/TicketPurchaseThumbnail.jpg"],
    techStack: ["React", "Chart.js", "Node.js"],
    features: [
      "OAuth authentication",
      "Interactive charts",
      "Export reports as PDF",
    ],
  },
  {
    id: "tacoplatedate",
    title: "Taco-Plate-Date",
    type: "designed",
    description:
      "Food delivery app concept for quick taco orders. Fully designed and prototyped by me.",
    imageUrls: ["/images/portfolio/thumbnails/TacoPlateDateThumbnail.jpg"],
    techStack: ["React", "Chart.js", "Node.js"],
    features: [
      "OAuth authentication",
      "Interactive charts",
      "Export reports as PDF",
    ],
  },
  {
    id: "forsakringskassan",
    title: "Försäkringskassan Redesign",
    type: "designed",
    description: "Modern Figma redesign of the Försäkringskassan landing page.",
    imageUrls: ["/images/portfolio/thumbnails/ForsakringskassanThumbnail.jpg"],
    techStack: ["React", "Chart.js", "Node.js"],
    features: [
      "OAuth authentication",
      "Interactive charts",
      "Export reports as PDF",
    ],
  },
  {
    id: "galleryapp",
    title: "Gallery App",
    type: "designed",
    description:
      "A minimalist gallery app UI made in Figma for browsing and viewing images.",
    imageUrls: ["/images/portfolio/thumbnails/GalleryAppThumbnail.jpg"],
    techStack: ["React", "Chart.js", "Node.js"],
    features: [
      "OAuth authentication",
      "Interactive charts",
      "Export reports as PDF",
    ],
  },
  {
    id: "freelancewebsite",
    title: "RovenkoDev Freelance Site",
    type: "designed",
    description:
      "Personal freelance site concept for showcasing my development and design work.",
    imageUrls: ["/images/portfolio/thumbnails/FreelanceThumbnail.jpg"],
    techStack: ["React", "Chart.js", "Node.js"],
    features: [
      "OAuth authentication",
      "Interactive charts",
      "Export reports as PDF",
    ],
  },
];

export default function Portfolio() {
  const refs = useRef(projects.map(() => React.createRef()));

  const [visibility, setVisibility] = useState(projects.map(() => false));
  const isMobile = window.innerWidth < 768;
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // or loadFull(engine)
  }, []);

  const [expandedCard, setExpandedCard] = useState(null); // ✅ valid JS

  // Hero scroll rotation
  const { scrollYProgress } = useScroll();
  const rotateY = useTransform(scrollYProgress, [0, 1], [-0, 250]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [-0, 20]);
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  useEffect(() => {
    if (isMobile) return;

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
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((observer, i) => {
        if (refs.current[i].current)
          observer.unobserve(refs.current[i].current);
      });
    };
  }, [isMobile]);
  const expandRefs = useRef([]);
  useEffect(() => {
    expandRefs.current = filteredProjects.map(
      (_, i) => expandRefs.current[i] || React.createRef()
    );
  }, [filteredProjects]);

  return (
    <div className="relative bg-white font-sans text-gray-900 min-h-screen ">
      <Particles
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 15,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#5a5a5a",
            },
            shape: {
              type: "polygon",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 4,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 180,
              color: "#5a5a5a",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false, // DISABLED for better performance
                mode: "repulse",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
          },
          retina_detect: false,
        }}
      />
      <main className="max-w-7xl mx-auto px-12 pt-40 md:pt-20 md:pb-20 pb-10 relative z-10">
        {/* Hero Section */}
        <section className="w-full flex flex-col md:flex-row items-center justify-center h-auto md:h-[500px] gap-8 md:gap-0 mb-16 md:mb-0">
          {/* Left side — Text */}
          <motion.div
            className="relative z-10 flex-1 space-y-6 text-center bg-white md:text-left"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl font-bold tracking-tight"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
            >
              Portfolio & Projects
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-gray-700"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
            >
              iOS, Android & Web Projects. <br />
              Find more projects on my github!
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <motion.a
                href="https://github.com/RobertRovenko"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition"
              >
                <Github size={16} /> View Github
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full text-sm font-semibold bg-white flex items-center justify-center gap-2 hover:bg-indigo-600 hover:text-white transition"
              >
                <ArrowRight size={16} /> Projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side — Rotating Phone */}
          <motion.div
            style={{
              rotateY: 180,
              rotateX,
            }}
            className="mt-10 md:mt-0 md:ml-12 pointer-events-none"
          >
            <img
              src="/images/portfolio/portfolioillustration.png"
              alt="App Preview"
              className="w-[250px] h-auto object-contain"
            />
          </motion.div>
        </section>

        {/* Portfolio Projects Section */}
        <section id="portfolio" className="mt-0 mb-16 z-10">
          <h2 className="text-4xl font-bold text-indigo-600 mb-10 text-center">
            Portfolio
          </h2>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-12">
            {["all", "programmed", "designed"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                  filter === cat
                    ? "bg-indigo-600 text-white shadow"
                    : "text-indigo-600 bg-white border-indigo-600 hover:bg-indigo-100"
                }`}
              >
                {cat[0].toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map(
              (
                {
                  id,
                  title,
                  description,
                  imageUrl,
                  imageUrls,
                  features,
                  backgroundColor,
                  foregroundColor,
                  techStack,
                },
                i
              ) => {
                const img = imageUrls?.[0] || imageUrl?.[0] || imageUrl || "";

                return (
                  <div
                    ref={expandRefs.current[i]}
                    key={id}
                    className={`${
                      expandedCard === id ? "md:col-span-2 col-span-1" : ""
                    }`}
                  >
                    {expandedCard !== id ? (
                      <motion.div
                        layout="position"
                        onClick={() => setExpandedCard(id)}
                        className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 cursor-pointer ${
                          expandedCard === id ? "md:col-span-2 col-span-1" : ""
                        }`}
                      >
                        {img && (
                          <motion.div
                            layout
                            className="overflow-hidden rounded-2xl"
                          >
                            <img
                              src={img}
                              alt={title}
                              className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-300"
                            />
                          </motion.div>
                        )}

                        <motion.div layout className="p-6">
                          <motion.h3
                            layout
                            className="text-2xl font-bold text-indigo-700 mb-2"
                          >
                            {title}
                          </motion.h3>
                          <motion.p
                            layout
                            className="text-base text-gray-800 line-clamp-4"
                          >
                            {description}
                          </motion.p>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div layout="position">
                        <motion.div
                          key="expanded"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 overflow-hidden"
                          onAnimationComplete={() => {
                            const node = expandRefs.current[i]?.current;
                            if (node) {
                              const yOffset = -100;
                              const y =
                                node.getBoundingClientRect().top +
                                window.pageYOffset +
                                yOffset;
                              window.scrollTo({ top: y, behavior: "smooth" });
                            }
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: backgroundColor || "#ffffff",
                              color: foregroundColor || "#000000",
                            }}
                            className="flex flex-col md:flex-row gap-8 items-start p-6 rounded-2xl border border-gray-200 shadow-sm"
                          >
                            {/* Left: Image */}
                            <div className="md:w-1/2 w-full">
                              <img
                                src={imageUrls?.slice(1)[0] || img}
                                alt={`${title} screenshot`}
                                className="rounded-xl w-full object-cover shadow-md"
                              />
                            </div>

                            {/* Right: Text Content */}
                            <div className="md:w-1/2 w-full space-y-6">
                              <h3
                                className="text-2xl font-bold"
                                style={{ color: foregroundColor || "#1e3a8a" }}
                              >
                                {title}
                              </h3>
                              {description && (
                                <p
                                  className="text-base leading-relaxed"
                                  style={{ color: foregroundColor || "#333" }}
                                >
                                  {description}
                                </p>
                              )}

                              {features && (
                                <ul
                                  className="list-disc pl-6 text-sm space-y-1"
                                  style={{ color: foregroundColor || "#444" }}
                                >
                                  {features.map((feat, idx) => (
                                    <li key={idx}>{feat}</li>
                                  ))}
                                </ul>
                              )}

                              {techStack && (
                                <div
                                  className="text-sm"
                                  style={{ color: foregroundColor || "#555" }}
                                >
                                  <strong
                                    style={{
                                      color: foregroundColor || "#4f46e5",
                                    }}
                                  >
                                    Tech Stack:
                                  </strong>{" "}
                                  {techStack.join(", ")}
                                </div>
                              )}

                              <div className="flex flex-wrap gap-3 pt-2">
                                <a
                                  href={`https://github.com/RobertRovenko/${id}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-5 py-2 text-sm font-medium bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
                                  style={{ color: "#fff" }}
                                >
                                  View Code
                                </a>
                                <a
                                  href={`https://${id}.rovenko.dev`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-5 py-2 text-sm font-medium border border-indigo-600 rounded-full hover:bg-indigo-700 transition"
                                  style={{
                                    color: foregroundColor || "#4f46e5",
                                  }}
                                >
                                  Visit Site
                                </a>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
