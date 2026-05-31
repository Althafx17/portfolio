export default function Certifications({
  certifications,
}) {
  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10">
        Certifications
      </h2>

      <ul className="space-y-4">
        {certifications.map((cert) => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}