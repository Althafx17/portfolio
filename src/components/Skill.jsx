import { motion } from "framer-motion";

export default function Skills({ skills }) {
  const sections = Object.entries(skills);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-16 px-4 scroll-mt-24">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
          02. Expertise
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          Skills & Tech Stack
        </h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {sections.map(([title, items]) => (
          <motion.div
            variants={cardVariants}
            key={title}
            className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 flex flex-col h-full"
          >
            <h3 className="text-lg font-bold text-white capitalize mb-4 border-l-2 border-cyan-400 pl-3">
              {title}
            </h3>

            <div className="flex flex-wrap gap-2 mt-auto">
              {items.map((item) => (
                <span 
                  key={item} 
                  className="bg-slate-950/60 border border-white/5 rounded-lg px-3 py-1.5 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 text-xs font-semibold tracking-wide flex-grow text-center"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}