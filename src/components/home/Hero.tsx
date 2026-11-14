import { ArrowRight, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-hex-pattern opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-14 lg:grid-cols-12 lg:pb-28 lg:pt-20">
        <div className="animate-rise-in lg:col-span-7">
          <div className="inline-flex items-center gap-4 rounded-full border border-border/80 bg-card/90 py-2.5 pl-2.5 pr-6 shadow-md backdrop-blur transition-all">
            <span className="grid size-12 place-items-center rounded-full bg-white shadow-xs p-1">
              <img src="/images/taiba_logo.png" alt="Taiba College" width={1628} height={1263} className="h-9 w-auto object-contain" />
            </span>
            <span className="text-sm sm:text-base font-bold text-foreground">
              Alumni Association of Taiba College, Indore
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            United by learning.
            <br />
            <span className="text-gradient-boon">Bound by service.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            The BOON Welfare Foundation brings the Nurani Graduates together on one platform — to advance quality
            education, uplift communities and build a compassionate, progressive nation.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="#work">
                <HeartHandshake /> See Our Work
              </a>
            </Button>
            <Button asChild variant="soft" size="xl">
              <a href="#vision">
                Our Vision <ArrowRight />
              </a>
            </Button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["Education", "Quality & value-based"],
              ["Welfare", "For the underprivileged"],
              ["Unity", "Alumni in service"],
            ].map(([t, d]) => (
              <div key={t}>
                <dt className="font-display text-lg font-bold text-foreground">{t}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{d}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Big BOON emblem */}
        <div className="relative flex justify-center lg:col-span-5">
          <div className="relative aspect-square w-full max-w-[30rem]">
            <div className="absolute inset-[8%] rounded-full bg-gradient-boon opacity-20 blur-3xl" aria-hidden />
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 size-full animate-spin-slow text-boon-sky/40"
              aria-hidden
            >
              <polygon points="100,4 183,52 183,148 100,196 17,148 17,52" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
            </svg>
            <svg viewBox="0 0 200 200" className="absolute inset-[7%] size-[86%] text-boon-aqua/40" aria-hidden>
              <polygon points="100,4 183,52 183,148 100,196 17,148 17,52" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </svg>
            <div className="absolute inset-[10%] rounded-full bg-card shadow-glow" aria-hidden />
            <img
              src="/images/boon_emblem.png"
              alt="The BOON emblem"
              width={1232}
              height={1561}
              className="absolute left-1/2 top-1/2 h-[60%] w-auto -translate-x-1/2 -translate-y-1/2 animate-float-slow drop-shadow-xl"
            />
            <span className="absolute right-[4%] top-[14%] size-4 rounded-full bg-taiba-gold" aria-hidden />
            <span className="absolute bottom-[18%] left-[2%] size-3 rounded-full bg-taiba-pink" aria-hidden />
            <span className="absolute bottom-[6%] right-[20%] size-2.5 rounded-full bg-taiba-green" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
