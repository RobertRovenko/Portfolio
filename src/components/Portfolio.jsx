import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Ensure you're using Lucide or install it
import StaticParticles from "./StaticParticles.tsx";
import { Lock } from "lucide-react"; // Import the icon

const projects = [
  {
    id: "30dayfitness",
    title: "30 Day Fitness",
    type: "programmed",
    description:
      "30 Day Fitness is a mobile application designed to help users achieve their fitness goals through structured 30-day workout challenges. Originally developed as my final project and thesis at university, the app has since grown into a successful product on the Google Play Store.",
    thumbnail: "/images/portfolio/thumbnails/30DayFitnessThumbnail.png",
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
      "Node.js (backend/API)",
      "Push Notifications (Expo Notifications)",

      "Google Play Console",
      "CI/CD with Expo Application Services",
    ],
    features: [
      "Different structured 30-day workout challenges",
      "Interactive charts to track progress",
      "Cross-platform hybrid mobile app with Expo",
      "Intuitive and sleek UI/UX",
      "Published on Google Play Store",
      "Post-launch updates and active user base",
    ],
    codeLink: "",
    siteLink:
      "https://play.google.com/store/apps/details?id=com.rovenkodev.FitnessGuru",
    codeText: "Code Private",
    siteText: "Check Out App",
  },
  {
    id: "githubinsights",
    title: "GitHub Insights",
    type: "programmed",
    backgroundColor: "#041E42",
    foregroundColor: "#e0e7ff",
    description:
      "GitHub Insights is a full-stack, real-time analytics dashboard for GitHub repositories. It leverages GitHub's REST API to fetch live metrics on commits, contributors, traffic, and language breakdowns. Users authenticate securely using GitHub OAuth, and data is visualized with interactive charts in a performant frontend.",
    thumbnail: "/images/portfolio/thumbnails/GithubInsightsThumbnail.jpg",
    imageUrls: [
      "/images/portfolio/GithubInsights/GithubInsightsLogin.png",
      "/images/portfolio/GithubInsights/GithubInsightsDachboard.png",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Chart.js",
      "GitHub REST API",
      "OAuth 2.0",
      "Vercel",
    ],
    features: [
      "GitHub OAuth authentication via OAuth 2.0",
      "Fetches real-time data using GitHub REST API v3",
      "Interactive Chart.js visualizations for commits, contributors, traffic, and languages",
      "Dynamic repository selection via authenticated user session",
      "Optimized with server-side rendering and API routes (Next.js)",
      "Responsive dashboard UI built with Tailwind CSS",
      "Deployed on Vercel with edge caching and CI/CD integration",
    ],
    codeLink: "https://github.com/RobertRovenko/github-analytics-app",
    siteLink: "https://github-analytics-app.vercel.app/",
    codeText: "View Code",
    siteText: "Visit Site",
  },
  {
    id: "jobboardsweden",
    title: "Job Board Sweden",
    type: "programmed",
    backgroundColor: "#2E1963",
    foregroundColor: "#e0e7ff",
    description:
      "Job Board Sweden is a full-stack platform tailored for software developers in Stockholm. It aggregates job listings from multiple sources (including public job APIs and custom scrapers), offers secure OAuth login, interactive analytics, and exports reports. Built with a React/Next.js frontend and a Node.js/TypeScript backend, it’s deployed on Vercel for fast, globally-distributed delivery.",
    thumbnail: "/images/portfolio/thumbnails/JobBoardThumbnail.jpg",
    imageUrls: [
      "/images/portfolio/Jobboard/JobboardHomeScreen.png",
      "/images/portfolio/Jobboard/JobboardJobDetails.png",
      "/images/portfolio/Jobboard/JobboardAbout.png",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "React Query",
      "SWR",
      "OAuth 2.0",
      "Serverless Functions (Vercel)",
      "REST API integration",
    ],
    features: [
      "Interactive data visualizations (jobs by category, location, trend analysis)",
      "Responsive UI with Tailwind CSS",
      "Incremental static generation & API routes via Next.js",
      "Deployed on Vercel with serverless edge functions",
    ],
    codeLink: "https://github.com/RobertRovenko/JobBoard",
    siteLink: "https://job-board-sweden.vercel.app/",
    codeText: "Check Code",
    siteText: "Visit Site",
  },
  {
    id: "offstage",
    title: "Offstage",
    type: "programmed",
    backgroundColor: "#111827",
    foregroundColor: "#e0e7ff",
    description:
      "Offstage is a subscription-based social platform enabling creators to monetize exclusive content for their fans. It offers seamless user onboarding, content feeds, and payment management on a sleek, secure web interface.",
    thumbnail: "/images/portfolio/thumbnails/OffstageThumbnail.jpg",
    imageUrls: [
      "/images/portfolio/Offstage/OffstageHomePage1.png",
      "/images/portfolio/Offstage/OffstageHomePage2.png",
      "/images/portfolio/Offstage/OffstageAbout.png",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js + Express",
      "Stripe API",
      "Tailwind CSS",
      "MongoDB",
      "GitHub Pages",
    ],
    features: [
      "Creator onboarding with tiered subscription plans",
      "Secure JWT-based user authentication",
      "Content feed with text, images, and video support",
      "Subscription management + Stripe-based payments",
      "Admin dashboard for creators (analytics, posts)",
      "Responsive UI with Tailwind CSS",
      "SEO-optimized marketing pages deployed on GitHub Pages",
    ],
    codeLink: "https://github.com/RobertRovenko/RobertRovenko.github.io",
    siteLink: "https://robertrovenko.github.io/",
    codeText: "View Code",
    siteText: "Visit Site",
  },
  {
    id: "qrcodegenerator",
    title: "QR Code Generator",
    type: "programmed",
    backgroundColor: "#F5F5F7",
    foregroundColor: "black",
    description:
      "QR Code Generator is a SaaS web tool that enables users to create customized QR codes with colors, logos, and download options. The app uses a React frontend, a Node.js API for QR generation, and integrates a popular styling library for advanced design options.",
    thumbnail: "/images/portfolio/thumbnails/QrCodeGeneratorThumbnails.jpg",
    imageUrls: ["/images/portfolio/QRCode/QRCodeHomeScreen.png"],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js + Express",
      "qr-code-styling",
      "Tailwind CSS",
      "Vercel",
    ],
    features: [
      "User-friendly React UI with live QR styling",
      "Custom colors, dot shapes & embedded logo support via qr‑code‑styling library",
      "On-demand QR code generation via Node.js/Express API",
      "Image download in SVG and PNG formats",
      "Responsive design powered by Tailwind CSS",
      "Deployed on Vercel with serverless functions",
    ],
    codeLink: "https://github.com/RobertRovenko/qrcodegenerator",
    siteLink: "https://qrcode-sweden.vercel.app/",
    codeText: "View Code",
    siteText: "Visit Site",
  },
  {
    id: "modularfinance",
    title: "Modular Finance",
    type: "programmed",
    backgroundColor: "#F5F5F7",
    foregroundColor: "black",
    description:
      "Redesign and coded implementation of the Modular Finance newsletter. The project involved creating a clean, minimal UI in Figma followed by a responsive React-based frontend with email-friendly styling and modular components.",
    thumbnail: "/images/portfolio/thumbnails/ModularFinanceThumbnail.jpg",
    imageUrls: [
      "/images/portfolio/ModularFinance/ModularFinance1.png",
      "/images/portfolio/ModularFinance/ModularFinance2.png",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Email Templates",
      "Vercel",
    ],
    features: [
      "Full redesign in Figma with focus on readability and brand consistency",
      "Responsive React frontend optimized for email clients",
      "Modular components for easy content updates",
      "Styled with Tailwind CSS for rapid UI development",
      "Deployment on Vercel for fast hosting",
      "Code versioned and maintained on GitHub",
    ],
    codeLink: "https://github.com/RobertRovenko/MFNexamplepage",
    siteLink:
      "https://www.figma.com/design/wmB32HmQfri8T8RKQtPVVo/Design-Case-MFN-2024?node-id=0-1&p=f&t=88zvWHtjPJ1Vfbja-0",
    codeText: "View Code",
    siteText: "Visit Figma",
  },
  {
    id: "fragranceshop",
    title: "E-Commerce Fragrance Shop",
    type: "programmed",
    backgroundColor: "#F5F5F7",
    foregroundColor: "black",
    description:
      "Static e-commerce site concept for fragrances featuring a modern UI with interactive elements, built primarily using HTML, CSS, and vanilla JavaScript.",
    thumbnail: "/images/portfolio/thumbnails/rovenkofragranceshopmen.png",
    imageUrls: [
      "/images/portfolio/FragranceShopSweden/FragranceMen.png",
      "/images/portfolio/FragranceShopSweden/FragranceWomen.png",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Github Pages"],
    features: [
      "Responsive design with CSS Flexbox and Grid",
      "Interactive UI components (e.g., product filters, dropdowns, modals) using vanilla JavaScript",
      "Simple shopping cart functionality simulated with JavaScript",
      "Image carousels/sliders",
      "Static hosting via GitHub Pages",
    ],
    codeLink: "https://github.com/RobertRovenko/FragranceWebsite",
    siteLink: "https://robertrovenko.github.io/FragranceWebsite/",
    codeText: "View Code",
    siteText: "Visit Site",
  },
  {
    id: "movietheater",
    title: "Movie Theater App",
    type: "designed",
    backgroundColor: "#F5F5F7",
    foregroundColor: "black",
    description:
      "Mobile app design concept for browsing movie listings and purchasing tickets directly from your phone. Crafted with a focus on clean UX/UI and smooth navigation.",
    thumbnail: "/images/portfolio/thumbnails/TicketPurchaseThumbnail.png",
    imageUrls: [
      "/images/portfolio/MovieTicket/MovieTicket1.png",
      "/images/portfolio/MovieTicket/MovieTicket2.png",
      "/images/portfolio/MovieTicket/MovieTicket3.png",
    ],
    techStack: ["Figma"],
    features: [
      "Interactive mobile UI/UX flows",
      "Clear movie listing and filtering screens",
      "Intuitive ticket selection and purchase process",
      "User profile and booking history screens",
      "High-fidelity prototype with clickable elements",
    ],
    codeLink: "",
    siteLink:
      "https://www.figma.com/design/zf3c2UsaWWRZSkusYLk0MM/Untitled?node-id=0-1&p=f&t=OVC2W7E2sgWbErX8-0",
    codeText: "Code Private",
    siteText: "Visit Figma",
  },
  {
    id: "tacoplatedate",
    title: "Taco-Plate-Date",
    type: "designed",
    backgroundColor: "#F5F5F7",
    foregroundColor: "black",
    description:
      "Food delivery app concept focused on quick and easy taco orders. Fully designed and prototyped with attention to color theory, typography, and user experience.",
    thumbnail: "/images/portfolio/thumbnails/TacoPlateDateThumbnail.jpg",
    imageUrls: [
      "/images/portfolio/TacoPlateDate/TacoPlateDateHomeScreen.png",
      "/images/portfolio/TacoPlateDate/TacoPlateDateList.png",
      "/images/portfolio/TacoPlateDate/TacoPlateDateEdit.png",
      "/images/portfolio/TacoPlateDate/TacoPlateDateCheckout.png",
      "/images/portfolio/TacoPlateDate/TacoPlateDatePurchase.png",
      "/images/portfolio/TacoPlateDate/TacoPlateDateRegister.png",
    ],
    techStack: ["Figma"],
    features: [
      "Comprehensive UI/UX design with wireframes and high-fidelity mockups",
      "Interactive clickable prototype showcasing full user flow",
      "Use of color theory and typography for brand consistency",
      "Screens include product browsing, order editing, checkout, and registration",
    ],
    codeLink: "",
    siteLink:
      "https://www.figma.com/design/G3vUbDfmY1lAk0aBE0BllZ/Untitled?t=OVC2W7E2sgWbErX8-0",
    codeText: "Code Private",
    siteText: "Visit Figma",
  },
  {
    id: "forsakringskassan",
    title: "Försäkringskassan Redesign",
    type: "designed",
    backgroundColor: "#F5F5F7",
    foregroundColor: "black",
    description:
      "Modern redesign prototype of the Försäkringskassan landing page, created entirely in Figma focusing on UX improvements and visual refresh.",
    thumbnail: "/images/portfolio/thumbnails/ForsakringskassanThumbnail.jpg",
    imageUrls: ["/images/portfolio/Forsakringskassan/Forsakringskassan.png"],
    techStack: ["Figma"],
    features: [
      "High-fidelity visual redesign",
      "Focus on improved usability and accessibility",
      "Interactive prototype showcasing landing page flow",
      "Consistent branding and modern UI elements",
    ],
    codeLink: "",
    siteLink:
      "https://www.figma.com/design/zf3c2UsaWWRZSkusYLk0MM/Untitled?t=OVC2W7E2sgWbErX8-0",
    codeText: "Code Private",
    siteText: "Visit Figma",
  },

  {
    id: "freelancewebsite",
    title: "RovenkoDev Freelance Site",
    type: "programmed",
    backgroundColor: "#F5F5F7",
    foregroundColor: "black",
    description:
      "Originally designed in Figma as a concept, this freelance website was later programmed and launched as my personal portfolio to showcase real development work and validate client projects. I transitioned my marketing efforts and client acquisition to platforms like Upwork and Fiverr, using this site as a central proof of work.",
    thumbnail: "/images/portfolio/thumbnails/FreelanceThumbnail.jpg",
    imageUrls: ["/images/portfolio/Thumbnails/FreelancePortfolio.png"],
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Figma", "Vercel"],
    features: [
      "Clean and modern UI/UX design",
      "Focus on portfolio presentation and client engagement",
      "High-fidelity clickable prototype",
      "Responsive layout concepts",
    ],
    codeLink: "https://github.com/RobertRovenko/Portfolio",
    siteLink: "https://www.robertrovenko.com/",
    codeText: "View Code",
    siteText: "Visit Site",
  },
];

