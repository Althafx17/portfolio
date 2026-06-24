import { motion } from "framer-motion";

export default function Contact({ personalInfo }) {
  return (
    <section id="contact" className="py-20 px-4 scroll-mt-24 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-16 rounded-3xl w-full border border-white/5 relative overflow-hidden shadow-2xl"
      >
        {/* Subtle background glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03),transparent_70%)]" />

        <div className="flex flex-col items-center md:items-start gap-2 mb-12">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
            08. Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight text-center md:text-left">
            How about success everyone <br className="hidden md:block"/> will talk about?
          </h2>
        </div>

        {/* Split Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 pt-6 border-t border-white/5">
          
          {/* Left Column: Developer Profile Info */}
          <div className="space-y-8 text-center md:text-left">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">
                Core Disciplines
              </h4>
              <p className="text-white font-medium text-base md:text-lg">
                React Frontend • Node Backend • Database Design
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">
                Current Status
              </h4>
              <p className="text-cyan-400 font-semibold text-base md:text-lg">
                Open to MERN Stack Internships & Developer Roles
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">
                Based in
              </h4>
              <p className="text-white font-medium text-base md:text-lg">
                Kozhikode, Kerala, India
              </p>
            </div>
          </div>

          {/* Right Column: CTA card */}
          <div className="flex flex-col justify-between items-center md:items-end text-center md:text-right h-full">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                Althaf K
              </h3>
              <p className="text-slate-400 text-sm font-light mt-1">
                MERN Stack Developer
              </p>
            </div>

            {/* Custom SVG Arrow Link Button */}
            <div className="mt-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group relative inline-flex items-center gap-4 py-3 text-white text-base md:text-lg font-bold border-b border-white/10 hover:border-cyan-400 transition-all duration-300"
              >
                <span className="text-white group-hover:text-cyan-400 transition-colors duration-300 tracking-wider uppercase text-sm">
                  Get In Touch
                </span>
                
                {/* Curved Arrow SVG from the design reference */}
                <span className="text-white group-hover:text-cyan-400 group-hover:translate-x-2 transition-transform duration-300">
                  <svg 
                    className="w-4 h-4" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M2.56391 1V7C2.56391 8.10457 3.45934 9 4.56391 9H12.0286L9.21353 6.3L10.3083 5.25L15 9.75L10.3083 14.25L9.21353 13.2L12.0286 10.5H4C2.34315 10.5 1 9.15685 1 7.5V1H2.56391Z" 
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
