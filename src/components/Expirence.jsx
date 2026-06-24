import { motion } from "framer-motion";

export default function Experience({ experience }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
          05. Experience
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          Work Experience
        </h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl mx-auto space-y-6"
      >
        {experience.map((exp) => (
          <motion.div
            variants={itemVariants}
            key={exp.company}
            className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white">
                {exp.role}
              </h3>
              <p className="text-cyan-400 hover:text-violet-400 font-semibold text-sm mt-1 transition duration-300">
                {exp.company}
              </p>
            </div>
            <div className="md:text-right">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 border border-white/5 text-slate-400">
                {exp.period}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}