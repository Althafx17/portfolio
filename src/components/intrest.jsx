import { motion } from "framer-motion";

export default function Interests({ interests }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
          07. Hobbies
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          Interests & Hobbies
        </h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto"
      >
        {interests.map((interest) => (
          <motion.span
            variants={tagVariants}
            whileHover={{ scale: 1.08, y: -2 }}
            key={interest}
            className="glass-panel px-4 py-2 rounded-xl border border-white/5 text-xs md:text-sm font-semibold tracking-wide text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 cursor-default shadow-md hover:shadow-[0_0_12px_rgba(34,211,238,0.15)]"
          >
            {interest}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}