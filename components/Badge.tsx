type BadgeProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Badge({ children, variant = "primary" }: BadgeProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide";
  const styles =
    variant === "primary"
      ? "bg-brand-500/10 text-brand-200 ring-1 ring-inset ring-brand-500/50"
      : "bg-white/10 text-white/80 ring-1 ring-inset ring-white/20";

  return <span className={`${base} ${styles}`}>{children}</span>;
}
