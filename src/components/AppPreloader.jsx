import { motion } from "framer-motion";

export default function AppPreloader() {
  return (
    <motion.div
      className="app-preloader fixed inset-0 z-[999] grid place-items-center overflow-hidden bg-paper text-ink"
      initial={false}
    >
      <div className="preloader-bg pointer-events-none absolute inset-0" />
      <div className="preloader-noise pointer-events-none absolute inset-0" />

      <motion.div
        className="preloader-mark relative z-10 flex -translate-y-[2vh] flex-col items-center text-center"
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="font-sans text-[clamp(58px,7.1vw,102px)] font-bold uppercase leading-[0.78] tracking-[-0.05em] text-ink"
          initial={{ letterSpacing: "-0.12em" }}
          animate={{ letterSpacing: "-0.05em" }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          ARCLIGHT
          <span className="ml-[0.08em] align-[0.18em] font-sans text-[0.24em] font-bold tracking-[-0.04em]">®</span>
        </motion.p>
        <motion.p
          className="mt-5 font-mono text-[clamp(12px,1.1vw,18px)] font-medium leading-none tracking-[-0.03em] text-ink max-[700px]:mt-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: [0, 1, 1, 0], y: [14, 0, 0, -10] }}
          transition={{ duration: 2.05, times: [0, 0.24, 0.76, 1], ease: [0.22, 1, 0.36, 1] }}
        >
          We Build White-Label Digital Experiences
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
