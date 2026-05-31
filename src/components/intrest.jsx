export default function Interests({ interests }) {
  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10">
        Interests & Hobbies
      </h2>

      <div className="flex flex-wrap gap-4">
        {interests.map((interest) => (
          <span
            key={interest}
            className="bg-slate-900 px-4 py-2 rounded-lg"
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
}