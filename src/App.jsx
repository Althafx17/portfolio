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
    <div className="bg-slate-950 text-white min-h-screen font-inter relative">
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
    </div>
  );
}

export default App;