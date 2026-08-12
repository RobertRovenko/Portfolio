import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lock } from "lucide-react";

const projects = [
  {
    id: "foodlens",
    title: "FoodLens",
    type: "programmed",
    description:
      "FoodLens is a mobile nutrition and food-scanning application that helps users make more informed food choices. Users can scan food barcodes to receive a personalized FoodLens Score from 1–100 based on nutritional data, NOVA classification, Nutri-Score, and other health-related factors. The app also features a locally running, offline AI recipe chatbot built around a knowledge base of 12,000 recipes.",
    thumbnail: "/images/portfolio/thumbnails/FoodLensThumbnail.png",
    imageUrls: [
      "/images/portfolio/FoodLens/FoodLensDemo1.png",
      "/images/portfolio/FoodLens/FoodLensDemo2.png",
      "/images/portfolio/FoodLens/FoodLensDemo3.png",
      "/images/portfolio/FoodLens/FoodLensDemo4.png",
      "/images/portfolio/FoodLens/FoodLensDemo5.png",
      "/images/portfolio/FoodLens/FoodLensDemo6.png",
      "/images/portfolio/FoodLens/FoodLensDemo7.png",
    ],
    backgroundColor: "#001220",
    foregroundColor: "#e0e7ff",
    techStack: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Expo",
      "Node.js",
      "Nutrition APIs",
      "Barcode Scanning",
      "AI / LLM",
      "Offline AI",
      "Google Play",
      "Google Play Console",
      "CI/CD with Expo Application Services",
    ],
    features: [
      "Barcode scanning for food products",
      "FoodLens health score from 1–100",
      "Custom nutrition scoring algorithm",
      "AI recipe knowledge base containing 12,000 recipes",
      "Built from concept to production in two weeks",
      "Published on Google Play Store",
    ],
    codeLink:
      "https://play.google.com/store/apps/details?id=com.rovenkodev.foodlens",
    siteLink:
      "https://play.google.com/store/apps/details?id=com.rovenkodev.foodlens",
    codeText: "Website",
    siteText: "Play Store",
  },
  {
    id: "quizzypop",
    title: "QuizzyPop",
    type: "programmed",
    description:
      "QuizzyPop is an engaging trivia application that challenges users with a variety of questions across different categories. Built with React Native, it offers a fun and interactive way to test knowledge and improve skills.",
    thumbnail: "/images/portfolio/thumbnails/QuizzyPopThumbnail.png",
    imageUrls: [
      "/images/portfolio/QuizzyPop/Demo1.png",
      "/images/portfolio/QuizzyPop/Demo2.png",
      "/images/portfolio/QuizzyPop/Demo3.png",
      "/images/portfolio/QuizzyPop/Demo4.png",
      "/images/portfolio/QuizzyPop/Demo5.png",
      "/images/portfolio/QuizzyPop/Demo6.png",
    ],
    backgroundColor: "#001220",
    foregroundColor: "#e0e7ff",
    techStack: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Expo",
      "Google Play",
      "Node.js (backend/API)",
      "Push Notifications (Expo Notifications)",
      "Revenue Cat",
      "Admob",
      "Supabase",
      "Google Play Console",
      "Google Cloud Console",
      "CI/CD with Expo Application Services",
    ],
    features: [
      "Addictive fast-paced trivia gameplay",
      "Interactive achievement and progression system",
      "Cross-platform hybrid mobile app built with Expo",
      "Intuitive and sleek UI/UX",
      "Published on Google Play Store",
      "Post-launch updates and active user base",
    ],
    codeLink: "https://www.quizzypop.robertrovenko.com/",
    siteLink:
      "https://play.google.com/store/apps/details?id=com.rovenkodev.quizzypop",
    codeText: "Visit Site",
    siteText: "Check Out App",
  },
  {
    id: "30dayfitness",
    title: "30 Day Fitness",
    type: "programmed",
    description:
      "30 Day Fitness is a mobile application designed to help users achieve their fitness goals through structured 30-day workout challenges. Originally developed as my final project and thesis at university, the app has since grown into a successful product on the Google Play Store.",
    thumbnail: "/images/portfolio/thumbnails/30DayFitnessT.png",
    imageUrls: [
      "/images/portfolio/30DFDemo/3DDemo1.png",
      "/images/portfolio/30DFDemo/3DDemo2.png",
      "/images/portfolio/30DFDemo/3DDemo3.png",
      "/images/portfolio/30DFDemo/3DDemo4.png",
      "/images/portfolio/30DFDemo/3DDemo5.png",
      "/images/portfolio/30DFDemo/3DDemo6.png",
    ],
    backgroundColor: "#001220",
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
    codeLink: "https://www.30dayfitness.robertrovenko.com/",
    siteLink:
      "https://play.google.com/store/apps/details?id=com.rovenkodev.FitnessGuru",
    codeText: "Visit Site",
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
    id: "horrormaze",
    title: "Horror Maze",
    type: "programmed",
    description:
      "A short but atmospheric horror experience originally created as a school project in 2019. Preserved in my portfolio to showcase my journey from an aspiring developer to a full-time software engineer.",
    thumbnail: "/images/portfolio/HorrorMaze/horrormaze1.png",
    imageUrls: [
      "/images/portfolio/HorrorMaze/horrormaze1.png",
      "/images/portfolio/HorrorMaze/horrormaze2.png",
      "/images/portfolio/HorrorMaze/horrormaze3.png",
      "/images/portfolio/HorrorMaze/horrormaze4.png",
    ],
    backgroundColor: "#0B0B0F",
    foregroundColor: "#E5E7EB",
    techStack: ["Unreal Engine 4", "Blueprints", "Level Design"],
    features: [
      "First-person horror experience",
      "Atmospheric maze environment",
      "Created as a school project in 2019",
      "Represents the beginning of my development journey",
    ],
    codeLink: "",
    codeText: "Code Private",
    siteLink: "https://rovenkodev.itch.io/horrormaze",
    siteText: "Download Game",

    embed: (
      <iframe
        title="Horror Maze Game Preview"
        className="w-full max-w-[552px] h-[167px] border-0"
        src="https://itch.io/embed/4669046?bg_color=000000&fg_color=ffffff&link_color=e10404&border_color=000000"
      >
        <a href="https://rovenkodev.itch.io/horrormaze">
          HorrorMaze by rovenkodev
        </a>
      </iframe>
    ),
  },
  {
    id: "jobboardsweden",
    title: "Job Board Sweden",
    type: "programmed",
    backgroundColor: "#2E1963",
    foregroundColor: "#e0e7ff",
    description:
      "Job Board Sweden is a full-stack platform tailored for software developers in Stockholm. It aggregates job listings from multiple sources (including public job APIs and custom scrapers), offers secure OAuth login, interactive analytics, and exports reports. Built with a React/Next.js frontend and a Node.js/TypeScript backend, it's deployed on Vercel for fast, globally-distributed delivery.",
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
    imageUrls: ["/images/portfolio/thumbnails/FreelancePortfolio.png"],
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
  const expandRefs = useRef([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const maxChars = 150;
  const [filter, setFilter] = useState("all");
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );
  const [currentImageIndices, setCurrentImageIndices] = useState({});

  // Hero scroll rotation
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    expandRefs.current = filteredProjects.map(
      (_, i) => expandRefs.current[i] || React.createRef(),
    );
  }, [filteredProjects]);

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
    <div className="relative bg-white font-sans text-gray-900 min-h-screen px-4 sm:px-6 md:px-8">
      <main className="max-w-7xl mx-auto pt-24 md:pt-20 md:pb-20 pb-10 relative z-10">
        {/* Featured Apps Hero Section — Dark Canvas Rethink */}
        {/* Featured Apps Hero Section — Performance Optimized */}
        <section className="relative w-full min-h-[500px] md:min-h-[600px] px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 rounded-3xl bg-[#001220] text-white overflow-hidden my-8">
          {/* Left side — Copy & CTAs */}
          <div className="relative z-20 flex-1 max-w-xl text-center md:text-left">
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
              Featured <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-[#BAFF3D]">
                  Apps & Projects.
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 text-slate-300 font-normal">
              A curated collection of production-ready mobile and web
              applications built with React Native, TypeScript, Expo, and Swift,
              ranging from SaaS and utilities to interactive games.
              <span className="block mt-3 text-white font-semibold">
                Designed & developed by{" "}
                <span className="text-[#BAFF3D]">Robert Falkbäck</span>
              </span>
            </p>

            {/* Fast CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Primary Button */}
              <a
                href="#portfolio"
                className="group px-8 py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 bg-[#BAFF3D] text-[#001220] shadow-md shadow-[#BAFF3D]/10 hover:bg-[#a8f52c] transition-colors duration-150"
              >
                <span>Browse All Apps</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-150"
                />
              </a>

              {/* Secondary Button */}
              <a
                href="https://github.com/RobertRovenko"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-slate-700 text-white px-8 py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-[#001220] hover:border-white transition-all duration-150"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>

          {/* Right side — Clean, Static 3-App Fan (Fast CSS-only Hover) */}
          <div className="relative z-10 flex-1 w-full max-w-lg flex items-center justify-center md:justify-end">
            <div className="relative flex items-center justify-center w-full h-[360px] sm:h-[480px]">
              {/* Left Mockup: 30 Day Fitness */}
              <div className="absolute left-0 sm:left-2 z-10 w-[150px] sm:w-[200px] md:w-[220px] -rotate-6 drop-shadow-xl cursor-pointer transition-transform duration-200 ease-out hover:rotate-0 hover:scale-105 hover:z-30">
                <img
                  src="/images/portfolio/30dayfitnesshero.png"
                  alt="30 Day Fitness App Mockup"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </div>

              {/* Center Mockup: FoodLens */}
              <div className="absolute z-20 w-[170px] sm:w-[220px] md:w-[240px] drop-shadow-2xl cursor-pointer transition-transform duration-200 ease-out hover:scale-105 hover:z-30">
                <img
                  src="/images/portfolio/foodlenshero.png"
                  alt="FoodLens App Mockup"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </div>

              {/* Right Mockup: QuizzyPop */}
              <div className="absolute right-0 sm:right-2 z-10 w-[150px] sm:w-[200px] md:w-[220px] rotate-6 drop-shadow-xl cursor-pointer transition-transform duration-200 ease-out hover:rotate-0 hover:scale-105 hover:z-30">
                <img
                  src="/images/portfolio/quizzypophero.png"
                  alt="QuizzyPop App Mockup"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Projects Section */}
        <section id="portfolio" className="mt-0 mb-16 z-10">
          <div>
            {/* Section Heading */}
            <h2
              style={{ color: "#001220" }}
              className="text-3xl sm:text-5xl font-black tracking-tight mb-8 md:mb-10 text-center"
            >
              Portfolio
            </h2>

            {/* Filter Buttons */}
            <div className="flex justify-center flex-wrap gap-2.5 sm:gap-4 mb-10 md:mb-12">
              {["all", "programmed", "designed"].map((cat) => {
                const isActive = filter === cat;
                const label =
                  cat === "all"
                    ? "All Projects"
                    : cat.charAt(0).toUpperCase() + cat.slice(1);

                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border-2 transition-all duration-150 ${
                      isActive
                        ? "bg-[#001220] text-[#BAFF3D] border-[#001220] shadow-sm"
                        : "bg-white text-[#001220] border-slate-200 hover:border-[#001220] hover:bg-slate-50"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
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
                  embed,
                },
                i,
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
                        {...(!isMobile && { whileHover: { scale: 1.02 } })}
                        className={`group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer ${
                          expandedCard === id ? "md:col-span-2 col-span-1" : ""
                        }`}
                      >
                        {thumbnail && (
                          <motion.div
                            layout
                            className="overflow-hidden rounded-t-2xl md:rounded-t-2xl border-b border-gray-100"
                          >
                            <img
                              src={thumbnail}
                              alt={`${title} thumbnail`}
                              className="rounded-t-2xl md:rounded-t-xl object-cover shadow-md w-full h-56 sm:h-72 md:h-96"
                            />
                          </motion.div>
                        )}

                        <motion.div layout className="p-5 sm:p-6">
                          <motion.h3
                            layout
                            className="text-xl sm:text-2xl font-bold text-[#1E3A5F] mb-2"
                          >
                            {title}
                          </motion.h3>
                          <motion.p
                            layout
                            className="text-sm sm:text-base text-gray-800 line-clamp-4"
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
                            className="flex flex-col md:flex-row gap-6 md:gap-8 items-center p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border-2 border-gray-300"
                          >
                            {/* Left: Fixed Image Frame */}
                            <div className="md:w-1/2 w-full relative flex justify-center items-center h-[360px] sm:h-[480px] md:h-[580px]">
                              <img
                                src={imageUrls?.[index] || ""}
                                alt={`${title} screenshot`}
                                className="rounded-xl shadow-md object-contain w-full h-full"
                              />

                              {imageUrls?.length > 1 && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleImageChange(id, "prev");
                                  }}
                                  className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 sm:p-2 shadow-lg hover:scale-105 transition-all duration-200 ease-in-out"
                                  aria-label="Previous Image"
                                >
                                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                                </button>
                              )}
                              {imageUrls?.length > 1 && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleImageChange(id, "next");
                                  }}
                                  className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 sm:p-2 shadow-lg hover:scale-105 transition-all duration-200 ease-in-out"
                                  aria-label="Next Image"
                                >
                                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                </button>
                              )}
                            </div>

                            {/* Right: Text Content */}
                            <div className="md:w-1/2 w-full space-y-5 md:space-y-6">
                              <h3
                                className="text-2xl sm:text-3xl font-bold"
                                style={{ color: foregroundColor || "#1e3a8a" }}
                              >
                                {title}
                              </h3>

                              {description && (
                                <p
                                  className="text-base sm:text-lg leading-relaxed sm:leading-loose"
                                  style={{
                                    color: foregroundColor || "#2d2d2d",
                                  }}
                                >
                                  {description}
                                </p>
                              )}

                              {features && (
                                <ul
                                  className="list-disc pl-5 sm:pl-6 text-sm sm:text-base space-y-1.5 sm:space-y-2 leading-relaxed"
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
                                <div className="text-sm flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                                  <strong
                                    style={{
                                      color: foregroundColor || "#4f46e5",
                                    }}
                                  >
                                    Tech Stack:
                                  </strong>
                                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {techStack.map((tech, i) => (
                                      <span
                                        key={i}
                                        className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                                {!codeLink ? (
                                  <button
                                    disabled
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-base font-medium bg-gray-400 text-white opacity-70 rounded-full cursor-not-allowed"
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
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-base font-medium bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
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
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-base font-medium bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
                                    style={{
                                      color: "white",
                                    }}
                                  >
                                    {siteText || "Visit Site"}
                                  </a>
                                )}
                              </div>
                              {embed && (
                                <div className="pt-4 sm:pt-8 flex justify-center w-full overflow-hidden">
                                  {embed}
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                );
              },
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
