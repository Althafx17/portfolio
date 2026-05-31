import { motion } from "framer-motion";

export default function Projects({ projects }) {
  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={project.title}
            className="bg-slate-900 p-6 rounded-xl"
          >
            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {project.description}
            </p>

            {project.link && (
              <div className="mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-cyan-500 text-slate-950 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
                >
                  View Project
                </a>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 px-3 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}