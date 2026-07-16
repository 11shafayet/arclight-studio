import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const stats = ["6+ Years Experience", "Wordpress", "Framer", "NDA Friendly"];
const audiences = ["FOR BRANDING STUDIOS", "FOR WEB DESIGN AGENCIES"];

function HeroButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to="/contact"
      className="group relative inline-flex h-[34px] min-w-[206px] items-center overflow-hidden rounded-full bg-ink pr-[16px] text-[16px] font-medium leading-none tracking-[-0.8px] text-white transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(23,23,23,0.22)]"
      onPointerEnter={() => {
        setHovered(true);
      }}
      onPointerLeave={() => {
        setHovered(false);
      }}
    >
      <span className="relative z-20 grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full border border-ink bg-white text-ink">
        <motion.span
          animate={{ rotate: hovered ? 135 : 0, scale: hovered ? 0.92 : 1 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          <Plus className="h-[16px] w-[16px]" strokeWidth={2} />
        </motion.span>
      </span>
      <span className="relative z-20 ml-[9px] grid h-5 overflow-hidden leading-5 text-white">
        <motion.span
          className="text-white"
          animate={{ y: hovered ? "-100%" : "0%" }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          [ Send a Test Project ]
        </motion.span>
        <motion.span
          className="absolute left-0 top-full text-white"
          animate={{ y: hovered ? "-100%" : "0%" }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          [ Send a Test Project ]
        </motion.span>
      </span>
    </Link>
  );
}

function AudienceRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % audiences.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="relative block h-[40px] w-[540px] overflow-hidden max-[900px]:h-9 max-[900px]:w-[min(100vw-48px,460px)] max-[480px]:h-[32px] max-[480px]:w-full">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={audiences[index]}
          className="absolute inset-0 flex justify-end whitespace-nowrap max-[760px]:justify-start"
          initial="enter"
          animate="center"
          exit="exit"
          variants={{
            enter: { transition: { staggerChildren: 0.014, staggerDirection: 1 } },
            center: { transition: { staggerChildren: 0.014, staggerDirection: 1 } },
            exit: { transition: { staggerChildren: 0.014, staggerDirection: 1 } },
          }}
        >
          {Array.from(audiences[index]).map((letter, letterIndex) => (
            <motion.span
              key={`${audiences[index]}-${letterIndex}`}
              className="inline-block"
              variants={{
                enter: { y: "105%" },
                center: { y: "0%" },
                exit: { y: "-105%" },
              }}
              transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
            >
              {letter === " " ? "\u00a0" : letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-visible pb-[60px] text-ink max-[809px]:pb-12">
      <div className="hero-container relative z-10 mx-auto w-[calc(100%-120px)] max-w-[1440px] pt-[210px] max-[900px]:w-[calc(100%-48px)] max-[809px]:pt-[128px] max-[480px]:w-[calc(100%-32px)] max-[480px]:pt-[112px]">
        <div className="flex items-start justify-between gap-8 text-[clamp(14px,1.25vw,18px)] font-medium leading-[1.2] tracking-[-0.55px] text-[rgb(23,23,23)] max-[700px]:gap-4 max-[700px]:text-[12px] max-[480px]:grid max-[480px]:gap-2">
          <p className="uppercase">WHITE-LABEL WORDPRESS &amp; FRAMER DEVELOPMENT</p>
          <p className="whitespace-nowrap max-[760px]:hidden">Working Worldwide</p>
        </div>

        <motion.h1
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="hero-headline mt-[22px] whitespace-nowrap font-sans font-bold uppercase text-ink max-[760px]:whitespace-normal max-[760px]:text-[40px] max-[760px]:leading-[0.94]"
        >
          WE BUILD. YOU TAKE THE CREDIT.
        </motion.h1>

        <div className="mt-[19px] grid grid-cols-[auto_1fr] items-start gap-x-8 max-[760px]:mt-3 max-[760px]:grid-cols-1">
          <div className="max-[760px]:hidden">
            <HeroButton />
          </div>
          <p className="justify-self-end whitespace-nowrap pt-[2px] text-right text-[34px] font-bold uppercase leading-[1.08] tracking-[-1.58px] max-[900px]:text-[30px] max-[760px]:mt-3 max-[760px]:justify-self-start max-[760px]:text-left max-[480px]:w-full max-[480px]:text-[25px] max-[480px]:tracking-[-1.1px]">
            <AudienceRotator />
          </p>
        </div>

        <div className="mt-[64px] grid grid-cols-[1fr_auto] items-start gap-8 max-[760px]:mt-6 max-[760px]:grid-cols-1">
          <p className="max-w-[560px] text-[22px] font-medium leading-[26.4px] tracking-[-1px] text-[rgb(23,23,23)] max-[480px]:text-[18px] max-[480px]:leading-[22px]">
            We build your client sites under your brand.
            <br />
            You keep the relationship, the credit, and the margin.
          </p>
          <div className="hidden max-[760px]:block">
            <HeroButton />
          </div>
          <div className="flex flex-wrap items-center justify-end gap-x-[15px] gap-y-2 pt-[14px] text-[14px] font-medium leading-[16.8px] tracking-[-0.35px] text-[rgb(57,57,57)] max-[760px]:justify-start">
            {stats.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
