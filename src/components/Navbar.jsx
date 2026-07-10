import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", number: "01", to: "/" },
  { label: "Projects", number: "02", to: "/projects" },
  { label: "Contact", number: "03", to: "/contact" },
];

const MotionLink = motion(Link);

function RollingNavLink({ item, active, onClick }) {
  return (
    <MotionLink
      to={item.to}
      onClick={onClick}
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={`group relative inline-flex items-start text-base font-semibold text-ink ${active ? "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-ink" : ""}`}
    >
      <span className="relative block h-5 overflow-hidden leading-5">
        <motion.span
          className="block"
          variants={{ rest: { y: 0 }, hover: { y: "-100%" } }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {item.label}
        </motion.span>
        <motion.span
          className="absolute left-0 top-full block"
          variants={{ rest: { y: 0 }, hover: { y: "-100%" } }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {item.label}
        </motion.span>
      </span>
      <span className="absolute -right-5 -top-3 text-xs font-semibold leading-none text-ink/45">{item.number}</span>
    </MotionLink>
  );
}

function NavCta() {
  return (
    <MotionLink
      to="/projects"
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      className="group relative flex items-center"
    >
      <span className="relative z-20 h-11 w-11 overflow-hidden rounded-full border-2 border-paper bg-cyan">
        <img src="/images/nav-avatar.svg" alt="" className="h-full w-full object-cover" />
      </span>
      <span className="relative z-30 -ml-2 grid h-6 w-6 place-items-center rounded-full border-2 border-paper bg-paper text-ink">
        <Plus className="h-4 w-4" strokeWidth={2.4} />
      </span>
      <span className="relative -ml-2 inline-flex h-11 min-w-[188px] items-center overflow-hidden rounded-full bg-ink px-8 pl-7 text-base font-semibold text-paper">
        <motion.span
          className="absolute inset-0 bg-paper"
          variants={{
            rest: { clipPath: "inset(0 100% 0 0 round 999px)" },
            hover: { clipPath: "inset(0 0% 0 0 round 999px)" },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <span className="relative grid h-5 overflow-hidden leading-5">
          <motion.span
            variants={{ rest: { y: 0, color: "#e9e9e9" }, hover: { y: "-100%", color: "#171717" } }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            [View Selected Work]
          </motion.span>
          <motion.span
            className="absolute left-0 top-full text-ink"
            variants={{ rest: { y: 0 }, hover: { y: "-100%" } }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            [View Selected Work]
          </motion.span>
        </span>
      </span>
    </MotionLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const previous = scrollY.getPrevious() || 0;
      setHidden(latest > previous && latest > 160);
    });
  }, [scrollY]);

  return (
    <motion.header
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 text-ink"
    >
      <nav className="container-page flex h-20 items-center justify-between gap-6">
        <Link to="/" className="text-2xl font-black uppercase leading-none tracking-normal text-ink">
          ARCLIGHT
        </Link>
        <div className="hidden items-center gap-14 md:flex">
          {navItems.map((item) => (
            <RollingNavLink key={item.to} item={item} active={location.pathname === item.to} />
          ))}
        </div>
        <div className="hidden md:block">
          <NavCta />
        </div>
        <button type="button" onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center rounded-full border border-ink/14 md:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-paper p-6 text-ink md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black uppercase leading-none">ARCLIGHT</span>
              <button type="button" onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full border border-ink/14" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }} className="mt-20 grid gap-5">
              {navItems.map((item) => (
                <motion.div key={item.to} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                  <Link to={item.to} onClick={() => setOpen(false)} className="relative inline-flex text-5xl font-black">
                    {item.label}
                    <span className="absolute -right-8 -top-2 text-sm text-ink/45">{item.number}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
