import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-950 pointer-events-none">
      {/* Immersive Sci-fi Background Image with constant slow motion (Ken Burns + Pan) */}
      <motion.div
        animate={{
          scale: [1.04, 1.12, 1.04],
          x: [-8, 8, -8],
          y: [-12, 6, -12],
          rotate: [0, 0.5, -0.5, 0]
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-cover bg-center opacity-[0.25] sm:opacity-[0.32]"
        style={{
          backgroundImage: "url('/sci-fi-bg.jpg')",
          filter: "brightness(0.85) contrast(1.1)",
        }}
      />

      {/* Dark Vignette Overlays for maximum text legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#030712_92%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/90 via-[#030712]/15 to-[#030712]/90" />

      {/* Futuristic Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)'
        }}
      />

      {/* Ambient Moving Blobs behind/over the image for extra depth */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.06] blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 70, -90, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-600/[0.06] blur-[120px]"
      />
    </div>
  );
}

