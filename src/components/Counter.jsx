import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Counter({ target, suffix = "+", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, target, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [inView, target, value]);

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
}
