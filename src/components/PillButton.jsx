import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

export default function PillButton({ children, to, href, dark = false, dot = false, className = "" }) {
  const classes = `group inline-flex items-center justify-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
    dark
      ? "border-paper bg-paper text-ink hover:bg-transparent hover:text-paper"
      : "border-paper/20 bg-ink text-paper hover:bg-paper hover:text-ink"
  } ${className}`;
  const content = (
    <>
      {dot && <span className="h-2 w-2 rounded-full bg-acid shadow-[0_0_18px_rgba(205,255,112,0.85)]" />}
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.035 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 420, damping: 28 },
    className: classes,
  };

  if (to) {
    return (
      <MotionLink to={to} {...motionProps}>
        {content}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type="submit" {...motionProps}>
      {content}
    </motion.button>
  );
}
