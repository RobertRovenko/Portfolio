import React, { useState } from "react";
import {
  Github,
  Linkedin,
  ArrowUpRight,
  Briefcase,
  Calendar,
  Code2,
  Sparkles,
  Trophy,
  Smartphone,
  Layers,
  ChevronDown,
  Maximize2,
  Minimize2,
  Target,
  Zap,
} from "lucide-react";

const careerSections = [
  {
    id: "google-play-apps",
    number: "01",
    title: "Mobile Game & App Publisher",
    company: "Google Play Store / QuizzyPop",
    duration: "2025 – 2026",
    highlight: "3 Live Apps • +20% Store Conv.",
    icon: Smartphone,
    overview:
      "Architected, built, and launched QuizzyPop (interactive mobile trivia) alongside 30 Day Fitness and FoodLens on Google Play. Led the end-to-end lifecycle—from original concept, UI design, and backend system architecture to monetization and user acquisition strategy.",
    challenge:
      "Gaining visibility in a crowded market required aggressive App Store Optimization (ASO)—refining metadata, designing high-converting visual assets, and optimizing store listings. On the backend, engineered a robust Supabase system for authentication, database storage, and seamless cross-device account synchronization.",
    impact:
      "Achieved a ~20% impression-to-install conversion rate on Google Play (significantly outperforming industry benchmarks), maintaining 60+ daily active users. Implemented recurring revenue via RevenueCat in-app purchases and Google AdMob. Boosted performance by refactoring state management, eliminating unnecessary re-renders, and shrinking app bundle sizes.",
    imageUrl: "/images/career/apppublisher.png",
    tags: [
      "React Native",
      "Supabase",
      "ASO Optimization",
      "RevenueCat",
      "AdMob",
      "Expo",
      "State Optimization",
    ],
  },
  {
    id: "xr-solutions",
    number: "02",
    title: "Lead iOS Developer",
    company: "XR Solutions",
    duration: "Nov 2023 – Apr 2024",
    highlight: "Apple Vision Pro & ARKit",
    icon: Sparkles,
    overview:
      "Joined as an iOS Developer and was rapidly promoted to Lead iOS Developer to architect spatial augmented reality software for Apple Vision Pro using SwiftUI, ARKit, and RealityKit.",
    challenge:
      "Building on a brand-new, unreleased spatial computing platform with limited documentation required hardware research, writing technical documentation, and integrating complex sensors like LiDAR. Collaborated closely with the UX team and Product Owner, acting as a technical bridge while managing customer testing feedback.",
    impact:
      "Shipped a fully functional application on schedule, securing early market entry into spatial computing. Reduced overall app bundle size by 15% through smart API integration and performance tuning. Established scalable MVVM codebase architecture patterns and managed Agile sprints using Jira, Slack, and Figma.",
    imageUrl: "/images/career/xrsolutionswork.png",
    tags: [
      "iOS",
      "SwiftUI",
      "ARKit",
      "RealityKit",
      "Vision Pro",
      "Team Leadership",
      "Jira",
      "Figma",
    ],
  },
  {
    id: "quire",
    number: "03",
    title: "Fullstack Developer",
    company: "Quire",
    duration: "Jan 2023 – Jun 2023",
    highlight: "Delivered 3 Weeks Early",
    icon: Code2,
    overview:
      "Contract full-stack role in an agile team of four engineers, developing a hybrid mobile documentation application powered by React Native, Expo, Next.js, and MongoDB.",
    challenge:
      "Delivering a feature-rich, complex mobile application on a tight schedule without compromising code quality. Adopted Extreme Programming (XP) practices—specifically mandatory pair programming—over traditional Scrum to enforce continuous code review and clear internal communication.",
    impact:
      "Delivered the entire application three weeks ahead of schedule to high praise from the Product Owner. Pair programming served as a primary competitive advantage, catching bugs early, streamlining custom REST API integrations, and managing agile workflows via Trello and GitHub.",
    imageUrl: "/images/career/quire-portrait.png",
    tags: [
      "React Native",
      "Expo",
      "Next.js",
      "MongoDB",
      "REST APIs",
      "Extreme Programming",
      "Trello",
      "GitHub",
    ],
  },
  {
    id: "rovenkodev",
    number: "04",
    title: "Founder & Fullstack Developer",
    company: "RovenkoDev",
    duration: "Dec 2017 – Present",
    highlight: "Fullstack Web & Mobile Studio",
    icon: Briefcase,
    overview:
      "Founded an independent digital products studio specializing in production-grade mobile apps, web applications, and SaaS platforms built with React, Next.js, and TypeScript.",
    challenge:
      "Balancing custom client engineering, UI/UX design, full-stack architecture, secure payment gateway integrations for e-commerce platforms, and technical consulting for external teams.",
    impact:
      "Architected and deployed production web applications and SaaS platforms—including GitHub Analytics App, QR Code Sweden, and Job Board Sweden. Successfully delivered full-stack client solutions covering performant web architectures, custom API integrations, and UI overhauls.",
    imageUrl: "/images/career/rovenkodevwork.png",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Vercel",
      "Full Stack",
      "SaaS",
      "Technical Consulting",
    ],
  },
  {
    id: "mobile-dev",
    number: "05",
    title: "Mobile Application Degree",
    company: "Stockholm Institute of Technology",
    duration: "2022 – 2024",
    highlight: "2x Academic Scholarship Winner",
    icon: Trophy,
    overview:
      "Graduated with Academic Distinction from a specialized mobile degree program covering full-stack web, cross-platform mobile, native iOS (Swift), and native Android (Kotlin).",
    challenge:
      "Mastering native mobile development tools, backend engineering (Express, Node.js, MongoDB, Firebase), Object-Oriented Programming (OOP) in Java, and professional IDEs (VSCode, Xcode, Android Studio) under strict deadlines.",
    impact:
      "Awarded two major scholarships: 'Bästa Studieresultat' (Best Study Results) and 'Bästa Examensarbete' (Best Thesis Work). Built a rock-solid foundation in Git version control, Agile methodologies, and cross-platform architecture.",
    imageUrl: "/images/career/MobileAppDeveloper.jpg",
    tags: [
      "Swift",
      "Kotlin",
      "React Native",
      "TypeScript",
      "Tailwind",
      "Firebase",
      "Express",
      "Xcode",
      "Android Studio",
    ],
  },
  {
    id: "web-dev",
    number: "06",
    title: "Web Development Foundation",
    company: "Nordens Teknikerinstitut Gymnasiet",
    duration: "2017 – 2021",
    highlight: "Core Web & Engineering Basis",
    icon: Layers,
    overview:
      "A four-year technical foundation starting with vanilla HTML, CSS, and JavaScript, progressing into modern frameworks including React, Next.js, and Tailwind CSS.",
    challenge:
      "Transitioning from basic static web pages to dynamic, component-driven reactive applications while mastering responsive web standards and UI/UX design principles.",
    impact:
      "Established a continuous learning mindset and deep architectural foundation that made transitioning into mobile app frameworks and full-stack software development effortless.",
    imageUrl: "/images/career/WebDevelopment.jpg",
    tags: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "UI/UX Design",
      "Responsive Design",
    ],
  },
  {
    id: "game-dev",
    number: "07",
    title: "Game Development Specialization",
    company: "Self-Taught & Education",
    duration: "2017 – 2021",
    highlight: "Unity, Unreal Engine & 3D Art",
    icon: Code2,
    overview:
      "Deep dive into real-time game engines and interactive media across Unity (C#), Unreal Engine (Blueprints), and RPG Maker for 2D and 3D game production.",
    challenge:
      "Solving complex game engineering problems including physics calculations, collision detection, state machines, and low-level memory/resource management.",
    impact:
      "Expanded beyond code into digital visual arts—mastering Photoshop for 2D assets, as well as Blender and Maya for 3D modeling and animation. Performance techniques learned in game engines directly transferred to mobile app optimization.",
    imageUrl: "/images/career/GameDevelopment.jpg",
    tags: [
      "Unity",
      "C#",
      "Unreal Engine",
      "Blueprints",
      "Photoshop",
      "Blender",
      "Maya",
      "Game Design",
    ],
  },
  {
    id: "console-games",
    number: "08",
    title: "Programming Fundamentals",
    company: "Self-Taught Roots",
    duration: "Before 2017",
    highlight: "C# & Java Console Roots",
    icon: Code2,
    overview:
      "Where it all began: building text-based terminal games, interactive stories, adventure RPGs, and card games (such as Blackjack) in C# and Java.",
    challenge:
      "Learning computer science fundamentals, data structures, control flow, and algorithmic logic without relying on modern GUI frameworks or visual tools.",
    impact:
      "Forged a step-by-step problem-solving mindset and strong structural engineering foundation that powered every subsequent project—from mobile apps to spatial computing.",
    imageUrl: "/images/career/ConsoleCoding.png",
    tags: [
      "C#",
      "Java",
      "Data Structures",
      "Algorithms",
      "OOP",
      "Console Apps",
      "Problem Solving",
    ],
  },
];

