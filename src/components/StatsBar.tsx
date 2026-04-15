const stats = [
  { label: "canais abertos e fechados", value: "+10.000" },
  { label: "filmes e séries", value: "+40.000" },
  { label: "novelas", value: "+7.000" },
];

const StatsBar = () => (
  <section className="bg-gradient-fire py-6">
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      {stats.map((s) => (
        <div key={s.label}>
          <p className="text-3xl md:text-4xl font-bold text-primary-foreground" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {s.value}
          </p>
          <p className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
