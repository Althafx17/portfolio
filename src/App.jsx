// Import components
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
    <div className="bg-slate-950 text-white min-h-screen font-inter">
      {/* Hero Section */}
      <Hero personalInfo={personalInfo} />

      {/* About Section */}
      <About personalInfo={personalInfo} />

      {/* Skills Section */}
      <Skills skills={skills} />

      {/* Projects Section */}
      <Projects projects={projects} />

      {/* Timeline Section */}
      <Timeline />

      {/* Experience Section */}
      <Experience experience={experience} />

      {/* Certifications Section */}
      <Certifications certifications={certifications} />

      {/* Interests Section */}
      <Interests interests={interests} />

      {/* Contact Section */}
      <Contact personalInfo={personalInfo} />
    </div>
  );
}

export default App;