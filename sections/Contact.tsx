import { Button } from "@/components/Button";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-gradient-to-br from-brand-950 via-[#050714] to-brand-900 py-24 md:py-32"
    >
      <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/10 md:block" />
      <div className="section-container relative grid gap-12 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
            Let’s build the next
          </span>
          <h2 className="font-display text-3xl leading-tight text-white md:text-5xl">
            Partner with Nexaurro to unlock your next growth chapter.
          </h2>
          <p className="text-base text-white/70 md:text-lg">
            Share your ambitions and we’ll assemble a dedicated squad to craft a
            roadmap within 72 hours. Strategy call, success metrics, and
            engagement model—ready to go.
          </p>
          <ul className="grid gap-3 text-sm text-white/70 md:text-base">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
              <span>Audit and opportunity analysis tailored to your market</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
              <span>Assigned specialists across marketing, product, and design</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
              <span>Roadmap and investment plan aligned with growth goals</span>
            </li>
          </ul>
        </div>
        <form className="glass-card border-white/10 bg-white/[0.04] p-8 shadow-glow">
          <div className="grid gap-6">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Alex Morgan"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200"
              >
                Work Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@nexaurro.com"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Your organization"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
              />
            </div>
            <div>
              <label
                htmlFor="needs"
                className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200"
              >
                What can we help with?
              </label>
              <textarea
                id="needs"
                name="needs"
                rows={4}
                placeholder="Share your goals, challenges, and timeline."
                className="mt-3 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
              />
            </div>
            <Button href="mailto:hello@nexaurro.com">Schedule discovery call</Button>
            <p className="text-xs text-white/50">
              By clicking submit, you agree to our privacy policy and consent to
              receive communications from Nexaurro.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
