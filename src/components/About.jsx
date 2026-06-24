import { motion } from "framer-motion";

export default function About({ personalInfo }) {
  return (
    <section id="about" className="py-16 px-4 scroll-mt-24 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-panel glass-panel-hover p-8 md:p-12 rounded-3xl max-w-3xl w-full text-center md:text-left"
      >
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
            Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            About Me
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light">
            {personalInfo.about || 
              "I am a Computer Science and Engineering graduate passionate about web development and modern software technologies. My journey started through academic projects and internships where I developed a strong interest in solving real-world problems through technology."}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