export default function Portfolio() {
  const refs = useRef(projects.map(() => React.createRef()));
  const [isHover, setIsHover] = React.useState(false);
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

  const [currentImageIndices, setCurrentImageIndices] = useState({});

  const handleImageChange = (projectId, direction) => {
    setCurrentImageIndices((prev) => {
      const project = projects.find((p) => p.id === projectId);
      const total = project?.imageUrls?.length || 1;
      const current = prev[projectId] || 0;

      const next =
        direction === "next"
          ? (current + 1) % total
          : (current - 1 + total) % total;

      return { ...prev, [projectId]: next };
    });
  };

  return (
    <div className="relative bg-white font-sans text-gray-900 min-h-screen ">
      <StaticParticles />

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-40 md:gap-10">
            {filteredProjects.map(
              (
                {
                  id,
                  title,
                  description,
                  imageUrls,
                  thumbnail,
                  features,
                  backgroundColor,
                  foregroundColor,
                  techStack,
                  siteText,
                  codeText,
                  codeLink,
                  siteLink,
                },
                i
              ) => {
                const index = currentImageIndices[id] || 0;

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
                        className={`group bg-white ounded-none md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300  cursor-pointer ${
                          expandedCard === id ? "md:col-span-2 col-span-1" : ""
                        }`}
                      >
                        {thumbnail && (
                          <motion.div
                            layout
                            className="overflow-hidden rounded-none md:rounded-2xl border-t border-gray-500 md:border-none"
                          >
                            <img
                              src={thumbnail}
                              alt={`${title} thumbnail`}
                              className="rounded-none md:rounded-xl object-cover shadow-md w-full h-96"
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
                      <motion.div layout="position" className="relative">
                        <button
                          onClick={() => setExpandedCard(null)}
                          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-800 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                          aria-label="Close"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
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
                            className="flex flex-col md:flex-row gap-8 items-start p-6 rounded-none md:rounded-2xl shadow-sm"
                          >
                            <div
                              className="md:w-1/2 w-full relative flex justify-center items-center"
                              style={{ minHeight: "200px" }}
                            >
                              <img
                                src={imageUrls?.[index] || ""}
                                alt={`${title} screenshot`}
                                className="rounded-xl shadow-md object-cover max-w-full max-h-full"
                                style={{ width: "auto", height: "650px" }}
                              />

                              {imageUrls?.length > 1 && (
                                <button
                                  onClick={() => handleImageChange(id, "prev")}
                                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg hover:scale-105 transition-all duration-200 ease-in-out"
                                  aria-label="Previous Image"
                                >
                                  <ChevronLeft className="w-6 h-6" />
                                </button>
                              )}
                              {imageUrls?.length > 1 && (
                                <button
                                  onClick={() => handleImageChange(id, "next")}
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
                                className="text-3xl font-bold"
                                style={{ color: foregroundColor || "#1e3a8a" }}
                              >
                                {title}
                              </h3>

                              {description && (
                                <p
                                  className="text-lg leading-loose"
                                  style={{
                                    color: foregroundColor || "#2d2d2d",
                                  }}
                                >
                                  {description}
                                </p>
                              )}

                              {features && (
                                <ul
                                  className="list-disc pl-6 text-base space-y-2 leading-relaxed"
                                  style={{
                                    color: foregroundColor || "#3a3a3a",
                                  }}
                                >
                                  {features.map((feat, idx) => (
                                    <li key={idx}>{feat}</li>
                                  ))}
                                </ul>
                              )}

                              {techStack && (
                                <div className="text-sm flex flex-wrap gap-2 items-center">
                                  <strong
                                    style={{
                                      color: foregroundColor || "#4f46e5",
                                    }}
                                  >
                                    Tech Stack:
                                  </strong>
                                  <div className="flex flex-wrap gap-2">
                                    {techStack.map((tech, i) => (
                                      <span
                                        key={i}
                                        className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              <div className="flex flex-wrap gap-3 pt-2">
                                {!codeLink ? (
                                  <button
                                    disabled
                                    className="flex items-center gap-2 px-6 py-3 text-base font-medium bg-gray-400 text-white opacity-70 rounded-full cursor-not-allowed"
                                  >
                                    {codeText || "View Code"}
                                    {codeText === "Code Private" && (
                                      <Lock size={18} />
                                    )}
                                  </button>
                                ) : (
                                  <a
                                    href={codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 text-base font-medium bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
                                  >
                                    {codeText || "View Code"}
                                    {codeText === "Code Private" && (
                                      <Lock size={18} />
                                    )}
                                  </a>
                                )}

                                {siteLink && (
                                  <a
                                    href={siteLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 text-base font-medium bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
                                    onMouseEnter={() => setIsHover(true)}
                                    onMouseLeave={() => setIsHover(false)}
                                    style={{
                                      color: "white",
                                    }}
                                  >
                                    {siteText || "Visit Site"}
                                  </a>
                                )}
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
        <div className="mt-24 flex justify-center">
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 max-w-2xl w-full text-center shadow-md">
            <h3 className="text-2xl font-bold text-indigo-700 mb-3">
              Want to see more?
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Check out even more of my projects and code contributions on
              GitHub.
            </p>
            <a
              href="https://github.com/RobertRovenko"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium text-base rounded-full shadow hover:bg-indigo-700 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
              Visit My GitHub
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
