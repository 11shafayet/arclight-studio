import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { navItems } from '../data/site';

const letterVariants = {
  rest: { y: 0 },
  hover: (index: number) => ({
    y: -4,
    transition: {
      duration: 0.28,
      delay: index * 0.025,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const workButtonVariants = {
  rest: {
    scale: 1,
    backgroundColor: '#121314',
    color: '#ffffff',
    borderColor: '#121314',
  },
  hover: {
    scale: 1.03,
    backgroundColor: '#ffffff',
    color: '#121314',
    borderColor: '#121314',
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
};

const workIconVariants = {
  rest: {
    backgroundColor: '#ffffff',
    color: '#121314',
  },
  hover: {
    backgroundColor: '#121314',
    color: '#ffffff',
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Header() {
  const [isWorkHovered, setIsWorkHovered] = useState(false);

  return (
    <header className="relative z-50">
      <div className="mx-auto flex h-24 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" className="brand-logo uppercase">
          Arclight
        </a>

        <nav className="hidden items-center gap-10 text-[13px] font-bold text-ink/80 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="group flex origin-center items-start gap-1 hover:text-ink"
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={{
                rest: { scale: 1 },
                hover: {
                  scale: 1.08,
                  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <span className="flex overflow-hidden leading-none">
                {item.label.split('').map((letter, index) => (
                  <motion.span
                    key={`${item.label}-${letter}-${index}`}
                    custom={index}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              <sup className="text-[9px] text-ink/50 group-hover:text-ink">{item.number}</sup>
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="#projects"
          className="inline-flex h-9 items-center gap-1.5 rounded-full border px-1.5 pr-4 text-[12px] font-bold shadow-soft"
          onHoverStart={() => setIsWorkHovered(true)}
          onHoverEnd={() => setIsWorkHovered(false)}
          initial="rest"
          animate="rest"
          whileHover="hover"
          variants={workButtonVariants}
        >
          <span className="relative size-7 overflow-hidden rounded-full bg-white">
            <motion.img
              key={isWorkHovered ? 'hover' : 'rest'}
              src={isWorkHovered ? '/images/person-two.svg' : '/images/person-one.svg'}
              alt=""
              className="size-full object-cover"
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            />
          </span>
          <motion.span
            className="grid size-6 place-items-center rounded-full ring-1 ring-ink/5"
            variants={workIconVariants}
          >
            <ArrowUpRight size={14} strokeWidth={2.4} />
          </motion.span>
          View Selected Work
        </motion.a>
      </div>
    </header>
  );
}
