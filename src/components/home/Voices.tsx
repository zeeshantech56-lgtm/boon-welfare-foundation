const VOICES = [
  {
    quote:
      "BOON has given us a platform to reconnect with our brothers from Taiba College and channel our energy towards something truly meaningful — serving our communities.",
    name: "Alumni Member",
    batch: "Taiba Da'awa College Graduate",
    initial: "A",
    color: "bg-boon-azure",
  },
  {
    quote:
      "The values we imbibed at Taiba College — honesty, service, compassion — are the very foundation of BOON. This association brings those values to life.",
    name: "Founding Member",
    batch: "Nurani Graduate",
    initial: "F",
    color: "bg-taiba-green",
  },
  {
    quote:
      "What excites me most about BOON is the potential. When alumni unite with shared purpose, there is no limit to the good we can achieve for our nation.",
    name: "Active Volunteer",
    batch: "Taiba College Alumnus",
    initial: "V",
    color: "bg-taiba-gold",
  },
];

export function Voices() {
  return (
    <section id="voices" className="scroll-mt-28 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="eyebrow text-primary">Alumni Voices</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            Heard from Our <span className="text-gradient-boon">Community</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Words from the Nurani Graduates who are building BOON — together.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {VOICES.map(({ quote, name, batch, initial, color }) => (
            <figure
              key={name}
              className="relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft"
            >
              <svg
                className="mb-6 size-10 text-primary/20"
                viewBox="0 0 40 40"
                fill="currentColor"
                aria-hidden
              >
                <path d="M13.3 20H6.7C6.7 13.4 10 8 16.7 6l1.3 2.7C14 10.3 13.3 14.7 13.3 20zm20 0H26.7C26.7 13.4 30 8 36.7 6L38 8.7C34 10.3 33.3 14.7 33.3 20z" />
              </svg>
              <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                <p>{quote}</p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-full ${color} font-display text-lg font-bold text-white`}
                >
                  {initial}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground">{batch}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
