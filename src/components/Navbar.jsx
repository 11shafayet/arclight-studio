import { AnimatePresence, motion } from "framer-motion";
import { Menu, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", number: "01", to: "/" },
  { label: "Projects", number: "02", to: "/projects" },
  { label: "Contact", number: "03", to: "/contact" },
];

const mobileSocialLinks = [
  { label: "Linkedin", href: "https://www.linkedin.com/in/farzana-design/" },
  { label: "Instagram", href: "https://www.instagram.com/arclightstudio/" },
  { label: "Email", href: "mailto:contact@arclightstudio.org" },
  { label: "Dribbble", href: "https://dribbble.com/arclightstudio" },
];

const MotionLink = motion(Link);

const textRollTransition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1],
};

function RollingLetters({ text, hovered }) {
  return (
    <motion.span
      className="relative flex h-5 overflow-hidden leading-5"
      animate={hovered ? "hover" : "rest"}
      variants={{
        rest: { transition: { staggerChildren: 0.018, staggerDirection: -1 } },
        hover: { transition: { staggerChildren: 0.018, staggerDirection: 1 } },
      }}
      aria-hidden="true"
    >
      {Array.from(text).map((letter, index) => (
        <span key={`${letter}-${index}`} className="relative inline-block overflow-hidden">
          <motion.span
            className="block"
            variants={{ rest: { y: 0 }, hover: { y: "-100%" } }}
            transition={textRollTransition}
          >
            {letter === " " ? "\u00a0" : letter}
          </motion.span>
          <motion.span
            className="absolute left-0 top-full block"
            variants={{ rest: { y: 0 }, hover: { y: "-100%" } }}
            transition={textRollTransition}
          >
            {letter === " " ? "\u00a0" : letter}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

function RollingNavLink({ item, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <MotionLink
      to={item.to}
      onClick={onClick}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      className="group relative inline-flex items-start text-[18px] font-medium leading-5 tracking-[-0.8px] text-ink"
    >
      <span className="sr-only">{item.label}</span>
      <RollingLetters text={item.label} hovered={hovered} />
      <span className="absolute -right-[18px] -top-[7px] font-mono text-[11px] font-medium leading-none tracking-[-0.2px] text-[#666]">{item.number}</span>
      <motion.span
        className="absolute -bottom-[5px] left-0 h-px w-full origin-left bg-ink"
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      />
    </MotionLink>
  );
}

function NavCta() {
  const [hovered, setHovered] = useState(false);
  const [clipOrigin, setClipOrigin] = useState({ x: 0, y: 24 });

  function updateClipOrigin(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setClipOrigin({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    });
  }

  return (
    <MotionLink
      to="/projects"
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      className="group relative inline-flex h-12 min-w-[232px] items-center overflow-hidden rounded-full bg-ink pr-5 text-[16px] font-medium leading-none tracking-[-0.75px] text-white"
      onPointerEnter={(event) => {
        updateClipOrigin(event);
        setHovered(true);
      }}
      onPointerMove={updateClipOrigin}
      onPointerLeave={(event) => {
        updateClipOrigin(event);
        setHovered(false);
      }}
    >
      <motion.span
        className="absolute inset-0 bg-paper"
        animate={{
          clipPath: hovered
            ? `circle(150% at ${clipOrigin.x}px ${clipOrigin.y}px)`
            : `circle(0px at ${clipOrigin.x}px ${clipOrigin.y}px)`,
        }}
        transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
      />
      <span className="relative z-20 h-12 w-12 shrink-0 overflow-hidden rounded-full border-[3px] border-white bg-cyan">
        <motion.span
          className="block h-full w-full"
          animate={{ y: hovered ? "-100%" : "0%" }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src="/images/nav-avatar.png" alt="" className="h-full w-full object-cover" />
          <img src="/images/nav-avatar.png" alt="" className="h-full w-full object-cover" />
        </motion.span>
      </span>
      <span className="relative z-30 -ml-[11px] grid h-[22px] w-[22px] shrink-0 place-items-center overflow-hidden rounded-full bg-white text-ink">
        <motion.span
          className="grid h-full w-full place-items-center"
          animate={{ rotate: hovered ? 135 : 0, scale: hovered ? 0.92 : 1 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          <Plus className="h-[15px] w-[15px]" strokeWidth={2.2} />
        </motion.span>
      </span>
      <span className="relative z-20 ml-2.5 grid h-5 overflow-hidden leading-5 text-white">
          <motion.span
            className="text-white"
            animate={{ y: hovered ? "-100%" : "0%", color: hovered ? "#171717" : "#ffffff" }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            [View Selected Work]
          </motion.span>
          <motion.span
            className="absolute left-0 top-full text-ink"
            animate={{ y: hovered ? "-100%" : "0%" }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            [View Selected Work]
          </motion.span>
      </span>
    </MotionLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <motion.header className="absolute inset-x-0 top-0 z-50 text-ink">
      <nav className="relative mx-auto flex h-28 w-[calc(100%-120px)] max-w-[1440px] items-center justify-between gap-6 max-[900px]:w-[calc(100%-48px)] max-[809px]:h-[88px] max-[480px]:w-[calc(100%-32px)]">
        <Link to="/" className="font-logo origin-left scale-x-[0.84] text-[32px] font-normal uppercase leading-none tracking-[-1px] text-ink">
          arclight
        </Link>
        <div className="absolute left-[44%] hidden -translate-x-1/2 items-center gap-[46px] min-[810px]:flex">
          {navItems.map((item) => (
            <RollingNavLink key={item.to} item={item} />
          ))}
        </div>
        <div className="hidden min-[810px]:block">
          <NavCta />
        </div>
        <button type="button" onClick={() => setOpen(true)} className="hidden h-6 w-8 place-items-center max-[809px]:grid" aria-label="Open menu">
          <Menu className="h-6 w-6" strokeWidth={2} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex h-dvh flex-col overflow-hidden bg-paper px-6 py-7 text-ink min-[810px]:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-logo origin-left scale-x-[0.84] text-[32px] uppercase leading-none tracking-[-1px]">arclight</span>
              <button type="button" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-ink/14" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }} className="mt-16 grid gap-4">
              {navItems.map((item) => (
                <motion.div key={item.to} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                  <Link to={item.to} onClick={() => setOpen(false)} className="relative inline-flex text-[38px] font-black leading-[0.95] tracking-[-1.8px]">
                    {item.label}
                    <span className="absolute -right-7 -top-1 font-mono text-[12px] font-medium leading-none tracking-[-0.2px] text-ink/45">{item.number}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <nav className="mt-auto grid grid-cols-2 gap-x-8 gap-y-4 border-t border-ink/10 pt-6 font-mono text-[13px] font-medium uppercase leading-[15.6px] tracking-[-0.35px] text-ink">
              {mobileSocialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="w-fit"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
