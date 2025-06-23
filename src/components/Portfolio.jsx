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
import { ChevronLeft, ChevronRight } from "lucide-react"; // Ensure you're using Lucide or install it

const projects = [
  {
    id: "30dayfitness",
    title: "30 Day Fitness",
    type: "programmed",
    description:
      "30 Day Fitness is a mobile application designed to help users achieve their fitness goals through structured 30-day workout challenges. Originally developed as my final project and thesis at university, the app has since grown into a successful product on the Google Play Store.",
    thumbnail: "/images/portfolio/thumbnails/30DayFitnessThumbnail.jpg",
    imageUrls: [
      "/images/portfolio/30DF/30dayfitnessdemonstration4.png",
      "/images/portfolio/30DF/30dayfitnessdemonstration3.png",
      "/images/portfolio/30DF/30dayfitnessdemonstration2.png",
      "/images/portfolio/30DF/30dayfitnessdemonstration1.png",
    ],
    backgroundColor: "#1D1A2F",
    foregroundColor: "#e0e7ff",
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
    backgroundColor: "#041E42",
    foregroundColor: "#e0e7ff",
    description:
      "Web app to visualize GitHub repo data. Offers metrics like commits, contributors, and tech stack using secure token access.",
    thumbnail: "/images/portfolio/thumbnails/GithubInsightsThumbnail.jpg",
    imageUrls: [
      "/images/portfolio/GithubInsights/GithubInsightsLogin.png",
      "/images/portfolio/GithubInsights/GithubInsightsDachboard.png",
    ],
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
    backgroundColor: "#2E1963",
    foregroundColor: "#e0e7ff",
    description:
      "Job board for software developers in Stockholm. Aggregates listings and offers filters to streamline the search.",
    thumbnail: "/images/portfolio/thumbnails/JobBoardSwedenThumbnail.jpg",
    imageUrls: [
      "/images/portfolio/jobboard/JobboardHomeScreen.png",
      "/images/portfolio/jobboard/JobboardJobDetails.png",
      "/images/portfolio/jobboard/JobboardAbout.png",
    ],
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
    backgroundColor: "#111827",
    foregroundColor: "#e0e7ff",
    description:
      "Subscription-based social platform for creators to monetize and share exclusive content with fans.",
    thumbnail: "/images/portfolio/thumbnails/OffstageThumbnail.jpg",
    imageUrls: [
      "/images/portfolio/Offstage/OffstageHomePage1.png",
      "/images/portfolio/Offstage/OffstageHomePage2.png",
      "/images/portfolio/Offstage/OffstageAbout.png",
    ],
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
    backgroundColor: "#F5F5F7",
    foregroundColor: "black",
    description:
      "SaaS tool to create custom QR codes with styling, logos, and themes. Built with React and deployed on Vercel.",
    thumbnail: "/images/portfolio/thumbnails/QrCodeGeneratorThumbnails.jpg",
    imageUrls: ["/images/portfolio/QRCode/QRCodeHomeScreen.png"],
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
    backgroundColor: "#F5F5F7",
    foregroundColor: "black",
    description:
      "Online store concept for fragrances with modern UI and secure payment integration.",
    thumbnail: "/images/portfolio/thumbnails/rovenkofragranceshopmen.png",
    imageUrls: [
      "/images/portfolio/FragranceShopSweden/FragranceMen.png",
      "/images/portfolio/FragranceShopSweden/FragranceWomen.png",
    ],
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
    backgroundColor: "#F5F5F7",
    foregroundColor: "black",
    description:
      "Mobile app to browse movie listings and purchase tickets directly from your phone.",
    thumbnail: "/images/portfolio/thumbnails/TicketPurchaseThumbnail.png",
    imageUrls: [
      "/images/portfolio/MovieTicket/MovieTicket1.png",
      "/images/portfolio/MovieTicket/MovieTicket2.png",
      "/images/portfolio/MovieTicket/MovieTicket3.png",
    ],
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
    backgroundColor: "#F5F5F7",
    foregroundColor: "black",
    description:
      "Food delivery app concept for quick taco orders. Fully designed and prototyped by me.",
    thumbnail: "/images/portfolio/thumbnails/TacoPlateDateThumbnail.jpg",
    imageUrls: [
      "/images/portfolio/TacoPlateDate/TacoPlateDateHomeScreen.png",
      "/images/portfolio/TacoPlateDate/TacoPlateDateList.png",
      "/images/portfolio/TacoPlateDate/TacoPlateDateEdit.png",
      "/images/portfolio/TacoPlateDate/TacoPlateDateCheckout.png",
      "/images/portfolio/TacoPlateDate/TacoPlateDatePurchase.png",
      "/images/portfolio/TacoPlateDate/TacoPlateDateRegister.png",
    ],
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
    thumbnail: "/images/portfolio/thumbnails/ForsakringskassanThumbnail.jpg",
    imageUrls: ["/images/portfolio/Forsakringskassan/Forsakringskassan.png"],
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
    thumbnail: "/images/portfolio/ModularFinance/ModularFinance1.png",
    imageUrls: [
      "/images/portfolio/ModularFinance/ModularFinance1.png",
      "/images/portfolio/ModularFinance/ModularFinance2.png",
    ],
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
    thumbnail: "/images/portfolio/thumbnails/FreelanceThumbnail.jpg",
    imageUrls: ["/images/portfolio/FreelanceWeb/FreelancePage.png"],
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
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // or loadFull(engine)
  }, []);

  const [expandedCard, setExpandedCard] = useState(null); // ✅ valid JS
  const maxChars = 150; // or whatever limit you want

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      <main className="max-w-7xl mx-auto px-0 pt-40 md:pt-20 md:pb-20 pb-10 relative z-10">
        {/* Hero Section */}
        <section className="w-full flex flex-col  px-12 md:flex-row items-center justify-center h-auto md:h-[500px] gap-8 md:gap-0 mb-16 md:mb-0">
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
                  thumbnail,
                  features,
                  backgroundColor,
                  foregroundColor,
                  techStack,
                },
                i
              ) => {
                return (
                  <div
                    ref={expandRefs.current[i]}
                    key={id}
                    className={`${
                      expandedCard === id
                        ? "col-span-1 w-full md:col-span-2"
                        : ""
                    }`}
                  >
                    {expandedCard !== id ? (
                      <motion.div
                        layout="position"
                        onClick={() => setExpandedCard(id)}
                        className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300  cursor-pointer ${
                          expandedCard === id ? "md:col-span-2 col-span-1" : ""
                        }`}
                      >
                        {thumbnail && (
                          <motion.div
                            layout
                            className="overflow-hidden rounded-2xl"
                          >
                            <img
                              src={thumbnail}
                              alt={`${title} thumbnail`}
                              className="rounded-xl object-cover shadow-md w-full h-96"
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
                            {description.length > maxChars
                              ? description.slice(0, maxChars) + "..."
                              : description}
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
                            className="flex flex-col md:flex-row gap-8 items-start p-6 rounded-2xl shadow-sm"
                          >
                            <div
                              className="md:w-1/2 w-full relative flex justify-center items-center"
                              style={{ minHeight: "200px" }}
                            >
                              <img
                                src={imageUrls?.[currentImageIndex] || ""}
                                alt={`${title} screenshot`}
                                className="rounded-xl shadow-md object-cover max-w-full max-h-full"
                                style={{ width: "auto", height: "700px" }}
                              />

                              {/* Left arrow */}
                              {imageUrls?.length > 1 && (
                                <button
                                  onClick={() =>
                                    setCurrentImageIndex((prev) =>
                                      prev === 0
                                        ? imageUrls.length - 1
                                        : prev - 1
                                    )
                                  }
                                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg hover:scale-105 transition-all duration-200 ease-in-out"
                                  aria-label="Previous Image"
                                >
                                  <ChevronLeft className="w-6 h-6" />
                                </button>
                              )}

                              {/* Right arrow */}
                              {imageUrls?.length > 1 && (
                                <button
                                  onClick={() =>
                                    setCurrentImageIndex((prev) =>
                                      prev === imageUrls.length - 1
                                        ? 0
                                        : prev + 1
                                    )
                                  }
                                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg hover:scale-105 transition-all duration-200 ease-in-out"
                                  aria-label="Next Image"
                                >
                                  <ChevronRight className="w-6 h-6" />
                                </button>
                              )}
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
