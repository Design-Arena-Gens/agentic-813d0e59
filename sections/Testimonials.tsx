const testimonials = [
  {
    quote:
      "Nexaurro embedded with our team like a true partner. They transformed our lead engine and rebuilt our web presence in record time.",
    name: "Sofia Martinez",
    role: "Chief Marketing Officer, Lumenwave"
  },
  {
    quote:
      "Their design system work unlocked consistency across our product suite. The collaboration was fast, strategic, and energizing.",
    name: "David Kim",
    role: "Head of Product, Arclite"
  },
  {
    quote:
      "From strategic planning to campaign execution, Nexaurro delivered measurable growth quarter after quarter.",
    name: "Priya Nair",
    role: "VP Revenue, Halo Dynamics"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-container grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-start">
        <div className="space-y-5">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
            Voices from partners
          </span>
          <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">
            Momentum that sparks lasting relationships.
          </h2>
          <p className="text-base text-white/70">
            We build enduring partnerships grounded in transparency,
            performance, and bold creativity. Our work lives at the intersection
            of strategy, storytelling, and emerging technology.
          </p>
        </div>
        <div className="grid gap-4">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="glass-card border-white/5 text-left"
            >
              <blockquote className="text-base text-white/80 md:text-lg">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-white/60">
                <span className="font-semibold text-white">{item.name}</span>{" "}
                &mdash; {item.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
