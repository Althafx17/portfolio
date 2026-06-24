import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects({ projects }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-16 px-4 scroll-mt-24">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
          03. Creations
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          Featured Projects
        </h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            variants={cardVariants}
            key={project.title}
            className="glass-panel glass-panel-hover p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">
                {project.title}
              </h3>

              <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-950/60 border border-white/5 px-3 py-1 rounded-full text-xs text-slate-400 font-medium hover:border-cyan-400/20 hover:text-cyan-400 transition duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 px-5 py-2.5 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 text-xs tracking-wider uppercase"
                  >
                    View Project <FaExternalLinkAlt size={11} />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}