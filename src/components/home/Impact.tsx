const STATS = [
  { value: "40+", label: "NURANI GRADUATES" },
  { value: "13", label: "YEARS OF TAIBA LEGACY" },
  { value: "40+", label: "COMMUNITY DRIVES" },
  { value: "1,000+", label: "LIVES TOUCHED" },
];

export function Impact() {
  return (
    <section className="px-6 py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-boon px-8 py-14 text-white shadow-lift lg:px-16">
        <div className="absolute inset-0 bg-hex-pattern-light opacity-80" aria-hidden />
        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-5xl font-bold tracking-tight text-white">{s.value}</p>
              <p className="mt-2 text-xs md:text-sm font-bold uppercase tracking-wider text-white/90">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
