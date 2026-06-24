// Import components
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skill";
import Projects from "./components/projects";
import Experience from "./components/Expirence";
import Certifications from "./components/certification";
import Interests from "./components/intrest";
import Contact from "./components/constact";
import Timeline from "./components/Timeline";

// Import data
import {
  personalInfo,
  skills,
  projects,
  experience,
  certifications,
  interests,
} from "./Data";

function App() {
  return (
    <div className="text-white min-h-screen font-inter relative">
      {/* Dynamic Animated Background */}
      <Background />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Main Content Layout Container */}
      <main className="max-w-6xl mx-auto px-6 md:px-8 space-y-12 md:space-y-24">
        {/* Hero Section */}
        <Hero personalInfo={personalInfo} />

        {/* About Section */}
        <About personalInfo={personalInfo} />

        {/* Skills Section */}
        <Skills skills={skills} />

        {/* Projects Section */}
        <Projects projects={projects} />

        {/* Journey Section (Timeline + Experience) */}
        <div id="journey" className="scroll-mt-24 space-y-8 md:space-y-16">
          <Timeline />
          <Experience experience={experience} />
        </div>

        {/* Certifications Section */}
        <Certifications certifications={certifications} />

        {/* Interests Section */}
        <Interests interests={interests} />

        {/* Contact Section */}
        <Contact personalInfo={personalInfo} />
      </main>

      {/* Massive Stretched Footer Logo */}
      <footer className="w-full border-t border-white/5 py-12 mt-16 md:mt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row md:justify-between items-center gap-4 text-xs md:text-sm text-slate-500 mb-8">
          <div>© {new Date().getFullYear()} ALTHAF K. All rights reserved.</div>
          <div className="flex gap-6">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">LinkedIn</a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">GitHub</a>
          </div>
        </div>
        <div className="w-full overflow-hidden select-none pointer-events-none border-t border-white/5 pt-4">
          <h1 
            className="text-[13vw] font-black text-center leading-none tracking-tighter text-transparent uppercase select-none font-inter"
            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.05)" }}
          >
            ALTHAF K
          </h1>
        </div>
      </footer>
    </div>
  );
}

export default App;