import { Check } from "lucide-react";

const POINTS = [
  "Quality, value-based education",
  "Social welfare & community development",
  "Moral and ethical values",
  "Progress of society and the nation",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-28 px-6 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-boon p-10 text-primary-foreground shadow-lift lg:p-12">
            <div className="absolute -right-16 -top-16 size-56 rounded-full bg-primary-foreground/10" aria-hidden />
            <div className="absolute -bottom-20 -left-10 size-48 rounded-full bg-primary-foreground/10" aria-hidden />
            <p className="relative text-xs font-semibold uppercase tracking-widest opacity-90">Since its founding</p>
            <p className="relative mt-4 font-display text-5xl font-bold leading-none lg:text-6xl">Nurani</p>
            <p className="relative mt-2 font-display text-2xl font-bold leading-tight lg:text-3xl">
              Graduates United
            </p>
            <div className="relative mt-8 h-px w-full bg-primary-foreground/25" aria-hidden />
            <p className="relative mt-6 text-sm leading-relaxed opacity-95">
              An alumni-led association bringing Taiba College graduates together on one platform of service,
              collaboration and social responsibility.
            </p>
          </div>
          <div className="absolute -bottom-8 -right-4 hidden rounded-2xl border border-border bg-card px-6 py-5 shadow-soft sm:block lg:-right-8">
            <p className="font-display text-2xl font-bold text-gradient-boon">BOON</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Welfare Foundation
            </p>
          </div>
        </div>

        <div>
          <p className="eyebrow text-primary">About BOON Foundation</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            A common platform for <span className="text-gradient-boon">service</span>, collaboration &amp; responsibility.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The BOON Welfare Foundation is an alumni-led association of Taiba College, Indore, formed by the Nurani
            Graduates to bring alumni together on a common platform of service, collaboration, and social
            responsibility.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            It provides a platform for graduates to channel their collective efforts towards quality education, social
            welfare, and community development while promoting moral and ethical values and contributing to the
            progress of society and the nation.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm font-semibold text-foreground">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gradient-boon text-primary-foreground">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
