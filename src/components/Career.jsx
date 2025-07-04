import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

// Mobile detection hook

// Career sections data
const careerSections = [
  {
    id: "xr-solutions",
    title: "Lead Fullstack iOS Developer @XRSolutions",
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
    imageUrl: "/images/career/xrsolutionswork.png",
  },
  {
    id: "rovenkodev",
    title: "Founder & Fullstack Developer @rovenkodev",
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
    imageUrl: "/images/career/rovenkodevwork.png",
  },
  {
    id: "quire",
    title: "Fullstack Developer Contract @Quire",
    duration: "January 2023 - June 2023",
    paragraphs: [
      "Worked onsite as a Fullstack Developer at Quire, collaborating in a team of four to develop a hybrid mobile app using React Native and Expo.",
      "Followed a detailed list of requirements provided by the Product Owner, ensuring the final product matched the client’s vision and functional needs.",
      "Utilized Trello for agile project management and GitHub for version control, streamlining task assignments, collaboration, and progress tracking.",
      "Applied Extreme Programming (XP) practices to boost team productivity and maintain high code quality through pair programming and frequent communication.",
      "Built backend functionality using Next.js and MongoDB, designing and implementing REST APIs to support core app features and efficient data handling.",
      "Successfully delivered the entire project 3 weeks ahead of schedule, receiving positive feedback from the Product Owner for both quality and efficiency.",
    ],
    imageUrl: "/images/career/quire-portrait.png",
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
  return (
    <div className="relative bg-white font-sans text-gray-900 min-h-screen">
      <main className="max-w-7xl mx-auto pt-40 md:pt-20 md:pb-20 pb-10 relative z-10 px-4 sm:px-8">
        {/* Hero Section */}
        <section className="w-full flex flex-col px-12 md:flex-row items-center justify-center h-auto md:h-[500px] gap-8 md:gap-0 mb-16 md:mb-0">
          {/* Left side — Text */}
          <div className="relative z-10 flex-1 space-y-6 text-center bg-white md:text-left">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              Work Experience
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700">
              Learn more about me on my LinkedIn and Github!
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <motion.a
                  href="https://www.linkedin.com/in/robert-falkb%C3%A4ck/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition"
                >
                  <Linkedin size={16} /> LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/RobertRovenko"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold bg-white flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition"
                >
                  <Github size={16} /> GitHub
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Right side — Static Phone */}
          <div className="mt-10 md:mt-0 md:ml-12 pointer-events-none">
            <img
              src="/images/career/workingillustration.avif"
              alt="App Preview"
              className="w-[250px] h-auto object-contain"
            />
          </div>
        </section>

        {/* Career Sections */}
        {careerSections.map(
          ({ id, title, duration, paragraphs, imageUrl }, idx) => (
            <section
              key={id}
              id={id}
              className="w-full mb-24 px-4 sm:px-6 md:px-12"
            >
              <div
                className={`w-full max-w-screen-lg mx-auto flex flex-col md:flex-row items-center gap-12 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {imageUrl && (
                  <div className="w-full max-w-md overflow-hidden rounded-2xl ">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="max-w-xl space-y-3">
                  <h2 className="text-3xl font-bold text-indigo-600 break-words">
                    {title}
                  </h2>
                  <p className="text-indigo-500 italic">{duration}</p>
                  {paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-lg text-gray-700 leading-relaxed break-words"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )
        )}
      </main>
    </div>
  );
}
