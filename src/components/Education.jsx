import React, { useState, useEffect } from "react";

// Nav items placed outside the component to prevent ESLint hook dependency warnings
const navItems = [
  { id: "hero", label: "Intro" },
  { id: "sti", label: "STI" },
  { id: "scholarships", label: "Scholarships" },
  { id: "open-university", label: "Open University" },
  { id: "nti", label: "NTI" },
  { id: "uf", label: "UF" },
  { id: "philharmonic", label: "Philharmonic" },
  { id: "company-visits", label: "Company Visits" },
];

export default function Education() {
  const [hoveredDiploma, setHoveredDiploma] = useState(null);
  const [hoveredHonor, setHoveredHonor] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");

  // Robust IntersectionObserver to auto-highlight active section on scroll
  useEffect(() => {
    const visibleSections = new Set();

    const observerOptions = {
      root: null,
      rootMargin: "-5% 0px -50% 0px", // Trigger zone calibrated for tight top scroll margins
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target.id);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      // Highlight the first visible section matching navItems order
      const active = navItems.find((item) => visibleSections.has(item.id));
      if (active) {
        setActiveSection(active.id);
      }
    }, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#FAF9F6] text-stone-900 min-h-screen font-sans selection:bg-stone-900 selection:text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 pt-6 sm:pt-16 pb-28 sm:pb-40 space-y-20 sm:space-y-36">
        <header
          id="hero"
          className="w-full pb-4 sm:pb-8 pt-20 scroll-mt-20 sm:scroll-mt-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column: Heading & Intro */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-2xl font-serif text-slate-800">
                A curriculum vitae for{" "}
                <span className="font-semibold text-slate-950">
                  Robert Falkbäck
                </span>
              </p>

              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-serif text-slate-950 tracking-tight leading-[1.12] sm:leading-[1.08] font-normal">
                Education, Diplomas & <br></br>
                <span className="italic text-slate-600 block sm:inline">
                  Certificates
                </span>
              </h1>

              <p className="text-slate-600 text-base sm:text-xl font-serif italic font-light leading-relaxed max-w-2xl">
                A comprehensive journey of learning, innovation, and technical
                excellence.
              </p>
            </div>

            {/* Right Column: Image (Added lg:pt-6 to nudge down on desktop) */}
            {/* Right Column: Image */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end lg:pt-16">
              {/* Postcard Container */}
              <div className="group bg-white p-3 sm:p-4 rounded-sm border border-slate-200/80 shadow-md transition-all duration-500 ease-out lg:-rotate-2 lg:hover:rotate-0 lg:hover:-translate-y-2 lg:hover:shadow-2xl max-w-xs sm:max-w-sm w-full cursor-pointer">
                {/* Photo Frame */}
                <div className="overflow-hidden bg-slate-100">
                  <img
                    src="/images/education/hsexam.jpg"
                    alt="Graduation Ceremony"
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Postcard Caption */}
                <p className="mt-3 text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-widest text-center">
                  Graduation — Class of 2020
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* ================= 2. STI DIPLOMA ================= */}
        <section
          id="sti"
          className="py-12 sm:py-24 border-b border-slate-200 scroll-mt-4"
        >
          {/* Section Header */}
          <div className="flex items-center justify-between pb-4 sm:pb-6 mb-8 sm:mb-12 border-b border-slate-200 text-xs sm:text-sm uppercase tracking-wide text-slate-500">
            <span className="font-semibold text-slate-900">
              Higher Education Degree
            </span>
            <span>Stockholm, Sweden</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Column: Clean Paper Diploma Frame */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start order-2 lg:order-1">
              <div className="w-full max-w-sm group">
                <div className="relative aspect-[210/297] w-full bg-white border border-slate-200 shadow-sm transition-shadow duration-300 sm:group-hover:shadow-md">
                  <img
                    src="/images/education/STIex.png"
                    alt="Stockholms Tekniska Institut Degree Diploma"
                    className="w-full h-full object-contain p-2 bg-white"
                  />
                </div>
                <p className="mt-3 text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide text-center lg:text-left">
                  Degree certificate
                </p>
              </div>
            </div>

            {/* Right Column: Degree Details & Curriculum */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 uppercase tracking-wider">
                  <span className="font-semibold text-slate-900">
                    Higher Education Diploma
                  </span>
                  <span>2024</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-serif text-slate-950 tracking-tight leading-tight">
                  Degree in Software Development
                </h3>

                <div className="flex items-center gap-3 pt-1 sm:pt-2">
                  <img
                    src="/images/education/stilogo.png"
                    alt="STI Logo"
                    className="h-5 sm:h-6 w-auto object-contain grayscale opacity-80"
                  />
                  <span className="text-sm sm:text-base font-serif text-slate-700 font-medium">
                    Stockholms Tekniska Institut
                  </span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-slate-600 text-base sm:text-lg font-serif italic font-light leading-relaxed">
                  Graduated with specialization in mobile and software
                  engineering across cross-platform, native Android, and native
                  iOS architectures.
                </p>

                <div className="pl-3 sm:pl-4 border-l-2 border-slate-900 py-1 space-y-1">
                  <p className="text-[10px] sm:text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Academic Honors & Awards
                  </p>
                  <p className="text-xs sm:text-sm font-serif text-slate-800 leading-relaxed">
                    Recipient of two separate institutional scholarships for{" "}
                    <span className="italic font-semibold">Best Thesis</span>{" "}
                    and{" "}
                    <span className="italic font-semibold">
                      Academic Achievement
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-slate-200">
                <h4 className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide mb-4 sm:mb-6">
                  Core Curriculum & Technical Competencies
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-6">
                  <div className="space-y-1">
                    <h5 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Hybrid Mobile
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      React Native, TypeScript, JavaScript, Node.js, Expo Go
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h5 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Native Android
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Kotlin, Java, Android Studio, Jetpack Compose
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h5 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Native iOS
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Swift, SwiftUI, Xcode, Storyboard
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h5 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Web Engineering
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Next.js, React, TypeScript, HTML/CSS, REST APIs
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h5 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Backend & Tooling
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      C#, .NET, Firebase, Git, GitHub, Figma (UX/UI)
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h5 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Project Methodology
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Agile, Scrum, Kanban, Extreme Programming
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Scholarships Section */}
        <section
          id="scholarships"
          className="py-12 sm:py-24 border-b border-slate-200 scroll-mt-12 sm:scroll-mt-24"
        >
          <div className="flex items-center justify-between pb-4 sm:pb-6 mb-8 sm:mb-10 border-b border-slate-200 text-xs sm:text-sm uppercase tracking-wide text-slate-500">
            <span className="font-semibold text-slate-900">
              Academic Scholarships
            </span>
            <span>Stockholms Tekniska Institut · 2024</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7 pb-2 lg:pb-0">
              {/* Mobile Layout */}
              <div className="flex flex-col gap-8 lg:hidden">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-serif text-slate-950 tracking-tight leading-tight">
                      Best Academic Performance
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-serif italic font-light leading-relaxed">
                      Achieved the highest possible grade, excelling well above
                      all peers throughout the entire program.
                    </p>
                  </div>
                  <div className="w-full">
                    <div className="relative aspect-[210/297] w-full bg-white border border-slate-200 shadow-sm">
                      <img
                        src="/images/education/diplom2.jpg"
                        alt="Scholarship STI 2024 Best Academic Performance"
                        className="w-full h-full object-contain p-2 bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-serif text-slate-950 tracking-tight leading-tight">
                      Best Thesis
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-serif italic font-light leading-relaxed">
                      Developed the mobile app "30 Day Fitness App" and released
                      a study evaluating how a solo developer can design, code,
                      and publish a complete mobile application.
                    </p>
                  </div>
                  <div className="w-full">
                    <div className="relative aspect-[210/297] w-full bg-white border border-slate-200 shadow-sm">
                      <img
                        src="/images/education/diplom1.jpg"
                        alt="Scholarship STI 2024 Best Thesis"
                        className="w-full h-full object-contain p-2 bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:flex gap-8 w-full items-center justify-center">
                <div
                  className="flex-1 transition-all duration-700 ease-in-out"
                  onMouseEnter={() => setHoveredDiploma(1)}
                  onMouseLeave={() => setHoveredDiploma(null)}
                >
                  <div
                    className={`w-full transition-all duration-700 ease-in-out ${
                      hoveredDiploma === 2 ? "opacity-40 scale-95" : ""
                    } ${hoveredDiploma === 1 ? "scale-105 translate-x-4" : ""} ${
                      hoveredDiploma === 2 ? "-translate-x-4" : ""
                    }`}
                  >
                    <div className="relative aspect-[210/297] w-full bg-white border border-slate-200 shadow-sm transition-all duration-700 ease-in-out">
                      <img
                        src="/images/education/diplom2.jpg"
                        alt="Scholarship STI 2024 Best Academic Performance"
                        className="w-full h-full object-contain p-2 bg-white"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span
                        className={`text-[10px] uppercase tracking-wide transition-all duration-700 ease-in-out ${
                          hoveredDiploma === 1
                            ? "text-slate-900 font-bold"
                            : "text-slate-400"
                        }`}
                      >
                        Academic Excellence
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="flex-1 transition-all duration-700 ease-in-out"
                  onMouseEnter={() => setHoveredDiploma(2)}
                  onMouseLeave={() => setHoveredDiploma(null)}
                >
                  <div
                    className={`w-full transition-all duration-700 ease-in-out ${
                      hoveredDiploma === 1 ? "opacity-40 scale-95" : ""
                    } ${hoveredDiploma === 2 ? "scale-105 -translate-x-4" : ""} ${
                      hoveredDiploma === 1 ? "translate-x-4" : ""
                    }`}
                  >
                    <div className="relative aspect-[210/297] w-full bg-white border border-slate-200 shadow-sm transition-all duration-700 ease-in-out">
                      <img
                        src="/images/education/diplom1.jpg"
                        alt="Scholarship STI 2024 Best Thesis"
                        className="w-full h-full object-contain p-2 bg-white"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span
                        className={`text-[10px] uppercase tracking-wide transition-all duration-700 ease-in-out ${
                          hoveredDiploma === 2
                            ? "text-slate-900 font-bold"
                            : "text-slate-400"
                        }`}
                      >
                        Innovation Award
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="hidden lg:block lg:col-span-5 space-y-8 mt-6 lg:mt-0">
              <div
                className={`space-y-2 transition-all duration-700 ease-in-out cursor-pointer ${
                  hoveredDiploma === 2 ? "opacity-40 scale-95" : ""
                } ${hoveredDiploma === 1 ? "translate-x-2" : ""}`}
                onMouseEnter={() => setHoveredDiploma(1)}
                onMouseLeave={() => setHoveredDiploma(null)}
              >
                <h3
                  className={`text-2xl sm:text-3xl font-serif tracking-tight leading-tight transition-all duration-700 ease-in-out ${
                    hoveredDiploma === 1 ? "text-slate-900" : "text-slate-950"
                  }`}
                >
                  Best Academic Performance
                </h3>
                <p
                  className={`text-sm sm:text-base font-serif italic font-light leading-relaxed transition-all duration-700 ease-in-out ${
                    hoveredDiploma === 1 ? "text-slate-800" : "text-slate-600"
                  }`}
                >
                  Achieved the highest possible grade, excelling well above all
                  peers throughout the entire program.
                </p>
              </div>

              <div
                className={`space-y-2 pt-4 border-t border-slate-200 transition-all duration-700 ease-in-out cursor-pointer ${
                  hoveredDiploma === 1 ? "opacity-40 scale-95" : ""
                } ${hoveredDiploma === 2 ? "translate-x-2" : ""}`}
                onMouseEnter={() => setHoveredDiploma(2)}
                onMouseLeave={() => setHoveredDiploma(null)}
              >
                <h3
                  className={`text-2xl sm:text-3xl font-serif tracking-tight leading-tight transition-all duration-700 ease-in-out ${
                    hoveredDiploma === 2 ? "text-slate-900" : "text-slate-950"
                  }`}
                >
                  Best Thesis
                </h3>
                <p
                  className={`text-sm sm:text-base font-serif italic font-light leading-relaxed transition-all duration-700 ease-in-out ${
                    hoveredDiploma === 2 ? "text-slate-800" : "text-slate-600"
                  }`}
                >
                  Developed the mobile app "30 Day Fitness App" and released a
                  study evaluating how a solo developer can design, code, and
                  publish a complete mobile application.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 4. OPEN UNIVERSITY / GOOGLE CERTIFICATE ================= */}
        <section
          id="open-university"
          className="py-12 sm:py-24 border-b border-slate-200 scroll-mt-12 sm:scroll-mt-24"
        >
          <div className="flex items-center justify-between pb-4 sm:pb-6 mb-8 sm:mb-12 border-b border-slate-200 text-xs sm:text-sm uppercase tracking-wide text-slate-500">
            <span className="font-semibold text-slate-900">
              Exam Certificate
            </span>
            <span>The Open University</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-lg group">
                <div className="relative aspect-[297/210] w-full border border-slate-200 shadow-sm transition-shadow duration-300 sm:group-hover:shadow-md rounded-lg overflow-hidden">
                  <img
                    src="/images/education/gwd.jpg"
                    alt="Google Digital Marketing Certificate Document"
                    className="w-full h-full object-contain p-2 bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              <span className="inline-block text-[10px] sm:text-xs font-bold text-slate-700 bg-slate-100/90 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">
                Google Certificate · 2022
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-medium text-slate-900">
                Google Digital Marketing Certificate
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Completed the "Fundamentals of Digital Marketing" — a
                comprehensive program issued by Google and The Open University.
                The course covered essential digital marketing strategies,
                tools, and best practices for building an online presence and
                reaching target audiences effectively.
              </p>
              <div className="pt-2 border-t border-stone-100 space-y-1 sm:space-y-2">
                <p className="text-[10px] sm:text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Skills Gained
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  SEO (Search Engine Optimization), content marketing, digital
                  analytics, advertising, email marketing, social media
                  strategy, and customer engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 3. NTI DIPLOMA ================= */}
        <section
          id="nti"
          className="py-12 sm:py-24 border-b border-slate-200 scroll-mt-4"
        >
          <div className="flex items-center justify-between pb-4 sm:pb-6 mb-8 sm:mb-12 border-b border-slate-200 text-xs sm:text-sm uppercase tracking-wide text-slate-500">
            <span className="font-semibold text-slate-900">
              High School Degree
            </span>
            <span>Stockholm, Sweden</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 uppercase tracking-wider">
                  <span className="font-semibold text-slate-900">
                    High School Diploma
                  </span>
                  <span>2017 — 2020</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-serif text-slate-950 tracking-tight leading-tight">
                  Software Engineering & Technology
                </h3>

                <div className="flex items-center gap-3 pt-1 sm:pt-2">
                  <img
                    src="/images/education/ntilogo.png"
                    alt="NTI Gymnasiet Logo"
                    className="h-5 sm:h-6 w-auto object-contain"
                  />
                  <span className="text-sm sm:text-base font-serif text-slate-700 font-medium">
                    Nordens Teknikerinstitut (NTI)
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-600 text-base sm:text-lg font-serif italic font-light leading-relaxed">
                  Graduated from NTI with a diploma in Technology/Civil
                  Engineering. Specialized in object-oriented programming,
                  software design, and game development.
                </p>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-slate-200">
                <h4 className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide mb-4 sm:mb-6">
                  Core Curriculum & Technical Competencies
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-6">
                  <div className="space-y-1">
                    <h5 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Game Development
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Visual Studio C#, Unity Engine, Unreal Engine, RPG Maker
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h5 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Web Development
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      HTML, CSS, JavaScript
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h5 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Digital Creation & 3D
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Animation, Interface Design, CAD, Autodesk Maya, Blender,
                      AR/VR
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h5 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Systems & Environment
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Linux, Virtual Machine, Ubuntu
                    </p>
                  </div>

                  <div className="col-span-1 sm:col-span-2 space-y-1">
                    <h5 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Other Core Subjects
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      English 7, Mathematics 4, Programming 1 & 2, Computer
                      Science, Entrepreneurship, Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-start order-1 lg:order-2">
              <div className="w-full max-w-sm group">
                <div className="relative aspect-[210/297] w-full">
                  <img
                    src="/images/education/NtiStud.jpg"
                    alt="Nordens Teknikerinstitut Diploma Document"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="mt-3 text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide text-center lg:text-left">
                  Degree certificate
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* UF / Recognition & Honors Section */}
        <section
          id="uf"
          className="py-12 sm:py-24 border-b border-slate-200 scroll-mt-4"
        >
          <div className="flex items-center justify-between pb-4 sm:pb-6 mb-8 sm:mb-10 border-b border-slate-200 text-xs sm:text-sm uppercase tracking-wide text-slate-500">
            <span className="font-semibold text-slate-900">
              Recognition & Honors (UF)
            </span>
            <span>Special Recognition</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-start">
            {/* Royal Letter */}
            <div
              className={`space-y-3 sm:space-y-4 flex flex-col items-center text-center transition-all duration-500 ease-in-out ${
                hoveredHonor === 2 || hoveredHonor === 3
                  ? "md:opacity-40 md:scale-95"
                  : ""
              } ${hoveredHonor === 1 ? "md:scale-[1.02]" : ""}`}
              onMouseEnter={() => setHoveredHonor(1)}
              onMouseLeave={() => setHoveredHonor(null)}
            >
              <div className="w-full max-w-[360px] group">
                <div className="relative aspect-[210/297] w-full bg-white border border-slate-200 shadow-sm transition-all duration-500 ease-in-out sm:group-hover:shadow-md">
                  <img
                    src="/images/education/GraduationLetterFromPrincess.png"
                    alt="Royal Letter of Congratulations"
                    className="w-full h-full object-contain p-2 bg-white transition-all duration-500 ease-in-out"
                  />
                </div>
              </div>
              <div className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
                <span className="inline-block text-[10px] sm:text-xs font-mono font-bold text-slate-700 bg-slate-100/90 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded transition-all duration-500 ease-in-out">
                  Royal Letter
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-slate-900 transition-all duration-500 ease-in-out">
                  Letter of Congratulations
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed max-w-md transition-all duration-500 ease-in-out">
                  Congratulatory letter from Princess Victoria honoring students
                  graduating in 2020 during the Covid-19 pandemic.
                </p>
              </div>
            </div>

            {/* UF Launch Document */}
            <div
              className={`space-y-3 sm:space-y-4 flex flex-col items-center text-center transition-all duration-500 ease-in-out ${
                hoveredHonor === 1 || hoveredHonor === 3
                  ? "md:opacity-40 md:scale-95"
                  : ""
              } ${hoveredHonor === 2 ? "md:scale-[1.02]" : ""}`}
              onMouseEnter={() => setHoveredHonor(2)}
              onMouseLeave={() => setHoveredHonor(null)}
            >
              <div className="w-full max-w-[360px] group">
                <div className="relative aspect-[210/297] w-full bg-white border border-slate-200 shadow-sm transition-all duration-500 ease-in-out sm:group-hover:shadow-md">
                  <img
                    src="/images/education/ufdiploma.png"
                    alt="Certificate in Entrepreneurship UF Company Launch"
                    className="w-full h-full object-contain p-2 bg-white transition-all duration-500 ease-in-out"
                  />
                </div>
              </div>
              <div className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
                <span className="inline-block text-[10px] sm:text-xs font-mono font-bold text-slate-700 bg-slate-100/90 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded transition-all duration-500 ease-in-out">
                  UF Certificate
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-slate-900 transition-all duration-500 ease-in-out">
                  Certificate in Entrepreneurship
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed max-w-md transition-all duration-500 ease-in-out">
                  Launched, operated, and liquidated my own UF company during
                  the year. Gained hands-on experience in entrepreneurship,
                  business development, and operations.
                </p>
              </div>
            </div>

            {/* UF Trade Fair Photo */}
            <div
              className={`space-y-3 sm:space-y-4 flex flex-col items-center text-center transition-all duration-500 ease-in-out ${
                hoveredHonor === 1 || hoveredHonor === 2
                  ? "md:opacity-40 md:scale-95"
                  : ""
              } ${hoveredHonor === 3 ? "md:scale-[1.02]" : ""}`}
              onMouseEnter={() => setHoveredHonor(3)}
              onMouseLeave={() => setHoveredHonor(null)}
            >
              <div className="w-full max-w-[360px] group">
                <div className="relative aspect-[210/297] w-full bg-white border border-slate-200 shadow-sm transition-all duration-500 ease-in-out sm:group-hover:shadow-md rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/education/uf2019.jpg"
                    alt="Exhibitor at UF Fair – Älvsjö 2019"
                    className="w-full h-full object-contain p-4 transition-all duration-500 ease-in-out"
                  />
                </div>
              </div>
              <div className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
                <span className="inline-block text-[10px] sm:text-xs font-mono font-bold text-slate-700 bg-slate-100/90 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded transition-all duration-500 ease-in-out">
                  Trade Fair 2019
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-slate-900 transition-all duration-500 ease-in-out">
                  Exhibitor at UF Fair – Älvsjö 2019
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed max-w-md transition-all duration-500 ease-in-out">
                  Showcased my entrepreneurial project at Sweden's largest UF
                  fair—Älvsjö 2019. Engaged with industry professionals and
                  potential customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 5. ROYAL STOCKHOLM PHILHARMONIC ================= */}
        <section
          id="philharmonic"
          className="py-12 sm:py-24 border-b border-slate-200 scroll-mt-4"
        >
          <div className="flex items-center justify-between pb-4 sm:pb-6 mb-8 sm:mb-12 border-b border-slate-200 text-xs sm:text-sm uppercase tracking-wide text-slate-500">
            <span className="font-semibold text-slate-900">
              Diploma for Conducting Royal Stockholm Philharmonic
            </span>
            <span>Royal Stockholm Philharmonic</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-start">
            <div className="flex flex-col items-center text-center group">
              <div className="w-full max-w-[360px] transition-transform duration-300 sm:group-hover:scale-[1.02]">
                <div className="relative aspect-[210/297] w-full border border-slate-200 shadow-sm transition-shadow duration-300 sm:group-hover:shadow-md rounded-lg overflow-hidden">
                  <img
                    src="/images/education/FilhaDip.jpg"
                    alt="Royal Stockholm Philharmonic Diploma"
                    className="w-full h-full object-contain p-2 bg-white"
                  />
                </div>
              </div>
              <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                <span className="inline-block text-[10px] sm:text-xs font-bold text-slate-700 bg-slate-100/90 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">
                  Diploma
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-slate-900">
                  Dirigerade Svenska Kungliga Filharmonikerna
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md">
                  Official diploma awarded for conducting the Royal Stockholm
                  Philharmonic Orchestra at Stockholm Concert Hall.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-full max-w-[520px] transition-transform duration-300 sm:group-hover:scale-[1.02]">
                <div className="relative w-full border border-slate-200 shadow-sm transition-shadow duration-300 sm:group-hover:shadow-md rounded-lg overflow-hidden">
                  <div className="aspect-[16/10]">
                    <img
                      src="/images/education/conductingfil.png"
                      alt="Conducting the Royal Stockholm Philharmonic"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                <span className="inline-block text-[10px] sm:text-xs font-bold text-slate-700 bg-slate-100/90 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">
                  Performance
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-slate-900">
                  Conducting at Stockholm Concert Hall
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md">
                  Led the Royal Stockholm Philharmonic Orchestra in a
                  performance at the historic Stockholm Concert Hall.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 6. COMPANY VISITS ================= */}
        <section
          id="company-visits"
          className="py-12 sm:py-24 border-b border-slate-200 scroll-mt-4"
        >
          <div className="flex items-center justify-between pb-4 sm:pb-6 mb-8 sm:mb-12 border-b border-slate-200 text-xs sm:text-sm uppercase tracking-wide text-slate-500">
            <span className="font-semibold text-slate-900">
              Company Invitations
            </span>
            <span>King · Knowit · Microsoft</span>
          </div>

          {/* King Visit */}
          <div className="mb-12 sm:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
              <div className="md:col-span-8">
                <div className="relative w-full max-w-2xl mx-auto md:mx-0 border border-slate-200 shadow-sm transition-shadow duration-300 sm:hover:shadow-md rounded-lg overflow-hidden">
                  <div className="aspect-[16/10]">
                    <img
                      src="/images/education/king.jpg"
                      alt="King Headquarters"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                  <span className="inline-block text-[10px] sm:text-xs font-bold text-slate-700 bg-slate-100/90 px-2 sm:px-2.5 py-0.5 rounded">
                    Company Visit · 2019
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-medium text-slate-900">
                    Visitor at King – Stockholm
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Invited to visit King, the creators of Candy Crush, in
                    Stockholm. Gained insight into their company culture,
                    developer wellbeing initiatives, and level design process
                    for their extensive catalog of thousands of levels.
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-500">
                    Sveavägen, Stockholm
                  </p>
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="relative w-full max-w-xs mx-auto md:mx-0 border border-slate-200 shadow-sm transition-shadow duration-300 sm:hover:shadow-md rounded-lg overflow-hidden">
                  <div className="aspect-[3/4]">
                    <img
                      src="/images/education/kingoffice.jpg"
                      alt="King Office Environment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 space-y-2">
                  <span className="inline-block text-[10px] sm:text-xs font-bold text-slate-700 bg-slate-100/90 px-2 sm:px-2.5 py-0.5 rounded">
                    Inside King Office
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Knowit & Microsoft Visits */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
              <div className="md:col-span-4">
                <div className="relative w-full max-w-xs mx-auto md:mx-0 border border-slate-200 shadow-sm transition-shadow duration-300 sm:hover:shadow-md rounded-lg overflow-hidden">
                  <div className="aspect-[3/4] bg-slate-50 flex items-center justify-center">
                    <img
                      src="/images/education/knowit.png"
                      alt="Visitor at Knowit Stockholm"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                  <span className="inline-block text-[10px] sm:text-xs font-bold text-slate-700 bg-slate-100/90 px-2 sm:px-2.5 py-0.5 rounded">
                    Company Visit · 2023
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-medium text-slate-900">
                    Visitor at Knowit – Stockholm
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Invited to visit Knowit in Stockholm to explore their office
                    environment, meet their teams, and learn about their
                    consultancy workflows. The visit included a shared lunch and
                    a tour of their gaming room.
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-500">
                    Sveavägen, Stockholm
                  </p>
                </div>
              </div>

              <div className="md:col-span-8">
                <div className="relative w-full max-w-2xl mx-auto md:mx-0 border border-slate-200 shadow-sm transition-shadow duration-300 sm:hover:shadow-md rounded-lg overflow-hidden">
                  <div className="aspect-[16/10]">
                    <img
                      src="/images/education/microsoft.jpg"
                      alt="Visitor at Microsoft Office San Francisco"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                  <span className="inline-block text-[10px] sm:text-xs font-bold text-slate-700 bg-slate-100/90 px-2 sm:px-2.5 py-0.5 rounded">
                    International Visit · 2016
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-medium text-slate-900">
                    Visitor at Microsoft – San Francisco
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Invited to visit Microsoft's Skype office in San Francisco.
                    Explored their workspaces, observed their operations, and
                    received branded merchandise from Skype and Microsoft.
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-500">
                    San Francisco, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= FLOATING ACTIVE COLOR PILL NAVIGATION ================= */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
        <nav className="bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-2xl rounded-full p-1 sm:p-1.5 flex items-center gap-0.5 sm:gap-1 overflow-x-auto text-[10px] sm:text-xs font-mono font-medium uppercase tracking-wider whitespace-nowrap scrollbar-none">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-slate-900 text-stone-100 shadow-sm font-semibold scale-105"
                    : "text-slate-600 sm:hover:text-slate-950 sm:hover:bg-slate-100/70"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* CSS Rules for Smooth Scrolling & Disabling Mobile Touch Hover/Highlight */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html {
          scroll-behavior: smooth;
        }
        * {
          -webkit-tap-highlight-color: transparent;
        }
        @media (hover: none) {
          *:hover {
            transform: none !important;
            box-shadow: none !important;
          }
        }
      `,
        }}
      />
    </div>
  );
}
