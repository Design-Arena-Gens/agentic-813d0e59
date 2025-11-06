import Image from "next/image";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-grid-light bg-[size:120px_120px]" />
      <div className="relative section-container flex flex-col gap-10 py-24 md:py-32">
        <div className="max-w-3xl space-y-6">
          <Badge variant="primary">Nexaurro Digital Collective</Badge>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            Fueling brand momentum with strategy, design, and technology.
          </h1>
          <p className="text-lg text-white/70 md:text-xl">
            Nexaurro is your end-to-end digital partner crafting magnetic
            experiences that attract, convert, and retain customers. From
            strategy to execution, we orchestrate every touchpoint of your
            digital presence.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Button href="#contact">Start a project</Button>
            <Button href="#services" variant="secondary">
              Explore capabilities
            </Button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="glass-card">
              <span className="text-sm uppercase tracking-[0.2em] text-brand-200">
                {item.label}
              </span>
              <p className="mt-3 font-display text-3xl">{item.value}</p>
              <p className="mt-2 text-sm text-white/60">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="relative flex justify-center">
          <div className="glass-card relative w-full overflow-hidden rounded-[2.5rem] border-white/5 bg-white/[0.06] p-0 shadow-xl md:w-4/5">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
              alt="Nexaurro team collaborating in a modern studio"
              width={1600}
              height={900}
              className="h-full w-full object-cover opacity-95"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050714] via-[#050714]/70 to-transparent p-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/65">
                <span className="font-semibold text-white">
                  Trusted by global brands
                </span>
                <span>Performance marketing &bull; Bespoke web experiences &bull; Conversion strategy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const stats = [
  {
    label: "Growth Delivered",
    value: "4.2x ROI",
    description: "Average return on marketing investments across our portfolio."
  },
  {
    label: "Projects Launch",
    value: "180+",
    description: "Custom web platforms, brand makeovers, and digital products."
  },
  {
    label: "Client Satisfaction",
    value: "98%",
    description: "Partnership-first collaborations keeping momentum on your side."
  }
];
