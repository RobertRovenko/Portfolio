import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";

const projects = [
  {
    id: "30dayfitness",
    title: "30 Day Fitness",
    type: "programmed",
    description:
      "Mobile app with 30-day workout challenges. Built in React Native and launched on Google Play with thousands of users.",
    imageUrls: ["/images/portfolio/thumbnails/30DayFitnessThumbnail.jpg"],
    link: "https://play.google.com/store/apps/details?id=com.rovenkodev.fitness",
  },
  {
    id: "githubinsights",
    title: "GitHub Insights",
    type: "programmed",
    description:
      "Web app to visualize GitHub repo data. Offers metrics like commits, contributors, and tech stack using secure token access.",
    imageUrls: ["/images/portfolio/thumbnails/GithubInsightsThumbnail.jpg"],
    link: "https://www.robertrovenko.com/portfolio/github-insights",
  },
  {
    id: "jobboardsweden",
    title: "Job Board Sweden",
    type: "programmed",
    description:
      "Job board for software developers in Stockholm. Aggregates listings and offers filters to streamline the search.",
    imageUrls: ["/images/portfolio/thumbnails/JobBoardSwedenThumbnail.jpg"],
    link: "https://www.robertrovenko.com/portfolio/job-board-sweden",
  },
  {
    id: "offstage",
    title: "Offstage",
    type: "programmed",
    description:
      "Subscription-based social platform for creators to monetize and share exclusive content with fans.",
    imageUrls: ["/images/portfolio/thumbnails/OffstageThumbnail.jpg"],
    link: "https://www.robertrovenko.com/portfolio/offstage",
  },
  {
    id: "qrcodegenerator",
    title: "QR Code Generator",
    type: "programmed",
    description:
      "SaaS tool to create custom QR codes with styling, logos, and themes. Built with React and deployed on Vercel.",
    imageUrls: ["/images/portfolio/thumbnails/QrCodeGeneratorThumbnails.jpg"],
    link: "https://www.robertrovenko.com/portfolio/offstage",
  },
  {
    id: "fragranceshop",
    title: "E-Commerce Fragrance Shop",
    type: "designed",
    description:
      "Online store concept for fragrances with modern UI and secure payment integration.",
    imageUrls: ["/images/portfolio/rovenkofragranceshopmen.png"],
    link: "https://www.robertrovenko.com/portfolio/e-commerce-fragrance-shop",
  },
  {
    id: "movietheater",
    title: "Movie Theater App",
    type: "designed",
    description:
      "Mobile app to browse movie listings and purchase tickets directly from your phone.",
    imageUrls: ["/images/portfolio/thumbnails/TicketPurchaseThumbnail.jpg"],
    link: "https://www.robertrovenko.com/portfolio/movie-theater-ticket-purchase-app",
  },
  {
    id: "tacoplatedate",
    title: "Taco-Plate-Date",
    type: "designed",
    description:
      "Food delivery app concept for quick taco orders. Fully designed and prototyped by me.",
    imageUrls: ["/images/portfolio/thumbnails/TacoPlateDateThumbnail.jpg"],
    link: "https://www.robertrovenko.com/portfolio/taco-plate-date",
  },
  {
    id: "forsakringskassan",
    title: "Försäkringskassan Redesign",
    type: "designed",
    description: "Modern Figma redesign of the Försäkringskassan landing page.",
    imageUrls: ["/images/portfolio/thumbnails/ForsakringskassanThumbnail.jpg"],
    link: "https://www.robertrovenko.com/portfolio/taco-plate-date",
  },
  {
    id: "galleryapp",
    title: "Gallery App",
    type: "designed",
    description:
      "A minimalist gallery app UI made in Figma for browsing and viewing images.",
    imageUrls: ["/images/portfolio/thumbnails/GalleryAppThumbnail2.jpg"],
    link: "https://www.robertrovenko.com/portfolio/taco-plate-date",
  },
  {
    id: "freelancewebsite",
    title: "RovenkoDev Freelance Site",
    type: "designed",
    description:
      "Personal freelance site concept for showcasing my development and design work.",
    imageUrls: ["/images/portfolio/thumbnails/FreelanceThumbnail.jpg"],
    link: "https://www.robertrovenko.com/portfolio/taco-plate-date",
  },
];

export default function Portfolio() {
  const refs = useRef(projects.map(() => React.createRef()));
  const [visibility, setVisibility] = useState(projects.map(() => false));
  const isMobile = window.innerWidth < 768;

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

  return (
    <div className="relative font-sans text-gray-900 min-h-screen ">
      {/* Background Image */}
      <img
        src="/images/home/joel-filipe-VuwAfoHpxgs-unsplash.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <main className="max-w-6xl mx-auto px-12  md:pt-1 relative z-10">
        {/* Hero Section */}
        <section className="w-full h-[600px] flex flex-col md:flex-row items-center justify-center text-left bg-cover bg-center bg-no-repeat">
          {/* Left side — Text */}
          <motion.div
            className="relative z-10 space-y-6 text-center md:text-left"
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
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-indigo-600 hover:text-white transition"
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
            className="hidden md:block  mt-10 md:mt-0 md:ml-12 pointer-events-none"
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
                    : "text-indigo-600 border-indigo-600 hover:bg-indigo-100"
                }`}
              >
                {cat[0].toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
            {filteredProjects.map(
              ({ id, title, description, imageUrl, imageUrls, link }) => {
                const img = imageUrls?.[0] || imageUrl?.[0] || imageUrl || "";

                return (
                  <a
                    key={id}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
                  >
                    {img && (
                      <div className="overflow-hidden rounded-2xl">
                        <img
                          src={img}
                          alt={title}
                          className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-indigo-700 mb-2">
                        {title}
                      </h3>
                      <p className="text-base text-gray-800 line-clamp-4">
                        {description}
                      </p>
                    </div>
                  </a>
                );
              }
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
