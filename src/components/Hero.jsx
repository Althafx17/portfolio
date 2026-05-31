import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero({ personalInfo }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <img
          src={personalInfo.profileImage || "my pic.png"}
          alt="Althaf K"
          className="w-48 h-48 rounded-full border-4 border-cyan-400 object-cover shadow-lg"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-6xl font-bold"
      >
        {personalInfo.name}
      </motion.h1>

      <h2 className="text-2xl text-cyan-400 mt-4">
        {personalInfo.title}
      </h2>

      <p className="max-w-2xl text-gray-400 mt-6">
        {personalInfo.tagline}
      </p>

      <div className="flex gap-6 mt-8">
        <a href={personalInfo.github}>
          <FaGithub size={30} />
        </a>

        <a href={personalInfo.linkedin}>
          <FaLinkedin size={30} />
        </a>
      </div>
    </section>
  );
}