import { GraduationCap, HeartHandshake, Lightbulb, Users } from "lucide-react";

const AREAS = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    color: "text-boon-azure",
    bg: "bg-boon-azure/10",
    description:
      "Supporting access to quality, value-based education for students — from scholarships to mentorship programmes that connect graduates with learners.",
  },
  {
    icon: HeartHandshake,
    title: "Social Welfare",
    color: "text-taiba-pink",
    bg: "bg-taiba-pink/10",
    description:
      "Uplifting the underprivileged through community initiatives, medical aid, disaster relief and direct welfare programmes run by alumni volunteers.",
  },
  {
    icon: Lightbulb,
    title: "Moral Values",
    color: "text-taiba-gold",
    bg: "bg-taiba-gold/10",
    description:
      "Promoting ethical and moral leadership in public life — drawing on the values instilled at Taiba College to guide alumni and their communities.",
  },
  {
    icon: Users,
    title: "Alumni Network",
    color: "text-taiba-green",
    bg: "bg-taiba-green/10",
    description:
      "Building a vibrant alumni community where Nurani Graduates collaborate, share opportunities and support one another across professions and geographies.",
  },
];

export function FocusAreas() {
  return (
    <section id="work" className="scroll-mt-28 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow text-primary">What We Do</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            Our Focus <span className="text-gradient-boon">Areas</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            The BOON Welfare Foundation channels alumni energy into four interconnected pillars — each one
            amplifying the others.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map(({ icon: Icon, title, color, bg, description }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className={`mb-6 grid size-14 place-items-center rounded-2xl ${bg}`}>
                <Icon className={`size-7 ${color}`} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
