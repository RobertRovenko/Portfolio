import { Github, Linkedin, ArrowRight, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

// Career sections data with narrative-focused content
const careerSections = [
  {
    id: "quizzypop",
    title: "Mobile Game Developer",
    company: "QuizzyPop",
    duration: "2025 – 2026",
    type: "",
    sections: [
      {
        heading: "Project Overview",
        content:
          "I built and launched QuizzyPop, a mobile quiz game on Google Play. This project was an end-to-end venture—from concept and development through monetization and user acquisition optimization.",
      },
      {
        heading: "Challenge & Approach",
        content:
          "The challenge was gaining visibility in a crowded mobile gaming market. I tackled this through App Store Optimization (ASO), strategically refining the app's metadata, creating compelling visual assets, and optimizing the store listing structure. On the backend, I built a robust system using Supabase to handle authentication, data storage, and cross-device synchronization so players could pick up where they left off.",
      },
      {
        heading: "Impact & Results",
        content:
          "The ASO efforts paid off: I achieved approximately 20% conversion rate from Google Play Store impressions to installs—significantly above industry averages. The game now maintains 60+ daily active users. I also implemented monetization through RevenueCat and Google AdMob, creating sustainable revenue streams. Throughout development, I optimized app performance by reducing unnecessary re-renders, refactoring state management, and decreasing bundle size.",
      },
    ],
    imageUrl: "/images/career/quizzypop.png",
    tags: [
      "React Native",
      "Supabase",
      "Mobile Games",
      "ASO Optimization",
      "Monetization",
    ],
  },
  {
    id: "xr-solutions",
    title: "Lead iOS Developer",
    company: "XR Solutions",
    duration: "November 2023 - April 2024",
    type: "Lead Developer",
    sections: [
      {
        heading: "Project Overview",
        content:
          "I joined XR Solutions as an iOS developer and was quickly promoted to Lead iOS Developer. The role involved building innovative augmented reality software for Apple Vision Pro, a newly released platform with limited documentation and a steep learning curve.",
      },
      {
        heading: "Challenge & Approach",
        content:
          "The core challenge was architecting an iOS application from scratch using cutting-edge technologies—SwiftUI, ARKit, and RealityKit—while maximizing Vision Pro's hardware capabilities like LiDAR integration. I collaborated closely with the UX design team and Product Owner to translate requirements into performant, scalable code. Beyond development, I conducted hardware research, wrote technical documentation, and managed customer testing feedback to continuously refine the product.",
      },
      {
        heading: "Impact & Results",
        content:
          "I delivered a fully functional iOS app that shipped on schedule, enabling the company to enter the emerging XR market. I reduced app size by 15% through smart API integration and targeted performance optimization, improving load times and user experience. I also established MVVM architecture patterns to ensure the codebase remained maintainable as future developers joined the project. Across all efforts, I collaborated in an Agile environment using Jira, Slack, and Figma.",
      },
    ],
    imageUrl: "/images/career/xrsolutionswork.png",
    tags: ["iOS", "SwiftUI", "ARKit", "Vision Pro", "Team Leadership"],
  },
  {
    id: "rovenkodev",
    title: "Founder & Fullstack Developer",
    company: "RovenkoDev",
    duration: "December 2017 – Present",
    type: "Founder",
    sections: [
      {
        heading: "Business Overview",
        content:
          "I founded RovenkoDev as a platform to design, develop, and launch high-quality digital products while continuously refining my fullstack development skills. Over the years, I've built a diverse portfolio spanning mobile apps, web applications, and SaaS solutions—all with a focus on scalability, user experience, and clean architecture.",
      },
      {
        heading: "Notable Products",
        content:
          "My flagship project is 30 Day Fitness, a fitness tracking app that became a top-selling fitness app on the Google Play Store. This success earned me the Bästa Examensarbete (Best Thesis Work) scholarship. Beyond this, I've developed custom e-commerce platforms for clients with secure payment integrations and robust backends, as well as scalable SaaS applications designed to streamline business operations.",
      },
      {
        heading: "Services & Expertise",
        content:
          "As an independent developer, I offer a full range of services: custom web and mobile development using React, React Native, and TypeScript; code optimization and bug fixes for existing projects; UI/UX improvements and feature development; and technical consulting to help other teams architect scalable solutions. I've worked with clients across different industries, translating their ideas into production-ready applications.",
      },
    ],
    imageUrl: "/images/career/rovenkodevwork.png",
    tags: ["React", "React Native", "Full Stack", "Entrepreneurship", "SaaS"],
  },
  {
    id: "quire",
    title: "Fullstack Developer",
    company: "Quire",
    duration: "January 2023 - June 2023",
    type: "Contract",
    sections: [
      {
        heading: "Project Overview",
        content:
          "I joined Quire as a Fullstack Developer in a collaborative team of four engineers. We were building a hybrid mobile documentation application using React Native and Expo on the frontend, with a Next.js backend and MongoDB data layer.",
      },
      {
        heading: "Challenge & Approach",
        content:
          "Our challenge was delivering a complex feature-rich application quickly while maintaining high code quality. We adopted Extreme Programming (XP) practices, including mandatory pair programming, which forced frequent communication and continuous code review. This approach proved significantly more effective than traditional Scrum. I designed and implemented REST APIs that supported core app features and efficient data handling, managed agile workflows using Trello and GitHub, and worked closely with my teammates through constant collaboration.",
      },
      {
        heading: "Impact & Results",
        content:
          "Despite the project's complexity, we delivered the entire application three weeks ahead of schedule—a remarkable achievement that earned positive feedback from the Product Owner and recognition for the team's productivity. The pair programming approach, initially an experiment, became our competitive advantage, catching bugs early and ensuring every line of code was understood by multiple team members. This contract reinforced how effective collaboration and communication can accelerate delivery without sacrificing quality.",
      },
    ],
    imageUrl: "/images/career/quire-portrait.png",
    tags: [
      "React Native",
      "Next.js",
      "MongoDB",
      "Agile",
      "Extreme Programming",
    ],
  },

  {
    id: "mobile-dev",
    title: "Mobile App Development Degree",
    company: "Stockholm Institute of Technology",
    duration: "2022 – 2024",
    type: "Education",
    sections: [
      {
        heading: "Program Focus",
        content:
          "I completed a specialized Mobile Application Development degree with a comprehensive curriculum spanning both iOS and Android platforms. The program emphasized practical, hands-on experience with modern development tools and methodologies rather than just theory.",
      },
      {
        heading: "Technical Foundation",
        content:
          "I developed expertise across the full stack: web technologies (HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind), mobile frameworks (React Native, Node.js), native development (Swift for iOS, Kotlin for Android), and backend systems (Express, MongoDB, Firebase). I built a strong foundation in Object-Oriented Programming (OOP) using Java and gained proficiency with professional development tools including VSCode, Xcode, and Android Studio.",
      },
      {
        heading: "Recognition & Outcomes",
        content:
          "I graduated with academic distinction and received two scholarships: Bästa Studieresultat (Best Study Results) and Bästa Examensarbete (Best Thesis Work) for my final project. Throughout the program, I developed expertise in agile methodologies, version control with Git/GitHub, and professional development practices. The degree equipped me with both the technical skills and professional mindset needed for a career building production-quality applications.",
      },
    ],
    imageUrl: "/images/career/MobileAppDeveloper.jpg",
    tags: ["React", "Swift", "Kotlin", "Full Stack", "Agile"],
  },
  {
    id: "web-dev",
    title: "Web Development Foundation",
    company: "Nordens Teknikerinstitut Gymnasiet",
    duration: "2017 – 2021",
    type: "Education",
    sections: [
      {
        heading: "Foundation Years",
        content:
          "I began my programming journey with a solid foundation in web development fundamentals: HTML, CSS, and JavaScript. These core technologies provided the building blocks for everything I've built since.",
      },
      {
        heading: "Evolution to Modern Tech",
        content:
          "As the program progressed, I advanced to modern frameworks and techniques, learning React, Next.js, and Tailwind CSS. Beyond technical skills, I developed expertise in frontend design principles, focusing on user experience and visual design. I created numerous projects demonstrating proficiency in responsive design and modern web standards, learning to think about how code translates to real user experiences.",
      },
      {
        heading: "Mindset & Growth",
        content:
          "These four years established a continuous learning mindset that has remained central to my development career. The ability to quickly absorb new technologies and frameworks has enabled me to adapt as the web development landscape evolved, from vanilla JavaScript to React to mobile development and beyond.",
      },
    ],
    imageUrl: "/images/career/WebDevelopment.jpg",
    tags: ["HTML/CSS", "JavaScript", "React", "UI/UX"],
  },
  {
    id: "game-dev",
    title: "Game Development Specialization",
    company: "Self-Taught & Education",
    duration: "2017 – 2021",
    type: "Education",
    sections: [
      {
        heading: "Multi-Engine Expertise",
        content:
          "During my earlier education years, I developed a specialized interest in game development, learning multiple engines and tools: Unity (using C#), Unreal Engine (with Blueprints), and RPG Maker. This broadened my understanding of different development paradigms and architectural patterns.",
      },
      {
        heading: "Game Design & Programming",
        content:
          "I built a diverse portfolio of 2D and 3D games, developing proficiency in C# scripting and game-specific programming challenges like physics, collision detection, and state management. My game development experience taught me about performance optimization and resource management—skills directly transferable to mobile app development.",
      },
      {
        heading: "Design & Visual Skills",
        content:
          "Recognizing that great games require more than just code, I expanded my skill set to include graphic design. I became proficient in Photoshop for digital art and game assets, and learned Blender and Maya for 3D modeling and in-game visuals. This combination of programming and design expertise enabled me to create more immersive gaming experiences and understand the full product development cycle.",
      },
    ],
    imageUrl: "/images/career/GameDevelopment.jpg",
    tags: ["Unity", "C#", "3D Art", "Game Design", "Blender"],
  },
  {
    id: "console-games",
    title: "Programming Fundamentals",
    company: "Self-Taught",
    duration: "Before 2017",
    type: "Foundation",
    sections: [
      {
        heading: "Where It All Started",
        content:
          "My programming journey began with text-based console games in C# and Java. These early projects—interactive stories, adventure games, RPGs, and card games like Blackjack—might sound simple, but they ignited my passion for coding and problem-solving.",
      },
      {
        heading: "Core Computer Science",
        content:
          "Despite their simplicity, console projects provided essential foundation in programming logic, data structures, and algorithmic thinking. I learned to think step-by-step about how to break complex problems into manageable pieces, design data structures to represent game state, and implement algorithms to create engaging gameplay.",
      },
      {
        heading: "Foundation to Future",
        content:
          "This foundation proved invaluable. The problem-solving mindset and core programming principles from those early console games transferred directly to every subsequent project—from mobile apps to XR software. Looking back, these humble text-based games set the trajectory for everything that followed.",
      },
    ],
    imageUrl: "/images/career/ConsoleCoding.png",
    tags: ["C#", "Java", "Programming", "Fundamentals", "Problem-Solving"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Career() {
  return (
    <div className="relative bg-white min-h-screen">
      <main className="relative z-10 max-w-6xl mx-auto pt-40 md:pt-48 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section
          className="mb-32 md:mb-48"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Main Heading */}
              <div>
                <h1 className="text-5xl md:text-6xl font-black text-slate-700 leading-tight">
                  Work Experience
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                Frontend and mobile app developer specializing in translating
                design into scalable, high-performance interfaces. Every project
                tells a story of solving real problems and delivering results.
              </p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 pt-2"
                variants={itemVariants}
              >
                <motion.a
                  href="https://www.linkedin.com/in/robert-falkb%C3%A4ck/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center gap-2 group"
                >
                  <Linkedin size={18} />
                  LinkedIn
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.a>

                <motion.a
                  href="https://github.com/RobertRovenko"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 border-2 border-slate-300 text-slate-900 font-semibold rounded-full hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Github size={18} />
                  GitHub
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative hidden md:flex items-center justify-center"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-white rounded-2xl opacity-30 blur-2xl"></div>
              <img
                src="/images/career/workingillustration.avif"
                alt="Developer at work"
                className="relative w-3/4 h-auto object-contain drop-shadow-lg rounded-3xl"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Timeline/Career Sections */}
        <motion.section
          className="space-y-12 md:space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {careerSections.map((section, idx) => (
            <CareerCard key={section.id} section={section} index={idx} />
          ))}
        </motion.section>
      </main>
    </div>
  );
}

