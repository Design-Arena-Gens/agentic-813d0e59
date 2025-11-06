import Link from "next/link";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Process } from "@/sections/Process";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

const partners = [
  "Lumina Works",
  "NovaChain",
  "Orbit Labs",
  "Vertex One",
  "Aether Co",
  "Beaconly"
];

export default function Page() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050714]/80 backdrop-blur-md">
        <div className="section-container flex items-center justify-between py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-lg font-bold text-white shadow-glow">
              N
            </div>
            <span className="font-display text-lg tracking-wide text-white">
              Nexaurro
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:hello@nexaurro.com"
              className="rounded-full border border-white/10 px-4 py-2 text-white transition hover:border-brand-400 hover:text-brand-200"
            >
              hello@nexaurro.com
            </a>
          </nav>
        </div>
      </header>
      <main>
        <Hero />
        <section className="border-y border-white/5 bg-white/[0.02] py-12">
          <div className="section-container flex flex-col gap-6 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Trusted by forward-thinking teams
            </span>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-6 text-base text-white/50 md:text-lg">
              {partners.map((partner) => (
                <span key={partner} className="font-semibold tracking-wide">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </section>
        <Services />
        <div id="approach">
          <Process />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <Contact />
      </main>
      <footer className="border-t border-white/5 bg-[#04060f] py-10">
        <div className="section-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-xl text-white">Nexaurro</h3>
            <p className="mt-2 text-sm text-white/60">
              Digital marketing, web experiences, design systems, and strategic
              growth platforms under one collaborative roof.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 text-sm text-white/50 md:items-end">
            <a href="mailto:hello@nexaurro.com" className="hover:text-white">
              hello@nexaurro.com
            </a>
            <span>Global studio — Remote first</span>
            <span>&copy; {new Date().getFullYear()} Nexaurro. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
