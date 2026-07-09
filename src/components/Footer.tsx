import { navItems } from '../data/site';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-x-0 top-0 h-14 origin-left -skew-y-2 bg-paper" />
      <div className="mx-auto max-w-[1440px] px-5 pb-9 pt-36 sm:px-8 lg:px-12 lg:pt-44">
        <div className="grid gap-14 md:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <p className="mb-5 font-mono text-xs font-bold uppercase text-white/45">Lets Talk</p>
            <a href="mailto:hello@arclight.com" className="font-display text-3xl font-black uppercase sm:text-5xl">
              hello@arclight.com
            </a>
          </div>

          <nav className="flex flex-col gap-4 pt-1 text-sm font-bold text-white/85">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#projects" className="hover:text-white">
              Work
            </a>
          </nav>

          <nav className="flex flex-col gap-4 pt-1 text-sm font-bold text-white/85">
            <a href="https://x.com" className="hover:text-white">
              X.Com
            </a>
            <a href="https://instagram.com" className="hover:text-white">
              Instagram
            </a>
            <a href="https://linkedin.com" className="hover:text-white">
              Linkedin
            </a>
          </nav>
        </div>

        <h2 className="mt-24 break-words font-display text-[clamp(3rem,12vw,12.8rem)] font-black uppercase leading-[0.82] tracking-normal">
          Arclight Studio
        </h2>
        <p className="mt-16 text-center font-mono text-[11px] font-bold uppercase text-white/35">
          ©2026 Arclight. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
