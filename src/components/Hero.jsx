import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa";

export default function Hero({ personalInfo }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16 relative">
      {/* Profile Image with animated glowing ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.8 
        }}
        className="relative mb-8 group"
      >
        {/* Glowing aura */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 blur-md opacity-70 group-hover:opacity-100 transition duration-500 group-hover:blur-lg"></div>
        <img
          src={personalInfo.profileImage || "my pic.png"}
          alt="Althaf K"
          className="relative w-40 h-40 md:w-44 md:h-44 rounded-full border-2 border-white/20 object-cover shadow-2xl transition duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* Name with text gradient */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent"
      >
        {personalInfo.name}
      </motion.h1>

      {/* Title / Subtitle with colorful gradient */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mt-4 tracking-wide"
      >
        {personalInfo.title}
      </motion.h2>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-xl text-slate-400 mt-6 text-base md:text-lg leading-relaxed font-light"
      >
        {personalInfo.tagline}
      </motion.p>

      {/* Social Links inside Glass Panels */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex gap-4 mt-8"
      >
        <a 
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full glass-panel border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-400 hover:scale-110 transition duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          aria-label="GitHub Profile"
        >
          <FaGithub size={22} />
        </a>

        <a 
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full glass-panel border border-white/10 hover:border-violet-400/40 text-slate-300 hover:text-violet-400 hover:scale-110 transition duration-300 hover:shadow-[0_0_15px_rgba(167,139,250,0.2)]"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={22} />
        </a>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}