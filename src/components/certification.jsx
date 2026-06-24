import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

export default function Certifications({ certifications }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="certifications" className="py-16 px-4 scroll-mt-24">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
          06. Achievements
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          Certifications
        </h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        {certifications.map((cert) => (
          <motion.div
            variants={itemVariants}
            key={cert}
            className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 flex items-start gap-4"
          >
            <div className="text-cyan-400 mt-1 hover:text-violet-400 transition duration-300">
              <FaAward size={24} />
            </div>
            <p className="text-white font-medium text-sm md:text-base leading-relaxed">
              {cert}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}