export default function StatsSection() {
  const stats = [
    { value: "500+", label: "Properties Sold" },
    { value: "15+", label: "Years Experience" },
    { value: "1000+", label: "Happy Families" },
    { value: "50+", label: "Villages Covered" },
  ];

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-4">
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary">
                {s.value}
              </div>
              <div className="text-muted-foreground text-sm mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
