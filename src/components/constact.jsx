import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact({ personalInfo }) {
  return (
    <section id="contact" className="py-20 px-4 scroll-mt-24 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-10 md:p-16 rounded-3xl text-center max-w-3xl w-full border border-white/5 relative overflow-hidden shadow-2xl"
      >
        {/* Subtle radial light effect behind content */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.05),transparent_70%)]" />

        <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-4 inline-block">
          08. What's Next?
        </span>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Let's Build Something Together
        </h2>

        <p className="text-slate-300 max-w-xl mx-auto mb-8 font-light leading-relaxed text-sm md:text-base">
          I'm currently seeking MERN stack opportunities and internships. My inbox is always open—whether you have a project idea, a question, or just want to connect, feel free to drop a message!
        </p>

        {/* Email CTA button */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 text-slate-950 px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 text-sm md:text-base tracking-wider uppercase mb-8"
        >
          <FaEnvelope size={18} /> Say Hello
        </a>

        {/* Alternate Social Anchors */}
        <div className="flex justify-center gap-6 border-t border-white/5 pt-8 max-w-xs mx-auto">
          <a 
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-violet-400 transition duration-300 text-sm font-semibold"
          >
            <FaLinkedin size={18} /> LinkedIn
          </a>

          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition duration-300 text-sm font-semibold"
          >
            <FaGithub size={18} /> GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}