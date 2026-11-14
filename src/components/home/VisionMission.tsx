import { Eye, Target } from "lucide-react";

export function VisionMission() {
  return (
    <section id="vision" className="relative scroll-mt-28 overflow-hidden bg-gradient-navy px-6 py-24 text-navy-foreground lg:py-32">
      <div className="absolute inset-0 bg-hex-pattern-light" aria-hidden />
      <img
        src="/images/boon_mark.png"
        alt=""
        aria-hidden
        width={946}
        height={1200}
        loading="lazy"
        className="pointer-events-none absolute -right-24 top-1/2 h-[120%] w-auto -translate-y-1/2 opacity-[0.06]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="eyebrow text-boon-aqua">Our Direction</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">Vision &amp; Mission</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Vision */}
          <div className="relative overflow-hidden rounded-3xl border border-navy-foreground/10 bg-navy-foreground/5 p-10">
            <div className="absolute -right-10 -top-10 size-40 rounded-full bg-boon-azure/10 blur-2xl" aria-hidden />
            <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-gradient-boon text-primary-foreground shadow-lift">
              <Eye className="size-7" />
            </div>
            <h3 className="font-display text-2xl font-bold">OUR VISION</h3>
            <p className="mt-5 text-base leading-relaxed text-navy-foreground/90">
              To empower society and strengthen the nation through education, moral values, and compassionate care, inspiring meaningful social transformation and building an inclusive, sustainable, and progressive future.
            </p>
          </div>

          {/* Mission */}
          <div className="relative overflow-hidden rounded-3xl border border-navy-foreground/10 bg-navy-foreground/5 p-10">
            <div className="absolute -bottom-10 -left-10 size-40 rounded-full bg-boon-aqua/10 blur-2xl" aria-hidden />
            <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-gradient-boon text-primary-foreground shadow-lift">
              <Target className="size-7" />
            </div>
            <h3 className="font-display text-2xl font-bold">OUR MISSION</h3>
            <p className="mt-5 text-base leading-relaxed text-navy-foreground/90">
              To promote inclusive development by providing quality, value-based education, empowering underprivileged communities through skill development and welfare initiatives, nurturing moral and ethical values, and uniting alumni in a collective effort to serve society and contribute to nation-building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
