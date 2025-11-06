const phases = [
  {
    title: "01. Align",
    description:
      "We immerse ourselves in your business model, audience, and goals. Together we prioritize high-impact opportunities and define success metrics."
  },
  {
    title: "02. Architect",
    description:
      "Our strategists and designers co-create journeys, prototypes, and roadmaps. We validate assumptions early and build momentum through rapid iterations."
  },
  {
    title: "03. Activate",
    description:
      "Full-stack teams execute campaigns, code experiences, and launch new initiatives. We obsess over quality and performance at every touchpoint."
  },
  {
    title: "04. Amplify",
    description:
      "Data-driven optimization keeps growth compounding. We partner on enablement, training, and ongoing experimentation."
  }
];

export function Process() {
  return (
    <section className="border-y border-white/5 bg-white/[0.03] py-24 md:py-32">
      <div className="section-container grid gap-12 md:grid-cols-[1fr_1.5fr] md:items-start">
        <div className="space-y-5">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
            Our Methodology
          </span>
          <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">
            A collaborative playbook tailored to every engagement.
          </h2>
          <p className="text-base text-white/70">
            Nexaurro activates multidisciplinary squads in sync with your
            priorities. We design processes that unlock clarity, inspire teams,
            and deliver measurable outcomes—faster.
          </p>
        </div>
        <div className="grid gap-6">
          {phases.map((phase) => (
            <div
              key={phase.title}
              className="glass-card border-white/5 bg-gradient-to-br from-white/[0.08] to-white/[0.02]"
            >
              <h3 className="font-display text-xl text-white">{phase.title}</h3>
              <p className="mt-3 text-sm text-white/70 md:text-base">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
