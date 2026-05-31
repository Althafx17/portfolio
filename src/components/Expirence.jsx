export default function Experience({ experience }) {
  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10">
        Experience
      </h2>

      {experience.map((exp) => (
        <div
          key={exp.company}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold">
            {exp.role}
          </h3>

          <p className="text-gray-400">
            {exp.company} • {exp.period}
          </p>
        </div>
      ))}
    </section>
  );
}