function CareerCard({ section, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        {/* Card */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Image */}
            {section.imageUrl && (
              <div
                className={`relative md:col-span-2 bg-white overflow-hidden flex items-center justify-center min-h-64 md:min-h-96 rounded-2xl ${
                  isEven ? "md:order-2" : ""
                }`}
              >
                <motion.img
                  src={section.imageUrl}
                  alt={section.title}
                  className="w-full h-full object-contain p-4 md:p-6 group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  whileInView={{ scale: 1 }}
                  initial={{ scale: 0.95 }}
                />
                <div className="absolute inset-0 pointer-events-none"></div>
              </div>
            )}

            {/* Content */}
            <div
              className={`md:col-span-3 p-6 md:p-10 flex flex-col justify-center space-y-6 ${isEven ? "md:order-1" : ""}`}
            >
              {/* Title & Company */}
              <div>
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {section.title}
                </motion.h3>
                <motion.p
                  className="text-lg font-semibold text-blue-600 mt-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  {section.company}
                </motion.p>
              </div>

              {/* Duration */}
              <motion.p
                className="text-sm text-slate-500 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {section.duration}
              </motion.p>

              {/* Narrative Sections */}
              <motion.div
                className="space-y-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                {section.sections.map((sec, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                      {sec.heading}
                    </h4>
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                      {sec.content}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Tags */}
              <motion.div
                className="flex flex-wrap gap-2 pt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {section.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
