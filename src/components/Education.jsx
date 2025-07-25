import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StaticParticles from "./StaticParticles.tsx";

// Reusable Article component
function Article({ article, imageWrapperClassName, subtitle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center md:text-left space-y-4 bg-white"
    >
      <div className={imageWrapperClassName}>
        <img
          src={article.imageUrl}
          alt={getAltText(article.title)}
          className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-300 transform hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Subtitle under image */}
      {subtitle && (
        <div className="text-center text-gray-800 font-semibold text-lg mt-4 mb-2 border-t border-gray-300 pt-2">
          {subtitle}
        </div>
      )}

      <div className="max-w-md space-y-5">
        <h3 className="text-3xl font-bold text-gray-900 leading-snug">
          {article.title}
        </h3>
        <div className="text-gray-800 leading-relaxed text-lg tracking-wide space-y-2 text-left">
          {article.content.split("\n").map((line, idx) => {
            const trimmed = line.trim();
            const isTitle = trimmed.startsWith("#");

            if (trimmed === "") {
              return <div key={idx} className="h-3" />;
            }

            return (
              <p
                key={idx}
                className={
                  isTitle ? "font-semibold text-gray-900 mt-3" : "text-gray-700"
                }
              >
                {isTitle ? trimmed.replace(/^#/, "") : trimmed}
              </p>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
function getAltText(title) {
  if (typeof title === "string") return title;
  if (typeof title === "object" && title.props) {
    // Simple heuristic: flatten children strings if possible
    return React.Children.toArray(title.props.children)
      .filter((child) => typeof child === "string")
      .join(" ");
  }
  return "Image"; // fallback alt text
}

export default function EducationPage() {
  return (
    <div className="relative font-sans bg-white">
      <main className="max-w-6xl mx-auto px-12 pt-40 md:pt-20 md:pb-20 pb-10 relative z-10">
        {/* Hero Section */}
        <section className="w-full flex flex-col md:flex-row items-center justify-center h-auto md:h-[500px] gap-8 md:gap-0 mb-40 md:mb-0">
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
              className="text-5xl sm:text-6xl font-bold"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
            >
              Education, Diplomas and Certificates
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-gray-700"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
            >
              A curated journey of learning, innovation, and excellence.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/education/eduill.jpg"
              alt="Education Illustration"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto object-contain"
            />
          </motion.div>
        </section>

        {/* University & High School */}
        <section className="space-y-16 bg-white">
          <h2 className="text-3xl font-bold border-b pb-1 border-gray-200">
            Education
          </h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <Article
                article={{
                  title: "Stockholms Tekniska Institut",
                  imageUrl: "/images/education/stilogo.png",
                  imageClassName: "", // consistent
                  content: `
#App Developer

#Hybrid App Development
React Native, JavaScript TypeScript, node.js, Expo Go, 

#Native Android App Development
Android Studio, Kotlin, Java, Jetpack Compose

#Native iOS App Development 
X-Code, SwiftUI, Storyboard, Swift

#Web App Development
HTML, CSS, JavaScript, Next.js, TypeScript, React

#Project Methodology
Scrum, Kanban, Extreme Programming

#Extra
UX/UI design, Figma, AJAX, HTTP, JSON, REST
Kotlin, Java, Swift, C#, .NET
Git, GitHub, Firebase, API, Backend
`,
                }}
                imageWrapperClassName="w-full h-40 flex items-center justify-center"
                subtitle="University"
              />
            </div>

            <div className="flex-1">
              <Article
                article={{
                  title: "Nordens Teknikerinstitut",
                  imageUrl: "/images/education/ntilogo.jpg",
                  imageClassName: "",
                  content: `
                  #Software Engineering

#Game Development
Visual Studio C#, Unity, Unreal Engine, RPG maker

#Web app development
HTML, CSS, JavaScript

#Extra
Animation, Digital Creation, Interface Design
Linux, Virtual Machine, Ubuntu
AR, VR
CAD, Maya, Blender

#Other Subjects
English 7, Mathematics 4, Programming 1 and 2
Computer Science, Entrepreneurship, Technology

`,
                }}
                imageWrapperClassName="w-full h-40 flex items-center justify-center"
                subtitle="High School"
              />
            </div>
          </div>
        </section>

        {/* Scholarships */}
        <section className="space-y-16 pt-24">
          <h2 className="text-3xl font-bold border-b pb-1 border-gray-200">
            Scholarships
          </h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <Article
                article={{
                  title: (
                    <>
                      Scholarship STI 2024
                      <br />
                      Best Academic Performance
                    </>
                  ),
                  imageUrl: "/images/education/diplom2.jpg",
                  imageClassName: "",
                  content: `Achieved the highest possible grade, excelling well above all peers throughout the program.`,
                }}
                imageWrapperClassName="w-full h-100 flex items-center justify-center"
              />
            </div>
            <div className="flex-1">
              <Article
                article={{
                  title: (
                    <>
                      Scholarship STI 2024
                      <br />
                      Best Thesis
                    </>
                  ),
                  imageUrl: "/images/education/diplom1.jpg",
                  imageClassName: "",
                  content: `Developed the mobile app “30 Day Fitness App” and released a study on how/if a solo developer can design, code and publish a mobile app.`,
                }}
                imageWrapperClassName="w-full h-100 flex items-center justify-center"
              />
            </div>
          </div>
        </section>
        <section className="space-y-16 pt-24">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <Article
                article={{
                  title: (
                    <>
                      Software Developer
                      <br />
                      Stockholms Tekniska Institut
                    </>
                  ),
                  imageUrl: "/images/education/STIex.png",
                  content: `Graduated with an Application/Software Development diploma
Received two scholarships for Best Thesis & Academic Achievement.`,
                }}
                imageWrapperClassName="w-full h-100 flex items-center justify-center border-2 border-blue-800"
                subtitle=" Higher Education Diploma"
              />
            </div>

            <div className="flex-1">
              <Article
                article={{
                  title: (
                    <>
                      Technology/Engineering <br /> Nordens Teknikerinstitut
                    </>
                  ),
                  imageUrl: "/images/education/NtiStud.jpg",
                  content: `Graduated from NTI with a diploma in Technology/Civil Engineering
Specialized in programming, software design, and game development`,
                }}
                imageWrapperClassName="w-full h-100 flex items-center justify-center"
                subtitle="High School Diploma"
              />
            </div>
          </div>
        </section>

        <section className="space-y-16 pt-24">
          <h2 className="text-3xl font-bold border-b pb-1 border-gray-200">
            Digital Marketing Certificate from Google
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-12 max-w-4xl mx-auto bg-white">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/education/gwd.jpg"
                alt="Google Digital Marketing"
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>

            <div className="flex-grow space-y-4">
              <h3 className="text-2xl font-semibold">
                Google Digital Marketing Certificate
              </h3>
              <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                Completed the "Fundamentals of Digital Marketing" by Google and
                The Open University. Skills gained: SEO, content marketing,
                digital analytics, advertising.
              </p>
            </div>
          </div>
        </section>

        {/* Entrepreneurship */}
        <section className="space-y-16 pt-24">
          <h2 className="text-3xl font-bold border-b pb-1 border-gray-200">
            Entrepreneurship
          </h2>
          <div className="flex flex-col md:flex-row gap-12">
            <Article
              article={{
                title: "Certificate in Entrepreneurship UF Company Launch",
                imageUrl: "/images/education/ufintyg.jpg",
                content: `Launched, operated, and liquidated my own UF company during the year.

Gained hands-on experience in entrepreneurship, business development, and operations.`,
              }}
              imageWrapperClassName="w-full h-100 rounded-lg overflow-hidden"
              containerClassName="flex flex-row items-start space-x-8 text-left"
            />
            <Article
              article={{
                title: "Exhibitor at UF Fair – Älvsjö 2019",
                imageUrl: "/images/education/utstuf.jpg",
                content: `Showcased my entrepreneurial project at Sweden’s largest UF fair—Älvsjö 2019.

Engaged with industry professionals and potential customers.`,
              }}
              imageWrapperClassName="w-full h-100 rounded-lg overflow-hidden"
              containerClassName="flex flex-row items-start space-x-8 text-left"
            />
          </div>
        </section>

        <section className="space-y-16 pt-24">
          <h2 className="text-3xl font-bold border-b pb-1 border-gray-200">
            Company Visits
          </h2>

          <div className="flex flex-col md:flex-row gap-y-12 ">
            <div className="flex-1">
              <Article
                article={{
                  title: "Visitor at King – Stockholm",
                  imageUrl: "/images/education/king.jpg",
                  imageClassName: "", // optional to add sizing here
                  content: "Visited the game company King in Stockholm.",
                }}
                imageWrapperClassName="w-full h-100 flex items-center justify-center"
                subtitle="Company Visit"
              />
            </div>

            <div className="flex-1">
              <Article
                article={{
                  title: "Visitor at Knowit – Stockholm",
                  imageUrl: "/images/education/knowit.png",
                  imageClassName: "",
                  content: "Visited Knowit in Stockholm.",
                }}
                imageWrapperClassName="w-full h-100 flex items-center justify-center"
                subtitle="Company Visit"
              />
            </div>

            <div className="flex-1">
              <Article
                article={{
                  title: "Visitor at Microsoft Office – San Francisco",
                  imageUrl: "/images/education/microsoft.jpg",
                  imageClassName: "",
                  content: "Visited Microsoft’s office in San Francisco, USA.",
                }}
                imageWrapperClassName="w-full h-100 flex items-center justify-center"
                subtitle="Company Visit"
              />
            </div>
          </div>
        </section>

        {/* Degrees & Diplomas */}
        <section className="space-y-16 pt-24">
          <h2 className="text-3xl font-bold border-b pb-1 border-gray-200">
            Degrees & Diplomas
          </h2>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <Article
                article={{
                  title: "Dirigerade Svenska Kungliga Filharmonikerna",
                  imageUrl: "/images/education/FilhaDip.jpg",
                  content: `Official diploma awarded for conducting the Royal Stockholm Philharmonic Orchestra at Stockholm Concert Hall.`,
                }}
                imageWrapperClassName="w-full h-100 flex items-center justify-center"
                subtitle="Music Award"
              />
            </div>
            <div className="flex-1">
              <a
                href="https://play.google.com/store/apps/details?id=com.rovenkodev.FitnessGuru"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Article
                  article={{
                    title: "30 Day Fitness App (Thesis Project)",
                    imageUrl: "/images/education/30dfqr.png",
                    content: `30 Day Fitness is a mobile app I developed as my thesis project — earned a scholarship and published on Google Play.`,
                  }}
                  imageWrapperClassName="w-[350px] h-[350px] flex items-center justify-center"
                  subtitle="Thesis Project"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
