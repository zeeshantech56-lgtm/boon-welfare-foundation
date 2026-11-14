import { Mail, MapPin, Phone, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const QUICK = [
  { label: "About BOON", href: "#about" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "Our Work", href: "#work" },
  { label: "Alumni Stories", href: "#voices" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 bg-hex-pattern-light" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-boon" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="inline-block rounded-2xl bg-white p-3 shadow-md">
              <img
                src="/images/boon_logo_horizontal.png"
                alt="The BOON Welfare Foundation"
                loading="lazy"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-navy-foreground/70">
              An alumni-led association of Taiba College, Indore — formed by the Nurani Graduates to unite alumni
              in service, collaboration and social responsibility.
            </p>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-4">
              <div className="rounded-xl bg-card p-2">
                <img src="/images/taiba_logo.png" alt="Taiba College logo" width={1628} height={1263} loading="lazy" className="h-12 w-auto object-contain" />
              </div>
              <p className="text-xs leading-relaxed text-navy-foreground/70">
                Proudly rooted in
                <br />
                <span className="font-display text-sm font-semibold text-navy-foreground">Taiba College, Indore</span>
              </p>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            <div>
              <h3 className="eyebrow text-boon-aqua">Explore</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {QUICK.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-navy-foreground/75 transition-colors hover:text-navy-foreground">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="eyebrow text-boon-aqua">Reach Us</h3>
              <ul className="mt-5 space-y-4 text-sm text-navy-foreground/75">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-taiba-gold" /> Indore, Madhya Pradesh, India
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-taiba-gold" /> info@boonfoundation.org
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-taiba-gold" /> +91 00000 00000
                </li>
              </ul>
              <div className="mt-6 flex gap-2">
                {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#contact"
                    aria-label="Social media"
                    className="grid size-9 place-items-center rounded-full border border-navy-foreground/15 transition-colors hover:border-boon-aqua hover:text-boon-aqua"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-navy-foreground/10 pt-8 text-xs text-navy-foreground/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} The BOON Welfare Foundation. All rights reserved.</p>
          <p className="font-serif italic">Education · Values · Compassionate Care</p>
        </div>
      </div>
    </footer>
  );
}
