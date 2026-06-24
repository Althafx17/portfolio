import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-950 pointer-events-none">
      {/* Ambient center radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_70%)]" />

      {/* Futuristic Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)'
        }}
      />

      {/* Floating Glowing Blobs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -120, 80, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-12 left-10 md:left-1/4 h-[300px] md:h-[450px] w-[300px] md:w-[450px] rounded-full bg-cyan-500/10 blur-[100px] md:blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -120, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-10 md:right-1/4 h-[350px] md:h-[500px] w-[350px] md:w-[500px] rounded-full bg-violet-600/10 blur-[120px] md:blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 60, -80, 0],
          y: [0, 90, -70, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-12 left-1/3 h-[250px] md:h-[350px] w-[250px] md:w-[350px] rounded-full bg-blue-500/10 blur-[90px] md:blur-[110px]"
      />
    </div>
  );
}
