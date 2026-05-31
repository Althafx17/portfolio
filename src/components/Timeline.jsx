export default function Timeline() {
  const events = [
    "2021 - Started B.Tech CSE",
    "2023 - Aspire Link Project",
    "2024 - ICT Academy Internship",
    "2024 - DIGI PASS Project",
    "2025 - MERN Stack Training",
  ];

  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10">Journey</h2>

      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event}
            className="border-l-2 border-cyan-500 pl-6"
          >
            {event}
          </div>
        ))}
      </div>
    </section>
  );
}