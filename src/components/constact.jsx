export default function Contact({ personalInfo }) {
  return (
    <section className="py-32 text-center">
      <h2 className="text-5xl font-bold mb-6">
        Let's Build Something Together
      </h2>

      <p className="text-gray-400">
        {personalInfo.email}
      </p>

      <div className="mt-6 flex justify-center gap-6">
        <a href={personalInfo.linkedin}>
          LinkedIn
        </a>

        <a href={personalInfo.github}>
          GitHub
        </a>
      </div>
    </section>
  );
}