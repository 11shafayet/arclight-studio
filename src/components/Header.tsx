import { ArrowUpRight } from 'lucide-react';
import { navItems } from '../data/site';

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto flex h-20 w-full max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" className="font-display text-lg font-black uppercase tracking-normal text-ink">
          Arclight
        </a>

        <nav className="hidden items-center gap-10 text-[13px] font-bold text-ink/80 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="group flex items-start gap-1 hover:text-ink">
              <span>{item.label}</span>
              <sup className="text-[9px] text-ink/50 group-hover:text-ink">{item.number}</sup>
            </a>
          ))}
        </nav>

        <a
          href="#projects"
          className="inline-flex h-9 items-center gap-1.5 rounded-full bg-ink px-2.5 pr-4 text-[12px] font-bold text-white shadow-soft"
        >
          <span className="grid size-6 place-items-center rounded-full bg-white text-ink">
            <ArrowUpRight size={14} strokeWidth={2.4} />
          </span>
          View Selected Work
        </a>
      </div>
    </header>
  );
}
