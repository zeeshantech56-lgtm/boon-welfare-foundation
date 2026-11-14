import { useEffect, useState } from "react";
import { Menu, X, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "Our Work", href: "#work" },
  { label: "Alumni Voices", href: "#voices" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy text-navy-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <p className="opacity-80">
            Alumni Association of <span className="font-semibold opacity-100">Taiba College, Indore</span>
          </p>
          <div className="flex items-center gap-6 opacity-80">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5" /> Indore, Madhya Pradesh
            </span>
            <a href="#contact" className="flex items-center gap-1.5 hover:opacity-100">
              <Mail className="size-3.5" /> Contact us
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-border bg-background/95 shadow-soft backdrop-blur-md py-1"
            : "border-transparent bg-background/85 backdrop-blur-sm py-2",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#top" aria-label="The BOON Welfare Foundation — home" className="shrink-0 flex items-center py-1">
            <img
              src="/images/boon_logo_horizontal.png"
              alt="The BOON Welfare Foundation"
              className={cn(
                "w-auto transition-all duration-300 object-contain",
                scrolled ? "h-16 sm:h-20 md:h-24" : "h-20 sm:h-24 md:h-32"
              )}
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="hero" size="xl">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          <button
            className="rounded-lg p-2 text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-6 py-4 lg:hidden" aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-semibold text-foreground hover:bg-muted"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="xl" className="mt-3 w-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact Us
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
