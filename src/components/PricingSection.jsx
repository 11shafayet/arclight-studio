import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function PricingButton() {
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

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-[100px] text-ink max-[900px]:py-16 max-[480px]:py-12"
      style={{
        background:
          "radial-gradient(88rem 34rem at 50% 100%, rgba(255, 79, 79, 0.22), transparent 70%), #e0e0e0",
      }}
    >
      <div className="mx-auto w-[calc(100%-120px)] max-w-[1440px] max-[900px]:w-[calc(100%-48px)] max-[480px]:w-[calc(100%-32px)]">
        <div className="flex flex-col items-center text-center">
          <p className="font-mono text-[14px] font-medium uppercase leading-[21px] tracking-[-0.8px] text-ink">[04]</p>
          <p className="mt-[28px] font-mono text-[14px] font-medium uppercase leading-[21px] tracking-[-0.8px] text-ink">Pricing</p>
          <h2 className="mt-[20px] text-[48px] font-bold uppercase leading-[56px] tracking-[-2px] text-ink max-[480px]:text-[34px] max-[480px]:leading-[38px] max-[480px]:tracking-[-1.4px]">
            Start with One Page.
          </h2>
        </div>

        <div className="mt-[52px] w-full rounded-[18px] border border-white/35 bg-white/15 p-[20px] shadow-[0_1px_0_rgba(23,23,23,0.03)] backdrop-blur-[1px] max-[900px]:mt-10 max-[900px]:p-4 max-[480px]:rounded-[12px] max-[480px]:p-2.5">
          <div className="rounded-[14px] border border-white/60 bg-white/72 px-[28px] py-[48px] text-center shadow-[0_0_0_1px_rgba(255,255,255,0.18)_inset] max-[900px]:px-5 max-[900px]:py-10 max-[480px]:rounded-[10px] max-[480px]:px-4 max-[480px]:py-8">
            <p className="font-sans text-[28px] font-semibold uppercase leading-[40px] tracking-[-1px] text-ink max-[480px]:text-[24px] max-[480px]:leading-[30px]">
              Test page starts from
            </p>
            <p className="mt-[16px] text-[48px] font-bold leading-[56px] tracking-[-2px] text-ink max-[480px]:text-[38px] max-[480px]:leading-[42px]">
              $300
            </p>
            <p className="mx-auto mt-[16px] max-w-[680px] text-[18px] font-medium leading-[21.6px] tracking-[-1px] text-[rgb(69,69,69)] max-[480px]:text-[16px] max-[480px]:leading-[19.2px]">
              Includes a full responsive build of one approved design desktop, tablet, and mobile with QA and white-label handoff.
            </p>
            <div className="mt-[18px] flex justify-center">
              <PricingButton />
            </div>
            <p className="mt-[38px] text-[12px] font-medium leading-[14.4px] tracking-[0.5px] text-[rgb(102,102,102)]">
              No retainer. No commitment. If the build isn&apos;t up to standard, don&apos;t pay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
