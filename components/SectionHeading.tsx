type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="section-container flex flex-col gap-4 text-center md:max-w-3xl md:text-left">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="text-base text-white/70 md:text-lg">{description}</p>
    </div>
  );
}
