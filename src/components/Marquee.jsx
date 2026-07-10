import { motion } from "framer-motion";
import { useState } from "react";

export default function Marquee({ items }) {
  const [paused, setPaused] = useState(false);
  const doubled = [...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden border-y border-ink/10 py-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex w-max items-center gap-14"
        animate={{ x: paused ? undefined : ["0%", "-33.333%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, index) => (
          <a
            key={`${item}-${index}`}
            href="#worked-with"
            className="whitespace-nowrap text-2xl font-black lowercase text-ink/65 transition-colors hover:text-ink md:text-5xl"
          >
            {item}
          </a>
        ))}
      </motion.div>
    </div>
  );
}
