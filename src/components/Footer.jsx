import { motion } from "framer-motion";
import { useState } from "react";

const primaryLinks = ["Home", "Projects", "Contact", "Work"];
const socialLinks = ["X.Com", "Instagram", "Linkedin"];

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

function FooterLink({ children, href = "#" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      className="relative block w-fit text-[18px] font-medium leading-[20px] tracking-[-0.8px] text-white"
    >
      <span className="sr-only">{children}</span>
      <RollingLetters text={children} hovered={hovered} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[rgb(23,23,23)] text-white">
      <div
        className="pointer-events-none absolute bottom-[-210px] left-1/2 h-[360px] w-[1500px] -translate-x-1/2 opacity-80 blur-[58px]"
        style={{
          background:
            "radial-gradient(60% 90.909% at 49.6% 52.3%, rgb(89, 187, 213) 0%, rgba(10, 10, 10, 0) 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[584px] w-[calc(100%-120px)] max-w-[1440px] flex-col pt-[66px] max-[900px]:min-h-[520px] max-[900px]:w-[calc(100%-48px)]">
        <div className="grid grid-cols-[minmax(0,1fr)_180px_180px] gap-[150px] max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div>
            <p className="font-mono text-[14px] font-medium uppercase leading-[21px] tracking-[-0.8px] text-white/50">
              Lets Talk
            </p>
            <a
              href="mailto:contact@arclightstudio.org"
              className="mt-[22px] block w-fit text-[36px] font-semibold uppercase leading-[44px] tracking-[-1px] text-white max-[720px]:text-[30px]"
            >
              contact@arclightstudio.org
            </a>
          </div>

          <nav className="flex flex-col gap-[18px]">
            {primaryLinks.map((link) => (
              <FooterLink key={link}>{link}</FooterLink>
            ))}
          </nav>

          <nav className="flex flex-col gap-[18px]">
            {socialLinks.map((link) => (
              <FooterLink key={link}>{link}</FooterLink>
            ))}
          </nav>
        </div>

        <div className="mt-auto pb-[42px]">
          <div className="relative">
            <h2 className="whitespace-nowrap text-center text-[clamp(72px,10.6vw,160px)] font-bold uppercase leading-[0.8] tracking-[-4px] text-white max-[900px]:whitespace-normal max-[900px]:text-[clamp(58px,13vw,104px)]">
              Arclight Studio
            </h2>
            <span className="absolute right-0 top-[18%] text-[24px] font-bold leading-none text-white max-[900px]:static max-[900px]:ml-2">
              ®
            </span>
          </div>

          <p className="mt-[82px] text-center font-mono text-[14px] font-medium uppercase leading-[21px] tracking-[-0.8px] text-white/50 max-[900px]:mt-10">
            ©2026 <span className="text-white">Arclight</span>.All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
