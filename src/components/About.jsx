import { motion } from "framer-motion";

export default function About({ personalInfo }) {
  return (
    <section className="py-20 px-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          {personalInfo.about || "I am a Computer Science and Engineering graduate passionate about web development and modern software technologies. My journey started through academic projects and internships where I developed a strong interest in solving real-world problems through technology."}
        </p>
      </motion.div>
    </section>
  );
}