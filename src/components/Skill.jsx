import { motion } from "framer-motion";

export default function Skills({ skills }) {
  const sections = Object.entries(skills);

  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map(([title, items]) => (
          <motion.div
            whileHover={{ y: -8 }}
            key={title}
            className="bg-slate-900 p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold capitalize mb-4">
              {title}
            </h3>

            {items.map((item) => (
              <p key={item} className="text-gray-400">
                {item}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}