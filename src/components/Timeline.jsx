import { motion } from "framer-motion";

export default function Timeline() {
  const events = [
    "2021 - Started B.Tech CSE",
    "2023 - Aspire Link Project",
    "2024 - ICT Academy Internship",
    "2024 - DIGI PASS Project",
    "2025 - MERN Stack Training",
  ];

  const parsedEvents = events.map(e => {
    const [year, title] = e.split(" - ");
    return { year, title };
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
          04. Timeline
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          My Journey
        </h2>
      </div>

      <div className="max-w-2xl mx-auto relative pl-8 border-l-2 border-dashed border-slate-800">
        {/* Glow vertical gradient line overlay */}
        <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-sky-400 to-violet-500 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {parsedEvents.map((event, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="relative group"
            >
              {/* Animated glowing dot */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.3)] group-hover:border-violet-400 group-hover:shadow-[0_0_12px_rgba(167,139,250,0.5)] transition duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-violet-400 transition duration-300"></div>
              </div>

              {/* Glass event card */}
              <div className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-cyan-400/10 text-cyan-400 group-hover:text-violet-400 group-hover:bg-violet-400/10 transition duration-300">
                  {event.year}
                </span>
                <p className="text-white font-medium text-base md:text-lg mt-2 group-hover:text-cyan-400 transition duration-300">
                  {event.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}