export default function Career() {
  const [expandedIds, setExpandedIds] = useState(["google-play-apps"]);

  const toggleCard = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const expandAll = () => {
    setExpandedIds(careerSections.map((section) => section.id));
  };

  const collapseAll = () => {
    setExpandedIds([]);
  };

  const allExpanded = expandedIds.length === careerSections.length;

  return (
    <div className="bg-[#001220] text-white min-h-screen selection:bg-[#00cc8e] selection:text-[#001220] overflow-x-hidden relative font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap');
        .font-oswald {
          font-family: 'Oswald', sans-serif;
        }
      `}</style>

      {/* HERO HEADER */}
      <header className="relative w-full bg-[#001220] pt-20 sm:pt-28 lg:pt-24 z-20 pb-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-12">
          <div className="max-w-4xl space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.05] font-oswald">
                TECHNICAL CAREER TIMELINE
                <span className="block text-base sm:text-lg text-[#00cc8e] font-mono font-semibold mt-2 tracking-normal">
                  Robert Falkbäck
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed max-w-2xl font-normal">
              A chronological journey from early self-taught programming roots
              to leading mobile development, spatial computing on Apple Vision
              Pro, and publishing live mobile platforms.
            </p>

            {/* CTA & Social Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/robert-falkb%C3%A4ck/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00cc8e] text-[#001220] px-6 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-emerald-400 transition-colors shadow-lg shadow-[#00cc8e]/20 inline-flex items-center gap-2"
              >
                <Linkedin size={16} />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://github.com/RobertRovenko"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#00cc8e] hover:text-[#00cc8e] transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>

            {/* Core Stack Tags */}
            <div className="pt-4 space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-white/50">
                [ Focus Stack ]
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React Native",
                  "iOS / SwiftUI",
                  "Next.js / React",
                  "Supabase",
                  "Node.js",
                  "C# / Unity",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono border border-white/10 px-3 py-1 rounded-full text-[#00cc8e] bg-[#001a2b]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN TIMELINE CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-24 relative z-10">
        <div className="relative pl-6 sm:pl-10 lg:pl-14">
          {/* Continuous Vertical Spine Line */}
          <div className="absolute top-3 bottom-3 left-2.5 sm:left-4 lg:left-6 w-0.5 bg-gradient-to-b from-[#00cc8e] via-emerald-500/30 to-emerald-900/10" />

          {/* TOP TIMELINE CONTROLS & BADGE */}
          <div className="relative -left-6 sm:-left-10 lg:-left-14 mb-12 flex flex-wrap items-center justify-between gap-4 pl-2 sm:pl-4 pr-2">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-[#001220] border-2 border-[#00cc8e] z-10">
                <span className="w-2 h-2 rounded-full bg-[#00cc8e]" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#00cc8e] bg-[#001a2b] border border-[#00cc8e]/30 px-3 py-1 rounded-full shadow-md">
                PRESENT • 2026
              </span>
            </div>

            <button
              onClick={allExpanded ? collapseAll : expandAll}
              className="text-xs font-mono uppercase tracking-wider text-white/70 hover:text-[#00cc8e] bg-[#001a2b] border border-white/10 hover:border-[#00cc8e]/40 px-3.5 py-1.5 rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              {allExpanded ? (
                <>
                  <Minimize2 size={13} />
                  <span>Collapse All</span>
                </>
              ) : (
                <>
                  <Maximize2 size={13} />
                  <span>Expand All Milestones</span>
                </>
              )}
            </button>
          </div>

          {/* TIMELINE CARDS LIST */}
          <div className="space-y-8 sm:space-y-12">
            {careerSections.map((item) => {
              const Icon = item.icon;
              const isExpanded = expandedIds.includes(item.id);

              return (
                <div key={item.id} className="relative group">
                  {/* Timeline Node Ring */}
                  <button
                    onClick={() => toggleCard(item.id)}
                    className={`absolute -left-[31px] sm:-left-[47px] lg:-left-[63px] top-6 w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-300 font-mono text-xs font-bold flex items-center justify-center z-10 cursor-pointer ${
                      isExpanded
                        ? "bg-[#00cc8e] text-[#001220] border-2 border-[#00cc8e] scale-105"
                        : "bg-[#001220] border-2 border-[#00cc8e] text-[#00cc8e] group-hover:scale-110"
                    }`}
                    title={isExpanded ? "Collapse section" : "Expand section"}
                  >
                    {item.number}
                  </button>

                  {/* Horizontal Connector Line */}
                  <div
                    className={`absolute -left-[18px] sm:-left-[24px] lg:-left-[32px] top-9 w-4 sm:w-6 lg:w-8 h-px transition-colors duration-300 ${
                      isExpanded
                        ? "bg-[#00cc8e]"
                        : "bg-gradient-to-r from-[#00cc8e] to-white/10"
                    }`}
                  />

                  {/* CARD SURFACE */}
                  <div
                    className={`w-full bg-[#001a2b] border border-white/10 rounded-2xl sm:rounded-3xl transition-all duration-300 relative overflow-hidden shadow-xl ${
                      isExpanded
                        ? "p-6 sm:p-10 lg:p-12"
                        : "hover:border-white/20 p-6 sm:p-8"
                    }`}
                  >
                    {/* CARD HEADER */}
                    <div
                      onClick={() => toggleCard(item.id)}
                      className="cursor-pointer group/header select-none"
                    >
                      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 gap-4">
                        <div className="flex items-center gap-3">
                          <span
                            className={`h-2.5 w-2.5 rounded-full transition-colors ${
                              isExpanded ? "bg-[#00cc8e]" : "bg-white/40"
                            }`}
                          />
                          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#00cc8e] font-mono">
                            <Calendar
                              size={13}
                              className="inline mr-1.5 -mt-0.5"
                            />
                            {item.duration}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          {item.highlight && (
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#00cc8e] font-medium bg-[#001220] px-3.5 py-1 rounded-full border border-white/10">
                              <Icon size={15} />
                              <span>{item.highlight}</span>
                            </div>
                          )}

                          {/* Chevron Button */}
                          <div
                            className={`w-8 h-8 rounded-full border transition-all duration-300 flex items-center justify-center ${
                              isExpanded
                                ? "rotate-180 bg-[#00cc8e] text-[#001220] border-[#00cc8e] group-hover/header:bg-emerald-300 group-hover/header:border-emerald-300 group-hover/header:text-[#001220]"
                                : "bg-[#001220] text-white/70 border-white/10 group-hover/header:border-[#00cc8e] group-hover/header:text-[#00cc8e]"
                            }`}
                          >
                            <ChevronDown size={18} />
                          </div>
                        </div>
                      </div>

                      {/* Header Title & Short Overview */}
                      <div className="pt-6">
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight font-oswald uppercase group-hover/header:text-[#00cc8e] transition-colors">
                          {item.title}
                        </h2>
                        <p className="text-base sm:text-lg text-[#00cc8e] font-semibold mt-1 font-mono">
                          {item.company}
                        </p>
                        <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-normal mt-3">
                          {item.overview}
                        </p>
                      </div>
                    </div>

                    {/* EXPANDABLE CONTENT AREA */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100 pt-6 border-t border-white/10 mt-6"
                          : "grid-rows-[0fr] opacity-0 overflow-hidden"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch py-2">
                          {/* Narrative Column - Dictates row height */}
                          <div className="lg:col-span-7 space-y-4">
                            {/* Challenge Block */}
                            <div className="bg-[#001220]/80 rounded-2xl p-5 sm:p-6 border border-white/10 space-y-2">
                              <div className="flex items-center gap-2 text-[#00cc8e]">
                                <Target size={15} />
                                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                                  Challenge & Approach
                                </span>
                              </div>
                              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
                                {item.challenge}
                              </p>
                            </div>

                            {/* Impact Block */}
                            <div className="bg-[#001220]/80 rounded-2xl p-5 sm:p-6 border border-white/10 space-y-2">
                              <div className="flex items-center gap-2 text-emerald-400">
                                <Zap size={15} />
                                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                                  Impact & Results
                                </span>
                              </div>
                              <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
                                {item.impact}
                              </p>
                            </div>
                          </div>

                          {/* Image Column - Natural Aspect Ratio, Zero Clipping */}
                          {item.imageUrl && (
                            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
                              <div className="w-full lg:absolute lg:inset-0 flex items-center justify-center lg:justify-end">
                                <img
                                  src={item.imageUrl}
                                  alt={item.title}
                                  className="w-auto h-auto max-w-full max-h-[280px] sm:max-h-[360px] lg:max-h-full object-contain rounded-2xl border border-white/10 shadow-lg bg-[#001220]/50 block"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* CARD FOOTER */}
                    <div className="flex flex-wrap items-center justify-between pt-6 border-t border-white/10 mt-6 gap-4">
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono border border-white/10 px-3 py-1 rounded-full text-[#00cc8e] bg-[#001220]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Expand / Close Trigger CTA */}
                      <button
                        onClick={() => toggleCard(item.id)}
                        className="text-xs text-white/60 hover:text-[#00cc8e] font-mono uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>
                          {isExpanded
                            ? "[ Less Details ]"
                            : "[ Explore Deep Dive ]"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOTTOM TIMELINE END BADGE */}
          <div className="relative -left-6 sm:-left-10 lg:-left-14 mt-16 flex items-center gap-3 pl-2 sm:pl-4">
            <div className="w-6 h-6 rounded-full bg-[#001220] border-2 border-white/30 flex items-center justify-center z-10">
              <span className="w-2 h-2 rounded-full bg-white/40" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 bg-[#001a2b] border border-white/10 px-3 py-1 rounded-full">
              ORIGINS • BEFORE 2017
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
