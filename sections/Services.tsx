import { SectionHeading } from "@/components/SectionHeading";

const services = [
  {
    title: "Digital Marketing & Growth",
    description:
      "Full-funnel performance marketing anchored in data and crafted with creativity. We orchestrate campaigns that compound reach and revenue.",
    bullets: [
      "Paid search, social & programmatic strategy",
      "Lifecycle marketing & CRM automation",
      "Performance analytics dashboards"
    ]
  },
  {
    title: "Website & Product Development",
    description:
      "Engineering-led experiences optimized for conversion and scalability. From concept to launch, we align technology with business ambition.",
    bullets: [
      "Conversion-led marketing sites & headless CMS",
      "Web applications built with modern stacks",
      "Technical SEO, accessibility & performance"
    ]
  },
  {
    title: "UI/UX Design Systems",
    description:
      "Design that differentiates and communicates effortlessly. We build design languages that scale, delight, and drive measurable engagement.",
    bullets: [
      "User research & journey mapping",
      "Product and interface design sprints",
      "Design systems & prototyping"
    ]
  },
  {
    title: "Business Strategy Solutions",
    description:
      "Advisory partners aligning teams, technology, and operations. Nexaurro activates the clarity needed to unlock sustainable growth.",
    bullets: [
      "Go-to-market & positioning strategy",
      "RevOps, process automation & integrations",
      "Innovation labs & digital transformation"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <SectionHeading
        eyebrow="Capabilities"
        title="Integrated services engineered to scale your brand."
        description="We align cross-functional teams to deliver launch-ready experiences that convert. Our experts embed with your team to accelerate momentum."
      />
      <div className="section-container mt-14 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="glass-card h-full">
            <h3 className="font-display text-2xl text-white">
              {service.title}
            </h3>
            <p className="mt-3 text-sm text-white/65 md:text-base">
              {service.description}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
